import { Component, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { MarketFeedService, Instrument } from '../../core/services/market-feed.service';
import { SparklineComponent } from '../../shared/components/sparkline/sparkline.component';

interface MarketSession {
  name:     string;
  city:     string;
  openUTC:  number;
  closeUTC: number;
  flag:     string;
  color:    string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, SparklineComponent, DatePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit, OnDestroy {
  private feedSvc = inject(MarketFeedService);

  instruments = signal<Instrument[]>([]);
  now         = signal(new Date());

  private sub:   Subscription | null = null;
  private clock: ReturnType<typeof setInterval> | null = null;

  // ── Market Sessions ────────────────────────────────────────────────────
  readonly sessions: MarketSession[] = [
    { name: 'Sydney',   city: 'Sydney, AU',   openUTC: 22, closeUTC: 7,  flag: '🇦🇺', color: '#6366F1' },
    { name: 'Tokyo',    city: 'Tokyo, JP',    openUTC: 0,  closeUTC: 9,  flag: '🇯🇵', color: '#F59E0B' },
    { name: 'London',   city: 'London, UK',   openUTC: 8,  closeUTC: 17, flag: '🇬🇧', color: '#3B82F6' },
    { name: 'New York', city: 'New York, US', openUTC: 13, closeUTC: 22, flag: '🇺🇸', color: '#00B8A0' },
  ];

  isSessionOpen(s: MarketSession): boolean {
    const h = this.now().getUTCHours();
    if (s.openUTC < s.closeUTC) return h >= s.openUTC && h < s.closeUTC;
    return h >= s.openUTC || h < s.closeUTC;
  }

  timeUntil(s: MarketSession): string {
    const h       = this.now().getUTCHours();
    const m       = this.now().getUTCMinutes();
    const total   = h * 60 + m;
    const open    = s.openUTC  * 60;
    const close   = s.closeUTC * 60;
    let diff: number;
    if (this.isSessionOpen(s)) {
      diff = close > total ? close - total : close + 1440 - total;
    } else {
      diff = open > total ? open - total : open + 1440 - total;
    }
    return `${String(Math.floor(diff / 60)).padStart(2, '0')}h ${String(diff % 60).padStart(2, '0')}m`;
  }

  get londonNYOverlap(): boolean {
    const h = this.now().getUTCHours();
    return h >= 13 && h < 17;
  }

  // ── Risk / Position-Size Calculator ───────────────────────────────────
  balance  = 10000;
  riskPct  = 1;
  entry    = 1.08500;
  stopLoss = 1.08000;
  tpPrice  = 1.09000;

  get riskAmt():   number { return this.balance * (this.riskPct / 100); }
  get pipDiff():   number { return Math.abs(this.entry - this.stopLoss); }
  get tpPips():    number { return Math.abs(this.tpPrice - this.entry); }
  get lotSize():   number { return this.pipDiff > 0 ? this.riskAmt / (this.pipDiff * 100000) : 0; }
  get rrRatio():   number { return this.pipDiff > 0 ? this.tpPips / this.pipDiff : 0; }
  get potentialP(): number { return this.lotSize * this.tpPips * 100000 * 0.0001 * 10; }

  get riskBarPct(): number {
    const max = 5;
    return Math.min((this.riskPct / max) * 100, 100);
  }
  get riskLevel(): string {
    if (this.riskPct <= 1) return 'Conservative';
    if (this.riskPct <= 2) return 'Moderate';
    if (this.riskPct <= 3) return 'Aggressive';
    return 'High Risk';
  }
  get riskColor(): string {
    if (this.riskPct <= 1) return '#22C55E';
    if (this.riskPct <= 2) return '#F59E0B';
    if (this.riskPct <= 3) return '#F97316';
    return '#EF4444';
  }

  // ── Helpers ───────────────────────────────────────────────────────────
  fmt(price: number, digits: number): string {
    return price.toFixed(digits);
  }

  fmtChange(v: number, digits: number): string {
    return (v >= 0 ? '+' : '') + v.toFixed(digits);
  }

  fmtPct(v: number): string {
    return (v >= 0 ? '+' : '') + v.toFixed(2) + '%';
  }

  spreadPips(inst: Instrument): string {
    const raw = (inst.ask - inst.bid) * Math.pow(10, inst.digits - 1);
    return raw.toFixed(1);
  }

  trackBySymbol(_: number, inst: Instrument) { return inst.symbol; }

  // ── Lifecycle ─────────────────────────────────────────────────────────
  ngOnInit() {
    this.clock = setInterval(() => this.now.set(new Date()), 1000);
    this.sub   = this.feedSvc.feed$.subscribe(data => this.instruments.set(data));
  }

  ngOnDestroy() {
    if (this.clock) clearInterval(this.clock);
    this.sub?.unsubscribe();
  }
  
}

import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketDataService } from '../../../core/services/market-data.service';

@Component({
  selector: 'app-price-ticker',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ticker-wrap" aria-label="Live market prices">
      <div class="ticker-track">
        <ng-container *ngFor="let inst of instruments(); let i = index">
          <span class="tick" [class.up]="inst.changePct > 0" [class.down]="inst.changePct < 0">
            <span class="tick-symbol">{{ inst.symbol }}</span>
            <strong class="tick-price">{{ inst.price | number:'1.2-5' }}</strong>
            <em class="tick-change">{{ inst.changePct > 0 ? '+' : '' }}{{ inst.changePct | number:'1.2-2' }}%</em>
          </span>
        </ng-container>
        <!-- duplicate for seamless scroll -->
        <ng-container *ngFor="let inst of instruments()">
          <span class="tick" [class.up]="inst.changePct > 0" [class.down]="inst.changePct < 0" aria-hidden="true">
            <span class="tick-symbol">{{ inst.symbol }}</span>
            <strong class="tick-price">{{ inst.price | number:'1.2-5' }}</strong>
            <em class="tick-change">{{ inst.changePct > 0 ? '+' : '' }}{{ inst.changePct | number:'1.2-2' }}%</em>
          </span>
        </ng-container>
      </div>
    </div>
  `,
  styles: [`
    .ticker-wrap {
      background: var(--dark-2); border-bottom: 1px solid var(--border);
      padding: 8px 0; overflow: hidden;
    }
    .ticker-track {
      display: flex; gap: 40px; width: max-content;
      animation: ticker-scroll 35s linear infinite;
    }
    .ticker-track:hover { animation-play-state: paused; }
    .tick {
      display: inline-flex; align-items: center; gap: 8px;
      font-size: 12px; font-family: var(--mono); white-space: nowrap;
      color: var(--text-muted);
    }
    .tick-symbol { color: var(--text-dim); font-weight: 500; }
    .tick-price  { color: var(--text); }
    .tick.up  .tick-change { color: var(--up);   font-style: normal; }
    .tick.down .tick-change { color: var(--down); font-style: normal; }
  `]
})
export class PriceTickerComponent {
  private marketData = inject(MarketDataService);
  instruments = this.marketData.instruments;
}

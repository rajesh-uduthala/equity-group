import { Injectable, signal } from '@angular/core';
import { Instrument } from '../models/market.model';

@Injectable({ providedIn: 'root' })
export class MarketDataService {
  private _instruments = signal<Instrument[]>([
    { symbol: 'EUR/USD', displayName: 'Euro / US Dollar',   price: 1.08470, change: 0.00130, changePct: 0.12,  bid: 1.08462, ask: 1.08478, spread: 0.8, category: 'forex' },
    { symbol: 'GBP/USD', displayName: 'British Pound / USD',price: 1.26310, change:-0.00101, changePct:-0.08,  bid: 1.26302, ask: 1.26318, spread: 1.0, category: 'forex' },
    { symbol: 'USD/JPY', displayName: 'US Dollar / Yen',    price: 154.220, change: 0.47820, changePct: 0.31,  bid: 154.210, ask: 154.230, spread: 1.2, category: 'forex' },
    { symbol: 'XAU/USD', displayName: 'Gold / US Dollar',   price: 2318.40, change: 12.5200, changePct: 0.54,  bid: 2318.10, ask: 2318.70, spread: 0.3, category: 'commodities' },
    { symbol: 'US30',    displayName: 'Dow Jones 30',        price: 38412.0, change:-84.5000, changePct:-0.22,  bid: 38408.0, ask: 38416.0, spread: 1.5, category: 'indices' },
    { symbol: 'NAS100',  displayName: 'NASDAQ 100',          price: 17764.0, change: 118.300, changePct: 0.67,  bid: 17762.0, ask: 17766.0, spread: 1.8, category: 'indices' },
    { symbol: 'BTC/USD', displayName: 'Bitcoin / USD',       price: 62480.0, change:-694.200, changePct:-1.10,  bid: 62460.0, ask: 62500.0, spread: 2.5, category: 'crypto' },
    { symbol: 'OIL/USD', displayName: 'Crude Oil / USD',     price: 78.3400, change: 0.68400, changePct: 0.88,  bid: 78.3200, ask: 78.3600, spread: 0.4, category: 'commodities' },
    { symbol: 'AUD/USD', displayName: 'Aussie / US Dollar',  price: 0.65410, change: 0.00098, changePct: 0.15,  bid: 0.65404, ask: 0.65416, spread: 0.9, category: 'forex' },
    { symbol: 'ETH/USD', displayName: 'Ethereum / USD',      price: 3124.50, change: 28.0200, changePct: 0.90,  bid: 3123.50, ask: 3125.50, spread: 3.0, category: 'crypto' },
  ]);

  readonly instruments = this._instruments.asReadonly();

  startLivePrices(): void {
    setInterval(() => {
      this._instruments.update(list =>
        list.map(inst => {
          const delta = (Math.random() - 0.49) * inst.price * 0.0003;
          const newPrice = +(inst.price + delta).toFixed(inst.price > 100 ? 2 : 5);
          const newChangePct = +(inst.changePct + (Math.random() - 0.5) * 0.02).toFixed(2);
          return {
            ...inst,
            price: newPrice,
            bid: +(newPrice - inst.spread * 0.0001).toFixed(inst.price > 100 ? 2 : 5),
            ask: +(newPrice + inst.spread * 0.0001).toFixed(inst.price > 100 ? 2 : 5),
            changePct: newChangePct,
            change: +(inst.change + delta).toFixed(inst.price > 100 ? 2 : 5),
          };
        })
      );
    }, 1200);
  }
}

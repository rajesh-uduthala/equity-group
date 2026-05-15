import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { scan, shareReplay } from 'rxjs/operators';

export interface Instrument {
  symbol:    string;
  name:      string;
  category:  string;
  price:     number;
  prevPrice: number;
  change:    number;
  changePct: number;
  high:      number;
  low:       number;
  bid:       number;
  ask:       number;
  history:   number[];
  digits:    number;
}

interface InstrumentConfig {
  name:       string;
  category:   string;
  price:      number;
  digits:     number;
  volatility: number;
  spread:     number;
}

@Injectable({ providedIn: 'root' })
export class MarketFeedService {

  private readonly configs: Record<string, InstrumentConfig> = {
    'EURUSD': { name: 'Euro / US Dollar',  category: 'Forex',      price: 1.08524, digits: 5, volatility: 0.00012, spread: 0.00006 },
    'GBPUSD': { name: 'Pound / US Dollar', category: 'Forex',      price: 1.26483, digits: 5, volatility: 0.00015, spread: 0.00009 },
    'USDJPY': { name: 'US Dollar / Yen',   category: 'Forex',      price: 149.512, digits: 3, volatility: 0.012,   spread: 0.007   },
    'XAUUSD': { name: 'Gold / US Dollar',  category: 'Commodity',  price: 2318.45, digits: 2, volatility: 0.42,    spread: 0.30    },
    'XTIUSD': { name: 'WTI Crude Oil',     category: 'Commodity',  price: 78.62,   digits: 2, volatility: 0.07,    spread: 0.05    },
    'US30':   { name: 'Dow Jones 30',      category: 'Index',      price: 38950.0, digits: 1, volatility: 4.5,     spread: 2.0     },
    'BTCUSD': { name: 'Bitcoin / USD',     category: 'Crypto',     price: 62480.0, digits: 1, volatility: 85.0,    spread: 15.0    },
    'NAS100': { name: 'NASDAQ 100',        category: 'Index',      price: 17820.0, digits: 1, volatility: 3.2,     spread: 1.5     },
  };

  private buildSeed(): Instrument[] {
    return Object.entries(this.configs).map(([symbol, cfg]) => ({
      symbol,
      name:      cfg.name,
      category:  cfg.category,
      price:     cfg.price,
      prevPrice: cfg.price,
      change:    0,
      changePct: 0,
      high:      cfg.price,
      low:       cfg.price,
      bid:       cfg.price,
      ask:       cfg.price + cfg.spread,
      history:   Array(40).fill(cfg.price),
      digits:    cfg.digits,
    }));
  }

  readonly feed$: Observable<Instrument[]> = interval(600).pipe(
    scan((state: Instrument[]) => state.map(inst => {
      const cfg   = this.configs[inst.symbol];
      const move  = (Math.random() - 0.499) * cfg.volatility * 2;
      const price = Math.max(inst.price + move, cfg.price * 0.8);
      return {
        ...inst,
        prevPrice: inst.price,
        price,
        change:    price - cfg.price,
        changePct: ((price - cfg.price) / cfg.price) * 100,
        high:      Math.max(inst.high, price),
        low:       Math.min(inst.low,  price),
        bid:       price,
        ask:       price + cfg.spread,
        history:   [...inst.history.slice(-39), price],
      };
    }), this.buildSeed()),
    shareReplay(1)
  );
}

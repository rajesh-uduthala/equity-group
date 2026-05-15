export interface Instrument {
  symbol: string;
  displayName: string;
  price: number;
  change: number;
  changePct: number;
  bid: number;
  ask: number;
  spread: number;
  category: 'forex' | 'indices' | 'commodities' | 'crypto' | 'stocks';
}

export interface MarketCategory {
  id: string;
  label: string;
  icon: string;
  description: string;
  instruments: Instrument[];
}

export type TrendDirection = 'up' | 'down' | 'neutral';

export interface AccountType {
  id: string;
  name: string;
  minDeposit: number;
  spreadFrom: string;
  leverage: string;
  features: string[];
  featured?: boolean;
}

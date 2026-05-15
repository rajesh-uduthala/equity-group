# Live Market Dashboard — Technical Documentation

> **Route:** `/dashboard`
> **Access:** Navbar → Insights → Live Dashboard

---

## 1. Overview

The Live Market Dashboard is a fully client-side, real-time trading intelligence feature built from scratch. It gives traders an at-a-glance view of live prices, global market sessions, bid/ask spreads, and a built-in risk calculator — all updating continuously without any page refresh or external API dependency.

This feature does **not exist** on the original Equiti website and was designed to demonstrate advanced Angular capabilities alongside real trading domain knowledge.

---

## 2. Architecture

```
MarketFeedService (Core)
        │
        │  Observable<Instrument[]>  (RxJS interval + scan + shareReplay)
        │
DashboardComponent
        ├── Live Ticker Strip
        ├── Market Sessions Row
        ├── Watchlist Grid  ──→  SparklineComponent (Canvas API)
        ├── Position Size Calculator
        └── Live Spread Table
```

The data layer (`MarketFeedService`) is completely decoupled from the UI. Any component across the app can subscribe to the same shared stream without spawning duplicate timers.

---

## 3. Core Service — MarketFeedService

**File:** `src/app/core/services/market-feed.service.ts`

### How it works

```
interval(600ms)
    └── scan()          ← accumulates state, applies random walk per instrument
        └── shareReplay(1)  ← single timer shared across all subscribers
```

**Step-by-step:**
1. `interval(600)` emits a tick every 600 milliseconds.
2. `scan(reducer, seed)` receives the previous array of instruments and applies a **Gaussian random walk** to each price:
   - Move = `(Math.random() - 0.499) × volatility × 2`
   - The `0.499` bias produces a very slight upward drift (realistic market behavior)
   - Price is floored at 80% of the opening price to prevent runaway drops
3. Each tick updates: `price`, `prevPrice`, `change`, `changePct`, `high`, `low`, `bid`, `ask`, `history[]`
4. `shareReplay(1)` ensures the RxJS timer runs **once** regardless of how many components subscribe, and replays the latest value to new subscribers instantly.

### Instruments configured

| Symbol  | Name              | Category  | Base Price | Volatility/tick |
|---------|-------------------|-----------|------------|-----------------|
| EURUSD  | Euro / US Dollar  | Forex     | 1.08524    | 0.00012         |
| GBPUSD  | Pound / US Dollar | Forex     | 1.26483    | 0.00015         |
| USDJPY  | US Dollar / Yen   | Forex     | 149.512    | 0.012           |
| XAUUSD  | Gold / US Dollar  | Commodity | 2318.45    | 0.42            |
| XTIUSD  | WTI Crude Oil     | Commodity | 78.62      | 0.07            |
| US30    | Dow Jones 30      | Index     | 38950.0    | 4.5             |
| BTCUSD  | Bitcoin / USD     | Crypto    | 62480.0    | 85.0            |
| NAS100  | NASDAQ 100        | Index     | 17820.0    | 3.2             |

### Instrument data model

```typescript
interface Instrument {
  symbol:    string;   // "EURUSD"
  name:      string;   // "Euro / US Dollar"
  category:  string;   // "Forex" | "Commodity" | "Index" | "Crypto"
  price:     number;   // current mid-price
  prevPrice: number;   // price from previous tick
  change:    number;   // absolute change from open
  changePct: number;   // percentage change from open
  high:      number;   // session high
  low:       number;   // session low
  bid:       number;   // = price (simplified)
  ask:       number;   // = price + spread
  history:   number[]; // last 40 prices for sparkline
  digits:    number;   // decimal places for formatting
}
```

---

## 4. SparklineComponent — Canvas API

**File:** `src/app/shared/components/sparkline/sparkline.component.ts`

A reusable, zero-dependency chart component that renders directly to an HTML `<canvas>` element.

### How it renders

```
ngOnChanges() triggered on every prices[] reference change
     └── draw()
           ├── clearRect()          — wipe canvas
           ├── min/max normalize    — map price range to pixel range
           ├── beginPath + lineTo   — draw polyline
           ├── stroke()             — render the line (green or red)
           ├── fill area under line — semi-transparent fill
           └── arc()                — draw dot at current price
```

### Normalization formula

```
toX(i) = padding + (i / totalPoints) × (width - 2×padding)
toY(p) = padding + (1 - (p - min) / range) × (height - 2×padding)
```

This maps any price range to the full canvas height, so even small movements are clearly visible.

### Inputs

| Input    | Type       | Default | Description                    |
|----------|------------|---------|--------------------------------|
| `prices` | `number[]` | `[]`    | Array of historical prices     |
| `up`     | `boolean`  | `true`  | `true` = green, `false` = red  |
| `w`      | `number`   | `100`   | Canvas width in pixels         |
| `h`      | `number`   | `44`    | Canvas height in pixels        |

Implements `OnChanges` — redraws automatically every time the `prices` array reference changes (which happens every 600ms from the feed).

---

## 5. DashboardComponent

**File:** `src/app/features/dashboard/dashboard.component.ts`

### Signal-based state

```typescript
instruments = signal<Instrument[]>([]);   // updated every 600ms from feed
now         = signal(new Date());          // updated every 1000ms (clock)
```

Both are Angular Signals — the template re-renders only the exact DOM nodes that depend on them. No full component re-render on every tick.

### Lifecycle

```
ngOnInit()
  ├── setInterval(1000) → now.set(new Date())   // live UTC clock
  └── feedSvc.feed$.subscribe() → instruments.set(data)

ngOnDestroy()
  ├── clearInterval(clockTimer)
  └── subscription.unsubscribe()
```

Proper cleanup prevents memory leaks when navigating away from the dashboard.

---

## 6. Feature Breakdown

### 6.1 Live UTC Clock
- `setInterval(1000)` ticks every second, updating an Angular signal
- Displays `HH:mm:ss UTC` with `DatePipe`
- Shows full date: `EEEE, d MMM yyyy`

### 6.2 Market Sessions Row

Four global trading sessions with real UTC open/close windows:

| Session  | Open UTC | Close UTC | Color   |
|----------|----------|-----------|---------|
| Sydney   | 22:00    | 07:00     | Indigo  |
| Tokyo    | 00:00    | 09:00     | Amber   |
| London   | 08:00    | 17:00     | Blue    |
| New York | 13:00    | 22:00     | Teal    |

**`isSessionOpen()` handles midnight crossover:**

```typescript
// Sydney (22:00–07:00) wraps midnight — special case
if (openUTC > closeUTC) return hour >= openUTC || hour < closeUTC;
// All others (standard range)
return hour >= openUTC && hour < closeUTC;
```

**`timeUntil()` calculates a live countdown** in `HHh MMm` format, computing minutes remaining until the session opens or closes.

**London–NY Overlap** (13:00–17:00 UTC) is detected and shown as a live badge — this is the highest-liquidity window in forex, a key trading concept.

### 6.3 Scrolling Ticker Strip

The ticker uses a CSS-only infinite scroll animation:

```css
.ticker-track {
  width: max-content;   /* expands to fit all items × 2 */
  animation: ticker-scroll 28s linear infinite;
}

@keyframes ticker-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```

The items are duplicated in the template (two `@for` blocks over the same data). Scrolling to `-50%` of `max-content` width = exactly one full set width → seamless loop.

- Pauses on hover (`animation-play-state: paused`)
- Price and direction update reactively without restarting the animation (Angular only patches text nodes, not the container element)

### 6.4 Watchlist Cards

Each card shows:
- Symbol, category, human name
- Current price (tabular-nums font for stable layout)
- Absolute change + % change
- Session high / low
- Canvas sparkline (last 40 ticks)
- Bid / Ask prices with spread

Cards use `[class.up]` / `[class.dn]` binding to apply a **2px colored top border** (green/red) based on overall direction. No flickering animation — colors are stable.

`trackBySymbol` is used on the `@for` loop to prevent Angular from destroying and recreating DOM nodes on every update — only the text content changes.

### 6.5 Position Size Calculator

Implements the standard forex lot-size formula:

```
Risk Amount  = Account Balance × (Risk% / 100)
Pips at Risk = |Entry Price − Stop Loss|
Lot Size     = Risk Amount / (Pips at Risk × 100,000)
Units        = Lot Size × 100,000
R:R Ratio    = |Take Profit − Entry| / |Entry − Stop Loss|
Potential P  = Lot Size × TP Pips × 100,000 × pip value
```

All values are **computed getters** — they recalculate instantly as the user types, with no button press needed.

**Risk Level Indicator:**

| Risk %  | Label        | Color  |
|---------|--------------|--------|
| ≤ 1%    | Conservative | Green  |
| ≤ 2%    | Moderate     | Amber  |
| ≤ 3%    | Aggressive   | Orange |
| > 3%    | High Risk    | Red    |

A visual progress bar fills from green → red as risk% increases, providing an instant visual warning.

### 6.6 Live Spread Table

Shows bid, ask, spread-in-pips, and % change for all 8 instruments, updating every 600ms.

**Spread-in-pips formula:**

```typescript
spreadPips(inst) = (ask − bid) × 10^(digits − 1)
// EURUSD: 0.00006 × 10^4 = 0.6 pips
// XAUUSD: 0.30    × 10^1 = 3.0 points
```

A colored dot (green/red) and the session overlap status are shown below the table to give context on when spreads typically widen.

---

## 7. Performance Considerations

| Concern | Solution |
|---|---|
| Multiple components subscribing to feed | `shareReplay(1)` — single RxJS timer for the whole app |
| 8 sparklines re-drawing every 600ms | Canvas `clearRect` + repaint is native and extremely fast |
| Large DOM re-renders on every tick | `trackBySymbol` prevents node destruction; Angular patches text nodes only |
| Memory leaks on navigation | `ngOnDestroy` unsubscribes the feed and clears `setInterval` |
| Animation stuttering from DOM updates | CSS animation on parent; Angular only mutates child text nodes → no stutter |

---

## 8. File Reference

| File | Purpose |
|---|---|
| `src/app/core/services/market-feed.service.ts` | RxJS price simulation engine |
| `src/app/shared/components/sparkline/sparkline.component.ts` | Canvas sparkline chart |
| `src/app/features/dashboard/dashboard.component.ts` | Dashboard logic, sessions, calculator |
| `src/app/features/dashboard/dashboard.component.html` | Template — 6 UI sections |
| `src/app/features/dashboard/dashboard.component.css` | Styles — dark hero, ticker, cards, calculator |

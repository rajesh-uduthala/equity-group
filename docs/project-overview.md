# Equiti Trading Platform — Project Technical Documentation

> Angular 21 · Standalone Components · Signals · Lazy Loading · Dark Mode · PWA-ready

---

## 1. Project Summary

This is a full replica and enhancement of the Equiti Group trading website, built with modern Angular 21 from scratch. The project includes all major public-facing pages, a shared component library, core services, and two original features not present on the real Equiti website: a **Live Market Dashboard** and a **Network Connectivity Monitor**.

**Live URL (dev):** `http://localhost:4200`
**Build output:** `dist/equity/`

---

## 2. Technology Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Angular | 17+ |
| Language | TypeScript | 5.x |
| Styling | CSS Custom Properties (no framework) | — |
| Reactive Programming | RxJS | 7.x |
| State Management | Angular Signals | Built-in (Angular 17) |
| Build Tool | Angular CLI / esbuild | Latest |
| Package Manager | npm | — |
| Font | Inter (Google Fonts) | Variable weight |

No UI framework (no Material, Bootstrap, Tailwind) — every component and style is hand-crafted, giving full control over design fidelity and bundle size.

---

## 3. Project Structure

```
src/
├── app/
│   ├── app.ts                        Root component
│   ├── app.html                      Root template (offline banner, router outlet)
│   ├── app.css                       Root styles (offline/online toasts)
│   ├── app.config.ts                 App bootstrap configuration
│   ├── app.routes.ts                 All route definitions
│   │
│   ├── core/
│   │   └── services/
│   │       ├── theme.service.ts      Light/dark mode
│   │       ├── network.service.ts    Online/offline detection
│   │       └── market-feed.service.ts  Live price simulation
│   │
│   ├── features/                     Page-level components (lazy loaded)
│   │   ├── home/
│   │   ├── markets/
│   │   ├── accounts/
│   │   ├── trading-tools/
│   │   ├── platforms/
│   │   │   └── metatrader4/
│   │   ├── dashboard/                ← Original feature
│   │   └── auth/
│   │       ├── login/
│   │       └── register/
│   │
│   ├── layouts/
│   │   ├── main-layout/              Navbar + Footer wrapper
│   │   └── auth-layout/              Centered card layout for auth pages
│   │
│   └── shared/
│       └── components/
│           ├── navbar/               Fixed top navigation with dropdowns
│           ├── footer/               Site footer with social links
│           └── sparkline/            Canvas-based chart component
│
└── styles.css                        Global CSS variables & theme tokens
```

---

## 4. Pages Built

### 4.1 Home Page (`/`)
The landing page replicating the Equiti homepage.

**Sections:**
- Hero — headline, subtext, CTA button, hero image from Equiti CDN
- Animated ticker strip with live-style instrument prices
- Welcome Bonus card (dark section)
- Why Equiti — 4 feature cards
- Supported platforms (MT4, MT5)
- Account types overview
- Testimonials / social proof
- Footer

**Key techniques:** CSS float animation (`@keyframes float-a/b/c`), CDN image references, responsive two-column hero layout.

---

### 4.2 Accounts Page (`/accounts`)
Full replica of the Equiti accounts comparison page.

**Sections:**
- Breadcrumb navigation
- Hero with CDN image (`All_Accounts_Equiti_group.original.png`)
- Dark support banner (full-width, corrected alignment)
- 3-step onboarding process
- Welcome Bonus highlight card
- **4-column account comparison table:**
  - Classic, Standard, **Premier** (featured/highlighted), Micro
  - Premier card has "MOST POPULAR" badge and distinct styling
- Trading tools promotion block
- Numbered how-to steps
- Dark CTA banner
- 8-item FAQ accordion (first item open by default)
- Explore more section

---

### 4.3 Trading Tools Page (`/trading-tools`)
Replica of the Equiti insights/trading tools page.

**Sections:**
- Breadcrumb
- Hero with CDN image
- 3 feature highlight cards
- Dark CTA banner
- 6 tool cards with CSS-built mock UI previews:
  - Assets Overview (mini price list UI)
  - Signal Centre (buy/sell signal indicators)
  - Research Terminal
  - Economic Calendar (mock event list)
  - Market News (article list layout)
  - eResources (CDN image)
- 4-item FAQ accordion

---

### 4.4 MetaTrader 4 Page (`/platforms/metatrader-4`)
Replica of the Equiti MetaTrader 4 platform page.

**Sections:**
- Breadcrumb: Home → Platforms → MetaTrader 4
- Hero with real download link: `https://download.mql5.com/cdn/web/17482/mt4/equitigroup4setup.exe`
- 6 feature tiles with CDN SVG icons
- MQ WebTrader dark card with CDN image (`MQTrader.original.png`)
- 6 platform feature cards
- Dark CTA banner
- 7-item FAQ (first item open)

---

### 4.5 Live Dashboard (`/dashboard`) — Original Feature
See [live-dashboard.md](./live-dashboard.md) for full technical detail.

**Summary:** Real-time price feed, 8 instrument watchlist with canvas sparklines, 4 global market session clocks, live scrolling ticker, and an interactive position-size calculator.

---

### 4.6 Auth Pages (`/login`, `/register`)
Login and registration forms in the auth layout (centered card, no navbar/footer).

---

## 5. Routing Architecture

```typescript
// app.routes.ts — dual-layout pattern
[
  {
    path: '',
    component: MainLayoutComponent,      // Navbar + Footer
    children: [
      { path: '' },                      // Home
      { path: 'markets' },
      { path: 'platforms' },
      { path: 'accounts' },
      { path: 'trading-tools' },
      { path: 'platforms/metatrader-4' },
      { path: 'dashboard' },
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,      // Minimal, no nav
    children: [
      { path: 'login' },
      { path: 'register' },
    ]
  }
]
```

**Every feature component is lazy-loaded** via `loadComponent(() => import(...))`. Angular's build system produces a separate JS chunk per page — users download only the code for the page they visit.

**Router configuration:**

```typescript
provideRouter(
  routes,
  withViewTransitions(),                          // CSS page transition animations
  withInMemoryScrolling({ scrollPositionRestoration: 'top' })  // instant scroll-to-top on navigate
)
```

`withInMemoryScrolling` + `scroll-behavior: auto` (not smooth) prevents the visible "scrolling up" animation when navigating between pages.

---

## 6. Angular Signals — State Management

Angular Signals are used throughout instead of RxJS subjects or component-level variables for all mutable UI state. Signals provide:
- **Granular reactivity** — only the exact DOM node that reads a signal re-renders
- **No Zone.js overhead** — no dirty-checking of the entire component tree
- **Synchronous reads** — no subscription boilerplate

**Signals used across the project:**

| Component / Service | Signal | Purpose |
|---|---|---|
| `NavbarComponent` | `scrolled`, `mobileOpen`, `activeMenu` | Navbar UI state |
| `ThemeService` | `isDark` | Current theme |
| `NetworkService` | `isOnline` | Network connectivity |
| `App` (root) | `showOnlineToast` | Toast visibility |
| `DashboardComponent` | `instruments`, `now` | Live prices + clock |

---

## 7. Theme System (Light / Dark Mode)

**File:** `src/app/core/services/theme.service.ts`

The entire theme is controlled by a single CSS attribute (`data-theme="dark"`) on the `<html>` element. Every color in the project uses a CSS custom property (`var(--*)`), so switching theme requires zero component changes.

```
ThemeService.toggle()
    └── isDark signal flips
        └── effect() runs
            ├── document.documentElement.setAttribute('data-theme', 'dark' | 'light')
            └── localStorage.setItem('equiti-theme', value)
```

**Theme persistence order:**
1. Check `localStorage` for a saved preference
2. Fall back to OS `prefers-color-scheme` media query
3. Default to light

**CSS variable sets:**

```css
/* Light (default) */
:root {
  --bg: #F5F7FA;       --surface: #FFFFFF;
  --text: #1A1D2E;     --text-2: #374151;
  --border: #E5E7EB;   --primary: #00B8A0;
}

/* Dark — overrides all above */
[data-theme="dark"] {
  --bg: #0F1117;       --surface: #1A1D2E;
  --text: #F9FAFB;     --text-2: #E5E7EB;
  --border: rgba(255,255,255,0.09);
}
```

The sun/moon toggle icon in the navbar uses Angular's `@if` block bound to `theme.isDark()`.

---

## 8. Network Connectivity Monitor

**File:** `src/app/core/services/network.service.ts`
**File:** `src/app/app.ts`, `src/app/app.html`, `src/app/app.css`

An original feature not present on the Equiti website. Monitors the browser's real-time internet connection status using the native Web API.

### How it works

```typescript
isOnline = signal(navigator.onLine);  // read initial state

window.addEventListener('online',  () => isOnline.set(true));
window.addEventListener('offline', () => isOnline.set(false));
```

The `window online/offline` events fire instantly when the OS-level network changes (WiFi disconnect, cable unplug, etc.).

### UI behavior

| Event | UI Response |
|---|---|
| Goes offline | Red full-width banner slides down from the top of every page |
| Comes back online | Green toast appears bottom-right for 3 seconds, then fades |
| Initial page load online | Nothing shown (no false toast on startup) |

**Preventing false startup toast:**

```typescript
private prevOnline = navigator.onLine;  // snapshot before effect runs

effect(() => {
  const online = this.network.isOnline();
  if (online && !this.prevOnline) {
    // Only show toast when transitioning offline → online
    this.showOnlineToast.set(true);
    setTimeout(() => this.showOnlineToast.set(false), 3000);
  }
  this.prevOnline = online;
});
```

The `prevOnline` snapshot prevents the "Connection restored" toast from appearing on initial page load.

---

## 9. Navbar — Dropdown System

**File:** `src/app/shared/components/navbar/navbar.component.ts`

The navbar manages five dropdown menus with a single signal:

```typescript
activeMenu = signal<string | null>(null);

toggleMenu(name: string, event: Event) {
  event.stopPropagation();  // prevent document:click from immediately closing
  this.activeMenu.set(this.activeMenu() === name ? null : name);
}

@HostListener('document:click')
onDocClick() { this.activeMenu.set(null); }  // click outside closes
```

**Why one signal instead of five booleans:** Opening any menu automatically closes the previously open one. No coordination logic needed.

**Navbar layout:** Uses a three-slot flex layout (logo `flex:1` | nav-links | actions `flex:1`) to keep links centered and push logo/CTA to viewport edges. The nav-inner uses full-width `padding: 0 32px` instead of a `max-width` container — this is what makes the logo sit flush left and START TRADING flush right on any screen size.

---

## 10. Performance Optimizations

### Code Splitting (Lazy Loading)
Every page is a separate JS chunk. The initial bundle is ~85 kB gzipped. A page like the dashboard (~7.4 kB) is only downloaded when the user navigates there.

```
Initial bundle:    85 kB  (framework + shared components)
dashboard chunk:    7.4 kB (loaded on demand)
accounts chunk:     6.0 kB
trading-tools:      5.8 kB
metatrader4:        5.1 kB
```

### eventCoalescing
```typescript
provideZoneChangeDetection({ eventCoalescing: true })
```
Multiple DOM events fired in the same microtask are batched into a single Angular change detection cycle. Particularly relevant for the ticker strip which receives 8+ updates every 600ms.

### View Transitions API
```typescript
withViewTransitions()
```
Uses the browser's native View Transitions API for smooth page-to-page animations with a CSS crossfade. Falls back gracefully in unsupported browsers.

### trackBy in @for loops
```typescript
trackBySymbol(_: number, inst: Instrument) { return inst.symbol; }
```
Prevents Angular's differ from destroying and recreating the 8 instrument card DOM nodes on every 600ms update. Only text content changes.

### shareReplay(1) on the price feed
The RxJS interval timer in `MarketFeedService` runs exactly once, regardless of how many components subscribe. `shareReplay(1)` replays the latest value to any late subscriber (e.g., navigating back to dashboard).

### CSS Custom Properties for theming
Zero JavaScript cost to switch themes — a single attribute write (`data-theme="dark"`) triggers CSS cascade updates across every element in the DOM simultaneously.

---

## 11. Component Architecture

All components are **standalone** (no NgModules). This enables:
- Direct `loadComponent()` lazy loading per route
- No shared module dependency chains
- Tree-shaking at the component level
- Simpler testing (each component is self-contained)

Every component explicitly declares its imports array:

```typescript
@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, SparklineComponent],
  ...
})
```

---

## 12. CSS Design System

All design tokens are defined as CSS custom properties in `src/styles.css`:

```
Colors:    --primary, --primary-hover, --primary-light
Surfaces:  --bg, --surface, --border, --border-light
Text:      --text, --text-2, --text-muted, --text-light
Spacing:   --space-xs (4px) through --space-3xl (96px)
Radius:    --radius-sm through --radius-pill
Shadows:   --shadow-sm, --shadow-md, --shadow-lg
Status:    --up (#22C55E green), --down (#EF4444 red)
```

No class naming convention like BEM was enforced — classes are component-scoped by Angular's view encapsulation, so naming collisions are impossible.

---

## 13. Responsive Breakpoints

| Breakpoint | Behavior |
|---|---|
| > 1100px | Full layout — 4-column grids |
| 900px–1100px | 3-column grids, nav items shrink |
| 768px–900px | 2-column grids |
| < 768px | Mobile — hamburger menu, single column |

The navbar hides all desktop links and the CTA below 768px and shows a hamburger toggle with a slide-down mobile menu.

---

## 14. Feature Comparison vs Original Equiti Website

| Feature | Original Equiti | This Build |
|---|---|---|
| Home page | ✅ | ✅ Replicated |
| Accounts page | ✅ | ✅ Replicated |
| Trading Tools page | ✅ | ✅ Replicated |
| MetaTrader 4 page | ✅ | ✅ Replicated |
| Navbar with dropdowns | ✅ | ✅ Replicated |
| Light/Dark mode | ❌ | ✅ Built |
| Live Market Dashboard | ❌ | ✅ Built |
| Real-time price feed | ❌ | ✅ Built (RxJS simulation) |
| Canvas sparkline charts | ❌ | ✅ Built |
| Market session clocks | ❌ | ✅ Built |
| Position size calculator | ❌ | ✅ Built |
| Network offline banner | ❌ | ✅ Built |
| Lazy-loaded routes | Unknown | ✅ All pages |
| View Transitions API | ❌ | ✅ Built |
| Scroll-to-top on navigate | ❌ (visible scroll) | ✅ Instant (no animation) |

---

## 15. Quick Start

```bash
# Install dependencies
npm install

# Development server
ng serve
# → http://localhost:4200

# Production build
ng build
# → dist/equity/

# Run tests
ng test
```

---

## 16. Key Files Reference

| File | Role |
|---|---|
| `src/styles.css` | Global design tokens, dark theme, reset, utilities |
| `src/app/app.config.ts` | Router + zone configuration |
| `src/app/app.routes.ts` | All routes with lazy loading |
| `src/app/app.ts` | Root component — network banner |
| `src/app/core/services/theme.service.ts` | Dark/light mode |
| `src/app/core/services/network.service.ts` | Online/offline detection |
| `src/app/core/services/market-feed.service.ts` | RxJS price engine |
| `src/app/shared/components/navbar/` | Fixed navbar, dropdowns |
| `src/app/shared/components/footer/` | Site footer |
| `src/app/shared/components/sparkline/` | Canvas chart component |
| `src/app/features/dashboard/` | Live Market Dashboard |
| `src/app/features/home/` | Landing page |
| `src/app/features/accounts/` | Account comparison page |
| `src/app/features/trading-tools/` | Trading tools page |
| `src/app/features/platforms/metatrader4/` | MT4 platform page |
| `angular.json` | Build config, CSS budgets |

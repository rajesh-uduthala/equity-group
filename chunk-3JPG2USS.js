import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-7AHSBSZ3.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-EG5WAOH2.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  Injectable,
  Input,
  ViewChild,
  __spreadProps,
  __spreadValues,
  inject,
  interval,
  scan,
  setClassMetadata,
  shareReplay,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-W3ZQDAPL.js";

// src/app/core/services/market-feed.service.ts
var MarketFeedService = class _MarketFeedService {
  configs = {
    "EURUSD": { name: "Euro / US Dollar", category: "Forex", price: 1.08524, digits: 5, volatility: 12e-5, spread: 6e-5 },
    "GBPUSD": { name: "Pound / US Dollar", category: "Forex", price: 1.26483, digits: 5, volatility: 15e-5, spread: 9e-5 },
    "USDJPY": { name: "US Dollar / Yen", category: "Forex", price: 149.512, digits: 3, volatility: 0.012, spread: 7e-3 },
    "XAUUSD": { name: "Gold / US Dollar", category: "Commodity", price: 2318.45, digits: 2, volatility: 0.42, spread: 0.3 },
    "XTIUSD": { name: "WTI Crude Oil", category: "Commodity", price: 78.62, digits: 2, volatility: 0.07, spread: 0.05 },
    "US30": { name: "Dow Jones 30", category: "Index", price: 38950, digits: 1, volatility: 4.5, spread: 2 },
    "BTCUSD": { name: "Bitcoin / USD", category: "Crypto", price: 62480, digits: 1, volatility: 85, spread: 15 },
    "NAS100": { name: "NASDAQ 100", category: "Index", price: 17820, digits: 1, volatility: 3.2, spread: 1.5 }
  };
  buildSeed() {
    return Object.entries(this.configs).map(([symbol, cfg]) => ({
      symbol,
      name: cfg.name,
      category: cfg.category,
      price: cfg.price,
      prevPrice: cfg.price,
      change: 0,
      changePct: 0,
      high: cfg.price,
      low: cfg.price,
      bid: cfg.price,
      ask: cfg.price + cfg.spread,
      history: Array(40).fill(cfg.price),
      digits: cfg.digits
    }));
  }
  feed$ = interval(600).pipe(scan((state) => state.map((inst) => {
    const cfg = this.configs[inst.symbol];
    const move = (Math.random() - 0.499) * cfg.volatility * 2;
    const price = Math.max(inst.price + move, cfg.price * 0.8);
    return __spreadProps(__spreadValues({}, inst), {
      prevPrice: inst.price,
      price,
      change: price - cfg.price,
      changePct: (price - cfg.price) / cfg.price * 100,
      high: Math.max(inst.high, price),
      low: Math.min(inst.low, price),
      bid: price,
      ask: price + cfg.spread,
      history: [...inst.history.slice(-39), price]
    });
  }), this.buildSeed()), shareReplay(1));
  static \u0275fac = function MarketFeedService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MarketFeedService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MarketFeedService, factory: _MarketFeedService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MarketFeedService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/shared/components/sparkline/sparkline.component.ts
var _c0 = ["c"];
var SparklineComponent = class _SparklineComponent {
  prices = [];
  up = true;
  w = 100;
  h = 44;
  ref;
  ngAfterViewInit() {
    this.draw();
  }
  ngOnChanges() {
    this.draw();
  }
  draw() {
    if (!this.ref || this.prices.length < 2)
      return;
    const canvas = this.ref.nativeElement;
    const ctx = canvas.getContext("2d");
    if (!ctx)
      return;
    const W = canvas.width;
    const H = canvas.height;
    ctx.clearRect(0, 0, W, H);
    const min = Math.min(...this.prices);
    const max = Math.max(...this.prices);
    const span = max - min || 1e-4;
    const pad = 3;
    const toX = (i) => pad + i / (this.prices.length - 1) * (W - pad * 2);
    const toY = (p) => pad + (1 - (p - min) / span) * (H - pad * 2);
    const color = this.up ? "#22C55E" : "#EF4444";
    ctx.beginPath();
    this.prices.forEach((p, i) => i === 0 ? ctx.moveTo(toX(i), toY(p)) : ctx.lineTo(toX(i), toY(p)));
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    ctx.lineJoin = "round";
    ctx.stroke();
    ctx.lineTo(toX(this.prices.length - 1), H);
    ctx.lineTo(toX(0), H);
    ctx.closePath();
    ctx.fillStyle = this.up ? "rgba(34,197,94,0.12)" : "rgba(239,68,68,0.12)";
    ctx.fill();
    const lastX = toX(this.prices.length - 1);
    const lastY = toY(this.prices[this.prices.length - 1]);
    ctx.beginPath();
    ctx.arc(lastX, lastY, 2.5, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }
  static \u0275fac = function SparklineComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SparklineComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SparklineComponent, selectors: [["app-sparkline"]], viewQuery: function SparklineComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.ref = _t.first);
    }
  }, inputs: { prices: "prices", up: "up", w: "w", h: "h" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 2, consts: [["c", ""], [2, "display", "block", "width", "100%", "height", "auto", 3, "width", "height"]], template: function SparklineComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElement(0, "canvas", 1, 0);
    }
    if (rf & 2) {
      \u0275\u0275domProperty("width", ctx.w)("height", ctx.h);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SparklineComponent, [{
    type: Component,
    args: [{
      selector: "app-sparkline",
      standalone: true,
      template: `<canvas #c [width]="w" [height]="h" style="display:block;width:100%;height:auto"></canvas>`
    }]
  }], null, { prices: [{
    type: Input
  }], up: [{
    type: Input
  }], w: [{
    type: Input
  }], h: [{
    type: Input
  }], ref: [{
    type: ViewChild,
    args: ["c"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SparklineComponent, { className: "SparklineComponent", filePath: "src/app/shared/components/sparkline/sparkline.component.ts", lineNumber: 8 });
})();

// src/app/features/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.name;
var _forTrack1 = ($index, $item) => $item.symbol;
function DashboardComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "\u{1F525} London\u2013NY Overlap");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 76);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 77)(4, "div", 78);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 79);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 80)(9, "span", 81);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 82);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("--sc", s_r1.color);
    \u0275\u0275classProp("open", ctx_r1.isSessionOpen(s_r1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.flag);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.city);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("open", ctx_r1.isSessionOpen(s_r1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isSessionOpen(s_r1) ? "OPEN" : "CLOSED", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.isSessionOpen(s_r1) ? "Closes in" : "Opens in", " ", ctx_r1.timeUntil(s_r1), " ");
  }
}
function DashboardComponent_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 83)(1, "span", 84);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 85);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 86);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const inst_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("up", inst_r3.changePct >= 0)("dn", inst_r3.changePct < 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(inst_r3.symbol);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmt(inst_r3.price, inst_r3.digits));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmtPct(inst_r3.changePct));
  }
}
function DashboardComponent_For_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 83)(1, "span", 84);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 85);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 86);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const inst_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("up", inst_r4.changePct >= 0)("dn", inst_r4.changePct < 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(inst_r4.symbol);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmt(inst_r4.price, inst_r4.digits));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmtPct(inst_r4.changePct));
  }
}
function DashboardComponent_For_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87)(1, "div", 88)(2, "div")(3, "span", 89);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 90);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 91);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 92);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 93)(12, "span", 94);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 95);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 96)(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 97);
    \u0275\u0275element(22, "app-sparkline", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 99)(24, "span", 100);
    \u0275\u0275text(25);
    \u0275\u0275elementStart(26, "small");
    \u0275\u0275text(27, "BID");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "span", 101);
    \u0275\u0275text(29, "|");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 102);
    \u0275\u0275text(31);
    \u0275\u0275elementStart(32, "small");
    \u0275\u0275text(33, "ASK");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const inst_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("up", inst_r5.changePct >= 0)("dn", inst_r5.changePct < 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(inst_r5.symbol);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(inst_r5.category);
    \u0275\u0275advance();
    \u0275\u0275classProp("up", inst_r5.changePct >= 0)("dn", inst_r5.changePct < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.fmtPct(inst_r5.changePct), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(inst_r5.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.fmt(inst_r5.price, inst_r5.digits));
    \u0275\u0275advance();
    \u0275\u0275classProp("up", inst_r5.change >= 0)("dn", inst_r5.change < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.fmtChange(inst_r5.change, inst_r5.digits), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("H: ", ctx_r1.fmt(inst_r5.high, inst_r5.digits));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("L: ", ctx_r1.fmt(inst_r5.low, inst_r5.digits));
    \u0275\u0275advance(2);
    \u0275\u0275property("prices", inst_r5.history)("up", inst_r5.changePct >= 0)("w", 160)("h", 48);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.fmt(inst_r5.bid, inst_r5.digits));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.fmt(inst_r5.ask, inst_r5.digits));
  }
}
function DashboardComponent_For_155_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103)(1, "span", 104);
    \u0275\u0275element(2, "span", 105);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 106);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 106);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 107);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 108);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const inst_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("up", inst_r6.changePct >= 0)("dn", inst_r6.changePct < 0);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("up", inst_r6.changePct >= 0)("dn", inst_r6.changePct < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", inst_r6.symbol, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmt(inst_r6.bid, inst_r6.digits));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmt(inst_r6.ask, inst_r6.digits));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.spreadPips(inst_r6));
    \u0275\u0275advance();
    \u0275\u0275classProp("up", inst_r6.changePct >= 0)("dn", inst_r6.changePct < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.fmtPct(inst_r6.changePct), " ");
  }
}
var DashboardComponent = class _DashboardComponent {
  feedSvc = inject(MarketFeedService);
  instruments = signal([], ...ngDevMode ? [{ debugName: "instruments" }] : (
    /* istanbul ignore next */
    []
  ));
  now = signal(/* @__PURE__ */ new Date(), ...ngDevMode ? [{ debugName: "now" }] : (
    /* istanbul ignore next */
    []
  ));
  sub = null;
  clock = null;
  // ── Market Sessions ────────────────────────────────────────────────────
  sessions = [
    { name: "Sydney", city: "Sydney, AU", openUTC: 22, closeUTC: 7, flag: "\u{1F1E6}\u{1F1FA}", color: "#6366F1" },
    { name: "Tokyo", city: "Tokyo, JP", openUTC: 0, closeUTC: 9, flag: "\u{1F1EF}\u{1F1F5}", color: "#F59E0B" },
    { name: "London", city: "London, UK", openUTC: 8, closeUTC: 17, flag: "\u{1F1EC}\u{1F1E7}", color: "#3B82F6" },
    { name: "New York", city: "New York, US", openUTC: 13, closeUTC: 22, flag: "\u{1F1FA}\u{1F1F8}", color: "#00B8A0" }
  ];
  isSessionOpen(s) {
    const h = this.now().getUTCHours();
    if (s.openUTC < s.closeUTC)
      return h >= s.openUTC && h < s.closeUTC;
    return h >= s.openUTC || h < s.closeUTC;
  }
  timeUntil(s) {
    const h = this.now().getUTCHours();
    const m = this.now().getUTCMinutes();
    const total = h * 60 + m;
    const open = s.openUTC * 60;
    const close = s.closeUTC * 60;
    let diff;
    if (this.isSessionOpen(s)) {
      diff = close > total ? close - total : close + 1440 - total;
    } else {
      diff = open > total ? open - total : open + 1440 - total;
    }
    return `${String(Math.floor(diff / 60)).padStart(2, "0")}h ${String(diff % 60).padStart(2, "0")}m`;
  }
  get londonNYOverlap() {
    const h = this.now().getUTCHours();
    return h >= 13 && h < 17;
  }
  // ── Risk / Position-Size Calculator ───────────────────────────────────
  balance = 1e4;
  riskPct = 1;
  entry = 1.085;
  stopLoss = 1.08;
  tpPrice = 1.09;
  get riskAmt() {
    return this.balance * (this.riskPct / 100);
  }
  get pipDiff() {
    return Math.abs(this.entry - this.stopLoss);
  }
  get tpPips() {
    return Math.abs(this.tpPrice - this.entry);
  }
  get lotSize() {
    return this.pipDiff > 0 ? this.riskAmt / (this.pipDiff * 1e5) : 0;
  }
  get rrRatio() {
    return this.pipDiff > 0 ? this.tpPips / this.pipDiff : 0;
  }
  get potentialP() {
    return this.lotSize * this.tpPips * 1e5 * 1e-4 * 10;
  }
  get riskBarPct() {
    const max = 5;
    return Math.min(this.riskPct / max * 100, 100);
  }
  get riskLevel() {
    if (this.riskPct <= 1)
      return "Conservative";
    if (this.riskPct <= 2)
      return "Moderate";
    if (this.riskPct <= 3)
      return "Aggressive";
    return "High Risk";
  }
  get riskColor() {
    if (this.riskPct <= 1)
      return "#22C55E";
    if (this.riskPct <= 2)
      return "#F59E0B";
    if (this.riskPct <= 3)
      return "#F97316";
    return "#EF4444";
  }
  // ── Helpers ───────────────────────────────────────────────────────────
  fmt(price, digits) {
    return price.toFixed(digits);
  }
  fmtChange(v, digits) {
    return (v >= 0 ? "+" : "") + v.toFixed(digits);
  }
  fmtPct(v) {
    return (v >= 0 ? "+" : "") + v.toFixed(2) + "%";
  }
  spreadPips(inst) {
    const raw = (inst.ask - inst.bid) * Math.pow(10, inst.digits - 1);
    return raw.toFixed(1);
  }
  trackBySymbol(_, inst) {
    return inst.symbol;
  }
  // ── Lifecycle ─────────────────────────────────────────────────────────
  ngOnInit() {
    this.clock = setInterval(() => this.now.set(/* @__PURE__ */ new Date()), 1e3);
    this.sub = this.feedSvc.feed$.subscribe((data) => this.instruments.set(data));
  }
  ngOnDestroy() {
    if (this.clock)
      clearInterval(this.clock);
    this.sub?.unsubscribe();
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 180, vars: 37, consts: [[1, "breadcrumb", "container"], ["routerLink", "/"], [1, "bc-sep"], [1, "dash-hero"], [1, "container"], [1, "dash-hero-inner"], [1, "dash-hero-left"], [1, "sect-label"], [1, "dash-title"], [1, "dash-sub"], [1, "dash-meta"], [1, "live-badge"], [1, "live-dot"], [1, "data-note"], [1, "overlap-badge"], [1, "dash-clock-block"], [1, "clock-time"], [1, "clock-label"], [1, "clock-date"], [1, "sessions-row"], [1, "session-card", 3, "open", "--sc"], ["aria-hidden", "true", 1, "ticker-wrap"], [1, "ticker-track"], [1, "tick-item", 3, "up", "dn"], [1, "watchlist-section"], [1, "section-header"], [1, "section-title"], [1, "section-note"], [1, "watchlist-grid"], [1, "inst-card", 3, "up", "dn"], [1, "tools-section"], [1, "container", "tools-grid"], [1, "calc-panel"], [1, "calc-header"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "4", "y", "2", "width", "16", "height", "20", "rx", "2"], ["x1", "8", "y1", "6", "x2", "16", "y2", "6"], ["x1", "8", "y1", "10", "x2", "16", "y2", "10"], ["x1", "8", "y1", "14", "x2", "12", "y2", "14"], [1, "calc-desc"], [1, "calc-fields"], [1, "calc-field"], [1, "calc-input-wrap"], [1, "calc-prefix"], ["type", "number", "min", "100", "step", "100", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0.1", "max", "10", "step", "0.1", 3, "ngModelChange", "ngModel"], [1, "calc-suffix"], [1, "risk-bar-wrap"], [1, "risk-bar"], [1, "risk-level"], ["type", "number", "step", "0.00001", 3, "ngModelChange", "ngModel"], [1, "calc-results"], [1, "calc-res-item"], [1, "cr-label"], [1, "cr-val", "cr-risk"], [1, "cr-val"], [1, "calc-res-item", "highlight"], [1, "cr-val", "cr-primary"], [1, "cr-val", "cr-green"], [1, "calc-note"], [1, "spread-panel"], [1, "spread-header-row"], ["points", "22 12 18 12 15 21 9 3 6 12 2 12"], [1, "live-badge", "sm"], [1, "spread-table"], [1, "st-head"], [1, "st-row", 3, "up", "dn"], [1, "overlap-info"], [1, "oi-row"], [1, "oi-dot"], [1, "oi-status"], [1, "dash-cta"], [1, "dash-cta-btns"], ["routerLink", "/register", 1, "btn-cta-primary"], ["routerLink", "/accounts", 1, "btn-cta-outline"], [1, "session-card"], [1, "session-flag"], [1, "session-body"], [1, "session-name"], [1, "session-city"], [1, "session-right"], [1, "session-status"], [1, "session-timer"], [1, "tick-item"], [1, "tick-sym"], [1, "tick-price"], [1, "tick-pct"], [1, "inst-card"], [1, "inst-top"], [1, "inst-symbol"], [1, "inst-cat"], [1, "inst-badge"], [1, "inst-name"], [1, "inst-price-row"], [1, "inst-price"], [1, "inst-chg"], [1, "inst-hl"], [1, "inst-spark"], [3, "prices", "up", "w", "h"], [1, "inst-bidask"], [1, "bid-val"], [1, "spread-sep"], [1, "ask-val"], [1, "st-row"], [1, "st-sym"], [1, "st-dot"], [1, "st-num"], [1, "st-spread"], [1, "st-chg"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "a", 1);
      \u0275\u0275text(2, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "span", 2);
      \u0275\u0275text(4, "\u203A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span");
      \u0275\u0275text(6, "Live Dashboard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "section", 3)(8, "div", 4)(9, "div", 5)(10, "div", 6)(11, "span", 7);
      \u0275\u0275text(12, "Real-time Market Data");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "h1", 8);
      \u0275\u0275text(14, "Live Market Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p", 9);
      \u0275\u0275text(16, "Track live prices, monitor global sessions and calculate your risk \u2014 all in one place.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 10)(18, "span", 11);
      \u0275\u0275element(19, "span", 12);
      \u0275\u0275text(20, "LIVE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "span", 13);
      \u0275\u0275text(22, "8 instruments \xB7 updates every 600ms");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(23, DashboardComponent_Conditional_23_Template, 2, 0, "span", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 15)(25, "div", 16);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 17);
      \u0275\u0275text(29, "UTC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 18);
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "date");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "div", 19);
      \u0275\u0275repeaterCreate(34, DashboardComponent_For_35_Template, 13, 12, "div", 20, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "div", 21)(37, "div", 22);
      \u0275\u0275repeaterCreate(38, DashboardComponent_For_39_Template, 7, 7, "span", 23, _forTrack1);
      \u0275\u0275repeaterCreate(40, DashboardComponent_For_41_Template, 7, 7, "span", 23, _forTrack1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "section", 24)(43, "div", 4)(44, "div", 25)(45, "h2", 26);
      \u0275\u0275text(46, "Live Watchlist");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "span", 27);
      \u0275\u0275text(48, "Prices refresh every 600ms");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div", 28);
      \u0275\u0275repeaterCreate(50, DashboardComponent_For_51_Template, 34, 26, "div", 29, _forTrack1);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "section", 30)(53, "div", 31)(54, "div", 32)(55, "div", 33);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(56, "svg", 34);
      \u0275\u0275element(57, "rect", 35)(58, "line", 36)(59, "line", 37)(60, "line", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(61, "h3");
      \u0275\u0275text(62, "Position Size Calculator");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "p", 39);
      \u0275\u0275text(64, "Calculate your ideal lot size and risk parameters before entering a trade.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 40)(66, "div", 41)(67, "label");
      \u0275\u0275text(68, "Account Balance (USD)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 42)(70, "span", 43);
      \u0275\u0275text(71, "$");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "input", 44);
      \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Template_input_ngModelChange_72_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.balance, $event) || (ctx.balance = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(73, "div", 41)(74, "label");
      \u0275\u0275text(75, "Risk per Trade");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "div", 42)(77, "input", 45);
      \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Template_input_ngModelChange_77_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.riskPct, $event) || (ctx.riskPct = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "span", 46);
      \u0275\u0275text(79, "%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "div", 47);
      \u0275\u0275element(81, "div", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div", 49);
      \u0275\u0275text(83);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "div", 41)(85, "label");
      \u0275\u0275text(86, "Entry Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "input", 50);
      \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Template_input_ngModelChange_87_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.entry, $event) || (ctx.entry = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "div", 41)(89, "label");
      \u0275\u0275text(90, "Stop Loss");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "input", 50);
      \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Template_input_ngModelChange_91_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.stopLoss, $event) || (ctx.stopLoss = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "div", 41)(93, "label");
      \u0275\u0275text(94, "Take Profit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "input", 50);
      \u0275\u0275twoWayListener("ngModelChange", function DashboardComponent_Template_input_ngModelChange_95_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.tpPrice, $event) || (ctx.tpPrice = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(96, "div", 51)(97, "div", 52)(98, "span", 53);
      \u0275\u0275text(99, "Risk Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "span", 54);
      \u0275\u0275text(101);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "div", 52)(103, "span", 53);
      \u0275\u0275text(104, "Pips at Risk");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "span", 55);
      \u0275\u0275text(106);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "div", 56)(108, "span", 53);
      \u0275\u0275text(109, "Lot Size");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "span", 57);
      \u0275\u0275text(111);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "div", 52)(113, "span", 53);
      \u0275\u0275text(114, "Units");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "span", 55);
      \u0275\u0275text(116);
      \u0275\u0275pipe(117, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "div", 52)(119, "span", 53);
      \u0275\u0275text(120, "R:R Ratio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "span", 55);
      \u0275\u0275text(122);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "div", 52)(124, "span", 53);
      \u0275\u0275text(125, "Potential Profit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "span", 58);
      \u0275\u0275text(127);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(128, "p", 59);
      \u0275\u0275text(129, "* Simplified for USD-denominated pairs. 1 pip = $10/lot at standard lot size.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(130, "div", 60)(131, "div", 61)(132, "div", 33);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(133, "svg", 34);
      \u0275\u0275element(134, "polyline", 62);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(135, "h3");
      \u0275\u0275text(136, "Live Spreads");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(137, "span", 63);
      \u0275\u0275element(138, "span", 12);
      \u0275\u0275text(139, "LIVE");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(140, "p", 39);
      \u0275\u0275text(141, "Real-time bid/ask spreads across all instruments.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "div", 64)(143, "div", 65)(144, "span");
      \u0275\u0275text(145, "Symbol");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "span");
      \u0275\u0275text(147, "Bid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "span");
      \u0275\u0275text(149, "Ask");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "span");
      \u0275\u0275text(151, "Spread");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "span");
      \u0275\u0275text(153, "Change");
      \u0275\u0275elementEnd()();
      \u0275\u0275repeaterCreate(154, DashboardComponent_For_155_Template, 12, 17, "div", 66, _forTrack1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "div", 67)(157, "div", 68);
      \u0275\u0275element(158, "span", 69);
      \u0275\u0275elementStart(159, "span");
      \u0275\u0275text(160, "London \u2013 New York overlap (13:00\u201317:00 UTC)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "span", 70);
      \u0275\u0275text(162);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(163, "div", 68);
      \u0275\u0275element(164, "span", 69);
      \u0275\u0275elementStart(165, "span");
      \u0275\u0275text(166, "Tokyo \u2013 London overlap (08:00\u201309:00 UTC)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "span", 70);
      \u0275\u0275text(168);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(169, "section", 71)(170, "div", 4)(171, "h2");
      \u0275\u0275text(172, "Ready to trade live markets?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "p");
      \u0275\u0275text(174, "Open an account in minutes and start trading with real-time execution.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "div", 72)(176, "a", 73);
      \u0275\u0275text(177, "Open Live Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "a", 74);
      \u0275\u0275text(179, "Compare Accounts");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(23);
      \u0275\u0275conditional(ctx.londonNYOverlap ? 23 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 29, ctx.now(), "HH:mm:ss"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 32, ctx.now(), "EEEE, d MMM yyyy"));
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.sessions);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.instruments());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.instruments());
      \u0275\u0275advance(10);
      \u0275\u0275repeater(ctx.instruments());
      \u0275\u0275advance(22);
      \u0275\u0275twoWayProperty("ngModel", ctx.balance);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.riskPct);
      \u0275\u0275advance(4);
      \u0275\u0275styleProp("width", ctx.riskBarPct, "%")("background", ctx.riskColor);
      \u0275\u0275advance();
      \u0275\u0275styleProp("color", ctx.riskColor);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.riskLevel);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.entry);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.stopLoss);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.tpPrice);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("$", ctx.riskAmt.toFixed(2));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate((ctx.pipDiff * 1e4).toFixed(1));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.lotSize.toFixed(4));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(117, 35, (ctx.lotSize * 1e5).toFixed(0)));
      \u0275\u0275advance(5);
      \u0275\u0275classProp("cr-green", ctx.rrRatio >= 2);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("1 : ", ctx.rrRatio.toFixed(2));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("\u2248 $", ctx.potentialP.toFixed(2));
      \u0275\u0275advance(27);
      \u0275\u0275repeater(ctx.instruments());
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.londonNYOverlap);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.londonNYOverlap);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.londonNYOverlap ? "NOW ACTIVE" : "inactive");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.now().getUTCHours() === 8 ? "NOW ACTIVE" : "inactive");
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, RouterModule, RouterLink, SparklineComponent, DecimalPipe, DatePipe], styles: ["\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 24px;\n  font-size: 13px;\n  color: var(--text-muted);\n  margin-top: 64px;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  text-decoration: none;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n}\n.bc-sep[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n.dash-hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0f1117 0%,\n      #1a1d2e 60%,\n      #0d1f1c 100%);\n  padding: 40px 0 36px;\n  color: #fff;\n}\n.dash-hero-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 24px;\n  flex-wrap: wrap;\n  margin-bottom: 32px;\n}\n.dash-title[_ngcontent-%COMP%] {\n  font-size: clamp(26px, 4vw, 40px);\n  font-weight: 800;\n  margin: 8px 0 12px;\n  color: #fff;\n  line-height: 1.2;\n}\n.dash-sub[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.6);\n  max-width: 480px;\n  line-height: 1.6;\n}\n.dash-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-top: 18px;\n  flex-wrap: wrap;\n}\n.data-note[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.4);\n}\n.overlap-badge[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.2);\n  color: #F59E0B;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 20px;\n  border: 1px solid rgba(245, 158, 11, 0.4);\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n.live-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(239, 68, 68, 0.15);\n  color: #EF4444;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  border: 1px solid rgba(239, 68, 68, 0.3);\n}\n.live-badge.sm[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 3px 8px;\n}\n.live-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #EF4444;\n  animation: _ngcontent-%COMP%_pulse 1.5s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.5;\n    transform: scale(1.3);\n  }\n}\n.dash-clock-block[_ngcontent-%COMP%] {\n  text-align: right;\n  flex-shrink: 0;\n}\n.clock-time[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n  letter-spacing: 2px;\n  color: #fff;\n  line-height: 1;\n}\n.clock-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 2px;\n  color: var(--primary);\n  margin-top: 2px;\n}\n.clock-date[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.45);\n  margin-top: 6px;\n}\n.sessions-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n}\n@media (max-width: 900px) {\n  .sessions-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .sessions-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.session-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 12px;\n  padding: 14px 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  transition: border-color 0.2s;\n}\n.session-card.open[_ngcontent-%COMP%] {\n  border-color: rgba(var(--sc, 99,102,241), 0.4);\n  background: rgba(255, 255, 255, 0.08);\n}\n.session-flag[_ngcontent-%COMP%] {\n  font-size: 24px;\n  flex-shrink: 0;\n}\n.session-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.session-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #fff;\n}\n.session-city[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.45);\n}\n.session-right[_ngcontent-%COMP%] {\n  text-align: right;\n  flex-shrink: 0;\n}\n.session-status[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  color: rgba(255, 255, 255, 0.3);\n  background: rgba(255, 255, 255, 0.06);\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.session-status.open[_ngcontent-%COMP%] {\n  color: #22C55E;\n  background: rgba(34, 197, 94, 0.15);\n}\n.session-timer[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.4);\n  margin-top: 4px;\n  font-variant-numeric: tabular-nums;\n}\n.ticker-wrap[_ngcontent-%COMP%] {\n  background: var(--dark, #1A1D2E);\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  overflow: hidden;\n  height: 40px;\n  display: flex;\n  align-items: center;\n}\n.ticker-track[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: max-content;\n  animation: _ngcontent-%COMP%_ticker-scroll 28s linear infinite;\n}\n.ticker-track[_ngcontent-%COMP%]:hover {\n  animation-play-state: paused;\n}\n@keyframes _ngcontent-%COMP%_ticker-scroll {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-50%);\n  }\n}\n.tick-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 0 20px;\n  border-right: 1px solid rgba(255, 255, 255, 0.06);\n  font-size: 12.5px;\n  white-space: nowrap;\n}\n.tick-sym[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.7);\n}\n.tick-price[_ngcontent-%COMP%] {\n  font-variant-numeric: tabular-nums;\n  color: rgba(255, 255, 255, 0.9);\n}\n.tick-pct[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n}\n.tick-item.up[_ngcontent-%COMP%]   .tick-pct[_ngcontent-%COMP%] {\n  color: #22C55E;\n}\n.tick-item.dn[_ngcontent-%COMP%]   .tick-pct[_ngcontent-%COMP%] {\n  color: #EF4444;\n}\n.watchlist-section[_ngcontent-%COMP%] {\n  padding: 48px 0;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  margin-bottom: 24px;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text);\n}\n.section-note[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.watchlist-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n@media (max-width: 1100px) {\n  .watchlist-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .watchlist-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .watchlist-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.inst-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  padding: 16px;\n  transition:\n    box-shadow 0.2s,\n    border-color 0.2s,\n    transform 0.1s;\n  cursor: default;\n}\n.inst-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-md);\n  transform: translateY(-2px);\n}\n.inst-card.up[_ngcontent-%COMP%] {\n  border-top: 2px solid #22C55E;\n}\n.inst-card.dn[_ngcontent-%COMP%] {\n  border-top: 2px solid #EF4444;\n}\n.inst-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 2px;\n}\n.inst-symbol[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text);\n  display: block;\n}\n.inst-cat[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--text-muted);\n  display: block;\n  margin-top: 1px;\n}\n.inst-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 7px;\n  border-radius: 4px;\n  flex-shrink: 0;\n}\n.inst-badge.up[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.12);\n  color: #22C55E;\n}\n.inst-badge.dn[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #EF4444;\n}\n.inst-name[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  margin-bottom: 10px;\n}\n.inst-price-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  margin-bottom: 4px;\n}\n.inst-price[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text);\n  font-variant-numeric: tabular-nums;\n}\n.inst-chg[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n}\n.inst-chg.up[_ngcontent-%COMP%] {\n  color: #22C55E;\n}\n.inst-chg.dn[_ngcontent-%COMP%] {\n  color: #EF4444;\n}\n.inst-hl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  display: flex;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n.inst-spark[_ngcontent-%COMP%] {\n  margin: 8px -4px 8px;\n}\n.inst-bidask[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 11px;\n  color: var(--text-muted);\n  font-variant-numeric: tabular-nums;\n  border-top: 1px solid var(--border-light);\n  padding-top: 8px;\n}\n.bid-val[_ngcontent-%COMP%], \n.ask-val[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.bid-val[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.ask-val[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 9px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  opacity: 0.6;\n}\n.spread-sep[_ngcontent-%COMP%] {\n  color: var(--border);\n}\n.tools-section[_ngcontent-%COMP%] {\n  padding: 0 0 64px;\n}\n.tools-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .tools-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.calc-panel[_ngcontent-%COMP%], \n.spread-panel[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: 16px;\n  padding: 28px;\n}\n.calc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 6px;\n  color: var(--text);\n}\n.calc-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n}\n.calc-header[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: var(--primary);\n  flex-shrink: 0;\n}\n.calc-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin-bottom: 22px;\n}\n.calc-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  margin-bottom: 22px;\n}\n.calc-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 6px;\n}\n.calc-input-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.calc-prefix[_ngcontent-%COMP%], \n.calc-suffix[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  background: var(--bg);\n  font-size: 13px;\n  color: var(--text-muted);\n  border: none;\n}\n.calc-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.calc-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 9px 12px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: var(--font);\n  background: var(--bg);\n  color: var(--text);\n  outline: none;\n  transition: border-color 0.15s;\n}\n.calc-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n}\n.calc-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n}\n.risk-bar-wrap[_ngcontent-%COMP%] {\n  height: 4px;\n  background: var(--border);\n  border-radius: 2px;\n  margin-top: 8px;\n  overflow: hidden;\n}\n.risk-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 2px;\n  transition: width 0.3s, background 0.3s;\n}\n.risk-level[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  margin-top: 4px;\n  text-align: right;\n  transition: color 0.3s;\n}\n.calc-results[_ngcontent-%COMP%] {\n  background: var(--bg);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 14px;\n}\n.calc-res-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 16px;\n  border-bottom: 1px solid var(--border-light);\n}\n.calc-res-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.calc-res-item.highlight[_ngcontent-%COMP%] {\n  background: rgba(0, 184, 160, 0.05);\n}\n.cr-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.cr-val[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text);\n  font-variant-numeric: tabular-nums;\n}\n.cr-risk[_ngcontent-%COMP%] {\n  color: #EF4444;\n}\n.cr-primary[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 18px;\n}\n.cr-green[_ngcontent-%COMP%] {\n  color: #22C55E;\n}\n.calc-note[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  line-height: 1.5;\n}\n.spread-header-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 6px;\n}\n.spread-table[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.st-head[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.2fr 1fr 1fr 0.7fr 1fr;\n  padding: 8px 10px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: var(--text-muted);\n  border-bottom: 1px solid var(--border);\n}\n.st-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.2fr 1fr 1fr 0.7fr 1fr;\n  padding: 9px 10px;\n  border-bottom: 1px solid var(--border-light);\n  font-size: 12.5px;\n  font-variant-numeric: tabular-nums;\n  transition: background 0.1s;\n  align-items: center;\n}\n.st-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.st-row[_ngcontent-%COMP%]:hover {\n  background: var(--bg);\n}\n.st-sym[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-weight: 700;\n  font-size: 13px;\n  color: var(--text);\n}\n.st-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--border);\n  flex-shrink: 0;\n}\n.st-dot.up[_ngcontent-%COMP%] {\n  background: #22C55E;\n}\n.st-dot.dn[_ngcontent-%COMP%] {\n  background: #EF4444;\n}\n.st-num[_ngcontent-%COMP%] {\n  color: var(--text-2);\n}\n.st-spread[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--text);\n}\n.st-chg.up[_ngcontent-%COMP%] {\n  color: #22C55E;\n  font-weight: 600;\n}\n.st-chg.dn[_ngcontent-%COMP%] {\n  color: #EF4444;\n  font-weight: 600;\n}\n.overlap-info[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 14px;\n  background: var(--bg);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.oi-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.oi-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--border);\n  flex-shrink: 0;\n}\n.oi-dot.active[_ngcontent-%COMP%] {\n  background: #22C55E;\n  animation: _ngcontent-%COMP%_pulse 1.5s infinite;\n}\n.oi-row.active[_ngcontent-%COMP%] {\n  color: var(--text);\n}\n.oi-status[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  color: var(--text-muted);\n}\n.oi-row.active[_ngcontent-%COMP%]   .oi-status[_ngcontent-%COMP%] {\n  color: #22C55E;\n}\n.dash-cta[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0f1117 0%,\n      #1a1d2e 100%);\n  padding: 64px 0;\n  text-align: center;\n  color: #fff;\n}\n.dash-cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 800;\n  margin-bottom: 12px;\n}\n.dash-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.6);\n  margin-bottom: 28px;\n}\n.dash-cta-btns[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n.btn-cta-primary[_ngcontent-%COMP%] {\n  padding: 13px 28px;\n  background: var(--primary);\n  color: #fff;\n  border-radius: 8px;\n  font-weight: 700;\n  font-size: 14px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  text-decoration: none;\n  transition: background 0.2s;\n}\n.btn-cta-primary[_ngcontent-%COMP%]:hover {\n  background: var(--primary-hover);\n}\n.btn-cta-outline[_ngcontent-%COMP%] {\n  padding: 13px 28px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: rgba(255, 255, 255, 0.8);\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 14px;\n  text-decoration: none;\n  transition: border-color 0.2s, color 0.2s;\n}\n.btn-cta-outline[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [CommonModule, FormsModule, RouterModule, SparklineComponent, DatePipe], template: `<!-- Breadcrumb -->
<nav class="breadcrumb container">
  <a routerLink="/">Home</a>
  <span class="bc-sep">\u203A</span>
  <span>Live Dashboard</span>
</nav>

<!-- \u2500\u2500 Hero \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<section class="dash-hero">
  <div class="container">
    <div class="dash-hero-inner">
      <div class="dash-hero-left">
        <span class="sect-label">Real-time Market Data</span>
        <h1 class="dash-title">Live Market Dashboard</h1>
        <p class="dash-sub">Track live prices, monitor global sessions and calculate your risk \u2014 all in one place.</p>
        <div class="dash-meta">
          <span class="live-badge"><span class="live-dot"></span>LIVE</span>
          <span class="data-note">8 instruments \xB7 updates every 600ms</span>
          @if (londonNYOverlap) {
            <span class="overlap-badge">\u{1F525} London\u2013NY Overlap</span>
          }
        </div>
      </div>
      <div class="dash-clock-block">
        <div class="clock-time">{{ now() | date:'HH:mm:ss' }}</div>
        <div class="clock-label">UTC</div>
        <div class="clock-date">{{ now() | date:'EEEE, d MMM yyyy' }}</div>
      </div>
    </div>

    <!-- Sessions -->
    <div class="sessions-row">
      @for (s of sessions; track s.name) {
        <div class="session-card" [class.open]="isSessionOpen(s)" [style.--sc]="s.color">
          <div class="session-flag">{{ s.flag }}</div>
          <div class="session-body">
            <div class="session-name">{{ s.name }}</div>
            <div class="session-city">{{ s.city }}</div>
          </div>
          <div class="session-right">
            <span class="session-status" [class.open]="isSessionOpen(s)">
              {{ isSessionOpen(s) ? 'OPEN' : 'CLOSED' }}
            </span>
            <span class="session-timer">
              {{ isSessionOpen(s) ? 'Closes in' : 'Opens in' }} {{ timeUntil(s) }}
            </span>
          </div>
        </div>
      }
    </div>
  </div>
</section>

<!-- \u2500\u2500 Ticker Strip \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<div class="ticker-wrap" aria-hidden="true">
  <div class="ticker-track">
    @for (inst of instruments(); track inst.symbol) {
      <span class="tick-item" [class.up]="inst.changePct >= 0" [class.dn]="inst.changePct < 0">
        <span class="tick-sym">{{ inst.symbol }}</span>
        <span class="tick-price">{{ fmt(inst.price, inst.digits) }}</span>
        <span class="tick-pct">{{ fmtPct(inst.changePct) }}</span>
      </span>
    }
    @for (inst of instruments(); track inst.symbol) {
      <span class="tick-item" [class.up]="inst.changePct >= 0" [class.dn]="inst.changePct < 0">
        <span class="tick-sym">{{ inst.symbol }}</span>
        <span class="tick-price">{{ fmt(inst.price, inst.digits) }}</span>
        <span class="tick-pct">{{ fmtPct(inst.changePct) }}</span>
      </span>
    }
  </div>
</div>

<!-- \u2500\u2500 Watchlist \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<section class="watchlist-section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Live Watchlist</h2>
      <span class="section-note">Prices refresh every 600ms</span>
    </div>
    <div class="watchlist-grid">
      @for (inst of instruments(); track inst.symbol) {
        <div class="inst-card" [class.up]="inst.changePct >= 0" [class.dn]="inst.changePct < 0">
          <div class="inst-top">
            <div>
              <span class="inst-symbol">{{ inst.symbol }}</span>
              <span class="inst-cat">{{ inst.category }}</span>
            </div>
            <span class="inst-badge" [class.up]="inst.changePct >= 0" [class.dn]="inst.changePct < 0">
              {{ fmtPct(inst.changePct) }}
            </span>
          </div>
          <div class="inst-name">{{ inst.name }}</div>
          <div class="inst-price-row">
            <span class="inst-price">{{ fmt(inst.price, inst.digits) }}</span>
            <span class="inst-chg" [class.up]="inst.change >= 0" [class.dn]="inst.change < 0">
              {{ fmtChange(inst.change, inst.digits) }}
            </span>
          </div>
          <div class="inst-hl">
            <span>H: {{ fmt(inst.high, inst.digits) }}</span>
            <span>L: {{ fmt(inst.low, inst.digits) }}</span>
          </div>
          <div class="inst-spark">
            <app-sparkline [prices]="inst.history" [up]="inst.changePct >= 0" [w]="160" [h]="48" />
          </div>
          <div class="inst-bidask">
            <span class="bid-val">{{ fmt(inst.bid, inst.digits) }}<small>BID</small></span>
            <span class="spread-sep">|</span>
            <span class="ask-val">{{ fmt(inst.ask, inst.digits) }}<small>ASK</small></span>
          </div>
        </div>
      }
    </div>
  </div>
</section>

<!-- \u2500\u2500 Bottom Tools \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<section class="tools-section">
  <div class="container tools-grid">

    <!-- Position Size Calculator -->
    <div class="calc-panel">
      <div class="calc-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="12" y2="14"/></svg>
        <h3>Position Size Calculator</h3>
      </div>
      <p class="calc-desc">Calculate your ideal lot size and risk parameters before entering a trade.</p>

      <div class="calc-fields">
        <div class="calc-field">
          <label>Account Balance (USD)</label>
          <div class="calc-input-wrap">
            <span class="calc-prefix">$</span>
            <input type="number" [(ngModel)]="balance" min="100" step="100" />
          </div>
        </div>
        <div class="calc-field">
          <label>Risk per Trade</label>
          <div class="calc-input-wrap">
            <input type="number" [(ngModel)]="riskPct" min="0.1" max="10" step="0.1" />
            <span class="calc-suffix">%</span>
          </div>
          <div class="risk-bar-wrap">
            <div class="risk-bar" [style.width.%]="riskBarPct" [style.background]="riskColor"></div>
          </div>
          <div class="risk-level" [style.color]="riskColor">{{ riskLevel }}</div>
        </div>
        <div class="calc-field">
          <label>Entry Price</label>
          <input type="number" [(ngModel)]="entry" step="0.00001" />
        </div>
        <div class="calc-field">
          <label>Stop Loss</label>
          <input type="number" [(ngModel)]="stopLoss" step="0.00001" />
        </div>
        <div class="calc-field">
          <label>Take Profit</label>
          <input type="number" [(ngModel)]="tpPrice" step="0.00001" />
        </div>
      </div>

      <div class="calc-results">
        <div class="calc-res-item">
          <span class="cr-label">Risk Amount</span>
          <span class="cr-val cr-risk">\${{ riskAmt.toFixed(2) }}</span>
        </div>
        <div class="calc-res-item">
          <span class="cr-label">Pips at Risk</span>
          <span class="cr-val">{{ (pipDiff * 10000).toFixed(1) }}</span>
        </div>
        <div class="calc-res-item highlight">
          <span class="cr-label">Lot Size</span>
          <span class="cr-val cr-primary">{{ lotSize.toFixed(4) }}</span>
        </div>
        <div class="calc-res-item">
          <span class="cr-label">Units</span>
          <span class="cr-val">{{ (lotSize * 100000).toFixed(0) | number }}</span>
        </div>
        <div class="calc-res-item">
          <span class="cr-label">R:R Ratio</span>
          <span class="cr-val" [class.cr-green]="rrRatio >= 2">1 : {{ rrRatio.toFixed(2) }}</span>
        </div>
        <div class="calc-res-item">
          <span class="cr-label">Potential Profit</span>
          <span class="cr-val cr-green">\u2248 \${{ potentialP.toFixed(2) }}</span>
        </div>
      </div>
      <p class="calc-note">* Simplified for USD-denominated pairs. 1 pip = $10/lot at standard lot size.</p>
    </div>

    <!-- Live Spread Table -->
    <div class="spread-panel">
      <div class="spread-header-row">
        <div class="calc-header">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          <h3>Live Spreads</h3>
        </div>
        <span class="live-badge sm"><span class="live-dot"></span>LIVE</span>
      </div>
      <p class="calc-desc">Real-time bid/ask spreads across all instruments.</p>

      <div class="spread-table">
        <div class="st-head">
          <span>Symbol</span>
          <span>Bid</span>
          <span>Ask</span>
          <span>Spread</span>
          <span>Change</span>
        </div>
        @for (inst of instruments(); track inst.symbol) {
          <div class="st-row" [class.up]="inst.changePct >= 0" [class.dn]="inst.changePct < 0">
            <span class="st-sym">
              <span class="st-dot" [class.up]="inst.changePct >= 0" [class.dn]="inst.changePct < 0"></span>
              {{ inst.symbol }}
            </span>
            <span class="st-num">{{ fmt(inst.bid, inst.digits) }}</span>
            <span class="st-num">{{ fmt(inst.ask, inst.digits) }}</span>
            <span class="st-spread">{{ spreadPips(inst) }}</span>
            <span class="st-chg" [class.up]="inst.changePct >= 0" [class.dn]="inst.changePct < 0">
              {{ fmtPct(inst.changePct) }}
            </span>
          </div>
        }
      </div>

      <!-- Session overlap note -->
      <div class="overlap-info">
        <div class="oi-row" [class.active]="londonNYOverlap">
          <span class="oi-dot" [class.active]="londonNYOverlap"></span>
          <span>London \u2013 New York overlap (13:00\u201317:00 UTC)</span>
          <span class="oi-status">{{ londonNYOverlap ? 'NOW ACTIVE' : 'inactive' }}</span>
        </div>
        <div class="oi-row">
          <span class="oi-dot"></span>
          <span>Tokyo \u2013 London overlap (08:00\u201309:00 UTC)</span>
          <span class="oi-status">{{ (now().getUTCHours() === 8) ? 'NOW ACTIVE' : 'inactive' }}</span>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- \u2500\u2500 CTA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<section class="dash-cta">
  <div class="container">
    <h2>Ready to trade live markets?</h2>
    <p>Open an account in minutes and start trading with real-time execution.</p>
    <div class="dash-cta-btns">
      <a routerLink="/register" class="btn-cta-primary">Open Live Account</a>
      <a routerLink="/accounts" class="btn-cta-outline">Compare Accounts</a>
    </div>
  </div>
</section>
`, styles: ["/* src/app/features/dashboard/dashboard.component.css */\n.breadcrumb {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 24px;\n  font-size: 13px;\n  color: var(--text-muted);\n  margin-top: 64px;\n}\n.breadcrumb a {\n  color: var(--text-muted);\n  text-decoration: none;\n}\n.breadcrumb a:hover {\n  color: var(--primary);\n}\n.bc-sep {\n  opacity: 0.4;\n}\n.dash-hero {\n  background:\n    linear-gradient(\n      135deg,\n      #0f1117 0%,\n      #1a1d2e 60%,\n      #0d1f1c 100%);\n  padding: 40px 0 36px;\n  color: #fff;\n}\n.dash-hero-inner {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 24px;\n  flex-wrap: wrap;\n  margin-bottom: 32px;\n}\n.dash-title {\n  font-size: clamp(26px, 4vw, 40px);\n  font-weight: 800;\n  margin: 8px 0 12px;\n  color: #fff;\n  line-height: 1.2;\n}\n.dash-sub {\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.6);\n  max-width: 480px;\n  line-height: 1.6;\n}\n.dash-meta {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-top: 18px;\n  flex-wrap: wrap;\n}\n.data-note {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.4);\n}\n.overlap-badge {\n  background: rgba(245, 158, 11, 0.2);\n  color: #F59E0B;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 20px;\n  border: 1px solid rgba(245, 158, 11, 0.4);\n  animation: pulse 2s infinite;\n}\n.live-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: rgba(239, 68, 68, 0.15);\n  color: #EF4444;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  border: 1px solid rgba(239, 68, 68, 0.3);\n}\n.live-badge.sm {\n  font-size: 10px;\n  padding: 3px 8px;\n}\n.live-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #EF4444;\n  animation: pulse 1.5s infinite;\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.5;\n    transform: scale(1.3);\n  }\n}\n.dash-clock-block {\n  text-align: right;\n  flex-shrink: 0;\n}\n.clock-time {\n  font-size: 36px;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n  letter-spacing: 2px;\n  color: #fff;\n  line-height: 1;\n}\n.clock-label {\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 2px;\n  color: var(--primary);\n  margin-top: 2px;\n}\n.clock-date {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.45);\n  margin-top: 6px;\n}\n.sessions-row {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n}\n@media (max-width: 900px) {\n  .sessions-row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .sessions-row {\n    grid-template-columns: 1fr;\n  }\n}\n.session-card {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 12px;\n  padding: 14px 16px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  transition: border-color 0.2s;\n}\n.session-card.open {\n  border-color: rgba(var(--sc, 99,102,241), 0.4);\n  background: rgba(255, 255, 255, 0.08);\n}\n.session-flag {\n  font-size: 24px;\n  flex-shrink: 0;\n}\n.session-body {\n  flex: 1;\n  min-width: 0;\n}\n.session-name {\n  font-size: 14px;\n  font-weight: 600;\n  color: #fff;\n}\n.session-city {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.45);\n}\n.session-right {\n  text-align: right;\n  flex-shrink: 0;\n}\n.session-status {\n  display: block;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  color: rgba(255, 255, 255, 0.3);\n  background: rgba(255, 255, 255, 0.06);\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.session-status.open {\n  color: #22C55E;\n  background: rgba(34, 197, 94, 0.15);\n}\n.session-timer {\n  display: block;\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.4);\n  margin-top: 4px;\n  font-variant-numeric: tabular-nums;\n}\n.ticker-wrap {\n  background: var(--dark, #1A1D2E);\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  overflow: hidden;\n  height: 40px;\n  display: flex;\n  align-items: center;\n}\n.ticker-track {\n  display: flex;\n  align-items: center;\n  width: max-content;\n  animation: ticker-scroll 28s linear infinite;\n}\n.ticker-track:hover {\n  animation-play-state: paused;\n}\n@keyframes ticker-scroll {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-50%);\n  }\n}\n.tick-item {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 0 20px;\n  border-right: 1px solid rgba(255, 255, 255, 0.06);\n  font-size: 12.5px;\n  white-space: nowrap;\n}\n.tick-sym {\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.7);\n}\n.tick-price {\n  font-variant-numeric: tabular-nums;\n  color: rgba(255, 255, 255, 0.9);\n}\n.tick-pct {\n  font-size: 11px;\n  font-weight: 600;\n}\n.tick-item.up .tick-pct {\n  color: #22C55E;\n}\n.tick-item.dn .tick-pct {\n  color: #EF4444;\n}\n.watchlist-section {\n  padding: 48px 0;\n}\n.section-header {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  margin-bottom: 24px;\n}\n.section-title {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--text);\n}\n.section-note {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.watchlist-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n@media (max-width: 1100px) {\n  .watchlist-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .watchlist-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .watchlist-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.inst-card {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  padding: 16px;\n  transition:\n    box-shadow 0.2s,\n    border-color 0.2s,\n    transform 0.1s;\n  cursor: default;\n}\n.inst-card:hover {\n  box-shadow: var(--shadow-md);\n  transform: translateY(-2px);\n}\n.inst-card.up {\n  border-top: 2px solid #22C55E;\n}\n.inst-card.dn {\n  border-top: 2px solid #EF4444;\n}\n.inst-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 2px;\n}\n.inst-symbol {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text);\n  display: block;\n}\n.inst-cat {\n  font-size: 10px;\n  color: var(--text-muted);\n  display: block;\n  margin-top: 1px;\n}\n.inst-badge {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 7px;\n  border-radius: 4px;\n  flex-shrink: 0;\n}\n.inst-badge.up {\n  background: rgba(34, 197, 94, 0.12);\n  color: #22C55E;\n}\n.inst-badge.dn {\n  background: rgba(239, 68, 68, 0.12);\n  color: #EF4444;\n}\n.inst-name {\n  font-size: 11px;\n  color: var(--text-muted);\n  margin-bottom: 10px;\n}\n.inst-price-row {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  margin-bottom: 4px;\n}\n.inst-price {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--text);\n  font-variant-numeric: tabular-nums;\n}\n.inst-chg {\n  font-size: 12px;\n  font-weight: 600;\n}\n.inst-chg.up {\n  color: #22C55E;\n}\n.inst-chg.dn {\n  color: #EF4444;\n}\n.inst-hl {\n  font-size: 11px;\n  color: var(--text-muted);\n  display: flex;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n.inst-spark {\n  margin: 8px -4px 8px;\n}\n.inst-bidask {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 11px;\n  color: var(--text-muted);\n  font-variant-numeric: tabular-nums;\n  border-top: 1px solid var(--border-light);\n  padding-top: 8px;\n}\n.bid-val,\n.ask-val {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.bid-val small,\n.ask-val small {\n  font-size: 9px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  opacity: 0.6;\n}\n.spread-sep {\n  color: var(--border);\n}\n.tools-section {\n  padding: 0 0 64px;\n}\n.tools-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .tools-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.calc-panel,\n.spread-panel {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: 16px;\n  padding: 28px;\n}\n.calc-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 6px;\n  color: var(--text);\n}\n.calc-header h3 {\n  font-size: 18px;\n  font-weight: 700;\n}\n.calc-header svg {\n  color: var(--primary);\n  flex-shrink: 0;\n}\n.calc-desc {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin-bottom: 22px;\n}\n.calc-fields {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  margin-bottom: 22px;\n}\n.calc-field label {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 6px;\n}\n.calc-input-wrap {\n  display: flex;\n  align-items: center;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.calc-prefix,\n.calc-suffix {\n  padding: 8px 10px;\n  background: var(--bg);\n  font-size: 13px;\n  color: var(--text-muted);\n  border: none;\n}\n.calc-input-wrap input,\n.calc-field input {\n  width: 100%;\n  padding: 9px 12px;\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: var(--font);\n  background: var(--bg);\n  color: var(--text);\n  outline: none;\n  transition: border-color 0.15s;\n}\n.calc-input-wrap input {\n  border: none;\n  background: transparent;\n}\n.calc-field input:focus {\n  border-color: var(--primary);\n}\n.risk-bar-wrap {\n  height: 4px;\n  background: var(--border);\n  border-radius: 2px;\n  margin-top: 8px;\n  overflow: hidden;\n}\n.risk-bar {\n  height: 100%;\n  border-radius: 2px;\n  transition: width 0.3s, background 0.3s;\n}\n.risk-level {\n  font-size: 11px;\n  font-weight: 600;\n  margin-top: 4px;\n  text-align: right;\n  transition: color 0.3s;\n}\n.calc-results {\n  background: var(--bg);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  overflow: hidden;\n  margin-bottom: 14px;\n}\n.calc-res-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 16px;\n  border-bottom: 1px solid var(--border-light);\n}\n.calc-res-item:last-child {\n  border-bottom: none;\n}\n.calc-res-item.highlight {\n  background: rgba(0, 184, 160, 0.05);\n}\n.cr-label {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.cr-val {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text);\n  font-variant-numeric: tabular-nums;\n}\n.cr-risk {\n  color: #EF4444;\n}\n.cr-primary {\n  color: var(--primary);\n  font-size: 18px;\n}\n.cr-green {\n  color: #22C55E;\n}\n.calc-note {\n  font-size: 11px;\n  color: var(--text-muted);\n  line-height: 1.5;\n}\n.spread-header-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 6px;\n}\n.spread-table {\n  margin-top: 16px;\n}\n.st-head {\n  display: grid;\n  grid-template-columns: 1.2fr 1fr 1fr 0.7fr 1fr;\n  padding: 8px 10px;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: var(--text-muted);\n  border-bottom: 1px solid var(--border);\n}\n.st-row {\n  display: grid;\n  grid-template-columns: 1.2fr 1fr 1fr 0.7fr 1fr;\n  padding: 9px 10px;\n  border-bottom: 1px solid var(--border-light);\n  font-size: 12.5px;\n  font-variant-numeric: tabular-nums;\n  transition: background 0.1s;\n  align-items: center;\n}\n.st-row:last-child {\n  border-bottom: none;\n}\n.st-row:hover {\n  background: var(--bg);\n}\n.st-sym {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-weight: 700;\n  font-size: 13px;\n  color: var(--text);\n}\n.st-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--border);\n  flex-shrink: 0;\n}\n.st-dot.up {\n  background: #22C55E;\n}\n.st-dot.dn {\n  background: #EF4444;\n}\n.st-num {\n  color: var(--text-2);\n}\n.st-spread {\n  font-weight: 600;\n  color: var(--text);\n}\n.st-chg.up {\n  color: #22C55E;\n  font-weight: 600;\n}\n.st-chg.dn {\n  color: #EF4444;\n  font-weight: 600;\n}\n.overlap-info {\n  margin-top: 20px;\n  padding: 14px;\n  background: var(--bg);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.oi-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.oi-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--border);\n  flex-shrink: 0;\n}\n.oi-dot.active {\n  background: #22C55E;\n  animation: pulse 1.5s infinite;\n}\n.oi-row.active {\n  color: var(--text);\n}\n.oi-status {\n  margin-left: auto;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  color: var(--text-muted);\n}\n.oi-row.active .oi-status {\n  color: #22C55E;\n}\n.dash-cta {\n  background:\n    linear-gradient(\n      135deg,\n      #0f1117 0%,\n      #1a1d2e 100%);\n  padding: 64px 0;\n  text-align: center;\n  color: #fff;\n}\n.dash-cta h2 {\n  font-size: 32px;\n  font-weight: 800;\n  margin-bottom: 12px;\n}\n.dash-cta p {\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.6);\n  margin-bottom: 28px;\n}\n.dash-cta-btns {\n  display: flex;\n  justify-content: center;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n.btn-cta-primary {\n  padding: 13px 28px;\n  background: var(--primary);\n  color: #fff;\n  border-radius: 8px;\n  font-weight: 700;\n  font-size: 14px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  text-decoration: none;\n  transition: background 0.2s;\n}\n.btn-cta-primary:hover {\n  background: var(--primary-hover);\n}\n.btn-cta-outline {\n  padding: 13px 28px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  color: rgba(255, 255, 255, 0.8);\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 14px;\n  text-decoration: none;\n  transition: border-color 0.2s, color 0.2s;\n}\n.btn-cta-outline:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/features/dashboard/dashboard.component.ts", lineNumber: 25 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-3JPG2USS.js.map

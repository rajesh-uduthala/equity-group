import {
  RouterLink,
  RouterModule,
  RouterOutlet,
  bootstrapApplication,
  provideRouter,
  withInMemoryScrolling,
  withViewTransitions
} from "./chunk-EG5WAOH2.js";
import {
  CommonModule,
  Component,
  HostListener,
  Injectable,
  effect,
  inject,
  provideZoneChangeDetection,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-W3ZQDAPL.js";

// src/app/core/services/theme.service.ts
var ThemeService = class _ThemeService {
  STORAGE_KEY = "equiti-theme";
  isDark = signal(this.getInitialTheme(), ...ngDevMode ? [{ debugName: "isDark" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    effect(() => {
      const dark = this.isDark();
      document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
      localStorage.setItem(this.STORAGE_KEY, dark ? "dark" : "light");
    });
  }
  toggle() {
    this.isDark.update((v) => !v);
  }
  getInitialTheme() {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored)
      return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  static \u0275fac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/shared/components/navbar/navbar.component.ts
function NavbarComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_11_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275element(1, "div", 29);
    \u0275\u0275elementStart(2, "div", 30)(3, "div", 31)(4, "a", 32)(5, "span", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 34);
    \u0275\u0275element(7, "rect", 35)(8, "rect", 36)(9, "rect", 37)(10, "line", 38)(11, "line", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(12, " Forex ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "a", 32)(14, "span", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 34);
    \u0275\u0275element(16, "polyline", 40)(17, "polyline", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(18, " Indices ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "a", 32)(20, "span", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 34);
    \u0275\u0275element(22, "path", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(23, " Commodities ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "a", 32)(25, "span", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 34);
    \u0275\u0275element(27, "circle", 43)(28, "path", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(29, " Shares ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(30, "a", 32)(31, "span", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 34);
    \u0275\u0275element(33, "path", 45)(34, "path", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(35, " ETFs ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(36, "a", 32)(37, "span", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(38, "svg", 34);
    \u0275\u0275element(39, "circle", 43)(40, "path", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(41, " Crypto CFDs ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(42, "a", 32)(43, "span", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(44, "svg", 34);
    \u0275\u0275element(45, "path", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(46, " Gold Option CFDs ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(47, "a", 49)(48, "span", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(49, "svg", 34);
    \u0275\u0275element(50, "rect", 50)(51, "rect", 51)(52, "rect", 52)(53, "rect", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(54, " All products ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(55, "div", 54);
    \u0275\u0275elementStart(56, "div", 55)(57, "p", 56);
    \u0275\u0275text(58, "Trading info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "a", 57);
    \u0275\u0275text(60, "Deposits & withdrawals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "a", 57);
    \u0275\u0275text(62, "Financing fees");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "a", 57);
    \u0275\u0275text(64, "Expiry dates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "a", 57);
    \u0275\u0275text(66, "Holiday hours");
    \u0275\u0275elementEnd()()()();
  }
}
function NavbarComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_18_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275element(1, "div", 29);
    \u0275\u0275elementStart(2, "div", 59)(3, "a", 60);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_18_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeMenu.set(null));
    });
    \u0275\u0275elementStart(4, "span", 61);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 62);
    \u0275\u0275element(6, "rect", 63);
    \u0275\u0275elementStart(7, "text", 64);
    \u0275\u0275text(8, "4");
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "span", 65)(10, "strong");
    \u0275\u0275text(11, "MetaTrader 4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 66);
    \u0275\u0275text(13, "Industry-leading platform");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "a", 32)(15, "span", 61);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 62);
    \u0275\u0275element(17, "rect", 63);
    \u0275\u0275elementStart(18, "text", 64);
    \u0275\u0275text(19, "5");
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "span", 65)(21, "strong");
    \u0275\u0275text(22, "MetaTrader 5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 66);
    \u0275\u0275text(24, "Next generation platform");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "a", 49)(26, "span", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 34);
    \u0275\u0275element(28, "rect", 50)(29, "rect", 51)(30, "rect", 52)(31, "rect", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(32, " All platforms ");
    \u0275\u0275elementEnd()()();
  }
}
function NavbarComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_25_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275element(1, "div", 29);
    \u0275\u0275elementStart(2, "div", 59)(3, "a", 67);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_25_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeMenu.set(null));
    });
    \u0275\u0275elementStart(4, "span", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 34);
    \u0275\u0275element(6, "path", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "span", 65)(8, "strong");
    \u0275\u0275text(9, "Trading accounts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 66);
    \u0275\u0275text(11, "Explore account types");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "a", 32)(13, "span", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 34);
    \u0275\u0275element(15, "rect", 69)(16, "path", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "span", 65)(18, "strong");
    \u0275\u0275text(19, "Copy trading");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 66);
    \u0275\u0275text(21, "Follow expert traders");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "a", 32)(23, "span", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 34);
    \u0275\u0275element(25, "circle", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(26, "span", 65)(27, "strong");
    \u0275\u0275text(28, "Demo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 66);
    \u0275\u0275text(30, "Practice risk-free");
    \u0275\u0275elementEnd()()()()();
  }
}
function NavbarComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_32_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275element(1, "div", 29);
    \u0275\u0275elementStart(2, "div", 59)(3, "a", 72);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_32_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeMenu.set(null));
    });
    \u0275\u0275elementStart(4, "span", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 34);
    \u0275\u0275element(6, "rect", 73)(7, "rect", 74)(8, "rect", 75)(9, "rect", 76);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "span", 65)(11, "strong");
    \u0275\u0275text(12, "Live Dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 66);
    \u0275\u0275text(14, "Real-time prices & tools");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "a", 77);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_32_Template_a_click_15_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeMenu.set(null));
    });
    \u0275\u0275elementStart(16, "span", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 34);
    \u0275\u0275element(18, "polyline", 78);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "span", 65)(20, "strong");
    \u0275\u0275text(21, "Trading tools");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 66);
    \u0275\u0275text(23, "Charts, signals & more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "a", 32)(25, "span", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 34);
    \u0275\u0275element(27, "path", 79)(28, "path", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(29, "span", 65)(30, "strong");
    \u0275\u0275text(31, "Education");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 66);
    \u0275\u0275text(33, "Learn to trade smarter");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "a", 32)(35, "span", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(36, "svg", 34);
    \u0275\u0275element(37, "path", 81)(38, "polyline", 82)(39, "polyline", 83);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(40, "span", 65)(41, "strong");
    \u0275\u0275text(42, "News");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 66);
    \u0275\u0275text(44, "Market updates daily");
    \u0275\u0275elementEnd()()()()();
  }
}
function NavbarComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_39_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275element(1, "div", 29);
    \u0275\u0275elementStart(2, "div", 59)(3, "a", 32)(4, "span", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 34);
    \u0275\u0275element(6, "path", 84)(7, "circle", 85)(8, "path", 86)(9, "path", 87);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "span", 65)(11, "strong");
    \u0275\u0275text(12, "Partnerships");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 66);
    \u0275\u0275text(14, "Grow with Equiti");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "a", 32)(16, "span", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 34);
    \u0275\u0275element(18, "path", 88)(19, "circle", 85)(20, "line", 89)(21, "line", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "span", 65)(23, "strong");
    \u0275\u0275text(24, "Refer a friend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 66);
    \u0275\u0275text(26, "Earn rewards together");
    \u0275\u0275elementEnd()()()()();
  }
}
function NavbarComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 15);
    \u0275\u0275element(1, "circle", 91)(2, "line", 92)(3, "line", 93)(4, "line", 94)(5, "line", 95)(6, "line", 96)(7, "line", 97)(8, "line", 98)(9, "line", 99);
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 15);
    \u0275\u0275element(1, "path", 100);
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "a", 101);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_61_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobile());
    });
    \u0275\u0275elementStart(2, "span", 102);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 34);
    \u0275\u0275element(4, "rect", 35)(5, "rect", 36)(6, "rect", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(7, " Forex ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "a", 101);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_61_Template_a_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobile());
    });
    \u0275\u0275elementStart(9, "span", 102);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 34);
    \u0275\u0275element(11, "polyline", 40)(12, "polyline", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(13, " Indices ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "a", 101);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_61_Template_a_click_14_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobile());
    });
    \u0275\u0275elementStart(15, "span", 102);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 34);
    \u0275\u0275element(17, "path", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(18, " Commodities ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "a", 101);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_61_Template_a_click_19_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobile());
    });
    \u0275\u0275elementStart(20, "span", 102);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 34);
    \u0275\u0275element(22, "circle", 43)(23, "path", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(24, " Shares ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(25, "a", 101);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_61_Template_a_click_25_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobile());
    });
    \u0275\u0275elementStart(26, "span", 102);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 34);
    \u0275\u0275element(28, "circle", 43)(29, "path", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(30, " Crypto CFDs ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(31, "a", 101);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_61_Template_a_click_31_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobile());
    });
    \u0275\u0275elementStart(32, "span", 102);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(33, "svg", 34);
    \u0275\u0275element(34, "path", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(35, " Gold Option CFDs ");
    \u0275\u0275elementEnd()();
  }
}
function NavbarComponent_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "a", 103);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_68_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobile());
    });
    \u0275\u0275elementStart(2, "span", 104);
    \u0275\u0275text(3, "4");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " MetaTrader 4 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 101);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_68_Template_a_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobile());
    });
    \u0275\u0275elementStart(6, "span", 104);
    \u0275\u0275text(7, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " MetaTrader 5 ");
    \u0275\u0275elementEnd()();
  }
}
function NavbarComponent_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "a", 105);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_75_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobile());
    });
    \u0275\u0275elementStart(2, "span", 102);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 34);
    \u0275\u0275element(4, "path", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(5, " Trading Accounts ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "a", 101);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_75_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobile());
    });
    \u0275\u0275elementStart(7, "span", 102);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 34);
    \u0275\u0275element(9, "rect", 69)(10, "path", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(11, " Copy Trading ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "a", 101);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_75_Template_a_click_12_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobile());
    });
    \u0275\u0275elementStart(13, "span", 102);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 34);
    \u0275\u0275element(15, "circle", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(16, " Demo Account ");
    \u0275\u0275elementEnd()();
  }
}
function NavbarComponent_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "a", 106);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_82_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobile());
    });
    \u0275\u0275elementStart(2, "span", 102);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 34);
    \u0275\u0275element(4, "rect", 73)(5, "rect", 74)(6, "rect", 75)(7, "rect", 76);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(8, " Live Dashboard ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "a", 107);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_82_Template_a_click_9_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobile());
    });
    \u0275\u0275elementStart(10, "span", 102);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 34);
    \u0275\u0275element(12, "polyline", 78);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(13, " Trading Tools ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "a", 101);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_82_Template_a_click_14_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobile());
    });
    \u0275\u0275elementStart(15, "span", 102);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 34);
    \u0275\u0275element(17, "path", 79)(18, "path", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(19, " Education ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "a", 101);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_82_Template_a_click_20_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobile());
    });
    \u0275\u0275elementStart(21, "span", 102);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 34);
    \u0275\u0275element(23, "path", 81);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(24, " News ");
    \u0275\u0275elementEnd()();
  }
}
function NavbarComponent_Conditional_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "a", 101);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_89_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobile());
    });
    \u0275\u0275elementStart(2, "span", 102);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 34);
    \u0275\u0275element(4, "path", 84)(5, "circle", 85)(6, "path", 86)(7, "path", 87);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(8, " Partnerships ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "a", 101);
    \u0275\u0275listener("click", function NavbarComponent_Conditional_89_Template_a_click_9_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobile());
    });
    \u0275\u0275elementStart(10, "span", 102);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 34);
    \u0275\u0275element(12, "path", 88)(13, "circle", 85)(14, "line", 89)(15, "line", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(16, " Refer a Friend ");
    \u0275\u0275elementEnd()();
  }
}
function NavbarComponent_Conditional_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 108);
    \u0275\u0275element(1, "circle", 91)(2, "line", 92)(3, "line", 93)(4, "line", 94)(5, "line", 95)(6, "line", 96)(7, "line", 97)(8, "line", 98)(9, "line", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Light Mode ");
  }
}
function NavbarComponent_Conditional_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 108);
    \u0275\u0275element(1, "path", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Dark Mode ");
  }
}
var NavbarComponent = class _NavbarComponent {
  scrolled = signal(false, ...ngDevMode ? [{ debugName: "scrolled" }] : (
    /* istanbul ignore next */
    []
  ));
  mobileOpen = signal(false, ...ngDevMode ? [{ debugName: "mobileOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  activeMenu = signal(null, ...ngDevMode ? [{ debugName: "activeMenu" }] : (
    /* istanbul ignore next */
    []
  ));
  activeMobileSection = signal(null, ...ngDevMode ? [{ debugName: "activeMobileSection" }] : (
    /* istanbul ignore next */
    []
  ));
  theme = inject(ThemeService);
  constructor() {
  }
  onScroll() {
    this.scrolled.set(window.scrollY > 40);
  }
  toggleMobile() {
    this.mobileOpen.update((v) => !v);
    if (!this.mobileOpen())
      this.activeMobileSection.set(null);
  }
  closeMobile() {
    this.mobileOpen.set(false);
    this.activeMenu.set(null);
    this.activeMobileSection.set(null);
  }
  toggleMenu(name, event) {
    event.stopPropagation();
    this.activeMenu.set(this.activeMenu() === name ? null : name);
  }
  toggleMobileSection(name) {
    this.activeMobileSection.set(this.activeMobileSection() === name ? null : name);
  }
  onDocClick() {
    this.activeMenu.set(null);
  }
  static \u0275fac = function NavbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavbarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("scroll", function NavbarComponent_scroll_HostBindingHandler() {
        return ctx.onScroll();
      }, \u0275\u0275resolveWindow)("click", function NavbarComponent_click_HostBindingHandler() {
        return ctx.onDocClick();
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 96, vars: 60, consts: [[1, "navbar"], [1, "nav-inner"], ["routerLink", "/", 1, "logo", 3, "click"], ["src", "https://eq-cdn.equiti-me.com/website/documents/equiti-company-logo.svg", "alt", "Equiti", 1, "logo-img"], ["aria-label", "Main navigation", 1, "nav-links"], [1, "nav-item", 3, "click"], [1, "nav-label"], [1, "caret"], ["width", "10", "height", "6", "viewBox", "0 0 10 6", "fill", "none"], ["d", "M1 1l4 4 4-4", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "dropdown", "products-dd"], [1, "dropdown"], ["href", "#", 1, "nav-plain"], [1, "nav-actions"], [1, "theme-toggle", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["routerLink", "/register", 1, "btn-start"], ["aria-label", "Toggle menu", 1, "hamburger", 3, "click"], ["role", "navigation", 1, "mobile-menu"], ["routerLink", "/register", 1, "mm-cta-top", 3, "click"], [1, "mm-section"], [1, "mm-header", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "mm-chevron"], ["points", "6 9 12 15 18 9"], [1, "mm-items"], ["href", "#", 1, "mm-standalone", 3, "click"], [1, "mm-actions"], [1, "mm-theme-toggle", 3, "click"], [1, "dropdown", "products-dd", 3, "click"], [1, "dd-tip"], [1, "dd-body", "products-body"], [1, "dd-col"], ["href", "#", 1, "dd-item"], [1, "dd-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8"], ["x", "3", "y", "12", "width", "3", "height", "9", "rx", "1"], ["x", "10.5", "y", "6", "width", "3", "height", "15", "rx", "1"], ["x", "18", "y", "3", "width", "3", "height", "18", "rx", "1"], ["x1", "4.5", "y1", "8", "x2", "4.5", "y2", "11"], ["x1", "12", "y1", "2", "x2", "12", "y2", "5"], ["points", "22 7 13.5 15.5 8.5 10.5 2 17"], ["points", "16 7 22 7 22 13"], ["d", "M12 2C8 7 5 10.5 5 14a7 7 0 0 0 14 0c0-3.5-3-7-7-12z"], ["cx", "12", "cy", "12", "r", "9"], ["d", "M12 8v4l3 3"], ["d", "M7 16l5-12 5 12M9.5 10.5h5"], ["d", "M3 20h18"], ["d", "M12 6v2m0 8v2M9.5 9.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5c0 2.5-5 2.5-5 5 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5"], ["d", "M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"], ["href", "#", 1, "dd-item", "dd-item-all"], ["x", "3", "y", "3", "width", "7", "height", "7", "rx", "1"], ["x", "14", "y", "3", "width", "7", "height", "7", "rx", "1"], ["x", "3", "y", "14", "width", "7", "height", "7", "rx", "1"], ["x", "14", "y", "14", "width", "7", "height", "7", "rx", "1"], [1, "dd-divider-v"], [1, "dd-col", "dd-col-right"], [1, "dd-section-label"], ["href", "#", 1, "dd-item", "dd-item-plain"], [1, "dropdown", 3, "click"], [1, "dd-body"], ["routerLink", "/platforms/metatrader-4", 1, "dd-item", 3, "click"], [1, "dd-icon", "dd-icon-lg"], ["viewBox", "0 0 40 40", "fill", "none"], ["width", "40", "height", "40", "rx", "8", "fill", "#E8FBF8"], ["x", "20", "y", "26", "text-anchor", "middle", "font-size", "16", "font-weight", "700", "fill", "#00B8A0"], [1, "dd-item-text"], [1, "dd-sub"], ["routerLink", "/accounts", 1, "dd-item", 3, "click"], ["d", "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"], ["x", "9", "y", "9", "width", "13", "height", "13", "rx", "2"], ["d", "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"], ["cx", "12", "cy", "12", "r", "9", "stroke-dasharray", "4 2"], ["routerLink", "/dashboard", 1, "dd-item", 3, "click"], ["x", "3", "y", "3", "width", "7", "height", "9", "rx", "1"], ["x", "14", "y", "3", "width", "7", "height", "5", "rx", "1"], ["x", "14", "y", "12", "width", "7", "height", "9", "rx", "1"], ["x", "3", "y", "16", "width", "7", "height", "5", "rx", "1"], ["routerLink", "/trading-tools", 1, "dd-item", 3, "click"], ["points", "22 12 18 12 15 21 9 3 6 12 2 12"], ["d", "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"], ["d", "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"], ["d", "M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10l6 6v8a2 2 0 0 1-2 2z"], ["points", "17 21 17 13 7 13 7 21"], ["points", "7 3 7 8 15 8"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], ["d", "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"], ["x1", "19", "y1", "8", "x2", "19", "y2", "14"], ["x1", "22", "y1", "11", "x2", "16", "y2", "11"], ["cx", "12", "cy", "12", "r", "5"], ["x1", "12", "y1", "1", "x2", "12", "y2", "3"], ["x1", "12", "y1", "21", "x2", "12", "y2", "23"], ["x1", "4.22", "y1", "4.22", "x2", "5.64", "y2", "5.64"], ["x1", "18.36", "y1", "18.36", "x2", "19.78", "y2", "19.78"], ["x1", "1", "y1", "12", "x2", "3", "y2", "12"], ["x1", "21", "y1", "12", "x2", "23", "y2", "12"], ["x1", "4.22", "y1", "19.78", "x2", "5.64", "y2", "18.36"], ["x1", "18.36", "y1", "5.64", "x2", "19.78", "y2", "4.22"], ["d", "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"], ["href", "#", 1, "mm-link", 3, "click"], [1, "mm-icon"], ["routerLink", "/platforms/metatrader-4", 1, "mm-link", 3, "click"], [1, "mm-icon", "mm-icon-badge"], ["routerLink", "/accounts", 1, "mm-link", 3, "click"], ["routerLink", "/dashboard", 1, "mm-link", 3, "click"], ["routerLink", "/trading-tools", 1, "mm-link", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"]], template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275listener("click", function NavbarComponent_Template_a_click_2_listener() {
        return ctx.closeMobile();
      });
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "nav", 4)(5, "div", 5);
      \u0275\u0275listener("click", function NavbarComponent_Template_div_click_5_listener($event) {
        return ctx.toggleMenu("products", $event);
      });
      \u0275\u0275elementStart(6, "span", 6);
      \u0275\u0275text(7, "Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 8);
      \u0275\u0275element(10, "path", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(11, NavbarComponent_Conditional_11_Template, 67, 0, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "div", 5);
      \u0275\u0275listener("click", function NavbarComponent_Template_div_click_12_listener($event) {
        return ctx.toggleMenu("platforms", $event);
      });
      \u0275\u0275elementStart(13, "span", 6);
      \u0275\u0275text(14, "Platforms");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "span", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(16, "svg", 8);
      \u0275\u0275element(17, "path", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(18, NavbarComponent_Conditional_18_Template, 33, 0, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(19, "div", 5);
      \u0275\u0275listener("click", function NavbarComponent_Template_div_click_19_listener($event) {
        return ctx.toggleMenu("accounts", $event);
      });
      \u0275\u0275elementStart(20, "span", 6);
      \u0275\u0275text(21, "Accounts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(23, "svg", 8);
      \u0275\u0275element(24, "path", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(25, NavbarComponent_Conditional_25_Template, 31, 0, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(26, "div", 5);
      \u0275\u0275listener("click", function NavbarComponent_Template_div_click_26_listener($event) {
        return ctx.toggleMenu("insights", $event);
      });
      \u0275\u0275elementStart(27, "span", 6);
      \u0275\u0275text(28, "Insights");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(30, "svg", 8);
      \u0275\u0275element(31, "path", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(32, NavbarComponent_Conditional_32_Template, 45, 0, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(33, "div", 5);
      \u0275\u0275listener("click", function NavbarComponent_Template_div_click_33_listener($event) {
        return ctx.toggleMenu("partners", $event);
      });
      \u0275\u0275elementStart(34, "span", 6);
      \u0275\u0275text(35, "Partners");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "span", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(37, "svg", 8);
      \u0275\u0275element(38, "path", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(39, NavbarComponent_Conditional_39_Template, 27, 0, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(40, "a", 12);
      \u0275\u0275text(41, "About us");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 13)(43, "button", 14);
      \u0275\u0275listener("click", function NavbarComponent_Template_button_click_43_listener($event) {
        ctx.theme.toggle();
        return $event.stopPropagation();
      });
      \u0275\u0275conditionalCreate(44, NavbarComponent_Conditional_44_Template, 10, 0, ":svg:svg", 15)(45, NavbarComponent_Conditional_45_Template, 2, 0, ":svg:svg", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "a", 16);
      \u0275\u0275text(47, "START TRADING");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "button", 17);
      \u0275\u0275listener("click", function NavbarComponent_Template_button_click_48_listener() {
        return ctx.toggleMobile();
      });
      \u0275\u0275element(49, "span")(50, "span")(51, "span");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 18)(53, "a", 19);
      \u0275\u0275listener("click", function NavbarComponent_Template_a_click_53_listener() {
        return ctx.closeMobile();
      });
      \u0275\u0275text(54, "START TRADING");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 20)(56, "button", 21);
      \u0275\u0275listener("click", function NavbarComponent_Template_button_click_56_listener() {
        return ctx.toggleMobileSection("products");
      });
      \u0275\u0275elementStart(57, "span");
      \u0275\u0275text(58, "Products");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(59, "svg", 22);
      \u0275\u0275element(60, "polyline", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(61, NavbarComponent_Conditional_61_Template, 36, 0, "div", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(62, "div", 20)(63, "button", 21);
      \u0275\u0275listener("click", function NavbarComponent_Template_button_click_63_listener() {
        return ctx.toggleMobileSection("platforms");
      });
      \u0275\u0275elementStart(64, "span");
      \u0275\u0275text(65, "Platforms");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(66, "svg", 22);
      \u0275\u0275element(67, "polyline", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(68, NavbarComponent_Conditional_68_Template, 9, 0, "div", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(69, "div", 20)(70, "button", 21);
      \u0275\u0275listener("click", function NavbarComponent_Template_button_click_70_listener() {
        return ctx.toggleMobileSection("accounts");
      });
      \u0275\u0275elementStart(71, "span");
      \u0275\u0275text(72, "Accounts");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(73, "svg", 22);
      \u0275\u0275element(74, "polyline", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(75, NavbarComponent_Conditional_75_Template, 17, 0, "div", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(76, "div", 20)(77, "button", 21);
      \u0275\u0275listener("click", function NavbarComponent_Template_button_click_77_listener() {
        return ctx.toggleMobileSection("insights");
      });
      \u0275\u0275elementStart(78, "span");
      \u0275\u0275text(79, "Insights");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(80, "svg", 22);
      \u0275\u0275element(81, "polyline", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(82, NavbarComponent_Conditional_82_Template, 25, 0, "div", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(83, "div", 20)(84, "button", 21);
      \u0275\u0275listener("click", function NavbarComponent_Template_button_click_84_listener() {
        return ctx.toggleMobileSection("partners");
      });
      \u0275\u0275elementStart(85, "span");
      \u0275\u0275text(86, "Partners");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(87, "svg", 22);
      \u0275\u0275element(88, "polyline", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(89, NavbarComponent_Conditional_89_Template, 17, 0, "div", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(90, "a", 25);
      \u0275\u0275listener("click", function NavbarComponent_Template_a_click_90_listener() {
        return ctx.closeMobile();
      });
      \u0275\u0275text(91, "About us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "div", 26)(93, "button", 27);
      \u0275\u0275listener("click", function NavbarComponent_Template_button_click_93_listener($event) {
        ctx.theme.toggle();
        return $event.stopPropagation();
      });
      \u0275\u0275conditionalCreate(94, NavbarComponent_Conditional_94_Template, 11, 0)(95, NavbarComponent_Conditional_95_Template, 3, 0);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("scrolled", ctx.scrolled());
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.activeMenu() === "products");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("open", ctx.activeMenu() === "products");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.activeMenu() === "products" ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeMenu() === "platforms");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("open", ctx.activeMenu() === "platforms");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.activeMenu() === "platforms" ? 18 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeMenu() === "accounts");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("open", ctx.activeMenu() === "accounts");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.activeMenu() === "accounts" ? 25 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeMenu() === "insights");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("open", ctx.activeMenu() === "insights");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.activeMenu() === "insights" ? 32 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeMenu() === "partners");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("open", ctx.activeMenu() === "partners");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.activeMenu() === "partners" ? 39 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275attribute("aria-label", ctx.theme.isDark() ? "Switch to light mode" : "Switch to dark mode");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.theme.isDark() ? 44 : 45);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("open", ctx.mobileOpen());
      \u0275\u0275attribute("aria-expanded", ctx.mobileOpen());
      \u0275\u0275advance(4);
      \u0275\u0275classProp("open", ctx.mobileOpen());
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.activeMobileSection() === "products");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("open", ctx.activeMobileSection() === "products");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.activeMobileSection() === "products" ? 61 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeMobileSection() === "platforms");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("open", ctx.activeMobileSection() === "platforms");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.activeMobileSection() === "platforms" ? 68 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeMobileSection() === "accounts");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("open", ctx.activeMobileSection() === "accounts");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.activeMobileSection() === "accounts" ? 75 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeMobileSection() === "insights");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("open", ctx.activeMobileSection() === "insights");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.activeMobileSection() === "insights" ? 82 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeMobileSection() === "partners");
      \u0275\u0275advance(3);
      \u0275\u0275classProp("open", ctx.activeMobileSection() === "partners");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.activeMobileSection() === "partners" ? 89 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.theme.isDark() ? 94 : 95);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink], styles: ['\n.navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  background: var(--surface);\n  border-bottom: 1px solid var(--border);\n  transition: box-shadow var(--transition), background var(--transition);\n}\n.navbar.scrolled[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n}\n.nav-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 64px;\n  padding: 0 32px;\n}\n.logo[_ngcontent-%COMP%] {\n  flex: 1;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n}\n.logo-img[_ngcontent-%COMP%] {\n  height: 32px;\n  width: auto;\n  display: block;\n}\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0;\n}\n.nav-item[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 13px;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-2, #374151);\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: color 0.15s;\n  white-space: nowrap;\n}\n.nav-item[_ngcontent-%COMP%]:hover, \n.nav-item.active[_ngcontent-%COMP%] {\n  color: #00B8A0;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: rgba(0, 184, 160, 0.06);\n}\n.nav-label[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.caret[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  opacity: 0.55;\n  transition: transform 0.2s, opacity 0.2s;\n}\n.caret.open[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n  opacity: 1;\n}\n.nav-item.active[_ngcontent-%COMP%]   .caret[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.nav-plain[_ngcontent-%COMP%] {\n  color: var(--text-2, #374151);\n  text-decoration: none;\n  padding: 8px 13px;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  transition: color 0.15s;\n  white-space: nowrap;\n}\n.nav-plain[_ngcontent-%COMP%]:hover {\n  color: var(--text, #1A1D2E);\n}\n.nav-actions[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.theme-toggle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--bg);\n  border: 1px solid var(--border);\n  border-radius: 50%;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition:\n    background 0.2s,\n    color 0.2s,\n    border-color 0.2s;\n  flex-shrink: 0;\n}\n.theme-toggle[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n  color: var(--primary);\n  border-color: var(--primary);\n}\n.btn-start[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 9px 20px;\n  background: var(--primary);\n  color: #fff;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition: background var(--transition);\n}\n.btn-start[_ngcontent-%COMP%]:hover {\n  background: var(--primary-hover);\n}\n.dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 12px);\n  left: 50%;\n  transform: translateX(-50%);\n  min-width: 240px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.13);\n  z-index: 200;\n  animation: _ngcontent-%COMP%_ddFadeIn 0.15s ease;\n}\n.products-dd[_ngcontent-%COMP%] {\n  min-width: 420px;\n  left: 0;\n  transform: none;\n}\n@keyframes _ngcontent-%COMP%_ddFadeIn {\n  from {\n    opacity: 0;\n    transform: translateX(-50%) translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(-50%) translateY(0);\n  }\n}\n.products-dd[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_ddFadeInLeft 0.15s ease;\n}\n@keyframes _ngcontent-%COMP%_ddFadeInLeft {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.dd-tip[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -7px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 14px;\n  height: 7px;\n  overflow: visible;\n}\n.dd-tip[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid var(--surface);\n  filter: drop-shadow(0 -2px 2px rgba(0, 0, 0, 0.06));\n}\n.products-dd[_ngcontent-%COMP%]   .dd-tip[_ngcontent-%COMP%] {\n  left: 60px;\n  transform: none;\n}\n.dd-body[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n.products-body[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n}\n.dd-col[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 4px;\n}\n.dd-col-right[_ngcontent-%COMP%] {\n  flex: 0 0 180px;\n  padding: 4px 8px;\n}\n.dd-divider-v[_ngcontent-%COMP%] {\n  width: 1px;\n  background: #F3F4F6;\n  margin: 8px 4px;\n  flex-shrink: 0;\n}\n.dd-section-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #9CA3AF;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  padding: 8px 12px 4px;\n  margin: 0;\n}\n.dd-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 2px 4px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: #374151;\n  font-size: 13px;\n  font-weight: 500;\n  transition: background 0.12s, color 0.12s;\n  white-space: nowrap;\n}\n.dd-item[_ngcontent-%COMP%]:hover {\n  background: #F5F7FA;\n  color: #00B8A0;\n}\n.dd-item[_ngcontent-%COMP%]:hover   .dd-icon[_ngcontent-%COMP%] {\n  background: #d0f5ef;\n  color: #00B8A0;\n}\n.dd-item-all[_ngcontent-%COMP%] {\n  color: #6B7280;\n  font-weight: 500;\n}\n.dd-item-all[_ngcontent-%COMP%]:hover {\n  color: #00B8A0;\n}\n.dd-item-plain[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: #4B5563;\n  padding: 8px 12px;\n}\n.dd-item-plain[_ngcontent-%COMP%]:hover {\n  color: #00B8A0;\n  background: #F5F7FA;\n}\n.dd-icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #F0FDF9;\n  border-radius: 8px;\n  color: #00B8A0;\n  transition: background 0.12s;\n}\n.dd-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.dd-icon-lg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background: none;\n}\n.dd-icon-lg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n.dd-item-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.dd-item-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1A1D2E;\n}\n.dd-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9CA3AF;\n  font-weight: 400;\n}\n.dd-item[_ngcontent-%COMP%]:hover   .dd-item-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #00B8A0;\n}\n.hamburger[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  gap: 5px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 8px;\n  margin-left: auto;\n}\n.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 22px;\n  height: 2px;\n  background: var(--text);\n  border-radius: 2px;\n  transition: all var(--transition);\n}\n.hamburger.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  transform: translateY(7px) rotate(45deg);\n}\n.hamburger.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  opacity: 0;\n}\n.hamburger.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  transform: translateY(-7px) rotate(-45deg);\n}\n.mobile-menu[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  max-height: calc(100vh - 64px);\n  overflow-y: auto;\n  padding: 16px 20px 28px;\n  border-top: 1px solid var(--border);\n  background: var(--surface);\n}\n.mobile-menu.open[_ngcontent-%COMP%] {\n  display: flex;\n}\n.mm-cta-top[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  padding: 13px;\n  margin-bottom: 8px;\n  background: var(--primary);\n  color: #fff;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition: background var(--transition);\n}\n.mm-cta-top[_ngcontent-%COMP%]:hover {\n  background: var(--primary-hover);\n}\n.mm-section[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border);\n}\n.mm-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 16px 4px;\n  background: none;\n  border: none;\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--text-2, #374151);\n  cursor: pointer;\n  text-align: left;\n  transition: color 0.15s;\n}\n.mm-header.active[_ngcontent-%COMP%], \n.mm-header[_ngcontent-%COMP%]:hover {\n  color: #00B8A0;\n}\n.mm-chevron[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  transition: transform 0.2s;\n  color: #9CA3AF;\n}\n.mm-chevron.open[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n  color: #00B8A0;\n}\n.mm-header.active[_ngcontent-%COMP%]   .mm-chevron[_ngcontent-%COMP%] {\n  color: #00B8A0;\n}\n.mm-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0 4px 12px;\n  gap: 2px;\n}\n.mm-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 10px;\n  border-radius: 8px;\n  color: var(--text-2, #374151);\n  text-decoration: none;\n  font-size: 15px;\n  font-weight: 500;\n  transition: color 0.15s, background 0.15s;\n}\n.mm-link[_ngcontent-%COMP%]:hover {\n  color: #00B8A0;\n  background: rgba(0, 184, 160, 0.06);\n}\n.mm-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #F0FDF9;\n  border-radius: 7px;\n  color: #00B8A0;\n}\n.mm-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.mm-icon-badge[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #00B8A0;\n  background: #E8FBF8;\n  border-radius: 7px;\n}\n.mm-standalone[_ngcontent-%COMP%] {\n  display: block;\n  padding: 16px 4px;\n  color: var(--text-2, #374151);\n  text-decoration: none;\n  font-size: 16px;\n  font-weight: 500;\n  border-bottom: 1px solid var(--border);\n  transition: color 0.15s;\n}\n.mm-standalone[_ngcontent-%COMP%]:hover {\n  color: #00B8A0;\n}\n.mm-actions[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 20px;\n}\n.mm-theme-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: var(--bg);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  color: var(--text-muted);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.2s, color 0.2s;\n  width: 100%;\n  justify-content: center;\n}\n.mm-theme-toggle[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n  color: var(--primary);\n  border-color: var(--primary);\n}\n@media (max-width: 900px) {\n  .nav-item[_ngcontent-%COMP%] {\n    padding: 8px 9px;\n    font-size: 13px;\n  }\n  .nav-plain[_ngcontent-%COMP%] {\n    padding: 8px 9px;\n    font-size: 13px;\n  }\n}\n@media (max-width: 768px) {\n  .nav-links[_ngcontent-%COMP%], \n   .nav-actions[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .hamburger[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=navbar.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarComponent, [{
    type: Component,
    args: [{ selector: "app-navbar", standalone: true, imports: [CommonModule, RouterModule], template: `<header class="navbar" [class.scrolled]="scrolled()">
  <div class="nav-inner">

    <!-- Logo -->
    <a routerLink="/" class="logo" (click)="closeMobile()">
      <img src="https://eq-cdn.equiti-me.com/website/documents/equiti-company-logo.svg"
           alt="Equiti" class="logo-img" />
    </a>

    <!-- Desktop Nav -->
    <nav class="nav-links" aria-label="Main navigation">

      <!-- Products -->
      <div class="nav-item" [class.active]="activeMenu() === 'products'" (click)="toggleMenu('products', $event)">
        <span class="nav-label">Products</span>
        <span class="caret" [class.open]="activeMenu() === 'products'">
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </span>
        @if (activeMenu() === 'products') {
          <div class="dropdown products-dd" (click)="$event.stopPropagation()">
            <div class="dd-tip"></div>
            <div class="dd-body products-body">
              <div class="dd-col">
                <a href="#" class="dd-item">
                  <span class="dd-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="12" width="3" height="9" rx="1"/><rect x="10.5" y="6" width="3" height="15" rx="1"/><rect x="18" y="3" width="3" height="18" rx="1"/><line x1="4.5" y1="8" x2="4.5" y2="11"/><line x1="12" y1="2" x2="12" y2="5"/></svg></span>
                  Forex
                </a>
                <a href="#" class="dd-item">
                  <span class="dd-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg></span>
                  Indices
                </a>
                <a href="#" class="dd-item">
                  <span class="dd-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2C8 7 5 10.5 5 14a7 7 0 0 0 14 0c0-3.5-3-7-7-12z"/></svg></span>
                  Commodities
                </a>
                <a href="#" class="dd-item">
                  <span class="dd-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 3"/></svg></span>
                  Shares
                </a>
                <a href="#" class="dd-item">
                  <span class="dd-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 16l5-12 5 12M9.5 10.5h5"/><path d="M3 20h18"/></svg></span>
                  ETFs
                </a>
                <a href="#" class="dd-item">
                  <span class="dd-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 6v2m0 8v2M9.5 9.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5c0 2.5-5 2.5-5 5 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5"/></svg></span>
                  Crypto CFDs
                </a>
                <a href="#" class="dd-item">
                  <span class="dd-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg></span>
                  Gold Option CFDs
                </a>
                <a href="#" class="dd-item dd-item-all">
                  <span class="dd-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg></span>
                  All products
                </a>
              </div>
              <div class="dd-divider-v"></div>
              <div class="dd-col dd-col-right">
                <p class="dd-section-label">Trading info</p>
                <a href="#" class="dd-item dd-item-plain">Deposits &amp; withdrawals</a>
                <a href="#" class="dd-item dd-item-plain">Financing fees</a>
                <a href="#" class="dd-item dd-item-plain">Expiry dates</a>
                <a href="#" class="dd-item dd-item-plain">Holiday hours</a>
              </div>
            </div>
          </div>
        }
      </div>

      <!-- Platforms -->
      <div class="nav-item" [class.active]="activeMenu() === 'platforms'" (click)="toggleMenu('platforms', $event)">
        <span class="nav-label">Platforms</span>
        <span class="caret" [class.open]="activeMenu() === 'platforms'">
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </span>
        @if (activeMenu() === 'platforms') {
          <div class="dropdown" (click)="$event.stopPropagation()">
            <div class="dd-tip"></div>
            <div class="dd-body">
              <a routerLink="/platforms/metatrader-4" class="dd-item" (click)="activeMenu.set(null)">
                <span class="dd-icon dd-icon-lg">
                  <svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#E8FBF8"/><text x="20" y="26" text-anchor="middle" font-size="16" font-weight="700" fill="#00B8A0">4</text></svg>
                </span>
                <span class="dd-item-text"><strong>MetaTrader 4</strong><span class="dd-sub">Industry-leading platform</span></span>
              </a>
              <a href="#" class="dd-item">
                <span class="dd-icon dd-icon-lg">
                  <svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#E8FBF8"/><text x="20" y="26" text-anchor="middle" font-size="16" font-weight="700" fill="#00B8A0">5</text></svg>
                </span>
                <span class="dd-item-text"><strong>MetaTrader 5</strong><span class="dd-sub">Next generation platform</span></span>
              </a>
              <a href="#" class="dd-item dd-item-all">
                <span class="dd-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg></span>
                All platforms
              </a>
            </div>
          </div>
        }
      </div>

      <!-- Accounts -->
      <div class="nav-item" [class.active]="activeMenu() === 'accounts'" (click)="toggleMenu('accounts', $event)">
        <span class="nav-label">Accounts</span>
        <span class="caret" [class.open]="activeMenu() === 'accounts'">
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </span>
        @if (activeMenu() === 'accounts') {
          <div class="dropdown" (click)="$event.stopPropagation()">
            <div class="dd-tip"></div>
            <div class="dd-body">
              <a routerLink="/accounts" class="dd-item" (click)="activeMenu.set(null)">
                <span class="dd-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg></span>
                <span class="dd-item-text"><strong>Trading accounts</strong><span class="dd-sub">Explore account types</span></span>
              </a>
              <a href="#" class="dd-item">
                <span class="dd-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></span>
                <span class="dd-item-text"><strong>Copy trading</strong><span class="dd-sub">Follow expert traders</span></span>
              </a>
              <a href="#" class="dd-item">
                <span class="dd-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9" stroke-dasharray="4 2"/></svg></span>
                <span class="dd-item-text"><strong>Demo</strong><span class="dd-sub">Practice risk-free</span></span>
              </a>
            </div>
          </div>
        }
      </div>

      <!-- Insights -->
      <div class="nav-item" [class.active]="activeMenu() === 'insights'" (click)="toggleMenu('insights', $event)">
        <span class="nav-label">Insights</span>
        <span class="caret" [class.open]="activeMenu() === 'insights'">
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </span>
        @if (activeMenu() === 'insights') {
          <div class="dropdown" (click)="$event.stopPropagation()">
            <div class="dd-tip"></div>
            <div class="dd-body">
              <a routerLink="/dashboard" class="dd-item" (click)="activeMenu.set(null)">
                <span class="dd-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg></span>
                <span class="dd-item-text"><strong>Live Dashboard</strong><span class="dd-sub">Real-time prices &amp; tools</span></span>
              </a>
              <a routerLink="/trading-tools" class="dd-item" (click)="activeMenu.set(null)">
                <span class="dd-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></span>
                <span class="dd-item-text"><strong>Trading tools</strong><span class="dd-sub">Charts, signals & more</span></span>
              </a>
              <a href="#" class="dd-item">
                <span class="dd-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></span>
                <span class="dd-item-text"><strong>Education</strong><span class="dd-sub">Learn to trade smarter</span></span>
              </a>
              <a href="#" class="dd-item">
                <span class="dd-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10l6 6v8a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg></span>
                <span class="dd-item-text"><strong>News</strong><span class="dd-sub">Market updates daily</span></span>
              </a>
            </div>
          </div>
        }
      </div>

      <!-- Partners -->
      <div class="nav-item" [class.active]="activeMenu() === 'partners'" (click)="toggleMenu('partners', $event)">
        <span class="nav-label">Partners</span>
        <span class="caret" [class.open]="activeMenu() === 'partners'">
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </span>
        @if (activeMenu() === 'partners') {
          <div class="dropdown" (click)="$event.stopPropagation()">
            <div class="dd-tip"></div>
            <div class="dd-body">
              <a href="#" class="dd-item">
                <span class="dd-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></span>
                <span class="dd-item-text"><strong>Partnerships</strong><span class="dd-sub">Grow with Equiti</span></span>
              </a>
              <a href="#" class="dd-item">
                <span class="dd-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg></span>
                <span class="dd-item-text"><strong>Refer a friend</strong><span class="dd-sub">Earn rewards together</span></span>
              </a>
            </div>
          </div>
        }
      </div>

      <a href="#" class="nav-plain">About us</a>

    </nav>

    <!-- CTA -->
    <div class="nav-actions">
      <button class="theme-toggle" (click)="theme.toggle(); $event.stopPropagation()" [attr.aria-label]="theme.isDark() ? 'Switch to light mode' : 'Switch to dark mode'">
        @if (theme.isDark()) {
          <!-- Sun icon -->
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        } @else {
          <!-- Moon icon -->
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        }
      </button>
      <a routerLink="/register" class="btn-start">START TRADING</a>
    </div>

    <!-- Hamburger -->
    <button
      class="hamburger"
      [class.open]="mobileOpen()"
      (click)="toggleMobile()"
      aria-label="Toggle menu"
      [attr.aria-expanded]="mobileOpen()">
      <span></span><span></span><span></span>
    </button>
  </div>

  <!-- Mobile Menu -->
  <div class="mobile-menu" [class.open]="mobileOpen()" role="navigation">

    <!-- Top CTA -->
    <a routerLink="/register" (click)="closeMobile()" class="mm-cta-top">START TRADING</a>

    <!-- Products -->
    <div class="mm-section">
      <button class="mm-header" [class.active]="activeMobileSection() === 'products'" (click)="toggleMobileSection('products')">
        <span>Products</span>
        <svg class="mm-chevron" [class.open]="activeMobileSection() === 'products'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      @if (activeMobileSection() === 'products') {
        <div class="mm-items">
          <a href="#" (click)="closeMobile()" class="mm-link">
            <span class="mm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="12" width="3" height="9" rx="1"/><rect x="10.5" y="6" width="3" height="15" rx="1"/><rect x="18" y="3" width="3" height="18" rx="1"/></svg></span>
            Forex
          </a>
          <a href="#" (click)="closeMobile()" class="mm-link">
            <span class="mm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg></span>
            Indices
          </a>
          <a href="#" (click)="closeMobile()" class="mm-link">
            <span class="mm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2C8 7 5 10.5 5 14a7 7 0 0 0 14 0c0-3.5-3-7-7-12z"/></svg></span>
            Commodities
          </a>
          <a href="#" (click)="closeMobile()" class="mm-link">
            <span class="mm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 3"/></svg></span>
            Shares
          </a>
          <a href="#" (click)="closeMobile()" class="mm-link">
            <span class="mm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 6v2m0 8v2M9.5 9.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5c0 2.5-5 2.5-5 5 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5"/></svg></span>
            Crypto CFDs
          </a>
          <a href="#" (click)="closeMobile()" class="mm-link">
            <span class="mm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg></span>
            Gold Option CFDs
          </a>
        </div>
      }
    </div>

    <!-- Platforms -->
    <div class="mm-section">
      <button class="mm-header" [class.active]="activeMobileSection() === 'platforms'" (click)="toggleMobileSection('platforms')">
        <span>Platforms</span>
        <svg class="mm-chevron" [class.open]="activeMobileSection() === 'platforms'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      @if (activeMobileSection() === 'platforms') {
        <div class="mm-items">
          <a routerLink="/platforms/metatrader-4" (click)="closeMobile()" class="mm-link">
            <span class="mm-icon mm-icon-badge">4</span>
            MetaTrader 4
          </a>
          <a href="#" (click)="closeMobile()" class="mm-link">
            <span class="mm-icon mm-icon-badge">5</span>
            MetaTrader 5
          </a>
        </div>
      }
    </div>

    <!-- Accounts -->
    <div class="mm-section">
      <button class="mm-header" [class.active]="activeMobileSection() === 'accounts'" (click)="toggleMobileSection('accounts')">
        <span>Accounts</span>
        <svg class="mm-chevron" [class.open]="activeMobileSection() === 'accounts'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      @if (activeMobileSection() === 'accounts') {
        <div class="mm-items">
          <a routerLink="/accounts" (click)="closeMobile()" class="mm-link">
            <span class="mm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg></span>
            Trading Accounts
          </a>
          <a href="#" (click)="closeMobile()" class="mm-link">
            <span class="mm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></span>
            Copy Trading
          </a>
          <a href="#" (click)="closeMobile()" class="mm-link">
            <span class="mm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9" stroke-dasharray="4 2"/></svg></span>
            Demo Account
          </a>
        </div>
      }
    </div>

    <!-- Insights -->
    <div class="mm-section">
      <button class="mm-header" [class.active]="activeMobileSection() === 'insights'" (click)="toggleMobileSection('insights')">
        <span>Insights</span>
        <svg class="mm-chevron" [class.open]="activeMobileSection() === 'insights'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      @if (activeMobileSection() === 'insights') {
        <div class="mm-items">
          <a routerLink="/dashboard" (click)="closeMobile()" class="mm-link">
            <span class="mm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg></span>
            Live Dashboard
          </a>
          <a routerLink="/trading-tools" (click)="closeMobile()" class="mm-link">
            <span class="mm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></span>
            Trading Tools
          </a>
          <a href="#" (click)="closeMobile()" class="mm-link">
            <span class="mm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></span>
            Education
          </a>
          <a href="#" (click)="closeMobile()" class="mm-link">
            <span class="mm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10l6 6v8a2 2 0 0 1-2 2z"/></svg></span>
            News
          </a>
        </div>
      }
    </div>

    <!-- Partners -->
    <div class="mm-section">
      <button class="mm-header" [class.active]="activeMobileSection() === 'partners'" (click)="toggleMobileSection('partners')">
        <span>Partners</span>
        <svg class="mm-chevron" [class.open]="activeMobileSection() === 'partners'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      @if (activeMobileSection() === 'partners') {
        <div class="mm-items">
          <a href="#" (click)="closeMobile()" class="mm-link">
            <span class="mm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></span>
            Partnerships
          </a>
          <a href="#" (click)="closeMobile()" class="mm-link">
            <span class="mm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg></span>
            Refer a Friend
          </a>
        </div>
      }
    </div>

    <a href="#" (click)="closeMobile()" class="mm-standalone">About us</a>

    <!-- Theme toggle -->
    <div class="mm-actions">
      <button class="mm-theme-toggle" (click)="theme.toggle(); $event.stopPropagation()">
        @if (theme.isDark()) {
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          Light Mode
        } @else {
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          Dark Mode
        }
      </button>
    </div>

  </div>
</header>
`, styles: ['/* src/app/shared/components/navbar/navbar.component.css */\n.navbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  background: var(--surface);\n  border-bottom: 1px solid var(--border);\n  transition: box-shadow var(--transition), background var(--transition);\n}\n.navbar.scrolled {\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n}\n.nav-inner {\n  display: flex;\n  align-items: center;\n  height: 64px;\n  padding: 0 32px;\n}\n.logo {\n  flex: 1;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n}\n.logo-img {\n  height: 32px;\n  width: auto;\n  display: block;\n}\n.nav-links {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0;\n}\n.nav-item {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 13px;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-2, #374151);\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: color 0.15s;\n  white-space: nowrap;\n}\n.nav-item:hover,\n.nav-item.active {\n  color: #00B8A0;\n}\n.nav-item.active {\n  background: rgba(0, 184, 160, 0.06);\n}\n.nav-label {\n  pointer-events: none;\n}\n.caret {\n  display: flex;\n  align-items: center;\n  opacity: 0.55;\n  transition: transform 0.2s, opacity 0.2s;\n}\n.caret.open {\n  transform: rotate(180deg);\n  opacity: 1;\n}\n.nav-item.active .caret {\n  opacity: 1;\n}\n.nav-plain {\n  color: var(--text-2, #374151);\n  text-decoration: none;\n  padding: 8px 13px;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  transition: color 0.15s;\n  white-space: nowrap;\n}\n.nav-plain:hover {\n  color: var(--text, #1A1D2E);\n}\n.nav-actions {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 10px;\n}\n.theme-toggle {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--bg);\n  border: 1px solid var(--border);\n  border-radius: 50%;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition:\n    background 0.2s,\n    color 0.2s,\n    border-color 0.2s;\n  flex-shrink: 0;\n}\n.theme-toggle:hover {\n  background: var(--primary-light);\n  color: var(--primary);\n  border-color: var(--primary);\n}\n.btn-start {\n  display: inline-block;\n  padding: 9px 20px;\n  background: var(--primary);\n  color: #fff;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition: background var(--transition);\n}\n.btn-start:hover {\n  background: var(--primary-hover);\n}\n.dropdown {\n  position: absolute;\n  top: calc(100% + 12px);\n  left: 50%;\n  transform: translateX(-50%);\n  min-width: 240px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.13);\n  z-index: 200;\n  animation: ddFadeIn 0.15s ease;\n}\n.products-dd {\n  min-width: 420px;\n  left: 0;\n  transform: none;\n}\n@keyframes ddFadeIn {\n  from {\n    opacity: 0;\n    transform: translateX(-50%) translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(-50%) translateY(0);\n  }\n}\n.products-dd {\n  animation: ddFadeInLeft 0.15s ease;\n}\n@keyframes ddFadeInLeft {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.dd-tip {\n  position: absolute;\n  top: -7px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 14px;\n  height: 7px;\n  overflow: visible;\n}\n.dd-tip::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid var(--surface);\n  filter: drop-shadow(0 -2px 2px rgba(0, 0, 0, 0.06));\n}\n.products-dd .dd-tip {\n  left: 60px;\n  transform: none;\n}\n.dd-body {\n  padding: 8px;\n}\n.products-body {\n  display: flex;\n  gap: 0;\n}\n.dd-col {\n  flex: 1;\n  padding: 4px;\n}\n.dd-col-right {\n  flex: 0 0 180px;\n  padding: 4px 8px;\n}\n.dd-divider-v {\n  width: 1px;\n  background: #F3F4F6;\n  margin: 8px 4px;\n  flex-shrink: 0;\n}\n.dd-section-label {\n  font-size: 11px;\n  font-weight: 700;\n  color: #9CA3AF;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  padding: 8px 12px 4px;\n  margin: 0;\n}\n.dd-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 2px 4px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: #374151;\n  font-size: 13px;\n  font-weight: 500;\n  transition: background 0.12s, color 0.12s;\n  white-space: nowrap;\n}\n.dd-item:hover {\n  background: #F5F7FA;\n  color: #00B8A0;\n}\n.dd-item:hover .dd-icon {\n  background: #d0f5ef;\n  color: #00B8A0;\n}\n.dd-item-all {\n  color: #6B7280;\n  font-weight: 500;\n}\n.dd-item-all:hover {\n  color: #00B8A0;\n}\n.dd-item-plain {\n  font-size: 13.5px;\n  color: #4B5563;\n  padding: 8px 12px;\n}\n.dd-item-plain:hover {\n  color: #00B8A0;\n  background: #F5F7FA;\n}\n.dd-icon {\n  width: 34px;\n  height: 34px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #F0FDF9;\n  border-radius: 8px;\n  color: #00B8A0;\n  transition: background 0.12s;\n}\n.dd-icon svg {\n  width: 18px;\n  height: 18px;\n}\n.dd-icon-lg {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  background: none;\n}\n.dd-icon-lg svg {\n  width: 40px;\n  height: 40px;\n}\n.dd-item-text {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.dd-item-text strong {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1A1D2E;\n}\n.dd-sub {\n  font-size: 12px;\n  color: #9CA3AF;\n  font-weight: 400;\n}\n.dd-item:hover .dd-item-text strong {\n  color: #00B8A0;\n}\n.hamburger {\n  display: none;\n  flex-direction: column;\n  gap: 5px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 8px;\n  margin-left: auto;\n}\n.hamburger span {\n  display: block;\n  width: 22px;\n  height: 2px;\n  background: var(--text);\n  border-radius: 2px;\n  transition: all var(--transition);\n}\n.hamburger.open span:nth-child(1) {\n  transform: translateY(7px) rotate(45deg);\n}\n.hamburger.open span:nth-child(2) {\n  opacity: 0;\n}\n.hamburger.open span:nth-child(3) {\n  transform: translateY(-7px) rotate(-45deg);\n}\n.mobile-menu {\n  display: none;\n  flex-direction: column;\n  max-height: calc(100vh - 64px);\n  overflow-y: auto;\n  padding: 16px 20px 28px;\n  border-top: 1px solid var(--border);\n  background: var(--surface);\n}\n.mobile-menu.open {\n  display: flex;\n}\n.mm-cta-top {\n  display: block;\n  text-align: center;\n  padding: 13px;\n  margin-bottom: 8px;\n  background: var(--primary);\n  color: #fff;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition: background var(--transition);\n}\n.mm-cta-top:hover {\n  background: var(--primary-hover);\n}\n.mm-section {\n  border-bottom: 1px solid var(--border);\n}\n.mm-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 16px 4px;\n  background: none;\n  border: none;\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--text-2, #374151);\n  cursor: pointer;\n  text-align: left;\n  transition: color 0.15s;\n}\n.mm-header.active,\n.mm-header:hover {\n  color: #00B8A0;\n}\n.mm-chevron {\n  flex-shrink: 0;\n  transition: transform 0.2s;\n  color: #9CA3AF;\n}\n.mm-chevron.open {\n  transform: rotate(180deg);\n  color: #00B8A0;\n}\n.mm-header.active .mm-chevron {\n  color: #00B8A0;\n}\n.mm-items {\n  display: flex;\n  flex-direction: column;\n  padding: 0 4px 12px;\n  gap: 2px;\n}\n.mm-link {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 10px;\n  border-radius: 8px;\n  color: var(--text-2, #374151);\n  text-decoration: none;\n  font-size: 15px;\n  font-weight: 500;\n  transition: color 0.15s, background 0.15s;\n}\n.mm-link:hover {\n  color: #00B8A0;\n  background: rgba(0, 184, 160, 0.06);\n}\n.mm-icon {\n  width: 30px;\n  height: 30px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #F0FDF9;\n  border-radius: 7px;\n  color: #00B8A0;\n}\n.mm-icon svg {\n  width: 16px;\n  height: 16px;\n}\n.mm-icon-badge {\n  font-size: 13px;\n  font-weight: 700;\n  color: #00B8A0;\n  background: #E8FBF8;\n  border-radius: 7px;\n}\n.mm-standalone {\n  display: block;\n  padding: 16px 4px;\n  color: var(--text-2, #374151);\n  text-decoration: none;\n  font-size: 16px;\n  font-weight: 500;\n  border-bottom: 1px solid var(--border);\n  transition: color 0.15s;\n}\n.mm-standalone:hover {\n  color: #00B8A0;\n}\n.mm-actions {\n  display: flex;\n  margin-top: 20px;\n}\n.mm-theme-toggle {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background: var(--bg);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  color: var(--text-muted);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.2s, color 0.2s;\n  width: 100%;\n  justify-content: center;\n}\n.mm-theme-toggle:hover {\n  background: var(--primary-light);\n  color: var(--primary);\n  border-color: var(--primary);\n}\n@media (max-width: 900px) {\n  .nav-item {\n    padding: 8px 9px;\n    font-size: 13px;\n  }\n  .nav-plain {\n    padding: 8px 9px;\n    font-size: 13px;\n  }\n}\n@media (max-width: 768px) {\n  .nav-links,\n  .nav-actions {\n    display: none;\n  }\n  .hamburger {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=navbar.component.css.map */\n'] }]
  }], () => [], { onScroll: [{
    type: HostListener,
    args: ["window:scroll"]
  }], onDocClick: [{
    type: HostListener,
    args: ["document:click"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src/app/shared/components/navbar/navbar.component.ts", lineNumber: 13 });
})();

// src/app/shared/components/footer/footer.component.ts
var FooterComponent = class _FooterComponent {
  year = (/* @__PURE__ */ new Date()).getFullYear();
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 96, vars: 1, consts: [[1, "site-footer"], [1, "container"], [1, "footer-top"], ["routerLink", "/", 1, "footer-logo"], ["src", "https://eq-cdn.equiti-me.com/website/documents/equiti-company-logo.svg", "alt", "Equiti", 1, "footer-logo-img"], [1, "social-icons"], ["href", "https://www.facebook.com/EquitiSC/", "target", "_blank", "rel", "noopener", "aria-label", "Facebook", 1, "si"], ["src", "social-facebook.svg", "alt", "Facebook", 1, "si-img"], ["href", "https://x.com/Equiti_en", "target", "_blank", "rel", "noopener", "aria-label", "X", 1, "si"], ["src", "social-x.svg", "alt", "X", 1, "si-img"], ["href", "https://www.instagram.com/equitisc/", "target", "_blank", "rel", "noopener", "aria-label", "Instagram", 1, "si"], ["src", "social-instagram.svg", "alt", "Instagram", 1, "si-img"], ["href", "https://www.youtube.com/channel/UCMfRYPE2cJ7XuclSbIsDgIg", "target", "_blank", "rel", "noopener", "aria-label", "YouTube", 1, "si"], ["src", "social-youtube.svg", "alt", "YouTube", 1, "si-img"], ["href", "https://www.linkedin.com/company/equiti/", "target", "_blank", "rel", "noopener", "aria-label", "LinkedIn", 1, "si"], ["src", "social-linkedin.svg", "alt", "LinkedIn", 1, "si-img"], [1, "footer-divider"], [1, "footer-nav"], [1, "fn-col"], [1, "fn-head"], ["href", "#", 1, "fn-link"], ["href", "#", 1, "fn-link", "fn-icon-link"], [1, "fn-icon"], [1, "fn-sub"], [1, "footer-bottom"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
      \u0275\u0275element(4, "img", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5)(6, "a", 6);
      \u0275\u0275element(7, "img", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "a", 8);
      \u0275\u0275element(9, "img", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "a", 10);
      \u0275\u0275element(11, "img", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "a", 12);
      \u0275\u0275element(13, "img", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "a", 14);
      \u0275\u0275element(15, "img", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(16, "div", 16);
      \u0275\u0275elementStart(17, "div", 17)(18, "div", 18)(19, "h4", 19);
      \u0275\u0275text(20, "Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "a", 20);
      \u0275\u0275text(22, "Forex");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "a", 20);
      \u0275\u0275text(24, "Indices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "a", 20);
      \u0275\u0275text(26, "Commodities");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "a", 20);
      \u0275\u0275text(28, "Shares");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "a", 20);
      \u0275\u0275text(30, "ETFs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "a", 20);
      \u0275\u0275text(32, "Crypto CFDs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "a", 20);
      \u0275\u0275text(34, "Gold Option CFDs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "a", 20);
      \u0275\u0275text(36, "All products");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 18)(38, "h4", 19);
      \u0275\u0275text(39, "Platforms");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "a", 20);
      \u0275\u0275text(41, "MetaTrader 4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "a", 20);
      \u0275\u0275text(43, "MetaTrader 5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "a", 20);
      \u0275\u0275text(45, "All platforms");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 18)(47, "h4", 19);
      \u0275\u0275text(48, "Accounts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "a", 20);
      \u0275\u0275text(50, "Trading accounts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "a", 20);
      \u0275\u0275text(52, "Copy trading");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "a", 20);
      \u0275\u0275text(54, "Demo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "div", 18)(56, "h4", 19);
      \u0275\u0275text(57, "Partnerships");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "a", 20);
      \u0275\u0275text(59, "Partner with us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "a", 20);
      \u0275\u0275text(61, "Refer a friend");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 18)(63, "h4", 19);
      \u0275\u0275text(64, "About Equiti");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "a", 20);
      \u0275\u0275text(66, "About us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "a", 20);
      \u0275\u0275text(68, "Careers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "a", 20);
      \u0275\u0275text(70, "Media releases");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div", 18)(72, "h4", 19);
      \u0275\u0275text(73, "Support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "a", 21)(75, "span", 22);
      \u0275\u0275text(76, "@");
      \u0275\u0275elementEnd();
      \u0275\u0275text(77, " Email ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "a", 21)(79, "span", 22);
      \u0275\u0275text(80, "\u{1F4F1}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "span");
      \u0275\u0275text(82, "WhatsApp");
      \u0275\u0275element(83, "br");
      \u0275\u0275elementStart(84, "small", 23);
      \u0275\u0275text(85, "+248 4671934");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(86, "a", 21)(87, "span", 22);
      \u0275\u0275text(88, "?");
      \u0275\u0275elementEnd();
      \u0275\u0275text(89, " FAQs ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(90, "div", 16);
      \u0275\u0275elementStart(91, "div", 24)(92, "p");
      \u0275\u0275text(93, "\u26A0 Risk Warning: Trading in financial instruments involves a high level of risk to your capital. Losses can exceed deposits.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "p");
      \u0275\u0275text(95);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(95);
      \u0275\u0275textInterpolate1("\xA9 ", ctx.year, " Equiti Group. All rights reserved. Equiti SC Ltd is regulated by the Financial Services Authority of Seychelles (FSA), License No. SD056.");
    }
  }, dependencies: [RouterModule, RouterLink], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.site-footer[_ngcontent-%COMP%] {\n  background: var(--dark);\n  padding: 56px 0 0;\n  margin-top: 0;\n}\n.footer-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 32px;\n}\n.footer-logo[_ngcontent-%COMP%] {\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n}\n.footer-logo-img[_ngcontent-%COMP%] {\n  height: 36px;\n  width: auto;\n  display: block;\n  filter: brightness(0) invert(1);\n}\n.social-icons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.si[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n  font-size: 13px;\n  font-weight: 700;\n  transition: all var(--transition);\n}\n.si[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  opacity: 1;\n}\n.si-img[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  object-fit: contain;\n  filter: brightness(0) invert(0.6);\n}\n.si[_ngcontent-%COMP%]:hover   .si-img[_ngcontent-%COMP%] {\n  filter: brightness(0) saturate(100%) invert(60%) sepia(80%) saturate(400%) hue-rotate(130deg);\n}\n.footer-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.08);\n  margin-bottom: 40px;\n}\n.footer-nav[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 32px;\n  margin-bottom: 40px;\n}\n.fn-head[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.9);\n  margin-bottom: 16px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n.fn-link[_ngcontent-%COMP%] {\n  display: block;\n  color: rgba(255, 255, 255, 0.5);\n  text-decoration: none;\n  font-size: 13px;\n  margin-bottom: 10px;\n  transition: color var(--transition);\n  line-height: 1.4;\n}\n.fn-link[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.9);\n}\n.fn-icon-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n}\n.fn-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 20px;\n  height: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.6);\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.fn-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.35);\n}\n.footer-bottom[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  padding: 20px 0 24px;\n}\n.footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.3);\n  line-height: 1.7;\n  margin-bottom: 6px;\n}\n@media (max-width: 1024px) {\n  .footer-nav[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .footer-nav[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 24px;\n  }\n  .footer-top[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n}\n@media (max-width: 400px) {\n  .footer-nav[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", standalone: true, imports: [RouterModule], template: '<footer class="site-footer">\n  <div class="container">\n\n    <!-- Top row: logo + social -->\n    <div class="footer-top">\n      <a routerLink="/" class="footer-logo">\n      <img src="https://eq-cdn.equiti-me.com/website/documents/equiti-company-logo.svg"\n           alt="Equiti" class="footer-logo-img" />\n    </a>\n      <div class="social-icons">\n        <a href="https://www.facebook.com/EquitiSC/" target="_blank" rel="noopener" aria-label="Facebook"  class="si"><img src="social-facebook.svg"  alt="Facebook"  class="si-img" /></a>\n        <a href="https://x.com/Equiti_en"           target="_blank" rel="noopener" aria-label="X"         class="si"><img src="social-x.svg"         alt="X"         class="si-img" /></a>\n        <a href="https://www.instagram.com/equitisc/" target="_blank" rel="noopener" aria-label="Instagram" class="si"><img src="social-instagram.svg" alt="Instagram" class="si-img" /></a>\n        <a href="https://www.youtube.com/channel/UCMfRYPE2cJ7XuclSbIsDgIg" target="_blank" rel="noopener" aria-label="YouTube"   class="si"><img src="social-youtube.svg"   alt="YouTube"   class="si-img" /></a>\n        <a href="https://www.linkedin.com/company/equiti/" target="_blank" rel="noopener" aria-label="LinkedIn"  class="si"><img src="social-linkedin.svg"  alt="LinkedIn"  class="si-img" /></a>\n      </div>\n    </div>\n\n    <div class="footer-divider"></div>\n\n    <!-- 6-column nav -->\n    <div class="footer-nav">\n\n      <div class="fn-col">\n        <h4 class="fn-head">Products</h4>\n        <a href="#" class="fn-link">Forex</a>\n        <a href="#" class="fn-link">Indices</a>\n        <a href="#" class="fn-link">Commodities</a>\n        <a href="#" class="fn-link">Shares</a>\n        <a href="#" class="fn-link">ETFs</a>\n        <a href="#" class="fn-link">Crypto CFDs</a>\n        <a href="#" class="fn-link">Gold Option CFDs</a>\n        <a href="#" class="fn-link">All products</a>\n      </div>\n\n      <div class="fn-col">\n        <h4 class="fn-head">Platforms</h4>\n        <a href="#" class="fn-link">MetaTrader 4</a>\n        <a href="#" class="fn-link">MetaTrader 5</a>\n        <a href="#" class="fn-link">All platforms</a>\n      </div>\n\n      <div class="fn-col">\n        <h4 class="fn-head">Accounts</h4>\n        <a href="#" class="fn-link">Trading accounts</a>\n        <a href="#" class="fn-link">Copy trading</a>\n        <a href="#" class="fn-link">Demo</a>\n      </div>\n\n      <div class="fn-col">\n        <h4 class="fn-head">Partnerships</h4>\n        <a href="#" class="fn-link">Partner with us</a>\n        <a href="#" class="fn-link">Refer a friend</a>\n      </div>\n\n      <div class="fn-col">\n        <h4 class="fn-head">About Equiti</h4>\n        <a href="#" class="fn-link">About us</a>\n        <a href="#" class="fn-link">Careers</a>\n        <a href="#" class="fn-link">Media releases</a>\n      </div>\n\n      <div class="fn-col">\n        <h4 class="fn-head">Support</h4>\n        <a href="#" class="fn-link fn-icon-link">\n          <span class="fn-icon">&#64;</span> Email\n        </a>\n        <a href="#" class="fn-link fn-icon-link">\n          <span class="fn-icon">\u{1F4F1}</span>\n          <span>WhatsApp<br><small class="fn-sub">+248 4671934</small></span>\n        </a>\n        <a href="#" class="fn-link fn-icon-link">\n          <span class="fn-icon">?</span> FAQs\n        </a>\n      </div>\n\n    </div>\n\n    <div class="footer-divider"></div>\n\n    <!-- Bottom disclaimer -->\n    <div class="footer-bottom">\n      <p>\u26A0 Risk Warning: Trading in financial instruments involves a high level of risk to your capital. Losses can exceed deposits.</p>\n      <p>\xA9 {{ year }} Equiti Group. All rights reserved. Equiti SC Ltd is regulated by the Financial Services Authority of Seychelles (FSA), License No. SD056.</p>\n    </div>\n\n  </div>\n</footer>\n', styles: ["/* src/app/shared/components/footer/footer.component.css */\n:host {\n  display: block;\n  width: 100%;\n}\n.site-footer {\n  background: var(--dark);\n  padding: 56px 0 0;\n  margin-top: 0;\n}\n.footer-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 32px;\n}\n.footer-logo {\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n}\n.footer-logo-img {\n  height: 36px;\n  width: auto;\n  display: block;\n  filter: brightness(0) invert(1);\n}\n.social-icons {\n  display: flex;\n  gap: 6px;\n}\n.si {\n  width: 36px;\n  height: 36px;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n  font-size: 13px;\n  font-weight: 700;\n  transition: all var(--transition);\n}\n.si:hover {\n  border-color: var(--primary);\n  opacity: 1;\n}\n.si-img {\n  width: 16px;\n  height: 16px;\n  object-fit: contain;\n  filter: brightness(0) invert(0.6);\n}\n.si:hover .si-img {\n  filter: brightness(0) saturate(100%) invert(60%) sepia(80%) saturate(400%) hue-rotate(130deg);\n}\n.footer-divider {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.08);\n  margin-bottom: 40px;\n}\n.footer-nav {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 32px;\n  margin-bottom: 40px;\n}\n.fn-head {\n  font-size: 14px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.9);\n  margin-bottom: 16px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n.fn-link {\n  display: block;\n  color: rgba(255, 255, 255, 0.5);\n  text-decoration: none;\n  font-size: 13px;\n  margin-bottom: 10px;\n  transition: color var(--transition);\n  line-height: 1.4;\n}\n.fn-link:hover {\n  color: rgba(255, 255, 255, 0.9);\n}\n.fn-icon-link {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n}\n.fn-icon {\n  display: inline-flex;\n  width: 20px;\n  height: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.6);\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.fn-sub {\n  font-size: 11px;\n  color: rgba(255, 255, 255, 0.35);\n}\n.footer-bottom {\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  padding: 20px 0 24px;\n}\n.footer-bottom p {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.3);\n  line-height: 1.7;\n  margin-bottom: 6px;\n}\n@media (max-width: 1024px) {\n  .footer-nav {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .footer-nav {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 24px;\n  }\n  .footer-top {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n}\n@media (max-width: 400px) {\n  .footer-nav {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/shared/components/footer/footer.component.ts", lineNumber: 11 });
})();

// src/app/layouts/main-layout/main-layout.component.ts
var MainLayoutComponent = class _MainLayoutComponent {
  static \u0275fac = function MainLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MainLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainLayoutComponent, selectors: [["app-main-layout"]], decls: 4, vars: 0, consts: [[1, "main-content"]], template: function MainLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar");
      \u0275\u0275elementStart(1, "main", 0);
      \u0275\u0275element(2, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "app-footer");
    }
  }, dependencies: [RouterOutlet, NavbarComponent, FooterComponent], styles: ["\n.main-content[_ngcontent-%COMP%] {\n  margin-top: 64px;\n}\n/*# sourceMappingURL=main-layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MainLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-main-layout", standalone: true, imports: [RouterOutlet, NavbarComponent, FooterComponent], template: `
    <app-navbar></app-navbar>
    <main class="main-content">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `, styles: ["/* angular:styles/component:css;045eaeeea00db38ad9476b6f99f84ddaa9054d59bfec33a5f9312c503363a8a2;/Users/rajesh/Downloads/equity-group/src/app/layouts/main-layout/main-layout.component.ts */\n.main-content {\n  margin-top: 64px;\n}\n/*# sourceMappingURL=main-layout.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainLayoutComponent, { className: "MainLayoutComponent", filePath: "src/app/layouts/main-layout/main-layout.component.ts", lineNumber: 19 });
})();

// src/app/layouts/auth-layout/auth-layout.component.ts
var AuthLayoutComponent = class _AuthLayoutComponent {
  static \u0275fac = function AuthLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthLayoutComponent, selectors: [["app-auth-layout"]], decls: 13, vars: 0, consts: [[1, "auth-shell"], [1, "auth-nav"], ["routerLink", "/", 1, "auth-logo"], ["src", "https://eq-cdn.equiti-me.com/website/documents/equiti-company-logo.svg", "alt", "Equiti", 1, "auth-logo-img"], [1, "lang-btn"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["d", "M6 9l6 6 6-6"], [1, "auth-main"]], template: function AuthLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "a", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "circle", 6)(7, "path", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275text(8, " English ");
      \u0275\u0275elementStart(9, "svg", 8);
      \u0275\u0275element(10, "path", 9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "main", 10);
      \u0275\u0275element(12, "router-outlet");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [RouterOutlet, RouterModule, RouterLink], styles: ["\n.auth-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #F0F2F5;\n  display: flex;\n  flex-direction: column;\n}\n.auth-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 40px;\n  background: #FFF;\n}\n.auth-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n}\n.auth-logo-img[_ngcontent-%COMP%] {\n  height: 30px;\n  width: auto;\n}\n.lang-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #4B5563;\n  cursor: pointer;\n  padding: 6px 12px;\n  border-radius: 6px;\n  border: 1px solid #D1D5DB;\n  background: transparent;\n  transition: background 0.15s;\n}\n.lang-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.04);\n}\n.auth-main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  padding: 8px 24px 48px;\n}\n/*# sourceMappingURL=auth-layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-auth-layout", standalone: true, imports: [RouterOutlet, RouterModule], template: `
    <div class="auth-shell">
      <header class="auth-nav">
        <a routerLink="/" class="auth-logo">
          <img src="https://eq-cdn.equiti-me.com/website/documents/equiti-company-logo.svg"
               alt="Equiti" class="auth-logo-img" />
        </a>
        <div class="lang-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          English
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
        </div>
      </header>
      <main class="auth-main">
        <router-outlet></router-outlet>
      </main>
    </div>
  `, styles: ["/* angular:styles/component:css;21361d9b41bdb4190bbd6f2cc7b0fcb268146e01ad1f53b27d5a4df9bb895c89;/Users/rajesh/Downloads/equity-group/src/app/layouts/auth-layout/auth-layout.component.ts */\n.auth-shell {\n  min-height: 100vh;\n  background: #F0F2F5;\n  display: flex;\n  flex-direction: column;\n}\n.auth-nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 40px;\n  background: #FFF;\n}\n.auth-logo {\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n}\n.auth-logo-img {\n  height: 30px;\n  width: auto;\n}\n.lang-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #4B5563;\n  cursor: pointer;\n  padding: 6px 12px;\n  border-radius: 6px;\n  border: 1px solid #D1D5DB;\n  background: transparent;\n  transition: background 0.15s;\n}\n.lang-btn:hover {\n  background: rgba(0, 0, 0, 0.04);\n}\n.auth-main {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  padding: 8px 24px 48px;\n}\n/*# sourceMappingURL=auth-layout.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthLayoutComponent, { className: "AuthLayoutComponent", filePath: "src/app/layouts/auth-layout/auth-layout.component.ts", lineNumber: 45 });
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-ISMYKVYZ.js").then((m) => m.HomeComponent)
      },
      {
        path: "markets",
        loadComponent: () => import("./chunk-KKOR75NO.js").then((m) => m.MarketsComponent)
      },
      {
        path: "platforms",
        loadComponent: () => import("./chunk-WEBZ2H5L.js").then((m) => m.PlatformsComponent)
      },
      {
        path: "accounts",
        loadComponent: () => import("./chunk-LBO7OG6V.js").then((m) => m.AccountsComponent)
      },
      {
        path: "trading-tools",
        loadComponent: () => import("./chunk-PGOHCLGL.js").then((m) => m.TradingToolsComponent)
      },
      {
        path: "platforms/metatrader-4",
        loadComponent: () => import("./chunk-GCXJH4PR.js").then((m) => m.Metatrader4Component)
      },
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-3JPG2USS.js").then((m) => m.DashboardComponent)
      }
    ]
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "login",
        loadComponent: () => import("./chunk-IYR5HFZO.js").then((m) => m.LoginComponent)
      },
      {
        path: "register",
        loadComponent: () => import("./chunk-JUTRTPJK.js").then((m) => m.RegisterComponent)
      }
    ]
  },
  { path: "**", redirectTo: "" }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withViewTransitions(), withInMemoryScrolling({ scrollPositionRestoration: "top" }))
  ]
};

// src/app/core/services/network.service.ts
var NetworkService = class _NetworkService {
  isOnline = signal(navigator.onLine, ...ngDevMode ? [{ debugName: "isOnline" }] : (
    /* istanbul ignore next */
    []
  ));
  onOnline = () => this.isOnline.set(true);
  onOffline = () => this.isOnline.set(false);
  constructor() {
    window.addEventListener("online", this.onOnline);
    window.addEventListener("offline", this.onOffline);
  }
  ngOnDestroy() {
    window.removeEventListener("online", this.onOnline);
    window.removeEventListener("offline", this.onOffline);
  }
  static \u0275fac = function NetworkService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NetworkService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NetworkService, factory: _NetworkService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NetworkService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/app.ts
function App_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 2);
    \u0275\u0275element(2, "line", 3)(3, "path", 4)(4, "path", 5)(5, "path", 6)(6, "path", 7)(7, "path", 8)(8, "line", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "No internet connection. Please check your network.");
    \u0275\u0275elementEnd()();
  }
}
function App_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 10);
    \u0275\u0275element(2, "polyline", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Connection restored");
    \u0275\u0275elementEnd()();
  }
}
var App = class _App {
  network = inject(NetworkService);
  showOnlineToast = signal(false, ...ngDevMode ? [{ debugName: "showOnlineToast" }] : (
    /* istanbul ignore next */
    []
  ));
  prevOnline = navigator.onLine;
  toastTimer = null;
  constructor() {
    effect(() => {
      const online = this.network.isOnline();
      if (online && !this.prevOnline) {
        this.showOnlineToast.set(true);
        if (this.toastTimer)
          clearTimeout(this.toastTimer);
        this.toastTimer = setTimeout(() => this.showOnlineToast.set(false), 3e3);
      }
      if (!online) {
        this.showOnlineToast.set(false);
        if (this.toastTimer) {
          clearTimeout(this.toastTimer);
          this.toastTimer = null;
        }
      }
      this.prevOnline = online;
    });
  }
  ngOnDestroy() {
    if (this.toastTimer)
      clearTimeout(this.toastTimer);
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 3, vars: 2, consts: [["role", "alert", "aria-live", "assertive", 1, "offline-banner"], ["role", "status", "aria-live", "polite", 1, "online-toast"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x1", "1", "y1", "1", "x2", "23", "y2", "23"], ["d", "M16.72 11.06A10.94 10.94 0 0 1 19 12.55"], ["d", "M5 12.55a10.94 10.94 0 0 1 5.17-2.39"], ["d", "M10.71 5.05A16 16 0 0 1 22.56 9"], ["d", "M1.42 9a15.91 15.91 0 0 1 4.7-2.88"], ["d", "M8.53 16.11a6 6 0 0 1 6.95 0"], ["x1", "12", "y1", "20", "x2", "12.01", "y2", "20"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["points", "20 6 9 17 4 12"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, App_Conditional_0_Template, 11, 0, "div", 0);
      \u0275\u0275conditionalCreate(1, App_Conditional_1_Template, 5, 0, "div", 1);
      \u0275\u0275element(2, "router-outlet");
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.network.isOnline() ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showOnlineToast() ? 1 : -1);
    }
  }, dependencies: [RouterOutlet], styles: ["\n.offline-banner[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 10px 24px;\n  background: #EF4444;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 500;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n  animation: _ngcontent-%COMP%_slideDown 0.25s ease;\n}\n.online-toast[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 28px;\n  right: 28px;\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 18px;\n  background: #22C55E;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 500;\n  border-radius: 8px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);\n  animation: _ngcontent-%COMP%_fadeInUp 0.25s ease, _ngcontent-%COMP%_fadeOut 0.3s ease 2.7s forwards;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    transform: translateY(-100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    transform: translateY(12px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeOut {\n  to {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n}\n/*# sourceMappingURL=app.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [RouterOutlet], template: '@if (!network.isOnline()) {\n  <div class="offline-banner" role="alert" aria-live="assertive">\n    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <line x1="1" y1="1" x2="23" y2="23"/>\n      <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/>\n      <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/>\n      <path d="M10.71 5.05A16 16 0 0 1 22.56 9"/>\n      <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/>\n      <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>\n      <line x1="12" y1="20" x2="12.01" y2="20"/>\n    </svg>\n    <span>No internet connection. Please check your network.</span>\n  </div>\n}\n\n@if (showOnlineToast()) {\n  <div class="online-toast" role="status" aria-live="polite">\n    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="20 6 9 17 4 12"/>\n    </svg>\n    <span>Connection restored</span>\n  </div>\n}\n\n<router-outlet />\n', styles: ["/* src/app/app.css */\n.offline-banner {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 10px 24px;\n  background: #EF4444;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 500;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n  animation: slideDown 0.25s ease;\n}\n.online-toast {\n  position: fixed;\n  bottom: 28px;\n  right: 28px;\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 18px;\n  background: #22C55E;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 500;\n  border-radius: 8px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);\n  animation: fadeInUp 0.25s ease, fadeOut 0.3s ease 2.7s forwards;\n}\n@keyframes slideDown {\n  from {\n    transform: translateY(-100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes fadeInUp {\n  from {\n    transform: translateY(12px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes fadeOut {\n  to {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n}\n/*# sourceMappingURL=app.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 12 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map

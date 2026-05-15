import {
  RouterLink,
  RouterModule
} from "./chunk-EG5WAOH2.js";
import {
  Component,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-W3ZQDAPL.js";

// src/app/features/trading-tools/trading-tools.component.ts
function TradingToolsComponent_For_257_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 125)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const faq_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(faq_r4.a);
  }
}
function TradingToolsComponent_For_257_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 121);
    \u0275\u0275listener("click", function TradingToolsComponent_For_257_Template_div_click_0_listener() {
      const $index_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFaq($index_r2));
    });
    \u0275\u0275elementStart(1, "div", 122)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 123);
    \u0275\u0275element(5, "path", 124);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, TradingToolsComponent_For_257_Conditional_6_Template, 3, 1, "div", 125);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const faq_r4 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("open", ctx_r2.openFaq() === $index_r2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(faq_r4.q);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.openFaq() === $index_r2 ? 6 : -1);
  }
}
var TradingToolsComponent = class _TradingToolsComponent {
  openFaq = signal(0, ...ngDevMode ? [{ debugName: "openFaq" }] : (
    /* istanbul ignore next */
    []
  ));
  faqs = [
    {
      q: "Where can I find Equiti's trading tools?",
      a: "You can find our fundamental, sentiment and technical analysis tools in your Equiti Portal in the 'Analysis' section of the main menu. The tools are available for mobile devices, tablets, and laptops so you can use them conveniently wherever you are."
    },
    {
      q: "Are Equiti's trading tools free to use?",
      a: "Yes, all of Equiti's trading tools are completely free for clients with a live trading account. Simply log in to your Equiti Portal to access them."
    },
    {
      q: "Why should I use trading tools?",
      a: "Trading tools help you make more informed decisions by providing data-driven analysis, market signals, and economic indicators that can help you identify opportunities and manage risk more effectively."
    },
    {
      q: "How does the Assets Overview tool work?",
      a: "The Assets Overview tool provides a multi-asset market analysis dashboard with opportunity scores for every symbol based on AI analysis with multiple indicators. It makes it easy to spot new opportunities across all markets."
    }
  ];
  toggleFaq(index) {
    this.openFaq.set(this.openFaq() === index ? null : index);
  }
  static \u0275fac = function TradingToolsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TradingToolsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TradingToolsComponent, selectors: [["app-trading-tools"]], decls: 290, vars: 0, consts: [[1, "breadcrumb-bar"], [1, "container"], [1, "breadcrumb"], ["routerLink", "/", 1, "bc-home"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"], ["points", "9 22 9 12 15 12 15 22"], [1, "bc-sep"], [1, "bc-current"], [1, "tt-hero"], [1, "container", "tt-hero-inner"], [1, "sect-label"], [1, "tt-hero-h1"], [1, "tt-hero-sub"], ["routerLink", "/register", 1, "btn-hero"], [1, "tt-hero-visual"], ["src", "https://eq-cdn.equiti-me.com/website/images/trading-tools-hero.original.png", "alt", "Trading tools preview", 1, "tt-hero-img"], [1, "tt-features"], [1, "tt-feat-h2"], [1, "tt-feat-grid"], [1, "tt-feat-card"], [1, "tt-feat-icon"], ["src", "https://eq-cdn.equiti-me.com/website/documents/icon-easy.svg", "alt", "Easy to use"], [1, "tt-feat-title"], [1, "tt-feat-desc"], ["viewBox", "0 0 48 48", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "tt-feat-svg"], ["d", "M18 8h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2z"], ["cx", "30", "cy", "18", "r", "8"], ["d", "M10 36h6M22 36h16"], ["d", "M13 36v-8m18 8v-8"], ["x", "14", "y", "4", "width", "20", "height", "36", "rx", "3"], ["d", "M19 40h10"], ["d", "M20 16l4 4 8-8"], [1, "section-wrap"], [1, "tt-cta-banner"], [1, "sect-label", 2, "color", "#00E8CC"], [1, "tt-cta-h2"], ["routerLink", "/register", 1, "btn-cta-teal"], [1, "tt-tools-section"], [1, "tt-tools-grid"], [1, "tt-tool-card"], [1, "tt-tool-img", "tt-tool-img--assets"], [1, "tt-mock-header"], [1, "tt-mock-title"], [1, "tt-mock-dot"], [1, "tt-mock-filters"], [1, "tt-tag"], [1, "tt-tag", "tt-tag--active"], [1, "tt-mock-row"], [1, "tt-mock-pair"], [1, "tt-mock-bar"], [2, "width", "70%", "background", "#00B8A0"], ["href", "#", 1, "tt-mock-link"], [2, "width", "45%", "background", "#00B8A0"], [2, "width", "85%", "background", "#22C55E"], ["href", "#", 1, "tt-mock-link", "tt-mock-link--green"], [1, "tt-tool-title"], [1, "tt-tool-desc"], [1, "tt-tool-img", "tt-tool-img--signal"], [1, "tt-signal-row"], [1, "tt-signal-card", "tt-signal-card--buy"], [1, "tt-sc-top"], [1, "tt-sc-stats"], [1, "tt-sc-btn", "tt-sc-btn--buy"], [1, "tt-signal-card", "tt-signal-card--sell"], [1, "tt-sc-btn", "tt-sc-btn--sell"], [1, "tt-tool-img", "tt-tool-img--research"], [1, "tt-research-top"], [1, "tt-res-item"], [1, "tt-res-label"], [1, "tt-res-bar"], [2, "width", "60%"], [2, "width", "35%"], [2, "width", "80%"], [1, "tt-res-chart"], ["viewBox", "0 0 140 60", "fill", "none", 1, "tt-sparkline"], ["points", "0,50 20,35 40,40 60,20 80,25 100,10 120,15 140,5", "stroke", "#00B8A0", "stroke-width", "2", "fill", "none"], ["points", "0,55 20,48 40,52 60,42 80,45 100,30 120,35 140,25", "stroke", "#E5E7EB", "stroke-width", "1.5", "fill", "none"], [1, "tt-tool-img", "tt-tool-img--calendar"], [1, "tt-cal-top"], [1, "tt-cal-tabs"], [1, "tt-cal-tab", "tt-cal-tab--active"], [1, "tt-cal-tab"], [1, "tt-cal-chart"], ["viewBox", "0 0 140 70", "fill", "none", 1, "tt-sparkline"], ["id", "calGrad", "x1", "0", "y1", "0", "x2", "0", "y2", "1"], ["offset", "0%", "stop-color", "#00B8A0", "stop-opacity", "0.3"], ["offset", "100%", "stop-color", "#00B8A0", "stop-opacity", "0"], ["d", "M0,60 L15,45 L30,50 L50,30 L70,35 L90,15 L110,20 L130,8 L140,5 L140,70 L0,70 Z", "fill", "url(#calGrad)"], ["points", "0,60 15,45 30,50 50,30 70,35 90,15 110,20 130,8 140,5", "stroke", "#00B8A0", "stroke-width", "2", "fill", "none"], [1, "tt-tool-img", "tt-tool-img--news"], [1, "tt-news-header"], [1, "tt-news-title"], [1, "tt-news-dot"], [1, "tt-news-tabs"], [1, "tt-news-tab", "tt-news-tab--active"], [1, "tt-news-tab"], [1, "tt-news-item"], [1, "tt-news-date"], [1, "tt-news-headline"], [1, "tt-news-tag"], [1, "tt-tool-img", "tt-tool-img--resources"], ["src", "https://eq-cdn.equiti-me.com/website/images/eResources.original.png", "alt", "eResources", 1, "tt-tool-photo"], [1, "tt-faq-section"], [1, "container", "tt-faq-inner"], [1, "tt-faq-h2"], [1, "tt-faq-list"], [1, "tt-faq-item", 3, "open"], [1, "tt-explore-section"], [1, "tt-explore-h2"], [1, "tt-explore-grid"], [1, "tt-explore-card"], [1, "tt-explore-img"], ["src", "https://eq-cdn.equiti-me.com/website/images/Platforms_prefooter.original.png", "alt", "Platforms", 1, "tt-explore-photo"], [1, "tt-explore-title"], [1, "tt-explore-desc"], ["href", "#", 1, "lnk-blue"], [1, "tt-explore-img", "tt-explore-img--accounts"], ["src", "https://eq-cdn.equiti-me.com/website/images/trading-products.original.png", "alt", "Trading accounts", 1, "tt-explore-photo", "tt-explore-photo--contain"], [1, "tt-explore-img", "tt-explore-img--partners"], ["src", "https://eq-cdn.equiti-me.com/website/images/transfer-funds-securely.original.png", "alt", "Partners", 1, "tt-explore-photo", "tt-explore-photo--contain"], [1, "tt-faq-item", 3, "click"], [1, "tt-faq-q"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none", 1, "tt-faq-chevron"], ["d", "M5 7l5 5 5-5", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "tt-faq-a"]], template: function TradingToolsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "nav", 2)(3, "a", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5)(6, "polyline", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "span", 7);
      \u0275\u0275text(8, "\u203A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 8);
      \u0275\u0275text(10, "Trading Tools");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "section", 9)(12, "div", 10)(13, "span", 11);
      \u0275\u0275text(14, "TRADING TOOLS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "h1", 12);
      \u0275\u0275text(16, "Trade with advanced analysis");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p", 13);
      \u0275\u0275text(18, "Sort assets by insightful trend indicators and keep up with market events to find smarter opportunities using free trading tools like Assets Overview, Signal Centre and a full Economic Calendar.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "a", 14);
      \u0275\u0275text(20, "START TRADING");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 15);
      \u0275\u0275element(22, "img", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "section", 17)(24, "div", 1)(25, "span", 11);
      \u0275\u0275text(26, "OUR TRADING TOOLS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "h2", 18);
      \u0275\u0275text(28, "Use our pro analysis to identify your best next move");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 19)(30, "div", 20)(31, "div", 21);
      \u0275\u0275element(32, "img", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "h3", 23);
      \u0275\u0275text(34, "Easy to use");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "p", 24);
      \u0275\u0275text(36, "Our in-depth data and analysis makes it easy to spot new opportunities, for traders of all levels.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 20)(38, "div", 21);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(39, "svg", 25);
      \u0275\u0275element(40, "path", 26)(41, "circle", 27)(42, "path", 28)(43, "path", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(44, "h3", 23);
      \u0275\u0275text(45, "All in one place");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "p", 24);
      \u0275\u0275text(47, "Find analysis tools in the Equiti portal with even more available on our trading platform.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 20)(49, "div", 21);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(50, "svg", 25);
      \u0275\u0275element(51, "rect", 30)(52, "path", 31)(53, "path", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(54, "h3", 23);
      \u0275\u0275text(55, "Free access");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "p", 24);
      \u0275\u0275text(57, "With your Equiti trading account, you get access to our tools from any device for free.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(58, "section", 33)(59, "div", 1)(60, "div", 34)(61, "span", 35);
      \u0275\u0275text(62, "GLOBAL BROKER");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "h2", 36);
      \u0275\u0275text(64, "Start trading online with Equiti");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "a", 37);
      \u0275\u0275text(66, "START TRADING");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(67, "section", 38)(68, "div", 1)(69, "div", 39)(70, "div", 40)(71, "div", 41)(72, "div", 42)(73, "span", 43);
      \u0275\u0275text(74, "Assets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "span", 44);
      \u0275\u0275text(76, "\xB0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "div", 45)(78, "span", 46);
      \u0275\u0275text(79, "CLEAR ALL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "span", 47);
      \u0275\u0275text(81, "FX");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "div", 48)(83, "span", 49);
      \u0275\u0275text(84, "AUD/CAD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "span", 50);
      \u0275\u0275element(86, "span", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "a", 52);
      \u0275\u0275text(88, "Bearish");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "div", 48)(90, "span", 49);
      \u0275\u0275text(91, "AUD/CHF");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "span", 50);
      \u0275\u0275element(93, "span", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "a", 52);
      \u0275\u0275text(95, "Bearish");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "div", 48)(97, "span", 49);
      \u0275\u0275text(98, "AUD/JPY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "span", 50);
      \u0275\u0275element(100, "span", 54);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "a", 55);
      \u0275\u0275text(102, "Bullish");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(103, "h3", 56);
      \u0275\u0275text(104, "Assets Overview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "p", 57);
      \u0275\u0275text(106, "Use our multi-asset market analysis dashboard to find opportunities faster. It includes opportunity scores for every symbol based on AI analysis with multiple indicators.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "div", 40)(108, "div", 58)(109, "div", 59)(110, "div", 60)(111, "div", 61)(112, "span");
      \u0275\u0275text(113, "US30");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "small");
      \u0275\u0275text(115, "Buy Limit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "div", 62)(117, "span");
      \u0275\u0275text(118, "Confidence ");
      \u0275\u0275elementStart(119, "b");
      \u0275\u0275text(120, "96%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(121, "span");
      \u0275\u0275text(122, "Stop ");
      \u0275\u0275elementStart(123, "b");
      \u0275\u0275text(124, "34564");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(125, "span");
      \u0275\u0275text(126, "Entry ");
      \u0275\u0275elementStart(127, "b");
      \u0275\u0275text(128, "34886");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(129, "span");
      \u0275\u0275text(130, "Target ");
      \u0275\u0275elementStart(131, "b");
      \u0275\u0275text(132, "1900");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(133, "button", 63);
      \u0275\u0275text(134, "Buy");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(135, "div", 64)(136, "div", 61)(137, "span");
      \u0275\u0275text(138, "USDCHF");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "small");
      \u0275\u0275text(140, "Sell Limit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(141, "div", 62)(142, "span");
      \u0275\u0275text(143, "Confidence ");
      \u0275\u0275elementStart(144, "b");
      \u0275\u0275text(145, "80%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(146, "span");
      \u0275\u0275text(147, "Stop ");
      \u0275\u0275elementStart(148, "b");
      \u0275\u0275text(149, "0.9012");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(150, "span");
      \u0275\u0275text(151, "Entry ");
      \u0275\u0275elementStart(152, "b");
      \u0275\u0275text(153, "0.8987");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(154, "span");
      \u0275\u0275text(155, "Target ");
      \u0275\u0275elementStart(156, "b");
      \u0275\u0275text(157, "0.8927");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(158, "button", 65);
      \u0275\u0275text(159, "Sell");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(160, "h3", 56);
      \u0275\u0275text(161, "Signal Centre");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "p", 57);
      \u0275\u0275text(163, "Get up to 40 trade ideas per day with target entry point, stop loss & take profit based on human-led analysis and AI. Ideas are added 3 times a day, for the EU, US, and Asia trading sessions.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(164, "div", 40)(165, "div", 66)(166, "div", 67)(167, "div", 68)(168, "span", 69);
      \u0275\u0275text(169, "EURUSD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "span", 70);
      \u0275\u0275element(171, "span", 71);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(172, "div", 68)(173, "span", 69);
      \u0275\u0275text(174, "GBPUSD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "span", 70);
      \u0275\u0275element(176, "span", 72);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(177, "div", 68)(178, "span", 69);
      \u0275\u0275text(179, "USDJPY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "span", 70);
      \u0275\u0275element(181, "span", 73);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(182, "div", 74);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(183, "svg", 75);
      \u0275\u0275element(184, "polyline", 76)(185, "polyline", 77);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(186, "h3", 56);
      \u0275\u0275text(187, "Research Terminal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "p", 57);
      \u0275\u0275text(189, "Track news sentiment and volatility using AI to identify trading opportunities. Market alerts and sentiment circles highlight shifts in news sentiment to help predict price changes.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(190, "div", 40)(191, "div", 78)(192, "div", 79)(193, "div", 80)(194, "span", 81);
      \u0275\u0275text(195, "1H");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "span", 82);
      \u0275\u0275text(197, "1D");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "span", 82);
      \u0275\u0275text(199, "1W");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(200, "div", 83);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(201, "svg", 84)(202, "defs")(203, "linearGradient", 85);
      \u0275\u0275element(204, "stop", 86)(205, "stop", 87);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(206, "path", 88)(207, "polyline", 89);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(208, "h3", 56);
      \u0275\u0275text(209, "Economic Calendar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "p", 57);
      \u0275\u0275text(211, "Trading stocks? Prepare for earnings reports, IPOs and other announcements with a full economic calendar and forecasts for their impact including potential price ranges.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(212, "div", 40)(213, "div", 90)(214, "div", 91)(215, "span", 92);
      \u0275\u0275text(216, "Latest News");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(217, "span", 93);
      \u0275\u0275text(218, "\xB0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(219, "div", 94)(220, "span", 95);
      \u0275\u0275text(221, "EUR/USD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "span", 96);
      \u0275\u0275text(223, "GROUP");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(224, "div", 97)(225, "small", 98);
      \u0275\u0275text(226, "29/08/2023 15:23");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "p", 99);
      \u0275\u0275text(228, "DJ U.S. Consumer Confidence Fell as Recession Signals Loom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "span", 100);
      \u0275\u0275text(230, "Top News");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(231, "div", 97)(232, "small", 98);
      \u0275\u0275text(233, "29/08/2023 14:17");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(234, "p", 99);
      \u0275\u0275text(235, "DJ U.S. Home Sales Steady in June");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(236, "span", 100);
      \u0275\u0275text(237, "Top News");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(238, "h3", 56);
      \u0275\u0275text(239, "Market news");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(240, "p", 57);
      \u0275\u0275text(241, "Make smarter investment decisions with daily snapshots of important financial news with the latest stock market data on asset performance and in-depth insights on market events.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(242, "div", 40)(243, "div", 101);
      \u0275\u0275element(244, "img", 102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(245, "h3", 56);
      \u0275\u0275text(246, "eResources");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(247, "p", 57);
      \u0275\u0275text(248, "Make the most of your trading potential and improve your trading skills with insights from our team of experts, free learning resources and live events.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(249, "section", 103)(250, "div", 104)(251, "span", 11);
      \u0275\u0275text(252, "FAQS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(253, "h2", 105);
      \u0275\u0275text(254, "Trading tools FAQs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(255, "div", 106);
      \u0275\u0275repeaterCreate(256, TradingToolsComponent_For_257_Template, 7, 4, "div", 107, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(258, "section", 108)(259, "div", 1)(260, "h2", 109);
      \u0275\u0275text(261, "There's more to explore");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(262, "div", 110)(263, "div", 111)(264, "div", 112);
      \u0275\u0275element(265, "img", 113);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(266, "h3", 114);
      \u0275\u0275text(267, "Platforms");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(268, "p", 115);
      \u0275\u0275text(269, "Trade CFDs with live market data on MT5 from your phone or computer.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(270, "a", 116);
      \u0275\u0275text(271, "See all trading platforms");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(272, "div", 111)(273, "div", 117);
      \u0275\u0275element(274, "img", 118);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(275, "h3", 114);
      \u0275\u0275text(276, "Trading accounts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(277, "p", 115);
      \u0275\u0275text(278, "Zero commission trading with low deposit requirements.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(279, "a", 116);
      \u0275\u0275text(280, "Compare accounts");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(281, "div", 111)(282, "div", 119);
      \u0275\u0275element(283, "img", 120);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(284, "h3", 114);
      \u0275\u0275text(285, "Partners");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(286, "p", 115);
      \u0275\u0275text(287, "Introduce your client network for competitive benefits.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(288, "a", 116);
      \u0275\u0275text(289, "Partner with Equiti");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(256);
      \u0275\u0275repeater(ctx.faqs);
    }
  }, dependencies: [RouterModule, RouterLink], styles: ["\n.breadcrumb-bar[_ngcontent-%COMP%] {\n  padding: 16px 0;\n  border-bottom: 1px solid var(--border);\n  background: #fff;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.bc-home[_ngcontent-%COMP%] {\n  color: #00B8A0;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n}\n.bc-sep[_ngcontent-%COMP%] {\n  color: #9CA3AF;\n  font-size: 14px;\n}\n.bc-current[_ngcontent-%COMP%] {\n  color: #00B8A0;\n  font-size: 14px;\n  font-weight: 500;\n}\n.tt-hero[_ngcontent-%COMP%] {\n  background: var(--bg);\n  padding: 60px 0 0;\n}\n.tt-hero-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.tt-hero-h1[_ngcontent-%COMP%] {\n  font-size: clamp(40px, 5vw, 64px);\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -1.5px;\n  line-height: 1.1;\n  max-width: 700px;\n  margin-bottom: 20px;\n}\n.tt-hero-sub[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-muted);\n  line-height: 1.75;\n  max-width: 680px;\n  margin-bottom: 32px;\n}\n.btn-hero[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 14px 32px;\n  background: var(--primary);\n  color: #fff;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition: background var(--transition);\n  margin-bottom: 48px;\n}\n.btn-hero[_ngcontent-%COMP%]:hover {\n  background: var(--primary-hover);\n}\n.tt-hero-visual[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 720px;\n  margin: 0 auto;\n}\n.tt-hero-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: block;\n  object-fit: contain;\n}\n.tt-features[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  background: var(--bg);\n}\n.tt-feat-h2[_ngcontent-%COMP%] {\n  font-size: clamp(28px, 3.5vw, 44px);\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.5px;\n  line-height: 1.2;\n  max-width: 740px;\n  margin-bottom: 56px;\n}\n.tt-feat-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n.tt-feat-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  padding: 32px 28px;\n}\n.tt-feat-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  margin-bottom: 20px;\n}\n.tt-feat-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n.tt-feat-svg[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  object-fit: contain;\n  color: #1A1D2E;\n}\n.tt-feat-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text);\n  margin-bottom: 10px;\n}\n.tt-feat-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n  line-height: 1.7;\n}\n.section-wrap[_ngcontent-%COMP%] {\n  padding: 40px 0;\n}\n.tt-cta-banner[_ngcontent-%COMP%] {\n  background: var(--dark);\n  border-radius: var(--radius-xl);\n  padding: 60px 56px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.tt-cta-h2[_ngcontent-%COMP%] {\n  font-size: clamp(28px, 4vw, 44px);\n  font-weight: 700;\n  color: #fff;\n  letter-spacing: -0.5px;\n  line-height: 1.2;\n  margin: 0;\n}\n.btn-cta-teal[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 12px 28px;\n  background: var(--primary);\n  color: #fff;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  text-decoration: none;\n  margin-top: 8px;\n  transition: background var(--transition);\n}\n.btn-cta-teal[_ngcontent-%COMP%]:hover {\n  background: var(--primary-hover);\n}\n.tt-tools-section[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  background: var(--bg);\n}\n.tt-tools-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 32px 24px;\n}\n.tt-tool-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.tt-tool-img[_ngcontent-%COMP%] {\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  background: #F3F4F6;\n  margin-bottom: 20px;\n  height: 220px;\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n  border: 1px solid var(--border);\n}\n.tt-tool-photo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 8px;\n}\n.tt-tool-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  color: var(--text);\n  margin-bottom: 10px;\n  letter-spacing: -0.3px;\n}\n.tt-tool-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n  line-height: 1.7;\n}\n.tt-mock-header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  align-items: baseline;\n  margin-bottom: 8px;\n}\n.tt-mock-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1A1D2E;\n}\n.tt-mock-dot[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #00B8A0;\n}\n.tt-mock-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  margin-bottom: 10px;\n}\n.tt-tag[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 7px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  color: #6B7280;\n}\n.tt-tag--active[_ngcontent-%COMP%] {\n  background: #1A1D2E;\n  color: #fff;\n  border-color: #1A1D2E;\n}\n.tt-mock-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 5px 0;\n  border-bottom: 1px solid #F3F4F6;\n}\n.tt-mock-pair[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #374151;\n  width: 56px;\n  flex-shrink: 0;\n}\n.tt-mock-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  background: #E5E7EB;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.tt-mock-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  border-radius: 3px;\n}\n.tt-mock-link[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #00B8A0;\n  flex-shrink: 0;\n  text-decoration: none;\n}\n.tt-mock-link--green[_ngcontent-%COMP%] {\n  color: #22C55E;\n}\n.tt-tool-img--signal[_ngcontent-%COMP%] {\n  padding: 12px;\n  gap: 8px;\n  justify-content: center;\n}\n.tt-signal-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  width: 100%;\n}\n.tt-signal-card[_ngcontent-%COMP%] {\n  flex: 1;\n  border-radius: 8px;\n  padding: 10px 8px;\n  color: #fff;\n}\n.tt-signal-card--buy[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #1A2E3A 0%,\n      #1a3a2e 100%);\n}\n.tt-signal-card--sell[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #2e1a1a 0%,\n      #3a1a20 100%);\n}\n.tt-sc-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 6px;\n}\n.tt-sc-top[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n}\n.tt-sc-top[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 9px;\n  opacity: 0.7;\n}\n.tt-sc-stats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  margin-bottom: 8px;\n}\n.tt-sc-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 9px;\n  opacity: 0.8;\n  display: flex;\n  justify-content: space-between;\n}\n.tt-sc-stats[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  opacity: 1;\n  font-weight: 600;\n}\n.tt-sc-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 4px 0;\n  border: none;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 700;\n  cursor: pointer;\n}\n.tt-sc-btn--buy[_ngcontent-%COMP%] {\n  background: #00B8A0;\n  color: #fff;\n}\n.tt-sc-btn--sell[_ngcontent-%COMP%] {\n  background: #EF4444;\n  color: #fff;\n}\n.tt-tool-img--research[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.tt-research-top[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.tt-res-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.tt-res-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #374151;\n  width: 52px;\n  flex-shrink: 0;\n}\n.tt-res-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  background: #E5E7EB;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.tt-res-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  background: var(--primary);\n  border-radius: 4px;\n}\n.tt-res-chart[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: flex-end;\n}\n.tt-sparkline[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.tt-tool-img--calendar[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.tt-cal-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.tt-cal-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.tt-cal-tab[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 7px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  color: #6B7280;\n}\n.tt-cal-tab--active[_ngcontent-%COMP%] {\n  background: #1A1D2E;\n  color: #fff;\n  border-color: #1A1D2E;\n}\n.tt-cal-chart[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: flex-end;\n}\n.tt-tool-img--news[_ngcontent-%COMP%] {\n  padding: 12px;\n  gap: 0;\n  background: #fff;\n}\n.tt-news-header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2px;\n  align-items: baseline;\n  margin-bottom: 6px;\n}\n.tt-news-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #1A1D2E;\n}\n.tt-news-dot[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #00B8A0;\n}\n.tt-news-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 8px;\n  border-bottom: 1px solid #E5E7EB;\n  padding-bottom: 6px;\n}\n.tt-news-tab[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #9CA3AF;\n  padding-bottom: 4px;\n}\n.tt-news-tab--active[_ngcontent-%COMP%] {\n  color: #1A1D2E;\n  font-weight: 600;\n  border-bottom: 2px solid #1A1D2E;\n}\n.tt-news-item[_ngcontent-%COMP%] {\n  padding: 6px 0;\n  border-bottom: 1px solid #F3F4F6;\n}\n.tt-news-date[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: #9CA3AF;\n  display: block;\n  margin-bottom: 2px;\n}\n.tt-news-headline[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #374151;\n  line-height: 1.4;\n  margin-bottom: 3px;\n}\n.tt-news-tag[_ngcontent-%COMP%] {\n  font-size: 9px;\n  padding: 1px 6px;\n  border-radius: 10px;\n  background: #FEF3C7;\n  color: #D97706;\n}\n.tt-tool-img--resources[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.tt-faq-section[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  background: var(--bg);\n}\n.tt-faq-inner[_ngcontent-%COMP%] {\n  max-width: 820px;\n}\n.tt-faq-h2[_ngcontent-%COMP%] {\n  font-size: clamp(28px, 3.5vw, 40px);\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.5px;\n  margin-bottom: 32px;\n}\n.tt-faq-list[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n}\n.tt-faq-item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border);\n  cursor: pointer;\n}\n.tt-faq-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.tt-faq-q[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px;\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--text);\n  gap: 16px;\n}\n.tt-faq-chevron[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  transition: transform 0.2s;\n  color: #6B7280;\n}\n.tt-faq-item.open[_ngcontent-%COMP%]   .tt-faq-chevron[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.tt-faq-a[_ngcontent-%COMP%] {\n  padding: 0 24px 20px;\n  font-size: 15px;\n  color: var(--text-muted);\n  line-height: 1.75;\n}\n.tt-explore-section[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  background: var(--bg);\n}\n.tt-explore-h2[_ngcontent-%COMP%] {\n  font-size: clamp(24px, 3vw, 36px);\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.5px;\n  margin-bottom: 36px;\n}\n.tt-explore-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n.tt-explore-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.tt-explore-img[_ngcontent-%COMP%] {\n  height: 260px;\n  background: #F3F4F6;\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tt-explore-img--accounts[_ngcontent-%COMP%], \n.tt-explore-img--partners[_ngcontent-%COMP%] {\n  background: #EEF0F5;\n}\n.tt-explore-photo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.tt-explore-photo--contain[_ngcontent-%COMP%] {\n  object-fit: contain;\n  padding: 16px;\n}\n.tt-explore-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  color: var(--text);\n  margin-bottom: 8px;\n}\n.tt-explore-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n  line-height: 1.65;\n  margin-bottom: 12px;\n  flex: 1;\n}\n@media (max-width: 1024px) {\n  .tt-tools-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .tt-explore-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .tt-feat-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .tt-tools-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .tt-explore-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .tt-cta-banner[_ngcontent-%COMP%] {\n    padding: 40px 24px;\n  }\n  .tt-hero-h1[_ngcontent-%COMP%] {\n    letter-spacing: -0.5px;\n  }\n}\n/*# sourceMappingURL=trading-tools.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TradingToolsComponent, [{
    type: Component,
    args: [{ selector: "app-trading-tools", standalone: true, imports: [RouterModule], template: `<!-- \u2500\u2500 BREADCRUMB \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<div class="breadcrumb-bar">
  <div class="container">
    <nav class="breadcrumb">
      <a routerLink="/" class="bc-home">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      </a>
      <span class="bc-sep">\u203A</span>
      <span class="bc-current">Trading Tools</span>
    </nav>
  </div>
</div>

<!-- \u2500\u2500 1. HERO \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<section class="tt-hero">
  <div class="container tt-hero-inner">
    <span class="sect-label">TRADING TOOLS</span>
    <h1 class="tt-hero-h1">Trade with advanced analysis</h1>
    <p class="tt-hero-sub">Sort assets by insightful trend indicators and keep up with market events to find smarter opportunities using free trading tools like Assets Overview, Signal Centre and a full Economic Calendar.</p>
    <a routerLink="/register" class="btn-hero">START TRADING</a>
    <div class="tt-hero-visual">
      <img src="https://eq-cdn.equiti-me.com/website/images/trading-tools-hero.original.png"
           alt="Trading tools preview" class="tt-hero-img" />
    </div>
  </div>
</section>

<!-- \u2500\u2500 2. FEATURE CARDS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<section class="tt-features">
  <div class="container">
    <span class="sect-label">OUR TRADING TOOLS</span>
    <h2 class="tt-feat-h2">Use our pro analysis to identify your best next move</h2>
    <div class="tt-feat-grid">

      <div class="tt-feat-card">
        <div class="tt-feat-icon">
          <img src="https://eq-cdn.equiti-me.com/website/documents/icon-easy.svg" alt="Easy to use" />
        </div>
        <h3 class="tt-feat-title">Easy to use</h3>
        <p class="tt-feat-desc">Our in-depth data and analysis makes it easy to spot new opportunities, for traders of all levels.</p>
      </div>

      <div class="tt-feat-card">
        <div class="tt-feat-icon">
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" class="tt-feat-svg">
            <path d="M18 8h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2z"/>
            <circle cx="30" cy="18" r="8"/>
            <path d="M10 36h6M22 36h16"/>
            <path d="M13 36v-8m18 8v-8"/>
          </svg>
        </div>
        <h3 class="tt-feat-title">All in one place</h3>
        <p class="tt-feat-desc">Find analysis tools in the Equiti portal with even more available on our trading platform.</p>
      </div>

      <div class="tt-feat-card">
        <div class="tt-feat-icon">
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" class="tt-feat-svg">
            <rect x="14" y="4" width="20" height="36" rx="3"/>
            <path d="M19 40h10"/>
            <path d="M20 16l4 4 8-8"/>
          </svg>
        </div>
        <h3 class="tt-feat-title">Free access</h3>
        <p class="tt-feat-desc">With your Equiti trading account, you get access to our tools from any device for free.</p>
      </div>

    </div>
  </div>
</section>

<!-- \u2500\u2500 3. CTA DARK BANNER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<section class="section-wrap">
  <div class="container">
    <div class="tt-cta-banner">
      <span class="sect-label" style="color:#00E8CC">GLOBAL BROKER</span>
      <h2 class="tt-cta-h2">Start trading online with Equiti</h2>
      <a routerLink="/register" class="btn-cta-teal">START TRADING</a>
    </div>
  </div>
</section>

<!-- \u2500\u2500 4. TOOL CARDS GRID \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<section class="tt-tools-section">
  <div class="container">
    <div class="tt-tools-grid">

      <div class="tt-tool-card">
        <div class="tt-tool-img tt-tool-img--assets">
          <div class="tt-mock-header"><span class="tt-mock-title">Assets</span><span class="tt-mock-dot">\xB0</span></div>
          <div class="tt-mock-filters"><span class="tt-tag">CLEAR ALL</span><span class="tt-tag tt-tag--active">FX</span></div>
          <div class="tt-mock-row"><span class="tt-mock-pair">AUD/CAD</span><span class="tt-mock-bar"><span style="width:70%;background:#00B8A0"></span></span><a href="#" class="tt-mock-link">Bearish</a></div>
          <div class="tt-mock-row"><span class="tt-mock-pair">AUD/CHF</span><span class="tt-mock-bar"><span style="width:45%;background:#00B8A0"></span></span><a href="#" class="tt-mock-link">Bearish</a></div>
          <div class="tt-mock-row"><span class="tt-mock-pair">AUD/JPY</span><span class="tt-mock-bar"><span style="width:85%;background:#22C55E"></span></span><a href="#" class="tt-mock-link tt-mock-link--green">Bullish</a></div>
        </div>
        <h3 class="tt-tool-title">Assets Overview</h3>
        <p class="tt-tool-desc">Use our multi-asset market analysis dashboard to find opportunities faster. It includes opportunity scores for every symbol based on AI analysis with multiple indicators.</p>
      </div>

      <div class="tt-tool-card">
        <div class="tt-tool-img tt-tool-img--signal">
          <div class="tt-signal-row">
            <div class="tt-signal-card tt-signal-card--buy">
              <div class="tt-sc-top"><span>US30</span><small>Buy Limit</small></div>
              <div class="tt-sc-stats"><span>Confidence <b>96%</b></span><span>Stop <b>34564</b></span><span>Entry <b>34886</b></span><span>Target <b>1900</b></span></div>
              <button class="tt-sc-btn tt-sc-btn--buy">Buy</button>
            </div>
            <div class="tt-signal-card tt-signal-card--sell">
              <div class="tt-sc-top"><span>USDCHF</span><small>Sell Limit</small></div>
              <div class="tt-sc-stats"><span>Confidence <b>80%</b></span><span>Stop <b>0.9012</b></span><span>Entry <b>0.8987</b></span><span>Target <b>0.8927</b></span></div>
              <button class="tt-sc-btn tt-sc-btn--sell">Sell</button>
            </div>
          </div>
        </div>
        <h3 class="tt-tool-title">Signal Centre</h3>
        <p class="tt-tool-desc">Get up to 40 trade ideas per day with target entry point, stop loss & take profit based on human-led analysis and AI. Ideas are added 3 times a day, for the EU, US, and Asia trading sessions.</p>
      </div>

      <div class="tt-tool-card">
        <div class="tt-tool-img tt-tool-img--research">
          <div class="tt-research-top">
            <div class="tt-res-item"><span class="tt-res-label">EURUSD</span><span class="tt-res-bar"><span style="width:60%"></span></span></div>
            <div class="tt-res-item"><span class="tt-res-label">GBPUSD</span><span class="tt-res-bar"><span style="width:35%"></span></span></div>
            <div class="tt-res-item"><span class="tt-res-label">USDJPY</span><span class="tt-res-bar"><span style="width:80%"></span></span></div>
          </div>
          <div class="tt-res-chart">
            <svg viewBox="0 0 140 60" fill="none" class="tt-sparkline">
              <polyline points="0,50 20,35 40,40 60,20 80,25 100,10 120,15 140,5" stroke="#00B8A0" stroke-width="2" fill="none"/>
              <polyline points="0,55 20,48 40,52 60,42 80,45 100,30 120,35 140,25" stroke="#E5E7EB" stroke-width="1.5" fill="none"/>
            </svg>
          </div>
        </div>
        <h3 class="tt-tool-title">Research Terminal</h3>
        <p class="tt-tool-desc">Track news sentiment and volatility using AI to identify trading opportunities. Market alerts and sentiment circles highlight shifts in news sentiment to help predict price changes.</p>
      </div>

      <div class="tt-tool-card">
        <div class="tt-tool-img tt-tool-img--calendar">
          <div class="tt-cal-top">
            <div class="tt-cal-tabs"><span class="tt-cal-tab tt-cal-tab--active">1H</span><span class="tt-cal-tab">1D</span><span class="tt-cal-tab">1W</span></div>
          </div>
          <div class="tt-cal-chart">
            <svg viewBox="0 0 140 70" fill="none" class="tt-sparkline">
              <defs><linearGradient id="calGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#00B8A0" stop-opacity="0.3"/><stop offset="100%" stop-color="#00B8A0" stop-opacity="0"/></linearGradient></defs>
              <path d="M0,60 L15,45 L30,50 L50,30 L70,35 L90,15 L110,20 L130,8 L140,5 L140,70 L0,70 Z" fill="url(#calGrad)"/>
              <polyline points="0,60 15,45 30,50 50,30 70,35 90,15 110,20 130,8 140,5" stroke="#00B8A0" stroke-width="2" fill="none"/>
            </svg>
          </div>
        </div>
        <h3 class="tt-tool-title">Economic Calendar</h3>
        <p class="tt-tool-desc">Trading stocks? Prepare for earnings reports, IPOs and other announcements with a full economic calendar and forecasts for their impact including potential price ranges.</p>
      </div>

      <div class="tt-tool-card">
        <div class="tt-tool-img tt-tool-img--news">
          <div class="tt-news-header"><span class="tt-news-title">Latest News</span><span class="tt-news-dot">\xB0</span></div>
          <div class="tt-news-tabs"><span class="tt-news-tab tt-news-tab--active">EUR/USD</span><span class="tt-news-tab">GROUP</span></div>
          <div class="tt-news-item"><small class="tt-news-date">29/08/2023 15:23</small><p class="tt-news-headline">DJ U.S. Consumer Confidence Fell as Recession Signals Loom</p><span class="tt-news-tag">Top News</span></div>
          <div class="tt-news-item"><small class="tt-news-date">29/08/2023 14:17</small><p class="tt-news-headline">DJ U.S. Home Sales Steady in June</p><span class="tt-news-tag">Top News</span></div>
        </div>
        <h3 class="tt-tool-title">Market news</h3>
        <p class="tt-tool-desc">Make smarter investment decisions with daily snapshots of important financial news with the latest stock market data on asset performance and in-depth insights on market events.</p>
      </div>

      <div class="tt-tool-card">
        <div class="tt-tool-img tt-tool-img--resources">
          <img src="https://eq-cdn.equiti-me.com/website/images/eResources.original.png"
               alt="eResources" class="tt-tool-photo" />
        </div>
        <h3 class="tt-tool-title">eResources</h3>
        <p class="tt-tool-desc">Make the most of your trading potential and improve your trading skills with insights from our team of experts, free learning resources and live events.</p>
      </div>

    </div>
  </div>
</section>

<!-- \u2500\u2500 5. FAQS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<section class="tt-faq-section">
  <div class="container tt-faq-inner">
    <span class="sect-label">FAQS</span>
    <h2 class="tt-faq-h2">Trading tools FAQs</h2>
    <div class="tt-faq-list">
      @for (faq of faqs; track $index) {
        <div class="tt-faq-item" [class.open]="openFaq() === $index" (click)="toggleFaq($index)">
          <div class="tt-faq-q">
            <span>{{ faq.q }}</span>
            <svg class="tt-faq-chevron" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          @if (openFaq() === $index) {
            <div class="tt-faq-a">
              <p>{{ faq.a }}</p>
            </div>
          }
        </div>
      }
    </div>
  </div>
</section>

<!-- \u2500\u2500 6. THERE'S MORE TO EXPLORE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<section class="tt-explore-section">
  <div class="container">
    <h2 class="tt-explore-h2">There's more to explore</h2>
    <div class="tt-explore-grid">

      <div class="tt-explore-card">
        <div class="tt-explore-img">
          <img src="https://eq-cdn.equiti-me.com/website/images/Platforms_prefooter.original.png"
               alt="Platforms" class="tt-explore-photo" />
        </div>
        <h3 class="tt-explore-title">Platforms</h3>
        <p class="tt-explore-desc">Trade CFDs with live market data on MT5 from your phone or computer.</p>
        <a href="#" class="lnk-blue">See all trading platforms</a>
      </div>

      <div class="tt-explore-card">
        <div class="tt-explore-img tt-explore-img--accounts">
          <img src="https://eq-cdn.equiti-me.com/website/images/trading-products.original.png"
               alt="Trading accounts" class="tt-explore-photo tt-explore-photo--contain" />
        </div>
        <h3 class="tt-explore-title">Trading accounts</h3>
        <p class="tt-explore-desc">Zero commission trading with low deposit requirements.</p>
        <a href="#" class="lnk-blue">Compare accounts</a>
      </div>

      <div class="tt-explore-card">
        <div class="tt-explore-img tt-explore-img--partners">
          <img src="https://eq-cdn.equiti-me.com/website/images/transfer-funds-securely.original.png"
               alt="Partners" class="tt-explore-photo tt-explore-photo--contain" />
        </div>
        <h3 class="tt-explore-title">Partners</h3>
        <p class="tt-explore-desc">Introduce your client network for competitive benefits.</p>
        <a href="#" class="lnk-blue">Partner with Equiti</a>
      </div>

    </div>
  </div>
</section>
`, styles: ["/* src/app/features/trading-tools/trading-tools.component.css */\n.breadcrumb-bar {\n  padding: 16px 0;\n  border-bottom: 1px solid var(--border);\n  background: #fff;\n}\n.breadcrumb {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.bc-home {\n  color: #00B8A0;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n}\n.bc-sep {\n  color: #9CA3AF;\n  font-size: 14px;\n}\n.bc-current {\n  color: #00B8A0;\n  font-size: 14px;\n  font-weight: 500;\n}\n.tt-hero {\n  background: var(--bg);\n  padding: 60px 0 0;\n}\n.tt-hero-inner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.tt-hero-h1 {\n  font-size: clamp(40px, 5vw, 64px);\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -1.5px;\n  line-height: 1.1;\n  max-width: 700px;\n  margin-bottom: 20px;\n}\n.tt-hero-sub {\n  font-size: 16px;\n  color: var(--text-muted);\n  line-height: 1.75;\n  max-width: 680px;\n  margin-bottom: 32px;\n}\n.btn-hero {\n  display: inline-block;\n  padding: 14px 32px;\n  background: var(--primary);\n  color: #fff;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition: background var(--transition);\n  margin-bottom: 48px;\n}\n.btn-hero:hover {\n  background: var(--primary-hover);\n}\n.tt-hero-visual {\n  width: 100%;\n  max-width: 720px;\n  margin: 0 auto;\n}\n.tt-hero-img {\n  width: 100%;\n  height: auto;\n  display: block;\n  object-fit: contain;\n}\n.tt-features {\n  padding: 80px 0;\n  background: var(--bg);\n}\n.tt-feat-h2 {\n  font-size: clamp(28px, 3.5vw, 44px);\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.5px;\n  line-height: 1.2;\n  max-width: 740px;\n  margin-bottom: 56px;\n}\n.tt-feat-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n.tt-feat-card {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  padding: 32px 28px;\n}\n.tt-feat-icon {\n  width: 52px;\n  height: 52px;\n  margin-bottom: 20px;\n}\n.tt-feat-icon img,\n.tt-feat-svg {\n  width: 52px;\n  height: 52px;\n  object-fit: contain;\n  color: #1A1D2E;\n}\n.tt-feat-title {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--text);\n  margin-bottom: 10px;\n}\n.tt-feat-desc {\n  font-size: 14px;\n  color: var(--text-muted);\n  line-height: 1.7;\n}\n.section-wrap {\n  padding: 40px 0;\n}\n.tt-cta-banner {\n  background: var(--dark);\n  border-radius: var(--radius-xl);\n  padding: 60px 56px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.tt-cta-h2 {\n  font-size: clamp(28px, 4vw, 44px);\n  font-weight: 700;\n  color: #fff;\n  letter-spacing: -0.5px;\n  line-height: 1.2;\n  margin: 0;\n}\n.btn-cta-teal {\n  display: inline-block;\n  padding: 12px 28px;\n  background: var(--primary);\n  color: #fff;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  text-decoration: none;\n  margin-top: 8px;\n  transition: background var(--transition);\n}\n.btn-cta-teal:hover {\n  background: var(--primary-hover);\n}\n.tt-tools-section {\n  padding: 80px 0;\n  background: var(--bg);\n}\n.tt-tools-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 32px 24px;\n}\n.tt-tool-card {\n  display: flex;\n  flex-direction: column;\n}\n.tt-tool-img {\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  background: #F3F4F6;\n  margin-bottom: 20px;\n  height: 220px;\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n  border: 1px solid var(--border);\n}\n.tt-tool-photo {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 8px;\n}\n.tt-tool-title {\n  font-size: 22px;\n  font-weight: 600;\n  color: var(--text);\n  margin-bottom: 10px;\n  letter-spacing: -0.3px;\n}\n.tt-tool-desc {\n  font-size: 14px;\n  color: var(--text-muted);\n  line-height: 1.7;\n}\n.tt-mock-header {\n  display: flex;\n  gap: 4px;\n  align-items: baseline;\n  margin-bottom: 8px;\n}\n.tt-mock-title {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1A1D2E;\n}\n.tt-mock-dot {\n  font-size: 18px;\n  color: #00B8A0;\n}\n.tt-mock-filters {\n  display: flex;\n  gap: 6px;\n  margin-bottom: 10px;\n}\n.tt-tag {\n  font-size: 10px;\n  padding: 2px 7px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  color: #6B7280;\n}\n.tt-tag--active {\n  background: #1A1D2E;\n  color: #fff;\n  border-color: #1A1D2E;\n}\n.tt-mock-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 5px 0;\n  border-bottom: 1px solid #F3F4F6;\n}\n.tt-mock-pair {\n  font-size: 11px;\n  font-weight: 600;\n  color: #374151;\n  width: 56px;\n  flex-shrink: 0;\n}\n.tt-mock-bar {\n  flex: 1;\n  height: 6px;\n  background: #E5E7EB;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.tt-mock-bar span {\n  display: block;\n  height: 100%;\n  border-radius: 3px;\n}\n.tt-mock-link {\n  font-size: 10px;\n  color: #00B8A0;\n  flex-shrink: 0;\n  text-decoration: none;\n}\n.tt-mock-link--green {\n  color: #22C55E;\n}\n.tt-tool-img--signal {\n  padding: 12px;\n  gap: 8px;\n  justify-content: center;\n}\n.tt-signal-row {\n  display: flex;\n  gap: 8px;\n  width: 100%;\n}\n.tt-signal-card {\n  flex: 1;\n  border-radius: 8px;\n  padding: 10px 8px;\n  color: #fff;\n}\n.tt-signal-card--buy {\n  background:\n    linear-gradient(\n      145deg,\n      #1A2E3A 0%,\n      #1a3a2e 100%);\n}\n.tt-signal-card--sell {\n  background:\n    linear-gradient(\n      145deg,\n      #2e1a1a 0%,\n      #3a1a20 100%);\n}\n.tt-sc-top {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 6px;\n}\n.tt-sc-top span {\n  font-size: 11px;\n  font-weight: 700;\n}\n.tt-sc-top small {\n  font-size: 9px;\n  opacity: 0.7;\n}\n.tt-sc-stats {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  margin-bottom: 8px;\n}\n.tt-sc-stats span {\n  font-size: 9px;\n  opacity: 0.8;\n  display: flex;\n  justify-content: space-between;\n}\n.tt-sc-stats b {\n  opacity: 1;\n  font-weight: 600;\n}\n.tt-sc-btn {\n  width: 100%;\n  padding: 4px 0;\n  border: none;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 700;\n  cursor: pointer;\n}\n.tt-sc-btn--buy {\n  background: #00B8A0;\n  color: #fff;\n}\n.tt-sc-btn--sell {\n  background: #EF4444;\n  color: #fff;\n}\n.tt-tool-img--research {\n  justify-content: space-between;\n}\n.tt-research-top {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.tt-res-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.tt-res-label {\n  font-size: 11px;\n  font-weight: 600;\n  color: #374151;\n  width: 52px;\n  flex-shrink: 0;\n}\n.tt-res-bar {\n  flex: 1;\n  height: 8px;\n  background: #E5E7EB;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.tt-res-bar span {\n  display: block;\n  height: 100%;\n  background: var(--primary);\n  border-radius: 4px;\n}\n.tt-res-chart {\n  flex: 1;\n  display: flex;\n  align-items: flex-end;\n}\n.tt-sparkline {\n  width: 100%;\n}\n.tt-tool-img--calendar {\n  justify-content: space-between;\n}\n.tt-cal-top {\n  display: flex;\n  justify-content: flex-end;\n}\n.tt-cal-tabs {\n  display: flex;\n  gap: 4px;\n}\n.tt-cal-tab {\n  font-size: 10px;\n  padding: 2px 7px;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  color: #6B7280;\n}\n.tt-cal-tab--active {\n  background: #1A1D2E;\n  color: #fff;\n  border-color: #1A1D2E;\n}\n.tt-cal-chart {\n  flex: 1;\n  display: flex;\n  align-items: flex-end;\n}\n.tt-tool-img--news {\n  padding: 12px;\n  gap: 0;\n  background: #fff;\n}\n.tt-news-header {\n  display: flex;\n  gap: 2px;\n  align-items: baseline;\n  margin-bottom: 6px;\n}\n.tt-news-title {\n  font-size: 12px;\n  font-weight: 700;\n  color: #1A1D2E;\n}\n.tt-news-dot {\n  font-size: 16px;\n  color: #00B8A0;\n}\n.tt-news-tabs {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 8px;\n  border-bottom: 1px solid #E5E7EB;\n  padding-bottom: 6px;\n}\n.tt-news-tab {\n  font-size: 10px;\n  color: #9CA3AF;\n  padding-bottom: 4px;\n}\n.tt-news-tab--active {\n  color: #1A1D2E;\n  font-weight: 600;\n  border-bottom: 2px solid #1A1D2E;\n}\n.tt-news-item {\n  padding: 6px 0;\n  border-bottom: 1px solid #F3F4F6;\n}\n.tt-news-date {\n  font-size: 9px;\n  color: #9CA3AF;\n  display: block;\n  margin-bottom: 2px;\n}\n.tt-news-headline {\n  font-size: 10px;\n  color: #374151;\n  line-height: 1.4;\n  margin-bottom: 3px;\n}\n.tt-news-tag {\n  font-size: 9px;\n  padding: 1px 6px;\n  border-radius: 10px;\n  background: #FEF3C7;\n  color: #D97706;\n}\n.tt-tool-img--resources {\n  padding: 0;\n}\n.tt-faq-section {\n  padding: 80px 0;\n  background: var(--bg);\n}\n.tt-faq-inner {\n  max-width: 820px;\n}\n.tt-faq-h2 {\n  font-size: clamp(28px, 3.5vw, 40px);\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.5px;\n  margin-bottom: 32px;\n}\n.tt-faq-list {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n}\n.tt-faq-item {\n  border-bottom: 1px solid var(--border);\n  cursor: pointer;\n}\n.tt-faq-item:last-child {\n  border-bottom: none;\n}\n.tt-faq-q {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px;\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--text);\n  gap: 16px;\n}\n.tt-faq-chevron {\n  flex-shrink: 0;\n  transition: transform 0.2s;\n  color: #6B7280;\n}\n.tt-faq-item.open .tt-faq-chevron {\n  transform: rotate(180deg);\n}\n.tt-faq-a {\n  padding: 0 24px 20px;\n  font-size: 15px;\n  color: var(--text-muted);\n  line-height: 1.75;\n}\n.tt-explore-section {\n  padding: 80px 0;\n  background: var(--bg);\n}\n.tt-explore-h2 {\n  font-size: clamp(24px, 3vw, 36px);\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.5px;\n  margin-bottom: 36px;\n}\n.tt-explore-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n.tt-explore-card {\n  display: flex;\n  flex-direction: column;\n}\n.tt-explore-img {\n  height: 260px;\n  background: #F3F4F6;\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tt-explore-img--accounts,\n.tt-explore-img--partners {\n  background: #EEF0F5;\n}\n.tt-explore-photo {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.tt-explore-photo--contain {\n  object-fit: contain;\n  padding: 16px;\n}\n.tt-explore-title {\n  font-size: 22px;\n  font-weight: 600;\n  color: var(--text);\n  margin-bottom: 8px;\n}\n.tt-explore-desc {\n  font-size: 14px;\n  color: var(--text-muted);\n  line-height: 1.65;\n  margin-bottom: 12px;\n  flex: 1;\n}\n@media (max-width: 1024px) {\n  .tt-tools-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .tt-explore-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .tt-feat-grid {\n    grid-template-columns: 1fr;\n  }\n  .tt-tools-grid {\n    grid-template-columns: 1fr;\n  }\n  .tt-explore-grid {\n    grid-template-columns: 1fr;\n  }\n  .tt-cta-banner {\n    padding: 40px 24px;\n  }\n  .tt-hero-h1 {\n    letter-spacing: -0.5px;\n  }\n}\n/*# sourceMappingURL=trading-tools.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TradingToolsComponent, { className: "TradingToolsComponent", filePath: "src/app/features/trading-tools/trading-tools.component.ts", lineNumber: 11 });
})();
export {
  TradingToolsComponent
};
//# sourceMappingURL=chunk-PGOHCLGL.js.map

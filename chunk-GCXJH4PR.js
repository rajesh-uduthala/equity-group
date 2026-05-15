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

// src/app/features/platforms/metatrader4/metatrader4.component.ts
function Metatrader4Component_For_150_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const faq_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(faq_r4.a);
  }
}
function Metatrader4Component_For_150_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275listener("click", function Metatrader4Component_For_150_Template_div_click_0_listener() {
      const $index_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFaq($index_r2));
    });
    \u0275\u0275elementStart(1, "div", 89)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 90);
    \u0275\u0275element(5, "path", 91);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, Metatrader4Component_For_150_Conditional_6_Template, 3, 1, "div", 92);
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
var Metatrader4Component = class _Metatrader4Component {
  openFaq = signal(0, ...ngDevMode ? [{ debugName: "openFaq" }] : (
    /* istanbul ignore next */
    []
  ));
  faqs = [
    {
      q: "What is MetaTrader 4?",
      a: "MetaTrader 4 is a trading platform developed by MetaQuotes Software for online trading in forex, contract for differences (CFDs) and futures markets. MT4 provides tools and resources that allow traders to analyse price & place, to manage trades and to employ automated trading techniques."
    },
    {
      q: "What Equiti accounts can I use for MT4?",
      a: "You can use Equiti Standard and Premier accounts to trade CFDs on MT4."
    },
    {
      q: "What products are on MT4?",
      a: "You can trade CFDs in forex, shares, indices, commodities, futures and ETFs on MT4 when you open a live trading account with Equiti."
    },
    {
      q: "How do I login to MT4?",
      a: "Open MT4 & enter your Equiti account details in the authorisation login box. If it hasn't popped up, you can also go to 'File' > 'Login to Trade account' and the login box will appear. If you have yet to download MT4 - first you'll need to get your login number, password & access to the client portal (our server). Once you've opened an Equiti account, these details will be emailed to you & you'll be able to download MT4 on your preferred device."
    },
    {
      q: "What happens to my positions if I logout of MT4?",
      a: "Open positions will not be closed if you logout of MT4 until an existing stop loss, take profit or stop out level is reached. Always make sure to monitor your trades and be aware of financing fees if you're rolling a position past trading hours."
    },
    {
      q: "What time zone does MT4 operate on?",
      a: "MT4 always coincides with the NY close. During 'daylight savings' it will operate on GMT+3, and in winter on GMT+2."
    },
    {
      q: "Can I download a statement from MT4?",
      a: "Yes, you can. Open the platform and login with your Equiti account details. Select the 'Account History' tab in the terminal. Right click in the middle of the terminal and select 'custom period'. Select the start and finish date for the tax year you need and press 'OK'. The history from the period selected will then fill the 'Account History' section. Right click again and select 'Save Report'."
    }
  ];
  toggleFaq(i) {
    this.openFaq.set(this.openFaq() === i ? null : i);
  }
  static \u0275fac = function Metatrader4Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Metatrader4Component)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Metatrader4Component, selectors: [["app-metatrader4"]], decls: 186, vars: 0, consts: [[1, "breadcrumb-bar"], [1, "container"], [1, "breadcrumb"], ["routerLink", "/", 1, "bc-home"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"], ["points", "9 22 9 12 15 12 15 22"], [1, "bc-sep"], [1, "bc-link"], [1, "bc-current"], [1, "mt4-hero"], [1, "container", "mt4-hero-inner"], [1, "mt4-hero-text"], [1, "mt4-platform-tag"], ["src", "https://eq-cdn.equiti-me.com/website/documents/icon-mt4.svg", "alt", "MT4", 1, "mt4-tag-icon"], [1, "mt4-hero-h1"], [1, "mt4-hero-sub"], [1, "mt4-hero-actions"], ["href", "https://download.mql5.com/cdn/web/17482/mt4/equitigroup4setup.exe", 1, "btn-download"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "7 10 12 15 17 10"], ["x1", "12", "y1", "15", "x2", "12", "y2", "3"], ["routerLink", "/register", 1, "btn-open-account"], [1, "mt4-hero-visual"], ["src", "https://eq-cdn.equiti-me.com/website/images/MT4-hero.original.png", "alt", "MT4 Hero", 1, "mt4-hero-img"], [1, "mt4-tiles-section"], [1, "mt4-tiles-h2"], [1, "mt4-tiles-grid"], [1, "mt4-tile"], ["src", "https://eq-cdn.equiti-me.com/website/documents/global_sectors_nes4Ohi.svg", "alt", "Global markets", 1, "mt4-tile-icon"], [1, "mt4-tile-label"], ["src", "https://eq-cdn.equiti-me.com/website/documents/secure_aEzErYd.svg", "alt", "Secure", 1, "mt4-tile-icon"], ["src", "https://eq-cdn.equiti-me.com/website/documents/icon-top-tech.svg", "alt", "Device friendly", 1, "mt4-tile-icon"], ["src", "https://eq-cdn.equiti-me.com/website/documents/speedy_bu4q1ym.svg", "alt", "Speedy", 1, "mt4-tile-icon"], ["src", "https://eq-cdn.equiti-me.com/website/documents/zero_commission_ye28tQk_lMAvgUF.svg", "alt", "Competitive rates", 1, "mt4-tile-icon"], ["src", "https://eq-cdn.equiti-me.com/website/documents/live_reports_U2Oy2OC.svg", "alt", "Live market news", 1, "mt4-tile-icon"], [1, "section-wrap"], [1, "mqt-card"], [1, "mqt-text"], [1, "mqt-platform-label"], [1, "mqt-badge"], [1, "mqt-sub-badge"], [1, "mqt-h2"], [1, "mqt-desc"], ["href", "https://equitigroup2.my.site.com/equitiseychelleshelpcenter/s/article/How-do-I-launch-MQ-WebTrader-1749143595174", "target", "_blank", "rel", "noopener", 1, "btn-arrow-link"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["points", "12 5 19 12 12 19"], [1, "mqt-visual"], ["src", "https://eq-cdn.equiti-me.com/website/images/MQTrader.original.png", "alt", "MQ WebTrader", 1, "mqt-img"], [1, "mt4-features-section"], [1, "sect-label"], [1, "mt4-feat-h2"], [1, "mt4-feat-grid"], [1, "mt4-feat-card"], ["src", "https://eq-cdn.equiti-me.com/website/documents/icon-multitasking.svg", "alt", "Multitask", 1, "mt4-feat-icon"], [1, "mt4-feat-title"], [1, "mt4-feat-desc"], ["src", "https://eq-cdn.equiti-me.com/website/documents/icon-trading-tools.svg", "alt", "Trading tools", 1, "mt4-feat-icon"], ["src", "https://eq-cdn.equiti-me.com/website/documents/icon-microlots.svg", "alt", "Micro lots", 1, "mt4-feat-icon"], ["src", "https://eq-cdn.equiti-me.com/website/documents/pre-execution_risk.svg", "alt", "Pre-execution risk", 1, "mt4-feat-icon"], ["src", "https://eq-cdn.equiti-me.com/website/documents/Advanced_Chart.svg", "alt", "Advanced charts", 1, "mt4-feat-icon"], ["src", "https://eq-cdn.equiti-me.com/website/documents/news_je0oI73.svg", "alt", "Live news", 1, "mt4-feat-icon"], [1, "mt4-cta-banner"], [1, "mt4-cta-text"], [1, "mt4-cta-h2"], [1, "mt4-cta-sub"], [1, "mt4-cta-actions"], ["routerLink", "/register", 1, "btn-cta-teal"], ["href", "https://download.mql5.com/cdn/web/17482/mt4/equitigroup4setup.exe", 1, "btn-cta-outline"], [1, "faq-section"], [1, "container", "faq-inner"], [1, "faq-h2"], [1, "faq-list"], [1, "faq-item", 3, "open"], [1, "explore-section"], [1, "explore-h2"], [1, "explore-grid"], [1, "explore-card"], [1, "expl-img"], ["src", "https://eq-cdn.equiti-me.com/website/images/all-cfd-products.2e16d0ba.fill-400x400.png", "alt", "Products", 1, "expl-photo"], [1, "expl-body"], [1, "expl-title"], [1, "expl-desc"], ["href", "#", 1, "lnk-blue"], ["src", "https://eq-cdn.equiti-me.com/website/images/All_Accounts_Equiti_group.2e16d0ba.fill-400x400.png", "alt", "Accounts", 1, "expl-photo"], ["routerLink", "/accounts", 1, "lnk-blue"], ["src", "https://eq-cdn.equiti-me.com/website/images/partnerships-hero.2e16d0ba.fill-400x400.png", "alt", "Partners", 1, "expl-photo"], [1, "faq-item", 3, "click"], [1, "faq-q"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none", 1, "faq-chevron"], ["d", "M5 7l5 5 5-5", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "faq-a"]], template: function Metatrader4Component_Template(rf, ctx) {
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
      \u0275\u0275text(10, "Platforms");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "span", 7);
      \u0275\u0275text(12, "\u203A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span", 9);
      \u0275\u0275text(14, "MetaTrader 4");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "section", 10)(16, "div", 11)(17, "div", 12)(18, "div", 13);
      \u0275\u0275element(19, "img", 14);
      \u0275\u0275elementStart(20, "span");
      \u0275\u0275text(21, "MetaTrader 4");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "h1", 15);
      \u0275\u0275text(23, "Experience the power of MetaTrader 4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p", 16);
      \u0275\u0275text(25, "Trade on MetaTrader 4 for secure liquidity, top products and tools");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 17)(27, "a", 18);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(28, "svg", 19);
      \u0275\u0275element(29, "path", 20)(30, "polyline", 21)(31, "line", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275text(32, " DOWNLOAD MT4 ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(33, "a", 23);
      \u0275\u0275text(34, "OPEN AN ACCOUNT");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "div", 24);
      \u0275\u0275element(36, "img", 25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(37, "section", 26)(38, "div", 1)(39, "h2", 27);
      \u0275\u0275text(40, "Trade on MetaTrader 4 for secure liquidity, top products and tools");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 28)(42, "div", 29);
      \u0275\u0275element(43, "img", 30);
      \u0275\u0275elementStart(44, "span", 31);
      \u0275\u0275text(45, "Global markets");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 29);
      \u0275\u0275element(47, "img", 32);
      \u0275\u0275elementStart(48, "span", 31);
      \u0275\u0275text(49, "Secure");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 29);
      \u0275\u0275element(51, "img", 33);
      \u0275\u0275elementStart(52, "span", 31);
      \u0275\u0275text(53, "Device friendly");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 29);
      \u0275\u0275element(55, "img", 34);
      \u0275\u0275elementStart(56, "span", 31);
      \u0275\u0275text(57, "Speedy");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 29);
      \u0275\u0275element(59, "img", 35);
      \u0275\u0275elementStart(60, "span", 31);
      \u0275\u0275text(61, "Competitive rates");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 29);
      \u0275\u0275element(63, "img", 36);
      \u0275\u0275elementStart(64, "span", 31);
      \u0275\u0275text(65, "Live market news");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(66, "section", 37)(67, "div", 1)(68, "div", 38)(69, "div", 39)(70, "div", 40)(71, "span", 41);
      \u0275\u0275text(72, "MetaTrader 4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "span", 42);
      \u0275\u0275text(74, "The Most Popular Trading Platform");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "h2", 43);
      \u0275\u0275text(76, "Access MT4 on any device \u2014 no app needed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "p", 44);
      \u0275\u0275text(78, "Use MQ WebTrader to trade on any iOS, Android or web browser without downloading an app.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "a", 45);
      \u0275\u0275text(80, " Try MQ WebTrader ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(81, "svg", 4);
      \u0275\u0275element(82, "line", 46)(83, "polyline", 47);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(84, "div", 48);
      \u0275\u0275element(85, "img", 49);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(86, "section", 50)(87, "div", 1)(88, "span", 51);
      \u0275\u0275text(89, "METATRADER 4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "h2", 52);
      \u0275\u0275text(91, "Transform your trading journey with MetaTrader 4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "div", 53)(93, "div", 54);
      \u0275\u0275element(94, "img", 55);
      \u0275\u0275elementStart(95, "h3", 56);
      \u0275\u0275text(96, "Multitask trading");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "p", 57);
      \u0275\u0275text(98, "Monitor multiple charts, manage orders and run Expert Advisors simultaneously \u2014 all from one platform window.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "div", 54);
      \u0275\u0275element(100, "img", 58);
      \u0275\u0275elementStart(101, "h3", 56);
      \u0275\u0275text(102, "Trading tools");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "p", 57);
      \u0275\u0275text(104, "Tap into a full suite of built-in indicators, Expert Advisors and scripts to power your strategies.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "div", 54);
      \u0275\u0275element(106, "img", 59);
      \u0275\u0275elementStart(107, "h3", 56);
      \u0275\u0275text(108, "Micro lots from 0.01");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "p", 57);
      \u0275\u0275text(110, "Trade with precision using micro lot sizing \u2014 ideal for fine-tuning risk management on every position.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(111, "div", 54);
      \u0275\u0275element(112, "img", 60);
      \u0275\u0275elementStart(113, "h3", 56);
      \u0275\u0275text(114, "Pre-execution risk");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "p", 57);
      \u0275\u0275text(116, "Set stop loss, take profit and limit orders before execution so your risk is defined before a trade opens.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "div", 54);
      \u0275\u0275element(118, "img", 61);
      \u0275\u0275elementStart(119, "h3", 56);
      \u0275\u0275text(120, "Advanced charts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "p", 57);
      \u0275\u0275text(122, "Access 30+ technical indicators, 9 chart timeframes and multiple chart types for in-depth market analysis.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "div", 54);
      \u0275\u0275element(124, "img", 62);
      \u0275\u0275elementStart(125, "h3", 56);
      \u0275\u0275text(126, "Live news");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "p", 57);
      \u0275\u0275text(128, "Stay ahead with a built-in live news feed delivering real-time market-moving events directly inside MT4.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(129, "section", 37)(130, "div", 1)(131, "div", 63)(132, "div", 64)(133, "h2", 65);
      \u0275\u0275text(134, "Trade up. Switch to Equiti today.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "p", 66);
      \u0275\u0275text(136, "Open a live account and access MT4 with industry-leading conditions.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(137, "div", 67)(138, "a", 68);
      \u0275\u0275text(139, "START TRADING");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "a", 69);
      \u0275\u0275text(141, "DOWNLOAD MT4");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(142, "section", 70)(143, "div", 71)(144, "span", 51);
      \u0275\u0275text(145, "FAQS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "h2", 72);
      \u0275\u0275text(147, "Questions about MT4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "div", 73);
      \u0275\u0275repeaterCreate(149, Metatrader4Component_For_150_Template, 7, 4, "div", 74, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(151, "section", 75)(152, "div", 1)(153, "h2", 76);
      \u0275\u0275text(154, "There's more to explore");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "div", 77)(156, "div", 78)(157, "div", 79);
      \u0275\u0275element(158, "img", 80);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "div", 81)(160, "h3", 82);
      \u0275\u0275text(161, "Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "p", 83);
      \u0275\u0275text(163, "Trade CFDs on forex, shares, indices, commodities, ETFs and more.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "a", 84);
      \u0275\u0275text(165, "See all CFD products");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(166, "div", 78)(167, "div", 79);
      \u0275\u0275element(168, "img", 85);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "div", 81)(170, "h3", 82);
      \u0275\u0275text(171, "Accounts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "p", 83);
      \u0275\u0275text(173, "Zero commission trading with low deposit requirements.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "a", 86);
      \u0275\u0275text(175, "Compare accounts");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(176, "div", 78)(177, "div", 79);
      \u0275\u0275element(178, "img", 87);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "div", 81)(180, "h3", 82);
      \u0275\u0275text(181, "Partners");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "p", 83);
      \u0275\u0275text(183, "Introduce your client network for competitive benefits.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "a", 84);
      \u0275\u0275text(185, "Partner with Equiti");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(149);
      \u0275\u0275repeater(ctx.faqs);
    }
  }, dependencies: [RouterModule, RouterLink], styles: ["\n.breadcrumb-bar[_ngcontent-%COMP%] {\n  padding: 16px 0;\n  border-bottom: 1px solid var(--border);\n  background: #fff;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.bc-home[_ngcontent-%COMP%] {\n  color: #00B8A0;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n}\n.bc-sep[_ngcontent-%COMP%] {\n  color: #9CA3AF;\n  font-size: 14px;\n}\n.bc-link[_ngcontent-%COMP%] {\n  color: #6B7280;\n  font-size: 14px;\n}\n.bc-current[_ngcontent-%COMP%] {\n  color: #00B8A0;\n  font-size: 14px;\n  font-weight: 500;\n}\n.mt4-hero[_ngcontent-%COMP%] {\n  background: var(--bg);\n  padding: 72px 0 0;\n  overflow: hidden;\n}\n.mt4-hero-inner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 48px;\n  align-items: center;\n}\n.mt4-platform-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--primary-light);\n  color: var(--primary);\n  font-size: 13px;\n  font-weight: 600;\n  padding: 6px 14px;\n  border-radius: 100px;\n  margin-bottom: 20px;\n}\n.mt4-tag-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  object-fit: contain;\n}\n.mt4-hero-h1[_ngcontent-%COMP%] {\n  font-size: clamp(32px, 4vw, 52px);\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -1px;\n  line-height: 1.1;\n  margin-bottom: 18px;\n}\n.mt4-hero-sub[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-muted);\n  line-height: 1.75;\n  margin-bottom: 32px;\n  max-width: 460px;\n}\n.mt4-hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.btn-download[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 13px 24px;\n  background: var(--primary);\n  color: #fff;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition: background var(--transition);\n}\n.btn-download[_ngcontent-%COMP%]:hover {\n  background: var(--primary-hover);\n}\n.btn-open-account[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 13px 24px;\n  border: 1.5px solid var(--border);\n  color: var(--text);\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition: all var(--transition);\n}\n.btn-open-account[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.mt4-hero-visual[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n.mt4-hero-img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 560px;\n  height: auto;\n  object-fit: contain;\n  display: block;\n}\n.mt4-tiles-section[_ngcontent-%COMP%] {\n  padding: 64px 0;\n  background: #fff;\n}\n.mt4-tiles-h2[_ngcontent-%COMP%] {\n  font-size: clamp(18px, 2vw, 22px);\n  font-weight: 600;\n  color: var(--text-muted);\n  letter-spacing: -0.2px;\n  margin-bottom: 40px;\n  max-width: 700px;\n}\n.mt4-tiles-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 24px;\n}\n.mt4-tile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 24px 16px;\n  background: var(--bg);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  text-align: center;\n  transition: border-color var(--transition), box-shadow var(--transition);\n}\n.mt4-tile[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  box-shadow: 0 4px 16px rgba(0, 184, 160, 0.08);\n}\n.mt4-tile-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  object-fit: contain;\n}\n.mt4-tile-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text);\n  line-height: 1.3;\n}\n.section-wrap[_ngcontent-%COMP%] {\n  padding: 40px 0;\n}\n.mqt-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 64px;\n  align-items: center;\n  background: var(--dark);\n  border-radius: var(--radius-xl);\n  padding: 64px;\n  overflow: hidden;\n}\n.mqt-platform-label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 20px;\n}\n.mqt-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--primary);\n  letter-spacing: 0.5px;\n}\n.mqt-sub-badge[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.45);\n}\n.mqt-h2[_ngcontent-%COMP%] {\n  font-size: clamp(26px, 3vw, 38px);\n  font-weight: 700;\n  color: #fff;\n  letter-spacing: -0.5px;\n  line-height: 1.2;\n  margin-bottom: 16px;\n}\n.mqt-desc[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.65);\n  line-height: 1.7;\n  margin-bottom: 24px;\n}\n.btn-arrow-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--primary);\n  font-size: 15px;\n  font-weight: 600;\n  text-decoration: none;\n  transition: gap var(--transition);\n}\n.btn-arrow-link[_ngcontent-%COMP%]:hover {\n  gap: 12px;\n}\n.mqt-visual[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.mqt-img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 460px;\n  height: auto;\n  object-fit: contain;\n  display: block;\n}\n.mt4-features-section[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  background: var(--bg);\n}\n.mt4-feat-h2[_ngcontent-%COMP%] {\n  font-size: clamp(26px, 3vw, 38px);\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.5px;\n  line-height: 1.2;\n  margin-bottom: 48px;\n  max-width: 640px;\n}\n.mt4-feat-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 28px 24px;\n}\n.mt4-feat-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  padding: 32px 28px;\n  transition: border-color var(--transition);\n}\n.mt4-feat-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(0, 184, 160, 0.4);\n}\n.mt4-feat-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  object-fit: contain;\n  margin-bottom: 18px;\n  display: block;\n}\n.mt4-feat-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text);\n  margin-bottom: 10px;\n}\n.mt4-feat-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n  line-height: 1.7;\n}\n.mt4-cta-banner[_ngcontent-%COMP%] {\n  background: var(--dark);\n  border-radius: var(--radius-xl);\n  padding: 56px 64px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 48px;\n}\n.mt4-cta-h2[_ngcontent-%COMP%] {\n  font-size: clamp(24px, 3vw, 36px);\n  font-weight: 700;\n  color: #fff;\n  letter-spacing: -0.5px;\n  margin-bottom: 8px;\n}\n.mt4-cta-sub[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.6);\n}\n.mt4-cta-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.btn-cta-teal[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 13px 24px;\n  background: var(--primary);\n  color: #fff;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  transition: background var(--transition);\n}\n.btn-cta-teal[_ngcontent-%COMP%]:hover {\n  background: var(--primary-hover);\n}\n.btn-cta-outline[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 13px 24px;\n  border: 1.5px solid rgba(255, 255, 255, 0.4);\n  color: #fff;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  transition: all var(--transition);\n}\n.btn-cta-outline[_ngcontent-%COMP%]:hover {\n  border-color: #fff;\n  background: rgba(255, 255, 255, 0.08);\n}\n.faq-section[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  background: var(--bg);\n}\n.faq-inner[_ngcontent-%COMP%] {\n  max-width: 820px;\n}\n.faq-h2[_ngcontent-%COMP%] {\n  font-size: clamp(26px, 3vw, 38px);\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.5px;\n  margin-bottom: 32px;\n}\n.faq-list[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n}\n.faq-item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border);\n  cursor: pointer;\n}\n.faq-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.faq-q[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px;\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--text);\n  gap: 16px;\n}\n.faq-chevron[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  transition: transform 0.2s;\n  color: #6B7280;\n}\n.faq-item.open[_ngcontent-%COMP%]   .faq-chevron[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.faq-a[_ngcontent-%COMP%] {\n  padding: 0 24px 20px;\n  font-size: 14px;\n  color: var(--text-muted);\n  line-height: 1.75;\n}\n.explore-section[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  background: var(--bg);\n}\n.explore-h2[_ngcontent-%COMP%] {\n  font-size: clamp(24px, 3vw, 34px);\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.5px;\n  margin-bottom: 36px;\n}\n.explore-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n.explore-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n}\n.expl-img[_ngcontent-%COMP%] {\n  height: 220px;\n  overflow: hidden;\n  background: #F3F4F6;\n}\n.expl-photo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.expl-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n}\n.expl-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text);\n  margin-bottom: 8px;\n}\n.expl-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n  line-height: 1.65;\n  margin-bottom: 10px;\n}\n@media (max-width: 1100px) {\n  .mt4-tiles-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 1024px) {\n  .mt4-hero-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .mqt-card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 40px;\n    gap: 32px;\n  }\n  .mt4-cta-banner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 40px;\n  }\n  .mt4-feat-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .mt4-tiles-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .mt4-feat-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .explore-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .mt4-cta-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=metatrader4.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Metatrader4Component, [{
    type: Component,
    args: [{ selector: "app-metatrader4", standalone: true, imports: [RouterModule], template: `<!-- \u2500\u2500 BREADCRUMB \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<div class="breadcrumb-bar">
  <div class="container">
    <nav class="breadcrumb">
      <a routerLink="/" class="bc-home">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      </a>
      <span class="bc-sep">\u203A</span>
      <span class="bc-link">Platforms</span>
      <span class="bc-sep">\u203A</span>
      <span class="bc-current">MetaTrader 4</span>
    </nav>
  </div>
</div>

<!-- \u2500\u2500 1. HERO \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<section class="mt4-hero">
  <div class="container mt4-hero-inner">
    <div class="mt4-hero-text">
      <div class="mt4-platform-tag">
        <img src="https://eq-cdn.equiti-me.com/website/documents/icon-mt4.svg" alt="MT4" class="mt4-tag-icon" />
        <span>MetaTrader 4</span>
      </div>
      <h1 class="mt4-hero-h1">Experience the power of MetaTrader 4</h1>
      <p class="mt4-hero-sub">Trade on MetaTrader 4 for secure liquidity, top products and tools</p>
      <div class="mt4-hero-actions">
        <a href="https://download.mql5.com/cdn/web/17482/mt4/equitigroup4setup.exe"
           class="btn-download">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          DOWNLOAD MT4
        </a>
        <a routerLink="/register" class="btn-open-account">OPEN AN ACCOUNT</a>
      </div>
    </div>
    <div class="mt4-hero-visual">
      <img src="https://eq-cdn.equiti-me.com/website/images/MT4-hero.original.png"
           alt="MT4 Hero" class="mt4-hero-img" />
    </div>
  </div>
</section>

<!-- \u2500\u2500 2. 6 QUICK FEATURE TILES \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<section class="mt4-tiles-section">
  <div class="container">
    <h2 class="mt4-tiles-h2">Trade on MetaTrader 4 for secure liquidity, top products and tools</h2>
    <div class="mt4-tiles-grid">
      <div class="mt4-tile">
        <img src="https://eq-cdn.equiti-me.com/website/documents/global_sectors_nes4Ohi.svg" alt="Global markets" class="mt4-tile-icon" />
        <span class="mt4-tile-label">Global markets</span>
      </div>
      <div class="mt4-tile">
        <img src="https://eq-cdn.equiti-me.com/website/documents/secure_aEzErYd.svg" alt="Secure" class="mt4-tile-icon" />
        <span class="mt4-tile-label">Secure</span>
      </div>
      <div class="mt4-tile">
        <img src="https://eq-cdn.equiti-me.com/website/documents/icon-top-tech.svg" alt="Device friendly" class="mt4-tile-icon" />
        <span class="mt4-tile-label">Device friendly</span>
      </div>
      <div class="mt4-tile">
        <img src="https://eq-cdn.equiti-me.com/website/documents/speedy_bu4q1ym.svg" alt="Speedy" class="mt4-tile-icon" />
        <span class="mt4-tile-label">Speedy</span>
      </div>
      <div class="mt4-tile">
        <img src="https://eq-cdn.equiti-me.com/website/documents/zero_commission_ye28tQk_lMAvgUF.svg" alt="Competitive rates" class="mt4-tile-icon" />
        <span class="mt4-tile-label">Competitive rates</span>
      </div>
      <div class="mt4-tile">
        <img src="https://eq-cdn.equiti-me.com/website/documents/live_reports_U2Oy2OC.svg" alt="Live market news" class="mt4-tile-icon" />
        <span class="mt4-tile-label">Live market news</span>
      </div>
    </div>
  </div>
</section>

<!-- \u2500\u2500 3. MQ WEBTRADER (no-app) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<section class="section-wrap">
  <div class="container">
    <div class="mqt-card">
      <div class="mqt-text">
        <div class="mqt-platform-label">
          <span class="mqt-badge">MetaTrader 4</span>
          <span class="mqt-sub-badge">The Most Popular Trading Platform</span>
        </div>
        <h2 class="mqt-h2">Access MT4 on any device \u2014 no app needed</h2>
        <p class="mqt-desc">Use MQ WebTrader to trade on any iOS, Android or web browser without downloading an app.</p>
        <a href="https://equitigroup2.my.site.com/equitiseychelleshelpcenter/s/article/How-do-I-launch-MQ-WebTrader-1749143595174"
           target="_blank" rel="noopener" class="btn-arrow-link">
          Try MQ WebTrader
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>
      <div class="mqt-visual">
        <img src="https://eq-cdn.equiti-me.com/website/images/MQTrader.original.png"
             alt="MQ WebTrader" class="mqt-img" />
      </div>
    </div>
  </div>
</section>

<!-- \u2500\u2500 4. 6 PLATFORM FEATURES \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<section class="mt4-features-section">
  <div class="container">
    <span class="sect-label">METATRADER 4</span>
    <h2 class="mt4-feat-h2">Transform your trading journey with MetaTrader 4</h2>
    <div class="mt4-feat-grid">

      <div class="mt4-feat-card">
        <img src="https://eq-cdn.equiti-me.com/website/documents/icon-multitasking.svg" alt="Multitask" class="mt4-feat-icon" />
        <h3 class="mt4-feat-title">Multitask trading</h3>
        <p class="mt4-feat-desc">Monitor multiple charts, manage orders and run Expert Advisors simultaneously \u2014 all from one platform window.</p>
      </div>

      <div class="mt4-feat-card">
        <img src="https://eq-cdn.equiti-me.com/website/documents/icon-trading-tools.svg" alt="Trading tools" class="mt4-feat-icon" />
        <h3 class="mt4-feat-title">Trading tools</h3>
        <p class="mt4-feat-desc">Tap into a full suite of built-in indicators, Expert Advisors and scripts to power your strategies.</p>
      </div>

      <div class="mt4-feat-card">
        <img src="https://eq-cdn.equiti-me.com/website/documents/icon-microlots.svg" alt="Micro lots" class="mt4-feat-icon" />
        <h3 class="mt4-feat-title">Micro lots from 0.01</h3>
        <p class="mt4-feat-desc">Trade with precision using micro lot sizing \u2014 ideal for fine-tuning risk management on every position.</p>
      </div>

      <div class="mt4-feat-card">
        <img src="https://eq-cdn.equiti-me.com/website/documents/pre-execution_risk.svg" alt="Pre-execution risk" class="mt4-feat-icon" />
        <h3 class="mt4-feat-title">Pre-execution risk</h3>
        <p class="mt4-feat-desc">Set stop loss, take profit and limit orders before execution so your risk is defined before a trade opens.</p>
      </div>

      <div class="mt4-feat-card">
        <img src="https://eq-cdn.equiti-me.com/website/documents/Advanced_Chart.svg" alt="Advanced charts" class="mt4-feat-icon" />
        <h3 class="mt4-feat-title">Advanced charts</h3>
        <p class="mt4-feat-desc">Access 30+ technical indicators, 9 chart timeframes and multiple chart types for in-depth market analysis.</p>
      </div>

      <div class="mt4-feat-card">
        <img src="https://eq-cdn.equiti-me.com/website/documents/news_je0oI73.svg" alt="Live news" class="mt4-feat-icon" />
        <h3 class="mt4-feat-title">Live news</h3>
        <p class="mt4-feat-desc">Stay ahead with a built-in live news feed delivering real-time market-moving events directly inside MT4.</p>
      </div>

    </div>
  </div>
</section>

<!-- \u2500\u2500 5. CTA DARK BANNER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<section class="section-wrap">
  <div class="container">
    <div class="mt4-cta-banner">
      <div class="mt4-cta-text">
        <h2 class="mt4-cta-h2">Trade up. Switch to Equiti today.</h2>
        <p class="mt4-cta-sub">Open a live account and access MT4 with industry-leading conditions.</p>
      </div>
      <div class="mt4-cta-actions">
        <a routerLink="/register" class="btn-cta-teal">START TRADING</a>
        <a href="https://download.mql5.com/cdn/web/17482/mt4/equitigroup4setup.exe" class="btn-cta-outline">DOWNLOAD MT4</a>
      </div>
    </div>
  </div>
</section>

<!-- \u2500\u2500 6. FAQ \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<section class="faq-section">
  <div class="container faq-inner">
    <span class="sect-label">FAQS</span>
    <h2 class="faq-h2">Questions about MT4</h2>
    <div class="faq-list">
      @for (faq of faqs; track $index) {
        <div class="faq-item" [class.open]="openFaq() === $index" (click)="toggleFaq($index)">
          <div class="faq-q">
            <span>{{ faq.q }}</span>
            <svg class="faq-chevron" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          @if (openFaq() === $index) {
            <div class="faq-a"><p>{{ faq.a }}</p></div>
          }
        </div>
      }
    </div>
  </div>
</section>

<!-- \u2500\u2500 7. MORE TO EXPLORE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<section class="explore-section">
  <div class="container">
    <h2 class="explore-h2">There's more to explore</h2>
    <div class="explore-grid">

      <div class="explore-card">
        <div class="expl-img">
          <img src="https://eq-cdn.equiti-me.com/website/images/all-cfd-products.2e16d0ba.fill-400x400.png"
               alt="Products" class="expl-photo" />
        </div>
        <div class="expl-body">
          <h3 class="expl-title">Products</h3>
          <p class="expl-desc">Trade CFDs on forex, shares, indices, commodities, ETFs and more.</p>
          <a href="#" class="lnk-blue">See all CFD products</a>
        </div>
      </div>

      <div class="explore-card">
        <div class="expl-img">
          <img src="https://eq-cdn.equiti-me.com/website/images/All_Accounts_Equiti_group.2e16d0ba.fill-400x400.png"
               alt="Accounts" class="expl-photo" />
        </div>
        <div class="expl-body">
          <h3 class="expl-title">Accounts</h3>
          <p class="expl-desc">Zero commission trading with low deposit requirements.</p>
          <a routerLink="/accounts" class="lnk-blue">Compare accounts</a>
        </div>
      </div>

      <div class="explore-card">
        <div class="expl-img">
          <img src="https://eq-cdn.equiti-me.com/website/images/partnerships-hero.2e16d0ba.fill-400x400.png"
               alt="Partners" class="expl-photo" />
        </div>
        <div class="expl-body">
          <h3 class="expl-title">Partners</h3>
          <p class="expl-desc">Introduce your client network for competitive benefits.</p>
          <a href="#" class="lnk-blue">Partner with Equiti</a>
        </div>
      </div>

    </div>
  </div>
</section>
`, styles: ["/* src/app/features/platforms/metatrader4/metatrader4.component.css */\n.breadcrumb-bar {\n  padding: 16px 0;\n  border-bottom: 1px solid var(--border);\n  background: #fff;\n}\n.breadcrumb {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.bc-home {\n  color: #00B8A0;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n}\n.bc-sep {\n  color: #9CA3AF;\n  font-size: 14px;\n}\n.bc-link {\n  color: #6B7280;\n  font-size: 14px;\n}\n.bc-current {\n  color: #00B8A0;\n  font-size: 14px;\n  font-weight: 500;\n}\n.mt4-hero {\n  background: var(--bg);\n  padding: 72px 0 0;\n  overflow: hidden;\n}\n.mt4-hero-inner {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 48px;\n  align-items: center;\n}\n.mt4-platform-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--primary-light);\n  color: var(--primary);\n  font-size: 13px;\n  font-weight: 600;\n  padding: 6px 14px;\n  border-radius: 100px;\n  margin-bottom: 20px;\n}\n.mt4-tag-icon {\n  width: 18px;\n  height: 18px;\n  object-fit: contain;\n}\n.mt4-hero-h1 {\n  font-size: clamp(32px, 4vw, 52px);\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -1px;\n  line-height: 1.1;\n  margin-bottom: 18px;\n}\n.mt4-hero-sub {\n  font-size: 16px;\n  color: var(--text-muted);\n  line-height: 1.75;\n  margin-bottom: 32px;\n  max-width: 460px;\n}\n.mt4-hero-actions {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.btn-download {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 13px 24px;\n  background: var(--primary);\n  color: #fff;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition: background var(--transition);\n}\n.btn-download:hover {\n  background: var(--primary-hover);\n}\n.btn-open-account {\n  display: inline-flex;\n  align-items: center;\n  padding: 13px 24px;\n  border: 1.5px solid var(--border);\n  color: var(--text);\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition: all var(--transition);\n}\n.btn-open-account:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.mt4-hero-visual {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n.mt4-hero-img {\n  width: 100%;\n  max-width: 560px;\n  height: auto;\n  object-fit: contain;\n  display: block;\n}\n.mt4-tiles-section {\n  padding: 64px 0;\n  background: #fff;\n}\n.mt4-tiles-h2 {\n  font-size: clamp(18px, 2vw, 22px);\n  font-weight: 600;\n  color: var(--text-muted);\n  letter-spacing: -0.2px;\n  margin-bottom: 40px;\n  max-width: 700px;\n}\n.mt4-tiles-grid {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 24px;\n}\n.mt4-tile {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 24px 16px;\n  background: var(--bg);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  text-align: center;\n  transition: border-color var(--transition), box-shadow var(--transition);\n}\n.mt4-tile:hover {\n  border-color: var(--primary);\n  box-shadow: 0 4px 16px rgba(0, 184, 160, 0.08);\n}\n.mt4-tile-icon {\n  width: 48px;\n  height: 48px;\n  object-fit: contain;\n}\n.mt4-tile-label {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--text);\n  line-height: 1.3;\n}\n.section-wrap {\n  padding: 40px 0;\n}\n.mqt-card {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 64px;\n  align-items: center;\n  background: var(--dark);\n  border-radius: var(--radius-xl);\n  padding: 64px;\n  overflow: hidden;\n}\n.mqt-platform-label {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 20px;\n}\n.mqt-badge {\n  display: inline-block;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--primary);\n  letter-spacing: 0.5px;\n}\n.mqt-sub-badge {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.45);\n}\n.mqt-h2 {\n  font-size: clamp(26px, 3vw, 38px);\n  font-weight: 700;\n  color: #fff;\n  letter-spacing: -0.5px;\n  line-height: 1.2;\n  margin-bottom: 16px;\n}\n.mqt-desc {\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.65);\n  line-height: 1.7;\n  margin-bottom: 24px;\n}\n.btn-arrow-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--primary);\n  font-size: 15px;\n  font-weight: 600;\n  text-decoration: none;\n  transition: gap var(--transition);\n}\n.btn-arrow-link:hover {\n  gap: 12px;\n}\n.mqt-visual {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.mqt-img {\n  width: 100%;\n  max-width: 460px;\n  height: auto;\n  object-fit: contain;\n  display: block;\n}\n.mt4-features-section {\n  padding: 80px 0;\n  background: var(--bg);\n}\n.mt4-feat-h2 {\n  font-size: clamp(26px, 3vw, 38px);\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.5px;\n  line-height: 1.2;\n  margin-bottom: 48px;\n  max-width: 640px;\n}\n.mt4-feat-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 28px 24px;\n}\n.mt4-feat-card {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  padding: 32px 28px;\n  transition: border-color var(--transition);\n}\n.mt4-feat-card:hover {\n  border-color: rgba(0, 184, 160, 0.4);\n}\n.mt4-feat-icon {\n  width: 48px;\n  height: 48px;\n  object-fit: contain;\n  margin-bottom: 18px;\n  display: block;\n}\n.mt4-feat-title {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text);\n  margin-bottom: 10px;\n}\n.mt4-feat-desc {\n  font-size: 14px;\n  color: var(--text-muted);\n  line-height: 1.7;\n}\n.mt4-cta-banner {\n  background: var(--dark);\n  border-radius: var(--radius-xl);\n  padding: 56px 64px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 48px;\n}\n.mt4-cta-h2 {\n  font-size: clamp(24px, 3vw, 36px);\n  font-weight: 700;\n  color: #fff;\n  letter-spacing: -0.5px;\n  margin-bottom: 8px;\n}\n.mt4-cta-sub {\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.6);\n}\n.mt4-cta-actions {\n  display: flex;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.btn-cta-teal {\n  display: inline-block;\n  padding: 13px 24px;\n  background: var(--primary);\n  color: #fff;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  transition: background var(--transition);\n}\n.btn-cta-teal:hover {\n  background: var(--primary-hover);\n}\n.btn-cta-outline {\n  display: inline-block;\n  padding: 13px 24px;\n  border: 1.5px solid rgba(255, 255, 255, 0.4);\n  color: #fff;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  transition: all var(--transition);\n}\n.btn-cta-outline:hover {\n  border-color: #fff;\n  background: rgba(255, 255, 255, 0.08);\n}\n.faq-section {\n  padding: 80px 0;\n  background: var(--bg);\n}\n.faq-inner {\n  max-width: 820px;\n}\n.faq-h2 {\n  font-size: clamp(26px, 3vw, 38px);\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.5px;\n  margin-bottom: 32px;\n}\n.faq-list {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n}\n.faq-item {\n  border-bottom: 1px solid var(--border);\n  cursor: pointer;\n}\n.faq-item:last-child {\n  border-bottom: none;\n}\n.faq-q {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px;\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--text);\n  gap: 16px;\n}\n.faq-chevron {\n  flex-shrink: 0;\n  transition: transform 0.2s;\n  color: #6B7280;\n}\n.faq-item.open .faq-chevron {\n  transform: rotate(180deg);\n}\n.faq-a {\n  padding: 0 24px 20px;\n  font-size: 14px;\n  color: var(--text-muted);\n  line-height: 1.75;\n}\n.explore-section {\n  padding: 80px 0;\n  background: var(--bg);\n}\n.explore-h2 {\n  font-size: clamp(24px, 3vw, 34px);\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.5px;\n  margin-bottom: 36px;\n}\n.explore-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n.explore-card {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n}\n.expl-img {\n  height: 220px;\n  overflow: hidden;\n  background: #F3F4F6;\n}\n.expl-photo {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.expl-body {\n  padding: 20px 24px;\n}\n.expl-title {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text);\n  margin-bottom: 8px;\n}\n.expl-desc {\n  font-size: 14px;\n  color: var(--text-muted);\n  line-height: 1.65;\n  margin-bottom: 10px;\n}\n@media (max-width: 1100px) {\n  .mt4-tiles-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 1024px) {\n  .mt4-hero-inner {\n    grid-template-columns: 1fr;\n  }\n  .mqt-card {\n    grid-template-columns: 1fr;\n    padding: 40px;\n    gap: 32px;\n  }\n  .mt4-cta-banner {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 40px;\n  }\n  .mt4-feat-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .mt4-tiles-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .mt4-feat-grid {\n    grid-template-columns: 1fr;\n  }\n  .explore-grid {\n    grid-template-columns: 1fr;\n  }\n  .mt4-cta-actions {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=metatrader4.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Metatrader4Component, { className: "Metatrader4Component", filePath: "src/app/features/platforms/metatrader4/metatrader4.component.ts", lineNumber: 11 });
})();
export {
  Metatrader4Component
};
//# sourceMappingURL=chunk-GCXJH4PR.js.map

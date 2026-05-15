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

// src/app/features/accounts/accounts.component.ts
function AccountsComponent_For_331_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const faq_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(faq_r4.a);
  }
}
function AccountsComponent_For_331_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275listener("click", function AccountsComponent_For_331_Template_div_click_0_listener() {
      const $index_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFaq($index_r2));
    });
    \u0275\u0275elementStart(1, "div", 103)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 104);
    \u0275\u0275element(5, "path", 105);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, AccountsComponent_For_331_Conditional_6_Template, 3, 1, "div", 106);
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
var AccountsComponent = class _AccountsComponent {
  openFaq = signal(null, ...ngDevMode ? [{ debugName: "openFaq" }] : (
    /* istanbul ignore next */
    []
  ));
  faqs = [
    {
      q: "How do I open a live trading account?",
      a: "You can open a live account with Equiti by selecting 'Start trading' on our website. This takes you to the Equiti Portal, where you can register, verify your email and complete your profile. Once approved, you can fund your MT4 or MT5 wallet and begin placing live trades. Visit our Deposits and Withdrawals page for all funding details."
    },
    {
      q: "What can I use a live account for?",
      a: "A live Equiti account lets you access global financial markets and manage every part of your trading in one place. Through the Equiti Portal, you can view live prices, monitor positions, fund your wallet, contact support and open additional live or demo accounts whenever you need."
    },
    {
      q: "How do I fund my Equiti account?",
      a: "You can fund your Equiti account securely using Apple Pay, Google Pay, bank cards, eWallets, crypto wallets, local payment options and bank transfers. All supported methods and processing times are listed on our Deposits and Withdrawals page so you can choose the funding option that suits you best."
    },
    {
      q: "Can I change my existing account type or currency?",
      a: "Your account type and base currency cannot be modified once created due to regulatory rules. If you wish to use another setup, you can open additional trading accounts, up to three per any portal, and select a different account type or currency for each one."
    },
    {
      q: "What is the Equiti Welcome Bonus offer?",
      a: "The Welcome Bonus gives you an extra 30% on your first deposit when you fund at least $100 into your MT5 trading account."
    },
    {
      q: "How can I claim the welcome bonus?",
      a: "To claim the bonus, deposit $100 or more into your MT5 account and accept the terms and conditions shown in your client portal."
    },
    {
      q: "Does the Welcome Bonus affect my account leverage?",
      a: "Yes. While the bonus is active, account leverage is set to 500:1. When the bonus is removed, your leverage will automatically revert to the standard 2000:1."
    },
    {
      q: "Can I use the bonus to cover trading losses?",
      a: "No. Bonus credit cannot be used to offset trading losses. It appears in the credit field on MT5 and it cannot be used to replace any realised losses."
    }
  ];
  toggleFaq(i) {
    this.openFaq.set(this.openFaq() === i ? null : i);
  }
  static \u0275fac = function AccountsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AccountsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountsComponent, selectors: [["app-accounts"]], decls: 367, vars: 0, consts: [[1, "breadcrumb-bar"], [1, "container"], [1, "breadcrumb"], ["routerLink", "/", 1, "bc-home"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"], ["points", "9 22 9 12 15 12 15 22"], [1, "bc-sep"], [1, "bc-current"], [1, "acc-hero"], [1, "container", "acc-hero-inner"], [1, "acc-hero-text"], [1, "sect-label"], [1, "acc-hero-h1"], [1, "acc-hero-sub"], ["routerLink", "/register", 1, "btn-primary-teal"], [1, "acc-hero-visual"], ["src", "https://eq-cdn.equiti-me.com/website/images/All_Accounts_Equiti_group.original.png", "alt", "Equiti trading accounts", 1, "acc-hero-img"], [1, "section-wrap"], [1, "acc-support-banner"], [1, "acc-sb-text"], [1, "acc-sb-h2"], [1, "acc-sb-sub"], ["routerLink", "/register", 1, "btn-outline-teal-light"], [1, "steps-section"], [1, "steps-h2"], [1, "steps-grid"], [1, "step-card"], [1, "step-icon"], ["src", "https://eq-cdn.equiti-me.com/website/documents/step_1_open_Zr3u3dS.svg", "alt", "Step 1", 1, "step-icon-img"], [1, "step-title"], [1, "step-desc"], ["routerLink", "/register", 1, "lnk-blue"], ["src", "https://eq-cdn.equiti-me.com/website/documents/step_2_fund_yRa4UTv.svg", "alt", "Step 2", 1, "step-icon-img"], ["href", "#", 1, "lnk-blue"], ["src", "https://eq-cdn.equiti-me.com/website/documents/step_3_trade_QtZeaPz.svg", "alt", "Step 3", 1, "step-icon-img"], [1, "bonus-card"], [1, "bonus-text"], [1, "sect-label", 2, "color", "#00E8CC"], [1, "bonus-h2"], [1, "bonus-sub"], ["routerLink", "/register", 1, "btn-outline-teal"], [1, "bonus-visual"], ["src", "https://eq-cdn.equiti-me.com/website/images/Welcome_Bonus_Campaign_2025.original.png", "alt", "30% welcome bonus", 1, "section-img"], [1, "compare-section"], [1, "compare-h2"], [1, "compare-sub"], [1, "accounts-grid"], [1, "acc-card"], [1, "acc-card-head"], [1, "acc-card-name"], [1, "acc-card-free"], [1, "acc-features"], [1, "acc-feat-icon"], ["viewBox", "0 0 16 16", "fill", "none"], ["cx", "8", "cy", "8", "r", "7", "stroke", "#00B8A0", "stroke-width", "1.5"], ["d", "M5 8l2 2 4-4", "stroke", "#00B8A0", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["routerLink", "/register", 1, "btn-acc", "btn-acc-outline"], [1, "acc-card", "acc-card--featured"], [1, "acc-popular-badge"], [1, "acc-feat-icon", "acc-feat-icon--light"], ["cx", "8", "cy", "8", "r", "7", "stroke", "#fff", "stroke-width", "1.5"], ["d", "M5 8l2 2 4-4", "stroke", "#fff", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["routerLink", "/register", 1, "btn-acc", "btn-acc-white"], [1, "tools-promo-card"], [1, "tp-text"], [1, "tp-h2"], [1, "tp-sub"], ["routerLink", "/trading-tools", 1, "lnk-blue"], [1, "tp-icons"], [1, "tp-icon-item"], ["src", "https://eq-cdn.equiti-me.com/website/documents/tools-menu-icon.svg", "alt", "Trading tools", 1, "tp-icon-img"], ["src", "https://eq-cdn.equiti-me.com/website/documents/education-nav.svg", "alt", "Education", 1, "tp-icon-img"], ["src", "https://eq-cdn.equiti-me.com/website/documents/News-Icon.svg", "alt", "News", 1, "tp-icon-img"], [1, "how-section"], [1, "how-h2"], [1, "how-grid"], [1, "how-step"], [1, "how-num"], [1, "how-title"], [1, "how-desc"], ["routerLink", "/register", 1, "btn-primary-teal", "how-cta"], [1, "acc-cta-banner"], [1, "acc-cta-h2"], ["routerLink", "/register", 1, "btn-cta-teal"], [1, "faq-section"], [1, "container", "faq-inner"], [1, "faq-h2"], [1, "faq-list"], [1, "faq-item", 3, "open"], [1, "explore-section"], [1, "explore-h2"], [1, "explore-grid"], [1, "explore-card"], [1, "expl-img"], ["src", "https://eq-cdn.equiti-me.com/website/images/MT5.original.png", "alt", "Platforms", 1, "expl-photo"], [1, "expl-body"], [1, "expl-title"], [1, "expl-desc"], ["src", "https://eq-cdn.equiti-me.com/website/images/partnerships_hero_banner.2e16d0ba.fill-400x400.png", "alt", "Partnerships", 1, "expl-photo"], [1, "expl-img", "expl-img--tools"], ["src", "https://eq-cdn.equiti-me.com/website/images/trading-tools-hero.original.png", "alt", "Trading tools", 1, "expl-photo", "expl-photo--contain"], [1, "faq-item", 3, "click"], [1, "faq-q"], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none", 1, "faq-chevron"], ["d", "M5 7l5 5 5-5", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "faq-a"]], template: function AccountsComponent_Template(rf, ctx) {
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
      \u0275\u0275text(10, "Trading accounts");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "section", 9)(12, "div", 10)(13, "div", 11)(14, "span", 12);
      \u0275\u0275text(15, "OPEN AN ACCOUNT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "h1", 13);
      \u0275\u0275text(17, "Open a trading account in minutes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p", 14);
      \u0275\u0275text(19, "Sign up for a top online trading account with instant market access and advanced tools on a user-friendly platform.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "a", 15);
      \u0275\u0275text(21, "START TRADING");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 16);
      \u0275\u0275element(23, "img", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "section", 18)(25, "div", 1)(26, "div", 19)(27, "div", 20)(28, "h2", 21);
      \u0275\u0275text(29, "Trade globally with tight spreads and 24/6 support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "p", 22);
      \u0275\u0275text(31, "Make trades on major financial exchanges with secure trading accounts accessible on any device.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "a", 23);
      \u0275\u0275text(33, "OPEN AN ACCOUNT");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(34, "section", 24)(35, "div", 1)(36, "span", 12);
      \u0275\u0275text(37, "LIVE TRADING ACCOUNT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "h2", 25);
      \u0275\u0275text(39, "Open an Equiti trading account in minutes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 26)(41, "div", 27)(42, "div", 28);
      \u0275\u0275element(43, "img", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "h3", 30);
      \u0275\u0275text(45, "Step 1: Set up your trading account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "p", 31);
      \u0275\u0275text(47, "Start trading online in a few steps, we'll ask for your contact details to begin.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "a", 32);
      \u0275\u0275text(49, "Apply now");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 27)(51, "div", 28);
      \u0275\u0275element(52, "img", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "h3", 30);
      \u0275\u0275text(54, "Step 2: Fund easily");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "p", 31);
      \u0275\u0275text(56, "Deposit and withdraw securely with credit cards, eWallets and local solutions.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "a", 34);
      \u0275\u0275text(58, "Ways to pay");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 27)(60, "div", 28);
      \u0275\u0275element(61, "img", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "h3", 30);
      \u0275\u0275text(63, "Step 3: Start trading");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "p", 31);
      \u0275\u0275text(65, "Trade online with global client support, daily market updates & instant notifications.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "a", 34);
      \u0275\u0275text(67, "More on MT5");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(68, "section", 18)(69, "div", 1)(70, "div", 36)(71, "div", 37)(72, "span", 38);
      \u0275\u0275text(73, "WELCOME BONUS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "h2", 39);
      \u0275\u0275text(75, "Make your first deposit and get 30% extra trading credit!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "p", 40);
      \u0275\u0275text(77, "Terms and conditions apply.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "a", 41);
      \u0275\u0275text(79, "OPEN ACCOUNT");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "div", 42);
      \u0275\u0275element(81, "img", 43);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(82, "section", 44)(83, "div", 1)(84, "span", 12);
      \u0275\u0275text(85, "COMPARE ACCOUNTS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "h2", 45);
      \u0275\u0275text(87, "Secure trading accounts with leverage up to 1:2000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "p", 46);
      \u0275\u0275text(89, "Craft your trade strategies with flexible leverage and low spreads.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "div", 47)(91, "div", 48)(92, "div", 49)(93, "h3", 50);
      \u0275\u0275text(94, "Classic Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "span", 51);
      \u0275\u0275text(96, "Free to sign up");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "ul", 52)(98, "li")(99, "span", 53);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(100, "svg", 54);
      \u0275\u0275element(101, "circle", 55)(102, "path", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(103, "USD Accounts");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(104, "li")(105, "span", 53);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(106, "svg", 54);
      \u0275\u0275element(107, "circle", 55)(108, "path", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(109, "Leverage up to 1:2000");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(110, "li")(111, "span", 53);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(112, "svg", 54);
      \u0275\u0275element(113, "circle", 55)(114, "path", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(115, "Average spreads of 1.6 pips");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(116, "li")(117, "span", 53);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(118, "svg", 54);
      \u0275\u0275element(119, "circle", 55)(120, "path", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(121, "No minimum deposit");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(122, "li")(123, "span", 53);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(124, "svg", 54);
      \u0275\u0275element(125, "circle", 55)(126, "path", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(127, "$0 commission*");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(128, "li")(129, "span", 53);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(130, "svg", 54);
      \u0275\u0275element(131, "circle", 55)(132, "path", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(133, "MT5 & MQ WebTrader");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(134, "a", 57);
      \u0275\u0275text(135, "OPEN CLASSIC");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(136, "div", 48)(137, "div", 49)(138, "h3", 50);
      \u0275\u0275text(139, "Standard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "span", 51);
      \u0275\u0275text(141, "Free to sign up");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(142, "ul", 52)(143, "li")(144, "span", 53);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(145, "svg", 54);
      \u0275\u0275element(146, "circle", 55)(147, "path", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(148, "USD account");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(149, "li")(150, "span", 53);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(151, "svg", 54);
      \u0275\u0275element(152, "circle", 55)(153, "path", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(154, "Leverage up to 1:2000");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(155, "li")(156, "span", 53);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(157, "svg", 54);
      \u0275\u0275element(158, "circle", 55)(159, "path", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(160, "Average spreads of 1.4 pips");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(161, "li")(162, "span", 53);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(163, "svg", 54);
      \u0275\u0275element(164, "circle", 55)(165, "path", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(166, "$30 minimum deposit");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(167, "li")(168, "span", 53);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(169, "svg", 54);
      \u0275\u0275element(170, "circle", 55)(171, "path", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(172, "$0 commission*");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(173, "li")(174, "span", 53);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(175, "svg", 54);
      \u0275\u0275element(176, "circle", 55)(177, "path", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(178, "MT4, MT5 & MQ WebTrader");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(179, "a", 57);
      \u0275\u0275text(180, "OPEN STANDARD");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(181, "div", 58)(182, "div", 59);
      \u0275\u0275text(183, "MOST POPULAR");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "div", 49)(185, "h3", 50);
      \u0275\u0275text(186, "Premier");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "span", 51);
      \u0275\u0275text(188, "Free to sign up");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(189, "ul", 52)(190, "li")(191, "span", 60);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(192, "svg", 54);
      \u0275\u0275element(193, "circle", 61)(194, "path", 62);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(195, "USD account");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(196, "li")(197, "span", 60);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(198, "svg", 54);
      \u0275\u0275element(199, "circle", 61)(200, "path", 62);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(201, "Leverage up to 1:2000");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(202, "li")(203, "span", 60);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(204, "svg", 54);
      \u0275\u0275element(205, "circle", 61)(206, "path", 62);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(207, "Spreads from 0.0 pips*");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(208, "li")(209, "span", 60);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(210, "svg", 54);
      \u0275\u0275element(211, "circle", 61)(212, "path", 62);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(213, "Deposits from $100");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(214, "li")(215, "span", 60);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(216, "svg", 54);
      \u0275\u0275element(217, "circle", 61)(218, "path", 62);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(219, "US$3.5/lot per side commission");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(220, "li")(221, "span", 60);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(222, "svg", 54);
      \u0275\u0275element(223, "circle", 61)(224, "path", 62);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(225, "MT4, MT5 & MQ WebTrader");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(226, "a", 63);
      \u0275\u0275text(227, "OPEN PREMIER");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(228, "div", 48)(229, "div", 49)(230, "h3", 50);
      \u0275\u0275text(231, "Micro Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "span", 51);
      \u0275\u0275text(233, "Free to sign up");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(234, "ul", 52)(235, "li")(236, "span", 53);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(237, "svg", 54);
      \u0275\u0275element(238, "circle", 55)(239, "path", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(240, "Add an additional Micro account in USD");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(241, "li")(242, "span", 53);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(243, "svg", 54);
      \u0275\u0275element(244, "circle", 55)(245, "path", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(246, "Leverage up to 1:500");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(247, "li")(248, "span", 53);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(249, "svg", 54);
      \u0275\u0275element(250, "circle", 55)(251, "path", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(252, "Trade smaller, micro lot sizes");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(253, "li")(254, "span", 53);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(255, "svg", 54);
      \u0275\u0275element(256, "circle", 55)(257, "path", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(258, "MT5 & MQ Webtrader");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(259, "a", 57);
      \u0275\u0275text(260, "OPEN MICRO");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(261, "section", 18)(262, "div", 1)(263, "div", 64)(264, "div", 65)(265, "h2", 66);
      \u0275\u0275text(266, "Use advanced trading tools");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(267, "p", 67);
      \u0275\u0275text(268, "Spot opportunity faster with Equiti's range of trading tools");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(269, "a", 68);
      \u0275\u0275text(270, "Explore trading tools");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(271, "div", 69)(272, "div", 70);
      \u0275\u0275element(273, "img", 71);
      \u0275\u0275elementStart(274, "span");
      \u0275\u0275text(275, "Trading tools");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(276, "div", 70);
      \u0275\u0275element(277, "img", 72);
      \u0275\u0275elementStart(278, "span");
      \u0275\u0275text(279, "Education");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(280, "div", 70);
      \u0275\u0275element(281, "img", 73);
      \u0275\u0275elementStart(282, "span");
      \u0275\u0275text(283, "Market news");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(284, "section", 74)(285, "div", 1)(286, "span", 12);
      \u0275\u0275text(287, "GET STARTED");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(288, "h2", 75);
      \u0275\u0275text(289, "Start trading online in 3 simple steps");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(290, "div", 76)(291, "div", 77)(292, "div", 78);
      \u0275\u0275text(293, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(294, "h3", 79);
      \u0275\u0275text(295, "Complete your application");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(296, "p", 80);
      \u0275\u0275text(297, "Fill in your details online in minutes and our team will review your application.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(298, "div", 77)(299, "div", 78);
      \u0275\u0275text(300, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(301, "h3", 79);
      \u0275\u0275text(302, "Make your first deposit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(303, "p", 80);
      \u0275\u0275text(304, "Fund your account using one of our many secure and convenient payment options.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(305, "div", 77)(306, "div", 78);
      \u0275\u0275text(307, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(308, "h3", 79);
      \u0275\u0275text(309, "Start making trades");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(310, "p", 80);
      \u0275\u0275text(311, "Access thousands of instruments across MT5 and start trading global markets.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(312, "a", 81);
      \u0275\u0275text(313, "Open an Equiti Account");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(314, "section", 18)(315, "div", 1)(316, "div", 82)(317, "span", 38);
      \u0275\u0275text(318, "GLOBAL BROKER");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(319, "h2", 83);
      \u0275\u0275text(320, "Start trading online with Equiti");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(321, "a", 84);
      \u0275\u0275text(322, "START TRADING");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(323, "section", 85)(324, "div", 86)(325, "span", 12);
      \u0275\u0275text(326, "FAQS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(327, "h2", 87);
      \u0275\u0275text(328, "Trading account FAQs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(329, "div", 88);
      \u0275\u0275repeaterCreate(330, AccountsComponent_For_331_Template, 7, 4, "div", 89, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(332, "section", 90)(333, "div", 1)(334, "h2", 91);
      \u0275\u0275text(335, "There's more to explore");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(336, "div", 92)(337, "div", 93)(338, "div", 94);
      \u0275\u0275element(339, "img", 95);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(340, "div", 96)(341, "h3", 97);
      \u0275\u0275text(342, "Platforms");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(343, "p", 98);
      \u0275\u0275text(344, "Trade CFDs with live market data on MT5 from your phone or computer.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(345, "a", 34);
      \u0275\u0275text(346, "See all trading platforms");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(347, "div", 93)(348, "div", 94);
      \u0275\u0275element(349, "img", 99);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(350, "div", 96)(351, "h3", 97);
      \u0275\u0275text(352, "Partnerships");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(353, "p", 98);
      \u0275\u0275text(354, "Introduce your client network for competitive benefits.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(355, "a", 34);
      \u0275\u0275text(356, "Partner with Equiti");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(357, "div", 93)(358, "div", 100);
      \u0275\u0275element(359, "img", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(360, "div", 96)(361, "h3", 97);
      \u0275\u0275text(362, "Trading tools");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(363, "p", 98);
      \u0275\u0275text(364, "Access free analysis tools including Assets Overview, Signal Centre and Economic Calendar.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(365, "a", 68);
      \u0275\u0275text(366, "Explore trading tools");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(330);
      \u0275\u0275repeater(ctx.faqs);
    }
  }, dependencies: [RouterModule, RouterLink], styles: ["\n.breadcrumb-bar[_ngcontent-%COMP%] {\n  padding: 16px 0;\n  border-bottom: 1px solid var(--border);\n  background: #fff;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.bc-home[_ngcontent-%COMP%] {\n  color: #00B8A0;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n}\n.bc-sep[_ngcontent-%COMP%] {\n  color: #9CA3AF;\n  font-size: 14px;\n}\n.bc-current[_ngcontent-%COMP%] {\n  color: #00B8A0;\n  font-size: 14px;\n  font-weight: 500;\n}\n.acc-hero[_ngcontent-%COMP%] {\n  background: var(--bg);\n  padding: 72px 0 0;\n}\n.acc-hero-inner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 48px;\n  align-items: center;\n}\n.acc-hero-h1[_ngcontent-%COMP%] {\n  font-size: clamp(32px, 4vw, 52px);\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -1px;\n  line-height: 1.1;\n  margin-bottom: 18px;\n}\n.acc-hero-sub[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--text-muted);\n  line-height: 1.75;\n  max-width: 460px;\n  margin-bottom: 32px;\n}\n.btn-primary-teal[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 13px 28px;\n  background: var(--primary);\n  color: #fff;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition: background var(--transition);\n}\n.btn-primary-teal[_ngcontent-%COMP%]:hover {\n  background: var(--primary-hover);\n}\n.acc-hero-visual[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.acc-hero-img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 450px;\n  height: auto;\n  object-fit: contain;\n}\n.section-wrap[_ngcontent-%COMP%] {\n  padding: 40px 0;\n}\n.acc-support-banner[_ngcontent-%COMP%] {\n  background: var(--dark);\n  border-radius: var(--radius-xl);\n  padding: 56px 64px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 48px;\n}\n.acc-sb-h2[_ngcontent-%COMP%] {\n  font-size: clamp(22px, 2.8vw, 32px);\n  font-weight: 700;\n  color: #fff;\n  letter-spacing: -0.5px;\n  line-height: 1.25;\n  margin-bottom: 10px;\n}\n.acc-sb-sub[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.6);\n  line-height: 1.65;\n  max-width: 500px;\n}\n.btn-outline-teal-light[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 12px 24px;\n  border: 2px solid rgba(255, 255, 255, 0.5);\n  color: #fff;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  transition: all var(--transition);\n  flex-shrink: 0;\n}\n.btn-outline-teal-light[_ngcontent-%COMP%]:hover {\n  border-color: #fff;\n  background: rgba(255, 255, 255, 0.1);\n}\n.steps-section[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  background: var(--bg);\n}\n.steps-h2[_ngcontent-%COMP%] {\n  font-size: clamp(24px, 3vw, 34px);\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.5px;\n  margin-bottom: 48px;\n}\n.steps-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n.step-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n}\n.step-icon[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.step-icon-img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  object-fit: contain;\n}\n.step-title[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 600;\n  color: var(--text);\n  margin-bottom: 10px;\n}\n.step-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n  line-height: 1.7;\n  flex: 1;\n}\n.bonus-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 48px;\n  align-items: center;\n  background: var(--dark);\n  border-radius: var(--radius-xl);\n  padding: 56px 64px;\n}\n.bonus-h2[_ngcontent-%COMP%] {\n  font-size: clamp(22px, 2.8vw, 32px);\n  font-weight: 700;\n  color: #fff;\n  line-height: 1.3;\n  letter-spacing: -0.5px;\n  margin-bottom: 10px;\n}\n.bonus-sub[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.5);\n  margin-bottom: 28px;\n}\n.btn-outline-teal[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 12px 28px;\n  border: 2px solid var(--primary);\n  color: var(--primary);\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition: all var(--transition);\n}\n.btn-outline-teal[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n  color: #fff;\n}\n.bonus-visual[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.section-img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n  height: auto;\n  object-fit: contain;\n  display: block;\n  margin: 0 auto;\n}\n.compare-section[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  background: var(--bg);\n}\n.compare-h2[_ngcontent-%COMP%] {\n  font-size: clamp(26px, 3vw, 38px);\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.5px;\n  margin-bottom: 10px;\n  line-height: 1.2;\n}\n.compare-sub[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--text-muted);\n  margin-bottom: 48px;\n}\n.accounts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 20px;\n  align-items: start;\n}\n.acc-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  padding: 28px 24px 24px;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.acc-card--featured[_ngcontent-%COMP%] {\n  background: var(--dark);\n  border-color: var(--dark);\n  padding-top: 48px;\n}\n.acc-popular-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -1px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: var(--primary);\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  padding: 5px 14px;\n  border-radius: 0 0 8px 8px;\n}\n.acc-card-head[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.acc-card-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--text);\n  margin-bottom: 4px;\n}\n.acc-card--featured[_ngcontent-%COMP%]   .acc-card-name[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.acc-card-free[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.acc-card--featured[_ngcontent-%COMP%]   .acc-card-free[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.55);\n}\n.acc-features[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 28px;\n  flex: 1;\n}\n.acc-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  font-size: 14px;\n  color: var(--text-2);\n  line-height: 1.4;\n}\n.acc-card--featured[_ngcontent-%COMP%]   .acc-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.85);\n}\n.acc-feat-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.btn-acc[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  padding: 12px 16px;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-decoration: none;\n  text-transform: uppercase;\n  transition: all var(--transition);\n}\n.btn-acc-outline[_ngcontent-%COMP%] {\n  border: 1.5px solid var(--border);\n  color: var(--text);\n  background: transparent;\n}\n.btn-acc-outline[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.btn-acc-white[_ngcontent-%COMP%] {\n  background: #fff;\n  color: var(--dark);\n}\n.btn-acc-white[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.9);\n}\n.tools-promo-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-xl);\n  padding: 48px 56px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 48px;\n}\n.tp-h2[_ngcontent-%COMP%] {\n  font-size: clamp(22px, 2.5vw, 30px);\n  font-weight: 700;\n  color: var(--text);\n  margin-bottom: 8px;\n  letter-spacing: -0.3px;\n}\n.tp-sub[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--text-muted);\n  margin-bottom: 16px;\n}\n.tp-icons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  flex-shrink: 0;\n}\n.tp-icon-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n.tp-icon-img[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  object-fit: contain;\n}\n.how-section[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  background: var(--bg);\n  text-align: center;\n}\n.how-h2[_ngcontent-%COMP%] {\n  font-size: clamp(24px, 3vw, 36px);\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.5px;\n  margin-bottom: 48px;\n}\n.how-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n  margin-bottom: 40px;\n  text-align: left;\n}\n.how-step[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  padding: 32px;\n}\n.how-num[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--primary);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 16px;\n}\n.how-title[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 600;\n  color: var(--text);\n  margin-bottom: 10px;\n}\n.how-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n  line-height: 1.7;\n}\n.how-cta[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.acc-cta-banner[_ngcontent-%COMP%] {\n  background: var(--dark);\n  border-radius: var(--radius-xl);\n  padding: 60px 56px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.acc-cta-h2[_ngcontent-%COMP%] {\n  font-size: clamp(28px, 4vw, 44px);\n  font-weight: 700;\n  color: #fff;\n  letter-spacing: -0.5px;\n  line-height: 1.2;\n  margin: 0;\n}\n.btn-cta-teal[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 12px 28px;\n  background: var(--primary);\n  color: #fff;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  text-decoration: none;\n  margin-top: 8px;\n  transition: background var(--transition);\n}\n.btn-cta-teal[_ngcontent-%COMP%]:hover {\n  background: var(--primary-hover);\n}\n.faq-section[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  background: var(--bg);\n}\n.faq-inner[_ngcontent-%COMP%] {\n  max-width: 820px;\n}\n.faq-h2[_ngcontent-%COMP%] {\n  font-size: clamp(26px, 3vw, 38px);\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.5px;\n  margin-bottom: 32px;\n}\n.faq-list[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n}\n.faq-item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border);\n  cursor: pointer;\n}\n.faq-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.faq-q[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px;\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--text);\n  gap: 16px;\n}\n.faq-chevron[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  transition: transform 0.2s;\n  color: #6B7280;\n}\n.faq-item.open[_ngcontent-%COMP%]   .faq-chevron[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.faq-a[_ngcontent-%COMP%] {\n  padding: 0 24px 20px;\n  font-size: 14px;\n  color: var(--text-muted);\n  line-height: 1.75;\n}\n.explore-section[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  background: var(--bg);\n}\n.explore-h2[_ngcontent-%COMP%] {\n  font-size: clamp(24px, 3vw, 34px);\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.5px;\n  margin-bottom: 36px;\n}\n.explore-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n.explore-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n}\n.expl-img[_ngcontent-%COMP%] {\n  height: 220px;\n  overflow: hidden;\n  background: #F3F4F6;\n}\n.expl-img--tools[_ngcontent-%COMP%] {\n  background: #EEF0F5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.expl-photo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.expl-photo--contain[_ngcontent-%COMP%] {\n  object-fit: contain;\n  padding: 12px;\n}\n.expl-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n}\n.expl-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text);\n  margin-bottom: 8px;\n}\n.expl-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n  line-height: 1.65;\n  margin-bottom: 10px;\n}\n@media (max-width: 1100px) {\n  .accounts-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 1024px) {\n  .acc-hero-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .bonus-card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 40px;\n  }\n  .acc-support-banner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 40px;\n  }\n  .tools-promo-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 36px;\n  }\n}\n@media (max-width: 768px) {\n  .steps-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .accounts-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .how-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .explore-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .acc-cta-banner[_ngcontent-%COMP%] {\n    padding: 40px 24px;\n  }\n  .tp-icons[_ngcontent-%COMP%] {\n    gap: 20px;\n  }\n}\n/*# sourceMappingURL=accounts.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountsComponent, [{
    type: Component,
    args: [{ selector: "app-accounts", standalone: true, imports: [RouterModule], template: `<!-- \u2500\u2500 BREADCRUMB \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<div class="breadcrumb-bar">
  <div class="container">
    <nav class="breadcrumb">
      <a routerLink="/" class="bc-home">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      </a>
      <span class="bc-sep">\u203A</span>
      <span class="bc-current">Trading accounts</span>
    </nav>
  </div>
</div>

<!-- \u2500\u2500 1. HERO \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<section class="acc-hero">
  <div class="container acc-hero-inner">
    <div class="acc-hero-text">
      <span class="sect-label">OPEN AN ACCOUNT</span>
      <h1 class="acc-hero-h1">Open a trading account in minutes</h1>
      <p class="acc-hero-sub">Sign up for a top online trading account with instant market access and advanced tools on a user-friendly platform.</p>
      <a routerLink="/register" class="btn-primary-teal">START TRADING</a>
    </div>
    <div class="acc-hero-visual">
      <img src="https://eq-cdn.equiti-me.com/website/images/All_Accounts_Equiti_group.original.png"
           alt="Equiti trading accounts" class="acc-hero-img" />
    </div>
  </div>
</section>

<!-- \u2500\u2500 2. DARK SUPPORT BANNER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<section class="section-wrap">
  <div class="container">
    <div class="acc-support-banner">
      <div class="acc-sb-text">
        <h2 class="acc-sb-h2">Trade globally with tight spreads and 24/6 support</h2>
        <p class="acc-sb-sub">Make trades on major financial exchanges with secure trading accounts accessible on any device.</p>
      </div>
      <a routerLink="/register" class="btn-outline-teal-light">OPEN AN ACCOUNT</a>
    </div>
  </div>
</section>

<!-- \u2500\u2500 3. HOW TO GET STARTED (STEPS) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<section class="steps-section">
  <div class="container">
    <span class="sect-label">LIVE TRADING ACCOUNT</span>
    <h2 class="steps-h2">Open an Equiti trading account in minutes</h2>
    <div class="steps-grid">
      <div class="step-card">
        <div class="step-icon">
          <img src="https://eq-cdn.equiti-me.com/website/documents/step_1_open_Zr3u3dS.svg" alt="Step 1" class="step-icon-img" />
        </div>
        <h3 class="step-title">Step 1: Set up your trading account</h3>
        <p class="step-desc">Start trading online in a few steps, we'll ask for your contact details to begin.</p>
        <a routerLink="/register" class="lnk-blue">Apply now</a>
      </div>
      <div class="step-card">
        <div class="step-icon">
          <img src="https://eq-cdn.equiti-me.com/website/documents/step_2_fund_yRa4UTv.svg" alt="Step 2" class="step-icon-img" />
        </div>
        <h3 class="step-title">Step 2: Fund easily</h3>
        <p class="step-desc">Deposit and withdraw securely with credit cards, eWallets and local solutions.</p>
        <a href="#" class="lnk-blue">Ways to pay</a>
      </div>
      <div class="step-card">
        <div class="step-icon">
          <img src="https://eq-cdn.equiti-me.com/website/documents/step_3_trade_QtZeaPz.svg" alt="Step 3" class="step-icon-img" />
        </div>
        <h3 class="step-title">Step 3: Start trading</h3>
        <p class="step-desc">Trade online with global client support, daily market updates &amp; instant notifications.</p>
        <a href="#" class="lnk-blue">More on MT5</a>
      </div>
    </div>
  </div>
</section>

<!-- \u2500\u2500 4. WELCOME BONUS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<section class="section-wrap">
  <div class="container">
    <div class="bonus-card">
      <div class="bonus-text">
        <span class="sect-label" style="color:#00E8CC">WELCOME BONUS</span>
        <h2 class="bonus-h2">Make your first deposit and get 30% extra trading credit!</h2>
        <p class="bonus-sub">Terms and conditions apply.</p>
        <a routerLink="/register" class="btn-outline-teal">OPEN ACCOUNT</a>
      </div>
      <div class="bonus-visual">
        <img src="https://eq-cdn.equiti-me.com/website/images/Welcome_Bonus_Campaign_2025.original.png"
             alt="30% welcome bonus" class="section-img" />
      </div>
    </div>
  </div>
</section>

<!-- \u2500\u2500 5. ACCOUNT COMPARISON \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<section class="compare-section">
  <div class="container">
    <span class="sect-label">COMPARE ACCOUNTS</span>
    <h2 class="compare-h2">Secure trading accounts with leverage up to 1:2000</h2>
    <p class="compare-sub">Craft your trade strategies with flexible leverage and low spreads.</p>

    <div class="accounts-grid">

      <!-- Classic -->
      <div class="acc-card">
        <div class="acc-card-head">
          <h3 class="acc-card-name">Classic Account</h3>
          <span class="acc-card-free">Free to sign up</span>
        </div>
        <ul class="acc-features">
          <li><span class="acc-feat-icon">
            <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#00B8A0" stroke-width="1.5"/><path d="M5 8l2 2 4-4" stroke="#00B8A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>USD Accounts</li>
          <li><span class="acc-feat-icon">
            <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#00B8A0" stroke-width="1.5"/><path d="M5 8l2 2 4-4" stroke="#00B8A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>Leverage up to 1:2000</li>
          <li><span class="acc-feat-icon">
            <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#00B8A0" stroke-width="1.5"/><path d="M5 8l2 2 4-4" stroke="#00B8A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>Average spreads of 1.6 pips</li>
          <li><span class="acc-feat-icon">
            <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#00B8A0" stroke-width="1.5"/><path d="M5 8l2 2 4-4" stroke="#00B8A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>No minimum deposit</li>
          <li><span class="acc-feat-icon">
            <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#00B8A0" stroke-width="1.5"/><path d="M5 8l2 2 4-4" stroke="#00B8A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>$0 commission*</li>
          <li><span class="acc-feat-icon">
            <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#00B8A0" stroke-width="1.5"/><path d="M5 8l2 2 4-4" stroke="#00B8A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>MT5 &amp; MQ WebTrader</li>
        </ul>
        <a routerLink="/register" class="btn-acc btn-acc-outline">OPEN CLASSIC</a>
      </div>

      <!-- Standard -->
      <div class="acc-card">
        <div class="acc-card-head">
          <h3 class="acc-card-name">Standard</h3>
          <span class="acc-card-free">Free to sign up</span>
        </div>
        <ul class="acc-features">
          <li><span class="acc-feat-icon">
            <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#00B8A0" stroke-width="1.5"/><path d="M5 8l2 2 4-4" stroke="#00B8A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>USD account</li>
          <li><span class="acc-feat-icon">
            <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#00B8A0" stroke-width="1.5"/><path d="M5 8l2 2 4-4" stroke="#00B8A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>Leverage up to 1:2000</li>
          <li><span class="acc-feat-icon">
            <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#00B8A0" stroke-width="1.5"/><path d="M5 8l2 2 4-4" stroke="#00B8A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>Average spreads of 1.4 pips</li>
          <li><span class="acc-feat-icon">
            <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#00B8A0" stroke-width="1.5"/><path d="M5 8l2 2 4-4" stroke="#00B8A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>$30 minimum deposit</li>
          <li><span class="acc-feat-icon">
            <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#00B8A0" stroke-width="1.5"/><path d="M5 8l2 2 4-4" stroke="#00B8A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>$0 commission*</li>
          <li><span class="acc-feat-icon">
            <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#00B8A0" stroke-width="1.5"/><path d="M5 8l2 2 4-4" stroke="#00B8A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>MT4, MT5 &amp; MQ WebTrader</li>
        </ul>
        <a routerLink="/register" class="btn-acc btn-acc-outline">OPEN STANDARD</a>
      </div>

      <!-- Premier (featured) -->
      <div class="acc-card acc-card--featured">
        <div class="acc-popular-badge">MOST POPULAR</div>
        <div class="acc-card-head">
          <h3 class="acc-card-name">Premier</h3>
          <span class="acc-card-free">Free to sign up</span>
        </div>
        <ul class="acc-features">
          <li><span class="acc-feat-icon acc-feat-icon--light">
            <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#fff" stroke-width="1.5"/><path d="M5 8l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>USD account</li>
          <li><span class="acc-feat-icon acc-feat-icon--light">
            <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#fff" stroke-width="1.5"/><path d="M5 8l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>Leverage up to 1:2000</li>
          <li><span class="acc-feat-icon acc-feat-icon--light">
            <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#fff" stroke-width="1.5"/><path d="M5 8l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>Spreads from 0.0 pips*</li>
          <li><span class="acc-feat-icon acc-feat-icon--light">
            <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#fff" stroke-width="1.5"/><path d="M5 8l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>Deposits from $100</li>
          <li><span class="acc-feat-icon acc-feat-icon--light">
            <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#fff" stroke-width="1.5"/><path d="M5 8l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>US$3.5/lot per side commission</li>
          <li><span class="acc-feat-icon acc-feat-icon--light">
            <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#fff" stroke-width="1.5"/><path d="M5 8l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>MT4, MT5 &amp; MQ WebTrader</li>
        </ul>
        <a routerLink="/register" class="btn-acc btn-acc-white">OPEN PREMIER</a>
      </div>

      <!-- Micro -->
      <div class="acc-card">
        <div class="acc-card-head">
          <h3 class="acc-card-name">Micro Account</h3>
          <span class="acc-card-free">Free to sign up</span>
        </div>
        <ul class="acc-features">
          <li><span class="acc-feat-icon">
            <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#00B8A0" stroke-width="1.5"/><path d="M5 8l2 2 4-4" stroke="#00B8A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>Add an additional Micro account in USD</li>
          <li><span class="acc-feat-icon">
            <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#00B8A0" stroke-width="1.5"/><path d="M5 8l2 2 4-4" stroke="#00B8A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>Leverage up to 1:500</li>
          <li><span class="acc-feat-icon">
            <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#00B8A0" stroke-width="1.5"/><path d="M5 8l2 2 4-4" stroke="#00B8A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>Trade smaller, micro lot sizes</li>
          <li><span class="acc-feat-icon">
            <svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="#00B8A0" stroke-width="1.5"/><path d="M5 8l2 2 4-4" stroke="#00B8A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>MT5 &amp; MQ Webtrader</li>
        </ul>
        <a routerLink="/register" class="btn-acc btn-acc-outline">OPEN MICRO</a>
      </div>

    </div>
  </div>
</section>

<!-- \u2500\u2500 6. TRADING TOOLS PROMO \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<section class="section-wrap">
  <div class="container">
    <div class="tools-promo-card">
      <div class="tp-text">
        <h2 class="tp-h2">Use advanced trading tools</h2>
        <p class="tp-sub">Spot opportunity faster with Equiti's range of trading tools</p>
        <a routerLink="/trading-tools" class="lnk-blue">Explore trading tools</a>
      </div>
      <div class="tp-icons">
        <div class="tp-icon-item">
          <img src="https://eq-cdn.equiti-me.com/website/documents/tools-menu-icon.svg" alt="Trading tools" class="tp-icon-img" />
          <span>Trading tools</span>
        </div>
        <div class="tp-icon-item">
          <img src="https://eq-cdn.equiti-me.com/website/documents/education-nav.svg" alt="Education" class="tp-icon-img" />
          <span>Education</span>
        </div>
        <div class="tp-icon-item">
          <img src="https://eq-cdn.equiti-me.com/website/documents/News-Icon.svg" alt="News" class="tp-icon-img" />
          <span>Market news</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- \u2500\u2500 7. HOW TO START (numbered steps) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<section class="how-section">
  <div class="container">
    <span class="sect-label">GET STARTED</span>
    <h2 class="how-h2">Start trading online in 3 simple steps</h2>
    <div class="how-grid">
      <div class="how-step">
        <div class="how-num">1</div>
        <h3 class="how-title">Complete your application</h3>
        <p class="how-desc">Fill in your details online in minutes and our team will review your application.</p>
      </div>
      <div class="how-step">
        <div class="how-num">2</div>
        <h3 class="how-title">Make your first deposit</h3>
        <p class="how-desc">Fund your account using one of our many secure and convenient payment options.</p>
      </div>
      <div class="how-step">
        <div class="how-num">3</div>
        <h3 class="how-title">Start making trades</h3>
        <p class="how-desc">Access thousands of instruments across MT5 and start trading global markets.</p>
      </div>
    </div>
    <a routerLink="/register" class="btn-primary-teal how-cta">Open an Equiti Account</a>
  </div>
</section>

<!-- \u2500\u2500 8. CTA DARK BANNER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<section class="section-wrap">
  <div class="container">
    <div class="acc-cta-banner">
      <span class="sect-label" style="color:#00E8CC">GLOBAL BROKER</span>
      <h2 class="acc-cta-h2">Start trading online with Equiti</h2>
      <a routerLink="/register" class="btn-cta-teal">START TRADING</a>
    </div>
  </div>
</section>

<!-- \u2500\u2500 9. FAQ \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<section class="faq-section">
  <div class="container faq-inner">
    <span class="sect-label">FAQS</span>
    <h2 class="faq-h2">Trading account FAQs</h2>
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

<!-- \u2500\u2500 10. MORE TO EXPLORE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
<section class="explore-section">
  <div class="container">
    <h2 class="explore-h2">There's more to explore</h2>
    <div class="explore-grid">

      <div class="explore-card">
        <div class="expl-img">
          <img src="https://eq-cdn.equiti-me.com/website/images/MT5.original.png"
               alt="Platforms" class="expl-photo" />
        </div>
        <div class="expl-body">
          <h3 class="expl-title">Platforms</h3>
          <p class="expl-desc">Trade CFDs with live market data on MT5 from your phone or computer.</p>
          <a href="#" class="lnk-blue">See all trading platforms</a>
        </div>
      </div>

      <div class="explore-card">
        <div class="expl-img">
          <img src="https://eq-cdn.equiti-me.com/website/images/partnerships_hero_banner.2e16d0ba.fill-400x400.png"
               alt="Partnerships" class="expl-photo" />
        </div>
        <div class="expl-body">
          <h3 class="expl-title">Partnerships</h3>
          <p class="expl-desc">Introduce your client network for competitive benefits.</p>
          <a href="#" class="lnk-blue">Partner with Equiti</a>
        </div>
      </div>

      <div class="explore-card">
        <div class="expl-img expl-img--tools">
          <img src="https://eq-cdn.equiti-me.com/website/images/trading-tools-hero.original.png"
               alt="Trading tools" class="expl-photo expl-photo--contain" />
        </div>
        <div class="expl-body">
          <h3 class="expl-title">Trading tools</h3>
          <p class="expl-desc">Access free analysis tools including Assets Overview, Signal Centre and Economic Calendar.</p>
          <a routerLink="/trading-tools" class="lnk-blue">Explore trading tools</a>
        </div>
      </div>

    </div>
  </div>
</section>
`, styles: ["/* src/app/features/accounts/accounts.component.css */\n.breadcrumb-bar {\n  padding: 16px 0;\n  border-bottom: 1px solid var(--border);\n  background: #fff;\n}\n.breadcrumb {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.bc-home {\n  color: #00B8A0;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n}\n.bc-sep {\n  color: #9CA3AF;\n  font-size: 14px;\n}\n.bc-current {\n  color: #00B8A0;\n  font-size: 14px;\n  font-weight: 500;\n}\n.acc-hero {\n  background: var(--bg);\n  padding: 72px 0 0;\n}\n.acc-hero-inner {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 48px;\n  align-items: center;\n}\n.acc-hero-h1 {\n  font-size: clamp(32px, 4vw, 52px);\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -1px;\n  line-height: 1.1;\n  margin-bottom: 18px;\n}\n.acc-hero-sub {\n  font-size: 16px;\n  color: var(--text-muted);\n  line-height: 1.75;\n  max-width: 460px;\n  margin-bottom: 32px;\n}\n.btn-primary-teal {\n  display: inline-block;\n  padding: 13px 28px;\n  background: var(--primary);\n  color: #fff;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition: background var(--transition);\n}\n.btn-primary-teal:hover {\n  background: var(--primary-hover);\n}\n.acc-hero-visual {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.acc-hero-img {\n  width: 100%;\n  max-width: 450px;\n  height: auto;\n  object-fit: contain;\n}\n.section-wrap {\n  padding: 40px 0;\n}\n.acc-support-banner {\n  background: var(--dark);\n  border-radius: var(--radius-xl);\n  padding: 56px 64px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 48px;\n}\n.acc-sb-h2 {\n  font-size: clamp(22px, 2.8vw, 32px);\n  font-weight: 700;\n  color: #fff;\n  letter-spacing: -0.5px;\n  line-height: 1.25;\n  margin-bottom: 10px;\n}\n.acc-sb-sub {\n  font-size: 15px;\n  color: rgba(255, 255, 255, 0.6);\n  line-height: 1.65;\n  max-width: 500px;\n}\n.btn-outline-teal-light {\n  display: inline-block;\n  padding: 12px 24px;\n  border: 2px solid rgba(255, 255, 255, 0.5);\n  color: #fff;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  transition: all var(--transition);\n  flex-shrink: 0;\n}\n.btn-outline-teal-light:hover {\n  border-color: #fff;\n  background: rgba(255, 255, 255, 0.1);\n}\n.steps-section {\n  padding: 80px 0;\n  background: var(--bg);\n}\n.steps-h2 {\n  font-size: clamp(24px, 3vw, 34px);\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.5px;\n  margin-bottom: 48px;\n}\n.steps-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n.step-card {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n}\n.step-icon {\n  margin-bottom: 20px;\n}\n.step-icon-img {\n  width: 48px;\n  height: 48px;\n  object-fit: contain;\n}\n.step-title {\n  font-size: 17px;\n  font-weight: 600;\n  color: var(--text);\n  margin-bottom: 10px;\n}\n.step-desc {\n  font-size: 14px;\n  color: var(--text-muted);\n  line-height: 1.7;\n  flex: 1;\n}\n.bonus-card {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 48px;\n  align-items: center;\n  background: var(--dark);\n  border-radius: var(--radius-xl);\n  padding: 56px 64px;\n}\n.bonus-h2 {\n  font-size: clamp(22px, 2.8vw, 32px);\n  font-weight: 700;\n  color: #fff;\n  line-height: 1.3;\n  letter-spacing: -0.5px;\n  margin-bottom: 10px;\n}\n.bonus-sub {\n  font-size: 14px;\n  color: rgba(255, 255, 255, 0.5);\n  margin-bottom: 28px;\n}\n.btn-outline-teal {\n  display: inline-block;\n  padding: 12px 28px;\n  border: 2px solid var(--primary);\n  color: var(--primary);\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition: all var(--transition);\n}\n.btn-outline-teal:hover {\n  background: var(--primary);\n  color: #fff;\n}\n.bonus-visual {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.section-img {\n  width: 100%;\n  max-width: 480px;\n  height: auto;\n  object-fit: contain;\n  display: block;\n  margin: 0 auto;\n}\n.compare-section {\n  padding: 80px 0;\n  background: var(--bg);\n}\n.compare-h2 {\n  font-size: clamp(26px, 3vw, 38px);\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.5px;\n  margin-bottom: 10px;\n  line-height: 1.2;\n}\n.compare-sub {\n  font-size: 15px;\n  color: var(--text-muted);\n  margin-bottom: 48px;\n}\n.accounts-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 20px;\n  align-items: start;\n}\n.acc-card {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  padding: 28px 24px 24px;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.acc-card--featured {\n  background: var(--dark);\n  border-color: var(--dark);\n  padding-top: 48px;\n}\n.acc-popular-badge {\n  position: absolute;\n  top: -1px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: var(--primary);\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  padding: 5px 14px;\n  border-radius: 0 0 8px 8px;\n}\n.acc-card-head {\n  margin-bottom: 20px;\n}\n.acc-card-name {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--text);\n  margin-bottom: 4px;\n}\n.acc-card--featured .acc-card-name {\n  color: #fff;\n}\n.acc-card-free {\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.acc-card--featured .acc-card-free {\n  color: rgba(255, 255, 255, 0.55);\n}\n.acc-features {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 28px;\n  flex: 1;\n}\n.acc-features li {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  font-size: 14px;\n  color: var(--text-2);\n  line-height: 1.4;\n}\n.acc-card--featured .acc-features li {\n  color: rgba(255, 255, 255, 0.85);\n}\n.acc-feat-icon {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.btn-acc {\n  display: block;\n  text-align: center;\n  padding: 12px 16px;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-decoration: none;\n  text-transform: uppercase;\n  transition: all var(--transition);\n}\n.btn-acc-outline {\n  border: 1.5px solid var(--border);\n  color: var(--text);\n  background: transparent;\n}\n.btn-acc-outline:hover {\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.btn-acc-white {\n  background: #fff;\n  color: var(--dark);\n}\n.btn-acc-white:hover {\n  background: rgba(255, 255, 255, 0.9);\n}\n.tools-promo-card {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-xl);\n  padding: 48px 56px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 48px;\n}\n.tp-h2 {\n  font-size: clamp(22px, 2.5vw, 30px);\n  font-weight: 700;\n  color: var(--text);\n  margin-bottom: 8px;\n  letter-spacing: -0.3px;\n}\n.tp-sub {\n  font-size: 15px;\n  color: var(--text-muted);\n  margin-bottom: 16px;\n}\n.tp-icons {\n  display: flex;\n  gap: 32px;\n  flex-shrink: 0;\n}\n.tp-icon-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n.tp-icon-img {\n  width: 36px;\n  height: 36px;\n  object-fit: contain;\n}\n.how-section {\n  padding: 80px 0;\n  background: var(--bg);\n  text-align: center;\n}\n.how-h2 {\n  font-size: clamp(24px, 3vw, 36px);\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.5px;\n  margin-bottom: 48px;\n}\n.how-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n  margin-bottom: 40px;\n  text-align: left;\n}\n.how-step {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  padding: 32px;\n}\n.how-num {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--primary);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 16px;\n}\n.how-title {\n  font-size: 17px;\n  font-weight: 600;\n  color: var(--text);\n  margin-bottom: 10px;\n}\n.how-desc {\n  font-size: 14px;\n  color: var(--text-muted);\n  line-height: 1.7;\n}\n.how-cta {\n  display: inline-block;\n}\n.acc-cta-banner {\n  background: var(--dark);\n  border-radius: var(--radius-xl);\n  padding: 60px 56px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.acc-cta-h2 {\n  font-size: clamp(28px, 4vw, 44px);\n  font-weight: 700;\n  color: #fff;\n  letter-spacing: -0.5px;\n  line-height: 1.2;\n  margin: 0;\n}\n.btn-cta-teal {\n  display: inline-block;\n  padding: 12px 28px;\n  background: var(--primary);\n  color: #fff;\n  border-radius: var(--radius-sm);\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  text-decoration: none;\n  margin-top: 8px;\n  transition: background var(--transition);\n}\n.btn-cta-teal:hover {\n  background: var(--primary-hover);\n}\n.faq-section {\n  padding: 80px 0;\n  background: var(--bg);\n}\n.faq-inner {\n  max-width: 820px;\n}\n.faq-h2 {\n  font-size: clamp(26px, 3vw, 38px);\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.5px;\n  margin-bottom: 32px;\n}\n.faq-list {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n}\n.faq-item {\n  border-bottom: 1px solid var(--border);\n  cursor: pointer;\n}\n.faq-item:last-child {\n  border-bottom: none;\n}\n.faq-q {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px;\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--text);\n  gap: 16px;\n}\n.faq-chevron {\n  flex-shrink: 0;\n  transition: transform 0.2s;\n  color: #6B7280;\n}\n.faq-item.open .faq-chevron {\n  transform: rotate(180deg);\n}\n.faq-a {\n  padding: 0 24px 20px;\n  font-size: 14px;\n  color: var(--text-muted);\n  line-height: 1.75;\n}\n.explore-section {\n  padding: 80px 0;\n  background: var(--bg);\n}\n.explore-h2 {\n  font-size: clamp(24px, 3vw, 34px);\n  font-weight: 700;\n  color: var(--text);\n  letter-spacing: -0.5px;\n  margin-bottom: 36px;\n}\n.explore-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n.explore-card {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n}\n.expl-img {\n  height: 220px;\n  overflow: hidden;\n  background: #F3F4F6;\n}\n.expl-img--tools {\n  background: #EEF0F5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.expl-photo {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.expl-photo--contain {\n  object-fit: contain;\n  padding: 12px;\n}\n.expl-body {\n  padding: 20px 24px;\n}\n.expl-title {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text);\n  margin-bottom: 8px;\n}\n.expl-desc {\n  font-size: 14px;\n  color: var(--text-muted);\n  line-height: 1.65;\n  margin-bottom: 10px;\n}\n@media (max-width: 1100px) {\n  .accounts-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 1024px) {\n  .acc-hero-inner {\n    grid-template-columns: 1fr;\n  }\n  .bonus-card {\n    grid-template-columns: 1fr;\n    padding: 40px;\n  }\n  .acc-support-banner {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 40px;\n  }\n  .tools-promo-card {\n    flex-direction: column;\n    padding: 36px;\n  }\n}\n@media (max-width: 768px) {\n  .steps-grid {\n    grid-template-columns: 1fr;\n  }\n  .accounts-grid {\n    grid-template-columns: 1fr;\n  }\n  .how-grid {\n    grid-template-columns: 1fr;\n  }\n  .explore-grid {\n    grid-template-columns: 1fr;\n  }\n  .acc-cta-banner {\n    padding: 40px 24px;\n  }\n  .tp-icons {\n    gap: 20px;\n  }\n}\n/*# sourceMappingURL=accounts.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountsComponent, { className: "AccountsComponent", filePath: "src/app/features/accounts/accounts.component.ts", lineNumber: 11 });
})();
export {
  AccountsComponent
};
//# sourceMappingURL=chunk-LBO7OG6V.js.map

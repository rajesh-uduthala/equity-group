import {
  SectionTagComponent
} from "./chunk-LU4QSJFL.js";
import {
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-W3ZQDAPL.js";

// src/app/features/platforms/platforms.component.ts
var PlatformsComponent = class _PlatformsComponent {
  static \u0275fac = function PlatformsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlatformsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlatformsComponent, selectors: [["app-platforms"]], decls: 8, vars: 0, consts: [[2, "padding", "80px 0", "min-height", "60vh"], [1, "container", 2, "text-align", "center"], [2, "font-size", "42px", "font-weight", "800", "color", "#fff", "margin", "16px 0 12px"], [2, "color", "var(--text-muted)", "font-size", "17px"]], template: function PlatformsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "app-section-tag");
      \u0275\u0275text(3, "Platforms");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h2", 2);
      \u0275\u0275text(5, "Platforms");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "Full page coming soon \u2014 structure is ready.");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [CommonModule, SectionTagComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlatformsComponent, [{
    type: Component,
    args: [{
      selector: "app-platforms",
      standalone: true,
      imports: [CommonModule, SectionTagComponent],
      template: `
    <section style="padding: 80px 0; min-height: 60vh;">
      <div class="container" style="text-align:center;">
        <app-section-tag>Platforms</app-section-tag>
        <h2 style="font-size:42px; font-weight:800; color:#fff; margin:16px 0 12px;">Platforms</h2>
        <p style="color:var(--text-muted); font-size:17px;">Full page coming soon \u2014 structure is ready.</p>
      </div>
    </section>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlatformsComponent, { className: "PlatformsComponent", filePath: "src/app/features/platforms/platforms.component.ts", lineNumber: 19 });
})();
export {
  PlatformsComponent
};
//# sourceMappingURL=chunk-WEBZ2H5L.js.map

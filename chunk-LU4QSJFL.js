import {
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-W3ZQDAPL.js";

// src/app/shared/components/badge/section-tag.component.ts
var _c0 = ["*"];
var SectionTagComponent = class _SectionTagComponent {
  alt = false;
  static \u0275fac = function SectionTagComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SectionTagComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SectionTagComponent, selectors: [["app-section-tag"]], inputs: { alt: "alt" }, ngContentSelectors: _c0, decls: 2, vars: 2, template: function SectionTagComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275domElementStart(0, "div");
      \u0275\u0275projection(1);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMap("section-tag " + (ctx.alt ? "section-tag-alt" : ""));
    }
  }, styles: ["\n.section-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: var(--primary-light);\n  color: var(--primary);\n  padding: 5px 14px;\n  border-radius: var(--radius-pill);\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 16px;\n  border: 1px solid rgba(0, 180, 216, 0.2);\n}\n.section-tag-alt[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  color: var(--text-muted);\n  border-color: var(--border);\n}\n/*# sourceMappingURL=section-tag.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SectionTagComponent, [{
    type: Component,
    args: [{ selector: "app-section-tag", standalone: true, template: `<div [class]="'section-tag ' + (alt ? 'section-tag-alt' : '')"><ng-content></ng-content></div>`, styles: ["/* angular:styles/component:css;f461e0c0005803f3b80129a77d2a974018ac7a62df26ca0bf83ad18a1a39c34a;/Users/rajesh/Downloads/equity-group/src/app/shared/components/badge/section-tag.component.ts */\n.section-tag {\n  display: inline-block;\n  background: var(--primary-light);\n  color: var(--primary);\n  padding: 5px 14px;\n  border-radius: var(--radius-pill);\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 16px;\n  border: 1px solid rgba(0, 180, 216, 0.2);\n}\n.section-tag-alt {\n  background: rgba(255, 255, 255, 0.05);\n  color: var(--text-muted);\n  border-color: var(--border);\n}\n/*# sourceMappingURL=section-tag.component.css.map */\n"] }]
  }], null, { alt: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SectionTagComponent, { className: "SectionTagComponent", filePath: "src/app/shared/components/badge/section-tag.component.ts", lineNumber: 24 });
})();

export {
  SectionTagComponent
};
//# sourceMappingURL=chunk-LU4QSJFL.js.map

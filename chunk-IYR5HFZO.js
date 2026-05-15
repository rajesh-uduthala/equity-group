import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-7AHSBSZ3.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-EG5WAOH2.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-W3ZQDAPL.js";

// src/app/features/auth/login/login.component.ts
var LoginComponent = class _LoginComponent {
  email = "";
  loading = false;
  onSubmit() {
    this.loading = true;
    setTimeout(() => this.loading = false, 1500);
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 20, vars: 3, consts: [["f", "ngForm"], [1, "login-page"], [1, "login-card"], [1, "login-logo"], ["src", "https://eq-cdn.equiti-me.com/website/documents/equiti-company-logo.svg", "alt", "Equiti", 1, "login-logo-img"], [1, "login-title"], [1, "login-sub"], [3, "ngSubmit"], [1, "field-wrap"], [1, "field-label"], ["type", "email", "name", "email", "placeholder", "example@email.com", "required", "", 1, "field-input", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn-continue", 3, "disabled"], [1, "create-account"], ["routerLink", "/register", 1, "auth-link"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
      \u0275\u0275element(3, "img", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h2", 5);
      \u0275\u0275text(5, "Login to Your Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 6);
      \u0275\u0275text(7, "Manage your accounts and access insightful reports and technical analysis among many more features.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "form", 7, 0);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_8_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(10, "div", 8)(11, "label", 9);
      \u0275\u0275text(12, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "button", 11);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "p", 12);
      \u0275\u0275text(17, " Don't have an account? ");
      \u0275\u0275elementStart(18, "a", 13);
      \u0275\u0275text(19, "Create Live Account");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.email);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "Please wait..." : "Continue", " ");
    }
  }, dependencies: [RouterModule, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ["\n.login-page[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 520px;\n  padding-top: 20px;\n}\n.login-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 70px 100px 50px;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);\n  margin-bottom: 28px;\n  text-align: center;\n}\n.login-logo[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.login-logo-img[_ngcontent-%COMP%] {\n  height: 44px;\n  width: auto;\n  display: inline-block;\n}\n.login-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1A1D2E;\n  letter-spacing: -0.5px;\n  margin-bottom: 12px;\n}\n.login-sub[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #6B7280;\n  line-height: 1.65;\n  margin-bottom: 36px;\n}\n.field-wrap[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  text-align: left;\n}\n.field-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 700;\n  color: #6B7280;\n  margin-bottom: 8px;\n}\n.field-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 14px 16px;\n  border: 1px solid #D1D5DB;\n  border-radius: 8px;\n  font-size: 15px;\n  color: #1A1D2E;\n  background: #fff;\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.field-input[_ngcontent-%COMP%]:focus {\n  border-color: #00B8A0;\n}\n.field-input[_ngcontent-%COMP%]::placeholder {\n  color: #9CA3AF;\n}\n.btn-continue[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 17px;\n  background: #00B8A0;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 18px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-continue[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #009880;\n}\n.btn-continue[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.create-account[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  color: #374151;\n}\n.auth-link[_ngcontent-%COMP%] {\n  color: #1D4ED8;\n  text-decoration: none;\n  font-weight: 600;\n}\n.auth-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@media (max-width: 560px) {\n  .login-card[_ngcontent-%COMP%] {\n    padding: 36px 24px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [RouterModule, FormsModule], template: `<div class="login-page">
  <div class="login-card">

    <div class="login-logo">
      <img src="https://eq-cdn.equiti-me.com/website/documents/equiti-company-logo.svg"
           alt="Equiti" class="login-logo-img" />
    </div>

    <h2 class="login-title">Login to Your Account</h2>
    <p class="login-sub">Manage your accounts and access insightful reports and technical analysis among many more features.</p>

    <form (ngSubmit)="onSubmit()" #f="ngForm">
      <div class="field-wrap">
        <label class="field-label">Email</label>
        <input class="field-input" type="email" [(ngModel)]="email" name="email"
               placeholder="example@email.com" required />
      </div>

      <button type="submit" class="btn-continue" [disabled]="loading">
        {{ loading ? 'Please wait...' : 'Continue' }}
      </button>
    </form>

  </div>

  <p class="create-account">
    Don't have an account? <a routerLink="/register" class="auth-link">Create Live Account</a>
  </p>
</div>
`, styles: ["/* src/app/features/auth/login/login.component.css */\n.login-page {\n  width: 100%;\n  max-width: 520px;\n  padding-top: 20px;\n}\n.login-card {\n  background: #fff;\n  border-radius: 12px;\n  padding: 70px 100px 50px;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);\n  margin-bottom: 28px;\n  text-align: center;\n}\n.login-logo {\n  margin-bottom: 28px;\n}\n.login-logo-img {\n  height: 44px;\n  width: auto;\n  display: inline-block;\n}\n.login-title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1A1D2E;\n  letter-spacing: -0.5px;\n  margin-bottom: 12px;\n}\n.login-sub {\n  font-size: 15px;\n  color: #6B7280;\n  line-height: 1.65;\n  margin-bottom: 36px;\n}\n.field-wrap {\n  margin-bottom: 20px;\n  text-align: left;\n}\n.field-label {\n  display: block;\n  font-size: 13px;\n  font-weight: 700;\n  color: #6B7280;\n  margin-bottom: 8px;\n}\n.field-input {\n  width: 100%;\n  padding: 14px 16px;\n  border: 1px solid #D1D5DB;\n  border-radius: 8px;\n  font-size: 15px;\n  color: #1A1D2E;\n  background: #fff;\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.field-input:focus {\n  border-color: #00B8A0;\n}\n.field-input::placeholder {\n  color: #9CA3AF;\n}\n.btn-continue {\n  width: 100%;\n  padding: 17px;\n  background: #00B8A0;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 18px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-continue:hover:not(:disabled) {\n  background: #009880;\n}\n.btn-continue:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.create-account {\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  color: #374151;\n}\n.auth-link {\n  color: #1D4ED8;\n  text-decoration: none;\n  font-weight: 600;\n}\n.auth-link:hover {\n  text-decoration: underline;\n}\n@media (max-width: 560px) {\n  .login-card {\n    padding: 36px 24px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/auth/login/login.component.ts", lineNumber: 12 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-IYR5HFZO.js.map

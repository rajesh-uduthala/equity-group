import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-W3ZQDAPL.js";

// src/app/features/auth/register/register.component.ts
var _forTrack0 = ($index, $item) => $item.code;
function RegisterComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275property("value", c_r2.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r2.name);
  }
}
function RegisterComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 44)(1, "line", 45);
  }
}
function RegisterComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 46)(1, "circle", 47);
  }
}
var RegisterComponent = class _RegisterComponent {
  form = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "IN",
    password: "",
    notUS: false,
    captcha: false
  };
  loading = false;
  showPassword = false;
  countries = [
    { code: "IN", name: "India", flag: "\u{1F1EE}\u{1F1F3}", dial: "+91" },
    { code: "US", name: "United States", flag: "\u{1F1FA}\u{1F1F8}", dial: "+1" },
    { code: "GB", name: "United Kingdom", flag: "\u{1F1EC}\u{1F1E7}", dial: "+44" },
    { code: "AE", name: "UAE", flag: "\u{1F1E6}\u{1F1EA}", dial: "+971" },
    { code: "SA", name: "Saudi Arabia", flag: "\u{1F1F8}\u{1F1E6}", dial: "+966" },
    { code: "ZA", name: "South Africa", flag: "\u{1F1FF}\u{1F1E6}", dial: "+27" },
    { code: "KE", name: "Kenya", flag: "\u{1F1F0}\u{1F1EA}", dial: "+254" },
    { code: "NG", name: "Nigeria", flag: "\u{1F1F3}\u{1F1EC}", dial: "+234" },
    { code: "AU", name: "Australia", flag: "\u{1F1E6}\u{1F1FA}", dial: "+61" },
    { code: "CA", name: "Canada", flag: "\u{1F1E8}\u{1F1E6}", dial: "+1" },
    { code: "DE", name: "Germany", flag: "\u{1F1E9}\u{1F1EA}", dial: "+49" },
    { code: "FR", name: "France", flag: "\u{1F1EB}\u{1F1F7}", dial: "+33" },
    { code: "SG", name: "Singapore", flag: "\u{1F1F8}\u{1F1EC}", dial: "+65" },
    { code: "JP", name: "Japan", flag: "\u{1F1EF}\u{1F1F5}", dial: "+81" },
    { code: "BR", name: "Brazil", flag: "\u{1F1E7}\u{1F1F7}", dial: "+55" }
  ];
  get selectedCountry() {
    return this.countries.find((c) => c.code === this.form.country) ?? this.countries[0];
  }
  get selectedFlag() {
    return this.selectedCountry.flag;
  }
  get dialCode() {
    return this.selectedCountry.dial;
  }
  onCountryChange() {
  }
  onSubmit() {
    this.loading = true;
    setTimeout(() => this.loading = false, 1500);
  }
  static \u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 82, vars: 15, consts: [["f", "ngForm"], [1, "reg-page"], [1, "reg-title"], [1, "reg-card"], [3, "ngSubmit"], [1, "field-wrap"], [1, "field-label"], [1, "select-wrap"], [1, "selected-flag"], ["name", "country", 1, "field-select", 3, "ngModelChange", "change", "ngModel"], [3, "value"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", 1, "select-arrow"], ["d", "M6 9l6 6 6-6"], [1, "name-row"], ["type", "text", "name", "firstName", "placeholder", "First Name", 1, "field-input", 3, "ngModelChange", "ngModel"], [1, "field-hint"], ["type", "text", "name", "lastName", "placeholder", "Last Name", 1, "field-input", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "placeholder", "Email address", 1, "field-input", 3, "ngModelChange", "ngModel"], [1, "phone-row"], [1, "phone-flag-wrap"], [1, "pf-flag"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["type", "text", "readonly", "", 1, "field-input", "phone-code", 3, "value"], ["type", "tel", "name", "phone", "placeholder", "Phone number", 1, "field-input", "phone-num", 3, "ngModelChange", "ngModel"], [1, "pw-section-title"], [1, "pw-wrap"], ["name", "password", "placeholder", "Account Password", 1, "field-input", 3, "ngModelChange", "type", "ngModel"], ["type", "button", "tabindex", "-1", 1, "eye-btn", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "checkbox-row"], ["type", "checkbox", "name", "notUS", 1, "checkbox-input", 3, "ngModelChange", "ngModel"], [1, "checkbox-text"], [1, "recaptcha-box"], [1, "recaptcha-inner"], ["type", "checkbox", "name", "captcha", 1, "checkbox-input", 3, "ngModelChange", "ngModel"], [1, "rc-label"], [1, "rc-logo"], [1, "rc-brand"], [1, "rc-sub"], ["type", "submit", 1, "btn-continue", 3, "disabled"], [1, "legal-text"], ["href", "#", 1, "legal-link"], [1, "already-account"], ["routerLink", "/login", 1, "auth-link"], ["d", "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"], ["x1", "1", "y1", "1", "x2", "23", "y2", "23"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"]], template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "h1", 2);
      \u0275\u0275text(2, "Registration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "form", 4, 0);
      \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_4_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(6, "div", 5)(7, "label", 6);
      \u0275\u0275text(8, "Country / Region of Residence");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 7)(10, "span", 8);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "select", 9);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_select_ngModelChange_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.country, $event) || (ctx.form.country = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("change", function RegisterComponent_Template_select_change_12_listener() {
        return ctx.onCountryChange();
      });
      \u0275\u0275repeaterCreate(13, RegisterComponent_For_14_Template, 2, 2, "option", 10, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 11);
      \u0275\u0275element(16, "path", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(17, "div", 13)(18, "div", 5)(19, "label", 6);
      \u0275\u0275text(20, "First Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "input", 14);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.firstName, $event) || (ctx.form.firstName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span", 15);
      \u0275\u0275text(23, "As per your Passport / Government ID");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 5)(25, "label", 6);
      \u0275\u0275text(26, "Last Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_27_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.lastName, $event) || (ctx.form.lastName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "span", 15);
      \u0275\u0275text(29, "As per your Passport / Government ID");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 5)(31, "label", 6);
      \u0275\u0275text(32, "Email address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "input", 17);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_33_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.email, $event) || (ctx.form.email = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 18)(35, "div", 19)(36, "span", 20);
      \u0275\u0275text(37);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(38, "svg", 21);
      \u0275\u0275element(39, "path", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(40, "input", 22);
      \u0275\u0275elementStart(41, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_41_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.phone, $event) || (ctx.form.phone = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "h3", 24);
      \u0275\u0275text(43, "Create your account password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 5)(45, "label", 6);
      \u0275\u0275text(46, "Account Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 25)(48, "input", 26);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_48_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.password, $event) || (ctx.form.password = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "button", 27);
      \u0275\u0275listener("click", function RegisterComponent_Template_button_click_49_listener() {
        return ctx.showPassword = !ctx.showPassword;
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(50, "svg", 28);
      \u0275\u0275conditionalCreate(51, RegisterComponent_Conditional_51_Template, 2, 0)(52, RegisterComponent_Conditional_52_Template, 2, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(53, "span", 15);
      \u0275\u0275text(54, "This password will be used to login to your MetaTrader trading account and the MyEquiti Client Portal.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "label", 29)(56, "input", 30);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_56_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.notUS, $event) || (ctx.form.notUS = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "span", 31);
      \u0275\u0275text(58, "I declare and confirm that I am not a citizen or resident of the US for tax purposes.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 32)(60, "label", 33)(61, "input", 34);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_61_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.captcha, $event) || (ctx.form.captcha = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "span", 35);
      \u0275\u0275text(63, "I'm not a robot");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 36)(65, "span", 37);
      \u0275\u0275text(66, "reCAPTCHA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "span", 38);
      \u0275\u0275text(68, "Privacy - Terms");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(69, "button", 39);
      \u0275\u0275text(70);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "p", 40);
      \u0275\u0275text(72, " Based on the selected country of residence, you are registering with Equiti, regulated by the Seychelles FSA. By clicking Continue you confirm that you have read, understood, and agree with all the information in the ");
      \u0275\u0275elementStart(73, "a", 41);
      \u0275\u0275text(74, "Client Agreement");
      \u0275\u0275elementEnd();
      \u0275\u0275text(75, ". ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "p", 40);
      \u0275\u0275text(77, " Equiti Brokerage (Seychelles) Limited is authorized by the Financial Services Authority of Seychelles under license number SD064 as a Securities Dealers Broker. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(78, "p", 42);
      \u0275\u0275text(79, " Already have an account? ");
      \u0275\u0275elementStart(80, "a", 43);
      \u0275\u0275text(81, "Log in");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.selectedFlag);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.form.country);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.countries);
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.firstName);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.lastName);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.email);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.selectedFlag);
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.dialCode);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.form.phone);
      \u0275\u0275advance(7);
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
      \u0275\u0275twoWayProperty("ngModel", ctx.form.password);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.showPassword ? 51 : 52);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.notUS);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.captcha);
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "PROCESSING..." : "CONTINUE", " ");
    }
  }, dependencies: [RouterModule, RouterLink, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ["\n.reg-page[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 600px;\n  padding-top: 8px;\n}\n.reg-title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  color: #1A1D2E;\n  margin-bottom: 20px;\n  letter-spacing: -0.5px;\n}\n.reg-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 32px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);\n  margin-bottom: 20px;\n}\n.field-wrap[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.field-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 6px;\n}\n.field-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 14px;\n  border: 1px solid #D1D5DB;\n  border-radius: 8px;\n  font-size: 15px;\n  color: #1A1D2E;\n  background: #fff;\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.field-input[_ngcontent-%COMP%]:focus {\n  border-color: #00B8A0;\n}\n.field-input[_ngcontent-%COMP%]::placeholder {\n  color: #9CA3AF;\n}\n.field-hint[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #9CA3AF;\n  margin-top: 4px;\n}\n.select-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  border: 1px solid #D1D5DB;\n  border-radius: 8px;\n  background: #fff;\n  overflow: hidden;\n  transition: border-color 0.15s;\n}\n.select-wrap[_ngcontent-%COMP%]:focus-within {\n  border-color: #00B8A0;\n}\n.selected-flag[_ngcontent-%COMP%] {\n  padding: 0 10px 0 14px;\n  font-size: 18px;\n  pointer-events: none;\n  flex-shrink: 0;\n}\n.field-select[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px 32px 12px 4px;\n  border: none;\n  background: transparent;\n  font-size: 15px;\n  color: #1A1D2E;\n  outline: none;\n  appearance: none;\n  font-family: inherit;\n  cursor: pointer;\n}\n.select-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  color: #6B7280;\n  pointer-events: none;\n  flex-shrink: 0;\n}\n.name-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.phone-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  align-items: stretch;\n}\n.phone-flag-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 12px 10px;\n  border: 1px solid #D1D5DB;\n  border-radius: 8px;\n  font-size: 18px;\n  cursor: pointer;\n  background: #fff;\n  flex-shrink: 0;\n  transition: border-color 0.15s;\n}\n.phone-flag-wrap[_ngcontent-%COMP%]:hover {\n  border-color: #00B8A0;\n}\n.pf-flag[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.phone-code[_ngcontent-%COMP%] {\n  width: 64px;\n  text-align: center;\n  flex-shrink: 0;\n  color: #374151;\n}\n.phone-num[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.pw-section-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1A1D2E;\n  margin-bottom: 12px;\n}\n.pw-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.pw-wrap[_ngcontent-%COMP%]   .field-input[_ngcontent-%COMP%] {\n  padding-right: 44px;\n}\n.eye-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #9CA3AF;\n  padding: 0;\n  display: flex;\n  align-items: center;\n}\n.eye-btn[_ngcontent-%COMP%]:hover {\n  color: #374151;\n}\n.checkbox-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n.checkbox-input[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  margin-top: 2px;\n  accent-color: #00B8A0;\n  cursor: pointer;\n}\n.checkbox-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #374151;\n  line-height: 1.55;\n}\n.recaptcha-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid #D1D5DB;\n  border-radius: 4px;\n  padding: 14px 16px;\n  margin-bottom: 24px;\n  background: #F9FAFB;\n}\n.recaptcha-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n}\n.rc-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #374151;\n}\n.rc-logo[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.rc-brand[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 700;\n  color: #6B7280;\n}\n.rc-sub[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 9px;\n  color: #9CA3AF;\n}\n.btn-continue[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px;\n  background: #00B8A0;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  cursor: pointer;\n  margin-bottom: 20px;\n  transition: background 0.15s;\n}\n.btn-continue[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #009880;\n}\n.btn-continue[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.legal-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6B7280;\n  line-height: 1.65;\n  margin-bottom: 10px;\n}\n.legal-link[_ngcontent-%COMP%] {\n  color: #1D4ED8;\n  text-decoration: underline;\n}\n.already-account[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 15px;\n  font-weight: 600;\n  color: #374151;\n  padding: 8px 0;\n}\n.auth-link[_ngcontent-%COMP%] {\n  color: #1D4ED8;\n  text-decoration: none;\n  font-weight: 600;\n}\n.auth-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@media (max-width: 520px) {\n  .name-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .reg-card[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n}\n/*# sourceMappingURL=register.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{ selector: "app-register", standalone: true, imports: [RouterModule, FormsModule], template: `<div class="reg-page">
  <h1 class="reg-title">Registration</h1>

  <div class="reg-card">
    <form (ngSubmit)="onSubmit()" #f="ngForm">

      <!-- Country -->
      <div class="field-wrap">
        <label class="field-label">Country / Region of Residence</label>
        <div class="select-wrap">
          <span class="selected-flag">{{ selectedFlag }}</span>
          <select [(ngModel)]="form.country" name="country" (change)="onCountryChange()" class="field-select">
            @for (c of countries; track c.code) {
              <option [value]="c.code"> {{ c.name }}</option>
            }
          </select>
          <svg class="select-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
        </div>
      </div>

      <!-- Name row -->
      <div class="name-row">
        <div class="field-wrap">
          <label class="field-label">First Name</label>
          <input class="field-input" type="text" [(ngModel)]="form.firstName" name="firstName" placeholder="First Name" />
          <span class="field-hint">As per your Passport / Government ID</span>
        </div>
        <div class="field-wrap">
          <label class="field-label">Last Name</label>
          <input class="field-input" type="text" [(ngModel)]="form.lastName" name="lastName" placeholder="Last Name" />
          <span class="field-hint">As per your Passport / Government ID</span>
        </div>
      </div>

      <!-- Email -->
      <div class="field-wrap">
        <label class="field-label">Email address</label>
        <input class="field-input" type="email" [(ngModel)]="form.email" name="email" placeholder="Email address" />
      </div>

      <!-- Phone -->
      <div class="phone-row">
        <div class="phone-flag-wrap">
          <span class="pf-flag">{{ selectedFlag }}</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <input class="field-input phone-code" type="text" [value]="dialCode" readonly />
        <input class="field-input phone-num" type="tel" [(ngModel)]="form.phone" name="phone" placeholder="Phone number" />
      </div>

      <!-- Password section -->
      <h3 class="pw-section-title">Create your account password</h3>
      <div class="field-wrap">
        <label class="field-label">Account Password</label>
        <div class="pw-wrap">
          <input class="field-input" [type]="showPassword ? 'text' : 'password'"
                 [(ngModel)]="form.password" name="password" placeholder="Account Password" />
          <button type="button" class="eye-btn" (click)="showPassword = !showPassword" tabindex="-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              @if (showPassword) {
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                <line x1="1" y1="1" x2="23" y2="23"/>
              } @else {
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              }
            </svg>
          </button>
        </div>
        <span class="field-hint">This password will be used to login to your MetaTrader trading account and the MyEquiti Client Portal.</span>
      </div>

      <!-- US person checkbox -->
      <label class="checkbox-row">
        <input type="checkbox" [(ngModel)]="form.notUS" name="notUS" class="checkbox-input" />
        <span class="checkbox-text">I declare and confirm that I am not a citizen or resident of the US for tax purposes.</span>
      </label>

      <!-- reCAPTCHA placeholder -->
      <div class="recaptcha-box">
        <label class="recaptcha-inner">
          <input type="checkbox" [(ngModel)]="form.captcha" name="captcha" class="checkbox-input" />
          <span class="rc-label">I'm not a robot</span>
        </label>
        <div class="rc-logo">
          <span class="rc-brand">reCAPTCHA</span>
          <span class="rc-sub">Privacy - Terms</span>
        </div>
      </div>

      <!-- Submit -->
      <button type="submit" class="btn-continue" [disabled]="loading">
        {{ loading ? 'PROCESSING...' : 'CONTINUE' }}
      </button>

      <!-- Legal -->
      <p class="legal-text">
        Based on the selected country of residence, you are registering with Equiti, regulated by the Seychelles FSA. By clicking Continue you confirm that you have read, understood, and agree with all the information in the <a href="#" class="legal-link">Client Agreement</a>.
      </p>
      <p class="legal-text">
        Equiti Brokerage (Seychelles) Limited is authorized by the Financial Services Authority of Seychelles under license number SD064 as a Securities Dealers Broker.
      </p>

    </form>
  </div>

  <p class="already-account">
    Already have an account? <a routerLink="/login" class="auth-link">Log in</a>
  </p>
</div>
`, styles: ["/* src/app/features/auth/register/register.component.css */\n.reg-page {\n  width: 100%;\n  max-width: 600px;\n  padding-top: 8px;\n}\n.reg-title {\n  font-size: 32px;\n  font-weight: 700;\n  color: #1A1D2E;\n  margin-bottom: 20px;\n  letter-spacing: -0.5px;\n}\n.reg-card {\n  background: #fff;\n  border-radius: 12px;\n  padding: 32px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);\n  margin-bottom: 20px;\n}\n.field-wrap {\n  margin-bottom: 18px;\n}\n.field-label {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 6px;\n}\n.field-input {\n  width: 100%;\n  padding: 12px 14px;\n  border: 1px solid #D1D5DB;\n  border-radius: 8px;\n  font-size: 15px;\n  color: #1A1D2E;\n  background: #fff;\n  outline: none;\n  font-family: inherit;\n  transition: border-color 0.15s;\n}\n.field-input:focus {\n  border-color: #00B8A0;\n}\n.field-input::placeholder {\n  color: #9CA3AF;\n}\n.field-hint {\n  display: block;\n  font-size: 12px;\n  color: #9CA3AF;\n  margin-top: 4px;\n}\n.select-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n  border: 1px solid #D1D5DB;\n  border-radius: 8px;\n  background: #fff;\n  overflow: hidden;\n  transition: border-color 0.15s;\n}\n.select-wrap:focus-within {\n  border-color: #00B8A0;\n}\n.selected-flag {\n  padding: 0 10px 0 14px;\n  font-size: 18px;\n  pointer-events: none;\n  flex-shrink: 0;\n}\n.field-select {\n  flex: 1;\n  padding: 12px 32px 12px 4px;\n  border: none;\n  background: transparent;\n  font-size: 15px;\n  color: #1A1D2E;\n  outline: none;\n  appearance: none;\n  font-family: inherit;\n  cursor: pointer;\n}\n.select-arrow {\n  position: absolute;\n  right: 12px;\n  color: #6B7280;\n  pointer-events: none;\n  flex-shrink: 0;\n}\n.name-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.phone-row {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 18px;\n  align-items: stretch;\n}\n.phone-flag-wrap {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 12px 10px;\n  border: 1px solid #D1D5DB;\n  border-radius: 8px;\n  font-size: 18px;\n  cursor: pointer;\n  background: #fff;\n  flex-shrink: 0;\n  transition: border-color 0.15s;\n}\n.phone-flag-wrap:hover {\n  border-color: #00B8A0;\n}\n.pf-flag {\n  font-size: 18px;\n}\n.phone-code {\n  width: 64px;\n  text-align: center;\n  flex-shrink: 0;\n  color: #374151;\n}\n.phone-num {\n  flex: 1;\n}\n.pw-section-title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1A1D2E;\n  margin-bottom: 12px;\n}\n.pw-wrap {\n  position: relative;\n}\n.pw-wrap .field-input {\n  padding-right: 44px;\n}\n.eye-btn {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #9CA3AF;\n  padding: 0;\n  display: flex;\n  align-items: center;\n}\n.eye-btn:hover {\n  color: #374151;\n}\n.checkbox-row {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n.checkbox-input {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  margin-top: 2px;\n  accent-color: #00B8A0;\n  cursor: pointer;\n}\n.checkbox-text {\n  font-size: 14px;\n  color: #374151;\n  line-height: 1.55;\n}\n.recaptcha-box {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid #D1D5DB;\n  border-radius: 4px;\n  padding: 14px 16px;\n  margin-bottom: 24px;\n  background: #F9FAFB;\n}\n.recaptcha-inner {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n}\n.rc-label {\n  font-size: 14px;\n  color: #374151;\n}\n.rc-logo {\n  text-align: right;\n}\n.rc-brand {\n  display: block;\n  font-size: 11px;\n  font-weight: 700;\n  color: #6B7280;\n}\n.rc-sub {\n  display: block;\n  font-size: 9px;\n  color: #9CA3AF;\n}\n.btn-continue {\n  width: 100%;\n  padding: 15px;\n  background: #00B8A0;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  cursor: pointer;\n  margin-bottom: 20px;\n  transition: background 0.15s;\n}\n.btn-continue:hover:not(:disabled) {\n  background: #009880;\n}\n.btn-continue:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.legal-text {\n  font-size: 12px;\n  color: #6B7280;\n  line-height: 1.65;\n  margin-bottom: 10px;\n}\n.legal-link {\n  color: #1D4ED8;\n  text-decoration: underline;\n}\n.already-account {\n  text-align: center;\n  font-size: 15px;\n  font-weight: 600;\n  color: #374151;\n  padding: 8px 0;\n}\n.auth-link {\n  color: #1D4ED8;\n  text-decoration: none;\n  font-weight: 600;\n}\n.auth-link:hover {\n  text-decoration: underline;\n}\n@media (max-width: 520px) {\n  .name-row {\n    grid-template-columns: 1fr;\n  }\n  .reg-card {\n    padding: 20px;\n  }\n}\n/*# sourceMappingURL=register.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/features/auth/register/register.component.ts", lineNumber: 12 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-JUTRTPJK.js.map

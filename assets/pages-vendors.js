'use strict';



;define("pages-vendors/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "pages-vendors/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"pages-vendors/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class App extends _application.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);
      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);
      _defineProperty(this, "Resolver", _emberResolver.default);
    }
  }
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = _exports.default = App;
});
;define("pages-vendors/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-accordion", ["exports", "@appuniversum/ember-appuniversum/components/au-accordion"], function (_exports, _auAccordion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auAccordion.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-accordion"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-alert", ["exports", "@appuniversum/ember-appuniversum/components/au-alert"], function (_exports, _auAlert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auAlert.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-alert"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-app", ["exports", "@appuniversum/ember-appuniversum/components/au-app"], function (_exports, _auApp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auApp.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-app"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-badge", ["exports", "@appuniversum/ember-appuniversum/components/au-badge"], function (_exports, _auBadge) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auBadge.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-badge"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-body-container", ["exports", "@appuniversum/ember-appuniversum/components/au-body-container"], function (_exports, _auBodyContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auBodyContainer.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-body-container"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-brand", ["exports", "@appuniversum/ember-appuniversum/components/au-brand"], function (_exports, _auBrand) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auBrand.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-brand"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-button-group", ["exports", "@appuniversum/ember-appuniversum/components/au-button-group"], function (_exports, _auButtonGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auButtonGroup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-button-group"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-button", ["exports", "@appuniversum/ember-appuniversum/components/au-button"], function (_exports, _auButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auButton.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-button"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-card", ["exports", "@appuniversum/ember-appuniversum/components/au-card"], function (_exports, _auCard) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auCard.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-card"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-checkbox-group", ["exports", "@appuniversum/ember-appuniversum/components/au-checkbox-group"], function (_exports, _auCheckboxGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auCheckboxGroup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-checkbox-group"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-checkbox", ["exports", "@appuniversum/ember-appuniversum/components/au-checkbox"], function (_exports, _auCheckbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auCheckbox.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-checkbox"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-content-header", ["exports", "@appuniversum/ember-appuniversum/components/au-content-header"], function (_exports, _auContentHeader) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auContentHeader.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-content-header"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-content", ["exports", "@appuniversum/ember-appuniversum/components/au-content"], function (_exports, _auContent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auContent.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-content"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-data-table-content-body", ["exports", "@appuniversum/ember-appuniversum/components/au-data-table/content-body"], function (_exports, _contentBody) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _contentBody.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-data-table/content-body"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-data-table-content-header", ["exports", "@appuniversum/ember-appuniversum/components/au-data-table/content-header"], function (_exports, _contentHeader) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _contentHeader.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-data-table/content-header"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-data-table-content", ["exports", "@appuniversum/ember-appuniversum/components/au-data-table/content"], function (_exports, _content) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-data-table/content"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-data-table-menu-general", ["exports", "@appuniversum/ember-appuniversum/components/au-data-table/menu-general"], function (_exports, _menuGeneral) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _menuGeneral.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-data-table/menu-general"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-data-table-menu-selected", ["exports", "@appuniversum/ember-appuniversum/components/au-data-table/menu-selected"], function (_exports, _menuSelected) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _menuSelected.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-data-table/menu-selected"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-data-table-menu", ["exports", "@appuniversum/ember-appuniversum/components/au-data-table/menu"], function (_exports, _menu) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-data-table/menu"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-data-table-number-pagination", ["exports", "@appuniversum/ember-appuniversum/components/au-data-table/number-pagination"], function (_exports, _numberPagination) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _numberPagination.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-data-table/number-pagination"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-data-table-text-search", ["exports", "@appuniversum/ember-appuniversum/components/au-data-table/text-search"], function (_exports, _textSearch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _textSearch.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-data-table/text-search"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-data-table-th-sortable", ["exports", "@appuniversum/ember-appuniversum/components/au-data-table/th-sortable"], function (_exports, _thSortable) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _thSortable.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-data-table/th-sortable"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-data-table", ["exports", "@appuniversum/ember-appuniversum/components/au-data-table"], function (_exports, _auDataTable) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auDataTable.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-data-table"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-date-input", ["exports", "@appuniversum/ember-appuniversum/components/au-date-input"], function (_exports, _auDateInput) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auDateInput.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-date-input"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-date-picker", ["exports", "@appuniversum/ember-appuniversum/components/au-date-picker"], function (_exports, _auDatePicker) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auDatePicker.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-date-picker"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-dropdown", ["exports", "@appuniversum/ember-appuniversum/components/au-dropdown"], function (_exports, _auDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auDropdown.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-dropdown"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-fieldset", ["exports", "@appuniversum/ember-appuniversum/components/au-fieldset"], function (_exports, _auFieldset) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auFieldset.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-fieldset"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-file-card", ["exports", "@appuniversum/ember-appuniversum/components/au-file-card"], function (_exports, _auFileCard) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auFileCard.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-file-card"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-file-upload", ["exports", "@appuniversum/ember-appuniversum/components/au-file-upload"], function (_exports, _auFileUpload) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auFileUpload.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-file-upload"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-form-row", ["exports", "@appuniversum/ember-appuniversum/components/au-form-row"], function (_exports, _auFormRow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auFormRow.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-form-row"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-heading", ["exports", "@appuniversum/ember-appuniversum/components/au-heading"], function (_exports, _auHeading) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auHeading.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-heading"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-help-text", ["exports", "@appuniversum/ember-appuniversum/components/au-help-text"], function (_exports, _auHelpText) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auHelpText.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-help-text"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-hr", ["exports", "@appuniversum/ember-appuniversum/components/au-hr"], function (_exports, _auHr) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auHr.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-hr"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-icon", ["exports", "@appuniversum/ember-appuniversum/components/au-icon"], function (_exports, _auIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auIcon.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-icon"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-input", ["exports", "@appuniversum/ember-appuniversum/components/au-input"], function (_exports, _auInput) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auInput.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-input"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-label", ["exports", "@appuniversum/ember-appuniversum/components/au-label"], function (_exports, _auLabel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auLabel.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-label"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-link-external", ["exports", "@appuniversum/ember-appuniversum/components/au-link-external"], function (_exports, _auLinkExternal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auLinkExternal.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-link-external"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-link", ["exports", "@appuniversum/ember-appuniversum/components/au-link"], function (_exports, _auLink) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auLink.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-link"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-list", ["exports", "@appuniversum/ember-appuniversum/components/au-list"], function (_exports, _auList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auList.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-list"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-loader", ["exports", "@appuniversum/ember-appuniversum/components/au-loader"], function (_exports, _auLoader) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auLoader.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-loader"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-main-container", ["exports", "@appuniversum/ember-appuniversum/components/au-main-container"], function (_exports, _auMainContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auMainContainer.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-main-container"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-main-footer", ["exports", "@appuniversum/ember-appuniversum/components/au-main-footer"], function (_exports, _auMainFooter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auMainFooter.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-main-footer"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-main-header", ["exports", "@appuniversum/ember-appuniversum/components/au-main-header"], function (_exports, _auMainHeader) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auMainHeader.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-main-header"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-modal-container", ["exports", "@appuniversum/ember-appuniversum/components/au-modal-container"], function (_exports, _auModalContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auModalContainer.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-modal-container"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-modal", ["exports", "@appuniversum/ember-appuniversum/components/au-modal"], function (_exports, _auModal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auModal.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-modal"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-navigation-link", ["exports", "@appuniversum/ember-appuniversum/components/au-navigation-link"], function (_exports, _auNavigationLink) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auNavigationLink.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-navigation-link"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-panel", ["exports", "@appuniversum/ember-appuniversum/components/au-panel"], function (_exports, _auPanel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auPanel.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-panel"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-pill", ["exports", "@appuniversum/ember-appuniversum/components/au-pill"], function (_exports, _auPill) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auPill.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-pill"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-radio-group", ["exports", "@appuniversum/ember-appuniversum/components/au-radio-group"], function (_exports, _auRadioGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auRadioGroup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-radio-group"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-radio", ["exports", "@appuniversum/ember-appuniversum/components/au-radio"], function (_exports, _auRadio) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auRadio.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-radio"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-table", ["exports", "@appuniversum/ember-appuniversum/components/au-table"], function (_exports, _auTable) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auTable.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-table"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-tabs", ["exports", "@appuniversum/ember-appuniversum/components/au-tabs"], function (_exports, _auTabs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auTabs.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-tabs"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-textarea", ["exports", "@appuniversum/ember-appuniversum/components/au-textarea"], function (_exports, _auTextarea) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auTextarea.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-textarea"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-time-picker", ["exports", "@appuniversum/ember-appuniversum/components/au-time-picker"], function (_exports, _auTimePicker) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auTimePicker.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-time-picker"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-toaster", ["exports", "@appuniversum/ember-appuniversum/components/au-toaster"], function (_exports, _auToaster) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auToaster.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-toaster"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-toggle-switch", ["exports", "@appuniversum/ember-appuniversum/components/au-toggle-switch"], function (_exports, _auToggleSwitch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auToggleSwitch.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-toggle-switch"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/au-toolbar", ["exports", "@appuniversum/ember-appuniversum/components/au-toolbar"], function (_exports, _auToolbar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auToolbar.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/components/au-toolbar"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/code-block", ["exports", "ember-prism/components/code-block"], function (_exports, _codeBlock) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _codeBlock.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-prism/components/code-block"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/code-inline", ["exports", "ember-prism/components/code-inline"], function (_exports, _codeInline) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _codeInline.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-prism/components/code-inline"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/data-table-content-body", ["exports", "ember-data-table/components/data-table-content-body"], function (_exports, _dataTableContentBody) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dataTableContentBody.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-data-table/components/data-table-content-body"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/data-table-content-header", ["exports", "ember-data-table/components/data-table-content-header"], function (_exports, _dataTableContentHeader) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dataTableContentHeader.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-data-table/components/data-table-content-header"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/data-table-content", ["exports", "ember-data-table/components/data-table-content"], function (_exports, _dataTableContent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dataTableContent.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-data-table/components/data-table-content"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/data-table-menu-general", ["exports", "ember-data-table/components/data-table-menu-general"], function (_exports, _dataTableMenuGeneral) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dataTableMenuGeneral.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-data-table/components/data-table-menu-general"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/data-table-menu-selected", ["exports", "ember-data-table/components/data-table-menu-selected"], function (_exports, _dataTableMenuSelected) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dataTableMenuSelected.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-data-table/components/data-table-menu-selected"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/data-table-menu", ["exports", "ember-data-table/components/data-table-menu"], function (_exports, _dataTableMenu) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dataTableMenu.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-data-table/components/data-table-menu"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/data-table", ["exports", "ember-data-table/components/data-table"], function (_exports, _dataTable) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dataTable.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-data-table/components/data-table"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/default-data-table-content-body", ["exports", "ember-data-table/components/default-data-table-content-body"], function (_exports, _defaultDataTableContentBody) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _defaultDataTableContentBody.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-data-table/components/default-data-table-content-body"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/file-dropzone", ["exports", "ember-file-upload/components/file-dropzone"], function (_exports, _fileDropzone) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fileDropzone.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-file-upload/components/file-dropzone"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/footer", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <AuMainFooter>
    <AuHeading @level="3" @skin="4">
      Gelinkt Notuleren: Vendor en API integrator documentatie
    </AuHeading>
    <AuContent @skin="small">
      <AuAlert
        class="au-u-margin-top"
        @title="Vragen?"
        @skin="warning"
        @icon="question-circle"
        @size="default"
        @closeable={{false}}>
        <p>
          Voor meer informatie kan u ons contacteren op <AuLinkExternal href="mailto:digitaalABB@vlaanderen.be" @icon="mail" @iconAlignment="left">digitaalABB@vlaanderen.be</AuLinkExternal>.
        </p>
      </AuAlert>
      <p>
        Uitgegeven door <AuLinkExternal href="https://www.vlaanderen.be/organisaties/administratieve-diensten-van-de-vlaamse-overheid/beleidsdomein-kanselarij-en-bestuur/agentschap-binnenlands-bestuur" @icon="external" @iconAlignment="left">Agentschap Binnenlands Bestuur</AuLinkExternal>
      </p>
      <ul class="au-c-list-horizontal">
        <li class="au-c-list-horizontal__item">
          <AuLinkExternal href="https://www.vlaanderen.be/over-vlaanderenbe/disclaimer" @skin="secondary" @icon="external" @iconAlignment="left">Disclaimer</AuLinkExternal>
        </li>
        <li class="au-c-list-horizontal__item">
          <AuLinkExternal href="https://www.vlaanderen.be/over-vlaanderenbe/cookieverklaring-vlaanderenbe" @skin="secondary" @icon="external" @iconAlignment="left">Cookieverklaring</AuLinkExternal>
        </li>
      </ul>
    </AuContent>
  </AuMainFooter>
  
  */
  {
    "id": "72Id0pcG",
    "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@level\",\"@skin\"],[\"3\",\"4\"]],[[\"default\"],[[[[1,\"\\n    Gelinkt Notuleren: Vendor en API integrator documentatie\\n  \"]],[]]]]],[1,\"\\n  \"],[8,[39,2],null,[[\"@skin\"],[\"small\"]],[[\"default\"],[[[[1,\"\\n    \"],[8,[39,3],[[24,0,\"au-u-margin-top\"]],[[\"@title\",\"@skin\",\"@icon\",\"@size\",\"@closeable\"],[\"Vragen?\",\"warning\",\"question-circle\",\"default\",false]],[[\"default\"],[[[[1,\"\\n      \"],[10,2],[12],[1,\"\\n        Voor meer informatie kan u ons contacteren op \"],[8,[39,4],[[24,6,\"mailto:digitaalABB@vlaanderen.be\"]],[[\"@icon\",\"@iconAlignment\"],[\"mail\",\"left\"]],[[\"default\"],[[[[1,\"digitaalABB@vlaanderen.be\"]],[]]]]],[1,\".\\n      \"],[13],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[10,2],[12],[1,\"\\n      Uitgegeven door \"],[8,[39,4],[[24,6,\"https://www.vlaanderen.be/organisaties/administratieve-diensten-van-de-vlaamse-overheid/beleidsdomein-kanselarij-en-bestuur/agentschap-binnenlands-bestuur\"]],[[\"@icon\",\"@iconAlignment\"],[\"external\",\"left\"]],[[\"default\"],[[[[1,\"Agentschap Binnenlands Bestuur\"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"ul\"],[14,0,\"au-c-list-horizontal\"],[12],[1,\"\\n      \"],[10,\"li\"],[14,0,\"au-c-list-horizontal__item\"],[12],[1,\"\\n        \"],[8,[39,4],[[24,6,\"https://www.vlaanderen.be/over-vlaanderenbe/disclaimer\"]],[[\"@skin\",\"@icon\",\"@iconAlignment\"],[\"secondary\",\"external\",\"left\"]],[[\"default\"],[[[[1,\"Disclaimer\"]],[]]]]],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,\"li\"],[14,0,\"au-c-list-horizontal__item\"],[12],[1,\"\\n        \"],[8,[39,4],[[24,6,\"https://www.vlaanderen.be/over-vlaanderenbe/cookieverklaring-vlaanderenbe\"]],[[\"@skin\",\"@icon\",\"@iconAlignment\"],[\"secondary\",\"external\",\"left\"]],[[\"default\"],[[[[1,\"Cookieverklaring\"]],[]]]]],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"au-main-footer\",\"au-heading\",\"au-content\",\"au-alert\",\"au-link-external\"]]",
    "moduleName": "pages-vendors/components/footer.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
;define("pages-vendors/components/menu", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <AuHeading @level="3" @skin="3" class="au-u-margin-top">Structuur</AuHeading>
  <nav class="au-u-padding-top au-u-padding-bottom au-o-grid au-o-grid--small">
    <Menu::Card
      class="au-o-grid__item au-u-1-3@medium au-u-1-2@small"
      @fullSize={{@fullSize}}
      @badgeIcon="pencil"
      @route="docs.meldingsplicht-annotaties"
      @title="Annotaties voor automatische meldingen"
      @content="Annotaties die gebruikt worden bij automatische meldingen van besluiten en documenten."/>
    <Menu::Card
      class="au-o-grid__item au-u-1-3@medium au-u-1-2@small"
      @fullSize={{@fullSize}}
      @badgeIcon="pencil"
      @route="docs.publicatie-annotaties"
      @title="Annotaties voor publicaties"
      @content="Annotaties die gebruikt worden bij de publicatie van Besluiten en documenten opdat ze automatisch geharvest kunnen worden."/>
    <Menu::Card
      class="au-o-grid__item au-u-1-3@medium au-u-1-2@small"
      @fullSize={{@fullSize}}
      @badgeIcon="pencil"
      @route="docs.bijlagen-annotaties"
      @title="Annotaties voor bijlagen bij een Besluit"
      @content="Beschrijft hoe verschillende soorten bijlagen bij een besluit geannoteerd kunnen worden."/>
    <Menu::Card
      class="au-o-grid__item au-u-1-3@medium au-u-1-2@small"
      @fullSize={{@fullSize}}
      @badgeIcon="pencil"
      @href="https://data.vlaanderen.be/doc/applicatieprofiel/besluit-publicatie/"
      @title="Besluit Publicatie"
      @content="Dit applicatieprofiel definieert een specificatie voor de publicatie van notulen en besluiten van bestuursorgaan."
      @external={{true}}/>
    <Menu::Card
      class="au-o-grid__item au-u-1-3@medium au-u-1-2@small"
      @fullSize={{@fullSize}}
      @badgeIcon="pencil"
      @href="https://data.vlaanderen.be/doc/applicatieprofiel/mandatendatabank/"
      @title="Mandatendatabank"
      @content="Dit applicatieprofiel definieert een specificatie voor een gelinkte mandatendatabank op basis van gelinkte besluiten."
      @external={{true}}/>
    <Menu::Card
      class="au-o-grid__item au-u-1-3@medium au-u-1-2@small"
      @fullSize={{@fullSize}}
      @badgeIcon="pencil"
      @route="docs.leidinggevenden-annotaties"
      @title="Leidinggevendendatabank"
      @content="De leidinggevenden databank volgt het applicatieprofiel mandatendatabank, maar werd uitgebreid met enkele subklassen en eigenschappen."/>
  </nav>
  
  <AuHeading @level="3" @skin="3" class="au-u-margin-top">Insturen</AuHeading>
  <nav class="au-u-padding-top au-u-padding-bottom au-o-grid au-o-grid--small">
    <Menu::Card
      class="au-o-grid__item au-u-1-3@medium au-u-1-2@small"
      @fullSize={{@fullSize}}
      @badgeIcon="upload"
      @route="docs.meldingsplicht"
      @title="Meldingsplicht API"
      @content="Deel van een API om een nieuwe melding aan te maken in Loket voor Lokale Besturen op basis van een publicatie. Indien al de nodige velden ingevuld zijn, kan de melding automatisch verzonden worden."/>
    <Menu::Card
      class="au-o-grid__item au-u-1-3@medium au-u-1-2@small"
      @fullSize={{@fullSize}}
      @badgeIcon="upload"
      @route="docs.berichtencentrum"
      @title="Berichtencentrum API"
      @subtitle="[CONCEPT]"
      @content="Deel van een API om de module Berichtencentrum te integreren. Het opsturen van berichten door middel van het publiceren van een RDFa document en het melden van de publieke URL."/>
  </nav>
  
  <AuHeading @level="3" @skin="3" class="au-u-margin-top">Opvragen</AuHeading>
  <nav class="au-u-padding-top au-u-padding-bottom au-o-grid au-o-grid--small">
    <Menu::Card
      class="au-o-grid__item au-u-1-3@medium au-u-1-2@small"
      @fullSize={{@fullSize}}
      @badgeIcon="download"
      @route="docs.vendor-sparql"
      @title="Vendor SPARQL API"
      @content="Generieke documentatie voor het uitvoeren van SPARQL query's via de Vendor SPARQL API, van toepassing op verscheidene applicaties."/>
    <Menu::Card
      class="au-o-grid__item au-u-1-3@medium au-u-1-2@small"
      @fullSize={{@fullSize}}
      @badgeIcon="download"
      @route="docs.meldingsplicht-sparql"
      @title="Meldingsplicht SPARQL API"
      @subtitle="[CONCEPT]"
      @content="Het opvragen van statusgegevens over eerder uitgevoerde meldingen in Loket via de Vendor SPARQL API."/>
    <Menu::Card
      class="au-o-grid__item au-u-1-3@medium au-u-1-2@small"
      @fullSize={{@fullSize}}
      @badgeIcon="download"
      @route="docs.berichtencentrum-sparql"
      @title="Berichtencentrum SPARQL API"
      @subtitle="[CONCEPT]"
      @content="Het opvragen van Berichten en Conversaties in Loket met oog op integratie via de Vendor SPARQL API."/>
    <Menu::Card
      class="au-o-grid__item au-u-1-3@medium au-u-1-2@small"
      @fullSize={{@fullSize}}
      @badgeIcon="download"
      @route="docs.erediensten-toezichtsdatabank-sparql"
      @title="Erediensten Toezichtsdatabank SPARQL API"
      @subtitle="[CONCEPT]"
      @content="Het opvragen van Besluiten over Erediensten via de Vendor SPARQL API."/>
    <Menu::Card
      class="au-o-grid__item au-u-1-3@medium au-u-1-2@small"
      @fullSize={{@fullSize}}
      @badgeIcon="download"
      @route="docs.rijksregisternummer-api"
      @title="Rijksregisternummer naar Persoon URI API"
      @content="Bevragen van de URI van een persoon op basis van diens rijksregisternummer en bestuurseenheid."/>
    <Menu::Card
      class="au-o-grid__item au-u-1-3@medium au-u-1-2@small"
      @fullSize={{@fullSize}}
      @badgeIcon="download"
      @route="docs.centrale-vindplaats-sparql"
      @title="Centrale Vindplaats SPARQL endpoint"
      @content="Endpoint om met SPARQL publieke data te bevragen."/>
  </nav>
  */
  {
    "id": "U2zR1xin",
    "block": "[[[8,[39,0],[[24,0,\"au-u-margin-top\"]],[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Structuur\"]],[]]]]],[1,\"\\n\"],[10,\"nav\"],[14,0,\"au-u-padding-top au-u-padding-bottom au-o-grid au-o-grid--small\"],[12],[1,\"\\n  \"],[8,[39,1],[[24,0,\"au-o-grid__item au-u-1-3@medium au-u-1-2@small\"]],[[\"@fullSize\",\"@badgeIcon\",\"@route\",\"@title\",\"@content\"],[[30,1],\"pencil\",\"docs.meldingsplicht-annotaties\",\"Annotaties voor automatische meldingen\",\"Annotaties die gebruikt worden bij automatische meldingen van besluiten en documenten.\"]],null],[1,\"\\n  \"],[8,[39,1],[[24,0,\"au-o-grid__item au-u-1-3@medium au-u-1-2@small\"]],[[\"@fullSize\",\"@badgeIcon\",\"@route\",\"@title\",\"@content\"],[[30,1],\"pencil\",\"docs.publicatie-annotaties\",\"Annotaties voor publicaties\",\"Annotaties die gebruikt worden bij de publicatie van Besluiten en documenten opdat ze automatisch geharvest kunnen worden.\"]],null],[1,\"\\n  \"],[8,[39,1],[[24,0,\"au-o-grid__item au-u-1-3@medium au-u-1-2@small\"]],[[\"@fullSize\",\"@badgeIcon\",\"@route\",\"@title\",\"@content\"],[[30,1],\"pencil\",\"docs.bijlagen-annotaties\",\"Annotaties voor bijlagen bij een Besluit\",\"Beschrijft hoe verschillende soorten bijlagen bij een besluit geannoteerd kunnen worden.\"]],null],[1,\"\\n  \"],[8,[39,1],[[24,0,\"au-o-grid__item au-u-1-3@medium au-u-1-2@small\"]],[[\"@fullSize\",\"@badgeIcon\",\"@href\",\"@title\",\"@content\",\"@external\"],[[30,1],\"pencil\",\"https://data.vlaanderen.be/doc/applicatieprofiel/besluit-publicatie/\",\"Besluit Publicatie\",\"Dit applicatieprofiel definieert een specificatie voor de publicatie van notulen en besluiten van bestuursorgaan.\",true]],null],[1,\"\\n  \"],[8,[39,1],[[24,0,\"au-o-grid__item au-u-1-3@medium au-u-1-2@small\"]],[[\"@fullSize\",\"@badgeIcon\",\"@href\",\"@title\",\"@content\",\"@external\"],[[30,1],\"pencil\",\"https://data.vlaanderen.be/doc/applicatieprofiel/mandatendatabank/\",\"Mandatendatabank\",\"Dit applicatieprofiel definieert een specificatie voor een gelinkte mandatendatabank op basis van gelinkte besluiten.\",true]],null],[1,\"\\n  \"],[8,[39,1],[[24,0,\"au-o-grid__item au-u-1-3@medium au-u-1-2@small\"]],[[\"@fullSize\",\"@badgeIcon\",\"@route\",\"@title\",\"@content\"],[[30,1],\"pencil\",\"docs.leidinggevenden-annotaties\",\"Leidinggevendendatabank\",\"De leidinggevenden databank volgt het applicatieprofiel mandatendatabank, maar werd uitgebreid met enkele subklassen en eigenschappen.\"]],null],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],[[24,0,\"au-u-margin-top\"]],[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Insturen\"]],[]]]]],[1,\"\\n\"],[10,\"nav\"],[14,0,\"au-u-padding-top au-u-padding-bottom au-o-grid au-o-grid--small\"],[12],[1,\"\\n  \"],[8,[39,1],[[24,0,\"au-o-grid__item au-u-1-3@medium au-u-1-2@small\"]],[[\"@fullSize\",\"@badgeIcon\",\"@route\",\"@title\",\"@content\"],[[30,1],\"upload\",\"docs.meldingsplicht\",\"Meldingsplicht API\",\"Deel van een API om een nieuwe melding aan te maken in Loket voor Lokale Besturen op basis van een publicatie. Indien al de nodige velden ingevuld zijn, kan de melding automatisch verzonden worden.\"]],null],[1,\"\\n  \"],[8,[39,1],[[24,0,\"au-o-grid__item au-u-1-3@medium au-u-1-2@small\"]],[[\"@fullSize\",\"@badgeIcon\",\"@route\",\"@title\",\"@subtitle\",\"@content\"],[[30,1],\"upload\",\"docs.berichtencentrum\",\"Berichtencentrum API\",\"[CONCEPT]\",\"Deel van een API om de module Berichtencentrum te integreren. Het opsturen van berichten door middel van het publiceren van een RDFa document en het melden van de publieke URL.\"]],null],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],[[24,0,\"au-u-margin-top\"]],[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Opvragen\"]],[]]]]],[1,\"\\n\"],[10,\"nav\"],[14,0,\"au-u-padding-top au-u-padding-bottom au-o-grid au-o-grid--small\"],[12],[1,\"\\n  \"],[8,[39,1],[[24,0,\"au-o-grid__item au-u-1-3@medium au-u-1-2@small\"]],[[\"@fullSize\",\"@badgeIcon\",\"@route\",\"@title\",\"@content\"],[[30,1],\"download\",\"docs.vendor-sparql\",\"Vendor SPARQL API\",\"Generieke documentatie voor het uitvoeren van SPARQL query's via de Vendor SPARQL API, van toepassing op verscheidene applicaties.\"]],null],[1,\"\\n  \"],[8,[39,1],[[24,0,\"au-o-grid__item au-u-1-3@medium au-u-1-2@small\"]],[[\"@fullSize\",\"@badgeIcon\",\"@route\",\"@title\",\"@subtitle\",\"@content\"],[[30,1],\"download\",\"docs.meldingsplicht-sparql\",\"Meldingsplicht SPARQL API\",\"[CONCEPT]\",\"Het opvragen van statusgegevens over eerder uitgevoerde meldingen in Loket via de Vendor SPARQL API.\"]],null],[1,\"\\n  \"],[8,[39,1],[[24,0,\"au-o-grid__item au-u-1-3@medium au-u-1-2@small\"]],[[\"@fullSize\",\"@badgeIcon\",\"@route\",\"@title\",\"@subtitle\",\"@content\"],[[30,1],\"download\",\"docs.berichtencentrum-sparql\",\"Berichtencentrum SPARQL API\",\"[CONCEPT]\",\"Het opvragen van Berichten en Conversaties in Loket met oog op integratie via de Vendor SPARQL API.\"]],null],[1,\"\\n  \"],[8,[39,1],[[24,0,\"au-o-grid__item au-u-1-3@medium au-u-1-2@small\"]],[[\"@fullSize\",\"@badgeIcon\",\"@route\",\"@title\",\"@subtitle\",\"@content\"],[[30,1],\"download\",\"docs.erediensten-toezichtsdatabank-sparql\",\"Erediensten Toezichtsdatabank SPARQL API\",\"[CONCEPT]\",\"Het opvragen van Besluiten over Erediensten via de Vendor SPARQL API.\"]],null],[1,\"\\n  \"],[8,[39,1],[[24,0,\"au-o-grid__item au-u-1-3@medium au-u-1-2@small\"]],[[\"@fullSize\",\"@badgeIcon\",\"@route\",\"@title\",\"@content\"],[[30,1],\"download\",\"docs.rijksregisternummer-api\",\"Rijksregisternummer naar Persoon URI API\",\"Bevragen van de URI van een persoon op basis van diens rijksregisternummer en bestuurseenheid.\"]],null],[1,\"\\n  \"],[8,[39,1],[[24,0,\"au-o-grid__item au-u-1-3@medium au-u-1-2@small\"]],[[\"@fullSize\",\"@badgeIcon\",\"@route\",\"@title\",\"@content\"],[[30,1],\"download\",\"docs.centrale-vindplaats-sparql\",\"Centrale Vindplaats SPARQL endpoint\",\"Endpoint om met SPARQL publieke data te bevragen.\"]],null],[1,\"\\n\"],[13]],[\"@fullSize\"],false,[\"au-heading\",\"menu/card\"]]",
    "moduleName": "pages-vendors/components/menu.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
;define("pages-vendors/components/menu/card", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div ...attributes>
    <AuCard
      @flex={{true}}
      @textCenter={{false}}
      @shadow={{true}}
      @size="small"
      @standOut={{false}}
      @expandable={{false}}
      @isExpanded={{true}}
      @isOpenInitially={{true}}
      @manualControl={{false}}
      as |c|>
      <c.header
        @badgeIcon={{@badgeIcon}}
        @badgeSkin="brand"
        @badgeSize="default">
        <AuHeading @level="2" @skin="4">
          {{@title}}
        </AuHeading>
        <p>
          {{@subtitle}}
        </p>
      </c.header>
      <c.content>
        {{#if @fullSize}}
          <p>
            {{@content}}
          </p>
        {{/if}}
      </c.content>
      <c.footer class="au-u-text-right">
        {{#if @external}}
          <AuLinkExternal
            href={{@href}}
            @skin="button"
            @icon="external"
            @iconAlignment="right"
            @hideText={{false}}
            @width="default"
            @active={{false}}>
            Open externe documentatie
          </AuLinkExternal>
        {{else}}
          <AuLink
            @route={{@route}}
            @skin="button"
            @icon="chevron-right"
            @iconAlignment="right"
            @hideText={{false}}
            @width="default"
            @active={{false}}>
            Open documentatie
          </AuLink>
        {{/if}}
      </c.footer>
    </AuCard>
  </div>
  */
  {
    "id": "lV1ij4NW",
    "block": "[[[11,0],[17,1],[12],[1,\"\\n  \"],[8,[39,0],null,[[\"@flex\",\"@textCenter\",\"@shadow\",\"@size\",\"@standOut\",\"@expandable\",\"@isExpanded\",\"@isOpenInitially\",\"@manualControl\"],[true,false,true,\"small\",false,false,true,true,false]],[[\"default\"],[[[[1,\"\\n    \"],[8,[30,2,[\"header\"]],null,[[\"@badgeIcon\",\"@badgeSkin\",\"@badgeSize\"],[[30,3],\"brand\",\"default\"]],[[\"default\"],[[[[1,\"\\n      \"],[8,[39,1],null,[[\"@level\",\"@skin\"],[\"2\",\"4\"]],[[\"default\"],[[[[1,\"\\n        \"],[1,[30,4]],[1,\"\\n      \"]],[]]]]],[1,\"\\n      \"],[10,2],[12],[1,\"\\n        \"],[1,[30,5]],[1,\"\\n      \"],[13],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[30,2,[\"content\"]],null,null,[[\"default\"],[[[[1,\"\\n\"],[41,[30,6],[[[1,\"        \"],[10,2],[12],[1,\"\\n          \"],[1,[30,7]],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],null],[1,\"    \"]],[]]]]],[1,\"\\n    \"],[8,[30,2,[\"footer\"]],[[24,0,\"au-u-text-right\"]],null,[[\"default\"],[[[[1,\"\\n\"],[41,[30,8],[[[1,\"        \"],[8,[39,3],[[16,6,[30,9]]],[[\"@skin\",\"@icon\",\"@iconAlignment\",\"@hideText\",\"@width\",\"@active\"],[\"button\",\"external\",\"right\",false,\"default\",false]],[[\"default\"],[[[[1,\"\\n          Open externe documentatie\\n        \"]],[]]]]],[1,\"\\n\"]],[]],[[[1,\"        \"],[8,[39,4],null,[[\"@route\",\"@skin\",\"@icon\",\"@iconAlignment\",\"@hideText\",\"@width\",\"@active\"],[[30,10],\"button\",\"chevron-right\",\"right\",false,\"default\",false]],[[\"default\"],[[[[1,\"\\n          Open documentatie\\n        \"]],[]]]]],[1,\"\\n\"]],[]]],[1,\"    \"]],[]]]]],[1,\"\\n  \"]],[2]]]]],[1,\"\\n\"],[13]],[\"&attrs\",\"c\",\"@badgeIcon\",\"@title\",\"@subtitle\",\"@fullSize\",\"@content\",\"@external\",\"@href\",\"@route\"],false,[\"au-card\",\"au-heading\",\"if\",\"au-link-external\",\"au-link\"]]",
    "moduleName": "pages-vendors/components/menu/card.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
;define("pages-vendors/components/number-pagination", ["exports", "ember-data-table/components/number-pagination"], function (_exports, _numberPagination) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _numberPagination.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-data-table/components/number-pagination"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/scroll-link", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@ember/template-factory"], function (_exports, _component, _component2, _object, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@ember/object",0,"@ember/component"eaimeta@70e063a35619d71f
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <a {{on "click" this.performScroll}} href="">{{yield}}</a>
  */
  {
    "id": "MQoS7PWu",
    "block": "[[[11,3],[24,6,\"\"],[4,[38,0],[\"click\",[30,0,[\"performScroll\"]]],null],[12],[18,1,null],[13]],[\"&default\"],false,[\"on\",\"yield\"]]",
    "moduleName": "pages-vendors/components/scroll-link.hbs",
    "isStrictMode": false
  });
  let ScrollLinkComponent = _exports.default = (_class = class ScrollLinkComponent extends _component2.default {
    performScroll(event) {
      const element = document.getElementById(this.args.scrollToId);
      if (element) element.scrollIntoView();
      event.preventDefault();
    }
  }, (_applyDecoratedDescriptor(_class.prototype, "performScroll", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "performScroll"), _class.prototype)), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, ScrollLinkComponent);
});
;define("pages-vendors/components/snippet-toggle", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <AuCard
    ...attributes
    @flex={{false}}
    @textCenter={{false}}
    @shadow={{true}}
    @size="small"
    @standOut={{false}}
    @expandable={{true}}
    @isExpanded={{false}}
    @isOpenInitially={{false}}
    @manualControl={{false}}
    as |c|>
    <c.header
      @badgeIcon=""
      @badgeSkin=""
      @badgeSize="">
      <AuHeading @level="4" @skin="functional">
        Toon/verberg het code snippet
      </AuHeading>
    </c.header>
    <c.content>
      <Snippet @snippetFilename={{@snippetFilename}} />
    </c.content>
  </AuCard>
  
  */
  {
    "id": "Xl/EKx0D",
    "block": "[[[8,[39,0],[[17,1]],[[\"@flex\",\"@textCenter\",\"@shadow\",\"@size\",\"@standOut\",\"@expandable\",\"@isExpanded\",\"@isOpenInitially\",\"@manualControl\"],[false,false,true,\"small\",false,true,false,false,false]],[[\"default\"],[[[[1,\"\\n  \"],[8,[30,2,[\"header\"]],null,[[\"@badgeIcon\",\"@badgeSkin\",\"@badgeSize\"],[\"\",\"\",\"\"]],[[\"default\"],[[[[1,\"\\n    \"],[8,[39,1],null,[[\"@level\",\"@skin\"],[\"4\",\"functional\"]],[[\"default\"],[[[[1,\"\\n      Toon/verberg het code snippet\\n    \"]],[]]]]],[1,\"\\n  \"]],[]]]]],[1,\"\\n  \"],[8,[30,2,[\"content\"]],null,null,[[\"default\"],[[[[1,\"\\n    \"],[8,[39,2],null,[[\"@snippetFilename\"],[[30,3]]],null],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"]],[2]]]]],[1,\"\\n\"]],[\"&attrs\",\"c\",\"@snippetFilename\"],false,[\"au-card\",\"au-heading\",\"snippet\"]]",
    "moduleName": "pages-vendors/components/snippet-toggle.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
;define("pages-vendors/components/snippet", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    {{#let (get-code-snippet @snippetFilename) as |snippet|}}
    <CodeBlock @language={{snippet.language}} @code={{snippet.source}} />
  {{/let}}
  
  */
  {
    "id": "17g2PjXu",
    "block": "[[[44,[[28,[37,1],[[30,1]],null]],[[[1,\"  \"],[8,[39,2],null,[[\"@language\",\"@code\"],[[30,2,[\"language\"]],[30,2,[\"source\"]]]],null],[1,\"\\n\"]],[2]]]],[\"@snippetFilename\",\"snippet\"],false,[\"let\",\"get-code-snippet\",\"code-block\"]]",
    "moduleName": "pages-vendors/components/snippet.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
;define("pages-vendors/components/text-search", ["exports", "ember-data-table/components/text-search"], function (_exports, _textSearch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _textSearch.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-data-table/components/text-search"eaimeta@70e063a35619d71f
});
;define("pages-vendors/components/th-sortable", ["exports", "ember-data-table/components/th-sortable"], function (_exports, _thSortable) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _thSortable.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-data-table/components/th-sortable"eaimeta@70e063a35619d71f
});
;define("pages-vendors/container-debug-adapter", ["exports", "ember-resolver/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _containerDebugAdapter.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-resolver/container-debug-adapter"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/abs", ["exports", "ember-math-helpers/helpers/abs"], function (_exports, _abs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "abs", {
    enumerable: true,
    get: function () {
      return _abs.abs;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _abs.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/abs"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/acos", ["exports", "ember-math-helpers/helpers/acos"], function (_exports, _acos) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "acos", {
    enumerable: true,
    get: function () {
      return _acos.acos;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _acos.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/acos"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/acosh", ["exports", "ember-math-helpers/helpers/acosh"], function (_exports, _acosh) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "acosh", {
    enumerable: true,
    get: function () {
      return _acosh.acosh;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _acosh.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/acosh"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/add", ["exports", "ember-math-helpers/helpers/add"], function (_exports, _add) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "add", {
    enumerable: true,
    get: function () {
      return _add.add;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _add.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/add"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/and"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/app-version", ["exports", "@ember/component/helper", "pages-vendors/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"pages-vendors/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }
    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }
    return match ? match[0] : version;
  }
  var _default = _exports.default = (0, _helper.helper)(appVersion);
});
;define("pages-vendors/helpers/append", ["exports", "ember-composable-helpers/helpers/append"], function (_exports, _append) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "append", {
    enumerable: true,
    get: function () {
      return _append.append;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _append.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/append"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/asin", ["exports", "ember-math-helpers/helpers/asin"], function (_exports, _asin) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "asin", {
    enumerable: true,
    get: function () {
      return _asin.asin;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _asin.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/asin"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/asinh", ["exports", "ember-math-helpers/helpers/asinh"], function (_exports, _asinh) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "asinh", {
    enumerable: true,
    get: function () {
      return _asinh.asinh;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _asinh.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/asinh"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/atan", ["exports", "ember-math-helpers/helpers/atan"], function (_exports, _atan) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "atan", {
    enumerable: true,
    get: function () {
      return _atan.atan;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _atan.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/atan"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/atan2", ["exports", "ember-math-helpers/helpers/atan2"], function (_exports, _atan) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "atan2", {
    enumerable: true,
    get: function () {
      return _atan.atan2;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _atan.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/atan2"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/atanh", ["exports", "ember-math-helpers/helpers/atanh"], function (_exports, _atanh) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "atanh", {
    enumerable: true,
    get: function () {
      return _atanh.atanh;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _atanh.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/atanh"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/call", ["exports", "ember-composable-helpers/helpers/call"], function (_exports, _call) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "call", {
    enumerable: true,
    get: function () {
      return _call.call;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _call.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/call"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-concurrency/helpers/cancel-all"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/cbrt", ["exports", "ember-math-helpers/helpers/cbrt"], function (_exports, _cbrt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "cbrt", {
    enumerable: true,
    get: function () {
      return _cbrt.cbrt;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cbrt.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/cbrt"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/ceil", ["exports", "ember-math-helpers/helpers/ceil"], function (_exports, _ceil) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "ceil", {
    enumerable: true,
    get: function () {
      return _ceil.ceil;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ceil.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/ceil"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/chunk", ["exports", "ember-composable-helpers/helpers/chunk"], function (_exports, _chunk) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "chunk", {
    enumerable: true,
    get: function () {
      return _chunk.chunk;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _chunk.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/chunk"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/clz32", ["exports", "ember-math-helpers/helpers/clz32"], function (_exports, _clz) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "clz32", {
    enumerable: true,
    get: function () {
      return _clz.clz32;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _clz.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/clz32"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/compact", ["exports", "ember-composable-helpers/helpers/compact"], function (_exports, _compact) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _compact.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/compact"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/compute", ["exports", "ember-composable-helpers/helpers/compute"], function (_exports, _compute) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "compute", {
    enumerable: true,
    get: function () {
      return _compute.compute;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _compute.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/compute"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/cos", ["exports", "ember-math-helpers/helpers/cos"], function (_exports, _cos) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "cos", {
    enumerable: true,
    get: function () {
      return _cos.cos;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cos.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/cos"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/cosh", ["exports", "ember-math-helpers/helpers/cosh"], function (_exports, _cosh) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "cosh", {
    enumerable: true,
    get: function () {
      return _cosh.cosh;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cosh.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/cosh"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/dec", ["exports", "ember-composable-helpers/helpers/dec"], function (_exports, _dec) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "dec", {
    enumerable: true,
    get: function () {
      return _dec.dec;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dec.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/dec"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/div", ["exports", "ember-math-helpers/helpers/div"], function (_exports, _div) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _div.default;
    }
  });
  Object.defineProperty(_exports, "div", {
    enumerable: true,
    get: function () {
      return _div.div;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/div"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/drop", ["exports", "ember-composable-helpers/helpers/drop"], function (_exports, _drop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _drop.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/drop"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/entries", ["exports", "ember-composable-helpers/helpers/entries"], function (_exports, _entries) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _entries.default;
    }
  });
  Object.defineProperty(_exports, "entries", {
    enumerable: true,
    get: function () {
      return _entries.entries;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/entries"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/eq", ["exports", "ember-truth-helpers/helpers/eq"], function (_exports, _eq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _eq.default;
    }
  });
  Object.defineProperty(_exports, "equal", {
    enumerable: true,
    get: function () {
      return _eq.equal;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/eq"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/exp", ["exports", "ember-math-helpers/helpers/exp"], function (_exports, _exp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _exp.default;
    }
  });
  Object.defineProperty(_exports, "exp", {
    enumerable: true,
    get: function () {
      return _exp.exp;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/exp"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/expm1", ["exports", "ember-math-helpers/helpers/expm1"], function (_exports, _expm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _expm.default;
    }
  });
  Object.defineProperty(_exports, "expm1", {
    enumerable: true,
    get: function () {
      return _expm.expm1;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/expm1"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/file-queue", ["exports", "ember-file-upload/helpers/file-queue"], function (_exports, _fileQueue) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fileQueue.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-file-upload/helpers/file-queue"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/filter-by", ["exports", "ember-composable-helpers/helpers/filter-by"], function (_exports, _filterBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _filterBy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/filter-by"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/filter", ["exports", "ember-composable-helpers/helpers/filter"], function (_exports, _filter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _filter.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/filter"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/find-by", ["exports", "ember-composable-helpers/helpers/find-by"], function (_exports, _findBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _findBy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/find-by"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/flatten", ["exports", "ember-composable-helpers/helpers/flatten"], function (_exports, _flatten) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _flatten.default;
    }
  });
  Object.defineProperty(_exports, "flatten", {
    enumerable: true,
    get: function () {
      return _flatten.flatten;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/flatten"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/floor", ["exports", "ember-math-helpers/helpers/floor"], function (_exports, _floor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _floor.default;
    }
  });
  Object.defineProperty(_exports, "floor", {
    enumerable: true,
    get: function () {
      return _floor.floor;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/floor"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/from-entries", ["exports", "ember-composable-helpers/helpers/from-entries"], function (_exports, _fromEntries) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fromEntries.default;
    }
  });
  Object.defineProperty(_exports, "fromEntries", {
    enumerable: true,
    get: function () {
      return _fromEntries.fromEntries;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/from-entries"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/fround", ["exports", "ember-math-helpers/helpers/fround"], function (_exports, _fround) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fround.default;
    }
  });
  Object.defineProperty(_exports, "fround", {
    enumerable: true,
    get: function () {
      return _fround.fround;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/fround"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/gcd", ["exports", "ember-math-helpers/helpers/gcd"], function (_exports, _gcd) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gcd.default;
    }
  });
  Object.defineProperty(_exports, "gcd", {
    enumerable: true,
    get: function () {
      return _gcd.gcd;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/gcd"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/get-code-snippet", ["exports", "ember-code-snippet/helpers/get-code-snippet"], function (_exports, _getCodeSnippet) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _getCodeSnippet.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-code-snippet/helpers/get-code-snippet"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/group-by", ["exports", "ember-composable-helpers/helpers/group-by"], function (_exports, _groupBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _groupBy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/group-by"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/gt"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/gte"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/has-next", ["exports", "ember-composable-helpers/helpers/has-next"], function (_exports, _hasNext) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hasNext.default;
    }
  });
  Object.defineProperty(_exports, "hasNext", {
    enumerable: true,
    get: function () {
      return _hasNext.hasNext;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/has-next"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/has-previous", ["exports", "ember-composable-helpers/helpers/has-previous"], function (_exports, _hasPrevious) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hasPrevious.default;
    }
  });
  Object.defineProperty(_exports, "hasPrevious", {
    enumerable: true,
    get: function () {
      return _hasPrevious.hasPrevious;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/has-previous"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/hypot", ["exports", "ember-math-helpers/helpers/hypot"], function (_exports, _hypot) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hypot.default;
    }
  });
  Object.defineProperty(_exports, "hypot", {
    enumerable: true,
    get: function () {
      return _hypot.hypot;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/hypot"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/imul", ["exports", "ember-math-helpers/helpers/imul"], function (_exports, _imul) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _imul.default;
    }
  });
  Object.defineProperty(_exports, "imul", {
    enumerable: true,
    get: function () {
      return _imul.imul;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/imul"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/inc", ["exports", "ember-composable-helpers/helpers/inc"], function (_exports, _inc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inc.default;
    }
  });
  Object.defineProperty(_exports, "inc", {
    enumerable: true,
    get: function () {
      return _inc.inc;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/inc"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/includes", ["exports", "ember-composable-helpers/helpers/includes"], function (_exports, _includes) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _includes.default;
    }
  });
  Object.defineProperty(_exports, "includes", {
    enumerable: true,
    get: function () {
      return _includes.includes;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/includes"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/intersect", ["exports", "ember-composable-helpers/helpers/intersect"], function (_exports, _intersect) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _intersect.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/intersect"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/invoke", ["exports", "ember-composable-helpers/helpers/invoke"], function (_exports, _invoke) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _invoke.default;
    }
  });
  Object.defineProperty(_exports, "invoke", {
    enumerable: true,
    get: function () {
      return _invoke.invoke;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/invoke"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-array"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-empty"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-equal"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/join", ["exports", "ember-composable-helpers/helpers/join"], function (_exports, _join) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _join.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/join"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/keys", ["exports", "ember-composable-helpers/helpers/keys"], function (_exports, _keys) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _keys.default;
    }
  });
  Object.defineProperty(_exports, "keys", {
    enumerable: true,
    get: function () {
      return _keys.keys;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/keys"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/lcm", ["exports", "ember-math-helpers/helpers/lcm"], function (_exports, _lcm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lcm.default;
    }
  });
  Object.defineProperty(_exports, "lcm", {
    enumerable: true,
    get: function () {
      return _lcm.lcm;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/lcm"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/log-e", ["exports", "ember-math-helpers/helpers/log-e"], function (_exports, _logE) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _logE.default;
    }
  });
  Object.defineProperty(_exports, "logE", {
    enumerable: true,
    get: function () {
      return _logE.logE;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/log-e"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/log10", ["exports", "ember-math-helpers/helpers/log10"], function (_exports, _log) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _log.default;
    }
  });
  Object.defineProperty(_exports, "log10", {
    enumerable: true,
    get: function () {
      return _log.log10;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/log10"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/log1p", ["exports", "ember-math-helpers/helpers/log1p"], function (_exports, _log1p) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _log1p.default;
    }
  });
  Object.defineProperty(_exports, "log1p", {
    enumerable: true,
    get: function () {
      return _log1p.log1p;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/log1p"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/log2", ["exports", "ember-math-helpers/helpers/log2"], function (_exports, _log) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _log.default;
    }
  });
  Object.defineProperty(_exports, "log2", {
    enumerable: true,
    get: function () {
      return _log.log2;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/log2"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/lt"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/lte"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/map-by", ["exports", "ember-composable-helpers/helpers/map-by"], function (_exports, _mapBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mapBy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/map-by"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/map", ["exports", "ember-composable-helpers/helpers/map"], function (_exports, _map) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _map.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/map"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/max", ["exports", "ember-math-helpers/helpers/max"], function (_exports, _max) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _max.default;
    }
  });
  Object.defineProperty(_exports, "max", {
    enumerable: true,
    get: function () {
      return _max.max;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/max"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/min", ["exports", "ember-math-helpers/helpers/min"], function (_exports, _min) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _min.default;
    }
  });
  Object.defineProperty(_exports, "min", {
    enumerable: true,
    get: function () {
      return _min.min;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/min"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/mod", ["exports", "ember-math-helpers/helpers/mod"], function (_exports, _mod) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mod.default;
    }
  });
  Object.defineProperty(_exports, "mod", {
    enumerable: true,
    get: function () {
      return _mod.mod;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/mod"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/mult", ["exports", "ember-math-helpers/helpers/mult"], function (_exports, _mult) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mult.default;
    }
  });
  Object.defineProperty(_exports, "mult", {
    enumerable: true,
    get: function () {
      return _mult.mult;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/mult"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/next", ["exports", "ember-composable-helpers/helpers/next"], function (_exports, _next) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _next.default;
    }
  });
  Object.defineProperty(_exports, "next", {
    enumerable: true,
    get: function () {
      return _next.next;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/next"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/noop", ["exports", "ember-composable-helpers/helpers/noop"], function (_exports, _noop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _noop.default;
    }
  });
  Object.defineProperty(_exports, "noop", {
    enumerable: true,
    get: function () {
      return _noop.noop;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/noop"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-eq"], function (_exports, _notEq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEq.default;
    }
  });
  Object.defineProperty(_exports, "notEqualHelper", {
    enumerable: true,
    get: function () {
      return _notEq.notEqualHelper;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/not-eq"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(_exports, "not", {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/not"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/object-at", ["exports", "ember-composable-helpers/helpers/object-at"], function (_exports, _objectAt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _objectAt.default;
    }
  });
  Object.defineProperty(_exports, "objectAt", {
    enumerable: true,
    get: function () {
      return _objectAt.objectAt;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/object-at"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/optional", ["exports", "ember-composable-helpers/helpers/optional"], function (_exports, _optional) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _optional.default;
    }
  });
  Object.defineProperty(_exports, "optional", {
    enumerable: true,
    get: function () {
      return _optional.optional;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/optional"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(_exports, "or", {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/or"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-concurrency/helpers/perform"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/pick", ["exports", "ember-composable-helpers/helpers/pick"], function (_exports, _pick) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pick.default;
    }
  });
  Object.defineProperty(_exports, "pick", {
    enumerable: true,
    get: function () {
      return _pick.pick;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/pick"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/pipe-action", ["exports", "ember-composable-helpers/helpers/pipe-action"], function (_exports, _pipeAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pipeAction.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/pipe-action"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/pipe", ["exports", "ember-composable-helpers/helpers/pipe"], function (_exports, _pipe) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pipe.default;
    }
  });
  Object.defineProperty(_exports, "pipe", {
    enumerable: true,
    get: function () {
      return _pipe.pipe;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/pipe"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/pow", ["exports", "ember-math-helpers/helpers/pow"], function (_exports, _pow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pow.default;
    }
  });
  Object.defineProperty(_exports, "pow", {
    enumerable: true,
    get: function () {
      return _pow.pow;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/pow"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/previous", ["exports", "ember-composable-helpers/helpers/previous"], function (_exports, _previous) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _previous.default;
    }
  });
  Object.defineProperty(_exports, "previous", {
    enumerable: true,
    get: function () {
      return _previous.previous;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/previous"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/queue", ["exports", "ember-composable-helpers/helpers/queue"], function (_exports, _queue) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _queue.default;
    }
  });
  Object.defineProperty(_exports, "queue", {
    enumerable: true,
    get: function () {
      return _queue.queue;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/queue"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/random", ["exports", "ember-math-helpers/helpers/random"], function (_exports, _random) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _random.default;
    }
  });
  Object.defineProperty(_exports, "random", {
    enumerable: true,
    get: function () {
      return _random.random;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/random"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/range", ["exports", "ember-composable-helpers/helpers/range"], function (_exports, _range) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _range.default;
    }
  });
  Object.defineProperty(_exports, "range", {
    enumerable: true,
    get: function () {
      return _range.range;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/range"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/reduce", ["exports", "ember-composable-helpers/helpers/reduce"], function (_exports, _reduce) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _reduce.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/reduce"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/reject-by", ["exports", "ember-composable-helpers/helpers/reject-by"], function (_exports, _rejectBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rejectBy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/reject-by"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/repeat", ["exports", "ember-composable-helpers/helpers/repeat"], function (_exports, _repeat) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _repeat.default;
    }
  });
  Object.defineProperty(_exports, "repeat", {
    enumerable: true,
    get: function () {
      return _repeat.repeat;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/repeat"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/reverse", ["exports", "ember-composable-helpers/helpers/reverse"], function (_exports, _reverse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _reverse.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/reverse"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/round", ["exports", "ember-math-helpers/helpers/round"], function (_exports, _round) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _round.default;
    }
  });
  Object.defineProperty(_exports, "round", {
    enumerable: true,
    get: function () {
      return _round.round;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/round"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/route-idle", ["exports", "ember-app-scheduler/helpers/route-idle"], function (_exports, _routeIdle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _routeIdle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-app-scheduler/helpers/route-idle"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/shuffle", ["exports", "ember-composable-helpers/helpers/shuffle"], function (_exports, _shuffle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _shuffle.default;
    }
  });
  Object.defineProperty(_exports, "shuffle", {
    enumerable: true,
    get: function () {
      return _shuffle.shuffle;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/shuffle"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/sign", ["exports", "ember-math-helpers/helpers/sign"], function (_exports, _sign) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sign.default;
    }
  });
  Object.defineProperty(_exports, "sign", {
    enumerable: true,
    get: function () {
      return _sign.sign;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/sign"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/sin", ["exports", "ember-math-helpers/helpers/sin"], function (_exports, _sin) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sin.default;
    }
  });
  Object.defineProperty(_exports, "sin", {
    enumerable: true,
    get: function () {
      return _sin.sin;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/sin"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/slice", ["exports", "ember-composable-helpers/helpers/slice"], function (_exports, _slice) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _slice.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/slice"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/sort-by", ["exports", "ember-composable-helpers/helpers/sort-by"], function (_exports, _sortBy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sortBy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/sort-by"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/sqrt", ["exports", "ember-math-helpers/helpers/sqrt"], function (_exports, _sqrt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sqrt.default;
    }
  });
  Object.defineProperty(_exports, "sqrt", {
    enumerable: true,
    get: function () {
      return _sqrt.sqrt;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/sqrt"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/sub", ["exports", "ember-math-helpers/helpers/sub"], function (_exports, _sub) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sub.default;
    }
  });
  Object.defineProperty(_exports, "sub", {
    enumerable: true,
    get: function () {
      return _sub.sub;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/sub"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/sum", ["exports", "ember-math-helpers/helpers/sum"], function (_exports, _sum) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sum.default;
    }
  });
  Object.defineProperty(_exports, "sum", {
    enumerable: true,
    get: function () {
      return _sum.sum;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/sum"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/take", ["exports", "ember-composable-helpers/helpers/take"], function (_exports, _take) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _take.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/take"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/tan", ["exports", "ember-math-helpers/helpers/tan"], function (_exports, _tan) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _tan.default;
    }
  });
  Object.defineProperty(_exports, "tan", {
    enumerable: true,
    get: function () {
      return _tan.tan;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/tan"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/tanh", ["exports", "ember-math-helpers/helpers/tanh"], function (_exports, _tanh) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _tanh.default;
    }
  });
  Object.defineProperty(_exports, "tanh", {
    enumerable: true,
    get: function () {
      return _tanh.tanh;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/tanh"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-concurrency/helpers/task"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/toggle-action", ["exports", "ember-composable-helpers/helpers/toggle-action"], function (_exports, _toggleAction) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggleAction.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/toggle-action"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/toggle", ["exports", "ember-composable-helpers/helpers/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
  Object.defineProperty(_exports, "toggle", {
    enumerable: true,
    get: function () {
      return _toggle.toggle;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/toggle"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/trunc", ["exports", "ember-math-helpers/helpers/trunc"], function (_exports, _trunc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _trunc.default;
    }
  });
  Object.defineProperty(_exports, "trunc", {
    enumerable: true,
    get: function () {
      return _trunc.trunc;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/trunc"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/union", ["exports", "ember-composable-helpers/helpers/union"], function (_exports, _union) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _union.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/union"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/values", ["exports", "ember-composable-helpers/helpers/values"], function (_exports, _values) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _values.default;
    }
  });
  Object.defineProperty(_exports, "values", {
    enumerable: true,
    get: function () {
      return _values.values;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/values"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/without", ["exports", "ember-composable-helpers/helpers/without"], function (_exports, _without) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _without.default;
    }
  });
  Object.defineProperty(_exports, "without", {
    enumerable: true,
    get: function () {
      return _without.without;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-composable-helpers/helpers/without"eaimeta@70e063a35619d71f
});
;define("pages-vendors/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/xor"eaimeta@70e063a35619d71f
});
;define("pages-vendors/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "pages-vendors/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"pages-vendors/config/environment"eaimeta@70e063a35619d71f
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = _exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define("pages-vendors/instance-initializers/ember-router-scroll", ["exports", "ember-router-scroll/instance-initializers/ember-router-scroll"], function (_exports, _emberRouterScroll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberRouterScroll.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function () {
      return _emberRouterScroll.initialize;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-router-scroll/instance-initializers/ember-router-scroll"eaimeta@70e063a35619d71f
});
;define("pages-vendors/modifiers/au-date-input", ["exports", "@appuniversum/ember-appuniversum/modifiers/au-date-input"], function (_exports, _auDateInput) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auDateInput.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/modifiers/au-date-input"eaimeta@70e063a35619d71f
});
;define("pages-vendors/modifiers/au-inputmask", ["exports", "@appuniversum/ember-appuniversum/modifiers/au-inputmask"], function (_exports, _auInputmask) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _auInputmask.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/modifiers/au-inputmask"eaimeta@70e063a35619d71f
});
;define("pages-vendors/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/did-insert"eaimeta@70e063a35619d71f
});
;define("pages-vendors/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/did-update"eaimeta@70e063a35619d71f
});
;define("pages-vendors/modifiers/focus-trap", ["exports", "ember-focus-trap/modifiers/focus-trap.js"], function (_exports, _focusTrap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _focusTrap.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-focus-trap/modifiers/focus-trap.js"eaimeta@70e063a35619d71f
});
;define("pages-vendors/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/render-modifiers/modifiers/will-destroy"eaimeta@70e063a35619d71f
});
;define("pages-vendors/router", ["exports", "@ember/routing/router", "pages-vendors/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"pages-vendors/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class Router extends _router.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "location", _environment.default.locationType);
      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }
  }
  _exports.default = Router;
  Router.map(function () {
    this.route('docs', function () {
      //Data annotaties
      this.route('meldingsplicht-annotaties');
      this.route('publicatie-annotaties');
      this.route('bijlagen-annotaties');
      this.route('leidinggevenden-annotaties');
      //Insturen
      this.route('meldingsplicht');
      this.route('berichtencentrum');
      //Opvragen
      this.route('vendor-sparql');
      this.route('meldingsplicht-sparql');
      this.route('berichtencentrum-sparql');
      this.route('erediensten-toezichtsdatabank-sparql');
      this.route('rijksregisternummer-api');
      this.route('centrale-vindplaats-sparql');
    });
    this.route('route-not-found', {
      path: '/*wildcard'
    });
  });
});
;define("pages-vendors/routes/application", ["exports", "@ember/routing/route", "ember-prism"], function (_exports, _route, _emberPrism) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"ember-prism"eaimeta@70e063a35619d71f
  class ApplicationRoute extends _route.default {
    beforeModel() {
      (0, _emberPrism.setup)();
    }
  }
  _exports.default = ApplicationRoute;
});
;define("pages-vendors/routes/docs", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class DocsRoute extends _route.default {}
  _exports.default = DocsRoute;
});
;define("pages-vendors/routes/docs/decision-attachments", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class DocsDecisionAttachmentsRoute extends _route.default {}
  _exports.default = DocsDecisionAttachmentsRoute;
});
;define("pages-vendors/routes/docs/leidinggevenden", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class DocsLeidinggevendenRoute extends _route.default {}
  _exports.default = DocsLeidinggevendenRoute;
});
;define("pages-vendors/routes/docs/publication-annotations", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class DocsPublicationAnnotationsRoute extends _route.default {}
  _exports.default = DocsPublicationAnnotationsRoute;
});
;define("pages-vendors/routes/docs/rijksregisternummer-api", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class DocsRijksregisternummerApiRoute extends _route.default {}
  _exports.default = DocsRijksregisternummerApiRoute;
});
;define("pages-vendors/routes/docs/sparql-endpoint", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class DocsSparqlEndpointRoute extends _route.default {}
  _exports.default = DocsSparqlEndpointRoute;
});
;define("pages-vendors/routes/docs/submission-annotations", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class DocsSubmissionAnnotationsRoute extends _route.default {}
  _exports.default = DocsSubmissionAnnotationsRoute;
});
;define("pages-vendors/routes/docs/submission-api", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class DocsSubmissionApiRoute extends _route.default {}
  _exports.default = DocsSubmissionApiRoute;
});
;define("pages-vendors/routes/docs/vendor-sparql-api", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class DocsVendorSparqlApiRoute extends _route.default {}
  _exports.default = DocsVendorSparqlApiRoute;
});
;define("pages-vendors/routes/editor-iframe-integration", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route"eaimeta@70e063a35619d71f
  class EditorIframeIntegrationRoute extends _route.default {}
  _exports.default = EditorIframeIntegrationRoute;
});
;define("pages-vendors/services/file-queue", ["exports", "ember-file-upload/services/file-queue"], function (_exports, _fileQueue) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fileQueue.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-file-upload/services/file-queue"eaimeta@70e063a35619d71f
});
;define("pages-vendors/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title"eaimeta@70e063a35619d71f
});
;define("pages-vendors/services/router-scroll", ["exports", "ember-router-scroll/services/router-scroll"], function (_exports, _routerScroll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _routerScroll.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-router-scroll/services/router-scroll"eaimeta@70e063a35619d71f
});
;define("pages-vendors/services/toaster", ["exports", "@appuniversum/ember-appuniversum/services/toaster"], function (_exports, _toaster) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toaster.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@appuniversum/ember-appuniversum/services/toaster"eaimeta@70e063a35619d71f
});
;define("pages-vendors/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{outlet}}
  
  */
  {
    "id": "fabU9+Rg",
    "block": "[[[46,[28,[37,1],null,null],null,null,null],[1,\"\\n\"]],[],false,[\"component\",\"-outlet\"]]",
    "moduleName": "pages-vendors/templates/application.hbs",
    "isStrictMode": false
  });
});
;define("pages-vendors/templates/docs", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <AuApp>
    <AuBodyContainer
      id="scroll-to-top-container"
      @scroll={{true}}>
      <div>
        <AuToolbar
          @reverse={{false}}
          @border="bottom"
          @skin="tint"
          @size="large"
          @nowrap={{true}}>
          <AuLink
            @route="index"
            @skin="primary"
            @icon="chevron-left"
            @iconAlignment="left">
            Terug naar overzicht
          </AuLink>
        </AuToolbar>
  
        <AuContent
          class="au-o-region au-o-layout au-u-max-width-medium"
          @skin="default">
          {{outlet}}
        </AuContent>
  
        <AuToolbar
          @reverse={{false}}
          @border="top"
          @skin="tint"
          @size="large"
          @nowrap={{true}}>
          <AuLink
            @route="index"
            @skin="primary"
            @icon="chevron-left"
            @iconAlignment="left">
            Terug naar overzicht
          </AuLink>
        </AuToolbar>
  
        <section class="au-u-background-gray-100">
          <div class="au-o-layout">
            <AuHeading
              @level="2"
              @skin="2">
              Beschikbare documentatie
            </AuHeading>
            <Menu @fullSize={{false}} />
          </div>
        </section>
  
        <Footer />
  
      </div>
    </AuBodyContainer>
  </AuApp>
  
  */
  {
    "id": "/YiBCaxq",
    "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],[[24,1,\"scroll-to-top-container\"]],[[\"@scroll\"],[true]],[[\"default\"],[[[[1,\"\\n    \"],[10,0],[12],[1,\"\\n      \"],[8,[39,2],null,[[\"@reverse\",\"@border\",\"@skin\",\"@size\",\"@nowrap\"],[false,\"bottom\",\"tint\",\"large\",true]],[[\"default\"],[[[[1,\"\\n        \"],[8,[39,3],null,[[\"@route\",\"@skin\",\"@icon\",\"@iconAlignment\"],[\"index\",\"primary\",\"chevron-left\",\"left\"]],[[\"default\"],[[[[1,\"\\n          Terug naar overzicht\\n        \"]],[]]]]],[1,\"\\n      \"]],[]]]]],[1,\"\\n\\n      \"],[8,[39,4],[[24,0,\"au-o-region au-o-layout au-u-max-width-medium\"]],[[\"@skin\"],[\"default\"]],[[\"default\"],[[[[1,\"\\n        \"],[46,[28,[37,6],null,null],null,null,null],[1,\"\\n      \"]],[]]]]],[1,\"\\n\\n      \"],[8,[39,2],null,[[\"@reverse\",\"@border\",\"@skin\",\"@size\",\"@nowrap\"],[false,\"top\",\"tint\",\"large\",true]],[[\"default\"],[[[[1,\"\\n        \"],[8,[39,3],null,[[\"@route\",\"@skin\",\"@icon\",\"@iconAlignment\"],[\"index\",\"primary\",\"chevron-left\",\"left\"]],[[\"default\"],[[[[1,\"\\n          Terug naar overzicht\\n        \"]],[]]]]],[1,\"\\n      \"]],[]]]]],[1,\"\\n\\n      \"],[10,\"section\"],[14,0,\"au-u-background-gray-100\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"au-o-layout\"],[12],[1,\"\\n          \"],[8,[39,7],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"\\n            Beschikbare documentatie\\n          \"]],[]]]]],[1,\"\\n          \"],[8,[39,8],null,[[\"@fullSize\"],[false]],null],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[8,[39,9],null,null,null],[1,\"\\n\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"au-app\",\"au-body-container\",\"au-toolbar\",\"au-link\",\"au-content\",\"component\",\"-outlet\",\"au-heading\",\"menu\",\"footer\"]]",
    "moduleName": "pages-vendors/templates/docs.hbs",
    "isStrictMode": false
  });
});
;define("pages-vendors/templates/docs/berichtencentrum-sparql", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <AuHeading @skin="1" @level="1">Berichtencentrum SPARQL API <em>[CONCEPT]</em></AuHeading>
  
  <p>
    Met deze API is het mogelijk om rechtstreeks SPARQL query's uit te voeren om Berichten en Conversaties uit te lezen van Loket. ABB is de enige die een Conversatie kan initi&euml;ren. Hierop kunnen dan antwoorden gevormd worden en ingezonden via de <LinkTo @route="docs.berichtencentrum">Berichtencentrum API</LinkTo>. Deze API is gebaseerd op de <LinkTo @route="docs.vendor-sparql">Vendor SPARQL API</LinkTo>.
  </p>
  
  <AuHeading @level="2" @skin="2">Verbinden</AuHeading>
  <p>
    De endpoint voor deze API kan bereikt worden via
  </p>
  <CodeBlock @code="https://api.loket.lokaalbestuur.vlaanderen.be" />
  <p>
    Ter volledigheid staat hieronder de volledige lijst aan URL's voor het inloggen, sturen van query's en het uitloggen respectievelijk.
  </p>
  <CodeBlock @code="https://api.loket.lokaalbestuur.vlaanderen.be/vendor/login
  https://api.loket.lokaalbestuur.vlaanderen.be/vendor/sparql
  https://api.loket.lokaalbestuur.vlaanderen.be/vendor/logout" />
  <p>
    <strong>Bekijk zeker de pagina over de <LinkTo @route="docs.vendor-sparql">Vendor SPARQL API</LinkTo> om te leren hoe de SPARQL API werkt!</strong>
  </p>
  
  <AuHeading @level="2" @skin="2">Sturen van query's</AuHeading>
  <p>
    Het soort query's die door deze API kan beantwoord worden kan sterk vari&euml;ren. Het is mogelijk om alle Conversaties en Berichten uit te lezen die op de bestuurseenheid van toepassing zijn en om daarop te filteren met de volledige vrijheid van SPARQL. Elk Bericht heeft zijn bijlagen met de nodige URL voor het downloaden ervan. Bij het inzenden van een nieuw Bericht (zoals beschreven in <LinkTo @route="docs.berichtencentrum">Berichtencentrum API</LinkTo>) wordt er JSON teruggegeven die een URI bevat voor de Job waarin de melding zal worden verwerkt. Deze kan worden gebruikt als onderwerp of voorwerp in SPARQL query's om doelgericht informatie op te vragen over de verwerking van het nieuwe Bericht.
  </p>
  
  <AuHeading @level="3" @skin="3">Voorbeelden</AuHeading>
  <AuHeading @level="4" @skin="4">Opvragen berichten ABB</AuHeading>
  <p>
    De onderstaande SPARQL query toont hoe verzonden berichten van ABB naar een specifiek bestuur die recenter zijn dan een specifieke datum opgevraagd kunnen worden. Voor elk bericht halen we ook de (optionele) URL('s) naar de bijlage(n) op. Noteer dat de URI van ABB de volgende is:
    <CodeInline @code="http://data.lblod.info/id/bestuurseenheden/141d9d6b-54af-4d17-b313-8d1c30bc3f5b" />
  </p>
  <SnippetToggle @snippetFilename="berichtencentrum-sparql/voorbeeld-berichten-na-datum.sparql" />
  
  <AuHeading @level="4" @skin="4">Opvolgen van de ingestuurde melding</AuHeading>
  <p>
    De onderstaande SPARQL query toont hoe u de status van de aangemaakt Job kan opvolgen. Noteer: gegeven de verwerking van een melding een asynchroon proces is kan het even duren alvorens informatie over de Job beschikbaar is. Het staat wel vast dat de informatie ooit beschikbaar wordt. Na de melding kan er dus al gerust opgevraagd worden.
  </p>
  <SnippetToggle @snippetFilename="berichtencentrum-sparql/voorbeeld-job-status.sparql" />
  
  <AuHeading @level="4" @skin="4">Script voor opvolgen melding</AuHeading>
  <p>
    Het volgend voorbeeld is een Bash script dat een sequentie van calls uitvoert om een melding op te volgen. Noteer: het gaat om een zeer na&iuml;eve interpretatie, zeker niet aan te raden in productie.
  </p>
  <SnippetToggle @snippetFilename="berichtencentrum-sparql/voorbeeld-melding-opvolgen.sh" />
  
  <AuHeading @level="4" @skin="4">Script voor downloaden bijlage</AuHeading>
  <p>
    Het volgend voorbeeld illustreert een sequentie van calls om een bijlage te ontdekken en te downloaden. Noteer: Het ontdekken van de bijlagen kan hier op vele manieren, en veel effici&euml;nter met andere SPARQL query's. Noteer nog steeds: het gaat om een zeer na&iuml;eve interpretatie, zeker niet aan te raden in productie.
  </p>
  <SnippetToggle @snippetFilename="berichtencentrum-sparql/voorbeeld-bijlage-downloaden.sh" />
  
  <AuHeading @level="2" @skin="2">Model van beschikbare data</AuHeading>
  
  <a class="block au-u-text-right" href="assets/diagrams/berichtencentrum-sparql.svg">
    <figure>
      <img itemprop="thumbnail" src="assets/diagrams/berichtencentrum-sparql.svg" alt="Diagram van beschikbare gegevens" />
      <figcaption>Diagram van Linked Data van beschikbare gegevens in het endpoint</figcaption>
    </figure>
  </a>
  
  <p>
    In boven- en onderstaand model wordt gebruik gemaakt van volgende prefixen.
  </p>
  
  <AuTable>
    <:header>
    <tr>
      <th>Prefix</th>
      <th>URI</th>
    </tr>
    </:header>
    <:body>
    <tr>
      <td><CodeInline @code="adms" /></td>
      <td><AuLinkExternal href="http://www.w3.org/ns/adms#">http://www.w3.org/ns/adms#</AuLinkExternal></td>
    </tr>
    <tr>
      <td><CodeInline @code="besluit" /></td>
      <td><AuLinkExternal href="http://data.vlaanderen.be/ns/besluit#">http://data.vlaanderen.be/ns/besluit#</AuLinkExternal></td>
    </tr>
    <tr>
      <td><CodeInline @code="dcterms" /></td>
      <td><AuLinkExternal href="http://purl.org/dc/terms/">http://purl.org/dc/terms/</AuLinkExternal></td>
    </tr>
    <tr>
      <td><CodeInline @code="skos" /></td>
      <td><AuLinkExternal href="http://www.w3.org/2004/02/skos/">http://www.w3.org/2004/02/skos/</AuLinkExternal></td>
    </tr>
    <tr>
      <td><CodeInline @code="nfo" /></td>
      <td><AuLinkExternal href="http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#">http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#</AuLinkExternal></td>
    </tr>
    <tr>
      <td><CodeInline @code="nie" /></td>
      <td><AuLinkExternal href="http://www.semanticdesktop.org/ontologies/2007/01/19/nie#">http://www.semanticdesktop.org/ontologies/2007/01/19/nie#</AuLinkExternal></td>
    </tr>
    <tr>
      <td><CodeInline @code="schema" /></td>
      <td>
        <AuLinkExternal href="http://schema.org/">http://schema.org/</AuLinkExternal>
        <br>
        Noteer: geen <em>http<strong>s</strong></em>!
      </td>
    </tr>
    <tr>
      <td><CodeInline @code="rdf" /></td>
      <td><AuLinkExternal href="http://www.w3.org/1999/02/22-rdf-syntax-ns#">http://www.w3.org/1999/02/22-rdf-syntax-ns#</AuLinkExternal></td>
    </tr>
    <tr>
      <td><CodeInline @code="xsd" /></td>
      <td><AuLinkExternal href="http://www.w3.org/2001/XMLSchema#">http://www.w3.org/2001/XMLSchema#</AuLinkExternal></td>
    </tr>
    <tr>
      <td><CodeInline @code="cogs" /></td>
      <td><AuLinkExternal href="http://vocab.deri.ie/cogs#">http://vocab.deri.ie/cogs#</AuLinkExternal></td>
    </tr>
    <tr>
      <td><CodeInline @code="oslc" /></td>
      <td><AuLinkExternal href="http://open-services.net/ns/core#">http://open-services.net/ns/core#</AuLinkExternal></td>
    </tr>
    <tr>
      <td><CodeInline @code="task" /></td>
      <td><AuLinkExternal href="http://redpencil.data.gift/vocabularies/tasks/">http://redpencil.data.gift/vocabularies/tasks/</AuLinkExternal></td>
    </tr>
    </:body>
  </AuTable>
  
  <AuHeading @level="3" @skin="3"><CodeInline @code="schema:Conversation" /></AuHeading>
  <p>
    Bundelt <CodeInline @code="schema:Message" /> rond een specifiek topic. Gesprek, Thread.
  </p>
  <AuHeading @level="4" @skin="4">Eigenschappen</AuHeading>
  <AuTable>
    <:header>
    <tr>
      <th>Naam</th>
      <th>URI</th>
      <th>Verwacht type</th>
      <th>Beschrijving</th>
    </tr>
    </:header>
    <:body>
    <tr>
      <td>hasPart</td>
      <td><CodeInline @code="schema:hasPart" /></td>
      <td><CodeInline @code="schema:Message" /></td>
      <td>Verwijst naar het gelinkt bericht aan de conversatie</td>
    </tr>
    <tr>
      <td>about</td>
      <td><CodeInline @code="schema:about" /></td>
      <td><CodeInline @code="xsd:string" /></td>
      <td>Beschrijft het topic van het gesprek</td>
    </tr>
    <tr>
      <td>Identificator</td>
      <td><CodeInline @code="schema:identifier" /></td>
      <td><CodeInline @code="xsd:string" /></td>
      <td>
        De interne referentie van ABB.
      </td>
    </tr>
    </:body>
  </AuTable>
  
  <AuHeading @level="3" @skin="3"><CodeInline @code="schema:Message" /></AuHeading>
  <p>
    Bericht. De entiteit die de effectieve communicatie bevat.
  </p>
  <AuHeading @level="4" @skin="4">Eigenschappen</AuHeading>
  <AuTable>
    <:header>
    <tr>
      <th>Naam</th>
      <th>URI</th>
      <th>Verwacht type</th>
      <th>Beschrijving</th>
    </tr>
    </:header>
    <:body>
    <tr>
      <td>type</td>
      <td><CodeInline @code="dcterms:type" /></td>
      <td><CodeInline @code="xsd:string" /></td>
      <td>
        Een string die samenvat wat de type communicatie is. <br>
        Voorbeelden hiervan zijn &ldquo;Kennisgeving toezichtsbeslissing&rdquo; of &ldquo;Opvraging&rdquo; <br>
        Noteer hierbij dat het bestuur dit veld <em>niet</em> hoeft te publiceren. <br>
        Alle berichten die binnenkomen vanuit een bestuur zullen automatisch het label &ldquo;Reactie&rdquo; krijgen.
      </td>
    </tr>
    <tr>
      <td>hasPart</td>
      <td><CodeInline @code="nie:hasPart" /></td>
      <td><CodeInline @code="nfo:FileDataObject" /></td>
      <td>Verwijst naar het bijbehorende document of bestand van het bericht, zoals een bijlage.</td>
    </tr>
    <tr>
      <td>sender</td>
      <td><CodeInline @code="schema:sender" /></td>
      <td><CodeInline @code="besluit:Bestuurseenheid" /></td>
      <td>
        Verwijst naar de zender of afzender van het bericht. <br>
        Zie voorbeelden <AuLink @route="docs.centrale-vindplaats-sparql">SPARQL endpoint</AuLink> voor query's.
      </td>
    </tr>
    <tr>
      <td>recipient</td>
      <td><CodeInline @code="schema:recipient" /></td>
      <td><CodeInline @code="besluit:Bestuurseenheid" /></td>
      <td>
        Verwijst naar de ontvanger van het bericht. <br>
        In de prakijk ABB met vaste URI <br>
        <CodeInline @code="<http://data.lblod.info/id/bestuurseenheden/141d9d6b-54af-4d17-b313-8d1c30bc3f5b>"/>
      </td>
    </tr>
    <tr>
      <td>text</td>
      <td><CodeInline @code="schema:text" /></td>
      <td><CodeInline @code="xsd:string" /></td>
      <td>
        De tekst of inhoud van het bericht. <br>
        Dit veld kan opgemaakte tekst bevatten, dit wordt doorgegeven als HTML.
      </td>
    </tr>
    <tr>
      <td>dateSent</td>
      <td><CodeInline @code="schema:dateSent" /></td>
      <td><CodeInline @code="xsd:dateTime" /></td>
      <td>
        Datum en tijd waarop het bericht is verzonden.<br>
        In de praktijk, wanneer de gebruiker op &ldquo;Versturen&rdquo; geklikt heeft.<br>
        Dit is niet de datum van ontvangest bij ABB.<br>
        (Verdere discussie zal nodig zijn om uit te klaren welke timestamp rechtsgeldig is voor de termijnen)
      </td>
    </tr>
    </:body>
  </AuTable>
  
  <AuHeading @level="3" @skin="3"><CodeInline @code="nfo:FileDataObject" /></AuHeading>
  <p>
    Deze klasse wordt gebruikt om bijlagen te annoteren.
  </p>
  <AuHeading @level="4" @skin="4">Eigenschappen</AuHeading>
  <AuTable>
    <:header>
    <tr>
      <th>Naam</th>
      <th>URI</th>
      <th>Verwacht type</th>
      <th>Beschrijving</th>
    </tr>
    </:header>
    <:body>
    <tr>
      <td>created</td>
      <td><CodeInline @code="dcterms:created" /></td>
      <td><CodeInline @code="xsd:dateTime" /></td>
      <td>Datum en tijd waarop het bestand is gecre&euml;erd.</td>
    </tr>
    <tr>
      <td>url</td>
      <td><CodeInline @code="nie:url" /></td>
      <td><CodeInline @code="xsd:anyURI" /></td>
      <td>De locatie van het bestand die gebruikt zal worden om opgehaald te worden</td>
    </tr>
    <tr>
      <td>modified</td>
      <td><CodeInline @code="dcterms:modified" /></td>
      <td><CodeInline @code="xsd:dateTime" /></td>
      <td>Datum en tijd waarop het bestand voor het laatst is gewijzigd.</td>
    </tr>
    <tr>
      <td>fileName</td>
      <td><CodeInline @code="nfo:fileName" /></td>
      <td><CodeInline @code="xsd:string" /></td>
      <td>De mensleesbare naam van het bestand.</td>
    </tr>
    <tr>
      <td>status</td>
      <td><CodeInline @code="adms:status" /></td>
      <td><CodeInline @code="skos:Concept" /></td>
      <td>De status gebruikt bij ABB om de voortgang van de download van de file op te volgen.
        <br>
        De mogelijke statussen vindt u (voorlopig)
        <AuLinkExternal href="https://github.com/lblod/download-url-service#file-download-statuses">hier</AuLinkExternal>
        <br>
        Noteer: deze property wordt genegeerd indien het bestuur dit publiceert.
      </td>
    </tr>
    </:body>
  </AuTable>
  
  <AuHeading @level="3" @skin="3"><CodeInline @code="cogs:Job" /></AuHeading>
  <p>
    Job. Een instantie van deze klasse houdt bij wat de status van de ingestuurde melding is.
  </p>
  <AuHeading @level="4" @skin="4">Eigenschappen</AuHeading>
  <AuTable>
    <:header>
    <tr>
      <th>Naam</th>
      <th>URI</th>
      <th>Verwacht type</th>
      <th>Beschrijving</th>
    </tr>
    </:header>
    <:body>
    <tr>
      <td>status</td>
      <td><CodeInline @code="adms:status" /></td>
      <td><CodeInline @code="skos:Concept" /></td>
      <td>
        Status van de job. Mogelijke waarden zijn <br>
        <ul>
          <li><CodeInline @code="http://redpencil.data.gift/id/concept/JobStatus/busy" /></li>
          <li><CodeInline @code="http://redpencil.data.gift/id/concept/JobStatus/scheduled" /></li>
          <li><CodeInline @code="http://redpencil.data.gift/id/concept/JobStatus/success" /></li>
          <li><CodeInline @code="http://redpencil.data.gift/id/concept/JobStatus/failed" /></li>
        </ul>
  
      </td>
    </tr>
    <tr>
      <td>created</td>
      <td><CodeInline @code="dct:created" /></td>
      <td><CodeInline @code="xsd:dateTime" /></td>
      <td>Tijdstip van creatie</td>
    </tr>
    <tr>
      <td>modified</td>
      <td><CodeInline @code="dct:modified" /></td>
      <td><CodeInline @code="xsd:dateTime" /></td>
      <td>Tijdstip van laatste update</td>
    </tr>
    <tr>
      <td>subject</td>
      <td><CodeInline @code="dct:subject" /></td>
      <td><CodeInline @code="schema:Message" /></td>
      <td>Het bericht waaraan de job verbonden is</td>
    </tr>
    <tr>
      <td>error</td>
      <td><CodeInline @code="task:error" /></td>
      <td><CodeInline @code="oslc:Error" /></td>
      <td>
        Meer informatie over de fout in geval van de fout <br>
        <CodeInline @code="http://redpencil.data.gift/id/concept/JobStatus/failed" />
      </td>
    </tr>
    </:body>
  </AuTable>
  
  <AuHeading @level="3" @skin="3"><CodeInline @code="oslc:Error" /></AuHeading>
  <p>
    Deze klasse beschrijft een error. In dit geval zal deze gelinkt zijn met <CodeInline @code="cogs:Job" />.
  </p>
  <AuHeading @level="4" @skin="4">Eigenschappen</AuHeading>
  <AuTable>
    <:header>
    <tr>
      <th>Naam</th>
      <th>URI</th>
      <th>Verwacht type</th>
      <th>Beschrijving</th>
    </tr>
    </:header>
    <:body>
    <tr>
      <td>bericht</td>
      <td><CodeInline @code="oslc:message" /></td>
      <td><CodeInline @code="xsd:string" /></td>
      <td>Beschrijving van de fout</td>
    </tr>
    </:body>
  </AuTable>
  */
  {
    "id": "vbLktjQt",
    "block": "[[[8,[39,0],null,[[\"@skin\",\"@level\"],[\"1\",\"1\"]],[[\"default\"],[[[[1,\"Berichtencentrum SPARQL API \"],[10,\"em\"],[12],[1,\"[CONCEPT]\"],[13]],[]]]]],[1,\"\\n\\n\"],[10,2],[12],[1,\"\\n  Met deze API is het mogelijk om rechtstreeks SPARQL query's uit te voeren om Berichten en Conversaties uit te lezen van Loket. ABB is de enige die een Conversatie kan initiëren. Hierop kunnen dan antwoorden gevormd worden en ingezonden via de \"],[8,[39,1],null,[[\"@route\"],[\"docs.berichtencentrum\"]],[[\"default\"],[[[[1,\"Berichtencentrum API\"]],[]]]]],[1,\". Deze API is gebaseerd op de \"],[8,[39,1],null,[[\"@route\"],[\"docs.vendor-sparql\"]],[[\"default\"],[[[[1,\"Vendor SPARQL API\"]],[]]]]],[1,\".\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Verbinden\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  De endpoint voor deze API kan bereikt worden via\\n\"],[13],[1,\"\\n\"],[8,[39,2],null,[[\"@code\"],[\"https://api.loket.lokaalbestuur.vlaanderen.be\"]],null],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Ter volledigheid staat hieronder de volledige lijst aan URL's voor het inloggen, sturen van query's en het uitloggen respectievelijk.\\n\"],[13],[1,\"\\n\"],[8,[39,2],null,[[\"@code\"],[\"https://api.loket.lokaalbestuur.vlaanderen.be/vendor/login\\nhttps://api.loket.lokaalbestuur.vlaanderen.be/vendor/sparql\\nhttps://api.loket.lokaalbestuur.vlaanderen.be/vendor/logout\"]],null],[1,\"\\n\"],[10,2],[12],[1,\"\\n  \"],[10,\"strong\"],[12],[1,\"Bekijk zeker de pagina over de \"],[8,[39,1],null,[[\"@route\"],[\"docs.vendor-sparql\"]],[[\"default\"],[[[[1,\"Vendor SPARQL API\"]],[]]]]],[1,\" om te leren hoe de SPARQL API werkt!\"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Sturen van query's\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Het soort query's die door deze API kan beantwoord worden kan sterk variëren. Het is mogelijk om alle Conversaties en Berichten uit te lezen die op de bestuurseenheid van toepassing zijn en om daarop te filteren met de volledige vrijheid van SPARQL. Elk Bericht heeft zijn bijlagen met de nodige URL voor het downloaden ervan. Bij het inzenden van een nieuw Bericht (zoals beschreven in \"],[8,[39,1],null,[[\"@route\"],[\"docs.berichtencentrum\"]],[[\"default\"],[[[[1,\"Berichtencentrum API\"]],[]]]]],[1,\") wordt er JSON teruggegeven die een URI bevat voor de Job waarin de melding zal worden verwerkt. Deze kan worden gebruikt als onderwerp of voorwerp in SPARQL query's om doelgericht informatie op te vragen over de verwerking van het nieuwe Bericht.\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Voorbeelden\"]],[]]]]],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Opvragen berichten ABB\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  De onderstaande SPARQL query toont hoe verzonden berichten van ABB naar een specifiek bestuur die recenter zijn dan een specifieke datum opgevraagd kunnen worden. Voor elk bericht halen we ook de (optionele) URL('s) naar de bijlage(n) op. Noteer dat de URI van ABB de volgende is:\\n  \"],[8,[39,3],null,[[\"@code\"],[\"http://data.lblod.info/id/bestuurseenheden/141d9d6b-54af-4d17-b313-8d1c30bc3f5b\"]],null],[1,\"\\n\"],[13],[1,\"\\n\"],[8,[39,4],null,[[\"@snippetFilename\"],[\"berichtencentrum-sparql/voorbeeld-berichten-na-datum.sparql\"]],null],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Opvolgen van de ingestuurde melding\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  De onderstaande SPARQL query toont hoe u de status van de aangemaakt Job kan opvolgen. Noteer: gegeven de verwerking van een melding een asynchroon proces is kan het even duren alvorens informatie over de Job beschikbaar is. Het staat wel vast dat de informatie ooit beschikbaar wordt. Na de melding kan er dus al gerust opgevraagd worden.\\n\"],[13],[1,\"\\n\"],[8,[39,4],null,[[\"@snippetFilename\"],[\"berichtencentrum-sparql/voorbeeld-job-status.sparql\"]],null],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Script voor opvolgen melding\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Het volgend voorbeeld is een Bash script dat een sequentie van calls uitvoert om een melding op te volgen. Noteer: het gaat om een zeer naïeve interpretatie, zeker niet aan te raden in productie.\\n\"],[13],[1,\"\\n\"],[8,[39,4],null,[[\"@snippetFilename\"],[\"berichtencentrum-sparql/voorbeeld-melding-opvolgen.sh\"]],null],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Script voor downloaden bijlage\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Het volgend voorbeeld illustreert een sequentie van calls om een bijlage te ontdekken en te downloaden. Noteer: Het ontdekken van de bijlagen kan hier op vele manieren, en veel efficiënter met andere SPARQL query's. Noteer nog steeds: het gaat om een zeer naïeve interpretatie, zeker niet aan te raden in productie.\\n\"],[13],[1,\"\\n\"],[8,[39,4],null,[[\"@snippetFilename\"],[\"berichtencentrum-sparql/voorbeeld-bijlage-downloaden.sh\"]],null],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Model van beschikbare data\"]],[]]]]],[1,\"\\n\\n\"],[10,3],[14,0,\"block au-u-text-right\"],[14,6,\"assets/diagrams/berichtencentrum-sparql.svg\"],[12],[1,\"\\n  \"],[10,\"figure\"],[12],[1,\"\\n    \"],[10,\"img\"],[14,\"itemprop\",\"thumbnail\"],[14,\"src\",\"assets/diagrams/berichtencentrum-sparql.svg\"],[14,\"alt\",\"Diagram van beschikbare gegevens\"],[12],[13],[1,\"\\n    \"],[10,\"figcaption\"],[12],[1,\"Diagram van Linked Data van beschikbare gegevens in het endpoint\"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[10,2],[12],[1,\"\\n  In boven- en onderstaand model wordt gebruik gemaakt van volgende prefixen.\\n\"],[13],[1,\"\\n\\n\"],[8,[39,5],null,null,[[\"header\",\"body\"],[[[[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"Prefix\"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"URI\"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"adms\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,6],[[24,6,\"http://www.w3.org/ns/adms#\"]],null,[[\"default\"],[[[[1,\"http://www.w3.org/ns/adms#\"]],[]]]]],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"besluit\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,6],[[24,6,\"http://data.vlaanderen.be/ns/besluit#\"]],null,[[\"default\"],[[[[1,\"http://data.vlaanderen.be/ns/besluit#\"]],[]]]]],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"dcterms\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,6],[[24,6,\"http://purl.org/dc/terms/\"]],null,[[\"default\"],[[[[1,\"http://purl.org/dc/terms/\"]],[]]]]],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"skos\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,6],[[24,6,\"http://www.w3.org/2004/02/skos/\"]],null,[[\"default\"],[[[[1,\"http://www.w3.org/2004/02/skos/\"]],[]]]]],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"nfo\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,6],[[24,6,\"http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#\"]],null,[[\"default\"],[[[[1,\"http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#\"]],[]]]]],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"nie\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,6],[[24,6,\"http://www.semanticdesktop.org/ontologies/2007/01/19/nie#\"]],null,[[\"default\"],[[[[1,\"http://www.semanticdesktop.org/ontologies/2007/01/19/nie#\"]],[]]]]],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"schema\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"\\n      \"],[8,[39,6],[[24,6,\"http://schema.org/\"]],null,[[\"default\"],[[[[1,\"http://schema.org/\"]],[]]]]],[1,\"\\n      \"],[10,\"br\"],[12],[13],[1,\"\\n      Noteer: geen \"],[10,\"em\"],[12],[1,\"http\"],[10,\"strong\"],[12],[1,\"s\"],[13],[13],[1,\"!\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"rdf\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,6],[[24,6,\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"]],null,[[\"default\"],[[[[1,\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"]],[]]]]],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"xsd\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,6],[[24,6,\"http://www.w3.org/2001/XMLSchema#\"]],null,[[\"default\"],[[[[1,\"http://www.w3.org/2001/XMLSchema#\"]],[]]]]],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"cogs\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,6],[[24,6,\"http://vocab.deri.ie/cogs#\"]],null,[[\"default\"],[[[[1,\"http://vocab.deri.ie/cogs#\"]],[]]]]],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"oslc\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,6],[[24,6,\"http://open-services.net/ns/core#\"]],null,[[\"default\"],[[[[1,\"http://open-services.net/ns/core#\"]],[]]]]],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"task\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,6],[[24,6,\"http://redpencil.data.gift/vocabularies/tasks/\"]],null,[[\"default\"],[[[[1,\"http://redpencil.data.gift/vocabularies/tasks/\"]],[]]]]],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[8,[39,3],null,[[\"@code\"],[\"schema:Conversation\"]],null]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Bundelt \"],[8,[39,3],null,[[\"@code\"],[\"schema:Message\"]],null],[1,\" rond een specifiek topic. Gesprek, Thread.\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Eigenschappen\"]],[]]]]],[1,\"\\n\"],[8,[39,5],null,null,[[\"header\",\"body\"],[[[[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"Naam\"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"URI\"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"Verwacht type\"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"Beschrijving\"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"hasPart\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"schema:hasPart\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"schema:Message\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"Verwijst naar het gelinkt bericht aan de conversatie\"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"about\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"schema:about\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"xsd:string\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"Beschrijft het topic van het gesprek\"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"Identificator\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"schema:identifier\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"xsd:string\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"\\n      De interne referentie van ABB.\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[8,[39,3],null,[[\"@code\"],[\"schema:Message\"]],null]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Bericht. De entiteit die de effectieve communicatie bevat.\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Eigenschappen\"]],[]]]]],[1,\"\\n\"],[8,[39,5],null,null,[[\"header\",\"body\"],[[[[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"Naam\"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"URI\"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"Verwacht type\"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"Beschrijving\"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"type\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"dcterms:type\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"xsd:string\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"\\n      Een string die samenvat wat de type communicatie is. \"],[10,\"br\"],[12],[13],[1,\"\\n      Voorbeelden hiervan zijn “Kennisgeving toezichtsbeslissing” of “Opvraging” \"],[10,\"br\"],[12],[13],[1,\"\\n      Noteer hierbij dat het bestuur dit veld \"],[10,\"em\"],[12],[1,\"niet\"],[13],[1,\" hoeft te publiceren. \"],[10,\"br\"],[12],[13],[1,\"\\n      Alle berichten die binnenkomen vanuit een bestuur zullen automatisch het label “Reactie” krijgen.\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"hasPart\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"nie:hasPart\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"nfo:FileDataObject\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"Verwijst naar het bijbehorende document of bestand van het bericht, zoals een bijlage.\"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"sender\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"schema:sender\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"besluit:Bestuurseenheid\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"\\n      Verwijst naar de zender of afzender van het bericht. \"],[10,\"br\"],[12],[13],[1,\"\\n      Zie voorbeelden \"],[8,[39,7],null,[[\"@route\"],[\"docs.centrale-vindplaats-sparql\"]],[[\"default\"],[[[[1,\"SPARQL endpoint\"]],[]]]]],[1,\" voor query's.\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"recipient\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"schema:recipient\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"besluit:Bestuurseenheid\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"\\n      Verwijst naar de ontvanger van het bericht. \"],[10,\"br\"],[12],[13],[1,\"\\n      In de prakijk ABB met vaste URI \"],[10,\"br\"],[12],[13],[1,\"\\n      \"],[8,[39,3],null,[[\"@code\"],[\"<http://data.lblod.info/id/bestuurseenheden/141d9d6b-54af-4d17-b313-8d1c30bc3f5b>\"]],null],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"text\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"schema:text\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"xsd:string\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"\\n      De tekst of inhoud van het bericht. \"],[10,\"br\"],[12],[13],[1,\"\\n      Dit veld kan opgemaakte tekst bevatten, dit wordt doorgegeven als HTML.\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"dateSent\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"schema:dateSent\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"xsd:dateTime\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"\\n      Datum en tijd waarop het bericht is verzonden.\"],[10,\"br\"],[12],[13],[1,\"\\n      In de praktijk, wanneer de gebruiker op “Versturen” geklikt heeft.\"],[10,\"br\"],[12],[13],[1,\"\\n      Dit is niet de datum van ontvangest bij ABB.\"],[10,\"br\"],[12],[13],[1,\"\\n      (Verdere discussie zal nodig zijn om uit te klaren welke timestamp rechtsgeldig is voor de termijnen)\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[8,[39,3],null,[[\"@code\"],[\"nfo:FileDataObject\"]],null]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Deze klasse wordt gebruikt om bijlagen te annoteren.\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Eigenschappen\"]],[]]]]],[1,\"\\n\"],[8,[39,5],null,null,[[\"header\",\"body\"],[[[[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"Naam\"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"URI\"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"Verwacht type\"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"Beschrijving\"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"created\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"dcterms:created\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"xsd:dateTime\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"Datum en tijd waarop het bestand is gecreëerd.\"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"url\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"nie:url\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"xsd:anyURI\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"De locatie van het bestand die gebruikt zal worden om opgehaald te worden\"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"modified\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"dcterms:modified\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"xsd:dateTime\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"Datum en tijd waarop het bestand voor het laatst is gewijzigd.\"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"fileName\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"nfo:fileName\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"xsd:string\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"De mensleesbare naam van het bestand.\"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"status\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"adms:status\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"skos:Concept\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"De status gebruikt bij ABB om de voortgang van de download van de file op te volgen.\\n      \"],[10,\"br\"],[12],[13],[1,\"\\n      De mogelijke statussen vindt u (voorlopig)\\n      \"],[8,[39,6],[[24,6,\"https://github.com/lblod/download-url-service#file-download-statuses\"]],null,[[\"default\"],[[[[1,\"hier\"]],[]]]]],[1,\"\\n      \"],[10,\"br\"],[12],[13],[1,\"\\n      Noteer: deze property wordt genegeerd indien het bestuur dit publiceert.\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[8,[39,3],null,[[\"@code\"],[\"cogs:Job\"]],null]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Job. Een instantie van deze klasse houdt bij wat de status van de ingestuurde melding is.\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Eigenschappen\"]],[]]]]],[1,\"\\n\"],[8,[39,5],null,null,[[\"header\",\"body\"],[[[[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"Naam\"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"URI\"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"Verwacht type\"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"Beschrijving\"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"status\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"adms:status\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"skos:Concept\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"\\n      Status van de job. Mogelijke waarden zijn \"],[10,\"br\"],[12],[13],[1,\"\\n      \"],[10,\"ul\"],[12],[1,\"\\n        \"],[10,\"li\"],[12],[8,[39,3],null,[[\"@code\"],[\"http://redpencil.data.gift/id/concept/JobStatus/busy\"]],null],[13],[1,\"\\n        \"],[10,\"li\"],[12],[8,[39,3],null,[[\"@code\"],[\"http://redpencil.data.gift/id/concept/JobStatus/scheduled\"]],null],[13],[1,\"\\n        \"],[10,\"li\"],[12],[8,[39,3],null,[[\"@code\"],[\"http://redpencil.data.gift/id/concept/JobStatus/success\"]],null],[13],[1,\"\\n        \"],[10,\"li\"],[12],[8,[39,3],null,[[\"@code\"],[\"http://redpencil.data.gift/id/concept/JobStatus/failed\"]],null],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"created\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"dct:created\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"xsd:dateTime\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"Tijdstip van creatie\"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"modified\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"dct:modified\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"xsd:dateTime\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"Tijdstip van laatste update\"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"subject\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"dct:subject\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"schema:Message\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"Het bericht waaraan de job verbonden is\"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"error\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"task:error\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"oslc:Error\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"\\n      Meer informatie over de fout in geval van de fout \"],[10,\"br\"],[12],[13],[1,\"\\n      \"],[8,[39,3],null,[[\"@code\"],[\"http://redpencil.data.gift/id/concept/JobStatus/failed\"]],null],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[8,[39,3],null,[[\"@code\"],[\"oslc:Error\"]],null]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Deze klasse beschrijft een error. In dit geval zal deze gelinkt zijn met \"],[8,[39,3],null,[[\"@code\"],[\"cogs:Job\"]],null],[1,\".\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Eigenschappen\"]],[]]]]],[1,\"\\n\"],[8,[39,5],null,null,[[\"header\",\"body\"],[[[[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"Naam\"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"URI\"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"Verwacht type\"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"Beschrijving\"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"bericht\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"oslc:message\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"xsd:string\"]],null],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"Beschrijving van de fout\"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"]],[]]]]]],[],false,[\"au-heading\",\"link-to\",\"code-block\",\"code-inline\",\"snippet-toggle\",\"au-table\",\"au-link-external\",\"au-link\"]]",
    "moduleName": "pages-vendors/templates/docs/berichtencentrum-sparql.hbs",
    "isStrictMode": false
  });
});
;define("pages-vendors/templates/docs/berichtencentrum", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <AuHeading @level="1" @skin="1">Berichtencentrum API <em>[CONCEPT]</em></AuHeading>
  <p>
    Lokale besturen en ABB kunnen beveiligde berichten met mekaar uitwisselen. Het loket voor Lokale Besturen biedt een API aan waarop deze functionaliteit programmatorisch ge&iuml;ntegreerd kan worden. Dit document beschrijft de API voor het berichtencentrum.
  </p>
  
  <AuHeading @level="2" @skin="2">High level beschrijving van de flow</AuHeading>
  <p>
    Het Berichtencentrum bestaat uit Conversaties en Berichten. Een conversatie bestaat uit verschillende berichten; een conversatie is een zogenaamde 'thread'. Momenteel kan enkel ABB conversaties initi&euml;ren, en kunnen besturen enkel reageren. De beschikbare conversaties en berichten kunnen bevraagd worden aan de hand van <AuLink @route="docs.vendor-sparql">Vendor SPARQL API</AuLink>. Meer details over de query's volgen hieronder. In geval er een nieuw bericht naar ABB moet worden gestuurd, publiceert het bestuur een RDFa-geannoteerd document. Via een REST call meldt het bestuur de locatie van de nieuwe publicatie aan het loket, en zal de crawler van het loket het document ophalen. Het melden van een bericht zal een <CodeInline @code="cogs:Job" /> aanmaken. Hiermee kan de vendor of het bestuur de status van de melding opvolgen. De flow is heel gelijkaardig aan die van de <AuLink @route="docs.meldingsplicht">Meldingsplicht API</AuLink>.
  </p>
  
  <AuHeading @level="2" @skin="2" id="publicatie-documenten">Publicatie van berichten</AuHeading>
  <p>
    Het bestuur dat een bericht wil sturen in Loket publiceert een, via authenticatie beschermd, RDFa document. De publieke URL voor dit document moet worden meegegeven in een REST call naar Loket zodat een crawler het document kan inlezen en verwerken.
  </p>
  <AuHeading @level="3" @skin="3">Vereisten voor gepubliceerde pagina's</AuHeading>
  <p>
    Zie <AuLink @route="docs.meldingsplicht">Meldingsplicht API</AuLink>.
  </p>
  <AuHeading @level="3" @skin="3">Organiseren van gepubliceerde pagina's</AuHeading>
  <p>
    De crawler verwacht bij het ophalen van de RDFa-informatie dat de resource -gespecifieerd met het <CodeInline @code="resource" /> veld in de json-body- volledig beschreven staat op de pagina gespecifieerd in het <CodeInline @code="href" /> veld. De crawler verwacht dat de RDFa beschrijving van het veld <CodeInline @code="nie:url" /> een rechtstreekse link is naar het bestand. (Indien content-negotiation gewenst is, kunnen de annotaties makkelijk uitgebreid worden. Laat gerust weten.) Verder zijn er geen echt harde restricties, behalve dat we niet verwachten dat de grootte van de pagina's te groot wordt. (Nader te bepalen wat de harde grens zou zijn; een HTML bestand van 20+MB beschouwen we al als groot.) Goede vertrouwelijkheidshygi&euml;ne is wenselijk, bijvoorbeeld: niet de berichten van alle besturen in beheer op één pagina publiceren. Technisch kan het, maar het vergroot het risico.
  </p>
  <AuHeading @level="3" @skin="3">RDFa voorbeeldpublicatie van bericht</AuHeading>
  <p>
    Het volgende voorbeeld illustreert hoe een bericht in RDFa wordt gepubliceerd. Dit is een zeer minimaal voorbeeld. Evengoed kan dit uitgebreid worden om het ook bruikbaar te maken voor zowel menselijke gebruikers als machines. Het staat het bestuur dus zeker vrij om extra annotaties toe te voegen.
  </p>
  <SnippetToggle @snippetFilename="berichtencentrum/voorbeeld-rdfa-bericht.html" />
  
  <AuHeading @level="2" @skin="2">Melden van een nieuw bericht</AuHeading>
  <p>
    Het melden van een nieuw bericht gebeurt via een request via
  </p>
  <CodeBlock @code="POST https://api.loket.lokaalbestuur.vlaanderen.be/vendor/berichtencentrum/melding" />
  <p>
    met als JSON-LD request body:
  </p>
  <Snippet @snippetFilename="berichtencentrum/voorbeeld-melding-body.js" />
  <p class="au-u-para-small au-u-muted">
    Annotaties die gebruikt kunnen worden bij de gepubliceerde pagina worden verder besproken.
  </p>
  <p>
    Het aanvragen van een publisher URI en een geheime sleutel (key) wordt beschreven in de sectie 'Authenticatie' van de <AuLink @route="docs.meldingsplicht">Meldingsplicht API</AuLink>. Verder verwachten we dat het gepubliceerde document beschermd is met authenticatie. Voor meer informatie over welke methodes de crawler ondersteunt, verwijzen we u door naar de sectie 'Ophalen van niet-publieke documenten' van de <AuLink @route="docs.meldingsplicht">Meldingsplicht API</AuLink>. Een antwoord van het endpoint wordt dan, indien de eerste ronde van validatie OK is:
  </p>
  <CodeBlock @code='{ "job": "http://data.lblod.info/id/job/example-uri" }' />
  <p>
    Indien er zaken niet in orde zijn, kan u terugvallen op de standaard HTTP-codes en error-boodschappen.
  </p>
  <AuHeading @level="3" @skin="3">JSON-LD context</AuHeading>
  <p>
    Zie <AuLink @route="docs.meldingsplicht">Meldingsplicht API</AuLink>.
  </p>
  <AuHeading @level="3" @skin="3">Voorbeeld-request om nieuw bericht te melden</AuHeading>
  <p>
    Voortgaand op het vorige voorbeeld, geven we weer hoe een request naar loket er zou kunnen uitzien. Stel dat de RDFa geannoteerde pagina gehost staat op <CodeInline @code="http://vendor.example.com/conversaties/bestuur/1" />. Uit vorige voorbeeld is de URI van het nieuwe bericht <CodeInline @code="http://nieuw/berichturi/voor/ABB" />. Dan kan het request er als volgt uitzien:
  </p>
  <SnippetToggle @snippetFilename="berichtencentrum/voorbeeld-melding.sh" />
  <p>
    Noteer dat meerdere authenticatiemogelijkheden beschikbaar zijn, niet alleen basic auth.
  </p>
  
  <AuHeading @level="2" @skin="2">Verwijderen van berichten</AuHeading>
  <p>
    Momenteel is er geen endpoint voorzien om een bericht te verwijderen. Van zodra het bericht correct verwerkt is, propageert dit binnen allerhande systemen en wordt het zeer moeilijk om consistent te verwijderen. Noteer: indien een bepaalde melding gefaald is, kan u steeds dezelfde melding opnieuw insturen.
  </p>
  
  <AuHeading @level="2" @skin="2">Ontwikkeling en test</AuHeading>
  <p>
    Deze informatie volgt nog.
  </p>
  */
  {
    "id": "9EYSu/Yb",
    "block": "[[[8,[39,0],null,[[\"@level\",\"@skin\"],[\"1\",\"1\"]],[[\"default\"],[[[[1,\"Berichtencentrum API \"],[10,\"em\"],[12],[1,\"[CONCEPT]\"],[13]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Lokale besturen en ABB kunnen beveiligde berichten met mekaar uitwisselen. Het loket voor Lokale Besturen biedt een API aan waarop deze functionaliteit programmatorisch geïntegreerd kan worden. Dit document beschrijft de API voor het berichtencentrum.\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"High level beschrijving van de flow\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Het Berichtencentrum bestaat uit Conversaties en Berichten. Een conversatie bestaat uit verschillende berichten; een conversatie is een zogenaamde 'thread'. Momenteel kan enkel ABB conversaties initiëren, en kunnen besturen enkel reageren. De beschikbare conversaties en berichten kunnen bevraagd worden aan de hand van \"],[8,[39,1],null,[[\"@route\"],[\"docs.vendor-sparql\"]],[[\"default\"],[[[[1,\"Vendor SPARQL API\"]],[]]]]],[1,\". Meer details over de query's volgen hieronder. In geval er een nieuw bericht naar ABB moet worden gestuurd, publiceert het bestuur een RDFa-geannoteerd document. Via een REST call meldt het bestuur de locatie van de nieuwe publicatie aan het loket, en zal de crawler van het loket het document ophalen. Het melden van een bericht zal een \"],[8,[39,2],null,[[\"@code\"],[\"cogs:Job\"]],null],[1,\" aanmaken. Hiermee kan de vendor of het bestuur de status van de melding opvolgen. De flow is heel gelijkaardig aan die van de \"],[8,[39,1],null,[[\"@route\"],[\"docs.meldingsplicht\"]],[[\"default\"],[[[[1,\"Meldingsplicht API\"]],[]]]]],[1,\".\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],[[24,1,\"publicatie-documenten\"]],[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Publicatie van berichten\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Het bestuur dat een bericht wil sturen in Loket publiceert een, via authenticatie beschermd, RDFa document. De publieke URL voor dit document moet worden meegegeven in een REST call naar Loket zodat een crawler het document kan inlezen en verwerken.\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Vereisten voor gepubliceerde pagina's\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Zie \"],[8,[39,1],null,[[\"@route\"],[\"docs.meldingsplicht\"]],[[\"default\"],[[[[1,\"Meldingsplicht API\"]],[]]]]],[1,\".\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Organiseren van gepubliceerde pagina's\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  De crawler verwacht bij het ophalen van de RDFa-informatie dat de resource -gespecifieerd met het \"],[8,[39,2],null,[[\"@code\"],[\"resource\"]],null],[1,\" veld in de json-body- volledig beschreven staat op de pagina gespecifieerd in het \"],[8,[39,2],null,[[\"@code\"],[\"href\"]],null],[1,\" veld. De crawler verwacht dat de RDFa beschrijving van het veld \"],[8,[39,2],null,[[\"@code\"],[\"nie:url\"]],null],[1,\" een rechtstreekse link is naar het bestand. (Indien content-negotiation gewenst is, kunnen de annotaties makkelijk uitgebreid worden. Laat gerust weten.) Verder zijn er geen echt harde restricties, behalve dat we niet verwachten dat de grootte van de pagina's te groot wordt. (Nader te bepalen wat de harde grens zou zijn; een HTML bestand van 20+MB beschouwen we al als groot.) Goede vertrouwelijkheidshygiëne is wenselijk, bijvoorbeeld: niet de berichten van alle besturen in beheer op één pagina publiceren. Technisch kan het, maar het vergroot het risico.\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"RDFa voorbeeldpublicatie van bericht\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Het volgende voorbeeld illustreert hoe een bericht in RDFa wordt gepubliceerd. Dit is een zeer minimaal voorbeeld. Evengoed kan dit uitgebreid worden om het ook bruikbaar te maken voor zowel menselijke gebruikers als machines. Het staat het bestuur dus zeker vrij om extra annotaties toe te voegen.\\n\"],[13],[1,\"\\n\"],[8,[39,3],null,[[\"@snippetFilename\"],[\"berichtencentrum/voorbeeld-rdfa-bericht.html\"]],null],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Melden van een nieuw bericht\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Het melden van een nieuw bericht gebeurt via een request via\\n\"],[13],[1,\"\\n\"],[8,[39,4],null,[[\"@code\"],[\"POST https://api.loket.lokaalbestuur.vlaanderen.be/vendor/berichtencentrum/melding\"]],null],[1,\"\\n\"],[10,2],[12],[1,\"\\n  met als JSON-LD request body:\\n\"],[13],[1,\"\\n\"],[8,[39,5],null,[[\"@snippetFilename\"],[\"berichtencentrum/voorbeeld-melding-body.js\"]],null],[1,\"\\n\"],[10,2],[14,0,\"au-u-para-small au-u-muted\"],[12],[1,\"\\n  Annotaties die gebruikt kunnen worden bij de gepubliceerde pagina worden verder besproken.\\n\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Het aanvragen van een publisher URI en een geheime sleutel (key) wordt beschreven in de sectie 'Authenticatie' van de \"],[8,[39,1],null,[[\"@route\"],[\"docs.meldingsplicht\"]],[[\"default\"],[[[[1,\"Meldingsplicht API\"]],[]]]]],[1,\". Verder verwachten we dat het gepubliceerde document beschermd is met authenticatie. Voor meer informatie over welke methodes de crawler ondersteunt, verwijzen we u door naar de sectie 'Ophalen van niet-publieke documenten' van de \"],[8,[39,1],null,[[\"@route\"],[\"docs.meldingsplicht\"]],[[\"default\"],[[[[1,\"Meldingsplicht API\"]],[]]]]],[1,\". Een antwoord van het endpoint wordt dan, indien de eerste ronde van validatie OK is:\\n\"],[13],[1,\"\\n\"],[8,[39,4],null,[[\"@code\"],[\"{ \\\"job\\\": \\\"http://data.lblod.info/id/job/example-uri\\\" }\"]],null],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Indien er zaken niet in orde zijn, kan u terugvallen op de standaard HTTP-codes en error-boodschappen.\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"JSON-LD context\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Zie \"],[8,[39,1],null,[[\"@route\"],[\"docs.meldingsplicht\"]],[[\"default\"],[[[[1,\"Meldingsplicht API\"]],[]]]]],[1,\".\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Voorbeeld-request om nieuw bericht te melden\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Voortgaand op het vorige voorbeeld, geven we weer hoe een request naar loket er zou kunnen uitzien. Stel dat de RDFa geannoteerde pagina gehost staat op \"],[8,[39,2],null,[[\"@code\"],[\"http://vendor.example.com/conversaties/bestuur/1\"]],null],[1,\". Uit vorige voorbeeld is de URI van het nieuwe bericht \"],[8,[39,2],null,[[\"@code\"],[\"http://nieuw/berichturi/voor/ABB\"]],null],[1,\". Dan kan het request er als volgt uitzien:\\n\"],[13],[1,\"\\n\"],[8,[39,3],null,[[\"@snippetFilename\"],[\"berichtencentrum/voorbeeld-melding.sh\"]],null],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Noteer dat meerdere authenticatiemogelijkheden beschikbaar zijn, niet alleen basic auth.\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Verwijderen van berichten\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Momenteel is er geen endpoint voorzien om een bericht te verwijderen. Van zodra het bericht correct verwerkt is, propageert dit binnen allerhande systemen en wordt het zeer moeilijk om consistent te verwijderen. Noteer: indien een bepaalde melding gefaald is, kan u steeds dezelfde melding opnieuw insturen.\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Ontwikkeling en test\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Deze informatie volgt nog.\\n\"],[13]],[],false,[\"au-heading\",\"au-link\",\"code-inline\",\"snippet-toggle\",\"code-block\",\"snippet\"]]",
    "moduleName": "pages-vendors/templates/docs/berichtencentrum.hbs",
    "isStrictMode": false
  });
});
;define("pages-vendors/templates/docs/bijlagen-annotaties", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <AuHeading @level="1" @skin="1">Annotaties voor bijlagen bij een Besluit</AuHeading>
  <p>
    Dit document beschrijft hoe verschillende soorten bijlagen bij een besluit geannoteerd kunnen worden. Er wordt extra aandacht besteed aan reglementaire bijlagen zoals bijvoorbeeld een subsidieregelement of aanvullend wegreglement.
  </p>
  
  <AuHeading @level="2" @skin="2">Eenvoudige bijlagen</AuHeading>
  <p>
    Het applicatieprofiel besluit-publicatie voorziet de relatie <AuLinkExternal href="http://data.europa.eu/eli/ontology#related_to">eli:related_to</AuLinkExternal> voor verwijzingen naar bijlagen.
  </p>
  <p>
    In het onderstaande voorbeeld wordt gelinkt een pdf bijlage.
  </p>
  <Snippet @snippetFilename="bijlagen-annotaties/voorbeeld-besluit-met-pdf-bijlage.html" />
  
  <AuHeading @level="2" @skin="2">Bijlagen die deel uitmaken van het besluit</AuHeading>
  <p>
    Indien een bijlage (juridisch) kan worden aanzien als zijnde een onderdeel van het besluit worden de annotaties van de eenvoudige bijlage aangevuld om aan te duiden dat het gaat om een document onderdeel. Het applicatieprofiel besluit-publicatie voorziet hiervoor de relatie <AuLinkExternal href="http://purl.org/dc/terms/isPartOf">dct:isPartOf</AuLinkExternal> van het onderdeel naar het besluit.
  </p>
  <p>
    <strong>Opmerking:</strong> In het voorbeeld maken we gebruik van het html atribuut "rev" om deze relatie in de omgekeerde richting op te geven.
  </p>
  <Snippet @snippetFilename="bijlagen-annotaties/voorbeeld-besluit-met-pdf-bijlage-als-onderdeel.html" />
  
  <AuHeading @level="2" @skin="2">Een besluit als bijlage</AuHeading>
  <p>
    Sommige bijlagen zijn besluiten op zich, het gaat dan voornamelijk om reglementen zoals het huishoudelijk reglement, subsdiereglementen, aanvullende verkeersreglementen, etc. Deze bijlagen dienen geannoteerd te worden als een besluit en kunnen ofwel opgenomen worden als een tweede besluit in de publicatie (inline bijlage) of als een verwijzing naar een geannoteerde publicatie.
  </p>
  
  <AuHeading @level="3" @skin="3">Inline besluit als bijlage</AuHeading>
  <p>
    In het onderstaande voorbeeld wordt een subsidiereglement goedgekeurd, het reglement wordt als tweede besluit opgenomen in de behandeling van het agendapunt.
  </p>
  <ul>
    <li>
      Er wordt gebruikt gemaakt van de relatie <CodeInline @code="prov:generated" /> tussen de behandeling en de twee besluiten.
    </li>
    <li>
      Met de relatie <CodeInline @code="eli:related_to" /> wordt aangegeven dat het subsidiereglement een bijlage is van het goedkeuringsbesluit
    </li>
    <li>
      Met de relatie <CodeInline @code="dct:isPartOf" /> wordt aangegeven dat het subsidiereglement kan worden aanzien als zijnde een onderdeel van het eerste besluit
    </li>
  </ul>
  <Snippet @snippetFilename="bijlagen-annotaties/voorbeeld-besluit-met-geannoteerde-bijlage.html" />
  */
  {
    "id": "LcF/VwbB",
    "block": "[[[8,[39,0],null,[[\"@level\",\"@skin\"],[\"1\",\"1\"]],[[\"default\"],[[[[1,\"Annotaties voor bijlagen bij een Besluit\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Dit document beschrijft hoe verschillende soorten bijlagen bij een besluit geannoteerd kunnen worden. Er wordt extra aandacht besteed aan reglementaire bijlagen zoals bijvoorbeeld een subsidieregelement of aanvullend wegreglement.\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Eenvoudige bijlagen\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Het applicatieprofiel besluit-publicatie voorziet de relatie \"],[8,[39,1],[[24,6,\"http://data.europa.eu/eli/ontology#related_to\"]],null,[[\"default\"],[[[[1,\"eli:related_to\"]],[]]]]],[1,\" voor verwijzingen naar bijlagen.\\n\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"\\n  In het onderstaande voorbeeld wordt gelinkt een pdf bijlage.\\n\"],[13],[1,\"\\n\"],[8,[39,2],null,[[\"@snippetFilename\"],[\"bijlagen-annotaties/voorbeeld-besluit-met-pdf-bijlage.html\"]],null],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Bijlagen die deel uitmaken van het besluit\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Indien een bijlage (juridisch) kan worden aanzien als zijnde een onderdeel van het besluit worden de annotaties van de eenvoudige bijlage aangevuld om aan te duiden dat het gaat om een document onderdeel. Het applicatieprofiel besluit-publicatie voorziet hiervoor de relatie \"],[8,[39,1],[[24,6,\"http://purl.org/dc/terms/isPartOf\"]],null,[[\"default\"],[[[[1,\"dct:isPartOf\"]],[]]]]],[1,\" van het onderdeel naar het besluit.\\n\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"\\n  \"],[10,\"strong\"],[12],[1,\"Opmerking:\"],[13],[1,\" In het voorbeeld maken we gebruik van het html atribuut \\\"rev\\\" om deze relatie in de omgekeerde richting op te geven.\\n\"],[13],[1,\"\\n\"],[8,[39,2],null,[[\"@snippetFilename\"],[\"bijlagen-annotaties/voorbeeld-besluit-met-pdf-bijlage-als-onderdeel.html\"]],null],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Een besluit als bijlage\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Sommige bijlagen zijn besluiten op zich, het gaat dan voornamelijk om reglementen zoals het huishoudelijk reglement, subsdiereglementen, aanvullende verkeersreglementen, etc. Deze bijlagen dienen geannoteerd te worden als een besluit en kunnen ofwel opgenomen worden als een tweede besluit in de publicatie (inline bijlage) of als een verwijzing naar een geannoteerde publicatie.\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Inline besluit als bijlage\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  In het onderstaande voorbeeld wordt een subsidiereglement goedgekeurd, het reglement wordt als tweede besluit opgenomen in de behandeling van het agendapunt.\\n\"],[13],[1,\"\\n\"],[10,\"ul\"],[12],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"\\n    Er wordt gebruikt gemaakt van de relatie \"],[8,[39,3],null,[[\"@code\"],[\"prov:generated\"]],null],[1,\" tussen de behandeling en de twee besluiten.\\n  \"],[13],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"\\n    Met de relatie \"],[8,[39,3],null,[[\"@code\"],[\"eli:related_to\"]],null],[1,\" wordt aangegeven dat het subsidiereglement een bijlage is van het goedkeuringsbesluit\\n  \"],[13],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"\\n    Met de relatie \"],[8,[39,3],null,[[\"@code\"],[\"dct:isPartOf\"]],null],[1,\" wordt aangegeven dat het subsidiereglement kan worden aanzien als zijnde een onderdeel van het eerste besluit\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[8,[39,2],null,[[\"@snippetFilename\"],[\"bijlagen-annotaties/voorbeeld-besluit-met-geannoteerde-bijlage.html\"]],null]],[],false,[\"au-heading\",\"au-link-external\",\"snippet\",\"code-inline\"]]",
    "moduleName": "pages-vendors/templates/docs/bijlagen-annotaties.hbs",
    "isStrictMode": false
  });
});
;define("pages-vendors/templates/docs/centrale-vindplaats-sparql", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <AuHeading @level="1" @skin="1">Centrale Vindplaats SPARQL endpoint</AuHeading>
  <p>
    Dit database-endpoint kan bevraagd worden aan de hand van SPARQL, een query-taal om RDF data te manipuleren. RDF is een formaat dat binnen het kader van het semantische web -en dus linked data- zeer vaak voorkomt. <br />
    Het LBLOD-project gebruikt RDF intensief. Verschillende datasets worden gepubliceerd als Turtle en RDFa, serializatie-formaten die de RDF-standaard respecteren. <br />
    Dit endpoint kan gebruikt worden om rechstreeks op de bron te werken. Dit helpt niet alleen om het aantal tussenliggende conversies te verminderen, maar ook heel praktisch om complexere bevragingen in minder stappen uit te voeren. <br />
    Met SPARQL staat men dichter bij de data, en dus dichter op het model.
  </p>
  
  <AuHeading @level="2" @skin="2">Benaderen van het endpoint</AuHeading>
  <p>
    Het endpoint staat beschikbaar op <br>
  </p>
  <CodeBlock @code="https://centrale-vindplaats.lblod.info/sparql" />
  <p>
    Dit endpoint heeft UI beschikbaar waar SPARQL query's in uitgevoerd kunnen worden. De query's kunnen ook aan de hand van HTTP calls uitgevoerd worden. De specificatie van de HTTP-calls vindt u <AuLinkExternal href="https://www.w3.org/TR/sparql11-protocol/">hier</AuLinkExternal>.
  </p>
  <p>
    De onderliggende HTTP-calls van <AuLinkExternal href="https://centrale-vindplaats.lblod.info/sparql">https://centrale-vindplaats.lblod.info/sparql</AuLinkExternal> respecteren deze standaard. Mocht u op zoek zijn naar hoe deze SPARQL query's omgezet worden naar HTTP-calls, vormt de UI een goed startpunt. De UI zelf is een instantie van <AuLinkExternal href="https://triply.cc/docs/yasgui">Yasgui</AuLinkExternal>. Verder informatie over het gebruik ervan, vindt u daar.
  </p>
  <p>
    Momenteel host <AuLinkExternal href="https://centrale-vindplaats.lblod.info">https://centrale-vindplaats.lblod.info</AuLinkExternal> alle data die beschikbaar is op <AuLinkExternal href="https://mandaten.lokaalbestuur.vlaanderen.be/">https://mandaten.lokaalbestuur.vlaanderen.be</AuLinkExternal> en <AuLinkExternal href="https://leidinggevenden.lokaalbestuur.vlaanderen.be/">https://leidinggevenden.lokaalbestuur.vlaanderen.be</AuLinkExternal>.
  </p>
  
  <AuHeading @level="2" @skin="2">Voorbeelden</AuHeading>
  <p>
    De volgende sectie bevat een aantal voorbeelden, specifiek geralateerd aan het model.
  </p>
  
  <AuHeading @level="3" @skin="3">Oplijsten bestuurseenheden en hun classificatie</AuHeading>
  <Snippet @snippetFilename="centrale-vindplaats-sparql/bestuurseenheden-en-classificatie.sparql" />
  
  <AuHeading @level="3" @skin="3">Lijst alle bestuursorganen (in bestuursperiode op)</AuHeading>
  <p>
    De lijst van alle bestuursorganen (in bestuursperiode) wordt hier opgelijst, alsook hun naam, start en eind datum.
  </p>
  <Snippet @snippetFilename="centrale-vindplaats-sparql/bestuursorganen.sparql" />
  
  <AuHeading @level="3" @skin="3">Lijst van alle mandaten, en de bijbehorende personen</AuHeading>
  <Snippet @snippetFilename="centrale-vindplaats-sparql/mandaten-en-personen.sparql" />
  
  <AuHeading @level="3" @skin="3">Overzicht van leidinggevenden per bestuurseenheid</AuHeading>
  <Snippet @snippetFilename="centrale-vindplaats-sparql/leidinggevenden-per-bestuurseenheid.sparql" />
  
  <AuHeading @level="3" @skin="3">Een vraag over de Burgemeester van Antwerpen</AuHeading>
  <p>
    Gegeven de Burgemeester van Antwerpen voor bestuursperiode startende op 2019, welke andere mandaten vinden we terug voor deze persoon?
  </p>
  <Snippet @snippetFilename="centrale-vindplaats-sparql/voorbeeld-burgemeester-antwerpen.sparql" />
  */
  {
    "id": "FdLt36B5",
    "block": "[[[8,[39,0],null,[[\"@level\",\"@skin\"],[\"1\",\"1\"]],[[\"default\"],[[[[1,\"Centrale Vindplaats SPARQL endpoint\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Dit database-endpoint kan bevraagd worden aan de hand van SPARQL, een query-taal om RDF data te manipuleren. RDF is een formaat dat binnen het kader van het semantische web -en dus linked data- zeer vaak voorkomt. \"],[10,\"br\"],[12],[13],[1,\"\\n  Het LBLOD-project gebruikt RDF intensief. Verschillende datasets worden gepubliceerd als Turtle en RDFa, serializatie-formaten die de RDF-standaard respecteren. \"],[10,\"br\"],[12],[13],[1,\"\\n  Dit endpoint kan gebruikt worden om rechstreeks op de bron te werken. Dit helpt niet alleen om het aantal tussenliggende conversies te verminderen, maar ook heel praktisch om complexere bevragingen in minder stappen uit te voeren. \"],[10,\"br\"],[12],[13],[1,\"\\n  Met SPARQL staat men dichter bij de data, en dus dichter op het model.\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Benaderen van het endpoint\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Het endpoint staat beschikbaar op \"],[10,\"br\"],[12],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[8,[39,1],null,[[\"@code\"],[\"https://centrale-vindplaats.lblod.info/sparql\"]],null],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Dit endpoint heeft UI beschikbaar waar SPARQL query's in uitgevoerd kunnen worden. De query's kunnen ook aan de hand van HTTP calls uitgevoerd worden. De specificatie van de HTTP-calls vindt u \"],[8,[39,2],[[24,6,\"https://www.w3.org/TR/sparql11-protocol/\"]],null,[[\"default\"],[[[[1,\"hier\"]],[]]]]],[1,\".\\n\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"\\n  De onderliggende HTTP-calls van \"],[8,[39,2],[[24,6,\"https://centrale-vindplaats.lblod.info/sparql\"]],null,[[\"default\"],[[[[1,\"https://centrale-vindplaats.lblod.info/sparql\"]],[]]]]],[1,\" respecteren deze standaard. Mocht u op zoek zijn naar hoe deze SPARQL query's omgezet worden naar HTTP-calls, vormt de UI een goed startpunt. De UI zelf is een instantie van \"],[8,[39,2],[[24,6,\"https://triply.cc/docs/yasgui\"]],null,[[\"default\"],[[[[1,\"Yasgui\"]],[]]]]],[1,\". Verder informatie over het gebruik ervan, vindt u daar.\\n\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Momenteel host \"],[8,[39,2],[[24,6,\"https://centrale-vindplaats.lblod.info\"]],null,[[\"default\"],[[[[1,\"https://centrale-vindplaats.lblod.info\"]],[]]]]],[1,\" alle data die beschikbaar is op \"],[8,[39,2],[[24,6,\"https://mandaten.lokaalbestuur.vlaanderen.be/\"]],null,[[\"default\"],[[[[1,\"https://mandaten.lokaalbestuur.vlaanderen.be\"]],[]]]]],[1,\" en \"],[8,[39,2],[[24,6,\"https://leidinggevenden.lokaalbestuur.vlaanderen.be/\"]],null,[[\"default\"],[[[[1,\"https://leidinggevenden.lokaalbestuur.vlaanderen.be\"]],[]]]]],[1,\".\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Voorbeelden\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  De volgende sectie bevat een aantal voorbeelden, specifiek geralateerd aan het model.\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Oplijsten bestuurseenheden en hun classificatie\"]],[]]]]],[1,\"\\n\"],[8,[39,3],null,[[\"@snippetFilename\"],[\"centrale-vindplaats-sparql/bestuurseenheden-en-classificatie.sparql\"]],null],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Lijst alle bestuursorganen (in bestuursperiode op)\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  De lijst van alle bestuursorganen (in bestuursperiode) wordt hier opgelijst, alsook hun naam, start en eind datum.\\n\"],[13],[1,\"\\n\"],[8,[39,3],null,[[\"@snippetFilename\"],[\"centrale-vindplaats-sparql/bestuursorganen.sparql\"]],null],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Lijst van alle mandaten, en de bijbehorende personen\"]],[]]]]],[1,\"\\n\"],[8,[39,3],null,[[\"@snippetFilename\"],[\"centrale-vindplaats-sparql/mandaten-en-personen.sparql\"]],null],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Overzicht van leidinggevenden per bestuurseenheid\"]],[]]]]],[1,\"\\n\"],[8,[39,3],null,[[\"@snippetFilename\"],[\"centrale-vindplaats-sparql/leidinggevenden-per-bestuurseenheid.sparql\"]],null],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Een vraag over de Burgemeester van Antwerpen\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Gegeven de Burgemeester van Antwerpen voor bestuursperiode startende op 2019, welke andere mandaten vinden we terug voor deze persoon?\\n\"],[13],[1,\"\\n\"],[8,[39,3],null,[[\"@snippetFilename\"],[\"centrale-vindplaats-sparql/voorbeeld-burgemeester-antwerpen.sparql\"]],null]],[],false,[\"au-heading\",\"code-block\",\"au-link-external\",\"snippet\"]]",
    "moduleName": "pages-vendors/templates/docs/centrale-vindplaats-sparql.hbs",
    "isStrictMode": false
  });
});
;define("pages-vendors/templates/docs/erediensten-toezichtsdatabank-sparql", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <AuHeading @skin="1" @level="1">Erediensten Toezichtsdatabank SPARQL API <em>[CONCEPT]</em></AuHeading>
  
  <p>
    Via deze API is het mogelijk om SPARQL query's uit te voeren op de Toezichtsdatabank voor Erediensten waar besluiten te vinden zijn die naar het Loket zijn gepubliceerd. Deze API is gebaseerd op de <LinkTo @route="docs.vendor-sparql">Vendor SPARQL API</LinkTo>.
  </p>
  
  <AuHeading @level="2" @skin="2">Verbinden</AuHeading>
  <p>
    De endpoint voor deze API kan bereikt worden via
  </p>
  <CodeBlock @code="https://databankerediensten.lokaalbestuur.vlaanderen.be" />
  <p>
    Ter volledigheid staat hieronder de volledige lijst aan URL's voor het inloggen, sturen van query's en het uitloggen respectievelijk.
  </p>
  <CodeBlock @code="https://databankerediensten.lokaalbestuur.vlaanderen.be/vendor/login
  https://databankerediensten.lokaalbestuur.vlaanderen.be/vendor/sparql
  https://databankerediensten.lokaalbestuur.vlaanderen.be/vendor/logout" />
  <p>
    <strong>Bekijk zeker de pagina over de <LinkTo @route="docs.vendor-sparql">Vendor SPARQL API</LinkTo> om te leren hoe de SPARQL API werkt!</strong>
  </p>
  
  <AuHeading @level="2" @skin="2">Sturen van query's</AuHeading>
  <p>
    Op dit endpoint kunnen alle gegevens omtrent inzendingen teruggevonden worden, samen met het ingevulde formulier voor de publicatie in Loket. Deze formuliergegevens zitten in bestanden die via een downloadlink kunnen worden gedownload. Al deze informatie is vrij te ondervragen in deze SPARQL endpoint met de volledige vrijheid van SPARQL voor filteren op datum, URI, regex, &hellip;
  </p>
  
  <AuHeading @level="3" @skin="3">Voorbeelden</AuHeading>
  <p>
    Dit eerste eenvoudige voorbeeld geeft een korte lijst van een aantal willekeurige inzendingen (Submissions); een query voor het ontdekken van een aantal URI's die in volgende query's gebruikt kunnen worden.
  </p>
  <Snippet @snippetFilename="eredienst-toezichtsdatabank-sparql/voorbeeld-willekeurige-lijst.sparql" />
  
  <p>
    In dit volgend voorbeeld wordt er gezocht naar de Submissions in maart van het jaar 2024. Als antwoord wordt een lijst van de URI's en hun creatiedatum gegeven die gesorteerd is op die datum.
  </p>
  <Snippet @snippetFilename="eredienst-toezichtsdatabank-sparql/voorbeeld-submissions-in-maart.sparql" />
  
  <p>
    Om te zoeken naar alle Submissions van een bepaald type van publicatie kan inspiratie gehaald worden uit volgend voorbeeld. Dit kan gecombineerd worden met een filter op creatiedatum bijvoorbeeld of met een invulling van de bestuurseenheid om enkel over een bepaalde bestuurseenheid te zoeken.
  </p>
  <Snippet @snippetFilename="eredienst-toezichtsdatabank-sparql/voorbeeld-documenttype.sparql" />
  
  <p>
    Om in detail alle informatie over een Submission, de formuliergegevens (FormData) en alle gelinkte bestanden te bekomen kan een query als de onderstaande gebruikt worden.
  </p>
  <Snippet @snippetFilename="eredienst-toezichtsdatabank-sparql/voorbeeld-construct.sparql" />
  <p>
    In bovenstaande query wordt gebruik gemaakt van <CodeInline @code="UNION" /> om de performantie van de query te verbeteren. Het gaat over 3 gelinkte entiteiten waarvan alle eigenschappen worden opgevraagd. Buiten de links tussen de entiteiten is er verder geen verband meer en kunnen de eigenschappen onafhankelijk van elkaar opgevraagd worden. Zonder de <CodeInline @code="UNION" /> wordt een gigantisch scalair product opgebouwd in de SPARQL engine. Zodanig dat de query uiteindelijk niet afgewerkt kan worden vanwege geheugen of tijdlimitaties.
  </p>
  
  <p>
    Om voor een bepaalde Submission een lijst te krijgen van alle gelinkte bestanden van de formuliergegevens, gebruik het onderstaande voorbeeld.
  </p>
  <Snippet @snippetFilename="eredienst-toezichtsdatabank-sparql/voorbeeld-downloadlink.sparql" />
  <p>
    Met deze downloadlinks kan het bestand gedownload worden door middel van simpele HTTP requests. Houdt rekening dat dezelfde authenticatie moet gebruikt worden al voor de toegang tot deze SPARQL API.
  </p>
  
  <AuHeading @level="2" @skin="2">Model van beschikbare data</AuHeading>
  
  <a class="block au-u-text-right" href="assets/diagrams/erediensten-toezichtsdatabank-sparql.svg">
    <figure>
      <img itemprop="thumbnail" src="assets/diagrams/erediensten-toezichtsdatabank-sparql.svg" alt="Diagram van beschikbare gegevens" />
      <figcaption>Diagram van Linked Data van beschikbare gegevens in het endpoint</figcaption>
    </figure>
  </a>
  
  <p>
    In boven- en onderstaand model wordt gebruik gemaakt van volgende prefixen.
  </p>
  
  <AuTable>
    <:header>
      <tr>
        <th>Prefix</th>
        <th>URI</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td><CodeInline @code="adms" /></td>
        <td><AuLinkExternal href="http://www.w3.org/ns/adms#">http://www.w3.org/ns/adms#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="besluit" /></td>
        <td><AuLinkExternal href="http://data.vlaanderen.be/ns/besluit#">http://data.vlaanderen.be/ns/besluit#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="dct" /></td>
        <td><AuLinkExternal href="http://purl.org/dc/terms/">http://purl.org/dc/terms/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="skos" /></td>
        <td><AuLinkExternal href="http://www.w3.org/2004/02/skos/">http://www.w3.org/2004/02/skos/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="nfo" /></td>
        <td><AuLinkExternal href="http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#">http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="nie" /></td>
        <td><AuLinkExternal href="http://www.semanticdesktop.org/ontologies/2007/01/19/nie#">http://www.semanticdesktop.org/ontologies/2007/01/19/nie#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="rdf" /></td>
        <td><AuLinkExternal href="http://www.w3.org/1999/02/22-rdf-syntax-ns#">http://www.w3.org/1999/02/22-rdf-syntax-ns#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="xsd" /></td>
        <td><AuLinkExternal href="http://www.w3.org/2001/XMLSchema#">http://www.w3.org/2001/XMLSchema#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="ext" /></td>
        <td><AuLinkExternal href="http://mu.semte.ch/vocabularies/ext/">http://mu.semte.ch/vocabularies/ext/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="am" /></td>
        <td><AuLinkExternal href="http://lblod.data.gift/vocabularies/automatische-melding/">http://lblod.data.gift/vocabularies/automatische-melding/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="core" /></td>
        <td><AuLinkExternal href="http://mu.semte.ch/vocabularies/core/">http://mu.semte.ch/vocabularies/core/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="nmo" /></td>
        <td><AuLinkExternal href="http://www.semanticdesktop.org/ontologies/2007/03/22/nmo#">http://www.semanticdesktop.org/ontologies/2007/03/22/nmo#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="prov" /></td>
        <td><AuLinkExternal href="http://www.w3.org/ns/prov#">http://www.w3.org/ns/prov#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="pav" /></td>
        <td><AuLinkExternal href="http://purl.org/pav/">http://purl.org/pav/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="fd" /></td>
        <td><AuLinkExternal href="http://lblod.data.gift/vocabularies/besluit/submission/form-data/">http://lblod.data.gift/vocabularies/besluit/submission/form-data/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="eli" /></td>
        <td><AuLinkExternal href="http://data.europa.eu/eli/ontology#">http://data.europa.eu/eli/ontology#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="le" /></td>
        <td><AuLinkExternal href="http://linkedeconomy.org/ontology#">http://linkedeconomy.org/ontology#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="dbpedia" /></td>
        <td><AuLinkExternal href="http://dbpedia.org/ontology/">http://dbpedia.org/ontology/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="mob" /></td>
        <td><AuLinkExternal href="http://rdf.myexperiment.org/ontologies/base/">http://rdf.myexperiment.org/ontologies/base/</AuLinkExternal></td>
      </tr>
    </:body>
  </AuTable>
  
  <AuHeading @level="3" @skin="3"><CodeInline @code="mob:Submission" /></AuHeading>
  <p>
    Dit is de entiteit die informatie over de feitelijke inzending encodeert.
  </p>
  <AuHeading @level="4" @skin="4">Eigenschappen</AuHeading>
  <AuTable>
    <:header>
    <tr>
      <th>Naam</th>
      <th>URI</th>
      <th>Verwacht type</th>
      <th>Beschrijving</th>
    </tr>
    </:header>
    <:body>
      <tr>
        <td>uuid</td>
        <td><CodeInline @code="core:uuid" /></td>
        <td><CodeInline @code="xsd:string" /></td>
        <td>UUID van de entitieit</td>
      </tr>
      <tr>
        <td>created</td>
        <td><CodeInline @code="dct:created" /></td>
        <td><CodeInline @code="xsd:dateTime" /></td>
        <td>Creatiedatum van de Submission</td>
      </tr>
      <tr>
        <td>sent date</td>
        <td><CodeInline @code="nmo:sentDate" /></td>
        <td><CodeInline @code="xsd:dateTime" /></td>
        <td>Datum van inzending</td>
      </tr>
      <tr>
        <td>modified</td>
        <td><CodeInline @code="dct:modified" /></td>
        <td><CodeInline @code="xsd:dateTime" /></td>
        <td>Laatste bewerkingsdatum van de Submission</td>
      </tr>
      <tr>
        <td>created by</td>
        <td><CodeInline @code="pav:createdBy" /></td>
        <td><CodeInline @code="besluit:Bestuurseenheid" /></td>
        <td>Bestuurseenheid voor dewelke deze Submission werd aangemaakt</td>
      </tr>
      <tr>
        <td>provided by</td>
        <td><CodeInline @code="pav:providedBy" /></td>
        <td><CodeInline @code="ext:Vendor" /></td>
        <td>Vendor die de Submission heeft ingezonden</td>
      </tr>
      <tr>
        <td>status</td>
        <td><CodeInline @code="adms:status" /></td>
        <td><CodeInline @code="skos:Concept" /> of <CodeInline @code="ext:SubmissionDocumentStatus" /></td>
        <td>Status van de inzending, zie de Documentstatussen inzendingen onderaan deze pagina</td>
      </tr>
      <tr>
        <td>subject</td>
        <td><CodeInline @code="dct:subject" /></td>
        <td>IRI</td>
        <td>URI van de vendor voor de Submission</td>
      </tr>
      <tr>
        <td>at location</td>
        <td><CodeInline @code="prov:atLocation" /></td>
        <td>IRI</td>
        <td>URL op de vendor applicatie van de gedownloade resource</td>
      </tr>
      <tr>
        <td>generated</td>
        <td><CodeInline @code="prov:generated" /></td>
        <td><CodeInline @code="am:FormData" /></td>
        <td>De formuliergegevens</td>
      </tr>
    </:body>
  </AuTable>
  
  <AuHeading @level="3" @skin="3"><CodeInline @code="ext:SubmissionDocument" /></AuHeading>
  <p>
    Deze entiteit bestaat alleen maar als het document verwijst naar andere documenten en refereert in feite naar het ingezonden document.
  </p>
  <AuHeading @level="4" @skin="4">Eigenschappen</AuHeading>
  <AuTable>
    <:header>
    <tr>
      <th>Naam</th>
      <th>URI</th>
      <th>Verwacht type</th>
      <th>Beschrijving</th>
    </tr>
    </:header>
    <:body>
      <tr>
        <td colspan=4>Geen eigenschappen</td>
      </tr>
    </:body>
  </AuTable>
  
  <AuHeading @level="3" @skin="3"><CodeInline @code="besluit:Artikel" /></AuHeading>
  <p>
    Deze entiteit bestaat alleen maar als het document verwijst naar andere documenten en staat in voor deze verwijzing.
  </p>
  <AuHeading @level="4" @skin="4">Eigenschappen</AuHeading>
  <AuTable>
    <:header>
    <tr>
      <th>Naam</th>
      <th>URI</th>
      <th>Verwacht type</th>
      <th>Beschrijving</th>
    </tr>
    </:header>
    <:body>
      <tr>
        <td>refers to</td>
        <td><CodeInline @code="eli:refers_to" /></td>
        <td><CodeInline @code="ext:SubmissionDocument" /></td>
        <td>Ander document dat werd gerefereerd in dit document</td>
      </tr>
      <tr>
        <td>type document</td>
        <td><CodeInline @code="eli:type_document" /></td>
        <td>IRI</td>
        <td>Type van het document</td>
      </tr>
    </:body>
  </AuTable>
  
  <AuHeading @level="3" @skin="3"><CodeInline @code="am:FormData" /></AuHeading>
  <p>
    Deze entiteit bevat de gegevens over het ingevulde formulier gelinkt aan de inzending.
  </p>
  <AuHeading @level="4" @skin="4">Eigenschappen</AuHeading>
  <AuTable>
    <:header>
    <tr>
      <th>Naam</th>
      <th>URI</th>
      <th>Verwacht type</th>
      <th>Beschrijving</th>
    </tr>
    </:header>
    <:body>
      <tr>
        <td>uuid</td>
        <td><CodeInline @code="core:uuid" /></td>
        <td><CodeInline @code="xsd:string" /></td>
        <td>UUID van de entitieit</td>
      </tr>
      <tr>
        <td>type</td>
        <td><CodeInline @code="dct:type" /></td>
        <td><CodeInline @code="skos:Concept" /></td>
        <td>Het soort besluittype van dit document</td>
      </tr>
      <tr>
        <td>submission type</td>
        <td><CodeInline @code="fd:submissionType" /></td>
        <td><CodeInline @code="skos:Concept" /></td>
        <td>Het soort besluittype van dit document</td>
      </tr>
      <tr>
        <td>session started at</td>
        <td><CodeInline @code="fd:sessionStartedAtTime" /></td>
        <td><CodeInline @code="xsd:dateTime" /></td>
        <td>Starttijdstip van de zitting waar het besluit werd genomen (indien van toepassing)</td>
      </tr>
      <tr>
        <td>financial year</td>
        <td><CodeInline @code="le:financialYear" /></td>
        <td><CodeInline @code="xsd:string" /></td>
        <td>Financieel jaar (indien van toepassing)</td>
      </tr>
      <tr>
        <td>passed by</td>
        <td><CodeInline @code="eli:passed_by" /></td>
        <td><CodeInline @code="besluit:Bestuursorgaan" /></td>
        <td>Bestuursorgaan dat de besluiten heeft ondertekend</td>
      </tr>
      <tr>
        <td>has part</td>
        <td><CodeInline @code="dct:hasPart" /></td>
        <td><CodeInline @code="nfo:FileDataObject" />, <CodeInline @code="nfo:RemoteDataObject" /></td>
        <td>Onderdeel van de formuliergegevens of bijlagen</td>
      </tr>
    </:body>
  </AuTable>
  
  <AuHeading @level="3" @skin="3"><CodeInline @code="nfo:FileDataObject" />, <CodeInline @code="nfo:RemoteDataObject" /></AuHeading>
  <p>
    Deze twee klassen worden vaak samen gebruikt op dezelfde entiteit. Deze beschrijven bestanden als bijlagen gelinkt aan de Submission en FormData.
  </p>
  <AuHeading @level="4" @skin="4">Eigenschappen</AuHeading>
  <AuTable>
    <:header>
    <tr>
      <th>Naam</th>
      <th>URI</th>
      <th>Verwacht type</th>
      <th>Beschrijving</th>
    </tr>
    </:header>
    <:body>
      <tr>
        <td>uuid</td>
        <td><CodeInline @code="core:uuid" /></td>
        <td><CodeInline @code="xsd:string" /></td>
        <td>UUID van de entitieit</td>
      </tr>
      <tr>
        <td>created</td>
        <td><CodeInline @code="dct:created" /></td>
        <td><CodeInline @code="xsd:dateTime" /></td>
        <td>Creatiedatum van het bestand</td>
      </tr>
      <tr>
        <td>modified</td>
        <td><CodeInline @code="dct:modified" /></td>
        <td><CodeInline @code="xsd:dateTime" /></td>
        <td>Laatste bewerkingsdatum van het bestand</td>
      </tr>
      <tr>
        <td>file size</td>
        <td><CodeInline @code="nfo:fileSize" /></td>
        <td><CodeInline @code="xsd:string" /></td>
        <td>Bestandsgrootte</td>
      </tr>
      <tr>
        <td>file extension</td>
        <td><CodeInline @code="dbpedia:fileExtension" /></td>
        <td><CodeInline @code="xsd:string" /></td>
        <td>Bestandsextentie</td>
      </tr>
      <tr>
        <td>format</td>
        <td><CodeInline @code="dct:format" /></td>
        <td><CodeInline @code="xsd:string" /></td>
        <td>MIME type van de indeling van het bestand</td>
      </tr>
      <tr>
        <td>file name</td>
        <td><CodeInline @code="nfo:fileName" /></td>
        <td><CodeInline @code="xsd:string" /></td>
        <td>Bestandsnaam</td>
      </tr>
      <tr>
        <td>status</td>
        <td><CodeInline @code="adms:status" /></td>
        <td>IRI</td>
        <td>Downloadstatus</td>
      </tr>
      <tr>
        <td>had primary source</td>
        <td><CodeInline @code="prov:hadPrimarySource" /></td>
        <td>IRI</td>
        <td>URL in de vendor applicatie waar oorspronkelijk het bestand van werd gedownload</td>
      </tr>
      <tr>
        <td>URL</td>
        <td><CodeInline @code="nie:url" /></td>
        <td><CodeInline @code="xsd:string" /></td>
        <td>URL waar het bestand op dit moment in deze applicatie te downloaden is</td>
      </tr>
    </:body>
  </AuTable>
  */
  {
    "id": "FrK1883c",
    "block": "[[[8,[39,0],null,[[\"@skin\",\"@level\"],[\"1\",\"1\"]],[[\"default\"],[[[[1,\"Erediensten Toezichtsdatabank SPARQL API \"],[10,\"em\"],[12],[1,\"[CONCEPT]\"],[13]],[]]]]],[1,\"\\n\\n\"],[10,2],[12],[1,\"\\n  Via deze API is het mogelijk om SPARQL query's uit te voeren op de Toezichtsdatabank voor Erediensten waar besluiten te vinden zijn die naar het Loket zijn gepubliceerd. Deze API is gebaseerd op de \"],[8,[39,1],null,[[\"@route\"],[\"docs.vendor-sparql\"]],[[\"default\"],[[[[1,\"Vendor SPARQL API\"]],[]]]]],[1,\".\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Verbinden\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  De endpoint voor deze API kan bereikt worden via\\n\"],[13],[1,\"\\n\"],[8,[39,2],null,[[\"@code\"],[\"https://databankerediensten.lokaalbestuur.vlaanderen.be\"]],null],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Ter volledigheid staat hieronder de volledige lijst aan URL's voor het inloggen, sturen van query's en het uitloggen respectievelijk.\\n\"],[13],[1,\"\\n\"],[8,[39,2],null,[[\"@code\"],[\"https://databankerediensten.lokaalbestuur.vlaanderen.be/vendor/login\\nhttps://databankerediensten.lokaalbestuur.vlaanderen.be/vendor/sparql\\nhttps://databankerediensten.lokaalbestuur.vlaanderen.be/vendor/logout\"]],null],[1,\"\\n\"],[10,2],[12],[1,\"\\n  \"],[10,\"strong\"],[12],[1,\"Bekijk zeker de pagina over de \"],[8,[39,1],null,[[\"@route\"],[\"docs.vendor-sparql\"]],[[\"default\"],[[[[1,\"Vendor SPARQL API\"]],[]]]]],[1,\" om te leren hoe de SPARQL API werkt!\"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Sturen van query's\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Op dit endpoint kunnen alle gegevens omtrent inzendingen teruggevonden worden, samen met het ingevulde formulier voor de publicatie in Loket. Deze formuliergegevens zitten in bestanden die via een downloadlink kunnen worden gedownload. Al deze informatie is vrij te ondervragen in deze SPARQL endpoint met de volledige vrijheid van SPARQL voor filteren op datum, URI, regex, …\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Voorbeelden\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Dit eerste eenvoudige voorbeeld geeft een korte lijst van een aantal willekeurige inzendingen (Submissions); een query voor het ontdekken van een aantal URI's die in volgende query's gebruikt kunnen worden.\\n\"],[13],[1,\"\\n\"],[8,[39,3],null,[[\"@snippetFilename\"],[\"eredienst-toezichtsdatabank-sparql/voorbeeld-willekeurige-lijst.sparql\"]],null],[1,\"\\n\\n\"],[10,2],[12],[1,\"\\n  In dit volgend voorbeeld wordt er gezocht naar de Submissions in maart van het jaar 2024. Als antwoord wordt een lijst van de URI's en hun creatiedatum gegeven die gesorteerd is op die datum.\\n\"],[13],[1,\"\\n\"],[8,[39,3],null,[[\"@snippetFilename\"],[\"eredienst-toezichtsdatabank-sparql/voorbeeld-submissions-in-maart.sparql\"]],null],[1,\"\\n\\n\"],[10,2],[12],[1,\"\\n  Om te zoeken naar alle Submissions van een bepaald type van publicatie kan inspiratie gehaald worden uit volgend voorbeeld. Dit kan gecombineerd worden met een filter op creatiedatum bijvoorbeeld of met een invulling van de bestuurseenheid om enkel over een bepaalde bestuurseenheid te zoeken.\\n\"],[13],[1,\"\\n\"],[8,[39,3],null,[[\"@snippetFilename\"],[\"eredienst-toezichtsdatabank-sparql/voorbeeld-documenttype.sparql\"]],null],[1,\"\\n\\n\"],[10,2],[12],[1,\"\\n  Om in detail alle informatie over een Submission, de formuliergegevens (FormData) en alle gelinkte bestanden te bekomen kan een query als de onderstaande gebruikt worden.\\n\"],[13],[1,\"\\n\"],[8,[39,3],null,[[\"@snippetFilename\"],[\"eredienst-toezichtsdatabank-sparql/voorbeeld-construct.sparql\"]],null],[1,\"\\n\"],[10,2],[12],[1,\"\\n  In bovenstaande query wordt gebruik gemaakt van \"],[8,[39,4],null,[[\"@code\"],[\"UNION\"]],null],[1,\" om de performantie van de query te verbeteren. Het gaat over 3 gelinkte entiteiten waarvan alle eigenschappen worden opgevraagd. Buiten de links tussen de entiteiten is er verder geen verband meer en kunnen de eigenschappen onafhankelijk van elkaar opgevraagd worden. Zonder de \"],[8,[39,4],null,[[\"@code\"],[\"UNION\"]],null],[1,\" wordt een gigantisch scalair product opgebouwd in de SPARQL engine. Zodanig dat de query uiteindelijk niet afgewerkt kan worden vanwege geheugen of tijdlimitaties.\\n\"],[13],[1,\"\\n\\n\"],[10,2],[12],[1,\"\\n  Om voor een bepaalde Submission een lijst te krijgen van alle gelinkte bestanden van de formuliergegevens, gebruik het onderstaande voorbeeld.\\n\"],[13],[1,\"\\n\"],[8,[39,3],null,[[\"@snippetFilename\"],[\"eredienst-toezichtsdatabank-sparql/voorbeeld-downloadlink.sparql\"]],null],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Met deze downloadlinks kan het bestand gedownload worden door middel van simpele HTTP requests. Houdt rekening dat dezelfde authenticatie moet gebruikt worden al voor de toegang tot deze SPARQL API.\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Model van beschikbare data\"]],[]]]]],[1,\"\\n\\n\"],[10,3],[14,0,\"block au-u-text-right\"],[14,6,\"assets/diagrams/erediensten-toezichtsdatabank-sparql.svg\"],[12],[1,\"\\n  \"],[10,\"figure\"],[12],[1,\"\\n    \"],[10,\"img\"],[14,\"itemprop\",\"thumbnail\"],[14,\"src\",\"assets/diagrams/erediensten-toezichtsdatabank-sparql.svg\"],[14,\"alt\",\"Diagram van beschikbare gegevens\"],[12],[13],[1,\"\\n    \"],[10,\"figcaption\"],[12],[1,\"Diagram van Linked Data van beschikbare gegevens in het endpoint\"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[10,2],[12],[1,\"\\n  In boven- en onderstaand model wordt gebruik gemaakt van volgende prefixen.\\n\"],[13],[1,\"\\n\\n\"],[8,[39,5],null,null,[[\"header\",\"body\"],[[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Prefix\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"URI\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"adms\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,6],[[24,6,\"http://www.w3.org/ns/adms#\"]],null,[[\"default\"],[[[[1,\"http://www.w3.org/ns/adms#\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"besluit\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,6],[[24,6,\"http://data.vlaanderen.be/ns/besluit#\"]],null,[[\"default\"],[[[[1,\"http://data.vlaanderen.be/ns/besluit#\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"dct\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,6],[[24,6,\"http://purl.org/dc/terms/\"]],null,[[\"default\"],[[[[1,\"http://purl.org/dc/terms/\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"skos\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,6],[[24,6,\"http://www.w3.org/2004/02/skos/\"]],null,[[\"default\"],[[[[1,\"http://www.w3.org/2004/02/skos/\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"nfo\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,6],[[24,6,\"http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#\"]],null,[[\"default\"],[[[[1,\"http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"nie\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,6],[[24,6,\"http://www.semanticdesktop.org/ontologies/2007/01/19/nie#\"]],null,[[\"default\"],[[[[1,\"http://www.semanticdesktop.org/ontologies/2007/01/19/nie#\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"rdf\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,6],[[24,6,\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"]],null,[[\"default\"],[[[[1,\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"xsd\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,6],[[24,6,\"http://www.w3.org/2001/XMLSchema#\"]],null,[[\"default\"],[[[[1,\"http://www.w3.org/2001/XMLSchema#\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"ext\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,6],[[24,6,\"http://mu.semte.ch/vocabularies/ext/\"]],null,[[\"default\"],[[[[1,\"http://mu.semte.ch/vocabularies/ext/\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"am\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,6],[[24,6,\"http://lblod.data.gift/vocabularies/automatische-melding/\"]],null,[[\"default\"],[[[[1,\"http://lblod.data.gift/vocabularies/automatische-melding/\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"core\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,6],[[24,6,\"http://mu.semte.ch/vocabularies/core/\"]],null,[[\"default\"],[[[[1,\"http://mu.semte.ch/vocabularies/core/\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"nmo\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,6],[[24,6,\"http://www.semanticdesktop.org/ontologies/2007/03/22/nmo#\"]],null,[[\"default\"],[[[[1,\"http://www.semanticdesktop.org/ontologies/2007/03/22/nmo#\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"prov\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,6],[[24,6,\"http://www.w3.org/ns/prov#\"]],null,[[\"default\"],[[[[1,\"http://www.w3.org/ns/prov#\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"pav\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,6],[[24,6,\"http://purl.org/pav/\"]],null,[[\"default\"],[[[[1,\"http://purl.org/pav/\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"fd\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,6],[[24,6,\"http://lblod.data.gift/vocabularies/besluit/submission/form-data/\"]],null,[[\"default\"],[[[[1,\"http://lblod.data.gift/vocabularies/besluit/submission/form-data/\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"eli\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,6],[[24,6,\"http://data.europa.eu/eli/ontology#\"]],null,[[\"default\"],[[[[1,\"http://data.europa.eu/eli/ontology#\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"le\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,6],[[24,6,\"http://linkedeconomy.org/ontology#\"]],null,[[\"default\"],[[[[1,\"http://linkedeconomy.org/ontology#\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"dbpedia\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,6],[[24,6,\"http://dbpedia.org/ontology/\"]],null,[[\"default\"],[[[[1,\"http://dbpedia.org/ontology/\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"mob\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,6],[[24,6,\"http://rdf.myexperiment.org/ontologies/base/\"]],null,[[\"default\"],[[[[1,\"http://rdf.myexperiment.org/ontologies/base/\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[8,[39,4],null,[[\"@code\"],[\"mob:Submission\"]],null]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Dit is de entiteit die informatie over de feitelijke inzending encodeert.\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Eigenschappen\"]],[]]]]],[1,\"\\n\"],[8,[39,5],null,null,[[\"header\",\"body\"],[[[[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"Naam\"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"URI\"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"Verwacht type\"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"Beschrijving\"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"uuid\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"core:uuid\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"xsd:string\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"UUID van de entitieit\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"created\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"dct:created\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"xsd:dateTime\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Creatiedatum van de Submission\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"sent date\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"nmo:sentDate\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"xsd:dateTime\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Datum van inzending\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"modified\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"dct:modified\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"xsd:dateTime\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Laatste bewerkingsdatum van de Submission\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"created by\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"pav:createdBy\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"besluit:Bestuurseenheid\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Bestuurseenheid voor dewelke deze Submission werd aangemaakt\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"provided by\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"pav:providedBy\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"ext:Vendor\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Vendor die de Submission heeft ingezonden\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"status\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"adms:status\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"skos:Concept\"]],null],[1,\" of \"],[8,[39,4],null,[[\"@code\"],[\"ext:SubmissionDocumentStatus\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Status van de inzending, zie de Documentstatussen inzendingen onderaan deze pagina\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"subject\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"dct:subject\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"IRI\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"URI van de vendor voor de Submission\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"at location\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"prov:atLocation\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"IRI\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"URL op de vendor applicatie van de gedownloade resource\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"generated\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"prov:generated\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"am:FormData\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"De formuliergegevens\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[8,[39,4],null,[[\"@code\"],[\"ext:SubmissionDocument\"]],null]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Deze entiteit bestaat alleen maar als het document verwijst naar andere documenten en refereert in feite naar het ingezonden document.\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Eigenschappen\"]],[]]]]],[1,\"\\n\"],[8,[39,5],null,null,[[\"header\",\"body\"],[[[[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"Naam\"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"URI\"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"Verwacht type\"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"Beschrijving\"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[14,\"colspan\",\"4\"],[12],[1,\"Geen eigenschappen\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[8,[39,4],null,[[\"@code\"],[\"besluit:Artikel\"]],null]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Deze entiteit bestaat alleen maar als het document verwijst naar andere documenten en staat in voor deze verwijzing.\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Eigenschappen\"]],[]]]]],[1,\"\\n\"],[8,[39,5],null,null,[[\"header\",\"body\"],[[[[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"Naam\"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"URI\"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"Verwacht type\"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"Beschrijving\"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"refers to\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"eli:refers_to\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"ext:SubmissionDocument\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Ander document dat werd gerefereerd in dit document\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"type document\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"eli:type_document\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"IRI\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Type van het document\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[8,[39,4],null,[[\"@code\"],[\"am:FormData\"]],null]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Deze entiteit bevat de gegevens over het ingevulde formulier gelinkt aan de inzending.\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Eigenschappen\"]],[]]]]],[1,\"\\n\"],[8,[39,5],null,null,[[\"header\",\"body\"],[[[[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"Naam\"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"URI\"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"Verwacht type\"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"Beschrijving\"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"uuid\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"core:uuid\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"xsd:string\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"UUID van de entitieit\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"type\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"dct:type\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"skos:Concept\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Het soort besluittype van dit document\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"submission type\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"fd:submissionType\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"skos:Concept\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Het soort besluittype van dit document\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"session started at\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"fd:sessionStartedAtTime\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"xsd:dateTime\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Starttijdstip van de zitting waar het besluit werd genomen (indien van toepassing)\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"financial year\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"le:financialYear\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"xsd:string\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Financieel jaar (indien van toepassing)\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"passed by\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"eli:passed_by\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"besluit:Bestuursorgaan\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Bestuursorgaan dat de besluiten heeft ondertekend\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"has part\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"dct:hasPart\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"nfo:FileDataObject\"]],null],[1,\", \"],[8,[39,4],null,[[\"@code\"],[\"nfo:RemoteDataObject\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Onderdeel van de formuliergegevens of bijlagen\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[8,[39,4],null,[[\"@code\"],[\"nfo:FileDataObject\"]],null],[1,\", \"],[8,[39,4],null,[[\"@code\"],[\"nfo:RemoteDataObject\"]],null]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Deze twee klassen worden vaak samen gebruikt op dezelfde entiteit. Deze beschrijven bestanden als bijlagen gelinkt aan de Submission en FormData.\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Eigenschappen\"]],[]]]]],[1,\"\\n\"],[8,[39,5],null,null,[[\"header\",\"body\"],[[[[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"Naam\"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"URI\"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"Verwacht type\"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"Beschrijving\"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"uuid\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"core:uuid\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"xsd:string\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"UUID van de entitieit\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"created\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"dct:created\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"xsd:dateTime\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Creatiedatum van het bestand\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"modified\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"dct:modified\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"xsd:dateTime\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Laatste bewerkingsdatum van het bestand\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"file size\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"nfo:fileSize\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"xsd:string\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Bestandsgrootte\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"file extension\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"dbpedia:fileExtension\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"xsd:string\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Bestandsextentie\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"format\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"dct:format\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"xsd:string\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"MIME type van de indeling van het bestand\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"file name\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"nfo:fileName\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"xsd:string\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Bestandsnaam\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"status\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"adms:status\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"IRI\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Downloadstatus\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"had primary source\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"prov:hadPrimarySource\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"IRI\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"URL in de vendor applicatie waar oorspronkelijk het bestand van werd gedownload\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"URL\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"nie:url\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"xsd:string\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"URL waar het bestand op dit moment in deze applicatie te downloaden is\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]]],[],false,[\"au-heading\",\"link-to\",\"code-block\",\"snippet\",\"code-inline\",\"au-table\",\"au-link-external\"]]",
    "moduleName": "pages-vendors/templates/docs/erediensten-toezichtsdatabank-sparql.hbs",
    "isStrictMode": false
  });
});
;define("pages-vendors/templates/docs/leidinggevenden-annotaties", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <AuHeading @level="1" @skin="1">Leidinggevendendatabank</AuHeading>
  <p>
    De leidinggevenden databank bevat de leidinggevenden van de lokale besturen en hun verzelfstandigde entiteiten. Deze databank volgt een uitbreiding op het applicatieprofiel <AuLinkExternal href="https://data.vlaanderen.be/doc/applicatieprofiel/mandatendatabank/">mandatendatabank</AuLinkExternal>. Dit document beschrijft deze uitbreiding.
  </p>
  
  <AuHeading @level="2" @skin="2">Overzicht</AuHeading>
  <img src="assets/images/leidinggevenden.jpg" alt="leidinggevend UML diagram" />
  
  <AuHeading @level="2" @skin="2">Gebruikte prefixen</AuHeading>
  <AuTable>
    <:header>
      <tr>
        <th>Prefix</th>
        <th>URI</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td><CodeInline @code="adres" /></td>
        <td><AuLinkExternal href="https://data.vlaanderen.be/ns/adres#">https://data.vlaanderen.be/ns/adres#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="foaf" /></td>
        <td><AuLinkExternal href="http://xmlns.com/foaf/0.1/">http://xmlns.com/foaf/0.1/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="lblodlg" /></td>
        <td><AuLinkExternal href="http://data.lblod.info/vocabularies/leidinggevenden/">http://data.lblod.info/vocabularies/leidinggevenden/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="locn" /></td>
        <td><AuLinkExternal href="http://www.w3.org/ns/locn#">http://www.w3.org/ns/locn#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="mandaat" /></td>
        <td><AuLinkExternal href="http://data.vlaanderen.be/ns/mandaat#">http://data.vlaanderen.be/ns/mandaat#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="person" /></td>
        <td><AuLinkExternal href="https://data.vlaanderen.be/ns/persoon#">https://data.vlaanderen.be/ns/persoon#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="persoon" /></td>
        <td><AuLinkExternal href="http://www.w3.org/ns/person#">http://www.w3.org/ns/person#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="org" /></td>
        <td><AuLinkExternal href="http://www.w3.org/ns/org#">http://www.w3.org/ns/org#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="schema" /></td>
        <td><AuLinkExternal href="http://schema.org/">http://schema.org/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="xsd" /></td>
        <td><AuLinkExternal href="http://www.w3.org/2001/XMLSchema#">http://www.w3.org/2001/XMLSchema#</AuLinkExternal></td>
      </tr>
    </:body>
  </AuTable>
  
  <AuHeading @level="2" @skin="2">Entiteiten</AuHeading>
  <AuHeading @level="3" @skin="3">Adresvoorstelling</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <CodeInline @code="locn:Address" />
  </p>
  <AuHeading @level="4" @skin="4">Beschrijving</AuHeading>
  <p>
    Leesbare voorstelling met enkel de basisgegevens van het adres, bedoeld voor het gebruik van een adres als attribuut van een ander object. Overgenomen uit <AuLinkExternal href="https://data.vlaanderen.be/doc/applicatieprofiel/adresregister/#Adresvoorstelling">OSLO applicatieprofiel adresregister</AuLinkExternal>.
  </p>
  <AuHeading @level="4" @skin="4">Eigenschappen</AuHeading>
  <AuTable>
    <:header>
      <tr>
        <th>Naam</th>
        <th>URI</th>
        <th>Verwacht type</th>
        <th>Beschrijving</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td>adres-register-uri</td>
        <td><CodeInline @code="adres:verwijstNaar" /></td>
        <td><CodeInline @code="adres:Adres" /></td>
        <td>Adres waarvan de adresvoorstelling is afgeleid.</td>
      </tr>
      <tr>
        <td>gemeentenaam</td>
        <td><CodeInline @code="adres:gemeentenaam" /></td>
        <td><CodeInline @code="xsd:string" /></td>
        <td>Gemeentenaam van het adres.</td>
      </tr>
      <tr>
        <td>huisnummer</td>
        <td><CodeInline @code="adres:AdresVoorstelling.huisnummer" /></td>
        <td><CodeInline @code="xsd:string" /></td>
        <td>Alfanumerieke code officieel toegekend aan gebouweenheden, ligplaatsen, standplaatsen of percelen.</td>
      </tr>
      <tr>
        <td>postcode</td>
        <td><CodeInline @code="locn:postCode" /></td>
        <td><CodeInline @code="xsd:string" /></td>
        <td>Code waarmee het geografisch gebied dat adressen voor postale doeleinden groepeert wordt aangeduid.</td>
      </tr>
      <tr>
        <td>straatnaam</td>
        <td><CodeInline @code="adres:straatnaam" /></td>
        <td><CodeInline @code="xsd:string" /></td>
        <td>Straatnaam van het adres.</td>
      </tr>
      <tr>
        <td>volledig adres</td>
        <td><CodeInline @code="locn:fullAddress" /></td>
        <td><CodeInline @code="xsd:string" /></td>
        <td>Het complete adres in één string, al dan niet geformatteerd.</td>
      </tr>
    </:body>
  </AuTable>
  
  <AuHeading @level="3" @skin="3">Bestuursfunctie</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <CodeInline @code="lblodlg:Bestuursfunctie" />
  </p>
  <AuHeading @level="4" @skin="4">Beschrijving</AuHeading>
  <p>
    De bevoegdheid om gedurende een bepaalde periode een bestuursorgaan te vormen of er deel van uit te maken. Specialisatie van <AuLinkExternal href="http://data.vlaanderen.be/ns/mandaat#Mandaat">Mandaat</AuLinkExternal>.
  </p>
  
  <AuHeading @level="4" @skin="4">Eigenschappen</AuHeading>
  <AuTable>
    <:header>
      <tr>
        <th>Naam</th>
        <th>URI</th>
        <th>Verwacht type</th>
        <th>Beschrijving</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td>rol</td>
        <td><CodeInline @code="org:role" /></td>
        <td><CodeInline @code="org:Role" /></td>
        <td>Bestuurseenheid die de publicatie gemaakt heeft.</td>
      </tr>
      <tr>
        <td>contactgegevens</td>
        <td><CodeInline @code="schema:contactPoint" /></td>
        <td><CodeInline @code="schema:ContactPoint" /></td>
        <td>Contactgegevens voor de bestuursfunctie.</td>
      </tr>
    </:body>
  </AuTable>
  
  <AuHeading @level="3" @skin="3">Bestuursorgaan (in bestuursperiode)</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <CodeInline @code="besluit:Bestuursorgaan" />
  </p>
  <AuHeading @level="4" @skin="4">Beschrijving</AuHeading>
  <p>
    Een bestuursorgaan, beperkt tot een bepaalde bestuursperiode.
  </p>
  <AuHeading @level="4" @skin="4">Eigenschappen</AuHeading>
  <AuTable>
    <:header>
      <tr>
        <th>Naam</th>
        <th>URI</th>
        <th>Verwacht type</th>
        <th>Beschrijving</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td>bevat</td>
        <td><CodeInline @code="lblodlg:heeftBestuursfunctie" /></td>
        <td><CodeInline @code="lblodlg:Bestuursfunctie" /></td>
        <td>Een bestuursfunctie binnen het orgaan.</td>
      </tr>
    </:body>
  </AuTable>
  
  <AuHeading @level="3" @skin="3">Contactgegevens</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <CodeInline @code="schema:ContactPoint" />
  </p>
  <AuHeading @level="4" @skin="4">Beschrijving</AuHeading>
  <p>
    De contactgegevens voor een bestuursfunctie, dit kunnen algemene of persoonlijke contactgegevens zijn.
  </p>
  <AuHeading @level="4" @skin="4">Eigenschappen</AuHeading>
  <AuTable>
    <:header>
      <tr>
        <th>Naam</th>
        <th>URI</th>
        <th>Verwacht type</th>
        <th>Beschrijving</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td>adres</td>
        <td><CodeInline @code="locn:address" /></td>
        <td><CodeInline @code="locn:Address" /></td>
        <td>Adres dat men kan aanschrijven.</td>
      </tr>
      <tr>
        <td>email</td>
        <td><CodeInline @code="schema:email" /></td>
        <td><CodeInline @code="xsd:string" /></td>
        <td>Email-adres waarnaar men kan mailen.</td>
      </tr>
      <tr>
        <td>telefoon</td>
        <td><CodeInline @code="schema:telephone" /></td>
        <td><CodeInline @code="xsd:string" /></td>
        <td>Telefoonnummer waarop men kan bellen.</td>
      </tr>
    </:body>
  </AuTable>
  
  <AuHeading @level="3" @skin="3">Functionaris</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <CodeInline @code="lblodlg:Functionaris" />
  </p>
  <AuHeading @level="4" @skin="4">Beschrijving</AuHeading>
  <p>
    Een persoon in zijn rol als houder van een bestuursfunctie. Specialisatie van <AuLinkExternal href="http://data.vlaanderen.be/ns/mandaat#Mandataris">Mandataris</AuLinkExternal>.
  </p>
  <AuHeading @level="4" @skin="4">Eigenschappen</AuHeading>
  <AuTable>
    <:header>
      <tr>
        <th>Naam</th>
        <th>URI</th>
        <th>Verwacht type</th>
        <th>Beschrijving</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td>bestuursfunctie</td>
        <td><CodeInline @code="org:holds" /></td>
        <td><CodeInline @code="lblodlg:Bestuursfunctie" /></td>
        <td>De bestuursfunctie die deze functionaris bekleedt.</td>
      </tr>
      <tr>
        <td>einde</td>
        <td><CodeInline @code="mandaat:einde" /></td>
        <td><CodeInline @code="xsd:dateTime" /></td>
        <td>Tijdstip vanaf wanneer de functionaris de bestuursfunctie niet langer opneemt.</td>
      </tr>
      <tr>
        <td>is bestuurlijke alias van</td>
        <td><CodeInline @code="mandaat:isBestuurlijkeAliasVan" /></td>
        <td><CodeInline @code="person:Person" /></td>
        <td>De persoon die de functionarisrol vervult.</td>
      </tr>
      <tr>
        <td>start</td>
        <td><CodeInline @code="mandaat:start" /></td>
        <td><CodeInline @code="xsd:dateTime" /></td>
        <td>Tijdstip vanaf wanneer de functionaris de bestuursfunctie opneemt.</td>
      </tr>
    </:body>
  </AuTable>
  
  <AuHeading @level="3" @skin="3">Persoon</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <CodeInline @code="person:Person" />
  </p>
  <AuHeading @level="4" @skin="4">Beschrijving</AuHeading>
  <p>
    Natuurlijk persoon. Overgenomen uit het <AuLinkExternal href="https://data.vlaanderen.be/doc/applicatieprofiel/mandatendatabank/#Persoon">OSLO applicatieprofiel mandatendatabank</AuLinkExternal>.
  </p>
  <AuHeading @level="4" @skin="4">Eigenschappen</AuHeading>
  <AuTable>
    <:header>
      <tr>
        <th>Naam</th>
        <th>URI</th>
        <th>Verwacht type</th>
        <th>Beschrijving</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td>achternaam</td>
        <td><CodeInline @code="foaf:familyName" /></td>
        <td><CodeInline @code="xsd:string" /></td>
        <td>De familienaam van de persoon.</td>
      </tr>
      <tr>
        <td>alternatieve naam</td>
        <td><CodeInline @code="foaf:name" /></td>
        <td><CodeInline @code="xsd:string" /></td>
        <td>Een roepnaam van de persoon. 	Indien aanwezig is het aan te raden deze naam te gebruiken voor visualisaties in plaats van voornaam en familienaam.</td>
      </tr>
      <tr>
        <td>gebruikte voornaam</td>
        <td><CodeInline @code="persoon:gebruikteVoornaam" /></td>
        <td><CodeInline @code="xsd:string" /></td>
        <td>De te gebruiken voornaam van alle officiële voornamen van de persoon.</td>
      </tr>
    </:body>
  </AuTable>
  */
  {
    "id": "583/aNH8",
    "block": "[[[8,[39,0],null,[[\"@level\",\"@skin\"],[\"1\",\"1\"]],[[\"default\"],[[[[1,\"Leidinggevendendatabank\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  De leidinggevenden databank bevat de leidinggevenden van de lokale besturen en hun verzelfstandigde entiteiten. Deze databank volgt een uitbreiding op het applicatieprofiel \"],[8,[39,1],[[24,6,\"https://data.vlaanderen.be/doc/applicatieprofiel/mandatendatabank/\"]],null,[[\"default\"],[[[[1,\"mandatendatabank\"]],[]]]]],[1,\". Dit document beschrijft deze uitbreiding.\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Overzicht\"]],[]]]]],[1,\"\\n\"],[10,\"img\"],[14,\"src\",\"assets/images/leidinggevenden.jpg\"],[14,\"alt\",\"leidinggevend UML diagram\"],[12],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Gebruikte prefixen\"]],[]]]]],[1,\"\\n\"],[8,[39,2],null,null,[[\"header\",\"body\"],[[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Prefix\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"URI\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"adres\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,1],[[24,6,\"https://data.vlaanderen.be/ns/adres#\"]],null,[[\"default\"],[[[[1,\"https://data.vlaanderen.be/ns/adres#\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"foaf\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,1],[[24,6,\"http://xmlns.com/foaf/0.1/\"]],null,[[\"default\"],[[[[1,\"http://xmlns.com/foaf/0.1/\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"lblodlg\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,1],[[24,6,\"http://data.lblod.info/vocabularies/leidinggevenden/\"]],null,[[\"default\"],[[[[1,\"http://data.lblod.info/vocabularies/leidinggevenden/\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"locn\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,1],[[24,6,\"http://www.w3.org/ns/locn#\"]],null,[[\"default\"],[[[[1,\"http://www.w3.org/ns/locn#\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"mandaat\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,1],[[24,6,\"http://data.vlaanderen.be/ns/mandaat#\"]],null,[[\"default\"],[[[[1,\"http://data.vlaanderen.be/ns/mandaat#\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"person\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,1],[[24,6,\"https://data.vlaanderen.be/ns/persoon#\"]],null,[[\"default\"],[[[[1,\"https://data.vlaanderen.be/ns/persoon#\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"persoon\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,1],[[24,6,\"http://www.w3.org/ns/person#\"]],null,[[\"default\"],[[[[1,\"http://www.w3.org/ns/person#\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"org\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,1],[[24,6,\"http://www.w3.org/ns/org#\"]],null,[[\"default\"],[[[[1,\"http://www.w3.org/ns/org#\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"schema\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,1],[[24,6,\"http://schema.org/\"]],null,[[\"default\"],[[[[1,\"http://schema.org/\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"xsd\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,1],[[24,6,\"http://www.w3.org/2001/XMLSchema#\"]],null,[[\"default\"],[[[[1,\"http://www.w3.org/2001/XMLSchema#\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Entiteiten\"]],[]]]]],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Adresvoorstelling\"]],[]]]]],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Klasse\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  \"],[8,[39,3],null,[[\"@code\"],[\"locn:Address\"]],null],[1,\"\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Beschrijving\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Leesbare voorstelling met enkel de basisgegevens van het adres, bedoeld voor het gebruik van een adres als attribuut van een ander object. Overgenomen uit \"],[8,[39,1],[[24,6,\"https://data.vlaanderen.be/doc/applicatieprofiel/adresregister/#Adresvoorstelling\"]],null,[[\"default\"],[[[[1,\"OSLO applicatieprofiel adresregister\"]],[]]]]],[1,\".\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Eigenschappen\"]],[]]]]],[1,\"\\n\"],[8,[39,2],null,null,[[\"header\",\"body\"],[[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Naam\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"URI\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Verwacht type\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Beschrijving\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"adres-register-uri\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"adres:verwijstNaar\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"adres:Adres\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Adres waarvan de adresvoorstelling is afgeleid.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"gemeentenaam\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"adres:gemeentenaam\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"xsd:string\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Gemeentenaam van het adres.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"huisnummer\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"adres:AdresVoorstelling.huisnummer\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"xsd:string\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Alfanumerieke code officieel toegekend aan gebouweenheden, ligplaatsen, standplaatsen of percelen.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"postcode\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"locn:postCode\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"xsd:string\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Code waarmee het geografisch gebied dat adressen voor postale doeleinden groepeert wordt aangeduid.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"straatnaam\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"adres:straatnaam\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"xsd:string\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Straatnaam van het adres.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"volledig adres\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"locn:fullAddress\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"xsd:string\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Het complete adres in één string, al dan niet geformatteerd.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Bestuursfunctie\"]],[]]]]],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Klasse\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  \"],[8,[39,3],null,[[\"@code\"],[\"lblodlg:Bestuursfunctie\"]],null],[1,\"\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Beschrijving\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  De bevoegdheid om gedurende een bepaalde periode een bestuursorgaan te vormen of er deel van uit te maken. Specialisatie van \"],[8,[39,1],[[24,6,\"http://data.vlaanderen.be/ns/mandaat#Mandaat\"]],null,[[\"default\"],[[[[1,\"Mandaat\"]],[]]]]],[1,\".\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Eigenschappen\"]],[]]]]],[1,\"\\n\"],[8,[39,2],null,null,[[\"header\",\"body\"],[[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Naam\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"URI\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Verwacht type\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Beschrijving\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"rol\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"org:role\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"org:Role\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Bestuurseenheid die de publicatie gemaakt heeft.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"contactgegevens\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"schema:contactPoint\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"schema:ContactPoint\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Contactgegevens voor de bestuursfunctie.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Bestuursorgaan (in bestuursperiode)\"]],[]]]]],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Klasse\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  \"],[8,[39,3],null,[[\"@code\"],[\"besluit:Bestuursorgaan\"]],null],[1,\"\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Beschrijving\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Een bestuursorgaan, beperkt tot een bepaalde bestuursperiode.\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Eigenschappen\"]],[]]]]],[1,\"\\n\"],[8,[39,2],null,null,[[\"header\",\"body\"],[[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Naam\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"URI\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Verwacht type\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Beschrijving\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"bevat\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"lblodlg:heeftBestuursfunctie\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"lblodlg:Bestuursfunctie\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Een bestuursfunctie binnen het orgaan.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Contactgegevens\"]],[]]]]],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Klasse\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  \"],[8,[39,3],null,[[\"@code\"],[\"schema:ContactPoint\"]],null],[1,\"\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Beschrijving\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  De contactgegevens voor een bestuursfunctie, dit kunnen algemene of persoonlijke contactgegevens zijn.\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Eigenschappen\"]],[]]]]],[1,\"\\n\"],[8,[39,2],null,null,[[\"header\",\"body\"],[[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Naam\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"URI\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Verwacht type\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Beschrijving\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"adres\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"locn:address\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"locn:Address\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Adres dat men kan aanschrijven.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"email\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"schema:email\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"xsd:string\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Email-adres waarnaar men kan mailen.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"telefoon\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"schema:telephone\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"xsd:string\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Telefoonnummer waarop men kan bellen.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Functionaris\"]],[]]]]],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Klasse\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  \"],[8,[39,3],null,[[\"@code\"],[\"lblodlg:Functionaris\"]],null],[1,\"\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Beschrijving\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Een persoon in zijn rol als houder van een bestuursfunctie. Specialisatie van \"],[8,[39,1],[[24,6,\"http://data.vlaanderen.be/ns/mandaat#Mandataris\"]],null,[[\"default\"],[[[[1,\"Mandataris\"]],[]]]]],[1,\".\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Eigenschappen\"]],[]]]]],[1,\"\\n\"],[8,[39,2],null,null,[[\"header\",\"body\"],[[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Naam\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"URI\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Verwacht type\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Beschrijving\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"bestuursfunctie\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"org:holds\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"lblodlg:Bestuursfunctie\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"De bestuursfunctie die deze functionaris bekleedt.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"einde\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"mandaat:einde\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"xsd:dateTime\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Tijdstip vanaf wanneer de functionaris de bestuursfunctie niet langer opneemt.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"is bestuurlijke alias van\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"mandaat:isBestuurlijkeAliasVan\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"person:Person\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"De persoon die de functionarisrol vervult.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"start\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"mandaat:start\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"xsd:dateTime\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Tijdstip vanaf wanneer de functionaris de bestuursfunctie opneemt.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Persoon\"]],[]]]]],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Klasse\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  \"],[8,[39,3],null,[[\"@code\"],[\"person:Person\"]],null],[1,\"\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Beschrijving\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Natuurlijk persoon. Overgenomen uit het \"],[8,[39,1],[[24,6,\"https://data.vlaanderen.be/doc/applicatieprofiel/mandatendatabank/#Persoon\"]],null,[[\"default\"],[[[[1,\"OSLO applicatieprofiel mandatendatabank\"]],[]]]]],[1,\".\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Eigenschappen\"]],[]]]]],[1,\"\\n\"],[8,[39,2],null,null,[[\"header\",\"body\"],[[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Naam\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"URI\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Verwacht type\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Beschrijving\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"achternaam\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"foaf:familyName\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"xsd:string\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"De familienaam van de persoon.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"alternatieve naam\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"foaf:name\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"xsd:string\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Een roepnaam van de persoon. \\tIndien aanwezig is het aan te raden deze naam te gebruiken voor visualisaties in plaats van voornaam en familienaam.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"gebruikte voornaam\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"persoon:gebruikteVoornaam\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"xsd:string\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"De te gebruiken voornaam van alle officiële voornamen van de persoon.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]]],[],false,[\"au-heading\",\"au-link-external\",\"au-table\",\"code-inline\"]]",
    "moduleName": "pages-vendors/templates/docs/leidinggevenden-annotaties.hbs",
    "isStrictMode": false
  });
});
;define("pages-vendors/templates/docs/meldingsplicht-annotaties", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <AuHeading @level="1" @skin="1">Annotaties voor automatische melding</AuHeading>
  <p>
    Lokale besturen publiceren beslissingen die via de Toezicht module in het Loket voor Lokale Besturen gemeld moeten worden. Loket voor Lokale Besturen biedt een API aan waarop publicaties van beslissingen gemeld kunnen worden, waarna ze automatisch geharvest zullen worden en toevoegd worden als nieuwe melding in Loket voor Lokale Besturen. Dit document beschrijft de annotaties die gebruikt worden voor automatische melding.
  </p>
  
  <AuHeading @level="2" @skin="2">Gebruikte prefixen</AuHeading>
  <AuTable @size="default">
   <:header>
    <tr>
      <th>Prefix</th>
      <th>URI</th>
    </tr>
   </:header>
   <:body>
    <tr>
      <td>meb</td>
      <td>
        <a href="http://rdf.myexperiment.org/ontologies/base/">http://rdf.myexperiment.org/ontologies/base/</a>
      </td>
    </tr>
    <tr>
      <td>pav</td>
      <td>
        <a href="http://purl.org/pav/">http://purl.org/pav/</a>
      </td>
    </tr>
    <tr>
      <td>dct</td>
      <td>
        <a href="http://purl.org/dc/terms/">http://purl.org/dc/terms/</a>
      </td>
    </tr>
    <tr>
      <td>lblodBesluit</td>
      <td>
        <a href="http://lblod.data.gift/vocabularies/besluit/">http://lblod.data.gift/vocabularies/besluit/</a>
      </td>
    </tr>
    <tr>
      <td>adms</td>
      <td>
        <a href="http://www.w3.org/ns/adms">http://www.w3.org/ns/adms#</a>
      </td>
    </tr>
    <tr>
      <td>muAccount</td>
      <td>
        <a href="http://mu.semte.ch/vocabularies/account/">http://mu.semte.ch/vocabularies/account/</a>
      </td>
    </tr>
    <tr>
      <td>eli</td>
      <td>
        <a href="http://data.europa.eu/eli/ontology">http://data.europa.eu/eli/ontology#</a>
      </td>
    </tr>
    <tr>
      <td>org</td>
      <td>
        <a href="http://www.w3.org/ns/org">http://www.w3.org/ns/org#</a>
      </td>
    </tr>
    <tr>
      <td>elod</td>
      <td>
        <a href="http://linkedeconomy.org/ontology">http://linkedeconomy.org/ontology#</a>
      </td>
    </tr>
    <tr>
      <td>nie</td>
      <td>
        <a href="http://www.semanticdesktop.org/ontologies/2007/01/19/nie">http://www.semanticdesktop.org/ontologies/2007/01/19/nie#</a>
      </td>
    </tr>
    <tr>
      <td>prov</td>
      <td>
        <a href="http://www.w3.org/ns/prov">http://www.w3.org/ns/prov#</a>
      </td>
    </tr>
    <tr>
      <td>nfo</td>
      <td>
        <a href="http://www.semanticdesktop.org/ontologies/2007/03/22/nfo">http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#</a>
      </td>
    </tr>
   </:body>
  </AuTable>
  <AuHeading @level="2" @skin="2">Entiteiten</AuHeading>
  <AuHeading @level="3" @skin="3">Submission</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <CodeInline @code="meb:Submission" />
  </p>
  <AuHeading @level="4" @skin="4">Beschrijving</AuHeading>
  <p>
    De inzending van een meldingsplichtige publicatie. Een inzending wordt ingestuurd door een (externe) partij en leidt tot een (automatische) verwerking van het gepubliceerde document.
  </p>
  <AuHeading @level="4" @skin="4">Eigenschappen</AuHeading>
  <AuTable>
    <:header>
      <tr>
        <th>Naam</th>
        <th>URI</th>
        <th>Verwacht type</th>
        <th>Beschrijving</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td>organization</td>
        <td><CodeInline @code="pav:createdBy" /></td>
        <td><CodeInline @code="besluit:Bestuurseenheid" /></td>
        <td>Bestuurseenheid die de publicatie gemaakt heeft.</td>
      </tr>
      <tr>
        <td>publisher</td>
        <td><CodeInline @code="pav:providedBy" /></td>
        <td><CodeInline @code="foaf:Agent" /></td>
        <td>Partij die de melding uitvoert.</td>
      </tr>
      <tr>
        <td>submittedResource</td>
        <td><CodeInline @code="dct:subject" /></td>
        <td><CodeInline @code="foaf:Document" /> (meestal <CodeInline @code="besluit:Besluit" />)</td>
        <td>Beslissing/document dat gemeld wordt.</td>
      </tr>
      <tr>
        <td>status</td>
        <td><CodeInline @code="adms:status" /></td>
        <td><CodeInline @code="skos:Concept" /></td>
        <td>Status van de melding.</td>
      </tr>
      <tr>
        <td>href</td>
        <td><CodeInline @code="prov:atLocation" /></td>
        <td><CodeInline @code="rdfs:Resource" /></td>
        <td>URL waarop het document gepubliceerd is.</td>
      </tr>
    </:body>
  </AuTable>
  <AuHeading @level="3" @skin="3">Vendor</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <CodeInline @code="foaf:Agent" />
  </p>
  <AuHeading @level="4" @skin="4">Beschrijving</AuHeading>
  <p>
    (Externe) partij die een melding kan sturen.
  </p>
  <AuHeading @level="4" @skin="4">Eigenschappen</AuHeading>
  <AuTable>
    <:header>
      <tr>
        <th>Naam</th>
        <th>URI</th>
        <th>Verwacht type</th>
        <th>Beschrijving</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td>name</td>
        <td><CodeInline @code="foaf:name" /></td>
        <td><CodeInline @code="xsd:string" /></td>
        <td>Naam van de agent.</td>
      </tr>
      <tr>
        <td>key</td>
        <td><CodeInline @code="muAccount:key" /></td>
        <td><CodeInline @code="xsd:string" /></td>
        <td>Sleutel waarmee geverifieerd kan worden of de agent een inzending mag insturen in naam van een andere organizatie.</td>
      </tr>
      <tr>
        <td>canActOnBehalfOf</td>
        <td><CodeInline @code="muAccount:canActOnBehalfOf" /></td>
        <td><CodeInline @code="besluit:Bestuurseenheid" /></td>
        <td>Bestuurseenheden in wiens naam de agent een melding mag insturen.</td>
      </tr>
    </:body>
  </AuTable>
  <AuHeading @level="3" @skin="3" id="submitted-resource">Submitted resource</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <CodeInline @code="foaf:Document" /> (meestal <CodeInline @code="besluit:Besluit" />)
  </p>
  <AuHeading @level="4" @skin="4">Beschrijving</AuHeading>
  <p>
    Gepubliceerde beslissing/document dat het onderwerp is van de melding.
  </p>
  <AuHeading @level="4" @skin="4">Eigenschappen</AuHeading>
  <AuTable>
    <:header>
      <tr>
        <th>Naam</th>
        <th>URI</th>
        <th>Verwacht type</th>
        <th>Beschrijving</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td>type</td>
        <td><CodeInline @code="rdf:type" /></td>
        <td><CodeInline @code="rdfs:Class" /></td>
        <td>Type van het besluit. Concept uit een van volgende concept schemes: <AuLinkExternal href="https://data.vlaanderen.be/id/conceptscheme/BesluitType">https://data.vlaanderen.be/id/conceptscheme/BesluitType</AuLinkExternal><AuLinkExternal href="https://data.vlaanderen.be/id/conceptscheme/BesluitDocumentType">https://data.vlaanderen.be/id/conceptscheme/BesluitDocumentType</AuLinkExternal></td>
      </tr>
      <tr>
        <td>publicationDate</td>
        <td><CodeInline @code="eli:date_publication" /></td>
        <td><CodeInline @code="xsd:date" /></td>
        <td>De offici&euml;le publicatiedatum van het besluit.</td>
      </tr>
      <tr>
        <td>passedBy</td>
        <td><CodeInline @code="eli:passed_by" /></td>
        <td><CodeInline @code="besluit:Bestuursorgaan" /></td>
        <td>Het bestuursorgaan dat de beslissing goedgekeurd heeft. <br />(Het gaat over bestuursorgaan in bestuursperiode, zie ook voorbeelden)</td>
      </tr>
      <tr>
        <td>subject</td>
        <td><CodeInline @code="eli:is_about" /></td>
        <td><CodeInline @code="foaf:Agent" /></td>
        <td>Agent (organisatie, bestuurseenheid) waarover de beslissing handelt. <br /><strong>Zie onderaan bij "Extra informatie" over <ScrollLink @scrollToId="linken-bestuurseenheid">Linken naar Bestuurseenheid bij sommige Besluittypes</ScrollLink>.</strong></td>
      </tr>
      <tr>
        <td>reportYear</td>
        <td><CodeInline @code="elod:financialYear" /></td>
        <td><CodeInline @code="xsd:gYear" /></td>
        <td>Het boekjaar waarover de beslissing handelt.</td>
      </tr>
      <tr>
        <td>firstDateInForce</td>
        <td><CodeInline @code="eli:first_date_entry_in_force" /></td>
        <td><CodeInline @code="xsd:date" /></td>
        <td>De datum waarop de regelgeving van kracht wordt.</td>
      </tr>
      <tr>
        <td>dateNoLongerInForce</td>
        <td><CodeInline @code="eli:date_no_longer_in_force" /></td>
        <td><CodeInline @code="xsd:date" /></td>
        <td>De laatste dag waarop de regelgeving nog van kracht is.</td>
      </tr>
      <tr>
        <td>authenticityType</td>
        <td><CodeInline @code="lblodBesluit:authenticityType" /></td>
        <td><CodeInline @code="skos:Concept" /></td>
        <td>
          Authenticiteit van de ingestuurde beslissing.
          Zie <AuLinkExternal href="https://github.com/lblod/codelists/blob/master/authenticitytype.ttl">hier</AuLinkExternal> voor de URI's van de concepten.
        </td>
      </tr>
      <tr>
        <td>chartOfAccount</td>
        <td><CodeInline @code="lblodBesluit:chartOfAccount" /></td>
        <td><CodeInline @code="skos:Concept" /></td>
        <td>
          Code uit het Minimaal Algemeen Rekeningstelsel (MAR) waar in de beslissing naar verwezen wordt.
          Zie <AuLinkExternal href="https://github.com/lblod/codelists/blob/master/minimal-belgian-chart-of-accounts.ttl">hier</AuLinkExternal> voor de URI's van de concepten.
        </td>
      </tr>
      <tr>
        <td>taxRate</td>
        <td><CodeInline @code="lblodBesluit:taxRate" /></td>
        <td><CodeInline @code="lblodBesluit:TaxRate" /></td>
        <td>Aanslagvoet die in de beslissing bepaald wordt.</td>
      </tr>
      <tr>
        <td>hasAdditionalTaxRate</td>
        <td><CodeInline @code="lblodBesluit:hasAdditionalTaxRate" /></td>
        <td><CodeInline @code="xsd:boolean" /></td>
        <td>Duidt aan of er nog bijkomende aanslagvoeten zijn dan deze beschreven in de beslissing.</td>
      </tr>
      <tr>
        <td>description</td>
        <td><CodeInline @code="dct:description" /></td>
        <td><CodeInline @code="xsd:string" /></td>
        <td>Beschrijving bij de beslissing.</td>
      </tr>
      <tr>
        <td>comment</td>
        <td><CodeInline @code="rdfs:comment" /></td>
        <td><CodeInline @code="xsd:string" /></td>
        <td>Opmerking bij de beslissing.</td>
      </tr>
      <tr>
        <td>link</td>
        <td><CodeInline @code="dct:hasPart" /></td>
        <td><CodeInline @code="rdfs:Resource" /></td>
        <td>URL van gerelateerd document dat een logisch onderdeel is van het besluit.</td>
      </tr>
    </:body>
  </AuTable>
  <AuHeading @level="3" @skin="3">Aanslagvoet</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <CodeInline @code="lblodBesluit:TaxRate &lt; schema:UnitPriceSpecification" />
  </p>
  <AuHeading @level="4" @skin="4">Beschrijving</AuHeading>
  <p>
    Percentage waarop de belasting berekend wordt.
  </p>
  <AuHeading @level="4" @skin="4">Eigenschappen</AuHeading>
  <AuTable>
    <:header>
      <tr>
        <th>Naam</th>
        <th>URI</th>
        <th>Verwacht type</th>
        <th>Beschrijving</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td>amount</td>
        <td><CodeInline @code="schema:price" /></td>
        <td><CodeInline @code="xsd:float" /></td>
        <td>Geldbedrag dat per eenheid gerekend wordt.</td>
      </tr>
    </:body>
  </AuTable>
  <AuHeading @level="3" @skin="3">Bestuurseenheid</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <CodeInline @code="besluit:Bestuurseenheid" />
  </p>
  <AuHeading @level="4" @skin="4">Eigenschappen</AuHeading>
  <AuTable>
    <:header>
      <tr>
        <th>Naam</th>
        <th>URI</th>
        <th>Verwacht type</th>
        <th>Beschrijving</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td>classificatie</td>
        <td><CodeInline @code="besluit:classificatie" /></td>
        <td><CodeInline @code="skos:Concept" /></td>
        <td>Classificatie van de bestuurseenheid.</td>
      </tr>
      <tr>
        <td>naam</td>
        <td><CodeInline @code="skos:prefLabel" /></td>
        <td><CodeInline @code="xsd:string" /></td>
        <td>Naam van de bestuurseenheid.</td>
      </tr>
      <tr>
        <td>identifier</td>
        <td><CodeInline @code="dct:identifier" /></td>
        <td><CodeInline @code="xsd:string" /></td>
        <td>Identificator van de bestuurseenheid (vb. ondernemingsnummer).</td>
      </tr>
      <tr>
        <td>bestuursorgaan</td>
        <td><CodeInline @code="besluit:bestuurt" /></td>
        <td><CodeInline @code="besluit:Bestuursorgaan" /></td>
        <td>Bestuursorgaan die door de bestuurseenheid bestuurd wordt.</td>
      </tr>
    </:body>
  </AuTable>
  <AuHeading @level="3" @skin="3">Bestuursorgaan</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <CodeInline @code="besluit:Bestuursorgaan" />
  </p>
  <AuHeading @level="4" @skin="4">Eigenschappen</AuHeading>
  <AuTable>
    <:header>
      <tr>
        <th>Naam</th>
        <th>URI</th>
        <th>Verwacht type</th>
        <th>Beschrijving</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td>classificatie</td>
        <td><CodeInline @code="besluit:classificatie" /></td>
        <td><CodeInline @code="skos:Concept" /></td>
        <td>Het type bestuursorgaan.</td>
      </tr>
    </:body>
  </AuTable>
  <AuHeading @level="3" @skin="3">Behandeling van Agendapunt</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <CodeInline @code="besluit:BehandelingVanAgendapunt" />
  </p>
  <AuHeading @level="4" @skin="4">Eigenschappen</AuHeading>
  <AuTable>
    <:header>
      <tr>
        <th>Naam</th>
        <th>URI</th>
        <th>Verwacht type</th>
        <th>Beschrijving</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td>onderwerp</td>
        <td><CodeInline @code="dct:subject" /></td>
        <td><CodeInline @code="besluit:Agendapunt" /></td>
        <td>Het onderwerp van de activiteit.</td>
      </tr>
      <tr>
        <td>besluit</td>
        <td><CodeInline @code="prov:generated" /></td>
        <td><CodeInline @code="besluit:Besluit" /></td>
        <td>Een besluit dat is opgemaakt naar aanleiding van de behandeling van het agendapunt.</td>
      </tr>
    </:body>
  </AuTable>
  <AuHeading @level="3" @skin="3">Agendapunt</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <CodeInline @code="besluit:Agendapunt" />
  </p>
  <AuHeading @level="4" @skin="4">Eigenschappen</AuHeading>
  <p>
    Geen relevante eigenschappen.
  </p>
  <AuHeading @level="3" @skin="3">Zitting</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <CodeInline @code="besluit:Zitting" />
  </p>
  <AuHeading @level="4" @skin="4">Eigenschappen</AuHeading>
  <AuTable>
    <:header>
      <tr>
        <th>Naam</th>
        <th>URI</th>
        <th>Verwacht type</th>
        <th>Beschrijving</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td>agendapunt</td>
        <td><CodeInline @code="besluit:behandelt" /></td>
        <td><CodeInline @code="besluit:Agendapunt" /></td>
        <td>Een formeel vastgelegd agendapunt van de zitting.</td>
      </tr>
      <tr>
        <td>gestartOpTijdstip</td>
        <td><CodeInline @code="prov:startedAtTime" /></td>
        <td><CodeInline @code="xsd:dateTime" /></td>
        <td>Tijdstip waarop de zitting begint.</td>
      </tr>
      <tr>
        <td>bestuursorgaan</td>
        <td><CodeInline @code="besluit:isGehoudenDoor" /></td>
        <td><CodeInline @code="besluit:Bestuursorgaan" /></td>
        <td>Duidt aan door welk orgaan de zitting is gehouden.</td>
      </tr>
      <tr>
        <td>notulen</td>
        <td><CodeInline @code="besluit:heeftNotulen" /></td>
        <td><CodeInline @code="foaf:Document" /></td>
        <td>Notulen van de zitting.</td>
      </tr>
      <tr>
        <td>besluitenlijst</td>
        <td><CodeInline @code="besluit:heeftBesluitenlijst" /></td>
        <td><CodeInline @code="foaf:Document" /></td>
        <td>Besluitenlijst van de zitting.</td>
      </tr>
      <tr>
        <td>agenda</td>
        <td><CodeInline @code="besluit:heeftAgenda" /></td>
        <td><CodeInline @code="foaf:Document" /></td>
        <td>Agenda van de zitting.</td>
      </tr>
      <tr>
        <td>uittreksel</td>
        <td><CodeInline @code="besluit:heeftUittreksel" /></td>
        <td><CodeInline @code="foaf:Document" /></td>
        <td>Uittreksel van een besluit van de zitting.</td>
      </tr>
    </:body>
  </AuTable>
  
  <AuHeading @level="2" @skin="2">Voorbeelden</AuHeading>
  
  <AuHeading @level="3" @skin="3">Minimale Besluitenlijst</AuHeading>
  <SnippetToggle @snippetFilename="meldingsplicht-annotaties/voorbeeld-besluitenlijst.html" />
  
  <AuHeading @level="3" @skin="3">Besluitenlijst met resultaat van de stemming</AuHeading>
  <SnippetToggle @snippetFilename="meldingsplicht-annotaties/voorbeeld-besluitenlijst-met-stemming.html" />
  
  <AuHeading @level="3" @skin="3">Budget</AuHeading>
  <SnippetToggle @snippetFilename="meldingsplicht-annotaties/voorbeeld-budget.html" />
  
  <AuHeading @level="3" @skin="3">Reglement</AuHeading>
  <SnippetToggle @snippetFilename="meldingsplicht-annotaties/voorbeeld-reglement.html" />
  
  <AuHeading @level="2" @skin="2">Extra informatie</AuHeading>
  
  <AuHeading @level="3" @skin="3" id="linken-bestuurseenheid">Linken naar Bestuurseenheid bij sommige Besluittypes</AuHeading>
  
  <p>
    Bij sommige besluiten is het nodig om te refereren naar een Bestuurseenheid. Hierbij gaat het bijvoorbeeld over de besluiten met volgende types:
  </p>
  <ul>
    <li>Advies jaarrekening</li>
    <li>Besluit over budget(wijziging)</li>
    <li>Besluit over meerjarenplan(aanpassing)</li>
    <li>Schorsingsbesluit</li>
    <li>Stuiten</li>
    <li>Aanvraag desaffectatie presbyteria/kerken</li>
  </ul>
  <p>
    Om vanuit het Besluit te refereren naar de betreffende Bestuurseenheid via de URI, gebruik het RDF predicaat <CodeInline @code="eli:is_about" />. Zie eveneens bij de bovenstaande tabel onder <ScrollLink @scrollToId="submitted-resource">Submitted Resource</ScrollLink> voor nog meer eigenschappen voor Besluiten.
  </p>
  <p>
    Onderstaande query kan gebruikt worden om gerelateerde Eredienstbestuurseenheden te vinden voor een gegeven Bestuurseenheid. Vervang in onderstaande query de URI voor het Bestuurseenheid met de URI van de betreffende eenheid. Voer deze SPARQL query uit op de <AuLink @route="docs.centrale-vindplaats-sparql">Centrale Vindplaats</AuLink>.
  </p>
  <SnippetToggle @snippetFilename="meldingsplicht-annotaties/voorbeeld-verkrijg-bestuurseenheden.sparql" />
  
  <AuHeading @level="4" @skin="4">Voorbeeld</AuHeading>
  <p>
    Beschouw onderstaand voorbeeld van Besluit waarin wordt verwezen naar een betreffende Bestuurseenheid, direct als eigenschap van het Besluit.
  </p>
  <SnippetToggle @snippetFilename="meldingsplicht-annotaties/voorbeeld-rdfa-met-link-bestuurseenheid.html" />
  
  <AuHeading @level="3" @skin="3">Datetime strings</AuHeading>
  <p>
    Bij het verwerken van de <CodeInline @code="xsd:dateTime" /> strings wordt het volgende ondersteund: <br />
    Het gaat over een subset van de ISO-8601 specificatie. Het formaat moet zijn
  </p>
  <ul>
    <li>Datum: "YYYY-MM-DD"</li>
    <li>Tijdsspecificatie: "YYYY-MM-DDTHH:mm:ss.SSSS" met "T" als separator</li>
    <li>Offset (tov UTC) met het volgende formaat: +-HH:mm, +-HHmm, +-HH of Z</li>
  </ul>
  <AuHeading @level="4" @skin="4">Voorbeelden van aanvaarde <CodeInline @code="xsd:dateTime" /> strings</AuHeading>
  <ul>
    <li>'2020-05-14T06:36:05.7540Z'</li>
    <li>'2020-05-14T06:36:05.7540+01:10'</li>
    <li>'2020-05-14T06:36:05.7540+01'</li>
    <li>'2020-05-14T06:36:05.7540-0130'</li>
  </ul>
  <AuHeading @level="2" @skin="2">Meldingsplicht API</AuHeading>
  <p>
    Bekijk de API die vendors kunnen gebruiken om besluiten te melden: <AuLink @route="docs.meldingsplicht">Meldingsplicht API</AuLink>.
  </p>
  */
  {
    "id": "hJyq9IJ7",
    "block": "[[[8,[39,0],null,[[\"@level\",\"@skin\"],[\"1\",\"1\"]],[[\"default\"],[[[[1,\"Annotaties voor automatische melding\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Lokale besturen publiceren beslissingen die via de Toezicht module in het Loket voor Lokale Besturen gemeld moeten worden. Loket voor Lokale Besturen biedt een API aan waarop publicaties van beslissingen gemeld kunnen worden, waarna ze automatisch geharvest zullen worden en toevoegd worden als nieuwe melding in Loket voor Lokale Besturen. Dit document beschrijft de annotaties die gebruikt worden voor automatische melding.\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Gebruikte prefixen\"]],[]]]]],[1,\"\\n\"],[8,[39,1],null,[[\"@size\"],[\"default\"]],[[\"header\",\"body\"],[[[[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"Prefix\"],[13],[1,\"\\n    \"],[10,\"th\"],[12],[1,\"URI\"],[13],[1,\"\\n  \"],[13],[1,\"\\n \"]],[]],[[[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"meb\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"\\n      \"],[10,3],[14,6,\"http://rdf.myexperiment.org/ontologies/base/\"],[12],[1,\"http://rdf.myexperiment.org/ontologies/base/\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"pav\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"\\n      \"],[10,3],[14,6,\"http://purl.org/pav/\"],[12],[1,\"http://purl.org/pav/\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"dct\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"\\n      \"],[10,3],[14,6,\"http://purl.org/dc/terms/\"],[12],[1,\"http://purl.org/dc/terms/\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"lblodBesluit\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"\\n      \"],[10,3],[14,6,\"http://lblod.data.gift/vocabularies/besluit/\"],[12],[1,\"http://lblod.data.gift/vocabularies/besluit/\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"adms\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"\\n      \"],[10,3],[14,6,\"http://www.w3.org/ns/adms\"],[12],[1,\"http://www.w3.org/ns/adms#\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"muAccount\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"\\n      \"],[10,3],[14,6,\"http://mu.semte.ch/vocabularies/account/\"],[12],[1,\"http://mu.semte.ch/vocabularies/account/\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"eli\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"\\n      \"],[10,3],[14,6,\"http://data.europa.eu/eli/ontology\"],[12],[1,\"http://data.europa.eu/eli/ontology#\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"org\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"\\n      \"],[10,3],[14,6,\"http://www.w3.org/ns/org\"],[12],[1,\"http://www.w3.org/ns/org#\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"elod\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"\\n      \"],[10,3],[14,6,\"http://linkedeconomy.org/ontology\"],[12],[1,\"http://linkedeconomy.org/ontology#\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"nie\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"\\n      \"],[10,3],[14,6,\"http://www.semanticdesktop.org/ontologies/2007/01/19/nie\"],[12],[1,\"http://www.semanticdesktop.org/ontologies/2007/01/19/nie#\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"prov\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"\\n      \"],[10,3],[14,6,\"http://www.w3.org/ns/prov\"],[12],[1,\"http://www.w3.org/ns/prov#\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tr\"],[12],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"nfo\"],[13],[1,\"\\n    \"],[10,\"td\"],[12],[1,\"\\n      \"],[10,3],[14,6,\"http://www.semanticdesktop.org/ontologies/2007/03/22/nfo\"],[12],[1,\"http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n \"]],[]]]]],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Entiteiten\"]],[]]]]],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Submission\"]],[]]]]],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Klasse\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  \"],[8,[39,2],null,[[\"@code\"],[\"meb:Submission\"]],null],[1,\"\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Beschrijving\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  De inzending van een meldingsplichtige publicatie. Een inzending wordt ingestuurd door een (externe) partij en leidt tot een (automatische) verwerking van het gepubliceerde document.\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Eigenschappen\"]],[]]]]],[1,\"\\n\"],[8,[39,1],null,null,[[\"header\",\"body\"],[[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Naam\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"URI\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Verwacht type\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Beschrijving\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"organization\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"pav:createdBy\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"besluit:Bestuurseenheid\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Bestuurseenheid die de publicatie gemaakt heeft.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"publisher\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"pav:providedBy\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"foaf:Agent\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Partij die de melding uitvoert.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"submittedResource\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"dct:subject\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"foaf:Document\"]],null],[1,\" (meestal \"],[8,[39,2],null,[[\"@code\"],[\"besluit:Besluit\"]],null],[1,\")\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Beslissing/document dat gemeld wordt.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"status\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"adms:status\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"skos:Concept\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Status van de melding.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"href\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"prov:atLocation\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"rdfs:Resource\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"URL waarop het document gepubliceerd is.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Vendor\"]],[]]]]],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Klasse\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  \"],[8,[39,2],null,[[\"@code\"],[\"foaf:Agent\"]],null],[1,\"\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Beschrijving\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  (Externe) partij die een melding kan sturen.\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Eigenschappen\"]],[]]]]],[1,\"\\n\"],[8,[39,1],null,null,[[\"header\",\"body\"],[[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Naam\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"URI\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Verwacht type\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Beschrijving\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"name\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"foaf:name\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"xsd:string\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Naam van de agent.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"key\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"muAccount:key\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"xsd:string\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Sleutel waarmee geverifieerd kan worden of de agent een inzending mag insturen in naam van een andere organizatie.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"canActOnBehalfOf\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"muAccount:canActOnBehalfOf\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"besluit:Bestuurseenheid\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Bestuurseenheden in wiens naam de agent een melding mag insturen.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"],[8,[39,0],[[24,1,\"submitted-resource\"]],[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Submitted resource\"]],[]]]]],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Klasse\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  \"],[8,[39,2],null,[[\"@code\"],[\"foaf:Document\"]],null],[1,\" (meestal \"],[8,[39,2],null,[[\"@code\"],[\"besluit:Besluit\"]],null],[1,\")\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Beschrijving\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Gepubliceerde beslissing/document dat het onderwerp is van de melding.\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Eigenschappen\"]],[]]]]],[1,\"\\n\"],[8,[39,1],null,null,[[\"header\",\"body\"],[[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Naam\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"URI\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Verwacht type\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Beschrijving\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"type\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"rdf:type\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"rdfs:Class\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Type van het besluit. Concept uit een van volgende concept schemes: \"],[8,[39,3],[[24,6,\"https://data.vlaanderen.be/id/conceptscheme/BesluitType\"]],null,[[\"default\"],[[[[1,\"https://data.vlaanderen.be/id/conceptscheme/BesluitType\"]],[]]]]],[8,[39,3],[[24,6,\"https://data.vlaanderen.be/id/conceptscheme/BesluitDocumentType\"]],null,[[\"default\"],[[[[1,\"https://data.vlaanderen.be/id/conceptscheme/BesluitDocumentType\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"publicationDate\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"eli:date_publication\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"xsd:date\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"De officiële publicatiedatum van het besluit.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"passedBy\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"eli:passed_by\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"besluit:Bestuursorgaan\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Het bestuursorgaan dat de beslissing goedgekeurd heeft. \"],[10,\"br\"],[12],[13],[1,\"(Het gaat over bestuursorgaan in bestuursperiode, zie ook voorbeelden)\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"subject\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"eli:is_about\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"foaf:Agent\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Agent (organisatie, bestuurseenheid) waarover de beslissing handelt. \"],[10,\"br\"],[12],[13],[10,\"strong\"],[12],[1,\"Zie onderaan bij \\\"Extra informatie\\\" over \"],[8,[39,4],null,[[\"@scrollToId\"],[\"linken-bestuurseenheid\"]],[[\"default\"],[[[[1,\"Linken naar Bestuurseenheid bij sommige Besluittypes\"]],[]]]]],[1,\".\"],[13],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"reportYear\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"elod:financialYear\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"xsd:gYear\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Het boekjaar waarover de beslissing handelt.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"firstDateInForce\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"eli:first_date_entry_in_force\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"xsd:date\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"De datum waarop de regelgeving van kracht wordt.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"dateNoLongerInForce\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"eli:date_no_longer_in_force\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"xsd:date\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"De laatste dag waarop de regelgeving nog van kracht is.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"authenticityType\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"lblodBesluit:authenticityType\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"skos:Concept\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"\\n        Authenticiteit van de ingestuurde beslissing.\\n        Zie \"],[8,[39,3],[[24,6,\"https://github.com/lblod/codelists/blob/master/authenticitytype.ttl\"]],null,[[\"default\"],[[[[1,\"hier\"]],[]]]]],[1,\" voor de URI's van de concepten.\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"chartOfAccount\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"lblodBesluit:chartOfAccount\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"skos:Concept\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"\\n        Code uit het Minimaal Algemeen Rekeningstelsel (MAR) waar in de beslissing naar verwezen wordt.\\n        Zie \"],[8,[39,3],[[24,6,\"https://github.com/lblod/codelists/blob/master/minimal-belgian-chart-of-accounts.ttl\"]],null,[[\"default\"],[[[[1,\"hier\"]],[]]]]],[1,\" voor de URI's van de concepten.\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"taxRate\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"lblodBesluit:taxRate\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"lblodBesluit:TaxRate\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Aanslagvoet die in de beslissing bepaald wordt.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"hasAdditionalTaxRate\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"lblodBesluit:hasAdditionalTaxRate\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"xsd:boolean\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Duidt aan of er nog bijkomende aanslagvoeten zijn dan deze beschreven in de beslissing.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"description\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"dct:description\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"xsd:string\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Beschrijving bij de beslissing.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"comment\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"rdfs:comment\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"xsd:string\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Opmerking bij de beslissing.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"link\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"dct:hasPart\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"rdfs:Resource\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"URL van gerelateerd document dat een logisch onderdeel is van het besluit.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Aanslagvoet\"]],[]]]]],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Klasse\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  \"],[8,[39,2],null,[[\"@code\"],[\"lblodBesluit:TaxRate < schema:UnitPriceSpecification\"]],null],[1,\"\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Beschrijving\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Percentage waarop de belasting berekend wordt.\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Eigenschappen\"]],[]]]]],[1,\"\\n\"],[8,[39,1],null,null,[[\"header\",\"body\"],[[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Naam\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"URI\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Verwacht type\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Beschrijving\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"amount\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"schema:price\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"xsd:float\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Geldbedrag dat per eenheid gerekend wordt.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Bestuurseenheid\"]],[]]]]],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Klasse\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  \"],[8,[39,2],null,[[\"@code\"],[\"besluit:Bestuurseenheid\"]],null],[1,\"\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Eigenschappen\"]],[]]]]],[1,\"\\n\"],[8,[39,1],null,null,[[\"header\",\"body\"],[[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Naam\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"URI\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Verwacht type\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Beschrijving\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"classificatie\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"besluit:classificatie\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"skos:Concept\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Classificatie van de bestuurseenheid.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"naam\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"skos:prefLabel\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"xsd:string\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Naam van de bestuurseenheid.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"identifier\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"dct:identifier\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"xsd:string\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Identificator van de bestuurseenheid (vb. ondernemingsnummer).\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"bestuursorgaan\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"besluit:bestuurt\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"besluit:Bestuursorgaan\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Bestuursorgaan die door de bestuurseenheid bestuurd wordt.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Bestuursorgaan\"]],[]]]]],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Klasse\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  \"],[8,[39,2],null,[[\"@code\"],[\"besluit:Bestuursorgaan\"]],null],[1,\"\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Eigenschappen\"]],[]]]]],[1,\"\\n\"],[8,[39,1],null,null,[[\"header\",\"body\"],[[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Naam\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"URI\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Verwacht type\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Beschrijving\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"classificatie\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"besluit:classificatie\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"skos:Concept\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Het type bestuursorgaan.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Behandeling van Agendapunt\"]],[]]]]],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Klasse\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  \"],[8,[39,2],null,[[\"@code\"],[\"besluit:BehandelingVanAgendapunt\"]],null],[1,\"\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Eigenschappen\"]],[]]]]],[1,\"\\n\"],[8,[39,1],null,null,[[\"header\",\"body\"],[[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Naam\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"URI\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Verwacht type\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Beschrijving\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"onderwerp\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"dct:subject\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"besluit:Agendapunt\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Het onderwerp van de activiteit.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"besluit\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"prov:generated\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"besluit:Besluit\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Een besluit dat is opgemaakt naar aanleiding van de behandeling van het agendapunt.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Agendapunt\"]],[]]]]],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Klasse\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  \"],[8,[39,2],null,[[\"@code\"],[\"besluit:Agendapunt\"]],null],[1,\"\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Eigenschappen\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Geen relevante eigenschappen.\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Zitting\"]],[]]]]],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Klasse\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  \"],[8,[39,2],null,[[\"@code\"],[\"besluit:Zitting\"]],null],[1,\"\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Eigenschappen\"]],[]]]]],[1,\"\\n\"],[8,[39,1],null,null,[[\"header\",\"body\"],[[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Naam\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"URI\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Verwacht type\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Beschrijving\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"agendapunt\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"besluit:behandelt\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"besluit:Agendapunt\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Een formeel vastgelegd agendapunt van de zitting.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"gestartOpTijdstip\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"prov:startedAtTime\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"xsd:dateTime\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Tijdstip waarop de zitting begint.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"bestuursorgaan\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"besluit:isGehoudenDoor\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"besluit:Bestuursorgaan\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Duidt aan door welk orgaan de zitting is gehouden.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"notulen\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"besluit:heeftNotulen\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"foaf:Document\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Notulen van de zitting.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"besluitenlijst\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"besluit:heeftBesluitenlijst\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"foaf:Document\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Besluitenlijst van de zitting.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"agenda\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"besluit:heeftAgenda\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"foaf:Document\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Agenda van de zitting.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"uittreksel\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"besluit:heeftUittreksel\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,2],null,[[\"@code\"],[\"foaf:Document\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Uittreksel van een besluit van de zitting.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Voorbeelden\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Minimale Besluitenlijst\"]],[]]]]],[1,\"\\n\"],[8,[39,5],null,[[\"@snippetFilename\"],[\"meldingsplicht-annotaties/voorbeeld-besluitenlijst.html\"]],null],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Besluitenlijst met resultaat van de stemming\"]],[]]]]],[1,\"\\n\"],[8,[39,5],null,[[\"@snippetFilename\"],[\"meldingsplicht-annotaties/voorbeeld-besluitenlijst-met-stemming.html\"]],null],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Budget\"]],[]]]]],[1,\"\\n\"],[8,[39,5],null,[[\"@snippetFilename\"],[\"meldingsplicht-annotaties/voorbeeld-budget.html\"]],null],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Reglement\"]],[]]]]],[1,\"\\n\"],[8,[39,5],null,[[\"@snippetFilename\"],[\"meldingsplicht-annotaties/voorbeeld-reglement.html\"]],null],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Extra informatie\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],[[24,1,\"linken-bestuurseenheid\"]],[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Linken naar Bestuurseenheid bij sommige Besluittypes\"]],[]]]]],[1,\"\\n\\n\"],[10,2],[12],[1,\"\\n  Bij sommige besluiten is het nodig om te refereren naar een Bestuurseenheid. Hierbij gaat het bijvoorbeeld over de besluiten met volgende types:\\n\"],[13],[1,\"\\n\"],[10,\"ul\"],[12],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Advies jaarrekening\"],[13],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Besluit over budget(wijziging)\"],[13],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Besluit over meerjarenplan(aanpassing)\"],[13],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Schorsingsbesluit\"],[13],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Stuiten\"],[13],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Aanvraag desaffectatie presbyteria/kerken\"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Om vanuit het Besluit te refereren naar de betreffende Bestuurseenheid via de URI, gebruik het RDF predicaat \"],[8,[39,2],null,[[\"@code\"],[\"eli:is_about\"]],null],[1,\". Zie eveneens bij de bovenstaande tabel onder \"],[8,[39,4],null,[[\"@scrollToId\"],[\"submitted-resource\"]],[[\"default\"],[[[[1,\"Submitted Resource\"]],[]]]]],[1,\" voor nog meer eigenschappen voor Besluiten.\\n\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Onderstaande query kan gebruikt worden om gerelateerde Eredienstbestuurseenheden te vinden voor een gegeven Bestuurseenheid. Vervang in onderstaande query de URI voor het Bestuurseenheid met de URI van de betreffende eenheid. Voer deze SPARQL query uit op de \"],[8,[39,6],null,[[\"@route\"],[\"docs.centrale-vindplaats-sparql\"]],[[\"default\"],[[[[1,\"Centrale Vindplaats\"]],[]]]]],[1,\".\\n\"],[13],[1,\"\\n\"],[8,[39,5],null,[[\"@snippetFilename\"],[\"meldingsplicht-annotaties/voorbeeld-verkrijg-bestuurseenheden.sparql\"]],null],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Voorbeeld\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Beschouw onderstaand voorbeeld van Besluit waarin wordt verwezen naar een betreffende Bestuurseenheid, direct als eigenschap van het Besluit.\\n\"],[13],[1,\"\\n\"],[8,[39,5],null,[[\"@snippetFilename\"],[\"meldingsplicht-annotaties/voorbeeld-rdfa-met-link-bestuurseenheid.html\"]],null],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Datetime strings\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Bij het verwerken van de \"],[8,[39,2],null,[[\"@code\"],[\"xsd:dateTime\"]],null],[1,\" strings wordt het volgende ondersteund: \"],[10,\"br\"],[12],[13],[1,\"\\n  Het gaat over een subset van de ISO-8601 specificatie. Het formaat moet zijn\\n\"],[13],[1,\"\\n\"],[10,\"ul\"],[12],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Datum: \\\"YYYY-MM-DD\\\"\"],[13],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Tijdsspecificatie: \\\"YYYY-MM-DDTHH:mm:ss.SSSS\\\" met \\\"T\\\" als separator\"],[13],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Offset (tov UTC) met het volgende formaat: +-HH:mm, +-HHmm, +-HH of Z\"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Voorbeelden van aanvaarde \"],[8,[39,2],null,[[\"@code\"],[\"xsd:dateTime\"]],null],[1,\" strings\"]],[]]]]],[1,\"\\n\"],[10,\"ul\"],[12],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"'2020-05-14T06:36:05.7540Z'\"],[13],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"'2020-05-14T06:36:05.7540+01:10'\"],[13],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"'2020-05-14T06:36:05.7540+01'\"],[13],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"'2020-05-14T06:36:05.7540-0130'\"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Meldingsplicht API\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Bekijk de API die vendors kunnen gebruiken om besluiten te melden: \"],[8,[39,6],null,[[\"@route\"],[\"docs.meldingsplicht\"]],[[\"default\"],[[[[1,\"Meldingsplicht API\"]],[]]]]],[1,\".\\n\"],[13]],[],false,[\"au-heading\",\"au-table\",\"code-inline\",\"au-link-external\",\"scroll-link\",\"snippet-toggle\",\"au-link\"]]",
    "moduleName": "pages-vendors/templates/docs/meldingsplicht-annotaties.hbs",
    "isStrictMode": false
  });
});
;define("pages-vendors/templates/docs/meldingsplicht-sparql", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <AuHeading @skin="1" @level="1">Meldingsplicht SPARQL API <em>[CONCEPT]</em></AuHeading>
  
  <p>
    Met deze API is het mogelijk om rechtstreeks SPARQL query's uit te voeren tegen een gereduceerde dataset waar nuttige informatie terug te vinden is over de toestand van eerder ingestuurde meldingen. Deze API is gebaseerd op de <LinkTo @route="docs.vendor-sparql">Vendor SPARQL API</LinkTo>. Bekijk ook de pagina over de <LinkTo @route="docs.meldingsplicht">Meldingsplicht API</LinkTo> voor het insturen van meldingen.
  </p>
  <p>
    <strong>Het soort beschikbare gegevens is nog sterk onderhevig aan veranderingen. Vertrouw voorlopig (bij het schrijven in 11/2022) nog niet te veel op het soort gegevens en de structuur ervan.</strong>
  </p>
  
  <AuHeading @level="2" @skin="2">Verbinden</AuHeading>
  <p>
    De endpoint voor deze API kan bereikt worden via
  </p>
  <CodeBlock @code="https://api.loket.lokaalbestuur.vlaanderen.be" />
  <p>
    Ter volledigheid staat hieronder de volledige lijst aan URL's voor het inloggen, sturen van query's en het uitloggen respectievelijk.
  </p>
  <CodeBlock @code="https://api.loket.lokaalbestuur.vlaanderen.be/vendor/login
  https://api.loket.lokaalbestuur.vlaanderen.be/vendor/sparql
  https://api.loket.lokaalbestuur.vlaanderen.be/vendor/logout" />
  <p>
    <strong>Bekijk zeker de pagina over de <LinkTo @route="docs.vendor-sparql">Vendor SPARQL API</LinkTo> om te leren hoe de SPARQL API werkt!</strong>
  </p>
  
  <AuHeading @level="2" @skin="2">Sturen van query's</AuHeading>
  <p>
    Bij het inzenden van een nieuwe melding (zoals beschreven in <LinkTo @route="docs.meldingsplicht">Meldingsplicht API</LinkTo>) wordt er JSON teruggegeven die een URI bevat voor de melding (Submission) en de Job waarin de melding zal worden verwerkt. Deze kunnen worden gebruikt als onderwerp of voorwerp in SPARQL query's om doelgericht informatie op te vragen.
  </p>
  
  <AuHeading @level="3" @skin="3">Voorbeelden van query's</AuHeading>
  <p>
    Hieronder staan een aantal voorbeelden van SPARQL query's die naar het endpoint kunnen worden verstuurd.
  </p>
  
  <AuHeading @level="4" @skin="4">Oplijsten meldingen</AuHeading>
  <p>
    Met dit eerste voorbeeld worden er 100 eerder verrichtte meldingen opgevraagd. Met de verkregen URI's kan men query's gelijk die in volgende voorbeelden opstellen.
  </p>
  <Snippet @snippetFilename="meldingsplicht-sparql/meldingen-eerste-100.sparql" />
  
  <AuHeading @level="4" @skin="4">Status via Submission URI</AuHeading>
  <p>
    Aan de hand van dit voorbeeld kan de status van een ingestuurde melding (Submission) worden opgevraagd. Hiervoor wordt de URI gebruikt van de Submission die als antwoord werd gegeven op de melding aanvraag. Zie <LinkTo @route="docs.meldingsplicht">Meldingsplicht API</LinkTo>.
  </p>
  <Snippet @snippetFilename="meldingsplicht-sparql/voorbeeld-melding-status-submission-uri.sparql" />
  <p>
    <strong>Noteer:</strong> voor de status is aangeraden om steeds met de URI te werken. Het label kan veranderen, maar het achterliggende concept (i.e. de URI) niet.
  </p>
  <p>
    <strong>Noteer:</strong> de status voor een inzending kan &ldquo;verzonden&rdquo; of &ldquo;concept&rdquo; zijn. Een inzending in &ldquo;concept&rdquo; vereist nog manuele interventie door onvolledigheid van het document alvorens het officieel kan worden ingediend, waarna het de status &ldquo;verzonden&rdquo; krijgt. Indien er ingestuurd werd met status &ldquo;verzonden&rdquo; en de status blijft hangen op &ldquo;concept&rdquo;, is er hoogst waarschijnlijk iets mis met de gegevens van het document. Je kan steeds terecht bij op <AuLinkExternal href="digitaalABB@vlaanderen.be" @icon="mail">digitaalABB@vlaanderen.be</AuLinkExternal> voor hulp. Verder op deze pagina worden de URI's voor de status opgelijst.
  </p>
  
  <AuHeading @level="4" @skin="4">Status via document URI</AuHeading>
  <p>
  De status opvragen van een Submission kan eveneens via de document URI. Deze URI werd door de vendor meegegeven als URI van het werkelijke RDF document in de HTML pagina die ter beschikking werd gesteld. Deze URI wordt <CodeInline @code="submittedResource" /> genoemd bij de melding in <LinkTo @route="docs.meldingsplicht">Meldingsplicht API</LinkTo>.
  </p>
  <Snippet @snippetFilename="meldingsplicht-sparql/voorbeeld-melding-status-document-uri.sparql" />
  
  <AuHeading @level="4" @skin="4">Status via URL van downloadpagina</AuHeading>
  <p>
    Ten slotte is het ook mogelijk om de status van een Submission op te vragen via de URL van de downloadpagina. (Dit is een URL, geen URI.) Deze URL werd eveneens door de vendor meegegeven bij het inzenden van een melding en werd <CodeInline @code="href" /> genoemd.
  </p>
  <Snippet @snippetFilename="meldingsplicht-sparql/voorbeeld-melding-status-href.sparql" />
  <p>
    <strong>Pas op: deze methode van opvragen van informatie over de Submission is niet ideaal!</strong> Het is mogelijk dat er meerdere RDF documenten verwerkt staan in dezelfde HTML pagina. Bijgevolg kunnen er dus meerdere Submissions worden aangemaakt voor dezelfde URL, steeds met een verschillende document URI. In dat geval zal je bij het opvragen van informatie over de Submissions dus een combinatie zien van de gegevens van alle Submissions op die HTML pagina.
  </p>
  
  <AuHeading @level="2" @skin="2">Model van beschikbare gegevens</AuHeading>
  <p>
    Onderstaande tabel beschrijft de prefixes gebruikt in dit document en onderstaand model.
  </p>
  <AuTable @size="default">
    <:header>
      <tr>
        <th>Prefix</th>
        <th>URI</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td><CodeInline @code="rdf:" /></td>
        <td><AuLinkExternal href="http://www.w3.org/1999/02/22-rdf-syntax-ns#">http://www.w3.org/1999/02/22-rdf-syntax-ns#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="xsd:" /></td>
        <td><AuLinkExternal href="http://www.w3.org/2001/XMLSchema#">http://www.w3.org/2001/XMLSchema#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="meb:" /></td>
        <td><AuLinkExternal href="http://rdf.myexperiment.org/ontologies/base/">http://rdf.myexperiment.org/ontologies/base/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="mu:" /></td>
        <td><AuLinkExternal href="http://mu.semte.ch/vocabularies/core/">http://mu.semte.ch/vocabularies/core/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="prov:" /></td>
        <td><AuLinkExternal href="http://www.w3.org/ns/prov#">http://www.w3.org/ns/prov#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="dct:" /></td>
        <td><AuLinkExternal href="http://purl.org/dc/terms/">http://purl.org/dc/terms/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="adms:" /></td>
        <td><AuLinkExternal href="http://www.w3.org/ns/adms#">http://www.w3.org/ns/adms#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="pav:" /></td>
        <td><AuLinkExternal href="http://purl.org/pav/">http://purl.org/pav/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="nie:" /></td>
        <td><AuLinkExternal href="http://www.semanticdesktop.org/ontologies/2007/01/19/nie#">http://www.semanticdesktop.org/ontologies/2007/01/19/nie#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="nfo:" /></td>
        <td><AuLinkExternal href="http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#">http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="nmo:" /></td>
        <td><AuLinkExternal href="http://www.semanticdesktop.org/ontologies/2007/03/22/nmo#">http://www.semanticdesktop.org/ontologies/2007/03/22/nmo#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="ext:" /></td>
        <td><AuLinkExternal href="http://mu.semte.ch/vocabularies/ext/">http://mu.semte.ch/vocabularies/ext/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="am:" /></td>
        <td><AuLinkExternal href="http://lblod.data.gift/vocabularies/automatische-melding/">http://lblod.data.gift/vocabularies/automatische-melding/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="sec:" /></td>
        <td><AuLinkExternal href="http://lblod.data.gift/vocabularies/security/">http://lblod.data.gift/vocabularies/security/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="besluit:" /></td>
        <td><AuLinkExternal href="http://data.vlaanderen.be/ns/besluit#">http://data.vlaanderen.be/ns/besluit#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="foaf:" /></td>
        <td><AuLinkExternal href="http://xmlns.com/foaf/0.1/">http://xmlns.com/foaf/0.1/</AuLinkExternal></td>
      </tr>
    </:body>
  </AuTable>
  
  <AuHeading @level="3" @skin="3"><CodeInline @code="meb:Submission" /></AuHeading>
  <p>
    Een Submission is de inzending voor een document; de zogezegde &ldquo;gebeurtenis&rdquo; van het inzenden van dat document. Hier kan bijvoorbeeld de status van het inzendingsproces en het tijdstip van inzending worden teuggevonden.
  </p>
  <AuHeading @level="4" @skin="4">Eigenschappen</AuHeading>
  <AuTable>
    <:header>
      <tr>
        <th>Naam</th>
        <th>URI</th>
        <th>Verwacht type</th>
        <th>Beschrijving</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td>Gecre&euml;erd op</td>
        <td><CodeInline @code="dct:created" /></td>
        <td><CodeInline @code="xsd:dateTime" /></td>
        <td>Tijdstip waarop deze inzending werd gemaakt.</td>
      </tr>
      <tr>
        <td>Bewerkt op</td>
        <td><CodeInline @code="dct:modified" /></td>
        <td><CodeInline @code="xsd:dateTime" /></td>
        <td>Tijdstip waarop deze inzending laatst werd gewijzigd.</td>
      </tr>
      <tr>
        <td>Gecre&euml;erd door</td>
        <td><CodeInline @code="pav:createdBy" /></td>
        <td><CodeInline @code="besluit:Bestuurseenheid" /></td>
        <td>Voor/door welk bestuurseenheid de inzending werd gemaakt. Een derde partij kan een inzending maken via een applicatie voor deze bestuurseenheid.</td>
      </tr>
      <tr>
        <td>Verzonden op</td>
        <td><CodeInline @code="nmo:sentDate" /></td>
        <td><CodeInline @code="xsd:dateTime" /></td>
        <td>Tijdstip waarop de inzending succesvol werd verzonden naar het Loket.</td>
      </tr>
      <tr>
        <td>Ingezonden door</td>
        <td><CodeInline @code="pav:providedBy" /></td>
        <td><CodeInline @code="ext:Vendor" /></td>
        <td>URI van de vendor applicatie die de inzending maakte. Via de Vendor API mogen geen inzendingen van andere vendors gezien worden.</td>
      </tr>
      <tr>
        <td>Status</td>
        <td><CodeInline @code="adms:status" /></td>
        <td><CodeInline @code="ext:SubmissionDocumentStatus" /></td>
        <td>Status van de inzending. Zie onderaan onder hoofdstuk <ScrollLink @scrollToId="documentstatussen-inzendingen">Documentstatussen inzendingen</ScrollLink>.</td>
      </tr>
      <tr>
        <td>Genereerde dit inzendingsformulier</td>
        <td><CodeInline @code="prov:generated" /></td>
        <td><CodeInline @code="am:FormData" /></td>
        <td>Formuliergegevens die werden gegenereerd op basis van de inzending. Indien volledig wordt dit dossier automatisch verzonden naar het Loket.</td>
      </tr>
      <tr>
        <td>Document ter onderwerp</td>
        <td><CodeInline @code="dct:subject" /></td>
        <td><CodeInline @code="ext:SubmissionDocument" /> en <CodeInline @code="foaf:Document" /></td>
        <td>RDFa document dat werd ingezonden door de vendor. Dit document werd automatisch omgezet tot <CodeInline @code="am:FormData" /> om te versturen.</td>
      </tr>
      <tr>
        <td>Downloadlocatie</td>
        <td><CodeInline @code="prov:atLocation" /></td>
        <td><CodeInline @code="xsd:anyURI" /></td>
        <td>Locatie (URL) van het HTML RDFa document, ingezonden door de vendor, waar het <CodeInline @code="ext:SubmissionDocument" /> kan worden teruggevonden en worden gedownload.</td>
      </tr>
      <tr>
        <td>Heeft als bijlage</td>
        <td><CodeInline @code="nie:hasPart" /></td>
        <td><CodeInline @code="nfo:FileDataObject" /></td>
        <td>Bijlage die bij het <CodeInline @code="ext:SubmissionDocument" /> hoort.</td>
      </tr>
    </:body>
  </AuTable>
  
  <AuHeading id="documentstatussen-inzendingen" @level="2" @skin="2">Documentstatussen inzendingen</AuHeading>
  <p>
    Onderstaande tabel verduidelijkt de URI's die worden gebruikt om de status van een ingezonden document aan te duiden.
  </p>
  <AuTable @size="default">
    <:header>
      <tr>
        <th>URI</th>
        <th>Label</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td><CodeInline @code="http://lblod.data.gift/concepts/79a52da4-f491-4e2f-9374-89a13cde8ecd" /></td>
        <td>Concept</td>
      </tr>
      <tr>
        <td><CodeInline @code="http://lblod.data.gift/concepts/9bd8d86d-bb10-4456-a84e-91e9507c374c" /></td>
        <td>Verzonden</td>
      </tr>
      <tr>
        <td><CodeInline @code="http://lblod.data.gift/concepts/f6330856-e261-430f-b949-8e510d20d0ff" /></td>
        <td>Inzendbaar</td>
      </tr>
      </:body>
  </AuTable>
  */
  {
    "id": "yEn2fILA",
    "block": "[[[8,[39,0],null,[[\"@skin\",\"@level\"],[\"1\",\"1\"]],[[\"default\"],[[[[1,\"Meldingsplicht SPARQL API \"],[10,\"em\"],[12],[1,\"[CONCEPT]\"],[13]],[]]]]],[1,\"\\n\\n\"],[10,2],[12],[1,\"\\n  Met deze API is het mogelijk om rechtstreeks SPARQL query's uit te voeren tegen een gereduceerde dataset waar nuttige informatie terug te vinden is over de toestand van eerder ingestuurde meldingen. Deze API is gebaseerd op de \"],[8,[39,1],null,[[\"@route\"],[\"docs.vendor-sparql\"]],[[\"default\"],[[[[1,\"Vendor SPARQL API\"]],[]]]]],[1,\". Bekijk ook de pagina over de \"],[8,[39,1],null,[[\"@route\"],[\"docs.meldingsplicht\"]],[[\"default\"],[[[[1,\"Meldingsplicht API\"]],[]]]]],[1,\" voor het insturen van meldingen.\\n\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"\\n  \"],[10,\"strong\"],[12],[1,\"Het soort beschikbare gegevens is nog sterk onderhevig aan veranderingen. Vertrouw voorlopig (bij het schrijven in 11/2022) nog niet te veel op het soort gegevens en de structuur ervan.\"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Verbinden\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  De endpoint voor deze API kan bereikt worden via\\n\"],[13],[1,\"\\n\"],[8,[39,2],null,[[\"@code\"],[\"https://api.loket.lokaalbestuur.vlaanderen.be\"]],null],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Ter volledigheid staat hieronder de volledige lijst aan URL's voor het inloggen, sturen van query's en het uitloggen respectievelijk.\\n\"],[13],[1,\"\\n\"],[8,[39,2],null,[[\"@code\"],[\"https://api.loket.lokaalbestuur.vlaanderen.be/vendor/login\\nhttps://api.loket.lokaalbestuur.vlaanderen.be/vendor/sparql\\nhttps://api.loket.lokaalbestuur.vlaanderen.be/vendor/logout\"]],null],[1,\"\\n\"],[10,2],[12],[1,\"\\n  \"],[10,\"strong\"],[12],[1,\"Bekijk zeker de pagina over de \"],[8,[39,1],null,[[\"@route\"],[\"docs.vendor-sparql\"]],[[\"default\"],[[[[1,\"Vendor SPARQL API\"]],[]]]]],[1,\" om te leren hoe de SPARQL API werkt!\"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Sturen van query's\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Bij het inzenden van een nieuwe melding (zoals beschreven in \"],[8,[39,1],null,[[\"@route\"],[\"docs.meldingsplicht\"]],[[\"default\"],[[[[1,\"Meldingsplicht API\"]],[]]]]],[1,\") wordt er JSON teruggegeven die een URI bevat voor de melding (Submission) en de Job waarin de melding zal worden verwerkt. Deze kunnen worden gebruikt als onderwerp of voorwerp in SPARQL query's om doelgericht informatie op te vragen.\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Voorbeelden van query's\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Hieronder staan een aantal voorbeelden van SPARQL query's die naar het endpoint kunnen worden verstuurd.\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Oplijsten meldingen\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Met dit eerste voorbeeld worden er 100 eerder verrichtte meldingen opgevraagd. Met de verkregen URI's kan men query's gelijk die in volgende voorbeelden opstellen.\\n\"],[13],[1,\"\\n\"],[8,[39,3],null,[[\"@snippetFilename\"],[\"meldingsplicht-sparql/meldingen-eerste-100.sparql\"]],null],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Status via Submission URI\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Aan de hand van dit voorbeeld kan de status van een ingestuurde melding (Submission) worden opgevraagd. Hiervoor wordt de URI gebruikt van de Submission die als antwoord werd gegeven op de melding aanvraag. Zie \"],[8,[39,1],null,[[\"@route\"],[\"docs.meldingsplicht\"]],[[\"default\"],[[[[1,\"Meldingsplicht API\"]],[]]]]],[1,\".\\n\"],[13],[1,\"\\n\"],[8,[39,3],null,[[\"@snippetFilename\"],[\"meldingsplicht-sparql/voorbeeld-melding-status-submission-uri.sparql\"]],null],[1,\"\\n\"],[10,2],[12],[1,\"\\n  \"],[10,\"strong\"],[12],[1,\"Noteer:\"],[13],[1,\" voor de status is aangeraden om steeds met de URI te werken. Het label kan veranderen, maar het achterliggende concept (i.e. de URI) niet.\\n\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"\\n  \"],[10,\"strong\"],[12],[1,\"Noteer:\"],[13],[1,\" de status voor een inzending kan “verzonden” of “concept” zijn. Een inzending in “concept” vereist nog manuele interventie door onvolledigheid van het document alvorens het officieel kan worden ingediend, waarna het de status “verzonden” krijgt. Indien er ingestuurd werd met status “verzonden” en de status blijft hangen op “concept”, is er hoogst waarschijnlijk iets mis met de gegevens van het document. Je kan steeds terecht bij op \"],[8,[39,4],[[24,6,\"digitaalABB@vlaanderen.be\"]],[[\"@icon\"],[\"mail\"]],[[\"default\"],[[[[1,\"digitaalABB@vlaanderen.be\"]],[]]]]],[1,\" voor hulp. Verder op deze pagina worden de URI's voor de status opgelijst.\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Status via document URI\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\nDe status opvragen van een Submission kan eveneens via de document URI. Deze URI werd door de vendor meegegeven als URI van het werkelijke RDF document in de HTML pagina die ter beschikking werd gesteld. Deze URI wordt \"],[8,[39,5],null,[[\"@code\"],[\"submittedResource\"]],null],[1,\" genoemd bij de melding in \"],[8,[39,1],null,[[\"@route\"],[\"docs.meldingsplicht\"]],[[\"default\"],[[[[1,\"Meldingsplicht API\"]],[]]]]],[1,\".\\n\"],[13],[1,\"\\n\"],[8,[39,3],null,[[\"@snippetFilename\"],[\"meldingsplicht-sparql/voorbeeld-melding-status-document-uri.sparql\"]],null],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Status via URL van downloadpagina\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Ten slotte is het ook mogelijk om de status van een Submission op te vragen via de URL van de downloadpagina. (Dit is een URL, geen URI.) Deze URL werd eveneens door de vendor meegegeven bij het inzenden van een melding en werd \"],[8,[39,5],null,[[\"@code\"],[\"href\"]],null],[1,\" genoemd.\\n\"],[13],[1,\"\\n\"],[8,[39,3],null,[[\"@snippetFilename\"],[\"meldingsplicht-sparql/voorbeeld-melding-status-href.sparql\"]],null],[1,\"\\n\"],[10,2],[12],[1,\"\\n  \"],[10,\"strong\"],[12],[1,\"Pas op: deze methode van opvragen van informatie over de Submission is niet ideaal!\"],[13],[1,\" Het is mogelijk dat er meerdere RDF documenten verwerkt staan in dezelfde HTML pagina. Bijgevolg kunnen er dus meerdere Submissions worden aangemaakt voor dezelfde URL, steeds met een verschillende document URI. In dat geval zal je bij het opvragen van informatie over de Submissions dus een combinatie zien van de gegevens van alle Submissions op die HTML pagina.\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Model van beschikbare gegevens\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Onderstaande tabel beschrijft de prefixes gebruikt in dit document en onderstaand model.\\n\"],[13],[1,\"\\n\"],[8,[39,6],null,[[\"@size\"],[\"default\"]],[[\"header\",\"body\"],[[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Prefix\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"URI\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"rdf:\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],[[24,6,\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"]],null,[[\"default\"],[[[[1,\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"xsd:\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],[[24,6,\"http://www.w3.org/2001/XMLSchema#\"]],null,[[\"default\"],[[[[1,\"http://www.w3.org/2001/XMLSchema#\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"meb:\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],[[24,6,\"http://rdf.myexperiment.org/ontologies/base/\"]],null,[[\"default\"],[[[[1,\"http://rdf.myexperiment.org/ontologies/base/\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"mu:\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],[[24,6,\"http://mu.semte.ch/vocabularies/core/\"]],null,[[\"default\"],[[[[1,\"http://mu.semte.ch/vocabularies/core/\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"prov:\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],[[24,6,\"http://www.w3.org/ns/prov#\"]],null,[[\"default\"],[[[[1,\"http://www.w3.org/ns/prov#\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"dct:\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],[[24,6,\"http://purl.org/dc/terms/\"]],null,[[\"default\"],[[[[1,\"http://purl.org/dc/terms/\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"adms:\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],[[24,6,\"http://www.w3.org/ns/adms#\"]],null,[[\"default\"],[[[[1,\"http://www.w3.org/ns/adms#\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"pav:\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],[[24,6,\"http://purl.org/pav/\"]],null,[[\"default\"],[[[[1,\"http://purl.org/pav/\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"nie:\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],[[24,6,\"http://www.semanticdesktop.org/ontologies/2007/01/19/nie#\"]],null,[[\"default\"],[[[[1,\"http://www.semanticdesktop.org/ontologies/2007/01/19/nie#\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"nfo:\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],[[24,6,\"http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#\"]],null,[[\"default\"],[[[[1,\"http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"nmo:\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],[[24,6,\"http://www.semanticdesktop.org/ontologies/2007/03/22/nmo#\"]],null,[[\"default\"],[[[[1,\"http://www.semanticdesktop.org/ontologies/2007/03/22/nmo#\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"ext:\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],[[24,6,\"http://mu.semte.ch/vocabularies/ext/\"]],null,[[\"default\"],[[[[1,\"http://mu.semte.ch/vocabularies/ext/\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"am:\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],[[24,6,\"http://lblod.data.gift/vocabularies/automatische-melding/\"]],null,[[\"default\"],[[[[1,\"http://lblod.data.gift/vocabularies/automatische-melding/\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"sec:\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],[[24,6,\"http://lblod.data.gift/vocabularies/security/\"]],null,[[\"default\"],[[[[1,\"http://lblod.data.gift/vocabularies/security/\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"besluit:\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],[[24,6,\"http://data.vlaanderen.be/ns/besluit#\"]],null,[[\"default\"],[[[[1,\"http://data.vlaanderen.be/ns/besluit#\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"foaf:\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],[[24,6,\"http://xmlns.com/foaf/0.1/\"]],null,[[\"default\"],[[[[1,\"http://xmlns.com/foaf/0.1/\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[8,[39,5],null,[[\"@code\"],[\"meb:Submission\"]],null]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Een Submission is de inzending voor een document; de zogezegde “gebeurtenis” van het inzenden van dat document. Hier kan bijvoorbeeld de status van het inzendingsproces en het tijdstip van inzending worden teuggevonden.\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Eigenschappen\"]],[]]]]],[1,\"\\n\"],[8,[39,6],null,null,[[\"header\",\"body\"],[[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Naam\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"URI\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Verwacht type\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Beschrijving\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Gecreëerd op\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"dct:created\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"xsd:dateTime\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Tijdstip waarop deze inzending werd gemaakt.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Bewerkt op\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"dct:modified\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"xsd:dateTime\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Tijdstip waarop deze inzending laatst werd gewijzigd.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Gecreëerd door\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"pav:createdBy\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"besluit:Bestuurseenheid\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Voor/door welk bestuurseenheid de inzending werd gemaakt. Een derde partij kan een inzending maken via een applicatie voor deze bestuurseenheid.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Verzonden op\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"nmo:sentDate\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"xsd:dateTime\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Tijdstip waarop de inzending succesvol werd verzonden naar het Loket.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Ingezonden door\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"pav:providedBy\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"ext:Vendor\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"URI van de vendor applicatie die de inzending maakte. Via de Vendor API mogen geen inzendingen van andere vendors gezien worden.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Status\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"adms:status\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"ext:SubmissionDocumentStatus\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Status van de inzending. Zie onderaan onder hoofdstuk \"],[8,[39,7],null,[[\"@scrollToId\"],[\"documentstatussen-inzendingen\"]],[[\"default\"],[[[[1,\"Documentstatussen inzendingen\"]],[]]]]],[1,\".\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Genereerde dit inzendingsformulier\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"prov:generated\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"am:FormData\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Formuliergegevens die werden gegenereerd op basis van de inzending. Indien volledig wordt dit dossier automatisch verzonden naar het Loket.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Document ter onderwerp\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"dct:subject\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"ext:SubmissionDocument\"]],null],[1,\" en \"],[8,[39,5],null,[[\"@code\"],[\"foaf:Document\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"RDFa document dat werd ingezonden door de vendor. Dit document werd automatisch omgezet tot \"],[8,[39,5],null,[[\"@code\"],[\"am:FormData\"]],null],[1,\" om te versturen.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Downloadlocatie\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"prov:atLocation\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"xsd:anyURI\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Locatie (URL) van het HTML RDFa document, ingezonden door de vendor, waar het \"],[8,[39,5],null,[[\"@code\"],[\"ext:SubmissionDocument\"]],null],[1,\" kan worden teruggevonden en worden gedownload.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Heeft als bijlage\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"nie:hasPart\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"nfo:FileDataObject\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Bijlage die bij het \"],[8,[39,5],null,[[\"@code\"],[\"ext:SubmissionDocument\"]],null],[1,\" hoort.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],[[24,1,\"documentstatussen-inzendingen\"]],[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Documentstatussen inzendingen\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Onderstaande tabel verduidelijkt de URI's die worden gebruikt om de status van een ingezonden document aan te duiden.\\n\"],[13],[1,\"\\n\"],[8,[39,6],null,[[\"@size\"],[\"default\"]],[[\"header\",\"body\"],[[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"URI\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Label\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"http://lblod.data.gift/concepts/79a52da4-f491-4e2f-9374-89a13cde8ecd\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Concept\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"http://lblod.data.gift/concepts/9bd8d86d-bb10-4456-a84e-91e9507c374c\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Verzonden\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],null,[[\"@code\"],[\"http://lblod.data.gift/concepts/f6330856-e261-430f-b949-8e510d20d0ff\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Inzendbaar\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"]],[]]]]]],[],false,[\"au-heading\",\"link-to\",\"code-block\",\"snippet\",\"au-link-external\",\"code-inline\",\"au-table\",\"scroll-link\"]]",
    "moduleName": "pages-vendors/templates/docs/meldingsplicht-sparql.hbs",
    "isStrictMode": false
  });
});
;define("pages-vendors/templates/docs/meldingsplicht", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <AuHeading @level="1" @skin="1">Meldingsplicht API</AuHeading>
  <p>
    Lokale besturen publiceren beslissingen die via de Toezicht module in het Loket voor Lokale Besturen gemeld moeten worden. Loket voor Lokale Besturen biedt een API aan waarop publicaties van beslissingen gemeld kunnen worden, waarna ze automatisch geharvest zullen worden en toevoegd worden als nieuwe melding in Loket voor Lokale Besturen. Dit document beschrijft de API voor automatische melding.
  </p>
  
  <AuHeading @level="2" @skin="2">Aanmaken nieuwe melding</AuHeading>
  <AuHeading @level="3" @skin="3">API endpoint</AuHeading>
  <p>
    Het aanmaken van een nieuwe melding gebeurt via een request naar
  </p>
  <CodeBlock @code="POST https://api.loket.lokaalbestuur.vlaanderen.be/melding" />
  <p>
    met JSON-LD request body:
  </p>
  <Snippet @snippetFilename="meldingsplicht/voorbeeld-body.json" />
  <p class="au-u-para-small au-u-muted">
    Bekijk welke annotaties gebruikt kunnen worden in de gepubliceerde pagina: <AuLink @route="docs.meldingsplicht-annotaties">annotaties voor automatische melding</AuLink>.
  </p>
  <p>
    Het aanvragen van een publisher URI en geheime sleutel (key) staan verderop beschreven in de sectie 'Authenticatie'.
  </p>
  <AuHeading @level="3" @skin="3">Scope van een melding</AuHeading>
  <p>
    Er moet een melding gedaan worden per besluit/document. De link die gestuurd wordt in de <CodeInline @code="href" />-property van de request body moet een link zijn naar de pagina met de inhoud van het besluit/document. Dit mag geen overzichtspagina zijn waar er nog moet doorgeklikt worden naar een andere pagina. Er mogen wel nog andere besluiten/documenten geannoteerd staan op de pagina. De URI van het besluit dat gemeld wordt, wordt meegegeven in de <CodeInline @code="submittedResource" />-property. Verdere vereisten rond de gepubliceerde pagina's staan verderop beschreven.
  </p>
  <p>
    <strong>Bijvoorbeeld:</strong> <br />
    Gemeente Vlavirgem heeft de geannoteerde notulen van een zitting gepubliceerd op <AuLinkExternal href="#">http://vlavirgem.be/zittingen/20200304.html</AuLinkExternal>. De geannoteerde pagina bevat besluiten:
  </p>
  <ul>
    <li><AuLinkExternal href="#">http://data.vlavirgem.be/besluiten/id/besluit-A</AuLinkExternal>,</li>
    <li><AuLinkExternal href="#">http://data.vlavirgem.be/besluiten/id/besluit-B</AuLinkExternal>,</li>
    <li><AuLinkExternal href="#">http://data.vlavirgem.be/besluit/id/besluit-C</AuLinkExternal></li>
  </ul>
  <p>
    Er moeten dan 3 requests naar de melding API gestuurd worden. Alle requests hebben als <CodeInline @code="href" />-property: <AuLinkExternal href="#">http://vlavirgem.be/zittingen/20200304.html</AuLinkExternal>. De <CodeInline @code="submittedResource" />-property verschilt per request en bevat de URI van het besluit dat gemeld wordt.
  </p>
  
  <AuHeading @level="3" @skin="3">Meegeven van concept of inzendbaar status (optioneel)</AuHeading>
  <p>
  Indien een inzending aangemaakt wordt en volledig is, dan kan ze automatisch verzonden worden. Optioneel kan aangegeven worden dat de inzending in concept status is door de onderstaande URI voor "concept" als <CodeInline @code="status" />-property mee te geven. Hierdoor zal de inzending niet verzonden worden, maar als concept blijven staan tot manuele actie de inzending markeert als inzendbaar. Dit kan gedaan worden in de applicatie voor automatische meldingen of via een API call (ongedocumenteerd). Als het document de status van inzendbaar krijgt, wordt het meteen ingezonden als de data volledig is. Indien niet, wordt het alsnog in concept status gebracht voor manuele aanvulling en inzending. De mogelijke waarden voor de status zijn de URI's voor "concept" of "inzendbaar":
  </p>
  <AuTable>
    <:header>
      <tr>
        <th>Status</th>
        <th>URI</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td>Concept</td>
        <td>
          <AuLinkExternal href="http://lblod.data.gift/concepts/79a52da4-f491-4e2f-9374-89a13cde8ecd">http://lblod.data.gift/concepts/79a52da4-f491-4e2f-9374-89a13cde8ecd</AuLinkExternal>
        </td>
      </tr>
      <tr>
        <td>Inzendbaar</td>
        <td>
          <AuLinkExternal href="http://lblod.data.gift/concepts/f6330856-e261-430f-b949-8e510d20d0ff">http://lblod.data.gift/concepts/f6330856-e261-430f-b949-8e510d20d0ff</AuLinkExternal>
        </td>
      </tr>
    </:body>
  </AuTable>
  <p>
    Voorbeeld:
  </p>
  <Snippet @snippetFilename="meldingsplicht/voorbeeld-body-met-draft-status.json" />
  
  <AuHeading @level="3" @skin="3">JSON-LD context</AuHeading>
  <p>
    Elk van voorgaande voorbeelden heeft een impliciete JSON-LD context. Deze context kan expliciet in de calls meegegeven worden, of een alternatieve context kan meegegeven worden. Op deze manier blijft de API maximaal flexibel. Deze context wordt ter beschikking gesteld op <AuLinkExternal href="https://lblod.data.gift/contexts/automatische-melding/v1/context.json">https://lblod.data.gift/contexts/automatische-melding/v1/context.json</AuLinkExternal>.
  </p>
  <Snippet @snippetFilename="meldingsplicht/json-ld-context.json" />
  
  <AuHeading @level="2" @skin="2">Authenticatie</AuHeading>
  <p>
    Een bestuurseenheid kan een externe partij authorizeren om automatische meldingen uit te voeren in hun naam. Het beheer van deze rechten en permissies zal op lange termijn gebeuren via ACM/IDM en het Gebruikersbeheer. Op korte termijn zal dit beheerd worden door ABB.
  </p>
  <p>
    Iedere externe partij krijgt een unieke identificator en sleutel die meegestuurd wordt in de automatische melding. Voor de test API kun je als softwareleverancier zelf een sleutel aanvragen via <AuLinkExternal href="mailto:digitaalABB@vlaanderen.be?subject=Geheime sleutel automatische melding API test">digitaalABB@vlaanderen.be</AuLinkExternal>. Je krijgt dan een random gemeente om mee te testen. Wanneer de productie API beschikbaar komt, zal een bestuur de sleutel kunnen aanvragen via <AuLinkExternal href="mailto:digitaalABB@vlaanderen.be?subject=Geheime sleutel automatische melding API productie">digitaalABB@vlaanderen.be</AuLinkExternal>. De lokale besturen zullen dan ook via <AuLinkExternal href="mailto:digitaalABB@vlaanderen.be?subject=Permissie voor softwareleverancier ikv automatische melding">digitaalABB@vlaanderen.be</AuLinkExternal> een aanvraag insturen om een softwareleverancier permissie te geven om in hun naam automatische meldingen in te sturen.
  </p>
  
  <AuHeading @level="2" @skin="2">Verwijderen van een melding</AuHeading>
  <p>
    Het is mogelijk om een melding weer te verwijderen op voorwaarde dat het meegeleverde document nog niet verzonden werd naar het Loket. Dit kan gebruikt worden om documenten die nog niet volledig waren en daarom bleven steken in "Concept" status te verwijderen, aan te vullen en opnieuw te proberen melden. Na het melden van een document via de bovenstaande API wordt er een antwoord verzonden onder de vorm van een JSON object:
  </p>
  <Snippet @snippetFilename="meldingsplicht/voorbeeld-antwoord.json" />
  <p>
    De <CodeInline @code="submission" /> eigenschap bevat de URI voor de nieuw aangemaakte melding voor het ingezonden document. Deze kan worden gebruikt voor het formuleren van een aanvraag voor verwijdering dat kan worden verzonden op volgende URL:
  </p>
  <CodeBlock @code="POST https://api.loket.lokaalbestuur.vlaanderen.be/delete-melding" />
  <p>
    Volgend codefragment toont de minimale body voor zo'n aanvraag.
  </p>
  <Snippet @snippetFilename="meldingsplicht/voorbeeld-verwijder-request.json" />
  <p>
  Net zoals bij de melding is authenticatie op dezelfde manier vereist met <CodeInline @code="organization" /> en <CodeInline @code="publisher" /> eigenschappen.
  </p>
  
  <AuHeading @level="2" @skin="2" id="publicatie-documenten">Publicatie van documenten en besluiten</AuHeading>
  <AuHeading @level="3" @skin="3">Annotaties voor automatische melding</AuHeading>
  <p>
    Bekijk <AuLink @route="docs.meldingsplicht-annotaties">hier</AuLink> welke annotaties gebruikt kunnen worden op de gepubliceerde pagina's om besluiten automatisch te verzenden.
  </p>
  <AuHeading @level="3" @skin="3">Vereisten voor gepubliceerde pagina's</AuHeading>
  <p>
    Opdat de documenten en besluiten op een correcte manier automatisch geoogst kunnen worden, moeten de URLs waarop de documenten gepubliceerd worden aan enkele vereisten voldoen:
  </p>
  <AuHeading @level="4" @skin="4">SSL en certificaten</AuHeading>
  <p>
    Wanneer pagina's gepubliceerd worden met HTTPS moeten ze over een geldig certificaat beschikken. Dit certificaat omvat niet enkel het eigen certificaat, maar ook de hele keten tot aan het root-certificaat. Er bestaan tools, zoals <AuLinkExternal href="https://www.ssllabs.com/ssltest/index.html">deze</AuLinkExternal> om de geldigheid van de certificaten-ketting te testen.
  </p>
  <AuHeading @level="4" @skin="4">JavaScript</AuHeading>
  <p>
    De gepubliceerde pagina's mogen JavaScript bevatten, maar dit mag geen impact hebben op de inhoud van de pagina. Alle annotaties die geharvest moeten worden, moeten beschikbaar zijn bij het ophalen van de pagina, zonder dat er verdere scripts nodig zijn. Dit kan bijvoorbeeld getest worden door het gebruik van het <CodeInline @code="curl" /> commando om de gepubliceerde pagina op te halen.
  </p>
  <AuHeading @level="3" @skin="3">Ophalen van niet-publieke documenten [BETA]</AuHeading>
  <p>
    Indien er private documenten moeten worden opgehaald, kunnen authenticatiegevens worden doorgegeven aan de crawler. <br />
    De volgende authenticatie-schemas worden ondersteund:
  </p>
  <ul>
    <li>
      <AuLinkExternal href="https://datatracker.ietf.org/doc/html/rfc7617">Basic Authentication</AuLinkExternal>
    </li>
    <li>
      <AuLinkExternal href="https://tools.ietf.org/html/rfc6749#section-4.4">OAuth 2.0 Client Credentials Grant</AuLinkExternal> (zie ook <AuLinkExternal href="https://oauth.net/2/grant-types/client-credentials/">hier</AuLinkExternal>)
      <ul>
        <li>
          Met uitbreiding van <AuLinkExternal href="https://datatracker.ietf.org/doc/html/rfc8707">Resource Indicators</AuLinkExternal>
        </li>
      </ul>
    </li>
  </ul>
  <p>
    Deze lijst is niet definitief, en kan -in functie van de noden- uitgebreid worden. In geval van vragen, kan u steeds terecht op <AuLinkExternal href="mailto:digitaalABB@vlaanderen.be">digitaalABB@vlaanderen.be</AuLinkExternal>
  </p>
  <AuHeading @level="4" @skin="4">Overzicht</AuHeading>
  <p>
    Een key <AuLinkExternal href="http://lblod.data.gift/vocabularies/automatische-melding/targetAutenticationConfiguration">authentication</AuLinkExternal> dient toegevoed worden aan de body van het request. De informatie die onder de key valt, zal gebruikt worden voor de url van het te ophalen document en alle relevante gerelateerde documenten (bijlagen en <AuLinkExternal href="http://lblod.data.gift/vocabularies/besluit/linkToPublication">linkToPublication</AuLinkExternal>).
  </p>
  <AuHeading @level="4" @skin="4">Basic Authentication</AuHeading>
  <p>
    De key 'authentication' wordt toegevoegd als volgt aan het request:
  </p>
  <Snippet @snippetFilename="meldingsplicht/voorbeeld-basic-auth.json" />
  <AuHeading @level="4" @skin="4">OAuth 2.0 Client Credentials Grant</AuHeading>
  <p>
    De key 'authentication' wordt toegevoegd als volgt aan het request:
  </p>
  <Snippet @snippetFilename="meldingsplicht/voorbeeld-oauth2.json" />
  <p>
    De key 'resource' is hier optioneel en kan gebruikt worden om verdere beperkingen op te leggen over de op te halen resource, conform:  <AuLinkExternal href="https://datatracker.ietf.org/doc/html/rfc8707">Resource Indicators</AuLinkExternal>. Noteer, op OAuth 2.0 zijn er veel variaties mogelijk, contacteer ons gerust indien er uitbreidingen gewenst zijn.
  </p>
  <AuHeading @level="4" @skin="4">Belangrijke opmerking</AuHeading>
  <p>
    We gaan ervan uit dat de credentials regelmatig geroteerd worden, teneinde de veiligheid te verhogen.
  </p>
  
  <AuHeading @level="2" @skin="2">Ontwikkeling en test</AuHeading>
  <p>
    Voor het ontwikkelen en testen van automatische melding is een test endpoint ter beschikking gesteld op:
  </p>
  <CodeBlock @code="POST https://api.loket.lblod.info/melding" />
  <p>
    De publisher URI en geheime sleutel voor deze omgeving moeten eerst aangevraagd worden zoals beschreven onder 'Authenticatie'. De verwerking van de melding gebeurt asynchroon, maar zou in normale omstandigheden in een tijdspanne van enkele minuten afgehandeld worden.
  </p>
  <p>
    Om te valideren hoe een melding er zal uitzien in het Loket van Lokale Besturen is een web applicatie beschikbaar gesteld op <AuLinkExternal href="https://api.loket.lblod.info/mock-login">https://api.loket.lblod.info/mock-login</AuLinkExternal>. Je kan inloggen door de gewenste bestuurseenheid aan te klikken in de lijst. Vervolgens wordt een lijst getoond van alle meldingen die ontvangen zijn. Wanneer op het 'detail' van een melding geklikt wordt, kan bekeken worden welke kennis er uit het gepubliceerde document geharvest is en of deze al dan niet geldig/volledig is.
  </p>
  
  <AuHeading @level="2" @skin="2">Meldingsregels</AuHeading>
  <p>
    Informatie over welk type besluit meldingsplichtig is en dit voor welke type bestuur, wordt bijghouden in de
    <AuLink @route="docs.centrale-vindplaats-sparql">centrale-vindplaats</AuLink>. <br />
    Dit endpoint kan dan bevraagd worden om te bepalen of een bestuur al dan niet een inzending kan of moet insturen.
  </p>
  <p>
    Het model van dergelijke regel ziet er als volgt uit:
  </p>
  
  <AuHeading @level="3" @skin="3">Gebruikte prefixen</AuHeading>
  <AuTable>
    <:header>
      <tr>
        <th>Prefix</th>
        <th>URI</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td><CodeInline @code="lblodBesluit" /></td>
        <td><AuLinkExternal href="http://lblod.data.gift/vocabularies/besluit/">http://lblod.data.gift/vocabularies/besluit/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="schema" /></td>
        <td><AuLinkExternal href="http://schema.org/">http://schema.org/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="skos" /></td>
        <td><AuLinkExternal href="http://www.w3.org/2004/02/skos/core#">http://www.w3.org/2004/02/skos/core#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="xsd" /></td>
        <td><AuLinkExternal href="http://www.w3.org/2001/XMLSchema#">http://www.w3.org/2001/XMLSchema#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline @code="rule" /></td>
        <td><AuLinkExternal href="http://lblod.data.gift/vocabularies/notification/">http://lblod.data.gift/vocabularies/notification/</AuLinkExternal></td>
      </tr>
    </:body>
  </AuTable>
  
  <AuHeading @level="3" @skin="3"><CodeInline @code="rule:NotificationRule" /></AuHeading>
  <p>
    Beschrijft de meldingsregel voor een bepaald type besluit
  </p>
  <AuHeading @level="4" @skin="4">Eigenschappen</AuHeading>
  <AuTable>
    <:header>
      <tr>
        <th>Naam</th>
        <th>URI</th>
        <th>Verwacht type</th>
        <th>Beschrijving</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td>geldig vanaf</td>
        <td><CodeInline @code="schema:validFrom" /></td>
        <td><CodeInline @code="xsd:dateTime" /></td>
        <td>Beschrijft de inwerkingstreding van de meldingsregel.</td>
      </tr>
      <tr>
        <td>geldig tot</td>
        <td><CodeInline @code="schema:validThrough " /></td>
        <td><CodeInline @code="xsd:dateTime" /></td>
        <td>Beschrijft de uitwerkingstreding van de meldingsregel.</td>
      </tr>
      <tr>
        <td>geldig voor</td>
        <td><CodeInline @code="lblodBesluit:decidableBy" /></td>
        <td><CodeInline @code="skos:Concept" /></td>
        <td>
          Beschrijving van het type bestuur voor wie de regel geldig is. <br />
          De concepten staan beschreven op <AuLinkExternal href="https://data.vlaanderen.be/doc/conceptscheme/BestuurseenheidClassificatieCode">data.vlaanderen.be/doc/conceptscheme/BestuurseenheidClassificatieCode</AuLinkExternal>
        </td>
      </tr>
      <tr>
        <td>meldingsplichtig</td>
        <td><CodeInline @code="lblodBesluit:obligationToReport" /></td>
        <td><CodeInline @code="xsd:boolean" /></td>
        <td>Beschrijft of het hier over een meldingsplichtig besluit gaat</td>
      </tr>
    </:body>
  </AuTable>
  
  <AuHeading @level="3" @skin="3">Link naar <CodeInline @code="rule:NotificationRule" /></AuHeading>
  <p>
    Elementen uit de codelijsten <AuLinkExternal href="https://data.vlaanderen.be/id/concept/BesluitDocumentType/">BesluitDocumentType</AuLinkExternal> en <AuLinkExternal href="https://data.vlaanderen.be/id/concept/BesluitType/">BesluitType</AuLinkExternal> worden gelinkt met het predikaat <AuLinkExternal href="http://lblod.data.gift/vocabularies/besluit/">lblodBesluit:notificationRule</AuLinkExternal> om te verwijzen naar de specifieke regels die van toepassing op het type besluit.
  </p>
  <AuHeading @level="4" @skin="4">Eigenschappen</AuHeading>
  <AuTable>
    <:header>
      <tr>
        <th>Naam</th>
        <th>URI</th>
        <th>Verwacht type</th>
        <th>Beschrijving</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td>notificationRule</td>
        <td><CodeInline @code="lblodBesluit:notificationRule" /></td>
        <td><CodeInline @code="rule:NotificationRule" /></td>
        <td>Beschrijft welke meldinsregels van toepassing zijn op het type besluit of document</td>
      </tr>
    </:body>
  </AuTable>
  
  <AuHeading @level="3" @skin="3">Voorbeelden</AuHeading>
  <AuHeading @level="4" @skin="4">RDF-snippet</AuHeading>
  <p>
    De volgende snippet beschrijft hoe het er kan uitzien in RDF-formaat.
  </p>
  <Snippet @snippetFilename="meldingsplicht/voorbeeld-notification-rule.turtle" />
  <p>
    Noteer: het gaat hier om een illustratief voorbeeld.
  </p>
  <AuHeading @level="4" @skin="4">SPARQL query</AuHeading>
  <p>
    De volgende SPARQL-query geeft een voorbeeld van hoe
    <AuLink @route="docs.centrale-vindplaats-sparql">centrale-vindplaats</AuLink> bevraagd kan worden om meer informatie te vinden over de regels. <br />
    Hier worden alle meldingsplichtige besluiten opgelijst voor een Gemeente.
  </p>
  <Snippet @snippetFilename="meldingsplicht/voorbeeld-notification-rule.sparql" />
  */
  {
    "id": "OdJTK9OK",
    "block": "[[[8,[39,0],null,[[\"@level\",\"@skin\"],[\"1\",\"1\"]],[[\"default\"],[[[[1,\"Meldingsplicht API\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Lokale besturen publiceren beslissingen die via de Toezicht module in het Loket voor Lokale Besturen gemeld moeten worden. Loket voor Lokale Besturen biedt een API aan waarop publicaties van beslissingen gemeld kunnen worden, waarna ze automatisch geharvest zullen worden en toevoegd worden als nieuwe melding in Loket voor Lokale Besturen. Dit document beschrijft de API voor automatische melding.\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Aanmaken nieuwe melding\"]],[]]]]],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"API endpoint\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Het aanmaken van een nieuwe melding gebeurt via een request naar\\n\"],[13],[1,\"\\n\"],[8,[39,1],null,[[\"@code\"],[\"POST https://api.loket.lokaalbestuur.vlaanderen.be/melding\"]],null],[1,\"\\n\"],[10,2],[12],[1,\"\\n  met JSON-LD request body:\\n\"],[13],[1,\"\\n\"],[8,[39,2],null,[[\"@snippetFilename\"],[\"meldingsplicht/voorbeeld-body.json\"]],null],[1,\"\\n\"],[10,2],[14,0,\"au-u-para-small au-u-muted\"],[12],[1,\"\\n  Bekijk welke annotaties gebruikt kunnen worden in de gepubliceerde pagina: \"],[8,[39,3],null,[[\"@route\"],[\"docs.meldingsplicht-annotaties\"]],[[\"default\"],[[[[1,\"annotaties voor automatische melding\"]],[]]]]],[1,\".\\n\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Het aanvragen van een publisher URI en geheime sleutel (key) staan verderop beschreven in de sectie 'Authenticatie'.\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Scope van een melding\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Er moet een melding gedaan worden per besluit/document. De link die gestuurd wordt in de \"],[8,[39,4],null,[[\"@code\"],[\"href\"]],null],[1,\"-property van de request body moet een link zijn naar de pagina met de inhoud van het besluit/document. Dit mag geen overzichtspagina zijn waar er nog moet doorgeklikt worden naar een andere pagina. Er mogen wel nog andere besluiten/documenten geannoteerd staan op de pagina. De URI van het besluit dat gemeld wordt, wordt meegegeven in de \"],[8,[39,4],null,[[\"@code\"],[\"submittedResource\"]],null],[1,\"-property. Verdere vereisten rond de gepubliceerde pagina's staan verderop beschreven.\\n\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"\\n  \"],[10,\"strong\"],[12],[1,\"Bijvoorbeeld:\"],[13],[1,\" \"],[10,\"br\"],[12],[13],[1,\"\\n  Gemeente Vlavirgem heeft de geannoteerde notulen van een zitting gepubliceerd op \"],[8,[39,5],[[24,6,\"#\"]],null,[[\"default\"],[[[[1,\"http://vlavirgem.be/zittingen/20200304.html\"]],[]]]]],[1,\". De geannoteerde pagina bevat besluiten:\\n\"],[13],[1,\"\\n\"],[10,\"ul\"],[12],[1,\"\\n  \"],[10,\"li\"],[12],[8,[39,5],[[24,6,\"#\"]],null,[[\"default\"],[[[[1,\"http://data.vlavirgem.be/besluiten/id/besluit-A\"]],[]]]]],[1,\",\"],[13],[1,\"\\n  \"],[10,\"li\"],[12],[8,[39,5],[[24,6,\"#\"]],null,[[\"default\"],[[[[1,\"http://data.vlavirgem.be/besluiten/id/besluit-B\"]],[]]]]],[1,\",\"],[13],[1,\"\\n  \"],[10,\"li\"],[12],[8,[39,5],[[24,6,\"#\"]],null,[[\"default\"],[[[[1,\"http://data.vlavirgem.be/besluit/id/besluit-C\"]],[]]]]],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Er moeten dan 3 requests naar de melding API gestuurd worden. Alle requests hebben als \"],[8,[39,4],null,[[\"@code\"],[\"href\"]],null],[1,\"-property: \"],[8,[39,5],[[24,6,\"#\"]],null,[[\"default\"],[[[[1,\"http://vlavirgem.be/zittingen/20200304.html\"]],[]]]]],[1,\". De \"],[8,[39,4],null,[[\"@code\"],[\"submittedResource\"]],null],[1,\"-property verschilt per request en bevat de URI van het besluit dat gemeld wordt.\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Meegeven van concept of inzendbaar status (optioneel)\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\nIndien een inzending aangemaakt wordt en volledig is, dan kan ze automatisch verzonden worden. Optioneel kan aangegeven worden dat de inzending in concept status is door de onderstaande URI voor \\\"concept\\\" als \"],[8,[39,4],null,[[\"@code\"],[\"status\"]],null],[1,\"-property mee te geven. Hierdoor zal de inzending niet verzonden worden, maar als concept blijven staan tot manuele actie de inzending markeert als inzendbaar. Dit kan gedaan worden in de applicatie voor automatische meldingen of via een API call (ongedocumenteerd). Als het document de status van inzendbaar krijgt, wordt het meteen ingezonden als de data volledig is. Indien niet, wordt het alsnog in concept status gebracht voor manuele aanvulling en inzending. De mogelijke waarden voor de status zijn de URI's voor \\\"concept\\\" of \\\"inzendbaar\\\":\\n\"],[13],[1,\"\\n\"],[8,[39,6],null,null,[[\"header\",\"body\"],[[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Status\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"URI\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Concept\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"\\n        \"],[8,[39,5],[[24,6,\"http://lblod.data.gift/concepts/79a52da4-f491-4e2f-9374-89a13cde8ecd\"]],null,[[\"default\"],[[[[1,\"http://lblod.data.gift/concepts/79a52da4-f491-4e2f-9374-89a13cde8ecd\"]],[]]]]],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Inzendbaar\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"\\n        \"],[8,[39,5],[[24,6,\"http://lblod.data.gift/concepts/f6330856-e261-430f-b949-8e510d20d0ff\"]],null,[[\"default\"],[[[[1,\"http://lblod.data.gift/concepts/f6330856-e261-430f-b949-8e510d20d0ff\"]],[]]]]],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Voorbeeld:\\n\"],[13],[1,\"\\n\"],[8,[39,2],null,[[\"@snippetFilename\"],[\"meldingsplicht/voorbeeld-body-met-draft-status.json\"]],null],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"JSON-LD context\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Elk van voorgaande voorbeelden heeft een impliciete JSON-LD context. Deze context kan expliciet in de calls meegegeven worden, of een alternatieve context kan meegegeven worden. Op deze manier blijft de API maximaal flexibel. Deze context wordt ter beschikking gesteld op \"],[8,[39,5],[[24,6,\"https://lblod.data.gift/contexts/automatische-melding/v1/context.json\"]],null,[[\"default\"],[[[[1,\"https://lblod.data.gift/contexts/automatische-melding/v1/context.json\"]],[]]]]],[1,\".\\n\"],[13],[1,\"\\n\"],[8,[39,2],null,[[\"@snippetFilename\"],[\"meldingsplicht/json-ld-context.json\"]],null],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Authenticatie\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Een bestuurseenheid kan een externe partij authorizeren om automatische meldingen uit te voeren in hun naam. Het beheer van deze rechten en permissies zal op lange termijn gebeuren via ACM/IDM en het Gebruikersbeheer. Op korte termijn zal dit beheerd worden door ABB.\\n\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Iedere externe partij krijgt een unieke identificator en sleutel die meegestuurd wordt in de automatische melding. Voor de test API kun je als softwareleverancier zelf een sleutel aanvragen via \"],[8,[39,5],[[24,6,\"mailto:digitaalABB@vlaanderen.be?subject=Geheime sleutel automatische melding API test\"]],null,[[\"default\"],[[[[1,\"digitaalABB@vlaanderen.be\"]],[]]]]],[1,\". Je krijgt dan een random gemeente om mee te testen. Wanneer de productie API beschikbaar komt, zal een bestuur de sleutel kunnen aanvragen via \"],[8,[39,5],[[24,6,\"mailto:digitaalABB@vlaanderen.be?subject=Geheime sleutel automatische melding API productie\"]],null,[[\"default\"],[[[[1,\"digitaalABB@vlaanderen.be\"]],[]]]]],[1,\". De lokale besturen zullen dan ook via \"],[8,[39,5],[[24,6,\"mailto:digitaalABB@vlaanderen.be?subject=Permissie voor softwareleverancier ikv automatische melding\"]],null,[[\"default\"],[[[[1,\"digitaalABB@vlaanderen.be\"]],[]]]]],[1,\" een aanvraag insturen om een softwareleverancier permissie te geven om in hun naam automatische meldingen in te sturen.\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Verwijderen van een melding\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Het is mogelijk om een melding weer te verwijderen op voorwaarde dat het meegeleverde document nog niet verzonden werd naar het Loket. Dit kan gebruikt worden om documenten die nog niet volledig waren en daarom bleven steken in \\\"Concept\\\" status te verwijderen, aan te vullen en opnieuw te proberen melden. Na het melden van een document via de bovenstaande API wordt er een antwoord verzonden onder de vorm van een JSON object:\\n\"],[13],[1,\"\\n\"],[8,[39,2],null,[[\"@snippetFilename\"],[\"meldingsplicht/voorbeeld-antwoord.json\"]],null],[1,\"\\n\"],[10,2],[12],[1,\"\\n  De \"],[8,[39,4],null,[[\"@code\"],[\"submission\"]],null],[1,\" eigenschap bevat de URI voor de nieuw aangemaakte melding voor het ingezonden document. Deze kan worden gebruikt voor het formuleren van een aanvraag voor verwijdering dat kan worden verzonden op volgende URL:\\n\"],[13],[1,\"\\n\"],[8,[39,1],null,[[\"@code\"],[\"POST https://api.loket.lokaalbestuur.vlaanderen.be/delete-melding\"]],null],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Volgend codefragment toont de minimale body voor zo'n aanvraag.\\n\"],[13],[1,\"\\n\"],[8,[39,2],null,[[\"@snippetFilename\"],[\"meldingsplicht/voorbeeld-verwijder-request.json\"]],null],[1,\"\\n\"],[10,2],[12],[1,\"\\nNet zoals bij de melding is authenticatie op dezelfde manier vereist met \"],[8,[39,4],null,[[\"@code\"],[\"organization\"]],null],[1,\" en \"],[8,[39,4],null,[[\"@code\"],[\"publisher\"]],null],[1,\" eigenschappen.\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],[[24,1,\"publicatie-documenten\"]],[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Publicatie van documenten en besluiten\"]],[]]]]],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Annotaties voor automatische melding\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Bekijk \"],[8,[39,3],null,[[\"@route\"],[\"docs.meldingsplicht-annotaties\"]],[[\"default\"],[[[[1,\"hier\"]],[]]]]],[1,\" welke annotaties gebruikt kunnen worden op de gepubliceerde pagina's om besluiten automatisch te verzenden.\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Vereisten voor gepubliceerde pagina's\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Opdat de documenten en besluiten op een correcte manier automatisch geoogst kunnen worden, moeten de URLs waarop de documenten gepubliceerd worden aan enkele vereisten voldoen:\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"SSL en certificaten\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Wanneer pagina's gepubliceerd worden met HTTPS moeten ze over een geldig certificaat beschikken. Dit certificaat omvat niet enkel het eigen certificaat, maar ook de hele keten tot aan het root-certificaat. Er bestaan tools, zoals \"],[8,[39,5],[[24,6,\"https://www.ssllabs.com/ssltest/index.html\"]],null,[[\"default\"],[[[[1,\"deze\"]],[]]]]],[1,\" om de geldigheid van de certificaten-ketting te testen.\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"JavaScript\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  De gepubliceerde pagina's mogen JavaScript bevatten, maar dit mag geen impact hebben op de inhoud van de pagina. Alle annotaties die geharvest moeten worden, moeten beschikbaar zijn bij het ophalen van de pagina, zonder dat er verdere scripts nodig zijn. Dit kan bijvoorbeeld getest worden door het gebruik van het \"],[8,[39,4],null,[[\"@code\"],[\"curl\"]],null],[1,\" commando om de gepubliceerde pagina op te halen.\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Ophalen van niet-publieke documenten [BETA]\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Indien er private documenten moeten worden opgehaald, kunnen authenticatiegevens worden doorgegeven aan de crawler. \"],[10,\"br\"],[12],[13],[1,\"\\n  De volgende authenticatie-schemas worden ondersteund:\\n\"],[13],[1,\"\\n\"],[10,\"ul\"],[12],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"\\n    \"],[8,[39,5],[[24,6,\"https://datatracker.ietf.org/doc/html/rfc7617\"]],null,[[\"default\"],[[[[1,\"Basic Authentication\"]],[]]]]],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"\\n    \"],[8,[39,5],[[24,6,\"https://tools.ietf.org/html/rfc6749#section-4.4\"]],null,[[\"default\"],[[[[1,\"OAuth 2.0 Client Credentials Grant\"]],[]]]]],[1,\" (zie ook \"],[8,[39,5],[[24,6,\"https://oauth.net/2/grant-types/client-credentials/\"]],null,[[\"default\"],[[[[1,\"hier\"]],[]]]]],[1,\")\\n    \"],[10,\"ul\"],[12],[1,\"\\n      \"],[10,\"li\"],[12],[1,\"\\n        Met uitbreiding van \"],[8,[39,5],[[24,6,\"https://datatracker.ietf.org/doc/html/rfc8707\"]],null,[[\"default\"],[[[[1,\"Resource Indicators\"]],[]]]]],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Deze lijst is niet definitief, en kan -in functie van de noden- uitgebreid worden. In geval van vragen, kan u steeds terecht op \"],[8,[39,5],[[24,6,\"mailto:digitaalABB@vlaanderen.be\"]],null,[[\"default\"],[[[[1,\"digitaalABB@vlaanderen.be\"]],[]]]]],[1,\"\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Overzicht\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Een key \"],[8,[39,5],[[24,6,\"http://lblod.data.gift/vocabularies/automatische-melding/targetAutenticationConfiguration\"]],null,[[\"default\"],[[[[1,\"authentication\"]],[]]]]],[1,\" dient toegevoed worden aan de body van het request. De informatie die onder de key valt, zal gebruikt worden voor de url van het te ophalen document en alle relevante gerelateerde documenten (bijlagen en \"],[8,[39,5],[[24,6,\"http://lblod.data.gift/vocabularies/besluit/linkToPublication\"]],null,[[\"default\"],[[[[1,\"linkToPublication\"]],[]]]]],[1,\").\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Basic Authentication\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  De key 'authentication' wordt toegevoegd als volgt aan het request:\\n\"],[13],[1,\"\\n\"],[8,[39,2],null,[[\"@snippetFilename\"],[\"meldingsplicht/voorbeeld-basic-auth.json\"]],null],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"OAuth 2.0 Client Credentials Grant\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  De key 'authentication' wordt toegevoegd als volgt aan het request:\\n\"],[13],[1,\"\\n\"],[8,[39,2],null,[[\"@snippetFilename\"],[\"meldingsplicht/voorbeeld-oauth2.json\"]],null],[1,\"\\n\"],[10,2],[12],[1,\"\\n  De key 'resource' is hier optioneel en kan gebruikt worden om verdere beperkingen op te leggen over de op te halen resource, conform:  \"],[8,[39,5],[[24,6,\"https://datatracker.ietf.org/doc/html/rfc8707\"]],null,[[\"default\"],[[[[1,\"Resource Indicators\"]],[]]]]],[1,\". Noteer, op OAuth 2.0 zijn er veel variaties mogelijk, contacteer ons gerust indien er uitbreidingen gewenst zijn.\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Belangrijke opmerking\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  We gaan ervan uit dat de credentials regelmatig geroteerd worden, teneinde de veiligheid te verhogen.\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Ontwikkeling en test\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Voor het ontwikkelen en testen van automatische melding is een test endpoint ter beschikking gesteld op:\\n\"],[13],[1,\"\\n\"],[8,[39,1],null,[[\"@code\"],[\"POST https://api.loket.lblod.info/melding\"]],null],[1,\"\\n\"],[10,2],[12],[1,\"\\n  De publisher URI en geheime sleutel voor deze omgeving moeten eerst aangevraagd worden zoals beschreven onder 'Authenticatie'. De verwerking van de melding gebeurt asynchroon, maar zou in normale omstandigheden in een tijdspanne van enkele minuten afgehandeld worden.\\n\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Om te valideren hoe een melding er zal uitzien in het Loket van Lokale Besturen is een web applicatie beschikbaar gesteld op \"],[8,[39,5],[[24,6,\"https://api.loket.lblod.info/mock-login\"]],null,[[\"default\"],[[[[1,\"https://api.loket.lblod.info/mock-login\"]],[]]]]],[1,\". Je kan inloggen door de gewenste bestuurseenheid aan te klikken in de lijst. Vervolgens wordt een lijst getoond van alle meldingen die ontvangen zijn. Wanneer op het 'detail' van een melding geklikt wordt, kan bekeken worden welke kennis er uit het gepubliceerde document geharvest is en of deze al dan niet geldig/volledig is.\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Meldingsregels\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Informatie over welk type besluit meldingsplichtig is en dit voor welke type bestuur, wordt bijghouden in de\\n  \"],[8,[39,3],null,[[\"@route\"],[\"docs.centrale-vindplaats-sparql\"]],[[\"default\"],[[[[1,\"centrale-vindplaats\"]],[]]]]],[1,\". \"],[10,\"br\"],[12],[13],[1,\"\\n  Dit endpoint kan dan bevraagd worden om te bepalen of een bestuur al dan niet een inzending kan of moet insturen.\\n\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Het model van dergelijke regel ziet er als volgt uit:\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Gebruikte prefixen\"]],[]]]]],[1,\"\\n\"],[8,[39,6],null,null,[[\"header\",\"body\"],[[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Prefix\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"URI\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"lblodBesluit\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],[[24,6,\"http://lblod.data.gift/vocabularies/besluit/\"]],null,[[\"default\"],[[[[1,\"http://lblod.data.gift/vocabularies/besluit/\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"schema\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],[[24,6,\"http://schema.org/\"]],null,[[\"default\"],[[[[1,\"http://schema.org/\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"skos\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],[[24,6,\"http://www.w3.org/2004/02/skos/core#\"]],null,[[\"default\"],[[[[1,\"http://www.w3.org/2004/02/skos/core#\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"xsd\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],[[24,6,\"http://www.w3.org/2001/XMLSchema#\"]],null,[[\"default\"],[[[[1,\"http://www.w3.org/2001/XMLSchema#\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"rule\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,5],[[24,6,\"http://lblod.data.gift/vocabularies/notification/\"]],null,[[\"default\"],[[[[1,\"http://lblod.data.gift/vocabularies/notification/\"]],[]]]]],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[8,[39,4],null,[[\"@code\"],[\"rule:NotificationRule\"]],null]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Beschrijft de meldingsregel voor een bepaald type besluit\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Eigenschappen\"]],[]]]]],[1,\"\\n\"],[8,[39,6],null,null,[[\"header\",\"body\"],[[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Naam\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"URI\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Verwacht type\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Beschrijving\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"geldig vanaf\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"schema:validFrom\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"xsd:dateTime\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Beschrijft de inwerkingstreding van de meldingsregel.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"geldig tot\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"schema:validThrough \"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"xsd:dateTime\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Beschrijft de uitwerkingstreding van de meldingsregel.\"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"geldig voor\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"lblodBesluit:decidableBy\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"skos:Concept\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"\\n        Beschrijving van het type bestuur voor wie de regel geldig is. \"],[10,\"br\"],[12],[13],[1,\"\\n        De concepten staan beschreven op \"],[8,[39,5],[[24,6,\"https://data.vlaanderen.be/doc/conceptscheme/BestuurseenheidClassificatieCode\"]],null,[[\"default\"],[[[[1,\"data.vlaanderen.be/doc/conceptscheme/BestuurseenheidClassificatieCode\"]],[]]]]],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"meldingsplichtig\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"lblodBesluit:obligationToReport\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"xsd:boolean\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Beschrijft of het hier over een meldingsplichtig besluit gaat\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Link naar \"],[8,[39,4],null,[[\"@code\"],[\"rule:NotificationRule\"]],null]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Elementen uit de codelijsten \"],[8,[39,5],[[24,6,\"https://data.vlaanderen.be/id/concept/BesluitDocumentType/\"]],null,[[\"default\"],[[[[1,\"BesluitDocumentType\"]],[]]]]],[1,\" en \"],[8,[39,5],[[24,6,\"https://data.vlaanderen.be/id/concept/BesluitType/\"]],null,[[\"default\"],[[[[1,\"BesluitType\"]],[]]]]],[1,\" worden gelinkt met het predikaat \"],[8,[39,5],[[24,6,\"http://lblod.data.gift/vocabularies/besluit/\"]],null,[[\"default\"],[[[[1,\"lblodBesluit:notificationRule\"]],[]]]]],[1,\" om te verwijzen naar de specifieke regels die van toepassing op het type besluit.\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Eigenschappen\"]],[]]]]],[1,\"\\n\"],[8,[39,6],null,null,[[\"header\",\"body\"],[[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Naam\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"URI\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Verwacht type\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Beschrijving\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"notificationRule\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"lblodBesluit:notificationRule\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,4],null,[[\"@code\"],[\"rule:NotificationRule\"]],null],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Beschrijft welke meldinsregels van toepassing zijn op het type besluit of document\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Voorbeelden\"]],[]]]]],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"RDF-snippet\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  De volgende snippet beschrijft hoe het er kan uitzien in RDF-formaat.\\n\"],[13],[1,\"\\n\"],[8,[39,2],null,[[\"@snippetFilename\"],[\"meldingsplicht/voorbeeld-notification-rule.turtle\"]],null],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Noteer: het gaat hier om een illustratief voorbeeld.\\n\"],[13],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"SPARQL query\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  De volgende SPARQL-query geeft een voorbeeld van hoe\\n  \"],[8,[39,3],null,[[\"@route\"],[\"docs.centrale-vindplaats-sparql\"]],[[\"default\"],[[[[1,\"centrale-vindplaats\"]],[]]]]],[1,\" bevraagd kan worden om meer informatie te vinden over de regels. \"],[10,\"br\"],[12],[13],[1,\"\\n  Hier worden alle meldingsplichtige besluiten opgelijst voor een Gemeente.\\n\"],[13],[1,\"\\n\"],[8,[39,2],null,[[\"@snippetFilename\"],[\"meldingsplicht/voorbeeld-notification-rule.sparql\"]],null]],[],false,[\"au-heading\",\"code-block\",\"snippet\",\"au-link\",\"code-inline\",\"au-link-external\",\"au-table\"]]",
    "moduleName": "pages-vendors/templates/docs/meldingsplicht.hbs",
    "isStrictMode": false
  });
});
;define("pages-vendors/templates/docs/publicatie-annotaties", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <AuHeading @level="1" @skin="1">Annotaties voor publicaties</AuHeading>
  <p>
    Lokale besturen publiceren documenten en beslissingen zoals agenda's, besluitenlijsten, notulen, enz. Opdat de kennis automatisch door een machine uit deze documenten ge&euml;xtraheerd kan worden, moeten ze op een correcte wijze geannoteerd te worden. Deze annotaties gebeuren volgens <AuLinkExternal href="https://data.vlaanderen.be/doc/applicatieprofiel/besluit-publicatie/">het Besluit Publicatie applicatieprofiel</AuLinkExternal> en de <AuLink @route="docs.meldingsplicht-annotaties">annotaties voor automatische melding</AuLink>. Dit document beschrijft de annotaties die gebruikt worden om gepubliceerde documenten en overzichtpagina's te annoteren.
  </p>
  
  <AuHeading @level="2" @skin="2" id="annotatie-publicaties">Annotatie van gepubliceerde documenten</AuHeading>
  <AuHeading @level="3" @skin="3" id="annotatie-publicaties-document-types">Document en besluit types</AuHeading>
  <p>
    Ieder document dat gepubliceerd wordt is een <AuLinkExternal href="https://data.vlaanderen.be/doc/applicatieprofiel/besluit-publicatie/#Document">foaf:Document</AuLinkExternal>. Ieder document heeft een type dat geannoteerd kan worden met het <CodeInline @code="typeof" /> attribuut. De gekende besluit- en document types zijn gepubliceerd als codelijst op <AuLinkExternal href="https://data.vlaanderen.be">data.vlaanderen.be</AuLinkExternal>:
  </p>
  <AuTable>
    <:header>
      <tr>
        <th>Codelijst</th>
        <th>URL</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td>Besluit type</td>
        <td>
          <AuLinkExternal href="https://data.vlaanderen.be/doc/conceptscheme/BesluitType">https://data.vlaanderen.be/doc/conceptscheme/BesluitType</AuLinkExternal>
        </td>
      </tr>
      <tr>
        <td>Document type</td>
        <td>
          <AuLinkExternal href="https://data.vlaanderen.be/doc/conceptscheme/BesluitDocumentType">https://data.vlaanderen.be/doc/conceptscheme/BesluitDocumentType</AuLinkExternal>
        </td>
      </tr>
    </:body>
  </AuTable>
  
  <AuHeading @level="4" @skin="4">Voorbeeld</AuHeading>
  <p>
    Via RDFa annotaties kan dit als volgt weergegeven worden:
  </p>
  <Snippet @snippetFilename="publicatie-annotaties/voorbeeld-rdfa-document-met-type.html" />
  <p>
    Annotaties van de overige types van besluiten en documenten zijn analoog aan bovenstaand voorbeeld van een agenda.
  </p>
  
  <AuHeading @level="3" @skin="3" id="document-types-zitting">Annotatie van de relatie naar een zitting</AuHeading>
  <p>
    Ieder document dat gepubliceerd wordt, moet via een annotatie gerelateerd zijn aan een zitting. Voor documenten dat geen besluit zijn, kunnen volgende predicaten gebruikt worden om ze aan een zitting te relateren:
  </p>
  <AuTable>
    <:header>
      <tr>
        <th>Document type</th>
        <th>Predicaat om te relateren aan zitting</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td>Agenda</td>
        <td><CodeInline @code="besluit:heeftAgenda" /></td>
      </tr>
      <tr>
        <td>Besluitenlijst</td>
        <td><CodeInline @code="besluit:heeftBesluitenlijst" /></td>
      </tr>
      <tr>
        <td>Uittreksel</td>
        <td><CodeInline @code="besluit:heeftUittreksel" /></td>
      </tr>
      <tr>
        <td>Notulen</td>
        <td><CodeInline @code="besluit:heeftNotulen" /></td>
      </tr>
    </:body>
  </AuTable>
  <p>
    Dit kan op 2 manieren gebeuren:
  </p>
  <ul>
    <li>Op de pagina met het gepubliceerde document zelf</li>
    <li>Op een andere pagina met een link naar het gepubliceerde document</li>
  </ul>
  
  <AuHeading @level="4" @skin="4" id="annotatie-publicaties-document-types-zitting">Zitting annoteren op de pagina met het gepubliceerde document</AuHeading>
  <p>
    De relatie tussen een zitting en het gepubliceerde document kan als volgt op &eacute;&eacute;n pagina geannoteerd worden:
    <Snippet @snippetFilename="publicatie-annotaties/voorbeeld-rdfa-document-zitting-relatie-een-pagina.html" />
  </p>
  
  <AuHeading @level="4" @skin="4">Zitting annoteren met een link naar het gepubliceerde document</AuHeading>
  <p>
    De relatie tussen een zitting en een gepubliceerd document kan ook op een andere pagina dan die van het gepubliceerde document geannoteerd worden.
    <Snippet @snippetFilename="publicatie-annotaties/voorbeeld-rdfa-document-zitting-relatie-hyperlink.html" />
  </p>
  
  <AuHeading @level="2" @skin="2" id="annotatie-overzicht">Annotatie van overzichtspagina's</AuHeading>
  <p>
    De URLs die ingestuurd worden bevatten niet altijd de geannoteerde documenten. Vaak bevat de ingestuurde URL een of meerdere links naar pagina's met geannoteerde documenten. Denk bijvoorbeeld aan een overzichtspagina waarop alle zittingen van de gemeenteraad opgelijst worden. Om de navigatie naar relevante pagina's met RDFa kennis te faciliteren, kunnen hyperlinks met een specifieke property <CodeInline @code="http://lblod.data.gift/vocabularies/besluit/linkToPublication" /> geannoteerd worden waardoor de Besluit Publicatie harvester ook deze gelinkte pagina's zal harvesten om er de nodige kennis uit te extraheren.
  </p>
  <Snippet @snippetFilename="publicatie-annotaties/voorbeeld-rdfa-document-link-publicatie.html" />
  */
  {
    "id": "LotohoS1",
    "block": "[[[8,[39,0],null,[[\"@level\",\"@skin\"],[\"1\",\"1\"]],[[\"default\"],[[[[1,\"Annotaties voor publicaties\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Lokale besturen publiceren documenten en beslissingen zoals agenda's, besluitenlijsten, notulen, enz. Opdat de kennis automatisch door een machine uit deze documenten geëxtraheerd kan worden, moeten ze op een correcte wijze geannoteerd te worden. Deze annotaties gebeuren volgens \"],[8,[39,1],[[24,6,\"https://data.vlaanderen.be/doc/applicatieprofiel/besluit-publicatie/\"]],null,[[\"default\"],[[[[1,\"het Besluit Publicatie applicatieprofiel\"]],[]]]]],[1,\" en de \"],[8,[39,2],null,[[\"@route\"],[\"docs.meldingsplicht-annotaties\"]],[[\"default\"],[[[[1,\"annotaties voor automatische melding\"]],[]]]]],[1,\". Dit document beschrijft de annotaties die gebruikt worden om gepubliceerde documenten en overzichtpagina's te annoteren.\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],[[24,1,\"annotatie-publicaties\"]],[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Annotatie van gepubliceerde documenten\"]],[]]]]],[1,\"\\n\"],[8,[39,0],[[24,1,\"annotatie-publicaties-document-types\"]],[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Document en besluit types\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Ieder document dat gepubliceerd wordt is een \"],[8,[39,1],[[24,6,\"https://data.vlaanderen.be/doc/applicatieprofiel/besluit-publicatie/#Document\"]],null,[[\"default\"],[[[[1,\"foaf:Document\"]],[]]]]],[1,\". Ieder document heeft een type dat geannoteerd kan worden met het \"],[8,[39,3],null,[[\"@code\"],[\"typeof\"]],null],[1,\" attribuut. De gekende besluit- en document types zijn gepubliceerd als codelijst op \"],[8,[39,1],[[24,6,\"https://data.vlaanderen.be\"]],null,[[\"default\"],[[[[1,\"data.vlaanderen.be\"]],[]]]]],[1,\":\\n\"],[13],[1,\"\\n\"],[8,[39,4],null,null,[[\"header\",\"body\"],[[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Codelijst\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"URL\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Besluit type\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"\\n        \"],[8,[39,1],[[24,6,\"https://data.vlaanderen.be/doc/conceptscheme/BesluitType\"]],null,[[\"default\"],[[[[1,\"https://data.vlaanderen.be/doc/conceptscheme/BesluitType\"]],[]]]]],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Document type\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"\\n        \"],[8,[39,1],[[24,6,\"https://data.vlaanderen.be/doc/conceptscheme/BesluitDocumentType\"]],null,[[\"default\"],[[[[1,\"https://data.vlaanderen.be/doc/conceptscheme/BesluitDocumentType\"]],[]]]]],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Voorbeeld\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Via RDFa annotaties kan dit als volgt weergegeven worden:\\n\"],[13],[1,\"\\n\"],[8,[39,5],null,[[\"@snippetFilename\"],[\"publicatie-annotaties/voorbeeld-rdfa-document-met-type.html\"]],null],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Annotaties van de overige types van besluiten en documenten zijn analoog aan bovenstaand voorbeeld van een agenda.\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],[[24,1,\"document-types-zitting\"]],[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Annotatie van de relatie naar een zitting\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Ieder document dat gepubliceerd wordt, moet via een annotatie gerelateerd zijn aan een zitting. Voor documenten dat geen besluit zijn, kunnen volgende predicaten gebruikt worden om ze aan een zitting te relateren:\\n\"],[13],[1,\"\\n\"],[8,[39,4],null,null,[[\"header\",\"body\"],[[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Document type\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Predicaat om te relateren aan zitting\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]],[[[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Agenda\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"besluit:heeftAgenda\"]],null],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Besluitenlijst\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"besluit:heeftBesluitenlijst\"]],null],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Uittreksel\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"besluit:heeftUittreksel\"]],null],[13],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"Notulen\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[8,[39,3],null,[[\"@code\"],[\"besluit:heeftNotulen\"]],null],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Dit kan op 2 manieren gebeuren:\\n\"],[13],[1,\"\\n\"],[10,\"ul\"],[12],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Op de pagina met het gepubliceerde document zelf\"],[13],[1,\"\\n  \"],[10,\"li\"],[12],[1,\"Op een andere pagina met een link naar het gepubliceerde document\"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],[[24,1,\"annotatie-publicaties-document-types-zitting\"]],[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Zitting annoteren op de pagina met het gepubliceerde document\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  De relatie tussen een zitting en het gepubliceerde document kan als volgt op één pagina geannoteerd worden:\\n  \"],[8,[39,5],null,[[\"@snippetFilename\"],[\"publicatie-annotaties/voorbeeld-rdfa-document-zitting-relatie-een-pagina.html\"]],null],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"4\",\"4\"]],[[\"default\"],[[[[1,\"Zitting annoteren met een link naar het gepubliceerde document\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  De relatie tussen een zitting en een gepubliceerd document kan ook op een andere pagina dan die van het gepubliceerde document geannoteerd worden.\\n  \"],[8,[39,5],null,[[\"@snippetFilename\"],[\"publicatie-annotaties/voorbeeld-rdfa-document-zitting-relatie-hyperlink.html\"]],null],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],[[24,1,\"annotatie-overzicht\"]],[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Annotatie van overzichtspagina's\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  De URLs die ingestuurd worden bevatten niet altijd de geannoteerde documenten. Vaak bevat de ingestuurde URL een of meerdere links naar pagina's met geannoteerde documenten. Denk bijvoorbeeld aan een overzichtspagina waarop alle zittingen van de gemeenteraad opgelijst worden. Om de navigatie naar relevante pagina's met RDFa kennis te faciliteren, kunnen hyperlinks met een specifieke property \"],[8,[39,3],null,[[\"@code\"],[\"http://lblod.data.gift/vocabularies/besluit/linkToPublication\"]],null],[1,\" geannoteerd worden waardoor de Besluit Publicatie harvester ook deze gelinkte pagina's zal harvesten om er de nodige kennis uit te extraheren.\\n\"],[13],[1,\"\\n\"],[8,[39,5],null,[[\"@snippetFilename\"],[\"publicatie-annotaties/voorbeeld-rdfa-document-link-publicatie.html\"]],null]],[],false,[\"au-heading\",\"au-link-external\",\"au-link\",\"code-inline\",\"au-table\",\"snippet\"]]",
    "moduleName": "pages-vendors/templates/docs/publicatie-annotaties.hbs",
    "isStrictMode": false
  });
});
;define("pages-vendors/templates/docs/rijksregisternummer-api", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <AuHeading @level="1" @skin="1">Rijksregisternummer naar Persoon URI API</AuHeading>
  <p>
    Het Rijksregisternummer is een veelgebruikte idenitficator voor een persoon. Helaas bevat deze identificator persoonlijke informatie zoals het geslacht en de geboortedatum van de persoon waardoor deze niet in alle contexten uitgewisseld kan worden. Mits het afsluiten van een protocol tussen het bestuur en het Agentschap Binnenlands Bestuur, is het mogelijk om de URI van een persoon op te vragen op basis van het rijksregisternummer. Dit document beschrijft de API om de URI van een persoon op te vragen op basis van diens rijksregisternummer en de bestuurseenheid waar hij een functie voor uitoefent.
  </p>
  
  <AuHeading @level="2" @skin="2">Opvragen URI</AuHeading>
  <p>
    Geeft de URI van een persoon terug indien de aanvragende entiteit gemachtigd is voor het opgegeven bestuur en de persoon teruggevonden kon worden. De request kan als GET of als POST opgevraagd worden, in beide gevallen wordt een JSON body verwacht.
  </p>
  <CodeBlock @code="POST https://rrn.api.lblod.info/rrn" />
  <p>
    Noteer dat de bovenstaande URL verwijst naar de ontwikkelomgeving. Deze verandert van zodra de service in productie staat. Volgende voorbeelden beschrijven de JSON body van deze calls.
  </p>
  
  <AuHeading @level="3" @skin="3">Kortste voorbeeld</AuHeading>
  <p>
    Een kort voorbeeld van de API:
  </p>
  <Snippet @snippetFilename="rijksregisternummer-api/voorbeeld-request-body.json" />
  <p>
    Een succesvol antwoord heeft de vorm van:
  </p>
  <Snippet @snippetFilename="rijksregisternummer-api/voorbeeld-antwoord.json" />
  <p>
    <strong>Noteer:</strong> het bovenstaande voorbeeld gebruikt bewust een niet bestaand rijksregisternummer.
  </p>
  <p>
    In dit antwoord bevindt de URI van de persoon zich in de eigenschap <CodeInline @code="uri" />.
    De 404 status wordt teruggegeven indien geen antwoord gevonden werd. Dat kan voorvallen omdat de persoon niet gevonden is binnen de opgegeven bestuurseenheid of omdat de meegegeven authenticatie geen recht heeft de persoonsinformatie op te vragen.
  </p>
  
  <AuHeading @level="2" @skin="2">Authenticatie</AuHeading>
  <p>
    Een bestuurseenheid kan een externe partij authorizeren om deze service te gebruiken in hun naam. Het beheer van deze rechten en permissies zal op lange termijn gebeuren via ACM/IDM en het Gebruikersbeheer. Op korte termijn zal dit beheerd worden door ABB.
  </p>
  <p>
    Iedere externe partij krijgt een unieke identificator en sleutel die meegestuurd wordt bij de bevraging van de service. Voor de test API kun je als softwareleverancier zelf een sleutel aanvragen via <AuLinkExternal href="mailto:digitaalABB@vlaanderen.be?subject=Geheime sleutel rijksregisternummer API test">digitaalABB@vlaanderen.be</AuLinkExternal>. Je krijgt dan een random gemeente om mee te testen. Wanneer de productie API beschikbaar komt, zal een bestuur de sleutel kunnen aanvragen via <AuLinkExternal href="mailto:digitaalABB@vlaanderen.be?subject=Geheime sleutel rijksregisternummer API productie">digitaalABB@vlaanderen.be</AuLinkExternal> op voorwaarde dat eerst een protocol hiervoor werd afgesloten. De lokale besturen zullen dan ook via <AuLinkExternal href="mailto:digitaalABB@vlaanderen.be?subject=Permissie voor softwareleverancier ikv rijksregisternummer API">digitaalABB@vlaanderen.be</AuLinkExternal> een aanvraag insturen om een softwareleverancier permissie te geven om in hun naam de rijksregisternummer API te gebruiken.
  </p>
  
  <AuHeading @level="2" @skin="2">Ontwikkeling en test</AuHeading>
  <p>
    Voor het ontwikkelen en testen van de rijksregisternummer API is een test endpoint ter beschikking gesteld op:
  </p>
  <CodeBlock @code="https://rrn.api.lblod.info/rrn" />
  <p>
    De vendor URI en geheime sleutel voor deze omgeving moeten eerst aangevraagd worden zoals beschreven onder &lsquo;Authenticatie&rsquo;.
  </p>
  
  <AuHeading @level="2" @skin="2">Beperkingen</AuHeading>
  <AuHeading @level="3" @skin="3">Rate limiting</AuHeading>
  <p>
    Brute-force oplijsten van rijksregisternummers is mogelijk. Om dit te vermijden zijn het aantal calls binnen een tijdspanne beperkt. Mocht deze beperking overschreden worden, dient er later opnieuw geprobeerd te worden. De status 429 wordt dan teruggegeven.
  </p>
  */
  {
    "id": "Hn1Zn0IU",
    "block": "[[[8,[39,0],null,[[\"@level\",\"@skin\"],[\"1\",\"1\"]],[[\"default\"],[[[[1,\"Rijksregisternummer naar Persoon URI API\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Het Rijksregisternummer is een veelgebruikte idenitficator voor een persoon. Helaas bevat deze identificator persoonlijke informatie zoals het geslacht en de geboortedatum van de persoon waardoor deze niet in alle contexten uitgewisseld kan worden. Mits het afsluiten van een protocol tussen het bestuur en het Agentschap Binnenlands Bestuur, is het mogelijk om de URI van een persoon op te vragen op basis van het rijksregisternummer. Dit document beschrijft de API om de URI van een persoon op te vragen op basis van diens rijksregisternummer en de bestuurseenheid waar hij een functie voor uitoefent.\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Opvragen URI\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Geeft de URI van een persoon terug indien de aanvragende entiteit gemachtigd is voor het opgegeven bestuur en de persoon teruggevonden kon worden. De request kan als GET of als POST opgevraagd worden, in beide gevallen wordt een JSON body verwacht.\\n\"],[13],[1,\"\\n\"],[8,[39,1],null,[[\"@code\"],[\"POST https://rrn.api.lblod.info/rrn\"]],null],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Noteer dat de bovenstaande URL verwijst naar de ontwikkelomgeving. Deze verandert van zodra de service in productie staat. Volgende voorbeelden beschrijven de JSON body van deze calls.\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Kortste voorbeeld\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Een kort voorbeeld van de API:\\n\"],[13],[1,\"\\n\"],[8,[39,2],null,[[\"@snippetFilename\"],[\"rijksregisternummer-api/voorbeeld-request-body.json\"]],null],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Een succesvol antwoord heeft de vorm van:\\n\"],[13],[1,\"\\n\"],[8,[39,2],null,[[\"@snippetFilename\"],[\"rijksregisternummer-api/voorbeeld-antwoord.json\"]],null],[1,\"\\n\"],[10,2],[12],[1,\"\\n  \"],[10,\"strong\"],[12],[1,\"Noteer:\"],[13],[1,\" het bovenstaande voorbeeld gebruikt bewust een niet bestaand rijksregisternummer.\\n\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"\\n  In dit antwoord bevindt de URI van de persoon zich in de eigenschap \"],[8,[39,3],null,[[\"@code\"],[\"uri\"]],null],[1,\".\\n  De 404 status wordt teruggegeven indien geen antwoord gevonden werd. Dat kan voorvallen omdat de persoon niet gevonden is binnen de opgegeven bestuurseenheid of omdat de meegegeven authenticatie geen recht heeft de persoonsinformatie op te vragen.\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Authenticatie\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Een bestuurseenheid kan een externe partij authorizeren om deze service te gebruiken in hun naam. Het beheer van deze rechten en permissies zal op lange termijn gebeuren via ACM/IDM en het Gebruikersbeheer. Op korte termijn zal dit beheerd worden door ABB.\\n\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Iedere externe partij krijgt een unieke identificator en sleutel die meegestuurd wordt bij de bevraging van de service. Voor de test API kun je als softwareleverancier zelf een sleutel aanvragen via \"],[8,[39,4],[[24,6,\"mailto:digitaalABB@vlaanderen.be?subject=Geheime sleutel rijksregisternummer API test\"]],null,[[\"default\"],[[[[1,\"digitaalABB@vlaanderen.be\"]],[]]]]],[1,\". Je krijgt dan een random gemeente om mee te testen. Wanneer de productie API beschikbaar komt, zal een bestuur de sleutel kunnen aanvragen via \"],[8,[39,4],[[24,6,\"mailto:digitaalABB@vlaanderen.be?subject=Geheime sleutel rijksregisternummer API productie\"]],null,[[\"default\"],[[[[1,\"digitaalABB@vlaanderen.be\"]],[]]]]],[1,\" op voorwaarde dat eerst een protocol hiervoor werd afgesloten. De lokale besturen zullen dan ook via \"],[8,[39,4],[[24,6,\"mailto:digitaalABB@vlaanderen.be?subject=Permissie voor softwareleverancier ikv rijksregisternummer API\"]],null,[[\"default\"],[[[[1,\"digitaalABB@vlaanderen.be\"]],[]]]]],[1,\" een aanvraag insturen om een softwareleverancier permissie te geven om in hun naam de rijksregisternummer API te gebruiken.\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Ontwikkeling en test\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Voor het ontwikkelen en testen van de rijksregisternummer API is een test endpoint ter beschikking gesteld op:\\n\"],[13],[1,\"\\n\"],[8,[39,1],null,[[\"@code\"],[\"https://rrn.api.lblod.info/rrn\"]],null],[1,\"\\n\"],[10,2],[12],[1,\"\\n  De vendor URI en geheime sleutel voor deze omgeving moeten eerst aangevraagd worden zoals beschreven onder ‘Authenticatie’.\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Beperkingen\"]],[]]]]],[1,\"\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Rate limiting\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Brute-force oplijsten van rijksregisternummers is mogelijk. Om dit te vermijden zijn het aantal calls binnen een tijdspanne beperkt. Mocht deze beperking overschreden worden, dient er later opnieuw geprobeerd te worden. De status 429 wordt dan teruggegeven.\\n\"],[13]],[],false,[\"au-heading\",\"code-block\",\"snippet\",\"code-inline\",\"au-link-external\"]]",
    "moduleName": "pages-vendors/templates/docs/rijksregisternummer-api.hbs",
    "isStrictMode": false
  });
});
;define("pages-vendors/templates/docs/vendor-sparql", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <AuHeading @level="1" @skin="1">Vendor SPARQL API</AuHeading>
  
  <p>
    De Vendor SPARQL API is een manier om SPARQL queries uit te voeren op een SPARQL endpoint gehost op een van de applicaties binnen Loket en verwanten om informatie op te vragen. Dit vervangt een klassieke JSON REST API, maar kan eveneens worden gebruikt voor het integreren met de applicaties van Loket. Deze API biedt de volledige vrijheid van SPARQL voor het construeren van een informatieverzoek. Per applicatie zijn er verschillende soorten gegevens terug te vinden, dus houdt acht met de host waarop query's worden uitgevoerd. De bedoeling is wel dat op elk van de hosts een gelijkaardige Vendor SPARQL API terug te vinden is die steeds op dezelfde manier aanspreekbaar is. Het generiek mechanisme wordt op deze pagina verduidelijkt.
  </p>
  <p>
    Het kunnen uitvoeren van SPARQL query's brengt echter risico met zich mee in verband met databeveiliging. Daarom wordt de toegang tot het SPARQL endpoint beschermd met een login en is het enkel mogelijk om data uit te lezen. Er kan dus niets gewijzigd worden via SPARQL Update query's. Deze pagina beschrijft aan de hand van voorbeelden het stappenplan om in te loggen, hoe SPARQL query's uit te voeren, hoe weer uit te loggen en hoe eventuele fouten worden afgehandeld.
  </p>
  <p>
    Per applicatie is er buiten deze pagina nog documentatie te vinden over de beschikbare data en eventuele aandachtspunten. Bekijk hiervoor de gerelateerde pagina's: <LinkTo @route="docs.meldingsplicht-sparql">Meldingsplicht SPARQL API</LinkTo>, <LinkTo @route="docs.berichtencentrum-sparql">Berichtencentrum SPARQL API</LinkTo>, &hellip;
  </p>
  
  <AuHeading @level="2" @skin="2">Inloggen</AuHeading>
  <p>
    Inloggen gebeurt door middel van een request met authenticatie door middel van vendor URI, sleutel en de URI van de organisatie in een JSON-LD body naar
  </p>
  <CodeBlock @code="POST https://<applicatie-host>/vendor/login" />
  <p>
    De specifieke hostname hangt af van het type van gegevens die benodigd zijn. Raadpleeg hiervoor de specifieke documentatie op de pagina's hierboven beschreven (<LinkTo @route="docs.meldingsplicht-sparql">Meldingsplicht SPARQL API</LinkTo>, <LinkTo @route="docs.berichtencentrum-sparql">Berichtencentrum SPARQL API</LinkTo>, &hellip;). De JSON-LD body ziet er minimaal uit zoals het volgende:
  </p>
  <Snippet @snippetFilename="vendor-sparql/voorbeeld-login-request-body.json" />
  <p>
    In het voorbeeld hierboven staat de <CodeInline @code="organisation" /> voor de URI van de bestuurseenheid waar de vendor garant voor staat. <CodeInline @code="publisher.uri" /> staat voor de URI van de vendor, en <CodeInline @code="publisher.key" /> staat voor de geheime sleutel die eerder werd verkregen. Het aanvragen van een publisher URI en geheime sleutel (key) staan beschreven in de sectie &ldquo;Authenticatie&rdquo; op de pagina over <LinkTo @route="docs.meldingsplicht">Meldingsplicht API</LinkTo>.
  </p>
  <p>
    De volledige JSON-LD context beschrijft met RDF wat elke eigenschap betekent, welk datatype wordt verwacht en zou aan aan elke request moeten worden toegevoegd. Deze login service voegt echter automatisch de juiste context toe aan elke login request, dus het verzenden van de minimale body zoals hierboven volstaat. Vind hieronder de volledige context, indien nodig.
  </p>
  <SnippetToggle @snippetFilename="vendor-sparql/login-context.json" />
  <p>
    Het antwoord op de login request is <strong>een sessie cookie</strong> waar volgende requests (SPARQL query's en uitloggen) mee worden geauthenticeert. Er wordt ook een JSON-LD body teruggegeven die informatie over de sessie voorstelt, zoals hieronder als voorbeeld wordt weergegeven. Deze informatie kan echter worden genegeerd, want <strong>de sessie wordt vanaf de login request enkel bepaald door middel van de cookie</strong>.
  </p>
  <SnippetToggle @snippetFilename="vendor-sparql/voorbeeld-login-response.json" />
  <p>
     Als referentie wordt hieronder nog de context vermeld van het antwoord met de sessieinformatie.
  </p>
  <SnippetToggle @snippetFilename="vendor-sparql/login-response-context.json" />
  
  <AuHeading @level="3" @skin="3">Voorbeeld</AuHeading>
  <p>
    Als voorbeeld staat hieronder hoe een login kan worden uitgevoerd met <CodeInline @code="cURL" />. Het ontvangen en verder weer versturen van cookies is noodzakelijk. Daarom wordt de cookie engine ingeschakeld met de <CodeInline @code="-b" /> en <CodeInline @code="-c" /> flags die verwijzen naar een bestand waar de cookies worden opgeslagen.
  </p>
  <Snippet @snippetFilename="vendor-sparql/voorbeeld-login.sh" />
  
  <AuHeading @level="2" @skin="2">Versturen van query's</AuHeading>
  <p>
    Eenmaal ingelogd is het mogelijk om SPARQL query's te versturen naar het SPARQL endpoint, benaderbaar via
  </p>
  <CodeBlock @code="https://<applicatie-host>/vendor/sparql" />
  <p>
    Het versturen van query's moet gebeuren via HTTP(S) requests zoals beschreven in de <a href="https://www.w3.org/TR/sparql11-protocol/#query-operation" target="_blank" rel="noopener noreferrer">offici&euml;le specificatie van het SPARQL Protocol</a>. Er is geen webpagina beschikbaar op dit endpoint. Het is noodzakelijk om de sessie cookie, verkregen bij het inloggen, steeds mee te sturen bij elke request.
  </p>
  
  <AuHeading @level="3" @skin="3">Voorbeelden van query's</AuHeading>
  <p>
    Hieronder staan een aantal voorbeelden van SPARQL query's die naar het endpoint kunnen worden verstuurd. Deze voorbeelden gaan over inzendingen van publicaties (Submissions), en deze zijn dus louter demonstratief. Aan de hand van het eerste voorbeeld kan de status van een ingestuurde melding worden opgevraagd.
  </p>
  <Snippet @snippetFilename="vendor-sparql/voorbeeld-melding-status.sparql" />
  <p>
    Met het volgende voorbeeld worden er 100 eerder verrichtte meldingen opgevraagd. Met de verkregen URI's kan men query's gelijk de bovenstaande opstellen.
  </p>
  <Snippet @snippetFilename="vendor-sparql/meldingen-eerste-100.sparql" />
  
  <AuHeading @level="3" @skin="3">Voorbeelden van requests</AuHeading>
  <p>
    Hieronder staan een aantal voorbeelden van requests, uitgevoerd via <CodeInline @code="cURL" />. De query is steeds op te vullen met de benodigde SPARQL query.
  </p>
  <p>
    De meest gebruikte manier: een POST request met de query als body, ge&euml;ncodeerd zoals een formulier veld.
  </p>
  <Snippet @snippetFilename="vendor-sparql/voorbeeld-request-form.sh" />
  <p>
    Het volgende voorbeeld is hetzelfde als het vorige, maar voor de encodering is hier de typische JavaScript <CodeInline @code="encodeURIComponent()" /> gebruikt.
  </p>
  <Snippet @snippetFilename="vendor-sparql/voorbeeld-request-form-url-encode.sh" />
  <p>
    Dit kan ook uitgevoerd worden met de <CodeInline @code="--data-urlencode" /> parameter op <CodeInline @code="cURL" /> als men dan de query meegeeft als formulier veld zonder speciale encodering.
  </p>
  <Snippet @snippetFilename="vendor-sparql/voorbeeld-request-form-data-urlencode.sh" />
  <p>
    Uit volledigheid ondersteunt de endpoint ook GET requests, waar de SPARQL query als URL parameter wordt meegegeven. Deze methode is echter niet aan te raden vanwege beperkingen op de lengte van de query.
  </p>
  <Snippet @snippetFilename="vendor-sparql/voorbeeld-request-get.sh" />
  
  <AuHeading @level="2" @skin="2">Uitloggen</AuHeading>
  <p>
    Om de sessie af te sluiten volstaat het om een request, als methode <CodeInline @code="DELETE" /> met de sessie cookie, te sturen naar
  </p>
  <div>
    <CodeBlock @code="DELETE https://<applicatie-host>/vendor/logout" />
  </div>
  <p>
    Het antwoord op deze request is, als uitloggen successvol was, leeg. De HTTP response code is dan <CodeInline @code="204 No Content" />.
  </p>
  
  <AuHeading @level="3" @skin="3">Voorbeeld</AuHeading>
  <p>
    Bij het gebruik van <CodeInline @code="cURL" /> ziet de request voor uitloggen er als volgt uit.
  </p>
  <Snippet @snippetFilename="vendor-sparql/logout.sh" />
  
  <AuHeading @level="2" @skin="2">Fouten</AuHeading>
  <p>
    Bij elk van bovenstaande soort request kunnen er fouten optreden. Een login kan falen vanwege foute combinatie van vendor URI en sleutel, een query kan falen vanwege syntax problemen met de query zelf of vanwege een fout opgestelde request, &hellip; In alle gevallen wordt er zo veel mogelijk aan gedaan om een waardevolle foutboodschap terug te geven in combinatie met een bijhorende HTTP (fout)code. In het geval van het versturen van query's kunnen foutberichten en foutcodes terugkomen die gegenereerd werden door de database zelf of van een tussenliggende service. Dit kan enige inconsistenties veroorzaken in de response. In het geval van de login en logout requests, fouten zitten verwerkt in de volgende JSON-LD context en worden ook op die manier geformatteerd als antwoord.
  </p>
  <SnippetToggle @snippetFilename="vendor-sparql/error-response-context.json" />
  */
  {
    "id": "J6WBEaEU",
    "block": "[[[8,[39,0],null,[[\"@level\",\"@skin\"],[\"1\",\"1\"]],[[\"default\"],[[[[1,\"Vendor SPARQL API\"]],[]]]]],[1,\"\\n\\n\"],[10,2],[12],[1,\"\\n  De Vendor SPARQL API is een manier om SPARQL queries uit te voeren op een SPARQL endpoint gehost op een van de applicaties binnen Loket en verwanten om informatie op te vragen. Dit vervangt een klassieke JSON REST API, maar kan eveneens worden gebruikt voor het integreren met de applicaties van Loket. Deze API biedt de volledige vrijheid van SPARQL voor het construeren van een informatieverzoek. Per applicatie zijn er verschillende soorten gegevens terug te vinden, dus houdt acht met de host waarop query's worden uitgevoerd. De bedoeling is wel dat op elk van de hosts een gelijkaardige Vendor SPARQL API terug te vinden is die steeds op dezelfde manier aanspreekbaar is. Het generiek mechanisme wordt op deze pagina verduidelijkt.\\n\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Het kunnen uitvoeren van SPARQL query's brengt echter risico met zich mee in verband met databeveiliging. Daarom wordt de toegang tot het SPARQL endpoint beschermd met een login en is het enkel mogelijk om data uit te lezen. Er kan dus niets gewijzigd worden via SPARQL Update query's. Deze pagina beschrijft aan de hand van voorbeelden het stappenplan om in te loggen, hoe SPARQL query's uit te voeren, hoe weer uit te loggen en hoe eventuele fouten worden afgehandeld.\\n\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Per applicatie is er buiten deze pagina nog documentatie te vinden over de beschikbare data en eventuele aandachtspunten. Bekijk hiervoor de gerelateerde pagina's: \"],[8,[39,1],null,[[\"@route\"],[\"docs.meldingsplicht-sparql\"]],[[\"default\"],[[[[1,\"Meldingsplicht SPARQL API\"]],[]]]]],[1,\", \"],[8,[39,1],null,[[\"@route\"],[\"docs.berichtencentrum-sparql\"]],[[\"default\"],[[[[1,\"Berichtencentrum SPARQL API\"]],[]]]]],[1,\", …\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Inloggen\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Inloggen gebeurt door middel van een request met authenticatie door middel van vendor URI, sleutel en de URI van de organisatie in een JSON-LD body naar\\n\"],[13],[1,\"\\n\"],[8,[39,2],null,[[\"@code\"],[\"POST https://<applicatie-host>/vendor/login\"]],null],[1,\"\\n\"],[10,2],[12],[1,\"\\n  De specifieke hostname hangt af van het type van gegevens die benodigd zijn. Raadpleeg hiervoor de specifieke documentatie op de pagina's hierboven beschreven (\"],[8,[39,1],null,[[\"@route\"],[\"docs.meldingsplicht-sparql\"]],[[\"default\"],[[[[1,\"Meldingsplicht SPARQL API\"]],[]]]]],[1,\", \"],[8,[39,1],null,[[\"@route\"],[\"docs.berichtencentrum-sparql\"]],[[\"default\"],[[[[1,\"Berichtencentrum SPARQL API\"]],[]]]]],[1,\", …). De JSON-LD body ziet er minimaal uit zoals het volgende:\\n\"],[13],[1,\"\\n\"],[8,[39,3],null,[[\"@snippetFilename\"],[\"vendor-sparql/voorbeeld-login-request-body.json\"]],null],[1,\"\\n\"],[10,2],[12],[1,\"\\n  In het voorbeeld hierboven staat de \"],[8,[39,4],null,[[\"@code\"],[\"organisation\"]],null],[1,\" voor de URI van de bestuurseenheid waar de vendor garant voor staat. \"],[8,[39,4],null,[[\"@code\"],[\"publisher.uri\"]],null],[1,\" staat voor de URI van de vendor, en \"],[8,[39,4],null,[[\"@code\"],[\"publisher.key\"]],null],[1,\" staat voor de geheime sleutel die eerder werd verkregen. Het aanvragen van een publisher URI en geheime sleutel (key) staan beschreven in de sectie “Authenticatie” op de pagina over \"],[8,[39,1],null,[[\"@route\"],[\"docs.meldingsplicht\"]],[[\"default\"],[[[[1,\"Meldingsplicht API\"]],[]]]]],[1,\".\\n\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"\\n  De volledige JSON-LD context beschrijft met RDF wat elke eigenschap betekent, welk datatype wordt verwacht en zou aan aan elke request moeten worden toegevoegd. Deze login service voegt echter automatisch de juiste context toe aan elke login request, dus het verzenden van de minimale body zoals hierboven volstaat. Vind hieronder de volledige context, indien nodig.\\n\"],[13],[1,\"\\n\"],[8,[39,5],null,[[\"@snippetFilename\"],[\"vendor-sparql/login-context.json\"]],null],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Het antwoord op de login request is \"],[10,\"strong\"],[12],[1,\"een sessie cookie\"],[13],[1,\" waar volgende requests (SPARQL query's en uitloggen) mee worden geauthenticeert. Er wordt ook een JSON-LD body teruggegeven die informatie over de sessie voorstelt, zoals hieronder als voorbeeld wordt weergegeven. Deze informatie kan echter worden genegeerd, want \"],[10,\"strong\"],[12],[1,\"de sessie wordt vanaf de login request enkel bepaald door middel van de cookie\"],[13],[1,\".\\n\"],[13],[1,\"\\n\"],[8,[39,5],null,[[\"@snippetFilename\"],[\"vendor-sparql/voorbeeld-login-response.json\"]],null],[1,\"\\n\"],[10,2],[12],[1,\"\\n   Als referentie wordt hieronder nog de context vermeld van het antwoord met de sessieinformatie.\\n\"],[13],[1,\"\\n\"],[8,[39,5],null,[[\"@snippetFilename\"],[\"vendor-sparql/login-response-context.json\"]],null],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Voorbeeld\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Als voorbeeld staat hieronder hoe een login kan worden uitgevoerd met \"],[8,[39,4],null,[[\"@code\"],[\"cURL\"]],null],[1,\". Het ontvangen en verder weer versturen van cookies is noodzakelijk. Daarom wordt de cookie engine ingeschakeld met de \"],[8,[39,4],null,[[\"@code\"],[\"-b\"]],null],[1,\" en \"],[8,[39,4],null,[[\"@code\"],[\"-c\"]],null],[1,\" flags die verwijzen naar een bestand waar de cookies worden opgeslagen.\\n\"],[13],[1,\"\\n\"],[8,[39,3],null,[[\"@snippetFilename\"],[\"vendor-sparql/voorbeeld-login.sh\"]],null],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Versturen van query's\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Eenmaal ingelogd is het mogelijk om SPARQL query's te versturen naar het SPARQL endpoint, benaderbaar via\\n\"],[13],[1,\"\\n\"],[8,[39,2],null,[[\"@code\"],[\"https://<applicatie-host>/vendor/sparql\"]],null],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Het versturen van query's moet gebeuren via HTTP(S) requests zoals beschreven in de \"],[10,3],[14,6,\"https://www.w3.org/TR/sparql11-protocol/#query-operation\"],[14,\"target\",\"_blank\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"officiële specificatie van het SPARQL Protocol\"],[13],[1,\". Er is geen webpagina beschikbaar op dit endpoint. Het is noodzakelijk om de sessie cookie, verkregen bij het inloggen, steeds mee te sturen bij elke request.\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Voorbeelden van query's\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Hieronder staan een aantal voorbeelden van SPARQL query's die naar het endpoint kunnen worden verstuurd. Deze voorbeelden gaan over inzendingen van publicaties (Submissions), en deze zijn dus louter demonstratief. Aan de hand van het eerste voorbeeld kan de status van een ingestuurde melding worden opgevraagd.\\n\"],[13],[1,\"\\n\"],[8,[39,3],null,[[\"@snippetFilename\"],[\"vendor-sparql/voorbeeld-melding-status.sparql\"]],null],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Met het volgende voorbeeld worden er 100 eerder verrichtte meldingen opgevraagd. Met de verkregen URI's kan men query's gelijk de bovenstaande opstellen.\\n\"],[13],[1,\"\\n\"],[8,[39,3],null,[[\"@snippetFilename\"],[\"vendor-sparql/meldingen-eerste-100.sparql\"]],null],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Voorbeelden van requests\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Hieronder staan een aantal voorbeelden van requests, uitgevoerd via \"],[8,[39,4],null,[[\"@code\"],[\"cURL\"]],null],[1,\". De query is steeds op te vullen met de benodigde SPARQL query.\\n\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"\\n  De meest gebruikte manier: een POST request met de query als body, geëncodeerd zoals een formulier veld.\\n\"],[13],[1,\"\\n\"],[8,[39,3],null,[[\"@snippetFilename\"],[\"vendor-sparql/voorbeeld-request-form.sh\"]],null],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Het volgende voorbeeld is hetzelfde als het vorige, maar voor de encodering is hier de typische JavaScript \"],[8,[39,4],null,[[\"@code\"],[\"encodeURIComponent()\"]],null],[1,\" gebruikt.\\n\"],[13],[1,\"\\n\"],[8,[39,3],null,[[\"@snippetFilename\"],[\"vendor-sparql/voorbeeld-request-form-url-encode.sh\"]],null],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Dit kan ook uitgevoerd worden met de \"],[8,[39,4],null,[[\"@code\"],[\"--data-urlencode\"]],null],[1,\" parameter op \"],[8,[39,4],null,[[\"@code\"],[\"cURL\"]],null],[1,\" als men dan de query meegeeft als formulier veld zonder speciale encodering.\\n\"],[13],[1,\"\\n\"],[8,[39,3],null,[[\"@snippetFilename\"],[\"vendor-sparql/voorbeeld-request-form-data-urlencode.sh\"]],null],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Uit volledigheid ondersteunt de endpoint ook GET requests, waar de SPARQL query als URL parameter wordt meegegeven. Deze methode is echter niet aan te raden vanwege beperkingen op de lengte van de query.\\n\"],[13],[1,\"\\n\"],[8,[39,3],null,[[\"@snippetFilename\"],[\"vendor-sparql/voorbeeld-request-get.sh\"]],null],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Uitloggen\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Om de sessie af te sluiten volstaat het om een request, als methode \"],[8,[39,4],null,[[\"@code\"],[\"DELETE\"]],null],[1,\" met de sessie cookie, te sturen naar\\n\"],[13],[1,\"\\n\"],[10,0],[12],[1,\"\\n  \"],[8,[39,2],null,[[\"@code\"],[\"DELETE https://<applicatie-host>/vendor/logout\"]],null],[1,\"\\n\"],[13],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Het antwoord op deze request is, als uitloggen successvol was, leeg. De HTTP response code is dan \"],[8,[39,4],null,[[\"@code\"],[\"204 No Content\"]],null],[1,\".\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"3\",\"3\"]],[[\"default\"],[[[[1,\"Voorbeeld\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Bij het gebruik van \"],[8,[39,4],null,[[\"@code\"],[\"cURL\"]],null],[1,\" ziet de request voor uitloggen er als volgt uit.\\n\"],[13],[1,\"\\n\"],[8,[39,3],null,[[\"@snippetFilename\"],[\"vendor-sparql/logout.sh\"]],null],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"Fouten\"]],[]]]]],[1,\"\\n\"],[10,2],[12],[1,\"\\n  Bij elk van bovenstaande soort request kunnen er fouten optreden. Een login kan falen vanwege foute combinatie van vendor URI en sleutel, een query kan falen vanwege syntax problemen met de query zelf of vanwege een fout opgestelde request, … In alle gevallen wordt er zo veel mogelijk aan gedaan om een waardevolle foutboodschap terug te geven in combinatie met een bijhorende HTTP (fout)code. In het geval van het versturen van query's kunnen foutberichten en foutcodes terugkomen die gegenereerd werden door de database zelf of van een tussenliggende service. Dit kan enige inconsistenties veroorzaken in de response. In het geval van de login en logout requests, fouten zitten verwerkt in de volgende JSON-LD context en worden ook op die manier geformatteerd als antwoord.\\n\"],[13],[1,\"\\n\"],[8,[39,5],null,[[\"@snippetFilename\"],[\"vendor-sparql/error-response-context.json\"]],null]],[],false,[\"au-heading\",\"link-to\",\"code-block\",\"snippet\",\"code-inline\",\"snippet-toggle\"]]",
    "moduleName": "pages-vendors/templates/docs/vendor-sparql.hbs",
    "isStrictMode": false
  });
});
;define("pages-vendors/templates/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    <AuApp>
    <AuBodyContainer
      @scroll={{true}}>
      <AuContentHeader
        @titlePartOne="Vlaanderen"
        @titlePartTwo="is lokaal bestuur"
        @pictureSize="default">
        <img sizes="50vw" src="assets/images/loket-header-1600.jpg" alt="Foto van een laptop met daarop het vlaanderen logo." />
      </AuContentHeader>
      <AuContent @skin="default">
        <div class="au-o-region au-o-layout au-u-max-width-medium">
          <AuHeading
            @level="1"
            @skin="1">
            Gelinkt Notuleren en Loket: Vendor en API integrator documentatie
          </AuHeading>
          <p class="au-u-para-lead au-u-margin-top">
            Integreer met systemen van Gelinkt Notuleren en Loket. Deze documentatie wordt verder aangevuld naarmate er meer API's beschikbaar zijn, en naarmate er meer vereisten gedefinieerd worden.
          </p>
        </div>
        <section class="au-u-background-gray-100 au-o-region au-o-region-large">
          <div class="au-o-layout au-o-layout--large">
            <AuHeading
              @level="2"
              @skin="2">
              Beschikbare documentatie
            </AuHeading>
            <Menu @fullSize={{true}} />
          </div>
        </section>
      </AuContent>
      <Footer />
    </AuBodyContainer>
  </AuApp>
  */
  {
    "id": "hiegnOf/",
    "block": "[[[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@scroll\"],[true]],[[\"default\"],[[[[1,\"\\n    \"],[8,[39,2],null,[[\"@titlePartOne\",\"@titlePartTwo\",\"@pictureSize\"],[\"Vlaanderen\",\"is lokaal bestuur\",\"default\"]],[[\"default\"],[[[[1,\"\\n      \"],[10,\"img\"],[14,\"sizes\",\"50vw\"],[14,\"src\",\"assets/images/loket-header-1600.jpg\"],[14,\"alt\",\"Foto van een laptop met daarop het vlaanderen logo.\"],[12],[13],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[39,3],null,[[\"@skin\"],[\"default\"]],[[\"default\"],[[[[1,\"\\n      \"],[10,0],[14,0,\"au-o-region au-o-layout au-u-max-width-medium\"],[12],[1,\"\\n        \"],[8,[39,4],null,[[\"@level\",\"@skin\"],[\"1\",\"1\"]],[[\"default\"],[[[[1,\"\\n          Gelinkt Notuleren en Loket: Vendor en API integrator documentatie\\n        \"]],[]]]]],[1,\"\\n        \"],[10,2],[14,0,\"au-u-para-lead au-u-margin-top\"],[12],[1,\"\\n          Integreer met systemen van Gelinkt Notuleren en Loket. Deze documentatie wordt verder aangevuld naarmate er meer API's beschikbaar zijn, en naarmate er meer vereisten gedefinieerd worden.\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,\"section\"],[14,0,\"au-u-background-gray-100 au-o-region au-o-region-large\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"au-o-layout au-o-layout--large\"],[12],[1,\"\\n          \"],[8,[39,4],null,[[\"@level\",\"@skin\"],[\"2\",\"2\"]],[[\"default\"],[[[[1,\"\\n            Beschikbare documentatie\\n          \"]],[]]]]],[1,\"\\n          \"],[8,[39,5],null,[[\"@fullSize\"],[true]],null],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[8,[39,6],null,null,null],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"]],[]]]]]],[],false,[\"au-app\",\"au-body-container\",\"au-content-header\",\"au-content\",\"au-heading\",\"menu\",\"footer\"]]",
    "moduleName": "pages-vendors/templates/index.hbs",
    "isStrictMode": false
  });
});
;

;define('pages-vendors/config/environment', [], function() {
  var prefix = 'pages-vendors';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("pages-vendors/app")["default"].create({"name":"pages-vendors","version":"1.0.0+480ae291"});
          }
        
//# sourceMappingURL=pages-vendors.map

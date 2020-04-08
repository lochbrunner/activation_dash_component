webpackHotUpdateactivation_dash_component("main",{

/***/ "./src/lib/components/ActivationDashComponent.react.js":
/*!*************************************************************!*\
  !*** ./src/lib/components/ActivationDashComponent.react.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActivationDashComponent; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




function create_dummy_values() {
  return Array.apply(null, new Array(10)).map(function (_) {
    return Array.apply(null, new Array(10)).map(function (_) {
      return Math.random();
    });
  });
}
/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */


var ActivationDashComponent = /*#__PURE__*/function (_Component) {
  _inherits(ActivationDashComponent, _Component);

  var _super = _createSuper(ActivationDashComponent);

  function ActivationDashComponent() {
    _classCallCheck(this, ActivationDashComponent);

    return _super.apply(this, arguments);
  }

  _createClass(ActivationDashComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          label = _this$props.label,
          values = _this$props.values;
      values = values || create_dummy_values();
      console.log(values);
      var fill = 'rgb(255,0,0)';
      var rects = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
        id: 1,
        width: 10,
        height: 10,
        x: 20,
        y: 30,
        fill: fill
      })];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        width: "100%",
        height: "100%",
        viewBox: "0 0 100 100"
      }, rects, " "));
    }
  }]);

  return ActivationDashComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


ActivationDashComponent.defaultProps = {};
ActivationDashComponent.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * A label that will be printed when this component is rendered.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,

  /**
   * The value displayed in the input.
   */
  values: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hY3RpdmF0aW9uX2Rhc2hfY29tcG9uZW50Ly4vc3JjL2xpYi9jb21wb25lbnRzL0FjdGl2YXRpb25EYXNoQ29tcG9uZW50LnJlYWN0LmpzIl0sIm5hbWVzIjpbImNyZWF0ZV9kdW1teV92YWx1ZXMiLCJBcnJheSIsImFwcGx5IiwibWFwIiwiXyIsIk1hdGgiLCJyYW5kb20iLCJBY3RpdmF0aW9uRGFzaENvbXBvbmVudCIsInByb3BzIiwiaWQiLCJsYWJlbCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJmaWxsIiwicmVjdHMiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXkiLCJzZXRQcm9wcyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxTQUFTQSxtQkFBVCxHQUErQjtBQUM3QixTQUFPQyxLQUFLLENBQUNDLEtBQU4sQ0FBWSxJQUFaLEVBQWtCLElBQUlELEtBQUosQ0FBVSxFQUFWLENBQWxCLEVBQ0ZFLEdBREUsQ0FDRSxVQUFBQyxDQUFDO0FBQUEsV0FBSUgsS0FBSyxDQUFDQyxLQUFOLENBQVksSUFBWixFQUFrQixJQUFJRCxLQUFKLENBQVUsRUFBVixDQUFsQixFQUFpQ0UsR0FBakMsQ0FBcUMsVUFBQUMsQ0FBQztBQUFBLGFBQUlDLElBQUksQ0FBQ0MsTUFBTCxFQUFKO0FBQUEsS0FBdEMsQ0FBSjtBQUFBLEdBREgsQ0FBUDtBQUVEO0FBQ0Q7Ozs7Ozs7OztJQU9xQkMsdUI7Ozs7Ozs7Ozs7Ozs7NkJBQ1Y7QUFBQSx3QkFDbUIsS0FBS0MsS0FEeEI7QUFBQSxVQUNGQyxFQURFLGVBQ0ZBLEVBREU7QUFBQSxVQUNFQyxLQURGLGVBQ0VBLEtBREY7QUFBQSxVQUNTQyxNQURULGVBQ1NBLE1BRFQ7QUFFUEEsWUFBTSxHQUFHQSxNQUFNLElBQUlYLG1CQUFtQixFQUF0QztBQUNBWSxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWjtBQUVBLFVBQU1HLElBQUksR0FBRyxjQUFiO0FBQ0EsVUFBTUMsS0FBSyxHQUNQLGNBQUM7QUFBTSxVQUFFLEVBQUksQ0FBWjtBQUFlLGFBQUssRUFBSSxFQUF4QjtBQUE0QixjQUFNLEVBQUksRUFBdEM7QUFBMEMsU0FBQyxFQUFJLEVBQS9DO0FBQW1ELFNBQUMsRUFBSSxFQUF4RDtBQUE0RCxZQUFJLEVBQ25FRDtBQURHLFFBQUQsQ0FESjtBQUlJLDBCQUFRO0FBQUssVUFBRSxFQUFJTDtBQUFYLHNCQUNBO0FBQUssYUFBSyxFQUFHLE1BQWI7QUFBb0IsY0FBTSxFQUFHLE1BQTdCO0FBQW9DLGVBQU8sRUFBQztBQUE1QyxTQUEyRE0sS0FBM0QsTUFEQSxDQUFSO0FBR0w7Ozs7RUFka0RDLCtDOzs7QUFpQnJEVCx1QkFBdUIsQ0FBQ1UsWUFBeEIsR0FBdUMsRUFBdkM7QUFFQVYsdUJBQXVCLENBQUNXLFNBQXhCLEdBQW9DO0FBQ2xDOzs7QUFHQVQsSUFBRSxFQUFFVSxpREFBUyxDQUFDQyxNQUpvQjs7QUFNbEM7OztBQUdBVixPQUFLLEVBQUVTLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBVFU7O0FBV2xDOzs7QUFHQVYsUUFBTSxFQUFFUSxpREFBUyxDQUFDRyxLQWRnQjs7QUFnQmxDOzs7O0FBSUFDLFVBQVEsRUFBRUosaURBQVMsQ0FBQ0s7QUFwQmMsQ0FBcEMsQyIsImZpbGUiOiI5MmI0YTMyLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuXG5mdW5jdGlvbiBjcmVhdGVfZHVtbXlfdmFsdWVzKCkge1xuICByZXR1cm4gQXJyYXkuYXBwbHkobnVsbCwgbmV3IEFycmF5KDEwKSlcbiAgICAgIC5tYXAoXyA9PiBBcnJheS5hcHBseShudWxsLCBuZXcgQXJyYXkoMTApKS5tYXAoXyA9PiBNYXRoLnJhbmRvbSgpKSlcbn1cbi8qKlxuICogRXhhbXBsZUNvbXBvbmVudCBpcyBhbiBleGFtcGxlIGNvbXBvbmVudC5cbiAqIEl0IHRha2VzIGEgcHJvcGVydHksIGBsYWJlbGAsIGFuZFxuICogZGlzcGxheXMgaXQuXG4gKiBJdCByZW5kZXJzIGFuIGlucHV0IHdpdGggdGhlIHByb3BlcnR5IGB2YWx1ZWBcbiAqIHdoaWNoIGlzIGVkaXRhYmxlIGJ5IHRoZSB1c2VyLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3RpdmF0aW9uRGFzaENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2lkLCBsYWJlbCwgdmFsdWVzfSA9IHRoaXMucHJvcHM7XG4gICAgdmFsdWVzID0gdmFsdWVzIHx8IGNyZWF0ZV9kdW1teV92YWx1ZXMoKTtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMpXG5cbiAgICBjb25zdCBmaWxsID0gJ3JnYigyNTUsMCwwKSc7XG4gICAgY29uc3QgcmVjdHMgPVxuICAgICAgICBbPHJlY3QgaWQgPSB7MX0gd2lkdGggPSB7MTB9IGhlaWdodCA9IHsxMH0geCA9IHsyMH0geSA9IHszMH0gZmlsbCA9IHtcbiAgICAgIGZpbGx9IC8+XVxuXG4gICAgICAgIHJldHVybiAoPGRpdiBpZCA9IHtpZH0+XG4gICAgICAgICAgICAgICAgPHN2ZyB3aWR0aCA9ICcxMDAlJyBoZWlnaHQgPSAnMTAwJScgdmlld0JveD0nMCAwIDEwMCAxMDAnPntyZWN0c30gPC9zdmc+XG4gICAgICAgIDwvZGl2Pik7XG4gIH1cbn1cblxuQWN0aXZhdGlvbkRhc2hDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge307XG5cbkFjdGl2YXRpb25EYXNoQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxuICAgKi9cbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEEgbGFiZWwgdGhhdCB3aWxsIGJlIHByaW50ZWQgd2hlbiB0aGlzIGNvbXBvbmVudCBpcyByZW5kZXJlZC5cbiAgICovXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBkaXNwbGF5ZWQgaW4gdGhlIGlucHV0LlxuICAgKi9cbiAgdmFsdWVzOiBQcm9wVHlwZXMuYXJyYXksXG5cbiAgLyoqXG4gICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXG4gICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cbiAgICovXG4gIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuY1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
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
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
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

function encode_color(value, min, max) {
  var v = (value - min) / (max - min) * 255;
  return "rgb(".concat(v, ", ").concat(v, ", ").concat(v, ")");
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
      var WIDTH = 100;
      var HEIGHT = 100;
      var dx = WIDTH / values[0].length;
      var dy = HEIGHT / values.length;

      var row = function row(values, i) {
        return values.map(function (value, j) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("rect", {
            key: "".concat(i, "-").concat(j),
            x: j * dx,
            y: i * dy,
            width: dx,
            height: dy,
            fill: encode_color(value, 0, 1)
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", null, value));
        });
      };

      var cells = values.map(row);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        id: id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", {
        width: "100%",
        height: "100%",
        viewBox: "0 0 ".concat(WIDTH, " ").concat(HEIGHT)
      }, cells));
    }
  }]);

  return ActivationDashComponent;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hY3RpdmF0aW9uX2Rhc2hfY29tcG9uZW50Ly4vc3JjL2xpYi9jb21wb25lbnRzL0FjdGl2YXRpb25EYXNoQ29tcG9uZW50LnJlYWN0LmpzIl0sIm5hbWVzIjpbImNyZWF0ZV9kdW1teV92YWx1ZXMiLCJBcnJheSIsImFwcGx5IiwibWFwIiwiXyIsIk1hdGgiLCJyYW5kb20iLCJlbmNvZGVfY29sb3IiLCJ2YWx1ZSIsIm1pbiIsIm1heCIsInYiLCJBY3RpdmF0aW9uRGFzaENvbXBvbmVudCIsInByb3BzIiwiaWQiLCJsYWJlbCIsInZhbHVlcyIsIldJRFRIIiwiSEVJR0hUIiwiZHgiLCJsZW5ndGgiLCJkeSIsInJvdyIsImkiLCJqIiwiY2VsbHMiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXkiLCJzZXRQcm9wcyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxtQkFBVCxHQUErQjtBQUM3QixTQUFPQyxLQUFLLENBQUNDLEtBQU4sQ0FBWSxJQUFaLEVBQWtCLElBQUlELEtBQUosQ0FBVSxFQUFWLENBQWxCLEVBQ0ZFLEdBREUsQ0FDRSxVQUFBQyxDQUFDO0FBQUEsV0FBSUgsS0FBSyxDQUFDQyxLQUFOLENBQVksSUFBWixFQUFrQixJQUFJRCxLQUFKLENBQVUsRUFBVixDQUFsQixFQUFpQ0UsR0FBakMsQ0FBcUMsVUFBQUMsQ0FBQztBQUFBLGFBQUlDLElBQUksQ0FBQ0MsTUFBTCxFQUFKO0FBQUEsS0FBdEMsQ0FBSjtBQUFBLEdBREgsQ0FBUDtBQUVEOztBQUVELFNBQVNDLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCQyxHQUE3QixFQUFrQ0MsR0FBbEMsRUFBdUM7QUFDckMsTUFBTUMsQ0FBQyxHQUFHLENBQUNILEtBQUssR0FBR0MsR0FBVCxLQUFpQkMsR0FBRyxHQUFHRCxHQUF2QixJQUE4QixHQUF4QztBQUNBLHVCQUFjRSxDQUFkLGVBQW9CQSxDQUFwQixlQUEwQkEsQ0FBMUI7QUFDRDtBQUNEOzs7Ozs7Ozs7SUFPcUJDLHVCOzs7Ozs7Ozs7Ozs7OzZCQUNWO0FBQUEsd0JBQ21CLEtBQUtDLEtBRHhCO0FBQUEsVUFDRkMsRUFERSxlQUNGQSxFQURFO0FBQUEsVUFDRUMsS0FERixlQUNFQSxLQURGO0FBQUEsVUFDU0MsTUFEVCxlQUNTQSxNQURUO0FBRVBBLFlBQU0sR0FBR0EsTUFBTSxJQUFJaEIsbUJBQW1CLEVBQXRDO0FBRUEsVUFBTWlCLEtBQUssR0FBRyxHQUFkO0FBQ0EsVUFBTUMsTUFBTSxHQUFHLEdBQWY7QUFDQSxVQUFNQyxFQUFFLEdBQUdGLEtBQUssR0FBR0QsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVSSxNQUE3QjtBQUNBLFVBQU1DLEVBQUUsR0FBR0gsTUFBTSxHQUFHRixNQUFNLENBQUNJLE1BQTNCOztBQUVBLFVBQU1FLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNOLE1BQUQsRUFBU08sQ0FBVDtBQUFBLGVBQWVQLE1BQU0sQ0FBQ2IsR0FBUCxDQUN2QixVQUFDSyxLQUFELEVBQVFnQixDQUFSO0FBQUEsOEJBQ0k7QUFBTSxlQUFHLFlBQU9ELENBQVAsY0FBWUMsQ0FBWixDQUFUO0FBQTBCLGFBQUMsRUFBSUEsQ0FBQyxHQUFFTCxFQUFsQztBQUFzQyxhQUFDLEVBQUlJLENBQUMsR0FBRUYsRUFBOUM7QUFBa0QsaUJBQUssRUFDakRGLEVBRE47QUFDVSxrQkFBTSxFQUFJRSxFQURwQjtBQUN3QixnQkFBSSxFQUFJZCxZQUFZLENBQUNDLEtBQUQsRUFBUSxDQUFSLEVBQVcsQ0FBWDtBQUQ1QywwQkFFSiwwRUFBUUEsS0FBUixDQUZJLENBREo7QUFBQSxTQUR1QixDQUFmO0FBQUEsT0FBWjs7QUFPQSxVQUFNaUIsS0FBSyxHQUFHVCxNQUFNLENBQUNiLEdBQVAsQ0FBV21CLEdBQVgsQ0FBZDtBQUdBLDBCQUFRO0FBQUssVUFBRSxFQUFJUjtBQUFYLHNCQUNBO0FBQUssYUFBSyxFQUFHLE1BQWI7QUFBb0IsY0FBTSxFQUFHLE1BQTdCO0FBQW9DLGVBQU8sZ0JBQy9CRyxLQUQrQixjQUN0QkMsTUFEc0I7QUFBM0MsU0FDZ0NPLEtBRGhDLENBREEsQ0FBUjtBQUlEOzs7O0VBeEJrREMsK0M7OztBQTJCckRkLHVCQUF1QixDQUFDZSxZQUF4QixHQUF1QyxFQUF2QztBQUVBZix1QkFBdUIsQ0FBQ2dCLFNBQXhCLEdBQW9DO0FBQ2xDOzs7QUFHQWQsSUFBRSxFQUFFZSxpREFBUyxDQUFDQyxNQUpvQjs7QUFNbEM7OztBQUdBZixPQUFLLEVBQUVjLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBVFU7O0FBV2xDOzs7QUFHQWYsUUFBTSxFQUFFYSxpREFBUyxDQUFDRyxLQWRnQjs7QUFnQmxDOzs7O0FBSUFDLFVBQVEsRUFBRUosaURBQVMsQ0FBQ0s7QUFwQmMsQ0FBcEMsQyIsImZpbGUiOiIzMjljN2RkLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge2ludGVyc2VjdGlvbn0gZnJvbSAncmFtZGEnO1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cblxuZnVuY3Rpb24gY3JlYXRlX2R1bW15X3ZhbHVlcygpIHtcbiAgcmV0dXJuIEFycmF5LmFwcGx5KG51bGwsIG5ldyBBcnJheSgxMCkpXG4gICAgICAubWFwKF8gPT4gQXJyYXkuYXBwbHkobnVsbCwgbmV3IEFycmF5KDEwKSkubWFwKF8gPT4gTWF0aC5yYW5kb20oKSkpXG59XG5cbmZ1bmN0aW9uIGVuY29kZV9jb2xvcih2YWx1ZSwgbWluLCBtYXgpIHtcbiAgY29uc3QgdiA9ICh2YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKSAqIDI1NTtcbiAgcmV0dXJuIGByZ2IoJHt2fSwgJHt2fSwgJHt2fSlgXG59XG4vKipcbiAqIEV4YW1wbGVDb21wb25lbnQgaXMgYW4gZXhhbXBsZSBjb21wb25lbnQuXG4gKiBJdCB0YWtlcyBhIHByb3BlcnR5LCBgbGFiZWxgLCBhbmRcbiAqIGRpc3BsYXlzIGl0LlxuICogSXQgcmVuZGVycyBhbiBpbnB1dCB3aXRoIHRoZSBwcm9wZXJ0eSBgdmFsdWVgXG4gKiB3aGljaCBpcyBlZGl0YWJsZSBieSB0aGUgdXNlci5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aXZhdGlvbkRhc2hDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgbGV0IHtpZCwgbGFiZWwsIHZhbHVlc30gPSB0aGlzLnByb3BzO1xuICAgIHZhbHVlcyA9IHZhbHVlcyB8fCBjcmVhdGVfZHVtbXlfdmFsdWVzKCk7XG5cbiAgICBjb25zdCBXSURUSCA9IDEwMDtcbiAgICBjb25zdCBIRUlHSFQgPSAxMDA7XG4gICAgY29uc3QgZHggPSBXSURUSCAvIHZhbHVlc1swXS5sZW5ndGg7XG4gICAgY29uc3QgZHkgPSBIRUlHSFQgLyB2YWx1ZXMubGVuZ3RoO1xuXG4gICAgY29uc3Qgcm93ID0gKHZhbHVlcywgaSkgPT4gdmFsdWVzLm1hcChcbiAgICAgICAgKHZhbHVlLCBqKSA9PlxuICAgICAgICAgICAgPHJlY3Qga2V5ID0ge2Ake2l9LSR7an1gfSB4ID0ge2oqIGR4fSB5ID0ge2kqIGR5fSB3aWR0aCA9XG4gICAgICAgICAgICAgICAgIHtkeH0gaGVpZ2h0ID0ge2R5fSBmaWxsID0ge2VuY29kZV9jb2xvcih2YWx1ZSwgMCwgMSl9PlxuICAgICAgICA8dGl0bGU+e3ZhbHVlfTwvdGl0bGU+XG4gICAgICAgICAgPC9yZWN0Pik7XG5cbiAgICBjb25zdCBjZWxscyA9IHZhbHVlcy5tYXAocm93KVxuXG5cbiAgICByZXR1cm4gKDxkaXYgaWQgPSB7aWR9PlxuICAgICAgICAgICAgPHN2ZyB3aWR0aCA9ICcxMDAlJyBoZWlnaHQgPSAnMTAwJScgdmlld0JveCA9IHtcbiAgICAgICAgICAgICAgICAgYDAgMCAke1dJRFRIfSAke0hFSUdIVH1gfT57Y2VsbHN9PC9zdmc+XG4gICAgICAgIDwvZGl2Pik7XG4gIH1cbn1cblxuQWN0aXZhdGlvbkRhc2hDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge307XG5cbkFjdGl2YXRpb25EYXNoQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBJRCB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgY29tcG9uZW50IGluIERhc2ggY2FsbGJhY2tzLlxuICAgKi9cbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEEgbGFiZWwgdGhhdCB3aWxsIGJlIHByaW50ZWQgd2hlbiB0aGlzIGNvbXBvbmVudCBpcyByZW5kZXJlZC5cbiAgICovXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBkaXNwbGF5ZWQgaW4gdGhlIGlucHV0LlxuICAgKi9cbiAgdmFsdWVzOiBQcm9wVHlwZXMuYXJyYXksXG5cbiAgLyoqXG4gICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXG4gICAqIHRvIERhc2gsIHRvIG1ha2UgdGhlbSBhdmFpbGFibGUgZm9yIGNhbGxiYWNrcy5cbiAgICovXG4gIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuY1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
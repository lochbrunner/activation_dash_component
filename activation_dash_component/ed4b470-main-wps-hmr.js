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
      var WIDTH = 100;
      var HEIGHT = 100;
      var dx = WIDTH / values[0].length;
      var dy = HEIGHT / values.length;
      var rects = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
        id: 1,
        width: dx,
        height: dy,
        x: 20,
        y: 30,
        fill: fill
      })];

      var row = function row(values, i) {
        return row.map(function (value, j) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
            id: "".concat(i, "-").concat(j),
            x: j * dx,
            y: i * dy,
            width: dx,
            height: dy,
            fill: fill
          });
        });
      };

      var rows = row(values[0], 0);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        width: "100%",
        height: "100%",
        viewBox: "0 0 ".concat(WIDTH, " ").concat(HEIGHT)
      }, rows, " "));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hY3RpdmF0aW9uX2Rhc2hfY29tcG9uZW50Ly4vc3JjL2xpYi9jb21wb25lbnRzL0FjdGl2YXRpb25EYXNoQ29tcG9uZW50LnJlYWN0LmpzIl0sIm5hbWVzIjpbImNyZWF0ZV9kdW1teV92YWx1ZXMiLCJBcnJheSIsImFwcGx5IiwibWFwIiwiXyIsIk1hdGgiLCJyYW5kb20iLCJBY3RpdmF0aW9uRGFzaENvbXBvbmVudCIsInByb3BzIiwiaWQiLCJsYWJlbCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJmaWxsIiwiV0lEVEgiLCJIRUlHSFQiLCJkeCIsImxlbmd0aCIsImR5IiwicmVjdHMiLCJyb3ciLCJpIiwidmFsdWUiLCJqIiwicm93cyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJhcnJheSIsInNldFByb3BzIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLFNBQVNBLG1CQUFULEdBQStCO0FBQzdCLFNBQU9DLEtBQUssQ0FBQ0MsS0FBTixDQUFZLElBQVosRUFBa0IsSUFBSUQsS0FBSixDQUFVLEVBQVYsQ0FBbEIsRUFDRkUsR0FERSxDQUNFLFVBQUFDLENBQUM7QUFBQSxXQUFJSCxLQUFLLENBQUNDLEtBQU4sQ0FBWSxJQUFaLEVBQWtCLElBQUlELEtBQUosQ0FBVSxFQUFWLENBQWxCLEVBQWlDRSxHQUFqQyxDQUFxQyxVQUFBQyxDQUFDO0FBQUEsYUFBSUMsSUFBSSxDQUFDQyxNQUFMLEVBQUo7QUFBQSxLQUF0QyxDQUFKO0FBQUEsR0FESCxDQUFQO0FBRUQ7QUFDRDs7Ozs7Ozs7O0lBT3FCQyx1Qjs7Ozs7Ozs7Ozs7Ozs2QkFDVjtBQUFBLHdCQUNtQixLQUFLQyxLQUR4QjtBQUFBLFVBQ0ZDLEVBREUsZUFDRkEsRUFERTtBQUFBLFVBQ0VDLEtBREYsZUFDRUEsS0FERjtBQUFBLFVBQ1NDLE1BRFQsZUFDU0EsTUFEVDtBQUVQQSxZQUFNLEdBQUdBLE1BQU0sSUFBSVgsbUJBQW1CLEVBQXRDO0FBQ0FZLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBRUEsVUFBTUcsSUFBSSxHQUFHLGNBQWI7QUFDQSxVQUFNQyxLQUFLLEdBQUcsR0FBZDtBQUNBLFVBQU1DLE1BQU0sR0FBRyxHQUFmO0FBQ0EsVUFBTUMsRUFBRSxHQUFHRixLQUFLLEdBQUdKLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVU8sTUFBN0I7QUFDQSxVQUFNQyxFQUFFLEdBQUdILE1BQU0sR0FBR0wsTUFBTSxDQUFDTyxNQUEzQjtBQUNBLFVBQU1FLEtBQUssR0FDUCxjQUFDO0FBQU0sVUFBRSxFQUFJLENBQVo7QUFBZSxhQUFLLEVBQUlILEVBQXhCO0FBQTRCLGNBQU0sRUFBSUUsRUFBdEM7QUFBMEMsU0FBQyxFQUFJLEVBQS9DO0FBQW1ELFNBQUMsRUFBSSxFQUF4RDtBQUE0RCxZQUFJLEVBQ25FTDtBQURHLFFBQUQsQ0FESjs7QUFHQSxVQUFNTyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDVixNQUFELEVBQVNXLENBQVQ7QUFBQSxlQUFlRCxHQUFHLENBQUNsQixHQUFKLENBQVEsVUFBQ29CLEtBQUQsRUFBUUMsQ0FBUjtBQUFBLDhCQUFjO0FBQU0sY0FBRSxZQUFLRixDQUFMLGNBQVVFLENBQVYsQ0FBUjtBQUF1QixhQUFDLEVBQUVBLENBQUMsR0FBQ1AsRUFBNUI7QUFBZ0MsYUFBQyxFQUFFSyxDQUFDLEdBQUNILEVBQXJDO0FBQXlDLGlCQUFLLEVBQUlGLEVBQWxEO0FBQXNELGtCQUFNLEVBQUlFLEVBQWhFO0FBQW9FLGdCQUFJLEVBQUVMO0FBQTFFLFlBQWQ7QUFBQSxTQUFSLENBQWY7QUFBQSxPQUFaOztBQUVBLFVBQU1XLElBQUksR0FBR0osR0FBRyxDQUFDVixNQUFNLENBQUMsQ0FBRCxDQUFQLEVBQVksQ0FBWixDQUFoQjtBQUVBLDBCQUFRO0FBQUssVUFBRSxFQUFJRjtBQUFYLHNCQUNJO0FBQUssYUFBSyxFQUFHLE1BQWI7QUFBb0IsY0FBTSxFQUFHLE1BQTdCO0FBQW9DLGVBQU8sZ0JBQVNNLEtBQVQsY0FBa0JDLE1BQWxCO0FBQTNDLFNBQXdFUyxJQUF4RSxNQURKLENBQVI7QUFHRDs7OztFQXJCa0RDLCtDOzs7QUF3QnJEbkIsdUJBQXVCLENBQUNvQixZQUF4QixHQUF1QyxFQUF2QztBQUVBcEIsdUJBQXVCLENBQUNxQixTQUF4QixHQUFvQztBQUNsQzs7O0FBR0FuQixJQUFFLEVBQUVvQixpREFBUyxDQUFDQyxNQUpvQjs7QUFNbEM7OztBQUdBcEIsT0FBSyxFQUFFbUIsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFUVTs7QUFXbEM7OztBQUdBcEIsUUFBTSxFQUFFa0IsaURBQVMsQ0FBQ0csS0FkZ0I7O0FBZ0JsQzs7OztBQUlBQyxVQUFRLEVBQUVKLGlEQUFTLENBQUNLO0FBcEJjLENBQXBDLEMiLCJmaWxlIjoiZWQ0YjQ3MC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5cblxuZnVuY3Rpb24gY3JlYXRlX2R1bW15X3ZhbHVlcygpIHtcbiAgcmV0dXJuIEFycmF5LmFwcGx5KG51bGwsIG5ldyBBcnJheSgxMCkpXG4gICAgICAubWFwKF8gPT4gQXJyYXkuYXBwbHkobnVsbCwgbmV3IEFycmF5KDEwKSkubWFwKF8gPT4gTWF0aC5yYW5kb20oKSkpXG59XG4vKipcbiAqIEV4YW1wbGVDb21wb25lbnQgaXMgYW4gZXhhbXBsZSBjb21wb25lbnQuXG4gKiBJdCB0YWtlcyBhIHByb3BlcnR5LCBgbGFiZWxgLCBhbmRcbiAqIGRpc3BsYXlzIGl0LlxuICogSXQgcmVuZGVycyBhbiBpbnB1dCB3aXRoIHRoZSBwcm9wZXJ0eSBgdmFsdWVgXG4gKiB3aGljaCBpcyBlZGl0YWJsZSBieSB0aGUgdXNlci5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aXZhdGlvbkRhc2hDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgbGV0IHtpZCwgbGFiZWwsIHZhbHVlc30gPSB0aGlzLnByb3BzO1xuICAgIHZhbHVlcyA9IHZhbHVlcyB8fCBjcmVhdGVfZHVtbXlfdmFsdWVzKCk7XG4gICAgY29uc29sZS5sb2codmFsdWVzKVxuXG4gICAgY29uc3QgZmlsbCA9ICdyZ2IoMjU1LDAsMCknO1xuICAgIGNvbnN0IFdJRFRIID0gMTAwO1xuICAgIGNvbnN0IEhFSUdIVCA9IDEwMDtcbiAgICBjb25zdCBkeCA9IFdJRFRIIC8gdmFsdWVzWzBdLmxlbmd0aDtcbiAgICBjb25zdCBkeSA9IEhFSUdIVCAvIHZhbHVlcy5sZW5ndGg7XG4gICAgY29uc3QgcmVjdHMgPVxuICAgICAgICBbPHJlY3QgaWQgPSB7MX0gd2lkdGggPSB7ZHh9IGhlaWdodCA9IHtkeX0geCA9IHsyMH0geSA9IHszMH0gZmlsbCA9IHtcbiAgICAgIGZpbGx9IC8+XTtcbiAgICBjb25zdCByb3cgPSAodmFsdWVzLCBpKSA9PiByb3cubWFwKCh2YWx1ZSwgaikgPT4gPHJlY3QgaWQ9e2Ake2l9LSR7an1gfSB4PXtqKmR4fSB5PXtpKmR5fSB3aWR0aCA9IHtkeH0gaGVpZ2h0ID0ge2R5fSBmaWxsPXtmaWxsfSAgLz4pO1xuXG4gICAgY29uc3Qgcm93cyA9IHJvdyh2YWx1ZXNbMF0sIDApO1xuXG4gICAgcmV0dXJuICg8ZGl2IGlkID0ge2lkfT5cbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoID0gJzEwMCUnIGhlaWdodCA9ICcxMDAlJyB2aWV3Qm94PXtgMCAwICR7V0lEVEh9ICR7SEVJR0hUfWB9Pntyb3dzfSA8L3N2Zz5cbiAgICAgICAgPC9kaXY+KTtcbiAgfVxufVxuXG5BY3RpdmF0aW9uRGFzaENvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSB7fTtcblxuQWN0aXZhdGlvbkRhc2hDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIElEIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBjb21wb25lbnQgaW4gRGFzaCBjYWxsYmFja3MuXG4gICAqL1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJpbnRlZCB3aGVuIHRoaXMgY29tcG9uZW50IGlzIHJlbmRlcmVkLlxuICAgKi9cbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogVGhlIHZhbHVlIGRpc3BsYXllZCBpbiB0aGUgaW5wdXQuXG4gICAqL1xuICB2YWx1ZXM6IFByb3BUeXBlcy5hcnJheSxcblxuICAvKipcbiAgICogRGFzaC1hc3NpZ25lZCBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgdG8gcmVwb3J0IHByb3BlcnR5IGNoYW5nZXNcbiAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxuICAgKi9cbiAgc2V0UHJvcHM6IFByb3BUeXBlcy5mdW5jXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
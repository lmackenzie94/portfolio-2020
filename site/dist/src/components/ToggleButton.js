"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _themeUi = require("theme-ui");

var _Moon = _interopRequireDefault(require("../icons/Moon"));

var _Sun = _interopRequireDefault(require("../icons/Sun"));

var _index = _interopRequireDefault(require("../gatsby-plugin-theme-ui/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ToggleButton() {
  var _useColorMode = (0, _themeUi.useColorMode)(),
      _useColorMode2 = _slicedToArray(_useColorMode, 2),
      colorMode = _useColorMode2[0],
      setColorMode = _useColorMode2[1];

  return (0, _themeUi.jsx)(_themeUi.ThemeProvider, {
    theme: _index["default"]
  }, (0, _themeUi.jsx)("button", {
    onClick: function onClick(e) {
      setColorMode(colorMode === "default" ? "dark" : "default");
    },
    sx: {
      variant: "buttons.toggle",
      backgroundImage: colorMode === "default" ? "linear-gradient(#39598A, #79D7ED)" : "linear-gradient(#091236, #1E215D)"
    }
  }, (0, _themeUi.jsx)(_Moon["default"], {
    sx: {
      position: "absolute",
      top: 10,
      left: 10,
      transform: colorMode === "default" ? "translateY(-50px) scale(0)" : "translateY(0) scale(1)"
    }
  }), (0, _themeUi.jsx)(_Sun["default"], {
    sx: {
      position: "absolute",
      top: 10,
      left: 10,
      transform: colorMode === "default" ? "translateY(0) scale(1)" : "translateY(50px) scale(0)"
    }
  })));
}

var _default = ToggleButton;
exports["default"] = _default;

//# sourceMappingURL=ToggleButton.js.map
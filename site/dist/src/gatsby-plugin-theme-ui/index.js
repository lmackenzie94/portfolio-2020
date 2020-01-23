'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _polished = require('polished');

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(source, true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function(key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var fontSizesPx = [12, 14, 16, 18, 20, 24, 32, 48, 64, 96]; // which font size will be '1rem'

var baseFontSize = fontSizesPx[3];
var fontSizesRem = fontSizesPx.map(function(size) {
  return ''.concat(size / baseFontSize, 'rem');
});
var colors = {
  black: '#000',
  white: '#f5f5f5',
  red: '#eb4034',
  greyLight: '#e6e6e6',
  greyDark: '#141414'
};
var baseButton = {
  px: [2, 3, 3],
  py: '6px',
  border: 'none',
  cursor: 'pointer',
  willChange: 'color background-color',
  transitionProperty: 'color, background-color',
  transition: '0.2s ease-in',
  ':hover, :focus': {
    bg: 'darkPrimary',
    transition: '0.2s ease-out'
  }
};
var theme = {
  useCustomProperties: false,
  colors: _objectSpread({}, colors, {
    text: colors.black,
    background: colors.white,
    primary: colors.red,
    fadedPrimary: (0, _polished.lighten)(0.2, colors.red),
    darkPrimary: (0, _polished.darken)(0.2, colors.red),
    header: colors.greyLight,
    modes: {
      dark: {
        text: colors.white,
        background: colors.greyDark,
        primary: colors.red,
        fadedPrimary: (0, _polished.lighten)(0.2, colors.red),
        darkPrimary: (0, _polished.darken)(0.2, colors.red),
        header: colors.black
      }
    }
  }),
  fonts: {
    body: 'Georgia',
    heading: 'Arial'
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  text: {
    heading: {
      color: 'primary'
    },
    subheading: {
      color: 'text'
    }
  },
  space: [0, 4, 8, 16, 32, 50, 64, 128, 256, 512],
  fontSizes: fontSizesRem,
  buttons: {
    primary: _objectSpread({}, baseButton, {
      bg: 'primary',
      color: 'white'
      // borderRadius: 3
    }),
    toggle: {
      border: '2px solid',
      borderColor: 'text',
      borderRadius: 30,
      ml: [3, 3, 4],
      outline: 'none',
      cursor: 'pointer',
      fontSize: '0.5rem',
      overflow: 'hidden',
      padding: '0.5rem',
      position: 'relative',
      width: '50px',
      height: '50px',
      svg: {
        height: 'auto',
        width: '25px',
        transitionProperty: 'transform',
        transition: '0.3s linear'
      }
    },
    accordion: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      border: 'none',
      borderBottom: '2px solid',
      borderColor: 'greyLight',
      bg: 'brightWhite',
      outline: 'none',
      p: [3, 3, 4],
      ':last-of-type': {
        borderBottom: 'none'
      },
      ':hover, :focus': {
        bg: 'greyLight'
      }
    }
  }
};
var _default = theme;
exports['default'] = _default;

//# sourceMappingURL=index.js.map

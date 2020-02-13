import {darken, lighten} from 'polished'

export const fontSizesPx = [12, 14, 16, 18, 20, 24, 32, 48, 64, 96]

// because default html font size is 100%
let baseFontSize = 18

const fontSizesRem = fontSizesPx.map(size => {
  return `${size / baseFontSize}rem`
})

const colors = {
  black: `#0a0a0a`,
  brightWhite: `#fafafa`,
  white: `#f5f5f5`,
  red: `#d13030`,
  greyLight: `#dbdbdb`,
  greyDark: `#171a1f`,
  blue: `#213252`,
  blueDark: `#17223b`,
}

const baseButton = {
  display: `inline-block`,
  px: [2, 3, 3],
  py: `6px`,
  border: `none`,
  cursor: `pointer`,
  outline: `none`,
  willChange: `color background-color`,
  transitionProperty: `color, background-color`,
  transition: `0.2s ease-in`,
  ':hover, :focus': {
    bg: `darkPrimary`,
    transition: `0.2s ease-out`,
  },
}

const secondaryButton = {
  px: 2,
  py: 0,
  fontFamily: `heading`,
  fontSize: [0, 1, 1, 1],
  fontWeight: `bold`,
  bg: `transparent`,
  border: `2px solid`,
  borderRadius: 3,
  textDecoration: `none`,
  ':hover, :focus': {
    bg: `red`,
    color: `white`,
    transition: `0.2s ease-out`,
  },
}

const theme = {
  useCustomProperties: true,
  // initialColorMode: `light`,
  colors: {
    ...colors,
    text: colors.black,
    background: colors.white,
    primary: colors.red,
    fadedPrimary: lighten(0.2, colors.red),
    darkPrimary: darken(0.2, colors.red),
    header: colors.greyLight,
    modes: {
      dark: {
        text: colors.white,
        background: colors.blue,
        primary: colors.red,
        fadedPrimary: lighten(0.2, colors.red),
        darkPrimary: darken(0.2, colors.red),
        header: colors.blueDark,
      },
      highContrast: {
        text: colors.white,
        background: colors.greyDark,
        primary: colors.red,
        fadedPrimary: lighten(0.2, colors.red),
        darkPrimary: darken(0.2, colors.red),
        header: colors.black,
      },
    },
  },
  fonts: {
    body: `Lora`,
    title: `Heebo`,
    heading: `Noto Sans`,
  },
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 700,
  },
  text: {
    title: {
      color: `primary`,
      fontFamily: `title`,
      fontWeight: `heading`,
      letterSpacing: `2px`,
    },
    heading: {
      color: `primary`,
      fontFamily: `heading`,
      fontWeight: `heading`,
      letterSpacing: `1px`,
    },
    subheading: {
      color: `text`,
      fontFamily: `heading`,
      fontWeight: `bold`,
    },
  },
  space: [0, 4, 8, 16, 32, 50, 64, 128, 256, 512],
  fontSizes: fontSizesRem,
  buttons: {
    primary: {
      ...baseButton,
      bg: `primary`,
      color: `white`,
      borderRadius: 3,
      textDecoration: `none`,
      fontWeight: `bold`,
    },
    secondaryRed: {
      ...baseButton,
      ...secondaryButton,
      color: `red`,
      borderColor: `red`,
      ':hover, :focus': {
        bg: `red`,
        color: `white`,
        transition: `0.2s ease-out`,
      },
    },
    secondaryBlue: {
      ...baseButton,
      ...secondaryButton,
      color: `blue`,
      borderColor: `blue`,
      ':hover, :focus': {
        bg: `blue`,
        color: `white`,
        transition: `0.2s ease-out`,
      },
    },
    themeToggle: {
      width: 30,
      height: 30,
      ml: [1],
      p: 0,
      outline: `none`,
      border: `none`,
      cursor: `pointer`,
      fontSize: `0.5rem`,
      bg: `transparent`,
      position: `relative`,
      transitionProperty: `transform`,
      transition: `0.2s ease-out`,
      zIndex: 1, // needed for Safari
    },
    accordion: {
      width: `100%`,
      display: `flex`,
      justifyContent: `space-between`,
      alignItems: `center`,
      border: `none`,
      borderBottom: `2px solid`,
      borderColor: `greyLight`,
      cursor: `pointer`,
      bg: `brightWhite`,
      outline: `none`,
      py: 25,
      px: [3, 3, 4],
      ':last-of-type': {
        borderBottom: `none`,
      },
      ':hover, :focus': {
        bg: `greyLight`,
      },
    },
    social: {
      fontSize: [6],
      textDecoration: `none`,
      color: `text`,
      transitionProperty: `color`,
      transition: `0.2s ease-out`,
      outline: `none`,
      ':hover, :focus': {
        color: `primary`,
      },
    },
    accessibilityPanel: {
      position: `absolute`,
      top: 0,
      left: `-30px`,
      width: `30px`,
      height: `30px`,
      bg: `primary`,
      border: `none`,
      outline: `none`,
      borderRadius: `5px 0 0 5px`,
      color: `white`,
      cursor: `pointer`,
      fontFamily: `heading`,
      fontWeight: `bold`,
      textAlign: `center`,
      transitionProperty: `height`,
      transition: `0.2s ease-out`,
      p: 0,
      ':focus': {
        color: `black`,
        height: `45px`,
      },
    },
  },
  forms: {
    check: {
      appearance: `none`,
      outline: `none`,
      backgroundColor: `#fafafa`,
      border: `1px solid #cacece`,
      width: `30px`,
      height: `17px`,
      borderRadius: `5px`,
      display: `inline-block`,
      position: `relative`,
      '::after': {
        content: '""',
        display: `block`,
        position: `absolute`,
        top: 0,
        height: `100%`,
        width: `15px`,
        borderRadius: `50%`,
        backgroundColor: `black`,
      },
      ':checked::after': {
        right: 0,
      },
    },
  },
}

export default theme

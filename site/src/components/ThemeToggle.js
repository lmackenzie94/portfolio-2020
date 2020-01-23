/** @jsx jsx */
import {jsx, useColorMode} from 'theme-ui'
// import { ReactComponent as MoonIcon } from "../icons/moon.svg"
// import { ReactComponent as SunIcon } from "../icons/sun.svg"
import Moon from '../icons/Moon'
import Sun from '../icons/Sun'
import theme from '../gatsby-plugin-theme-ui/index'

function ThemeToggle() {
  const [colorMode, setColorMode] = useColorMode()

  const sunRayStyle = {
    width: `3px`,
    height: `100%`,
    position: `absolute`,
    borderRadius: `10px`,
    bg: colorMode === `default` ? `white` : `orange`,
  }
  return (
    <button
      onClick={() => {
        setColorMode(colorMode === `default` ? `dark` : `default`)
      }}
      sx={{
        variant: `buttons.themeToggle`,
      }}
      aria-label="Toggle theme"
      data-test-id="themeToggle"
    >
      <div
        sx={{
          borderRadius: `50%`,
          bg: `${colorMode === `dark` ? `orange` : `white`}`,
          width: `100%`,
          height: `100%`,
          overflow: `hidden`,
          zIndex: 1,
          position: `relative`,
          transform: `scale(${colorMode === `dark` ? `0.65` : `1.1`})`,
          transitionProperty: `transform, background`,
          transition: `0.4s ease-in-out`,
        }}
      >
        <div
          sx={{
            bg: `blueDark`,
            height: 30,
            width: 30,
            borderRadius: `50%`,
            position: `absolute`,
            top: 0,
            left: `8px`,
            transform: `rotate(${colorMode === `dark` ? `-120deg` : `0deg`})`,
            transformOrigin: `50% 0`,
            transitionProperty: `transform`,
            transition: `0.4s ease-in-out`,
            zIndex: 2,
          }}
        ></div>
      </div>
      <span sx={{...sunRayStyle, top: 0, bottom: 0, left: 13}}></span>
      <span
        sx={{
          ...sunRayStyle,
          height: `98%`,
          top: 0,
          bottom: 0,
          left: 13,
          transformOrigin: `center`,
          transform: `rotate(90deg)`,
        }}
      ></span>
      <span
        sx={{
          ...sunRayStyle,
          top: 0,
          bottom: 0,
          left: 13,
          transformOrigin: `center`,
          transform: `rotate(45deg)`,
        }}
      ></span>
      <span
        sx={{
          ...sunRayStyle,
          top: 0,
          bottom: 0,
          left: 13,
          transformOrigin: `center`,
          transform: `rotate(-45deg)`,
        }}
      ></span>
    </button>
  )
}

export default ThemeToggle

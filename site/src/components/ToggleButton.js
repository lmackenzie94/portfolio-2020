/** @jsx jsx */
import {jsx, useColorMode, ThemeProvider} from 'theme-ui'
// import { ReactComponent as MoonIcon } from "../icons/moon.svg"
// import { ReactComponent as SunIcon } from "../icons/sun.svg"
import Moon from '../icons/Moon'
import Sun from '../icons/Sun'
import theme from '../gatsby-plugin-theme-ui/index'

function ToggleButton() {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <ThemeProvider theme={theme}>
      <button
        onClick={() => {
          setColorMode(colorMode === `default` ? `dark` : `default`)
        }}
        sx={{
          variant: `buttons.toggle`,
          backgroundImage:
            colorMode === `default`
              ? `linear-gradient(#39598A, #79D7ED)`
              : `linear-gradient(#091236, #1E215D)`,
        }}
      >
        <Moon
          sx={{
            position: `absolute`,
            top: 10,
            left: 10,
            transform:
              colorMode === `default`
                ? `translateY(-50px) scale(0)`
                : `translateY(0) scale(1)`,
          }}
        />
        <Sun
          sx={{
            position: `absolute`,
            top: 10,
            left: 10,
            transform:
              colorMode === `default`
                ? `translateY(0) scale(1)`
                : `translateY(50px) scale(0)`,
          }}
        />
      </button>
    </ThemeProvider>
  )
}

export default ToggleButton

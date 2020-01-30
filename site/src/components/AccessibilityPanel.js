/** @jsx jsx */
import {jsx, useColorMode, ThemeProvider} from 'theme-ui'
import theme from '../gatsby-plugin-theme-ui/index'
import {useState, useRef, useEffect} from 'react'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {config} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDown, faArrowUp} from '@fortawesome/free-solid-svg-icons'
import {useOutsideClickDetect} from '@lmack/hooks'

// needed to avoid icon flash on page load
config.autoAddCss = false

const roundButtonStyles = {
  border: `1px solid`,
  borderColor: `greyLight`,
  outline: `none`,
  cursor: `pointer`,
  bg: `white`,
  borderRadius: `20%`,
  ml: `10px`,
  width: `30px`,
  height: `30px`,
  p: 0,
  ':focus': {
    borderColor: `black`,
  },
}

function AccessibilityPanel({
  setFontSizeIdx,
  fontSizeIdx,
  setUseAccessibleFont,
  useAccessibleFont,
}) {
  const [colorMode, setColorMode] = useColorMode()

  const [open, setOpen] = useState(false)
  // set to 300 so it's off screen to start
  const [panelWidth, setPanelWidth] = useState(300)
  const panelRef = useRef()

  const IncreaseFontSize = () => {
    setFontSizeIdx(prevIdx => prevIdx + 1)
  }
  const DecreaseFontSize = () => {
    setFontSizeIdx(prevIdx => prevIdx - 1)
  }

  useEffect(() => {
    setPanelWidth(panelRef.current.offsetWidth)
  }, [panelRef, panelWidth])

  const panelStyles = {
    position: `fixed`,
    bottom: 100,
    right: open ? 0 : -panelWidth,
    height: `100px`,
    fontSize: `16px`,
    fontFamily: `heading`,
    fontWeight: `bold`,
    transitionProperty: `right`,
    transition: `0.3s ease-in-out`,
    zIndex: 1000,
    minWidth: `200px`,
    lineHeight: `30px`,
  }

  // const userColor = useRef()

  useEffect(() => {
    if (colorMode !== `highContrast`) {
      sessionStorage.setItem('colorMode', colorMode)
    }
  }, [colorMode])

  const handleHighContrast = () => {
    if (colorMode === `highContrast`) {
      setColorMode(sessionStorage.colorMode)
    } else {
      setColorMode(`highContrast`)
    }
  }

  // definitely a better way to do this...
  const handleCheckBoxKeyPress = (e, functionToRun) => {
    if (e.key === `Enter`) {
      if (functionToRun === `handleHighContrast`) {
        handleHighContrast()
      }
      if (functionToRun === `setUseAccessibleFont`) {
        setUseAccessibleFont(prev => !prev)
      }
    }
  }

  const handleOutsideClick = () => {
    if (!open) return
    setOpen(false)
  }

  const {wrapper} = useOutsideClickDetect(handleOutsideClick)

  return (
    <ThemeProvider theme={theme}>
      <div ref={wrapper} role="complementary">
        <div ref={panelRef} sx={panelStyles}>
          <button
            onClick={() => setOpen(prevState => !prevState)}
            title={`Accessibility Panel`}
            tabIndex={0}
            sx={{variant: `buttons.accessibilityPanel`}}
            aria-label="Open accessibility panel"
            data-test-id="accessibility-panel-button"
          >
            A
          </button>
          <div
            sx={{
              display: `flex`,
              flexDirection: `column`,
              padding: `5px 20px 10px 20px`,
              bg: `primary`,
              borderRadius: `0 0 0 5px`,
              color: `white`,
              '& div': {
                my: `5px`,
              },
            }}
            data-test-id="accessibility-panel"
          >
            <div>
              <p sx={{m: 0, display: `inline-block`}}>Font Size: </p>
              <div sx={{display: `inline-block`}}>
                <button
                  onClick={IncreaseFontSize}
                  disabled={fontSizeIdx >= 9 ? true : null}
                  sx={roundButtonStyles}
                  aria-label="increase site font size"
                >
                  <FontAwesomeIcon icon={faArrowUp} />
                </button>
                <button
                  onClick={DecreaseFontSize}
                  disabled={fontSizeIdx <= 0 ? true : null}
                  sx={roundButtonStyles}
                  aria-label="decrease site font size"
                >
                  <FontAwesomeIcon icon={faArrowDown} />
                </button>
              </div>
            </div>
            <div>
              <p sx={{m: `0 10px 0 0`, display: `inline-block`}}>
                High Contrast:
              </p>
              <input
                type="checkbox"
                checked={colorMode === `highContrast`}
                onChange={handleHighContrast}
                onKeyDown={e => handleCheckBoxKeyPress(e, `handleHighContrast`)}
                sx={{variant: `forms.check`}}
                aria-label="switch to high contrast color theme"
              />
            </div>
            <div>
              <p sx={{m: `0 10px 0 0`, display: `inline-block`}}>
                Accessible Font:
              </p>
              <input
                type="checkbox"
                checked={useAccessibleFont}
                onChange={() => setUseAccessibleFont(prev => !prev)}
                onKeyDown={e =>
                  handleCheckBoxKeyPress(e, `setUseAccessibleFont`)
                }
                sx={{variant: `forms.check`}}
                aria-label="switch to sans serif font"
              />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default AccessibilityPanel

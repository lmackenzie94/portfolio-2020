/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useRef, useEffect, useState, useContext } from "react"
import { useSpring, animated } from "react-spring"
import { smoothScrollTo } from "@campj/utils/scroll"
import Image from "gatsby-image"

const AccordionContext = React.createContext(null)

export function AccordionContainer({ children }) {
  return (
    <div
      id={`test`}
      sx={{
        border: `2px solid`,
        borderColor: `greyLight`,
        borderRadius: 8,
        overflow: `hidden`,
      }}
    >
      {children}
    </div>
  )
}

export function AccordionImage({ loadOnHover = true, ...rest }) {
  const loadImage = useContext(AccordionContext)
  return (
    <Image {...rest} loading={loadImage && loadOnHover ? `eager` : `lazy`} />
  )
}

function AccordionButton({
  children,
  label = "Label",
  containerId,
  buttons = [],
  setActiveIdx,
  idx,
  active,
}) {
  const [open, setOpen] = useState(false)
  const [loadImage, setLoadImage] = useState(false)
  const heightRef = useRef()

  // useEffect(() => {
  //   window.addEventListener("resize", getMaxHeight)

  //   return () => window.removeEventListener("resize", getMaxHeight)
  // }, [])

  const spring = useSpring({
    maxHeight: open ? heightRef.current.offsetHeight : 0,
    // onRest: () => {
    //   if (open) {
    //     heightRef.current.style.maxHeight = `none`
    //     heightRef.current.style.height = `auto`
    //   }
    // },
  })

  useEffect(() => {
    setOpen(active)
  }, [active])

  const handleClick = () => {
    setOpen(prevState => !prevState)
    setActiveIdx(idx)
    containerId && smoothScrollTo(containerId)
  }

  const handleEscapeToClose = e => {
    if (e.key === `Escape`) {
      setOpen(false)
    }
  }

  return (
    <AccordionContext.Provider value={loadImage}>
      <button
        onClick={handleClick}
        onKeyDown={e => handleEscapeToClose(e)}
        onMouseEnter={() => setLoadImage(true)}
        sx={{ variant: `buttons.accordion` }}
      >
        <h3 sx={{ m: 0, fontSize: [3, 3, 4] }}>{label}</h3>
        <div>
          {buttons.length > 0 &&
            buttons.map((button, idx) => (
              <a
                key={idx}
                sx={{
                  variant: `buttons.primary`,
                  textDecoration: `none`,
                  ml: 15,
                }}
                href={button.link}
              >
                {button.label}
              </a>
            ))}
        </div>
      </button>
      <animated.div sx={{ overflow: `hidden`, bg: `white` }} style={spring}>
        <div sx={{ p: [3, 3, 4] }} ref={heightRef}>
          {children}
        </div>
      </animated.div>
    </AccordionContext.Provider>
  )
}

export default AccordionButton

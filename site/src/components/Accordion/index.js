/** @jsx jsx */
import {jsx} from 'theme-ui'
import React, {useState, useRef} from 'react'
import {useSpring, a} from 'react-spring'
import {smoothScrollTo} from '@campj/utils/scroll'

// DEFAULT COMPONENTS
function DefaultRenderer() {
  return (
    <div
      sx={{
        width: `100%`,
        height: `300px`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
      <h3>{`Pass an 'Item Renderer' to Accordion to customize this space`}</h3>
    </div>
  )
}

function DefaultContainer({children}) {
  return (
    <div
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

function DefaultButton({open, data, labelkey, ...rest}) {
  return (
    <button
      sx={{variant: `buttons.accordion`}}
      {...rest}
      aria-expanded={open ? `true` : `false`}
    >
      <h3 sx={{m: 0, fontSize: [3, 3, 4]}}>{data[labelkey]}</h3>
    </button>
  )
}

function ItemWrapper({open, id, children}) {
  const heightRef = useRef()

  const spring = useSpring({
    maxHeight: open ? heightRef.current.offsetHeight : 0,
    // onRest: () => {
    //   if (open) {
    //     heightRef.current.style.maxHeight = `none`
    //     heightRef.current.style.height = `auto`
    //   }
    // },
  })
  return (
    <a.div id={id} sx={{overflow: `hidden`, bg: `white`}} style={spring}>
      <div sx={{p: [3, 3, 4]}} ref={heightRef}>
        {children}
      </div>
    </a.div>
  )
}

// ACCORDION
function Accordion({
  Container = DefaultContainer,
  ButtonComponent = DefaultButton,
  ItemRenderer = DefaultRenderer,
  allowMultipleOpen = false,
  containerId,
  labelkey = `Label goes here`,
  items,
}) {
  const [activeIdx, setActiveIdx] = useState([])
  const [hoveredIdx, setHoveredIdx] = useState([])

  const close = idx => {
    setActiveIdx(activeIdx.filter(i => i !== idx))
  }

  const open = idx => {
    if (allowMultipleOpen) {
      setActiveIdx(prevIdx => [...prevIdx, idx])
    } else {
      let newActiveIdx = [idx]
      setActiveIdx(newActiveIdx)
    }
    smoothScrollTo(containerId)
  }

  const handleClick = idx => {
    if (activeIdx.includes(idx)) {
      close(idx)
    } else {
      open(idx)
    }
  }

  const handleHover = idx => {
    if (hoveredIdx.includes(idx)) return
    setHoveredIdx(prevIdx => [...prevIdx, idx])
  }

  const handleKeyPress = (e, idx) => {
    switch (e.key) {
      case `Escape`:
        if (activeIdx.includes(idx)) {
          close(idx)
        }
        break
      default:
        break
    }
  }

  return (
    <Container>
      {items.map((item, idx) => (
        <React.Fragment key={`button-${idx}`}>
          <ButtonComponent
            open={activeIdx.includes(idx)}
            data={{idx, ...item}}
            labelkey={ButtonComponent === DefaultButton ? labelkey : null}
            onClick={() => {
              handleClick(idx)
            }}
            onMouseEnter={() => handleHover(idx)}
            onKeyDown={e => handleKeyPress(e, idx)}
            data-test-id="accordion-button"
          />
          <ItemWrapper open={activeIdx.includes(idx)}>
            <ItemRenderer data={item} loadImage={hoveredIdx.includes(idx)} />
          </ItemWrapper>
        </React.Fragment>
      ))}
    </Container>
  )
}

export default Accordion

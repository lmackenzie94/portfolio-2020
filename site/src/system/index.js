/** @jsx jsx */
import {jsx, Styled, ThemeProvider} from 'theme-ui'

export const Wrapper = props => (
  <div
    {...props}
    sx={{
      maxWidth: `950px`,
      margin: `0 auto`,
      px: [3, 4, 5, 0],
      ...props.sx,
    }}
  />
)

export const Section = ({sx, ...props}) => {
  return (
    // NOTE: Styled.section does not work
    <Styled.div
      as={`section`}
      {...props}
      sx={{
        my: [5, 5, 6, 6],
        ...sx,
      }}
    />
  )
}
export const SectionHeading = ({sx, children, ...props}) => (
  <Styled.div sx={{mb: 25, borderBottom: `3px solid`, borderColor: `primary`}}>
    <h2
      {...props}
      sx={{
        mb: 0,
        px: 10,
        py: `5px`,
        display: `inline-block`,
        bg: `rgba(255,255,255,0.8)`,
        color: `black`,
        borderTop: `3px solid`,
        borderRight: `3px solid`,
        borderLeft: `3px solid`,
        borderColor: `primary`,
        borderRadius: `5px 5px 0 0`,
      }}
    >
      {children}
    </h2>
  </Styled.div>
)

export const Divider = ({style}) => {
  const dotStyle = {
    height: 4,
    width: 4,
    lineHeight: `center`,
    borderRadius: `50%`,
    mx: `5px`,
  }

  return (
    <Styled.div
      sx={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        ...style,
      }}
    >
      <span sx={{...dotStyle, bg: `primary`}} />
      <span sx={{...dotStyle, bg: `grey`, height: `6px`, width: `6px`}} />
      <span sx={{...dotStyle, bg: `primary`, height: `8px`, width: `8px`}} />
      <span sx={{...dotStyle, bg: `grey`, height: `6px`, width: `6px`}} />
      <span sx={{...dotStyle, bg: `primary`}} />
    </Styled.div>
  )
}

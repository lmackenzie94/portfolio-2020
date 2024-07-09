/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Wrapper} from '../system'

const Banner = ({text}) => {
  return (
    <div
      sx={{
        textAlign: 'center',
        bg: '#fae152',
        py: 1,
      }}
    >
      <Wrapper>
        <p
          sx={{
            mb: 0,
            fontWeight: 'bold',
            fontFamily: 'heading',
          }}
        >
          {text}
        </p>
      </Wrapper>
    </div>
  )
}

export default Banner

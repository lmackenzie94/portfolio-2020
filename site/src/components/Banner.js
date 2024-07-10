/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Wrapper} from '../system'
import {motion} from 'framer-motion'

const Banner = ({text}) => {
  return (
    <motion.div
      initial={{
        y: '-110%',
      }}
      animate={{
        y: 0,
        transition: {
          ease: 'easeOut',
          duration: 0.2,
          delay: 1.5,
        },
      }}
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
            color: 'black',
          }}
        >
          {text}
        </p>
      </Wrapper>
    </motion.div>
  )
}

export default Banner

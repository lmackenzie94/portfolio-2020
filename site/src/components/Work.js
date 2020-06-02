/** @jsx jsx */
import {jsx} from 'theme-ui'
import {useEffect} from 'react'
import {Wrapper, Section} from '../system'
import Accordion from '@lmack/accordion'
import '@lmack/accordion/styles.css'
import AccordionContent from './Accordion/Content'
import AccordionButton from './Accordion/Button'
import AccordionContainer from './Accordion/Container'
import './Accordion/accordion.css'
import {motion} from 'framer-motion'

let hasAnimated = false

const Work = ({projects}) => {
  const projectArray = projects.edges.map(({node: project}) => project)

  useEffect(() => {
    hasAnimated = true
  })

  return (
    <Wrapper id="Work">
      {/* figure out how to animate Section with Framer */}
      <Section>
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: hasAnimated ? 0 : 1}}
        >
          <h2 sx={{variant: `text.subheading`}}>Work</h2>
          <Accordion
            items={projectArray}
            ItemRenderer={AccordionContent}
            ButtonComponent={AccordionButton}
            Container={AccordionContainer}
            sx={{
              '& [data-accordion-wrapper-inner]': {
                p: 0,
                px: [3, 3, 4],
                color: 'ref',
              },
            }}
            // labelkey={`title`}
            // allowMultipleOpen
          />
        </motion.div>
      </Section>
    </Wrapper>
  )
}
export default Work

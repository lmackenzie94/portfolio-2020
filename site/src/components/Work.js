/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Wrapper, Section} from '../system'
import Accordion from '@lmack/accordion'
import '@lmack/accordion/styles.css'
import AccordionContent from './Accordion/Content'
import AccordionButton from './Accordion/Button'
import AccordionContainer from './Accordion/Container'
import './Accordion/accordion.css'
import {motion} from 'framer-motion'

const Work = ({projects}) => {
  const projectArray = projects.edges.map(({node: project}) => project)

  return (
    <Wrapper id="Work">
      <Section>
        <motion.div
          initial={{opacity: 0, y: 10}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.15}}
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

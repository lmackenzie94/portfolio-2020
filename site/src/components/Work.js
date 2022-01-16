/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Wrapper, Section} from '../system'
import Accordion from '@lmack/accordion'
import '@lmack/accordion/styles.css'
import AccordionContent from './Accordion/Content'
import AccordionButton from './Accordion/Button'
import AccordionContainer from './Accordion/Container'
import './Accordion/accordion.css'

const Work = ({projects}) => {
  const projectArray = projects.edges.map(({node: project}) => project)

  return (
    <Wrapper id="Work">
      {/* figure out how to animate Section with Framer */}
      <Section>
        <div>
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
        </div>
      </Section>
    </Wrapper>
  )
}
export default Work

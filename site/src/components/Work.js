/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Wrapper, Section, SectionHeading} from '../system'
import Accordion from '@lmack/accordion'
import '@lmack/accordion/styles.css'
import AccordionContent from './Accordion/Content'
import AccordionButton from './Accordion/Button'
import AccordionContainer from './Accordion/Container'

const Work = ({projects}) => {
  const projectArray = projects.edges.map(({node: project}) => project)

  return (
    <Wrapper id="Work">
      <Section>
        <h2 sx={{variant: `text.subheading`}}>Work</h2>
        <Accordion
          items={projectArray}
          ItemRenderer={AccordionContent}
          ButtonComponent={AccordionButton}
          Container={AccordionContainer}
          // labelkey={`title`}
          // allowMultipleOpen
        />
      </Section>
    </Wrapper>
  )
}
export default Work

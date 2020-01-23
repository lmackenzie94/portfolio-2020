/** @jsx jsx */
import {jsx} from 'theme-ui'
import {useState, useCallback} from 'react'
import {Wrapper, Section, SectionHeading} from '../system'
import {Link} from 'gatsby'
import Accordion from './Accordion'
import Container from './Accordion/Container'

function AccordionNote({data}) {
  return (
    <div>
      {data.notes.map((note, idx) => (
        <div
          key={idx}
          sx={{
            borderBottom: `2px dashed`,
            borderColor: `greyLight`,
            py: 20,
          }}
        >
          <p
            sx={{
              display: `inline-block`,
              color: `black`,
              m: 0,
              mr: 20,
            }}
          >
            {note.title}
          </p>
          <Link
            to={note.slug.current}
            sx={{
              color: `inherit`,
              textDecoration: `none`,
              display: `inline-block`,
              variant: `buttons.secondary`,
            }}
          >
            View
          </Link>
        </div>
      ))}
    </div>
  )
}

const allNotes = []

const Notes = ({notes}) => {
  const getNotes = useCallback(
    ({node: note}) => {
      if (allNotes.filter(n => n.topic === note.topic).length > 0) {
        let topicToAddTo = allNotes.find(n => n.topic === note.topic)
        if (!topicToAddTo.notes.find(n => n.title === note.title)) {
          topicToAddTo.notes.push(note)
        }
        return
      } else {
        allNotes.push({topic: note.topic, notes: [note]})
      }
    },
    [notes],
  )

  notes.edges.map(getNotes)

  return (
    <Wrapper id="Notes">
      <Section>
        <SectionHeading>Notes</SectionHeading>
        <Accordion
          items={allNotes}
          ItemRenderer={AccordionNote}
          labelkey={`topic`}
          // containerId={`Notes`}
          allowMultipleOpen
          Container={Container}
          // ButtonComponent={AccordionButton}
        />
      </Section>
    </Wrapper>
  )
}
export default Notes

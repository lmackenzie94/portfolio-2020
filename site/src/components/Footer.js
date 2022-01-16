/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Wrapper, Section} from '../system/index'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCanadianMapleLeaf} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <Section
      as={`footer`}
      role="contentinfo"
      sx={{
        position: `relative`,
        bg: `header`,
        mt: [1, 2, 3],
        mb: [0, 0, 0],
        py: [3],
        transitionProperty: `backgroundColor`,
        transition: `0.2s ease-out`,
      }}
    >
      <Wrapper>
        <p sx={{mb: 0, textAlign: `center`}}>
          Luke MacKenzie
          <FontAwesomeIcon
            icon={faCanadianMapleLeaf}
            sx={{mx: `8px`, color: `primary`}}
          />
          {currentYear}
        </p>
      </Wrapper>
    </Section>
  )
}
export default Footer

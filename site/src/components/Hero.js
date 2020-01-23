/** @jsx jsx */
import {jsx} from 'theme-ui'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faFacebookSquare,
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faFile} from '@fortawesome/free-solid-svg-icons'
import {Wrapper, Section, Divider} from '../system/index'
import {withGlobal} from '../global'
import BlockContent from './BlockContent/BlockContent'
import {OutboundLink} from 'gatsby-plugin-google-analytics'
// import {useSpring, a} from 'react-spring'

const getSocialIcon = platform => {
  switch (platform) {
    case 'Twitter':
      return faTwitter
    case 'Github':
      return faGithub
    case 'Facebook':
      return faFacebookSquare
    case 'LinkedIn':
      return faLinkedin
    case 'Email':
      return faEnvelope
    case 'Resume':
      return faFile
    default:
      break
  }
}

function Hero({data, theme}) {
  // const spring = useSpring({
  //   from: {opacity: 0, transform: 'translate3d(0px,10px,0px)'},
  //   opacity: 1,
  //   transform: 'translate3d(0px,0px,0px)',
  // })

  return (
    <Wrapper>
      <Section
        sx={{
          display: `flex`,
          justifyContent: `space-between`,
          mb: [4, 4, 4],
        }}
      >
        <ul
          sx={{
            display: `flex`,
            flexDirection: `column`,
            alignItems: `center`,
            justifyContent: `center`,
            flex: `0 0 auto`,
            m: 0,
            mr: [5, 6, 7],
            '& li': {listStyle: `none`, m: 0, mb: 40},
          }}
        >
          {data.socials.map((social, idx) => (
            <li key={`social-${idx}`}>
              {social.platform === `Resume` ? (
                <a
                  href={social.file.asset.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{variant: `buttons.social`}}
                  aria-label={`${social.platform} icon`}
                >
                  <FontAwesomeIcon
                    icon={getSocialIcon(social.platform)}
                    sx={{maxWidth: `100%`}}
                    style={{maxWidth: `100%`}}
                    aria-hidden="true"
                  />
                </a>
              ) : (
                <OutboundLink
                  href={
                    social.platform === 'Email'
                      ? `mailto:${social.url}?subject=Awesome portfolio, I'd love to hire you!`
                      : social.url
                  }
                  sx={{variant: `buttons.social`}}
                  aria-label={`${social.platform} icon`}
                >
                  <FontAwesomeIcon
                    icon={getSocialIcon(social.platform)}
                    sx={{maxWidth: `100%`}}
                    style={{maxWidth: `100%`}}
                    aria-hidden="true"
                  />
                </OutboundLink>
              )}
            </li>
          ))}
        </ul>
        <div sx={{flex: `1 1 auto`}}>
          <h2 sx={{variant: `text.subheading`}}>{data.title}</h2>
          {data._rawParagraph && (
            <BlockContent blocks={data._rawParagraph || []} />
          )}
        </div>
      </Section>
      <Divider />
    </Wrapper>
  )
}

export default withGlobal(Hero)

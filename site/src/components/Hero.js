/** @jsx jsx */
import {
  faFacebookSquare,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faFile} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {motion} from 'framer-motion'
import {OutboundLink} from 'gatsby-plugin-google-analytics'
import {useEffect, useState} from 'react'
import {jsx} from 'theme-ui'
import {Divider, Section, Wrapper} from '../system/index'
import BlockContent from './BlockContent'

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

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
}

const item = {
  visible: {opacity: 1, x: 0},
  hidden: {opacity: 0, x: -10},
}

let hasAnimated = false

function Hero({data}) {
  const [_, forceRerender] = useState(false)
  useEffect(() => {
    hasAnimated = true
    // temporary fix to make social icons animate in after changing to dark mode and refreshing the page
    forceRerender(true)
  })

  return (
    <Wrapper>
      <Section
        sx={{
          display: `flex`,
          justifyContent: `space-between`,
          alignItems: `center`,
          mb: [4, 4, 4],
        }}
      >
        <motion.ul
          sx={{
            display: `flex`,
            flexDirection: `column`,
            alignItems: `center`,
            justifyContent: `center`,
            flex: `0 0 auto`,
            m: 0,
            mr: [4, 6, 7],
            '& li': {listStyle: `none`, m: 0, mb: 20},
          }}
          initial="hidden"
          animate="visible"
          variants={!hasAnimated && list}
        >
          {data.socials.map((social, idx) => (
            <motion.li key={`social-${idx}`} variants={item}>
              {social.platform === `Resume` ? (
                <a
                  href={social.file.asset.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{variant: `buttons.social`}}
                  aria-label={`${social.platform} icon`}
                  title="Download my resume"
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
                  target="_blank"
                  rel="noopener noreferrer"
                  title={
                    social.platform === 'Email' ? `Email me!` : social.platform
                  }
                >
                  <FontAwesomeIcon
                    icon={getSocialIcon(social.platform)}
                    sx={{maxWidth: `100%`}}
                    style={{maxWidth: `100%`}}
                    aria-hidden="true"
                  />
                </OutboundLink>
              )}
            </motion.li>
          ))}
        </motion.ul>
        <div sx={{flex: `1 1 auto`}}>
          <h2
            sx={{
              variant: `text.subheading`,
            }}
          >
            {data.title}
          </h2>
          {data._rawParagraph && (
            <div>
              <BlockContent blocks={data._rawParagraph || []} />
            </div>
          )}
        </div>
      </Section>
      <Divider />
    </Wrapper>
  )
}

export default Hero

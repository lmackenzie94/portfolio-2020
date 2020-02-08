/** @jsx jsx */
import {jsx} from 'theme-ui'
import BaseBlockContent from '@sanity/block-content-to-react'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case 'h2':
          return <h2 sx={{mt: 50}}>{props.children}</h2>
        case 'h3':
          return <h2 sx={{mt: 30}}>{props.children}</h2>
        case 'callout':
          return (
            <div
              sx={{
                pl: 15,
                my: 30,
                borderLeft: `4px solid`,
                borderColor: `primary`,
              }}
            >
              {props.children}
            </div>
          )
        default:
          return <p>{props.children}</p>
      }
    },
    code: ({node}) => (
      <pre data-language={node.language} className="line-numbers">
        <code className="language-javascript">{node.code}</code>
      </pre>
    ),
    mainImage: ({node}) => (
      <div
        sx={{
          my: [4, 5, 5],
          width: `100%`,
          maxWidth: 525,
          mx: `auto`,
          borderRadius: `10px`,
        }}
      >
        <img
          src={imageUrlFor(buildImageObj(node))}
          alt={node.alt}
          sx={{
            display: `block`,
            borderRadius: `10px`,
            width: `100%`,
            mb: `7px`,
          }}
        />
        <p sx={{color: `grey`, fontSize: [0, 1, 2]}}>{node.caption}</p>
      </div>
    ),
  },
  marks: {
    highlight: props => (
      <span sx={{backgroundColor: `#ffe0e0`}}>{props.children}</span>
    ),
    link: props => {
      const {children, mark} = props
      return (
        <a
          href={mark.href}
          sx={{color: `primary`, ':hover, :focus': {textDecoration: `none`}}}
        >
          {children}
        </a>
      )
    },
  },
}

const BlockContent = ({blocks}) => (
  <BaseBlockContent blocks={blocks} serializers={serializers} />
)

export default BlockContent

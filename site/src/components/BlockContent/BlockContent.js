/** @jsx jsx */
import {jsx} from 'theme-ui'
import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import {GalleryBlockSerializer} from '../../blocks/GalleryBlock'
import {TextWithImageSerializer} from '../../blocks/TextWithImageBlock'
import {buildImageObj} from '../../lib/helpers'
import {imageUrlFor} from '../../lib/image-url'
import {PrismCode} from '../PrismCode'
// import { CodeSerializer } from '../../blocks/Code'

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case 'h1':
          return <h1 sx={{color: 'primary'}}>{props.children}</h1>
        case 'h2':
          return <h2 sx={{color: 'darkblue'}}>{props.children}</h2>
        default:
          return <p>{props.children}</p>
      }
    },
    gallery: GalleryBlockSerializer,
    textwithimage: TextWithImageSerializer,
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
      <span sx={{backgroundColor: `yellow`}}>{props.children}</span>
    ),
    link: props => {
      const {children, mark} = props
      return (
        <a href={mark.href} sx={{color: `primary`}}>
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

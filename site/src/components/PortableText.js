import React from "react"
// import clientConfig from "../../client-config"
import BasePortableText from "@sanity/block-content-to-react"
import { GalleryBlockSerializer } from "../blocks/GalleryBlock"

const serializers = {
  types: {
    // authorReference: ({ node }) => <span>{node.author.name}</span>,
    // mainImage: Figure,
    code: props => (
      <pre data-language={props.node.language} className="line-numbers">
        <code className="language-javascript">{props.node.code}</code>
      </pre>
    ),
    gallery: GalleryBlockSerializer,
  },
}

const PortableText = ({ blocks }) => (
  <BasePortableText
    blocks={blocks}
    serializers={serializers}
    // {...clientConfig.sanity}
  />
)

export default PortableText

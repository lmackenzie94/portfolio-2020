/** @jsx jsx */
import { jsx } from "theme-ui"
import Image from "gatsby-image"
import { Section } from "../system"
import { buildImageObj } from "../lib/helpers"
import { imageUrlFor } from "../lib/image-url"

function TextWithImageBlock({ data }) {
  const { image, flip, text } = data
  return (
    <Section>
      <div
        sx={{
          display: `flex`,
          alignItems: `center`,
          flexDirection: flip ? `row-reverse` : `row`,
          justifyContent: `space-between`,
        }}
      >
        <div sx={{ flex: `0 0 50%` }}>
          <Image
            fluid={image.asset.fluid}
            alt={image.alt}
            sx={{ borderRadius: `10px` }}
          />
        </div>
        <p sx={{ flex: `0 0 47%` }}>{text}</p>
      </div>
    </Section>
  )
}

export function TextWithImageSerializer({ node }) {
  const { image, flip, text } = node
  console.log("IMAGE!", image)

  return (
    <Section>
      <div
        sx={{
          display: `flex`,
          alignItems: `center`,
          flexDirection: flip ? `row-reverse` : `row`,
          justifyContent: `space-between`,
        }}
      >
        {image.asset && (
          <div sx={{ flex: `0 0 50%` }}>
            <img
              src={imageUrlFor(buildImageObj(image))}
              alt={image.alt}
              sx={{ borderRadius: `10px` }}
            />
          </div>
        )}

        <p sx={{ flex: `0 0 47%` }}>{text}</p>
      </div>
    </Section>
  )
}

export default TextWithImageBlock

/** @jsx jsx */
import {jsx} from 'theme-ui'
import React from 'react'
import Image from 'gatsby-image'
import {Section} from '../system'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

function GalleryBlock({data}) {
  const {images} = data
  return (
    <Section>
      <div sx={{display: `flex`, justifyContent: `center`}}>
        {images.map(image => (
          <div
            key={image.caption}
            sx={{
              flex: `0 1 200px`,
              border: `10px solid`,
              borderColor: `greyLight`,
              margin: `20px`,
              p: `10px`,
              textAlign: `center`,
            }}
          >
            <Image
              fluid={image.asset.fluid}
              alt={image.caption}
              title={image.caption}
            />
            <h4 sx={{my: 10}}>{image.caption}</h4>
          </div>
        ))}
      </div>
    </Section>
  )
}

// used in serializers.js
export function GalleryBlockSerializer({node}) {
  const {images} = node

  return (
    <Section>
      <div sx={{display: `flex`, justifyContent: `center`}}>
        {images.map(image => {
          return (
            <div
              key={image._key}
              sx={{
                flex: `0 1 200px`,
                border: `10px solid`,
                borderColor: `greyLight`,
                margin: `20px`,
                p: `10px`,
                textAlign: `center`,
              }}
            >
              {image.asset && (
                <>
                  <div sx={{flex: `0 0 50%`}}>
                    <img
                      src={imageUrlFor(buildImageObj(image))}
                      alt={image.alt}
                      sx={{borderRadius: `10px`}}
                    />
                  </div>
                  <h4 sx={{my: 10}}>{image.caption}</h4>
                </>
              )}
            </div>
          )
        })}
      </div>
    </Section>
  )
}

export default GalleryBlock

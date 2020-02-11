/** @jsx jsx */
import {jsx} from 'theme-ui'
import Image from 'gatsby-image'
import BlockContent from '../BlockContent'

const keywordStyle = {
  px: `10px`,
  py: `5px`,
  bg: `brightWhite`,
  color: `black`,
  fontSize: `14px`,
  m: 10,
}

function Content({data, loadImage}) {
  return (
    <div
      sx={{
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        py: 20,
        color: `black`,
      }}
    >
      {data._rawDescription && (
        <BlockContent blocks={data._rawDescription || []} />
      )}
      <div
        sx={{
          display: `block`,
          width: `100%`,
          maxWidth: 525,
          border: `1px solid`,
          borderColor: `greyDark`,
          borderRadius: 5,
          mb: 25,
        }}
        aria-label="image that links to project"
      >
        <Image
          fluid={data.image.asset.fluid}
          loading={loadImage ? `eager` : `lazy`}
          sx={{
            display: `block`,
            width: `100%`,
            borderRadius: 5,
          }}
        />
      </div>
      {data.imageSecondary && (
        <Image
          fluid={data.imageSecondary.asset.fluid}
          loading={loadImage ? `eager` : `lazy`}
          sx={{
            display: `block`,
            borderRadius: 5,
            width: `100%`,
            maxWidth: 525,
            mb: 25,
            border: `1px solid`,
            borderColor: `greyDark`,
          }}
        />
      )}
      <div sx={{display: `flex`, flexWrap: `wrap`, justifyContent: `center`}}>
        {data.keywords.map((word, idx) => (
          <span
            key={idx}
            sx={{
              ...keywordStyle,
              boxShadow: `2px 2px 0px 0px ${
                idx % 2 === 0 ? `#213252` : `#d43737`
              }`,
            }}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Content

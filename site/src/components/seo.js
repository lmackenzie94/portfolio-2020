import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'

const detailsQuery = graphql`
  query SEOQuery {
    site: sanitySiteSettings {
      title
      displayTitle
      description
      keywords
      author
    }
  }
`

function SEO({description, keywords = [], lang, meta, title}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        if (!data.site) {
          return
        }
        const seo = {
          title: title || data.site.title,
          titleTemplate: '%s | luke.',
          description: description || data.site.description,
        }

        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={seo.title}
            titleTemplate={seo.titleTemplate}
            meta={[
              {
                name: `description`,
                content: seo.description,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: seo.description,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: seo.description,
              },
            ]
              .concat(
                keywords && keywords.length > 0
                  ? {
                      name: 'keywords',
                      content: keywords.join(', '),
                    }
                  : [],
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO

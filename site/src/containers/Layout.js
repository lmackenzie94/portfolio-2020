import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
import Layout from '../components/Layout'

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings {
      displayTitle
    }
  }
`

function LayoutContainer(props) {
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <Layout {...props} siteTitle={data.site.displayTitle || 'luke.'} />
        )
      }}
    />
  )
}

export default LayoutContainer

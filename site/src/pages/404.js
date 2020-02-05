import React from 'react'
import Layout from '../containers/Layout.js'
import SEO from '../components/SEO'
import {graphql} from 'gatsby'
import {withGlobal} from '../global/index.js'
import {Wrapper, Section} from '../system/index.js'

export const query = graphql`
  {
    page: sanityPage(slug: {current: {eq: "404"}}) {
      title
      _rawParagraph
    }
  }
`

const NotFoundPage = ({data}) => (
  <Layout>
    <Wrapper>
      <Section>
        <SEO title={data.page.title} />
        <h1>{data.page.title}</h1>
        <p>{data.page.paragraph}</p>
      </Section>
    </Wrapper>
  </Layout>
)

export default withGlobal(NotFoundPage)

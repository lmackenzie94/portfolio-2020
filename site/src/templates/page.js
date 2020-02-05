/** @jsx jsx */
import {jsx} from 'theme-ui'
import {graphql, Link} from 'gatsby'
import Layout from '../components/Layout'
import {Wrapper, Section} from '../system/index'
import BlockContent from '../components/BlockContent'

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    page: sanityPage(id: {eq: $id}) {
      title
    }
  }
`

export default ({data: {page}}) => {
  return (
    <Layout>
      <Wrapper>
        <Section>
          {page._rawBlockcontent && (
            <BlockContent blocks={page._rawBlockcontent || []} />
          )}
          <Link to="/" sx={{variant: `buttons.primary`}}>
            Back Home
          </Link>
        </Section>
      </Wrapper>
    </Layout>
  )
}

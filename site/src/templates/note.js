/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../containers/Layout';
// import Image from 'gatsby-image';
import { Wrapper, Section } from '../system/index';
import BlockContent from '../components/BlockContent/BlockContent';

export const query = graphql`
  query NoteTemplateQuery($slug: String) {
    note: sanityNote(slug: { current: { eq: $slug } }) {
      title
      published
      topic
      _rawBody
    }
  }
`;

export default ({ data }) => (
  <Layout>
    <Wrapper>
      <Section>
        <div sx={{ my: [4] }}>
          <h1>{data.note.title}</h1>
          <p>{data.note.published}</p>
          <p>{data.note.topic}</p>
          {data.note._rawBody && (
            <BlockContent blocks={data.note._rawBody || []} />
          )}
          <Link to="/">Back Home</Link>
        </div>
      </Section>
    </Wrapper>
  </Layout>
);

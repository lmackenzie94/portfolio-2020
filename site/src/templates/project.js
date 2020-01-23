/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../containers/Layout';
import Image from 'gatsby-image';
import { Wrapper, Section } from '../system/index';

export const query = graphql`
  query ProjectTemplateQuery($slug: String) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
      title
      _rawDescription
      url
      repo
      image {
        alt
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

export default ({ data }) => (
  <Layout>
    <Wrapper>
      <Section>
        <Image
          fluid={data.project.image.asset.fluid}
          alt={data.project.image.alt}
          sx={{
            maxWidth: `65%`,
            margin: `0 auto`,
            img: {
              borderRadius: 8
            }
          }}
        />
        <div sx={{ textAlign: `center`, my: [4] }}>
          <h1>{data.project.title}</h1>
          <p>{data.project.description}</p>
          <Link to="/">Back Home</Link>
        </div>
      </Section>
    </Wrapper>
  </Layout>
);

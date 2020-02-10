// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import blockContent from './objects/blockContent';
import post from './documents/post';
import page from './documents/page';
import author from './documents/author';
import project from './documents/project';
import authorReference from './objects/authorReference';
import mainImage from './objects/mainImage';
import siteSettings from './documents/siteSettings';
import social from './objects/social';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    siteSettings,
    author,
    project,
    post,
    page,
    blockContent,
    authorReference,
    mainImage,
    social
  ])
});

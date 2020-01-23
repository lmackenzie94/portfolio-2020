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
import bodyPortableText from './objects/bodyPortableText';
import authorReference from './objects/authorReference';
import { localeString, localeText } from './objects/localeObjects';
import galleryImage from './objects/galleryImage';
import gallery from './objects/gallery';
import blockStack from './objects/blockStack';
import TextWithImage from './blocks/TextWithImage';
import mainImage from './objects/mainImage';
import siteSettings from './documents/siteSettings';
import note from './documents/note';
import social from './objects/social';

// import category from './category'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear in the studio.
    // they will appear in this order.
    siteSettings,
    project,
    author,
    post,
    page,
    note,
    blockContent,
    bodyPortableText,
    authorReference,
    localeString,
    localeText,
    galleryImage,
    gallery,
    blockStack,
    TextWithImage,
    mainImage,
    social
    // category,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
});

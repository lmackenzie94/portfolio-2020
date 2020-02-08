import S from '@sanity/desk-tool/structure-builder';

import siteSettings from './siteSettings';
import pages from './pages';
import posts from './posts';

import JSONpreview from '../components/previews/json/JSONpreview';

// Hide document types that we already have a structure definition for
const hiddenDocTypes = listItem =>
  !['siteSettings', 'page', 'post'].includes(listItem.getId());

export default () =>
  S.list()
    .title('Content')
    .items([
      siteSettings,
      pages,
      S.divider(),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
      posts
    ]);

export const getDefaultDocumentNode = props => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  // const {schemaType} = props
  return S.document().views([
    S.view.form(),
    S.view.component(JSONpreview).title('JSON')
  ]);
};

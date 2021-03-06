import S from '@sanity/desk-tool/structure-builder';
import { MdSettings } from 'react-icons/lib/md';

export default S.listItem()
  .title('Settings')
  .child(
    S.document()
      .title('Site Settings')
      .id('siteSettings')
      .schemaType('siteSettings')
      .documentId('siteSettings')
  )
  .icon(MdSettings);

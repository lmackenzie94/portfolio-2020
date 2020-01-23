import S from '@sanity/desk-tool/structure-builder';
import { FaPaperclip } from 'react-icons/fa';

export default S.listItem()
  .title('Pages')
  .icon(FaPaperclip)
  .child(
    S.documentTypeList('page')
      .title('Pages')
      .child(documentId =>
        S.document()
          .documentId(documentId)
          .schemaType('page')
      )
  );

import S from '@sanity/desk-tool/structure-builder';

import EyeIcon from 'part:@sanity/base/eye-icon';
import EditIcon from 'part:@sanity/base/edit-icon';
import { MdAccessibility } from 'react-icons/lib/md';
import { FaLaptopCode } from 'react-icons/fa';

// Web preview
import IframePreview from '../components/previews/iframe/IframePreview';
import SeoPreview from '../components/previews/seo/SeoPreviews';

// a11y preview
import ColorblindPreview from '../components/previews/a11y/colorblind-filter/ColorblindPreview';
import TextToSpeechPreview from '../components/previews/a11y/text-to-speech/TextToSpeechPreview';
// import BraillePreview from '../components/previews/a11y/braille/Braille'

// Web preview configuration
const remoteURL = 'https://lukemackenzie-portfolio.herokuapp.com';
const localURL = 'http://localhost:8000';
const previewURL =
  window.location.hostname === 'localhost' ? localURL : remoteURL;

export default S.listItem()
  .title('Projects')
  .schemaType('project')
  .child(
    S.documentTypeList('project')
      .title('Projects')
      .child(documentId =>
        S.document()
          .documentId(documentId)
          .schemaType('project')
          .views([
            S.view.form().icon(EditIcon),
            S.view
              .component(IframePreview)
              .options({ previewURL })
              .title('Web Preview')
              .icon(FaLaptopCode),
            S.view
              .component(ColorblindPreview)
              .options({ previewURL })
              .icon(EyeIcon)
              .title('Colorblind'),
            S.view
              .component(SeoPreview)
              .options({ previewURL })
              .icon(EyeIcon)
              .title('SEO Preview'),
            S.view
              .component(TextToSpeechPreview)
              .options({
                fields: ['repo', 'title', 'description']
              })
              .icon(MdAccessibility)
              .title('Text to speech')
            // S.view
            //   .component(SeoPreview)
            //   .options({previewURL})
            //   .icon(EyeIcon)
            //   .title('SEO Preview'),
            // S.view
            //   .component(ColorblindPreview)
            //   .options({previewURL})
            //   .icon(EyeIcon)
            //   .title('Colorblind'),
            // S.view
            //   .component(BraillePreview)
            //   .icon(MdAccessibility)
            //   .title('Braille')
          ])
      )
  );

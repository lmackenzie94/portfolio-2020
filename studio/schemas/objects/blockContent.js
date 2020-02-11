/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FaHighlighter } from 'react-icons/fa';

const highlightRender = props => (
  <span style={{ backgroundColor: '#f5cbcb' }}>{props.children}</span>
);

const calloutRender = props => (
  <div sx={{ pl: 15, borderLeft: `4px solid`, borderColor: `#d43737` }}>
    {props.children}
  </div>
);

const preIcon = () => <span>Pre</span>;

const preRender = props => (
  <span sx={{ fontFamily: `monospace` }}>{props.children}</span>
);

export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',

  of: [
    {
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // corrensponds with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'Quote', value: 'blockquote' },
        {
          title: 'Callout',
          value: 'callout',
          blockEditor: {
            render: calloutRender
          }
        }
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' }
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Underline', value: 'underline' },
          {
            title: 'Highlight',
            value: 'highlight',
            blockEditor: {
              icon: FaHighlighter,
              render: highlightRender
            }
          },
          {
            title: 'Pre',
            value: 'pre',
            blockEditor: {
              icon: preIcon,
              render: preRender
            }
          }
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url'
              }
            ]
          }
        ]
      }
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: 'mainImage'
    },
    {
      type: 'code'
    }
  ]
};

import { FaPencilAlt } from 'react-icons/fa';

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: FaPencilAlt,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },

    {
      name: 'authors',
      title: 'Author(s)',
      type: 'array',
      validation: Rule =>
        Rule.unique().error(`You can't list the same author more than once.`),
      of: [
        {
          type: 'authorReference'
        }
      ]
    },
    {
      name: 'image',
      title: 'Image',
      type: 'mainImage'
    },

    {
      name: 'published',
      title: 'Published',
      type: 'date',
      options: {
        dateFormat: 'MMMM D, YYYY'
      }
    },
    {
      name: 'blockcontent',
      title: 'Post Text',
      type: 'blockContent'
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      description: 'Add keywords that relate to your post',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    }
  ],
  initialValue: () => ({
    published: new Date().toISOString(),
    title: `My sick new blog post`,
    authors: [
      {
        _key: '24b6f64a146f',
        _type: 'authorReference',
        author: {
          _ref: '57b3aae7-de4b-4b30-9899-2e511579998f',
          _type: 'reference'
        }
      }
    ]
  }),
  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
};

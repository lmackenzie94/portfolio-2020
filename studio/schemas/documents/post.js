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
    // {
    //   name: 'author',
    //   title: 'Author',
    //   type: 'reference',
    //   to: { type: 'author' }
    // },
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
      name: 'gallery',
      title: 'Image Gallery',
      type: 'gallery'
    },
    // {
    //   name: 'categories',
    //   title: 'Categories',
    //   type: 'array',
    //   of: [{type: 'reference', to: {type: 'category'}}]
    // },
    {
      name: 'published',
      title: 'Published',
      type: 'date',
      options: {
        dateFormat: 'MMMM D, YYYY'
      }
    },

    // {
    //   name: 'blockcontent',
    //   title: 'CONTENT!!',
    //   type: 'blockContent'
    // }
    // {
    //   name: 'code',
    //   title: 'Code Block',
    //   type: 'code',
    //   options: {
    //     language: 'js'
    //   }
    // },
    {
      name: 'body',
      title: 'Text',
      type: 'bodyPortableText'
    },
    {
      name: 'blockstack',
      title: 'Block Stack',
      type: 'block-stack'
    },
    {
      name: 'blockcontent',
      title: 'Block Content',
      type: 'blockContent'
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

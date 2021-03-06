import { FaBeer } from 'react-icons/fa';

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: FaBeer,
  // types can be found in sanity docs
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'image',
      title: 'Project Screenshot',
      type: 'mainImage'
    },
    {
      name: 'imageSecondary',
      title: 'Secondary Screenshot',
      type: 'mainImage'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent'
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' }
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string'
    },
    {
      name: 'repo',
      title: 'Repo',
      type: 'string'
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      description: 'Add keywords that describe your project',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'image'
    }
    // prepare(selection) {
    //   const { author, date } = selection;
    //   return {
    //     ...selection,
    //     // subtitle: author && `${author} is a genius`,
    //     subtitle: date
    //       ? `Date Created: ${date.split('-')[1]}-${date.split('-')[0]}`
    //       : author && `${author} is a genius`
    //   };
    // }
  }
};

import { FaStickyNote } from 'react-icons/fa';

export default {
  name: 'note',
  title: 'Note',
  type: 'document',
  icon: FaStickyNote,
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
      name: 'published',
      title: 'Published',
      type: 'date',
      options: {
        dateFormat: 'MMMM D, YYYY'
      }
    },
    {
      name: 'code',
      title: 'Code Block',
      type: 'code',
      options: {
        language: 'js'
      }
    },
    {
      name: 'topic',
      title: 'Topic',
      type: 'string',
      options: {
        list: [
          { value: 'React', title: 'React' },
          { value: 'HTML', title: 'HTML' },
          { value: 'CSS', title: 'CSS' },
          { value: 'JavaScript', title: 'JavaScript' }
        ]
      }
    },
    {
      name: 'body',
      title: 'Text',
      type: 'bodyPortableText'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
};

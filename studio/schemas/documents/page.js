export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fieldsets: [
    {
      name: 'socials',
      title: 'Social Media',
      options: { collapsible: true, collapsed: false }
    }
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'paragraph',
      title: 'Paragraph',
      type: 'blockContent'
    },
    {
      name: 'socials',
      title: 'Socials',
      type: 'array',
      fieldset: 'socials',
      of: [{ type: 'social' }]
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    }
  ]
};

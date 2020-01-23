export default {
  name: 'mainImage',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'alt',
      title: 'Alternative Text',
      description: 'Important for SEO and accessibility.',
      type: 'string',
      validation: Rule =>
        Rule.error(
          `Alt text is requires as it is important for SEO and accessibility`
        ).required(),
      options: {
        // takes this field out from behind an 'Edit' button
        isHighlighted: true
      }
    },
    {
      name: 'caption',
      title: 'Caption',
      description: 'This will appear in small light text below the image',
      type: 'string',
      options: {
        // takes this field out from behind an 'Edit' button
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url'
    }
  }
};

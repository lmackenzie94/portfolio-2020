// export default {
//   name: 'galleryImage',
//   title: 'Gallery Image',
//   type: 'object',
//   fields: [
//     {
//       name: 'image',
//       title: 'Image',
//       type: 'image',
//       options: {
//         hotspot: true
//       }
//     },
//     {
//       name: 'caption',
//       title: 'Caption',
//       type: 'string'
//     }
//   ]
// };

// THE QUERY IS WHACK WITH THE ABOVE SCHEMA

export default {
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'image',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'caption',
      title: 'Caption',
      type: 'string'
    },
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
    }
  ]
};

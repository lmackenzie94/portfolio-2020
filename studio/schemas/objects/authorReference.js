// this defines the schema for the popup when you click 'Add' in the Author(s) section of a post

export default {
  name: 'authorReference',
  type: 'object',
  title: 'Author(s)',
  fields: [
    {
      name: 'author',
      type: 'reference',
      to: [
        {
          type: 'author'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'author.name',
      media: 'author.image.asset'
    }
  }
};

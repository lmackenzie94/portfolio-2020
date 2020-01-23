export default {
  name: 'textwithimage',
  title: 'Text With Image',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'text'
    },
    { name: 'image', title: 'Image', type: 'mainImage' },
    { name: 'flip', title: 'Flip Layout', type: 'boolean' }
  ],
  preview: {
    select: {
      title: 'text',
      flip: 'flip',
      media: 'image'
    },
    prepare(selection) {
      const { flip, media, title } = selection;
      return {
        title: flip ? 'Text With Image Right' : 'Text With Image Left',
        subtitle: `${title.substring(0, 50)}...`,
        media: media
      };
    }
  }
};

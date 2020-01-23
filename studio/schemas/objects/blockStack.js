export default {
  name: 'block-stack',
  type: 'object',
  title: 'Block Stack',
  fields: [
    {
      name: 'blocks',
      title: 'Blocks',
      type: 'array',
      options: {
        sortable: true
        // layout: 'grid'
      },
      of: [{ type: 'gallery' }, { type: 'textwithimage' }]
    }
  ]
};

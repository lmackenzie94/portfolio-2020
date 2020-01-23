import { FaImages } from 'react-icons/fa';

export default {
  name: 'gallery',
  type: 'object',
  title: 'Gallery',
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      options: {
        sortable: true
      },
      of: [
        {
          type: 'galleryImage'
        }
      ]
    }
  ],
  preview: {
    select: {
      // title: 'images[0].caption',
      // media: 'images[0].image.asset',
      media: 'images'
    },
    prepare(selection) {
      const { media } = selection;
      let numOfImages = media ? media.length : 0;
      return {
        title: `Gallery of ${numOfImages} ${
          numOfImages === 1 ? `image` : `images`
        }`,
        media: FaImages
      };
    }
  }
};

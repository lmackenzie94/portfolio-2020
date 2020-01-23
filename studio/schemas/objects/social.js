import React from 'react';
import {
  faFacebookSquare,
  faTwitter,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const getSocialIcon = platform => {
  switch (platform) {
    case 'Twitter':
      console.log(faTwitter);
      return faTwitter;
    case 'Github':
      return faGithub;
    case 'Facebook':
      return faFacebookSquare;
    case 'LinkedIn':
      return faLinkedin;
    case 'Email':
      return faEnvelope;
    case 'Resume':
      return faFile;
    default:
      break;
  }
};

export default {
  name: 'social',
  title: 'social',
  type: 'object',
  fields: [
    { name: 'platform', title: 'Platform', type: 'string' },
    {
      name: 'url',
      title: 'URL',
      type: 'string'
    },
    {
      name: 'file',
      title: 'File',
      type: 'file'
    }
  ],
  preview: {
    select: {
      title: 'platform',
      subtitle: 'url'
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title,
        subtitle,
        media: (
          <div>
            <FontAwesomeIcon icon={getSocialIcon(title)} />
          </div>
        )
      };
    }
  }
};

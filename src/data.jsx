import React from 'react';
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
  FaGithub
} from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/team',
    text: 'team',
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: '/calendar',
    text: 'calendar',
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: '/documents',
    text: 'documents',
    icon: <FaWpforms />,
  },
];

export const social = [
  {
    id: 1,
     url: 'https://www.linkedin.com/in/nsengiyumva-christian-b9947a233/',
    icon: <FaLinkedin />
   
  },
  {
    id: 2,
    url: 'https://github.com/NSENGIYUMVA-Christian',
    icon: < FaGithub />,
  },
  {
    id: 3,
    url: 'https://twitter.com/NSENGIYUMVAChr9',
    icon: <FaTwitter />,
    
  },
];

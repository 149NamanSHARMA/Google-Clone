import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
    { url: '/search', text: '🔎 All' },
    { url: '/news', text: '📰 News' },
    { url: '/images', text: '📸 Images' },
    { url: '/videos', text: '📺 Videos' },
];

export const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links.map(({ url, text }) => (
        <NavLink 
          key={url} // ensure each child in the list has a unique "key" prop
          to={url} 
          className={({ isActive }) => 
            isActive ? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2" : ""
          }
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
}

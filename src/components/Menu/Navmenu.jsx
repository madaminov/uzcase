import React, { useEffect, useState } from 'react';

const navMenu = [
  { key: '#hero', name: 'Home' },
  { key: '#about', name: 'About' },
  { key: '#services', name: 'Services' },
  { key: '#portfolio', name: 'Portfolio' },
  { key: '#contact', name: 'Contact' },
];

function Navmenu() {
  const [activeKey, setActiveKey] = useState('#hero');

  const handleClick = (key) => {
    setActiveKey(key);
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = '#hero'; // значение по умолчанию

      for (const item of navMenu) {
        const section = document.querySelector(item.key);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = item.key;
          }
        }
      }

      setActiveKey(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav id="navmenu" className="navmenu">
      <ul>
        {navMenu.map((menu, index) => (
          <li key={index}>
            <a
              href={menu.key}
              onClick={() => handleClick(menu.key)}
              className={activeKey === menu.key ? 'active' : ''}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
      <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
    </nav>
  );
}

export default Navmenu;

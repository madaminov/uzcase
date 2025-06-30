import React from 'react';
import Navmenu from './Menu/Navmenu';
import ToggleMobileMenu from './Menu/ToggleMobileMenu';
import socials from './Social/socials';
//import ButtonStarted from './Started/ButtonStarted';
function Header() {
  return (
    <header className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a
          href="index.html"
          className="logo d-flex align-items-center me-auto order-0"
        >
          <h1 className="sitename">UzCase.tech</h1>
        </a>
        <nav id="navmenu" className="navmenu">
          <Navmenu iconSet={false} />
          <ToggleMobileMenu />
        </nav>
        <div className="social-links d-flex me-auto me-lg-0 ms-lg-4">
          {socials.map((social, index) => (
            <a key={index} href={social.link} target="_blank" rel="noreferrer">
              <i className={'bi bi bi-' + social.name}></i>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;

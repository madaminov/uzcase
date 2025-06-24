import React from 'react';
import Navmenu from './Menu/Navmenu';
import ToggleMobileMenu from './Menu/ToggleMobileMenu';
import ButtonStarted from './Started/ButtonStarted';
function Header() {
  return (
    <header className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="index.html" className="logo d-flex align-items-center me-auto">
          <h1 className="sitename">UzCase.tech</h1>
        </a>
        <nav id="navmenu" className="navmenu">
          <Navmenu />
          <ToggleMobileMenu />
        </nav>
        <ButtonStarted
          href="#contact"
          title="Get Started"
          className="btn-getstarted"
        />
      </div>
    </header>
  );
}

export default Header;

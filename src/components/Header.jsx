import React from 'react';
import Navmenu from './Menu/Navmenu';
function Header() {
  return (
    <header className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="index.html" className="logo d-flex align-items-center me-auto">
          <h1 className="sitename">UzCase.tech</h1>
        </a>
        <Navmenu />

        <a className="btn-getstarted" href="index.html#about">
          Get Started
        </a>
      </div>
    </header>
  );
}

export default Header;

import React from 'react';
import Navmenu from './Menu/Navmenu';
import socials from './Social/socials';
function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container footer-top">
        <div className="row">
          <div className="col-lg-3 col-md-6 footer-about">
            <h4>UzCase.tech</h4>
          </div>

          <div className="col-lg-3 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <Navmenu iconSet={true} />
          </div>
          <div className="col-lg-3 col-md-3 footer-links">
            <h4>What we do</h4>
            <ul>
              <li>
                <i className="bi bi-chevron-right"></i> Websites
              </li>
              <li>
                <i className="bi bi-chevron-right"></i> Web Applications
              </li>
              <li>
                <i className="bi bi-chevron-right"></i> Mobile Apps
              </li>
              <li>
                <i className="bi bi-chevron-right"></i> MVPs for Startups
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-12">
            <h4>Social message</h4>
            <p>
              Let’s build something great together. Reach out — we’d love to
              hear from you.
            </p>
            <div className="social-links d-flex">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={'bi bi bi-' + social.name}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>{' '}
          <strong className="px-1 sitename">Uzcase.tech</strong>{' '}
          <span>All Rights Reserved</span>
        </p>
      </div>
    </footer>
  );
}
export default Footer;

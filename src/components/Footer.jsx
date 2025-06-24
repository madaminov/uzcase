import React from 'react';
import Logo from '../logo.svg';
function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container footer-top">
        <div className="row">
          <div className="col-12 footer-about">
            <p className="text-center">
              <img src={Logo} alt="UzCase" className="img-fluid" />
            </p>
          </div>

          <div className="col-12 footer-links">
            <p className="text-center">
              <strong>Email:</strong> <span>info@uzcase.tech</span>
            </p>
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

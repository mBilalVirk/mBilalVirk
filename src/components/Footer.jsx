import React from "react";

function Footer() {
  return (
    <div>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-xs-6 col-md-3">
              <h6>Tools</h6>
              <ul className="footer-links">
                <li>Dev-C++</li>
                <li>VsCode</li>
                <li>XAMPP Control Panel</li>
                <li>NetBeans</li>
                <li>XAMPP Control Panel</li>
                <li>WordPress</li>
                <li>Figma</li>
                <li>Adobe XD</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Computer Languages</h6>
              <ul className="footer-links">
                <li>C</li>
                <li>C++</li>
                <li>Java</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>PHP</li>
                <li>Python</li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
                <li>
                  <a href="#">Contribute</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>

          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright © Made by ❤ Bilal Virk.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a
                    className="facebook"
                    href="https://web.facebook.com/bilal.virk.9275"
                    target="_blank"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="https://www.instagram.com/imbilalvirk/"
                    target="_blank"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="linkedin"
                    href="https://www.linkedin.com/in/thebilalvirk"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="linkedin"
                    href="https://github.com/mBilalVirk"
                    target="_blank"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

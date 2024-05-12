import React from "react";

function Contact() {
  return (
    <div>
      <div className="container" id="contact">
        <div className="row">
          <div className="contact-left">
            <h1 sub-title>Contact Me</h1>
            <p>
              <i className="fas fa-paper-plane"></i> bilalvirk337@gmail.com
            </p>
            <p>
              <i className="fas fa-phone-square-alt"></i> +92
            </p>
            <div className="social-icons">
              <a
                href="https://web.facebook.com/bilal.virk.9275"
                target="_blank"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/imbilalvirk/" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" target="_blank">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/thebilalvirk"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <a href="" className="btn btn2">
              Download CV
            </a>
          </div>
          <div className="contact-right">
            <form>
              <input
                type="text"
                name="Name"
                id=""
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="Email"
                id=""
                placeholder="Youre Email"
                required
              />
              <textarea
                name="Message"
                id=""
                cols=""
                rows="6"
                placeholder="Your Message"
              ></textarea>
              <button type="submit" className="btn btn2">
                Submite
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

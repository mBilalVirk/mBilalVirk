import React from "react";

function Service() {
  return (
    <div>
      <div id="services">
        <div className="container">
          <h1 className="sub-title">My Services</h1>
          <div className="services-list">
            <div>
              <i className="fa-solid fa-pen"></i>
              <h2>Design</h2>
              <p>
                We design all types of websites (simple and E-commerce's) that
                reflect your brand, get noticed, and grow your business.
              </p>
              <a href="#">Get Started</a>
            </div>

            <div>
              <i className="fa-solid fa-code"></i>
              <h2>Web Design & Development</h2>
              <p>
                A strategic approach to website design and development. Develop
                your website with a Powerfull frame work from the expert.
              </p>
              <a href="#">Get Started</a>
            </div>
            <div>
              <i className="fa-solid fa-crop"></i>
              <h2>UI/UX Design</h2>
              <p>
                Design of a user interface and experience, designed for mobile
                devices, desktop screens, and more
              </p>
              <a href="#">Get Started</a>
            </div>
            <div>
              <i className="fa-brands fa-app-store"></i>
              <h2>App Design</h2>
              <p>
                Mobile app design is the task of designing mobile applications.
                Even though mobile apps have a wide variety of uses, what
                unifies them is the need for optimal usability, accessibility,
                engagement, and overall user experience.{" "}
              </p>
              <a href="#">Get Started</a>
            </div>

            <div>
              <i className="fa-sharp fa-solid fa-shop"></i>
              <h2>Marketing</h2>
              <p>
                Social media marketing is using platforms like Facebook,
                Instagram, Twitter, and LinkedIn to promote a business, product
                or service. It helps reach a large audience, increase brand
                awareness and drive sales.
              </p>
              <a href="#">Get Started</a>
            </div>
            <div>
              <i className="fa-duotone fa-hashtag"></i>
              <h2>S M Management</h2>
              <p>
                Social media management is the process of creating and managing
                content, engagement and reputation on social media platforms for
                a business or brand. It includes scheduling posts, responding to
                comments and messages, monitoring metrics, and analyzing
                performance.
              </p>
              <a href="#">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;

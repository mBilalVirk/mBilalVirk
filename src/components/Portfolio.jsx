import React from "react";

function Portfolio(props) {
  return (
    <div>
      <div id="portfolio">
        <div className="container">
          <h1 className="sub-title">My Work</h1>
          <div className="work-list">
            <div className="work">
              <img src={props.mobile} alt="Bilal Virk UI/UX" />
              <div className="layer">
                <h3>Online Shoping App</h3>
                <p>
                  Design your application like daraz, shopify food panda and
                  much more.
                </p>
                <a href="#">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="work">
              <img src={props.webImg} alt="UI/UX" />
              <div className="layer">
                <h3>Website</h3>
                <p>
                  Develop website, personal blog, landing page, WordPress page
                  etc.
                </p>
                <a href="#">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="work">
              <img src={props.portfolioImg} alt="User Experiance" />
              <div className="layer">
                <h3>Portfolio</h3>
                <p>Design and develop your Portfolio as expert.</p>
                <a href="#">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
          <a href="#" className="btn">
            See More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

import React, { useState } from "react";

function About(props) {
  const [activeTab, setActiveTab] = useState("skills");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src={props.profile} alt="Bilal Virk Portfolio" />
            </div>
            <div className="about-col-2">
              <h1 className="sub-title">About</h1>
              <p>
                As a skilled individual in website designing, UI/UX, and social
                media marketing, I bring a versatile and adaptable skill set. I
                have completed relevant coursework, personal projects, and
                internships to develop a deep understanding of these fields. In
                website designing, I have experience creating responsive and
                visually appealing websites. In UI/UX, I have experience
                creating wireframes, prototypes, and user interfaces that
                prioritize user experience and engagement. In social media
                marketing, I have experience creating content, managing
                campaigns, and analyzing metrics to drive engagement and
                conversions. I am a quick learner and an effective communicator,
                with a passion for creating engaging digital experiences.
              </p>
              <div className="tab-titles">
                <p
                  className={`tab-links ${
                    activeTab === "skills" ? "active-link" : ""
                  }`}
                  onClick={() => openTab("skills")}
                >
                  Skills
                </p>
                <p
                  className={`tab-links ${
                    activeTab === "experience" ? "active-link" : ""
                  }`}
                  onClick={() => openTab("experience")}
                >
                  Experience
                </p>
                <p
                  className={`tab-links ${
                    activeTab === "education" ? "active-link" : ""
                  }`}
                  onClick={() => openTab("education")}
                >
                  Education
                </p>
              </div>
              <div
                className={`tab-content ${
                  activeTab === "skills" ? "active-tab" : ""
                }`}
                id="skills"
              >
                <ul>
                  <li>
                    <span>UI/UX Designer</span>
                    <br />
                    Designing User Friendly Mobile App
                  </li>
                  <li>
                    <span>Web Development</span>
                    <br />
                    Web App Development
                  </li>
                  <li>
                    <span>WordPress Developer</span>
                    <br />
                    WordPress Developer, WordPress Designer, WordPress
                    Optimization, Website Speed Optimization, SEO Consultant
                  </li>
                  <li>
                    <span>Digital Marketing</span>
                    <br />
                    Facebook, Instagram Ads Creation
                  </li>
                </ul>
              </div>
              <div
                className={`tab-content ${
                  activeTab === "experience" ? "active-tab" : ""
                }`}
                id="experience"
              >
                <ul>
                  <li>
                    <span>2022 - Current</span>
                    <br />
                    Working Freelancer
                  </li>
                  <li>
                    <span>2021 - 2022</span>
                    <br />
                    Teacher in private School
                  </li>
                  <li>
                    <span>2019 - 2021</span>
                    <br />
                    Office Assistant
                  </li>
                </ul>
              </div>
              <div
                className={`tab-content ${
                  activeTab === "education" ? "active-tab" : ""
                }`}
                id="education"
              >
                <ul>
                  <li>
                    <span>2022</span>
                    <br />
                    Master in Computer
                  </li>
                  <li>
                    <span>2018</span>
                    <br />
                    Associate Degree in Computer Science
                  </li>
                  <li>
                    <span>2015</span>
                    <br />
                    Intermediate
                  </li>
                  <li>
                    <span>2013</span>
                    <br />
                    Metric
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

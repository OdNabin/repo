"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowRight, FaHome } from "react-icons/fa";
import validation from "../asserts/validation.png";

import bgcontact from "../asserts/bgcontact.jpg";

import one from "../asserts/carrer/1.jpg";
import two from "../asserts/carrer/2.jpg";
import three from "../asserts/carrer/3.jpg";
import four from "../asserts/carrer/4.jpg";
import five from "../asserts/carrer/5.jpg";
import six from "../asserts/carrer/6.jpg";
import seven from "../asserts/carrer/4.jpg";

const Page = () => {
  const [activeTab, setActiveTab] = useState("company-culture");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <div
          style={{
            clipPath: "polygon(0 0, 100% 0, 75% 100%, 0% 100%)",
            backgroundColor: "#974c01",
            width: "80%",
            height: "350px",
          }}
        ></div>
        <Image
          src={bgcontact}
          alt="image"
          style={{
            width: "auto",
            height: "350px",
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: -999,
          }}
        />
      </div>

      <br />

      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <ul
            className="nav custom-btn-group justify-content-center"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "company-culture" ? "active1" : ""
                }`}
                id="company-culture-tab"
                onClick={() => handleTabClick("company-culture")}
                role="tab"
                aria-controls="company-culture"
                aria-selected={activeTab === "company-culture"}
              >
                COMPANY CULTURE
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "diversity" ? "active1" : ""
                }`}
                id="diversity-tab"
                onClick={() => handleTabClick("diversity")}
                role="tab"
                aria-controls="diversity"
                aria-selected={activeTab === "diversity"}
              >
                DIVERSITY
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "job-opportunities" ? "active1" : ""
                }`}
                id="job-opportunities-tab"
                onClick={() => handleTabClick("job-opportunities")}
                role="tab"
                aria-controls="job-opportunities"
                aria-selected={activeTab === "job-opportunities"}
              >
                JOB OPPORTUNITIES
              </a>
            </li>
          </ul>
        </div>
        <br />
        <div className="tab-content" id="myTabContent">
          <div
            className={`tab-pane fade ${
              activeTab === "company-culture" ? "show active1" : ""
            }`}
            id="company-culture"
            role="tabpanel"
            aria-labelledby="company-culture-tab"
          >
            <h2 style={{ color: "#964B00" }}>What’s in it for you?</h2>
            <p>
              Working at Visteon is a journey in which our employees can develop
              their strengths and advance their careers while making a
              difference globally. If you’re looking for an opportunity that
              will change the world and how we interact with vehicles, join us.
              Visteon is where the best technical talent creates the future.
            </p>
            <br />

            <div class="row card-boxes">
              <div class="col-sm-12 col-md-4">
                <div class="card border-0">
                  <Image
                    src={one}
                    class="card-img-top "
                    style={{ width: "100%", height: "auto" }}
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      Apply your passion for technology
                    </h5>
                    <p class="card-text">
                      Experience the excitement of working for an innovative
                      core technology company that is leading the digital
                      revolution in automotive cockpit electronics, delivering
                      key product platforms that are essential to the cockpit of
                      the future and autonomous mobility.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-4">
                <div
                  class="card border-0"
                  style={{
                    boxShadow:
                      "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.2)",
                    borderRadius: "6px",
                    height: "450px",
                  }}
                >
                  <Image
                    src={two}
                    class="card-img-top"
                    style={{ width: "100%", height: "auto" }}
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Amazing job content</h5>
                    <p class="card-text">
                      Do meaningful and rewarding work. Get recognized for doing
                      great things in a company with a business model that is
                      innovative, nimble, customer-focused, entrepreneurial and
                      global.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-4">
                <div
                  class="card border-0"
                  style={{
                    boxShadow:
                      "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.2)",
                    borderRadius: "6px",
                    height: "450px",
                  }}
                >
                  <Image
                    src={three}
                    class="card-img-top"
                    style={{ width: "100%", height: "auto" }}
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Work with the best</h5>
                    <p class="card-text">
                      Work with some of the best technical experts in the
                      industry in a fast-paced environment that is focused on
                      technology and innovation in one of the most exciting
                      areas of technology today.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-4">
                <div
                  class="card border-0"
                  style={{
                    boxShadow:
                      "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.2)",
                    borderRadius: "6px",
                    height: "450px",
                  }}
                >
                  <Image
                    src={four}
                    class="card-img-top"
                    style={{ width: "100%", height: "auto" }}
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Great exposure and learning</h5>
                    <p class="card-text">
                      Work on multiple projects and with the world’s leading
                      vehicle manufacturers, across various functional domains.
                      Develop your skills and gain experience in emerging areas
                      of technology such as artificial Intelligence,
                      sensor-based automation, and new silicon and software
                      technologies in a global setting.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-4">
                <div
                  class="card border-0"
                  style={{
                    boxShadow:
                      "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.2)",
                    borderRadius: "6px",
                    height: "450px",
                  }}
                >
                  <Image
                    src={five}
                    class="card-img-top"
                    style={{ width: "100%", height: "auto" }}
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Opportunity to make a difference</h5>
                    <p class="card-text">
                      Impact the future of society through a company that is
                      advancing safer, more automated mobility and a seamless
                      user experience. Work in a sector that is a significant
                      driver of research and development investment and a key
                      contributor to the GDP.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-4">
                <div class="card border-0">
                  <Image
                    src={six}
                    class="card-img-top"
                    style={{ width: "100%", height: "auto" }}
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Well-being</h5>
                    <p class="card-text">
                      Work in an inclusive and supportive organizational culture
                      that values employee well-being.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-4">
                <div
                  class="card border-0"
                  style={{
                    boxShadow:
                      "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.2)",
                    borderRadius: "6px",
                    height: "450px",
                  }}
                >
                  <Image
                    src={seven}
                    class="card-img-top"
                    style={{ width: "100%", height: "auto" }}
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      Be part of a global company poised for growth
                    </h5>
                    <p class="card-text">
                      Contribute to a global organization, interacting with
                      employees across 17 countries. Visteon is poised for
                      growth, with large backlog of business and a growing base
                      of top-tier OEM customers. Build your career in a growing
                      company that has opportunities across multiple sites
                      globally
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`tab-pane fade ${
              activeTab === "diversity" ? "show active1" : ""
            }`}
            id="diversity"
            role="tabpanel"
            aria-labelledby="diversity-tab"
          >
            <br />
            <h2 style={{ color: "#964B00" }}>
              Diversity and Inclusion Statement
            </h2>
            <p>
              For Visteon, diversity represents an environment of open
              communication where the contributions of all employees are valued.
              As a multicultural organization, Visteon embraces human
              differences and harnesses the power of its employees’ varied
              backgrounds, cultures and experiences to create a competitive
              edge. Visteon will continue to succeed by fully engaging the
              diverse talents of all its employees.
            </p>
          </div>
          <div
            className={`tab-pane fade ${
              activeTab === "job-opportunities" ? "show active1" : ""
            }`}
            id="job-opportunities"
            role="tabpanel"
            aria-labelledby="job-opportunities-tab"
          >
            <h2 style={{ color: "#964B00" }}> JOB OPPORTUNITIES</h2>
            <br />
            <div
              className="row d-flex justify-content-evenly align-items-center"
              style={{ color: "#FFF" }}
            >
              <div
                className="col-md-6 p-4"
                style={{
                  backgroundColor: "#cc6600",
                  borderRadius: "6px",
                  width: "45%",
                }}
              >
                <h3>Be a revolutionary</h3>
                <p>
                  Today’s job seekers want to make a tangible, positive impact
                  on the world. At Visteon, we’re changing the world in a number
                  ofgreat ways. We’re uniquely positioned to capitalize on two
                  significant industry trends – electric and autonomous
                  vehicles. Our technology will completely change the way we
                  interact with our vehicles, reduce the number of car accidents
                  and fatalities, and make the world a cleaner place. We’re not
                  just dreamers, we’re doers.
                </p>
              </div>
              <div
                className="col-md-6 p-4"
                style={{
                  backgroundColor: "#cc6600",
                  borderRadius: "6px",
                  width: "45%",
                }}
              >
                <h3>Grow your career</h3>
                <p>
                  Whether you’re an engineer, algorithm developer or a financial
                  analyst, you’ll see opportunities for professional development
                  and career advancement. If you’re passionate about advancing
                  your career, Visteon is the place for you. We offer
                  mentorships, rotational programs and education benefits. Our
                  technical ladder program offers development in a range of
                  engineering disciplines. At Visteon, it’s all within your
                  reach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default Page;

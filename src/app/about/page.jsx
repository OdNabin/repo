"use client";
import React, { useState } from "react";
import bgcontact from "../asserts/aboutus.jpg";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";

const Page = () => {
  const [activeTab, setActiveTab] = useState("about-us");

  const router = useRouter();

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
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            color: "#FFF",
          }}
        >
          {" "}
          <h1>About us</h1>
        </div>
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
                  activeTab === "about-us" ? "active1" : ""
                }`}
                id="about-us-tab"
                onClick={() => handleTabClick("about-us")}
                role="tab"
                aria-controls="about-us"
                aria-selected={activeTab === "about-us"}
              >
                ABOUT US
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "policies&compliance" ? "active1" : ""
                }`}
                id="policies&compliance-tab"
                onClick={() => handleTabClick("policies&compliance")}
                role="tab"
                aria-controls="policies&compliance"
                aria-selected={activeTab === "policies&compliance"}
              >
                POLICIES & COMPLIANCE
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "" ? "active1" : ""}`}
                id="suppliers-tab"
                onClick={() => handleTabClick("suppliers")}
                role="tab"
                aria-controls="suppliers"
                aria-selected={activeTab === "suppliers"}
              >
                SUPPLIERS
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "job-opportunities" ? "active1" : ""
                }`}
                id="job-opportunities-tab"
                onClick={() => router.push("/contact")}
                role="tab"
                aria-controls="job-opportunities"
                aria-selected={activeTab === "job-opportunities"}
              >
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
        <br />
        <div className="tab-content" id="myTabContent">
          <div
            className={`tab-pane fade ${
              activeTab === "about-us" ? "show active1" : ""
            }`}
            id="about-us"
            role="tabpanel"
            aria-labelledby="about-us-tab"
          >
            <div className="container">
              <br />
              <p
                style={{ color: "#964b00", fontWeight: 600, fontSize: "30px" }}
              >
                Our Story:
              </p>
              <p>
                Founded with a commitment to pioneering engineering solutions,
                Brown Edge Technology was established to tackle the most
                pressing challenges in the Smart Mobility space. Recognizing the
                potential of data and digital technologies to transform
                traditional engineering, we set out to create solutions that are
                both innovative and practical.
              </p>
              <p>
                Our journey began with a small team of passionate engineers and
                technologists dedicated to exploring the intersection of data
                and core engineering. Over the years, we've grown into a
                category-defining firm, known for our novel approaches and
                unwavering commitment to excellence. Our solutions are designed
                to meet the evolving needs of the mobility sector, ensuring
                safety, efficiency, and sustainability.
              </p>
              <p>
                Today, Brown Edge Technology stands at the forefront of
                engineering innovation, continuously pushing the boundaries of
                what's possible in Smart Mobility. Our story is one of
                relentless pursuit of excellence, driven by a vision of a
                smarter, more connected future.
              </p>
              <div className="row m-5">
                <div className="col-md-6">
                  <p
                    style={{
                      color: "#964b00",
                      fontWeight: 600,
                      fontSize: "30px",
                    }}
                  >
                    Mission:
                  </p>
                  <p>
                    At Brown Edge Technology, our mission is to redefine core
                    engineering challenges in the Smart Mobility sector through
                    innovative and data-driven solutions. We strive to bridge
                    the gap between traditional engineering and digital
                    technologies by leveraging data, embedded electronics, and
                    cutting-edge advancements in core engineering.
                  </p>

                  <br />
                  <p
                    style={{
                      color: "#964b00",
                      fontWeight: 600,
                      fontSize: "30px",
                    }}
                  >
                    Vision:
                  </p>
                  <p>
                    Our vision is to lead the Smart Mobility revolution with
                    next-generation smart systems that approach mobility
                    problems with novelty and innovation. We aim to set new
                    standards in engineering solutions, driving forward the
                    integration of digital and core engineering for a smarter,
                    more connected world.
                  </p>
                  <p
                    style={{
                      color: "#964b00",
                      fontWeight: 600,
                      fontSize: "30px",
                    }}
                  >
                    Values:
                  </p>
                  <ul>
                    <li>
                      <b>Innovation:</b> We are committed to continuous
                      improvement and fostering a culture of creativity and
                      out-of-the-box thinking.
                    </li>
                    <li>
                      <b>Excellence:</b> We strive for the highest standards in
                      everything we do, from our engineering solutions to our
                      customer service.
                    </li>
                    <li>
                      <b>Integrity:</b> We conduct our business with honesty and
                      transparency, building trust with our clients and
                      partners.
                    </li>
                    <li>
                      <b>Collaboration:</b> We believe in the power of teamwork
                      and collaborative efforts to achieve exceptional results.
                    </li>
                    <li>
                      <b>Sustainability: </b>We are dedicated to creating
                      solutions that are not only effective but also
                      environmentally responsible.
                    </li>
                  </ul>
                </div>
                <div className="col-md-6"></div>
              </div>
              <br />
              <p
                style={{ color: "#964b00", fontWeight: 600, fontSize: "30px" }}
              >
                Core Components of Brown Edge Technology
              </p>
              <p>
                At Brown Edge Technology, our core components include leveraging
                data-driven engineering to optimize designs and improve
                performance, integrating state-of-the-art embedded electronics
                for real-time monitoring and control, utilizing advanced
                materials to enhance durability and efficiency, and developing
                intelligent smart systems that learn and adapt. We focus on a
                customer-centric approach, tailoring our solutions to meet
                specific needs, and prioritize sustainability by creating
                eco-friendly, energy-efficient products that contribute to a
                greener future.
              </p>
            </div>
            <br />
          </div>
          <div
            className={`tab-pane fade ${
              activeTab === "suppliers" ? "show active1" : ""
            }`}
            id="suppliers"
            role="tabpanel"
            aria-labelledby="suppliers-tab"
          >
            <br />
            <h2 style={{ color: "#964B00" }}>
              policies&compliance and Inclusion Statement
            </h2>
            <p>
              For Brown Edge Technology, policies&compliance represents an environment of open
              communication where the contributions of all employees are valued.
              As a multicultural organization, Brown Edge Technology embraces human
              differences and harnesses the power of its employees’ varied
              backgrounds, cultures and experiences to create a competitive
              edge. Brown Edge Technology will continue to succeed by fully engaging the
              diverse talents of all its employees.
            </p>
          </div>
          {/* <div
            className={`tab-pane fade ${
              activeTab === "job-opportunities" ? "show active1" : ""
            }`}
            id="job-opportunities"
            role="tabpanel"
            aria-labelledby="job-opportunities-tab"
          >
            
          </div> */}

<div
            className={`tab-pane fade ${
              activeTab === "policies&compliance" ? "show active1" : ""
            }`}
            id="policies&compliance"
            role="tabpanel"
            aria-labelledby="suppliers-tab"
          >
            <br />
            <h2 style={{ color: "#964B00" }}>
            Ethics and Integrity Policy
            </h2>
            <p>
            Brown Edge Technology’s ethics and compliance program is based on the company’s Ethics and Integrity Policy. This policy describes the company’s expectations regarding the standards of behavior and conduct of employees. It underscores our dedication, at all levels of the organization, to the behaviors underlying our ethical standards. The policy is translated into 11 languages and distributed to our employees throughout the world. The company also maintains an ethics hotline and encourages employees to report any concerns or failures in compliance. Brown Edge Technology has implemented a process under which employees can bring any concerns regarding matters of ethics and compliance to the direct attention of Brown Edge Technology’s Audit Committee. Through an annual report presented to the Audit Committee, the company describes its activities and compliance within our ethics areas.
            </p>

            <div className="container">
              <div className="row">
                <div className="col-md-6">
                 <ul className="list-item">
                  <li>English</li>
                  <li>Bulgarian</li>
                  <li>Chinese</li>
                  <li>French</li>
                  <li>German</li>
                  <li>Japanese</li>
                 </ul>
                </div>
                <div className="col-md-6">
                <ul className="list-item">
                  <li>Korean</li>
                  <li>
                  Portuguese</li>
                  <li>Slovak</li>
                  <li>Spanish</li>
                  <li>Thai</li>
                 </ul>
                </div>
              </div>
            </div>
 
            <h2 style={{ color: "#964B00" }}>
            Policy Regarding Purchases and Sales of Company Stock
            </h2>

            <p>Since Brown Edge Technology Corporation is a public company, there are important restrictions imposed on the company, as well as its directors, officers and employees, under state and federal securities laws regarding purchases and sales of the company’s common stock. Read Brown Edge Technology’s Statement of Policy Regarding Purchases and Sales of Company Stock.</p>


            <h2 style={{ color: "#964B00" }}>
            Quality Policy
            </h2>

            <p>This statement outlines the Brown Edge Technology Quality Policy. It applies to all facilities and individual representatives of Brown Edge Technology Corporation and its affiliates:</p>

            <p>We will partner with our customers to design and build the best vehicles in the world, by combining our automotive intellect with operational excellence in safety, quality, efficiency and speed.</p>

            <p>We will empower our employees to provide solutions for our customers, and build a network of sustainable, mutually beneficial business relationships.</p>

            <p>Our commitment to continuous improvement will be demonstrated in our actions and in the effectiveness of our operating systems and processes.</p>

            <h2 style={{ color: "#964B00" }}>
            Global Environmental, Health and Safety Policy
            </h2>
  <p>Brown Edge Technology is committed to providing a safe and healthy work place, and protecting and conserving the environment. Our intended outcome is to have zero employee accidents and minimize environmental impact. These core values are present in our operations, products and services and demonstrate our commitment to being a responsible corporate citizen.</p>
  <p>Achieving excellence in health, safety and environmental matters is a company-wide responsibility. Brown Edge Technology leaders accept this responsibility as an important priority and commit the necessary resources to achieve its success. These values are also shared by employees at all levels and assignments and in all initiatives in which the company participates.</p>
  <p>For more information, see our EH&S policy, which applies to all facilities and individual representatives of Brown Edge Technology Corporation and its affiliates.</p>


  <h2 style={{ color: "#964B00" }}>
            
Code of Basic Human Rights and Working Conditions
            </h2>
<p>As an extension of our ethics and compliance program, Brown Edge Technology adopted its own Code of Basic Human Rights and Working Conditions. This code sets requirements and expectations related to the following areas:</p>

<ul className="list-item">
  <li>Child Labor</li>
  <li>Compensation</li>
  <li>Forced Labor</li>
  <li>Freedom of Association and Collective Bargaining</li>
  <li>Harassment and Discrimination</li>
  <li>Environment, Health and Safety</li>
  <li>Work Hours</li>
  <li>Responsibility and Implementation</li>
</ul>

<p>Brown Edge Technology is committed to ensuring its suppliers are aligned with the company’s ethics and compliance program. Brown Edge Technology issues to all of its suppliers terms and conditions that include compliance with all applicable laws and regulations, including those relating to environmental matters, wages, working hours, conditions of employment, discrimination, and health and safety. The terms and conditions also require that suppliers attest that any supplies purchased by Brown Edge Technology will not be produced with forced labor either by the supplier or its suppliers.</p>


<h2 style={{ color: "#964B00" }}>Conflict Minerals</h2>

<p>Brown Edge Technology has imposed standard reporting requirements on its supply chain regardless of where the components and materials are purchased. Brown Edge Technology has been working closely with the Automotive Industry Action Group (AIAG), and with our customers and other Tier 1 suppliers, to ensure continued consistency in the tools used to establish this process. Requirements are cascaded annually to our supply chain, and Brown Edge Technology intends to do what we can to ensure the components and materials in our products, regardless of where they are assembled or sold, do not contain conflict minerals that have contributed to the armed conflict in the Democratic Republic of Congo (DRC) and surrounding countries.</p>
<p>For more information, see the Brown Edge Technology Policy for a Responsible Global Supply Chain of Minerals from Conflict-Affected and High-Risk Areas and the 2023 Conflict Minerals Report.</p>


<h2 style={{ color: "#964B00" }}>European Union Declaration of Conformity</h2>

<p>The CE marking on a Brown Edge Technology product indicates conformity to the provisions of applicable European Union (EU) directives. The EU Declaration of Conformity (DoC) is the manufacturer’s declaration that the product complies with those directives.</p>

<button>VIEW COMPLIANCE CERTIFICATE</button>

<h2 style={{ color: "#964B00" }}>Taiwan Bureau of Standards, Metrology and Inspection (BSMI) certificates</h2>

<p>Brown Edge Technology products entering the Taiwan market adhere to the Chinese National Standard (CNS) enacted by Taiwan’s BSMI (Bureau of Standards, Metrology and Inspection), Ministry of Economic Affairs.</p>

<button>VIEW BSMI CERTIFICATE</button>

<h2 style={{ color: "#964B00" }}>UK Tax Strategy</h2>
<p>The Brown Edge Technology UK Tax Strategy applies to both Brown Edge Technology entitles in the UK, Brown Edge Technology Engineering Services Limited and Brown Edge Technology Finance Limited.</p>
<h2 style={{ color: "#964B00" }}>Terms and Conditions of Sale for Current Customers</h2>

<p>We greatly value our customers and strive to deliver exceptional products at a good value. Brown Edge Technology’s Terms and Conditions of Sale provide an informative overview of our standard selling terms. The document provides valuable information on terms of sale including shipping, inspection, payment terms and warranty.</p>

<h2 style={{ color: "#964B00" }}>TProduct Cybersecurity</h2>

<p>As part of the mobility industry product security processes and solutions development, Brown Edge Technology interacts with various customer, suppliers and other third parties to review and understand the impact of potential product cybersecurity issues.</p>

<p>Contact the Brown Edge Technology Product Cybersecurity team at: cybersecurity@Brown Edge Technology.com to share product cybersecurity-related topics or to report information to Brown Edge Technology.</p>

<h2 style={{ color: "#964B00" }}>
Corporate Giving Guidelines</h2>

<p>We value uplifting the communities in which we live and work through our corporate giving and volunteer efforts. As a company we achieve this goal by complying with applicable laws, adhering to ethical standards, and treating those who seek and receive assistance in a fair and respectful manner. Brown Edge Technology’s Corporate Giving Guidelines provide an overview of our environmental, social, governance program.</p>

          </div>
        </div>
      </div>

      <br />
    </>
  );
};

export default Page;

import React from "react";
import logo from "../asserts/logo.png";
import Image from "next/image";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdChevronRight } from "react-icons/md";

import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export const Footer = () => {
  return (
    <footer
      className="footer text-white py-5"
      style={{ backgroundColor: "#964B00" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <Image src={logo} alt="Logo" className="img-fluid mb-3" style={{width:"100px"}} />
            <p>
              BROWNEDGE TECHNOLOGY, a category-defining engineering solutions
              firm redefining core engineering problems in the Smart
              Infrastructure space.
            </p>
            <div>
              <MdOutlineFacebook
                className="m-3 border rounded-circle"
                size={40}
                style={{ backgroundColor: "#3b5998", padding: "8px" }}
              />
              <FaInstagram
                className=" m-3 border rounded-circle"
                size={40}
                style={{ backgroundColor: "#DD2A7B", padding: "8px" }}
              />
              <FaYoutube
                className=" m-3 border rounded-circle"
                size={40}
                style={{ backgroundColor: "#FF0000", padding: "8px" }}
              />
              <FaLinkedin
                className=" m-3 border rounded-circle"
                size={40}
                style={{ backgroundColor: "#0072b1", padding: "8px" }}
              />
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <h5>Products</h5>
            <ul className="list-unstyled">
              <li >
                <Link
                  href={"/Instrument Clusters"}
                  className="text-white text-decoration-none"
                >
                  <MdChevronRight />
                  Instrument Clusters
                </Link>
              </li>
              <li>
                <Link
                  href={"/Instrument Clusters"}
                  className="text-white text-decoration-none"
                >
                  <MdChevronRight /> Infotainment
                </Link>
              </li>
              <li>
                <Link
                  href={"/Instrument Clusters"}
                  className="text-white text-decoration-none"
                >
                  <MdChevronRight /> Displays
                </Link>
              </li>
              <li>
                <Link
                  href={"/Instrument Clusters"}
                  className="text-white text-decoration-none"
                >
                  <MdChevronRight /> Electrification
                </Link>
              </li>
              <li>
                <Link
                  href={"/Instrument Clusters"}
                  className="text-white text-decoration-none"
                >
                  <MdChevronRight /> Domain Controller
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6">
            <h5>Pages</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  href={"/Instrument Clusters"}
                  className="text-white text-decoration-none"
                >
                  <MdChevronRight /> Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/Instrument Clusters"}
                  className="text-white text-decoration-none"
                >
                  <MdChevronRight /> Company
                </Link>
              </li>
              <li>
                <Link
                  href={"/Instrument Clusters"}
                  className="text-white text-decoration-none"
                >
                  <MdChevronRight /> Offering
                </Link>
              </li>
              <li>
                <Link
                  href={"/Instrument Clusters"}
                  className="text-white text-decoration-none"
                >
                  <MdChevronRight /> Career
                </Link>
              </li>
              <li>
                <Link
                  href={"/Instrument Clusters"}
                  className="text-white text-decoration-none"
                >
                  <MdChevronRight /> ContactUS
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6">
            <h5>Contact Us</h5>
            <p>
              <IoLocationOutline />
              &nbsp; Flat No.104, Sri Balaji Apartments, Nimboliadda,
              Himayathnagar, Himayathnagar, Telangana, India, 500027
            </p>
            <p>
              <IoChatbubbleEllipsesOutline />
              &nbsp; Chat with an Expert
            </p>
            <p>
              <IoCall /> +91 9959456647
            </p>
            <p>
              <IoMdMail /> Shaikmuzeef9999@gmail.com
            </p>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 text-center text-white d-flex justify-content-between align-items-center">
            <p>&copy; 2024 All rights reserved.</p>
            <p>Design and Developed by SyntaxArts</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
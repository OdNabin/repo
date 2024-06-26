import React from 'react'
import { FaArrowRight, FaHome } from "react-icons/fa";
const page = () => {
  return (
    <div>
   <div className="about">
        <div className="container">
          <h1>About US</h1>
          <p className="d-flex justify-content-start align-items-center">
            <FaHome className="me-1" /> Home{" "}
            <span className="ms-1">
              <FaArrowRight />
              <b className="ms-1">About us</b>
            </span>
          </p>
        </div>
      </div>

    <h2 className='text-center mb-5 my-5'>AUTOSAR – Software development of ABS ECU</h2>

    <div className="container">
      <div className="row">
       

        <div className="col-md-6 autocare">
        <h2 style={{color:" #964B00"}}>Problem Overview</h2>
        <p>Anti-lock Braking System (ABS) is a safety-critical system in Automotive that prevents the wheels from locking up during braking. ABS interacts with different sensors and actuators at a much faster rate for ensuring safe braking.</p>
        <p> BrownEdge Technology, in collaboration with IIT Madras and our Indian Tier-1 client company, is indigenously designing and developing the Anti-lock Braking System (ABS) from scratch.</p>
        <p>The entire SW is built on AUTOSAR stack and with our collaborated expertise in Model development, Embedded design, Automotive Real-time simulation, MIL&SIL Validation, HIL and Vehicle Testing.</p>
        </div>
        <div className="col-md-6">
          
        </div>
      </div>
    </div>



    <div className="container">
  <h2 style={{color:" #964B00"}}>Challenges  </h2>
  <p style={{fontSize:"20px",color:" #75799b"}}>Major challenges include</p>
  <ul className='list-item'>
    <li>System Response time</li>
    <li>Complex Device Driver development</li>
    <li>Algorithm Optimization</li>
    <li>“R&D” is always a Challenge.</li>

  </ul>
  <h2 style={{color:" #964B00"}}>Approach</h2>
  <p style={{fontSize:"20px",color:" #75799b"}}>Process includes</p>
  <ul className='list-item'>
    <li>Model development</li>
    <li>Realtime simulation environment setup</li>
    <li>SW development on AUTOSAR stack</li>
    <li>MIL, SIL Validation</li>
    <li>HIL & Vehicle Testing</li>

  </ul>

  <h2 style={{color:" #964B00"}}>Challenges  </h2>
  <p>Customer were able to perform various real-time test scenarios on Vehicles and present a complete demonstratable output to OEMs.</p>
    </div>
    </div>

  )
}

export default page

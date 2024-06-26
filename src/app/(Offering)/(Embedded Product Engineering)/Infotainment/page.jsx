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

    <h2 className='text-center mb-5 my-5'>Infotainment</h2>

    <div className="container">
      <div className="row">
      <h2 style={{color:" #964B00"}}>In-Vehicle Infotainment Software Development</h2>

        <div className="col-md-6 autocare">
    
        <p>We have demonstrated a unique competency in developing the key features of IVI systems on different platforms – Linux/Android.</p>
        <ul className='list-item'>
    <li>HMI development</li>
    <li>Application framework/ development</li>
    <li>Middleware software development</li>
    <li>BSP customization/ optimization</li>
    <li>
    Driver development</li>
    <li>Kernel customization/optimization</li>
    <li>Porting IVI software on different hardware & OS platforms.</li>
  </ul>
        </div>
        <div className="col-md-6">
          
        </div>
      </div>
    </div>



<div className="container my-5">
  <div className="row d-flex justify-content-center ">
    <div className="col-md-4">
    <ul className='list-item'>
      <h3 style={{color:" #964B00"}}>Media</h3>
    <li>Audio Streaming</li>
    <li>Media Browsing</li>
    <li>Metadata handling</li>
    <li>Video Streaming</li>
  </ul>
    </div>
    <div className="col-md-4">
    <ul className='list-item'>
      <h3 style={{color:" #964B00"}}>Tuner</h3>
    <li>FM, AM and DAB handling</li>
    <li>Station Seeking and scanning</li>
    <li>Station Metadata handling</li>
  </ul>
    </div>
    <div className="col-md-4">
    <ul className='list-item'>
      <h3 style={{color:" #964B00"}}>Bluetooth (5.1)</h3>
    <li>Connection Management</li>
    <li>HF and A2DP Profile Management</li>
    <li>BT Streaming</li>
  </ul>
    </div>
    <div className="col-md-4">
    <ul className='list-item'>
      <h3 style={{color:" #964B00"}}>Power Management</h3>
    <li>System Power Mode handling</li>
    <li>Power On/Off cycle Management</li>
    <li>Reset Handling</li>
  </ul>
    </div>
    <div className="col-md-4">
    <ul className='list-item'>
      <h3 style={{color:" #964B00"}}>Vehicle Interface</h3>
    <li>CAN Interface</li>
    <li>Signal Filtering</li>
    <li>Ignition Management</li>
    <li>Temperature control</li>
  </ul>
    </div>
  </div>
</div>


    </div>

  )
}

export default page

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

      <div className="container my-3">
        <h2 className='text-center mb-3'>BOOTLOADER ON CAN</h2>
        <div className="row">
          <div className="col-md-6">
            <p className="p">
            Our CAN Bootloader stack supports flashing ECUs through UDS protocol over the CAN bus.The stack is built keeping security in mind, and various encryption algorithms are integrated into stack to support secure boot. Secure bootloader verifies the authenticity and integrity of user application code before every execution.
            </p>
            <p className="p">
            The stack can be customized to use protocol other than CAN such as TCP/IP and LIN.  
            </p>
            <h6 style={{color:" #964B00"}}>Below are the main features of our solution,</h6>
            <ul className='list-item'>
<li>Low Memory Footprint</li>
<li>Flashing via UDS Protocol</li>
<li>Secure Boot</li>
<li>Dual Bank approach to support rollover during flash interruption</li>
<li>Configurable to incorporate HW specific Security features</li>
<li>Compliant with MISRA Standards</li>
            </ul>
          </div>
            <div className="col-md-6">

            </div>
        </div>
      </div>

      

     
   </div>
  )
}

export default page

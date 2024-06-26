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
        <h2 className='text-center mb-3'>DIAG SOFTWARE STACK</h2>
        <div className="row">
          <div className="col-md-6">
            <p className="p">
            Our UDS Protocol stack is designed to run on tiny microcontrollers with a low memory footprint supporting mandatory limited set of UDS services.
            </p>
            <p className="p">
            Fully customizable to add new services according to customer requirements.  
            </p>
            <p className="p">
            It is compliant with ISO14229 standard and easily integrated with our CAN Stack.
            </p>
            <h6 style={{color:" #964B00"}}>Below are the main features of UDS Stack,</h6>
            <ul className='list-item'>
<li>Low Memory Footprint</li>
<li>Support of ECU Reprogramming</li>
<li>Remote vehicle diagnostics</li>
<li>Fault Detection</li>
<li>Platform Independent</li>
<li>Compliant with MISRA Standards</li>
<li>Use with or without RTOS</li>
<li>Contains UDS Client and UDS Server</li>
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

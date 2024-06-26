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
        <h2 className='text-center mb-3'>CAN SOFTWARE STACK</h2>
        <div className="row">
          <div className="col-md-6">
            <p className="p">
            Our CAN Stack Solution will be an ideal solution for communication with ECU in Automotive CAN Network for products running on a tiny microcontroller.
            </p>
            <p className="p">
            Efficient Memory Utilization is of great Importance because of the necessity to run a complex application on a smaller device, our solution will be a right fit in such a memory-constrained environment as low memory footprint is the core objective of our solution.
            </p>
            <p className="p">
            Fully Customizable according to customer specific requirements with long-term support in Stack integration.
            </p>
            <h6 style={{color:" #964B00"}}>The stack is built around below key objectives to satisfy different use cases</h6>
            <ul className='list-item'>
<li>Low Memory Footprint</li>
<li>Reliability</li>
<li>Easy Portability</li>
<li>Scalability</li>
<li>Maintainability</li>
            </ul>
          </div>
            <div className="col-md-6">

            </div>
        </div>
      </div>

      

      <div className="container">
      <p className="p">
      Complete software is designed as different layers to isolate HW-specific logic from application-specific logic, such an abstraction helps greatly in porting the stack to other platforms with very less development effort.
      </p>
      <p className="p">
      Best Practices are adopted from standard AUTOSAR architecture which in combination with our software design expertise promises a fail proof CAN Stack solution compliant to ISO11898 standards.
      </p>
     <p className="p">
     Fully Customizable according to customer specific requirements with long-term support in Stack integration.
     </p>

     <h6 style={{color:" #964B00"}}>Below are the notable features of our solution,</h6>
     <ul className='list-item'>
<li>Support for CAN Message with payload greater than 8 bytes</li>
<li>Bus Off Handling and Auto recovery</li>
<li>Flow control</li>
<li>Remote sleep</li>
<li>Cyclic Message transmission</li>
<li>Receive Message Timeout Monitoring</li>
<li>Compatible with RTOS and Bare Metal Programming environment</li>
<li>Compliant with MISRA Standards</li>
     </ul>

      </div>
   </div>
  )
}

export default page

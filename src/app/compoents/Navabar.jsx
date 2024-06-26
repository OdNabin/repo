import React, { useState } from 'react';
import { Container, Dropdown, Nav, Navbar, NavItem, NavLink } from 'react-bootstrap';
import Image from 'next/image';
import logo from "../asserts/logo.png";
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const DropdownSubMenu = ({ title, children }) => {
  const [dropdownShow, setDropdownShow] = useState(false);

  const onDropdownEnter = () => {
    setDropdownShow(true);
  };

  const onDropdownLeave = () => {
    setDropdownShow(false);
  };

  return (
    <Dropdown
      onMouseEnter={onDropdownEnter}
      onMouseLeave={onDropdownLeave}
      show={dropdownShow}
      drop="right"
      className="dropend"
    >
      <Dropdown.Toggle as="a" href="#" className="dropdown-item">
        {title}
      </Dropdown.Toggle>
      <Dropdown.Menu>{children}</Dropdown.Menu>
    </Dropdown>
  );
};

const Navbar9 = () => {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <div style={{ position: 'fixed', top: '0', zIndex: '999', width: '100%' }}>
      <Container>
        <Navbar
          expand="lg"
          style={{
            backgroundColor: '#FFF',
            color: '#000',
            borderBottomLeftRadius: '22px',
            borderBottomRightRadius: '22px',
            marginTop: '-10px',
            padding: "0px 15px",
            boxShadow:
      "0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.2)", 
  
          }}
        >
          <Navbar.Brand href="#">
            <Image src={logo} alt="Logo" style={{ width: 'auto', height: '100px' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="mx-auto mb-2 mb-lg-0">
              <NavItem>
                <NavLink className={pathname=="/"?"design":""} href="/" active>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={pathname=="/about"?"design":""} href="/about">About Us</NavLink>
              </NavItem>
              <Dropdown as={NavItem} >
                <Dropdown.Toggle as={NavLink} id="offeringDropdown">
                  Offering
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <DropdownSubMenu title="Embedded Product Engineering">
                    <Dropdown.Item href="/autosar">AUTOSAR</Dropdown.Item>
                    <Dropdown.Item href="/Infotainment">Infotainment</Dropdown.Item>
                    <Dropdown.Item href="/ev-tmc&bms">EV - TMC & BMS</Dropdown.Item>
                  </DropdownSubMenu>


                  <DropdownSubMenu title="Automotive Cyber Security Engineering">
                    <Dropdown.Item href="#">Sub cyber security concept phase</Dropdown.Item>
                    <Dropdown.Item href="#">Product development phase</Dropdown.Item>
                    <Dropdown.Item href="#">Thread analysis and risk assessment methods</Dropdown.Item>
                  </DropdownSubMenu>

                  

                  <DropdownSubMenu title="Training">
                    <Dropdown.Item href="#">Cyber security</Dropdown.Item>
                    <Dropdown.Item href="#">Validation</Dropdown.Item>
                    <Dropdown.Item href="#">System requirements</Dropdown.Item>
                  </DropdownSubMenu>


                  <DropdownSubMenu title="AI & Computer Vision">
                    <Dropdown.Item href="/action-recognition-and-localization">Action Recognition and Localization</Dropdown.Item>
                    <Dropdown.Item href="/attention-maps">Attention Maps</Dropdown.Item>
                  </DropdownSubMenu>

                

                  <DropdownSubMenu title="Tools & Automation">
                    <Dropdown.Item href="#">Data Analytics Tools</Dropdown.Item>
                    <Dropdown.Item href="/test-author">Test Authoring Tool</Dropdown.Item>
                  </DropdownSubMenu>

                 

                  <DropdownSubMenu title="Verification & Validation">
                    <Dropdown.Item href="system-validation">System Validation - ADAS</Dropdown.Item>
                    <Dropdown.Item href="#">Software Testing</Dropdown.Item>
                  </DropdownSubMenu>
                </Dropdown.Menu>
              </Dropdown>
             

             {/* start */}


              <Dropdown as={NavItem} >
                <Dropdown.Toggle as={NavLink} id="offeringDropdown">
                  Solutions
                </Dropdown.Toggle>
                <Dropdown.Menu>
        <Dropdown.Item href="/dms-algorithm">DMS - Algorithm / Computer Vision</Dropdown.Item>
        <Dropdown.Item href="/ev">EV – TMS & BMS</Dropdown.Item>
        <Dropdown.Item href="can-software">Can Stack Software</Dropdown.Item>
        <Dropdown.Item href="/diag-software-stack">Diag Stack Software</Dropdown.Item>
        <Dropdown.Item href="/bootloader-on-can">BootLoader Software</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
         




              <NavItem>
                <NavLink className={pathname=="/career"?"design":""} href="/career">Careers</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={pathname=="/blogs"?"design":""} href="/blogs">Blogs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={pathname=="/contact"?"design":""} href="/contact">Contact Us</NavLink>
              </NavItem>
            </Nav>
            <form className="d-flex">
              <Link href="/signIn">
              <button  className="navbtn" type="submit">&nbsp;Login&nbsp;</button>
              </Link>
            </form>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Navbar9;
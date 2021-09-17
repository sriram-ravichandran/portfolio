import React, { useState }  from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import ParticlesBg from 'particles-bg';
import Typee from './type';
import {Link} from 'react-scroll'
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import Container  from 'react-bootstrap/Container';
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineProject
  
} from "react-icons/ai";


import { CgFileDocument } from "react-icons/cg";



function Header() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);


  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);

    } else {
      updateNavbar(false);

    }
  }

  window.addEventListener("scroll", scrollHandler);

    

    return (

        <div >
        <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
     
    >
      <Container>

        <Navbar.Brand href="/">
          <h3 style={{color:'black'}}>Sr.</h3>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">

            <Nav.Item>
            <Nav.Link 
              as={Link}
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              //onClick={() => updateExpanded(false)}
              
              ><AiOutlineHome style={{ marginBottom: "2px" ,color:'black'}}/><span style={{color:'black'}}>Home</span></Nav.Link>
            </Nav.Item>

            <Nav.Item>
            <Nav.Link 
              as={Link}
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              //onClick={() => updateExpanded(false)}
              
              ><AiOutlineUser style={{ marginBottom: "2px" ,color:'black'}}/><span style={{color:'black'}}>About</span> </Nav.Link>
            </Nav.Item>

            <Nav.Item>
            <Nav.Link 
              as={Link}
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              //onClick={() => updateExpanded(false)}
              
              ><AiOutlineProject style={{ marginBottom: "2px" ,color:'black'}}/><span style={{color:'black'}}>Projects</span> </Nav.Link>
            </Nav.Item>


            <Nav.Item>
            <Nav.Link 
              as={Link}
              activeClass="active"
              to="certifications"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              //onClick={() => updateExpanded(false)}
              
              ><AiOutlineFundProjectionScreen style={{ marginBottom: "2px" ,color:'black'}}/><span style={{color:'black'}}>Certifications</span></Nav.Link>
            </Nav.Item>

            <Nav.Item>
            <Nav.Link 
              as={Link}
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              
              
              ><CgFileDocument style={{ marginBottom: "2px" ,color:'black'}}/><span style={{color:'black'}}>Contact</span></Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

<div style={{borderRadius:25}} id="hero" class="hero route bg-image" >
    
    
<div style={{backgroundColor:'#EBEDEF',background:'transparent',borderRadius: 40}} class="overlay-itro">
<ParticlesBg type="polygon" bg={true} />
</div>
<div class="hero-content display-table">
    
  <div class="table-cell">
      
    <div class="container">
        
      
      <h1 style={{color:'black'}} class="hero-title">Hi There, I'm Sriram <span class='wave' roll='image' aria-labelledby='wave'>👋🏻</span></h1>
      <div style={{padding:15,textAlign:'center'}}/>
      
      <Typee />
      </div>
      


      


      
    </div>
  </div>
</div>
</div>



  
        
    )
}

export default Header;
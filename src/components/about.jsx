import React from 'react';
import facee from '../images/face.jpg'

const Aboutt = () => {
    return( 
      <section id="about" class="about">
      <div style={{fontSize:18,width:'90%',color:'white'}} class="container" data-aos="fade-up">

        

        <div class="row">
          
          <div  class="col-lg-4">
            <img style={{top:'15%',borderRadius:'30%'}} src={facee} class="container responsive my-photo" alt=""/>
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content">

          <div class="section-title">
          <h2 style={{color:'white'}}>About Me</h2>
          <p>I'm a Computer Science student with 1 Year of Experience in Working in React JS Projects</p>
        </div>

            <h3 style={{color:'white'}}>QUALIFICATION</h3>
            <p class="fst-italic">
            <br/>Currently pursuing <span><strong> B.E Computer Science</strong></span> with <span><strong>CGPA - 8.3</strong></span> (As of 4th Semester) in Sri Eshwar College of Engineering
            </p>
            <p class="fst-italic">Completed <span><strong>HSC</strong></span> in Vivek Vidhyalaya Matric Higher Secondary School with <span><strong>73.4%</strong></span></p>
            <p class="fst-italic">Completed <span><strong>SSLC</strong></span> in Vivek Vidhyalaya Matric Higher Secondary School with <span><strong>91.6%</strong></span></p><br/><h3 style={{color:'white'}}>TECHNICAL SKILLS</h3><br/>
            <div class="row">
              <div  class="col-lg-6">
                <ul>
                  <li ><i  class="bi bi-rounded-right"></i>Languages: <span ><strong>C, Python, HTML, CSS, Javascript</strong></span></li>
                  <li><i class="bi bi-rounded-right"></i>Web Frameworks: <span><strong>React JS</strong></span></li>
                  <li><i class="bi bi-rounded-right"></i>Cross Platform Frameworks: <span><strong>React Native</strong></span></li>

                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-rounded-right"></i>Database: <span><strong>MySql</strong></span></li>
                  <li><i class="bi bi-rounded-right"></i>IDE: <span><strong>Visual Studio Code</strong></span></li>
                  <li><i class="bi bi-rounded-right"></i>Other: <span><strong>80WPM in Touch Typing</strong></span></li>
                </ul>
              </div>
            </div>

            <br/><h3 style={{color:'white'}}>INTERNSHIP AND COURSES</h3>
            <p class="fst-italic">
            <br/>Completed <span><strong>Cloud Computing</strong></span> Internship at <span><strong>Smart Knower</strong></span>
            </p>
            <p class="fst-italic">Completed <span><strong>Linux Unhatched</strong></span> at <span><strong>NetAcad</strong></span></p>

          </div>
        </div>

      </div>
    </section>
    )
}

export default Aboutt;
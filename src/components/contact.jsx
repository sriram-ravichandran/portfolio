import React from 'react';
import ParticlesBg from 'particles-bg';
import {
  FaFacebook,
  FaTwitter,FaInstagram,FaLinkedin
  
} from "react-icons/fa";








const Contactt = () => {
    
    
    return(
        <div style={{fontSize:18}}>
        <section  id="contact" class=" bg-image sect-mt4 route"   >
      <div  class="container">  
        <div class="row">  
              <div id="contact" class="box-shadow-full"> 
                <div  class="row">               
                  <div class="col-md-10">
                    <div  class="title-box-2 pt-4 pt-md-0">
                      <h5 style={{color:'white'}} class="title-left">
                        Get in Touch
                      </h5>
                    </div>
                    <div style={{color:'white'}} class="more-info">
                    <ParticlesBg type="circle" num={50} bg={true} />
                      <p class="lead">
                      Trying to Contact? Swing by for a cup of coffee, or leave me a message:
                      </p>
                      <ul class="list-ico">
                        <li><span class="bi bi-envelope"></span> sriramravichandran02@gmail.com</li>
                        <li><span class="bi bi-phone"></span> (+91) 94444 07909</li>
                      </ul>
                    </div>
                    <div class="socials">
                      <ul>
                        <li><a href="https://www.facebook.com/ram7909"><span class="ico-circle"><i ><FaFacebook/></i></span></a></li>
                        <li><a href="https://www.instagram.com/s.r.i.r.a.m/"><span class="ico-circle"><i><FaInstagram/></i></span></a></li>
                        <li><a href="https://twitter.com/_s_r_i_r_a_m_"><span class="ico-circle"><i ><FaTwitter/></i></span></a></li>
                        <li><a href="https://www.linkedin.com/in/sriram-ravichandran/"><span class="ico-circle"><i ><FaLinkedin/></i></span></a></li>
                      </ul>
                    </div>
               
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </section>

<footer>
<div  class="container">
  <div class="row">
    <div class="col-sm-12">
      <div style={{color:'white'}} class="copyright-box">
        <p class="copyright">&copy;<strong> Copyright </strong>. All Rights Reserved</p>
        <div class="credits">
          Designed by Sriram
        </div>
      </div>
    </div>
  </div>
</div>
</footer>

</div>





    )



}

export default Contactt
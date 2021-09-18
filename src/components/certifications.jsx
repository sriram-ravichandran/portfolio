import React from 'react';
import {
  FaLinux,
  FaCloud
} from "react-icons/fa";
 
import{
  SiCplusplus,
  SiPython
} from "react-icons/si"


const Certii = () => {
return(
<section  id="certifications" class="service">
<div style={{fontSize:18}} class="container-fluid">

  <div class="title-box text-center">
    <span  class='title-a'>My Certifications</span>
    
    <div class="line-mf"></div>
  </div>
  
  <div style={{alignItems:'center',justifyContent:'center',}} class='container-fluid'>


  <div style={{alignItems:'center',justifyContent:'center'}} class="row">
    <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
      <div style={{width:220}} class="icon-box">
        <div class="icon"><i ><SiCplusplus/></i></div>
        <h2 class="title">C and C++</h2>

      </div>
    </div>

    <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
      <div style={{width:220}} class="icon-box">
        <div  class="icon"><i><SiPython/></i></div>
        <h2 class="title">Python</h2>

      </div>
    </div>

    <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
      <div style={{width:220}} class="icon-box">
        <div class="icon"><i ><FaLinux/></i></div>
        <h2 class="title">Linux Unhatched</h2>

      </div>
    </div>

    <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
      <div style={{width:220}} class="icon-box">
        <div class="icon"><i ><FaCloud/></i></div>
        <h2 class="title">Cloud Computing</h2>

      </div>
    </div>

    </div>

  </div>

</div>
</section>
 )
}

export default Certii;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header';
import Aboutt from './components/about';
import Projects from './components/projects';
import Contactt from './components/contact';
import Certii from './components/certifications';
import blurr from './images/blur.jpg'


const Home = () => {
    return(<div style={{backgroundColor:'#fff'}} className='container-fluid'>

      <Header/>
      <Aboutt/>
      <Projects/>
      <Certii/>
      <Contactt/>

      </div>
    );


}

export default Home;

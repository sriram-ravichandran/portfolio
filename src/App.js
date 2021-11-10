import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header';
import Aboutt from './components/about';
import Projects from './components/projects';
import Contactt from './components/contact';
import Certii from './components/certifications';
import PacmanLoader from "react-spinners/HashLoader";


const Home = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  
    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  
  // Custom css for loader
  const override = `
  position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -40px;
    margin-left: -40px;
    width: 100px;
    height: 100px;
    
`;
    return(isLoading ?
  
      // If page is still loading then splash screen
      <div style={{top:50}}><PacmanLoader isLoading={isLoading}
        css={override}  size={40} /></div> :
      

    <div style={{backgroundImage: "linear-gradient(to right top, #4c79e1, #0098f0, #00b2ef, #00c8e5, #4ddcd8)" }} className='container-fluid'>    


      <Header/>
      <Aboutt/>
      <Projects/>
      <Certii/>
      <Contactt/>

      </div>
    );


}

export default Home;

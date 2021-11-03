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
    top: 47%;
    left: 49%;
    margin-right: -49%;
    transform: translate(-50%, -47%);
`;
    return(isLoading ?
  
      // If page is still loading then splash screen
      <div style={{top:50}}><PacmanLoader isLoading={isLoading}
        css={override}  size={40} /></div> :
      

    <div style={{backgroundColor: '#3aafa9'}} className='container-fluid'>    


      <Header/>
      <Aboutt/>
      <Projects/>
      <Certii/>
      <Contactt/>

      </div>
    );


}

export default Home;

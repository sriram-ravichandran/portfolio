import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header';
import Aboutt from './components/about';
import Projects from './components/projects';
import Contactt from './components/contact';
import Certii from './components/certifications';
import PacmanLoader from "react-spinners/PacmanLoader";


const Home = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  
    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  
  // Custom css for loader
  const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
`;
    return(isLoading ?
  
      // If page is still loading then splash screen
      <div style={{alignItems:'center',justifyContent:'center',top:'45%',left:'45%',position:'absolute'}}><PacmanLoader color={'#36D7B7'} isLoading={isLoading}
        css={override}  size={50} /></div> :
      

    <div style={{backgroundColor:'#fff'}} className='container-fluid'>


      <Header/>
      <Aboutt/>
      <Projects/>
      <Certii/>
      <Contactt/>

      </div>
    );


}

export default Home;

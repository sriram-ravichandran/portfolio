import React from 'react';
import {
  FaUsers,
  FaRobot,
  FaMoneyCheckAlt,
  FaRegStickyNote,
  FaFilm
  
} from "react-icons/fa";


const Projects = () => {
    return(
        <section id="projects" class="services-mf pt-5 route">
      <div style={{fontSize:18}} class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-box text-center">
              <h3  class="title-a">
                Projects
              </h3>

              <div class="line-mf"></div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="service-box">
              <div class="service-ico">
                <span class="ico-circle"><i ><FaUsers/></i></span>
              </div>
              <div class="service-content">
                <h2 class="s-title">Connect</h2>
                <p class="s-description text-center">
                A Social Media Application built with React JS. The Objective of this Project is to connect the
intercollege students
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-box">
              <div class="service-ico">
                <span class="ico-circle"><i ><FaRobot/></i></span>
              </div>
              <div class="service-content">
                <h2 class="s-title">Voice Assistant With Python</h2>
                <p class="s-description text-center">
                A Virtual Assistant made with Python and integrated with Google Calendar and More API's to accomplish given tasks
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-box">
              <div class="service-ico">
                <span class="ico-circle"><i ><FaRegStickyNote/></i></span>
              </div>
              <div class="service-content">
                <h2 class="s-title">Simple Notes</h2>
                <p class="s-description text-center">
                A Cross Platform App built for Android and iOS using React Native, Which is a Notepad for Shopping list, To-Do list and Notes
                </p>
              </div>
            </div>
          </div>
          <div style={{alignItems:'center',justifyContent:'center'}} class='row'>
          <div class="col-md-4">
            <div class="service-box">
              <div class="service-ico">
                <span class="ico-circle"><i ><FaMoneyCheckAlt/></i></span>
              </div>
              <div class="service-content">
                <h2 class="s-title">Client Management System</h2>
                <p class="s-description text-center">
                A Software used to assist for Tax Filing and Visualize the Tax Filing data in the form of Tables.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-box">
              <div class="service-ico">
                <span class="ico-circle"><i ><FaFilm/></i></span>
              </div>
              <div class="service-content">
                <h2 class="s-title">Movie Database</h2>
                <p class="s-description text-center">
                A Website used to fetch the Details about the Searched Movie, Which includes Genre of the film, Cast and Crew
                </p>
              </div>
            </div>
          </div>

          </div>
        </div>
      </div>
    </section>
    )
}

export default Projects;
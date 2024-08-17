import React from 'react'
import './About.css'
import backgroundAbout from '../images/coderdojo.png';

function About() {

  return (

  <div className='about' id='about'>
  <div class="container-fluid">

   <div class="row">

    <div class="col-sm-6">
     
     <div className="right">
     <img src={backgroundAbout} alt="bg" className='animated'></img>
     </div>
     
    </div>

    <div class="col-sm-6">
    <div className='left'>
    <h1>About BrightMinds: Where Vision Meets Innovation.</h1>
    <p>Discover the essence of creativity and excellence. We're dedicated to shaping the future with cutting-edge technology and unwavering commitment</p>
    <h2>Join us on this journey towards innovation and let’s redefine possibilities together!</h2>
    </div>

    <div className='about-button'>
        <button type="button" class="btn btn-primary me-2">Know More</button>
        <button type="button" class="btn btn-secondary">Explore Tools</button>
        </div>

  </div>

</div>
</div>

  </div>
 
  )
}

export default About
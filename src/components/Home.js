import React from 'react'
import './Home.css'
import backgroundHome from '../images/Home.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    
  return (

    <div className='home' id='home'>

<div class="container-fluid">

    <div class="row">

      <div class="col-sm-6">
        <div className='left'>
        <h1>Welcome to BrightMinds, Where innovation meets brilliance. <br></br> You're<span className='span-h1'> on the path to excellence!</span> </h1>
        <h3>Let's build great stuff together. </h3>
      </div>

        <div className='home-button'>
        <button type="button" class="btn btn-primary me-2">Watch Demo</button>
        <button type="button" class="btn btn-secondary">Join Us</button>
        </div>
      </div>

      <div class="col-sm-6">
         
        <div className="right">
        <img src={backgroundHome} alt="bg" className='animated'></img>
        </div>
        
      </div>

    </div>
  </div>
  
</div>
   
    
   
  )
}

export default Home;
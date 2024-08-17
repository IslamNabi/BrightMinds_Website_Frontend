import React from 'react'
import './Testimonials.css'
import thirdPic from '../images/linda.jpg'
import firstPic from '../images/sm.jpg'
import secondPic from '../images/Michael.jpg'
function Testimonials() {
  return (

    <div className='Testimonials'>


        <div className='card-layout'>

        <div class="card-deck">

  <div class="card">
    <img src={firstPic} class="card-img-top" alt="js logo" />
    <div class="card-body">
      <h5 class="card-title">A True Game-Changer!</h5>
      <p class="card-text">Working with BrightMinds has transformed our business. Their innovative solutions and professional approach helped us reach new heights. The team’s dedication to excellence is unparalleled. We couldn’t be happier with the results!— Samantha R., CEO of TechVision</p>
      <p class="card-text"><small class="text-muted">Last updated 2 days ago</small></p>
    </div>
  </div>

  <div class="card">
    <img src={secondPic} class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Exceptional Service and Support!</h5>
      <p class="card-text">The expertise and support provided by BrightMinds are top-notch. They took the time to understand our needs and delivered a solution that exceeded our expectations. Their commitment to client satisfaction is evident in every interaction.— Michael T., Head of Operations at InnovateX</p>
      <p class="card-text"><small class="text-muted">Last updated 8 mins ago</small></p>
    </div>
  </div>


  <div class="card">
    <img src={thirdPic} class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Highly Recommended!</h5>
      <p class="card-text">BrightMinds delivered beyond our expectations. Their attention to detail, creativity, and professionalism made our project a huge success. We highly recommend them to anyone looking for a reliable and innovative tech partner.
      — Linda K., Co-Founder of FutureTech</p>
      <p class="card-text"><small class="text-muted">Last updated 5 weeks ago</small></p>
    </div>
  </div>
  
</div>

        </div>
    </div>
  )
}

export default Testimonials
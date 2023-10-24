import React from 'react'
import "./courses.css"
import { Data } from './CoursesData'


const Courses = () => {
  return (
      <section className='courses__container '>
          <div className='container'>
            <h2>Claim Your Place in the New Global Digital Workforce</h2>
            <h5>At ALX, our programmes are designed to prepare you for a career in the world’s <br/>fastest growing industries.</h5>
          </div>
          <div className="courses__cards-container container">
              {
                  Data.map((item) => (
                      <div className='course__card' key={item.id}>
                          <div className='course__linkImg'>
                             <img src={item.imgLink} alt={item.alt} />  
                          </div>
                        
                          <h5>{item.title}</h5>
                          <p>{item.duration}</p>
                          <div className='course__links'>
                              <button className='btn'>{item.linkText}</button>
                              <button className='btn'>{item.buttonText}</button>
                          </div>
                      </div>
                  ))
              }
          </div>
          
          
    </section>
  )
}

export default Courses
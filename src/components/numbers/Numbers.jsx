import React from 'react'
import "./numbers.css"

const Numbers = () => {
  return (
    <section className='numbers__container container'>
        <h2>Alx In Numbers</h2> 

        <div className="numbers__counts">
              <div className="count1">
                  <h2>80k</h2>
                  <p>ALX graduates<br/>since 2021</p>
              </div>

              <div className="count1">
                  <h2>85%</h2>
                  <p>6-month <br/>employment rate<br/> for ALX graduates</p>
              </div>

              <div className="count1">
                  <h2>93%</h2>
                  <p>graduate<br/> satisfaction score</p>
              </div>

              <div className="count">
                  <h2>85M</h2>
                  <p>global demand for<br/> tech professionals by <br/>2030</p>
              </div>
              
          </div>

          <div className="numbers__solving">
              <h5>Problem solving skills are more important than the ability to purely write code. ALX created a habit loop of researching, learning, then applying. That, combined with the deadline-driven projects,
                  created a time crunch mentality that pushed us to code at a high-level, international standard.
              </h5>
              
             <div className="avatar__details">
                <div className='avatar__container'>
                    <img  className="avatar" src="https://www.alxafrica.com/wp-content/uploads/2023/05/Smith-Photo-Jilks-Smith-copy-scaled-e1684845178773.jpg" alt="yosef" />
                </div>

                <div className='avatar__desc'>
                    <div><strong><p>Yosef Ayele</p></strong><span><p>| ALX Graduate ‘22</p></span></div>
                    <button className='btn'>Read more</button>
                </div>
            
          </div>

          </div>
          
        
             
    </section>
  )
}

export default Numbers
import React from 'react'
import "./achievers.css"

const Achievers = () => {
  return (
    <div className='achiever'>
          <section className="achievers__container container">
          <div className="achievers__intro">
            <h2>How Learners Like You Are Achieving Their Goals</h2> 

            <button className='btn'>READMORE</button>  
          </div> 

          <div className="achiever__desc">
              <p>ALX helped me unlock my true potential and start to believe in myself.
                  Through the experience, I was able to grow my skill set and identify my
                  definition of success. It helped me to remember who I am and what I stand for.
                  As a result, my outlook on life changed and I became inspired to recognise the
                  contribution I could make as a young person
              </p>

              <h2>Millicent Aluoch, Kenya</h2>

              <div className="avatar__container">
                  <img src=" https://www.alxafrica.com/wp-content/uploads/2023/04/img-millicent.png" className='avatar' alt="" />
              </div>
         </div>
    </section>
    </div>
   
  )
}

export default Achievers
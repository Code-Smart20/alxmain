import React from 'react'

const Achievers = () => {
  return (
      <section className="achievers__container achievers">
          <div className="achievers__intro">
            <h3>How Learners Like You Are Achieving Their Goals</h3> 

            <button>ReADMorE</button>  
          </div> 

          <div className="achiever">
              <p>ALX helped me unlock my true potential and start to believe in myself.
                  Through the experience, I was able to grow my skill set and identify my
                  definition of success. It helped me to remember who I am and what I stand for.
                  As a result, my outlook on life changed and I became inspired to recognise the
                  contribution I could make as a young person
              </p>

              <h5>Millicent Aluoch, Kenya</h5>

              <div className="achiever__photo">
                  <img src=" https://www.alxafrica.com/wp-content/uploads/2023/04/img-millicent.png" alt="" />
              </div>
         </div>
    </section>
  )
}

export default Achievers
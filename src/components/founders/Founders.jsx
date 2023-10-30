import React from 'react'
import "./founders.css"
import { founderData } from './found'


const Founders = () => {
  return (
      <section className="founders__container container">
          <h2>Founded in Silicon Valley. Built for Africa.</h2> 
          
          <p>
              Embark on a rigorous journey that prepares you to succeed in the most in-demand,
              high-growth industries. Through your ALX programme, you will
              gain the job-ready skills and critical competencies to seamlessly navigate the digital economy.
          </p>
          
          <div className="founders__proofs">
              <div className="proof">
                  {
                      founderData.map((item) => (
        
                          <div key={item.id} className='proof__item'>
                              <h2>{item.icon}</h2>

                              <div className="proof__description">
                                  <h2>{item.title}</h2>

                                  <p>{item.desc}</p>
                              </div>
                          </div>
                      ))
                  }
                 
              </div>
                
          </div>

      </section>
  )
}

export default Founders
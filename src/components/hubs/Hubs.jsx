import React from 'react'
import  "./hubs.css"

const Hubs = () => {
  return (
      <section className="hubs__container container">
          
          <div className="hubs__introduction">
              <h5>Our Hubs</h5>
              <h2>Co-working, Connecting and Climbing</h2>
            
              <p>
                  Unlock the key to success and join a community of like-minded individuals
                  in a state-of-the-art co-working environment. Take advantage of high-speed internet,
                  peer support, and a vibrant space to help you thrive.

              </p>
              <p>
                  Our hubs are designed to take your productivity and growth to new heights, where the rigour of online training is
                  deepened through in-person experiences and practised in context. 
              </p>

              <button>Learn More</button>

          </div>
          <div className="hubs__map">
              <img src="https://www.alxafrica.com/wp-content/themes/ALX/images/mask/map.svg" alt="hubimg" />
          </div>
    </section>
  )
}

export default Hubs
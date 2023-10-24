import React from 'react'
import './footer.css'
import { programmes,links,tech} from './programmmes'

const Footer = () => {
  return (
      <footer className='footer'>
          <div className="footer__container container">
              <div className="footer__programmmes">
                  <h5>Progammmes</h5>
                   
                  <div className="footer__programmes-items">
                      {programmes.map((item) => (
                          <h4>{item.prog}</h4>
                     ))} 
                  </div>
              </div>

              <div className="footer__Africa">
                  <h5>Alx Africa</h5>

                  <div className="footer__Africa-links">
                      {
                          links.map((item) => (
                              <h4>{item.text}</h4>
                          ))
                     } 
                  </div> 
              </div>

              <div className="footer__admissions">
                  <h5>Admissions</h5>
                  
                  <div className='footer__admissions-tech'>
                      {
                          tech.map((route) => (
                              <h4>{route.text}</h4> 
                        ))
                      }
                  </div>
              </div>
              <div className="footer__socials">
                  <h3>#doHardThings <span>#Alx Africa</span></h3>
              </div>
          </div>
          
    </footer>
  )
}

export default Footer
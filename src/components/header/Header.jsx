import React, { useState } from 'react'
import "./header.css"


const Header = () => {

    const [navColor, setNavColor] = useState(false)

    //changing navbar when the window scrools more than 100px in the vertical direction
    const handleNavChange = () => {
        if (window.scrollY > 100) {
            setNavColor(true)
        } else {
            setNavColor(false)
        }
    }

    window.addEventListener("scroll", handleNavChange);

  return (
      <div className={`header ${navColor && "headerbg"}`}>
          <div className="header__container container">
              <div className="header__container-img">
                  <img className='headerlogo' src="https://www.alxafrica.com/wp-content/uploads/2022/12/logo-white.svg" alt="" />
              </div>
              <ul className="header__container-navWrapper">
                  <li className="header__container-navitem">
                    <p>About<span></span></p>  
                 </li>
                  <li className="header__container-navitem">
                      <p>Programmes<span></span></p>
                 </li>
                  <li className="header__container-navitem">
                      <p>Admissions<span></span></p>
                 </li>
                  <li className="header__container-navitem">
                     <p>The Alx Journey</p> 
                 </li>
                  <li className="header__container-navitem">
                      <p>WomenX And Tech<span></span></p>
                  </li> 
                  <li className="header__container-navitem">
                      <p>News<span></span></p>
                  </li> 
                  <li className="header__container-navitem">
                      <p>Our Blog<span></span></p>
                  </li> 
              </ul>
          </div>   
    </div>
  )
}

export default Header
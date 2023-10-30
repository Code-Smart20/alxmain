import React, { useState } from 'react'
import "./header.css"
import { NavLink } from 'react-router-dom'





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


    //  showing login and signup dropdowns onclick of the button
    const [nav, showNav] = useState(false);
    
    const handleNav = () => {
        showNav(!nav)
    }

    const closeNav = () => {
        showNav(!nav)
    }
    

    

  return (
      <div className={`header ${navColor && "headerbg"}`}>
          <div className="header__container container">
              
              <div className="header__container-img">
                  <img className='headerlogo' src="https://www.alxafrica.com/wp-content/uploads/2022/12/logo-white.svg" alt="" />
              </div>

              <ul className="header__container-navWrapper">
                  <li className="header__container-navitem">
                    <p><NavLink to="/about">About<span></span></NavLink></p>  
                  </li>
                  
                  <li className="header__container-navitem">
                     <p><NavLink to="/programmes">Programmes<span></span></NavLink></p> 
                  </li>
                  
                  
                  <li className="header__container-navitem">
                      <p><NavLink to="/admissions">Admissions<span></span></NavLink></p> 
                 </li>

                   <li className="header__container-navitem">
                     <p><NavLink to="/journey">Alx Journey<span></span></NavLink></p> 
                  </li>
                 
                  <li className="header__container-navitem">
                      <p><NavLink to="/women_&_tech">Women & Tech<span></span></NavLink></p> 
                  </li> 
                  <li className="header__container-navitem">
                      <p><NavLink to="/news">News<span></span></NavLink></p> 
                  </li> 
                  <li className="header__container-navitem">
                      <p><NavLink to="/blog">Our Blog<span></span></NavLink></p> 
                  </li> 
              </ul>

             
          </div>   
    </div>
  )
}

export default Header
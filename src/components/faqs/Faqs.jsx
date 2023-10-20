import React from 'react'
import "./faqs.css"
import { faqs } from './Faq'


const Faqs = () => {
  return (
      <section className='faqs__container'>
          <h2>FAQS</h2> 
          <div className="faq_container">
              {faqs.map((item)=>(
                  <div key={item.id } className='faq'>
                      <h4>{item.question}<span>{item.icon}</span></h4>
                      <p>{item.answer}</p>
                  </div>
              ))}
          </div>
    </section>
  )
}

export default Faqs
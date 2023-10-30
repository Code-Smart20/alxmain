import React from 'react'
import "./faqs.css"
import { faqs } from './Faq'


const Faqs = () => {
    return (
      <div className="faq">
           <section className='faqs__container container'>
            <h2>FAQS</h2> 
            <div className="faqs__items">
                {faqs.map((item)=>(
                    <div className="faq__item" key={item.id }>
                        <h4>{item.question}<span>{item.icon}</span></h4>
                        <p>{item.answer}</p>
                    </div>
                ))}
            </div>
          </section>
            
      </div>
    
  )
}

export default Faqs
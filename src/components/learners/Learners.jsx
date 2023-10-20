import React from 'react'
import "./learners.css"




const Learners = () => {
    return (
        <section className="learners__container container">
            <div className="learners__item">
                <img src="https://www.alxafrica.com/wp-content/uploads/2023/05/198A1219-scaled.jpg" alt="" />
                <h5>Karibu, ALX 2023 Learners!</h5>
                <button>READ STORY</button>
            </div>

            <div className="learners__item">
                <img src="https://www.alxafrica.com/wp-content/uploads/2023/05/Smith-Photo-Jilks-Smith-copy-scaled-e1684845178773.jpg" alt="" />
                <h5>The Gold Fellowship: Where Career Excellence Is the Norm</h5>
                <button>READ STORY</button>
            </div>

            <div className="learners__item">
                <h5>Meet Our Learners</h5>
                <p>
                    Follow the Journeys of Our Learners & Graduates
                </p>
            </div>

        </section>
    )
}

export default Learners
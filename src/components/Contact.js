import React from 'react'
import './Contact.css'
class Contact extends React.Component {
    render() {
        return (
            <section className="contact" id="contact">
                <div className="contact-container">
                    <h2>Contact Me</h2>
                    <i className="far fa-envelope"></i>
                    <p>My email:</p>
                    <span>hsingh172000@gmail.com</span>
                </div>
            </section>
        )
    }
}

export default Contact
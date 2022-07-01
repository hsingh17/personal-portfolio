import React from 'react'
import './Hero.css'

class Hero extends React.Component {
    render() {
        return (
            <section className="hero" id="hero">
                <h1 className="name">Harjot Singh</h1>
                <h2 className="title">Computer Science Student</h2>
                <div className="socials">
                    <a href="https://github.com/hsingh17" className="github">
                        <img src="./img/github.svg" alt="github"/>
                    </a>
                    <a href="https://www.linkedin.com/in/hlsingh/" className="linkedin">
                        <img src="./img/linkedin.svg" alt="linkedin"/>
                    </a>
                    <a href="./files/Harjot_Singh_Resume.pdf" className="resume">
                        <img src="./img/resume.svg" alt="resume"/>
                    </a>
                </div>
            </section>
        )
    }
}

export default Hero
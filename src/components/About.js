import React from 'react'
import './About.css'

class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        return (
            <section className="about-me" id="about-me">
                <div className="about-me-container">
                    <h2>About Me</h2>
                    <div className="hook">
                        <p>I am a class of 2022 undergraduate at UC Davis majoring in Computer Science. 
                            Currently, I have a wide range of interests as I mostly program to practice technologies
                            I am unexperienced in, so check out my projects to see what I've done!
                        </p>
                    </div>

                    <div className="wrapper">
                        <div className="summary">
                            <h3>Summary</h3>
                            <p>I am seeking a Software Engineering internship, so please email me if you think 
                                I'm a good fit for the position. 
                            </p>

                            <span className="bold">Name:</span> <span className="desc">Harjot Singh</span>
                            <span className="bold">Major:</span> <span className="desc">Computer Science B.S</span>
                            <span className="bold">Date of Birth:</span> <span className="desc">01/17/2000</span>
                            <span className="bold">Expected Graduation Date:</span> <span className="desc">06/2022</span>
                            <span className="bold">Email:</span> <span className="desc">hsingh172000@gmail.com</span>
                        </div>

                        <div className="skills">
                            <h3>Skills</h3>
                            <p>Here's a quick overview of the technologies I've worked with.</p>
                            <div className="skills-svg-container">
                                <img className= "skills-svg" src="./img/cpp.svg" alt="C++"/>
                                <img className= "skills-svg" src="./img/python.svg" alt="Python"/>
                                <img className= "skills-svg" src="./img/js.svg" alt="JS"/>
                                <img className= "skills-svg" src="./img/html.svg" alt="HTML"/>
                                <img className= "skills-svg" src="./img/css.svg" alt="CSS"/>
                                <img className= "skills-svg" src="./img/react.svg" alt="React"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About
import React from 'react'
import './Projects.css'
import ProjectsData from './Projects.json'

class ProjectDesc extends React.Component {
    render() {
        let data = this.props.data
        return (
            <div className="opaque-wrapper">
                <div className="project-desc">
                    <img src={data.image} alt={data.title}/>
                    <h3 className="title">{data.title}</h3>
                    <h3 className="date">{data.date}</h3>
                    <p>{data.description}</p>
                    <div className="skills-container">
                        {data.skills.map(skill => {
                            return <span className="skill">{skill}</span>
                        })}
                    </div>
                    <a href={data.github}>
                        <img src="./img/github.svg" alt="github"/>
                    </a>
                </div>
            </div>
        )
    }
 }


class ProjectTile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isProjectDescVisible : false
        }
    }

    handleClick() {
        this.setState({
            isProjectDescVisible : !this.state.isProjectDescVisible
        })
    }

    render() {
        let data = this.props.data
        let isProjectDescVisible = this.state.isProjectDescVisible
        return (
            <div 
                className="project-img-wrapper" 
                onClick={() => this.handleClick()} 
                data-tooltip={data.title}>
                
                <img className="project-img" src={data.image} alt={data.title}/>
                
                {/* Don't pass in onClick to ProjectDesc component since event bubbling 
                would trigger the onClick twice */}
                {isProjectDescVisible ? <ProjectDesc data={data} /> : null}
            </div>
        )
    }
}

class Projects extends React.Component {
    render() {
        return (
            <section className="projects" id="projects">
                <div className="projects-container">
                    <h2>Projects</h2>
                    <div className="project-tiles">
                        <ProjectTile data={ProjectsData[0]}/>
                        <ProjectTile data={ProjectsData[1]}/>
                        <ProjectTile data={ProjectsData[2]}/>
                        <ProjectTile data={ProjectsData[3]}/>
                        <ProjectTile data={ProjectsData[4]}/>
                        <ProjectTile data={ProjectsData[5]}/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Projects
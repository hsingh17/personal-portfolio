import React from 'react'
import './Navbar.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen : false,
            desktopClass : window.innerWidth <= 760 ? "invisible" : "visible",
            mobileClass : window.innerWidth <= 760 ?  "visible" : "invisible",
            menuClass : "side-menu",
            navClass : ""
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize.bind(this))
        window.addEventListener("scroll", this.handleScroll.bind(this))
    }

    handleResize() {
        this.setState({
            desktopClass : window.innerWidth <= 760 ? "invisible" : "visible",
            mobileClass : window.innerWidth <= 760 ?  "visible" : "invisible",
            menuOpen : (this.state.menuOpen && window.innerWidth <= 760),
            menuClass : (this.state.menuOpen && window.innerWidth <= 760) ? "side-menu open" : "side-menu invisible",
        })
    }

    handleScroll() {
        this.setState({
            navClass : (window.scrollY >= window.innerHeight && !this.state.menuOpen) ? "sticky" : ""
        })
    }

    showMenu(open) {
        this.setState({
            menuOpen : open,
            menuClass : open ? "side-menu open" : "side-menu close",
            navClass : open ? "invisible" : (window.scrollY >= window.innerHeight) ? "sticky" : ""
        })
    }
    
    render() {
        let desktopClass = this.state.desktopClass
        let mobileClass = this.state.mobileClass
        let menuClass = this.state.menuClass
        let navClass= this.state.navClass
        return (
            <div className="wrapper">
                <nav className={navClass}>
                    <a href="#hero"><i className="fas fa-home"></i></a>
                    <a href="#about-me" className={desktopClass}>About Me</a>
                    <a href="#projects" className={desktopClass}>Projects</a>
                    <a href="#contact" className={desktopClass}>Contact</a>
                    <span  
                        className={mobileClass} 
                        onClick={e => {
                            this.showMenu(true)
                        }}>☰</span>
                </nav>
                
                <div className={menuClass}>
                    <ul>
                        <span  
                            className="close-button" 
                            onClick={e => {
                            this.showMenu(false)
                        }}>&times;</span>
                        <a href="#about-me" onClick={e => {this.showMenu(false)}}>About Me</a>
                        <a href="#projects" onClick={e => {this.showMenu(false)}}>Projects</a>
                        <a href="#contact" onClick={e => {this.showMenu(false)}}>Contact</a>
                    </ul>    
                </div>
            </div>
           
        );
    }
}

export default Navbar
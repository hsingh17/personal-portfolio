import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js'
import About from './components/About.js'
import Projects from './components/Projects.js'
import Contact  from './components/Contact.js'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;

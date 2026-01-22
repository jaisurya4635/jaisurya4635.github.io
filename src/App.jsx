import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <p>&copy; 2025 Jaisurya S M. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

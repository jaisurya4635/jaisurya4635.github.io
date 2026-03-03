import './App.css'
import PillNav from './components/PillNav'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="app">
      <PillNav
        items={[
          { label: 'Home', href: '#home' },
          { label: 'About', href: '#about' },
          { label: 'Skills', href: '#skills' },
          { label: 'Projects', href: '#projects' },
          { label: 'Contact', href: '#contact' }
        ]}
        activeHref="#home"
        ease="power2.easeOut"
        baseColor="#0a0b1a"
        pillColor="#818cf8"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#0a0b1a"
        initialLoadAnimation
      />
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

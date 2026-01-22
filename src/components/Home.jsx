import ParticleBackground from './ParticleBackground';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <ParticleBackground />
      <div className="home-content">
        <h1 className="home-title">
          Hi, I'm <span className="highlight">Jaisurya S M</span>
        </h1>
        <h2 className="home-subtitle">MERN Stack Developer | Full-Stack Web Developer</h2>
        <p className="home-intro">
          I build modern, scalable web applications using MongoDB, Express.js, React, and Node.js. 
          I focus on clean UI, powerful backend APIs, and real-world full-stack development.
        </p>
        <div className="home-buttons">
          <a href="https://drive.google.com/file/d/1goTDZ5f1q-JCMEmaYMVcgeNRUpXxiORR/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Resume</a>
          <a href="https://github.com/jaisurya4635" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/jai-surya-b055a2339/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Home;

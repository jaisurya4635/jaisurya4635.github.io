import Hyperspeed from './Hyperspeed';
import DecryptedText from './DecryptedText';

const hyperspeedOptions = {
  onSpeedUp: () => {},
  onSlowDown: () => {},
  distortion: 'mountainDistortion',
  length: 400,
  roadWidth: 9,
  islandWidth: 2,
  lanesPerRoad: 3,
  fov: 90,
  fovSpeedUp: 150,
  speedUp: 2,
  carLightsFade: 0.4,
  totalSideLightSticks: 50,
  lightPairsPerRoadWay: 50,
  shoulderLinesWidthPercentage: 0.05,
  brokenLinesWidthPercentage: 0.1,
  brokenLinesLengthPercentage: 0.5,
  lightStickWidth: [0.12, 0.5],
  lightStickHeight: [1.3, 1.7],
  movingAwaySpeed: [60, 80],
  movingCloserSpeed: [-120, -160],
  carLightsLength: [400 * 0.05, 400 * 0.15],
  carLightsRadius: [0.05, 0.14],
  carWidthPercentage: [0.3, 0.5],
  carShiftX: [-0.2, 0.2],
  carFloorSeparation: [0.05, 1],
  colors: {
    roadColor: 0x080808,
    islandColor: 0x0a0a0a,
    background: 0x000000,
    shoulderLines: 0x555577,
    brokenLines: 0x333355,
    leftCars: [0xff102a, 0xeb383e, 0xff102a],
    rightCars: [0xdadafa, 0xbebae3, 0x8f97e4],
    sticks: 0xdadafa
  }
};

const Home = () => {
  return (
    <section id="home" className="home-section">
      <Hyperspeed effectOptions={hyperspeedOptions} />
      <div className="home-content">
        <h1 className="home-title">
          Hi, I'm{' '}
          <span className="highlight">
            <DecryptedText
              text="Jaisurya S M"
              speed={60}
              maxIterations={15}
              animateOn="view"
              revealDirection="start"
              sequential
            />
          </span>
        </h1>
        <h2 className="home-subtitle">
          <DecryptedText
            text="MERN Stack Developer | Full-Stack Web Developer"
            speed={40}
            maxIterations={12}
            animateOn="view"
            revealDirection="start"
            sequential
          />
        </h2>
        <p className="home-intro">
          I build modern, scalable web applications using MongoDB, Express.js, React, and Node.js. 
          I focus on clean UI, powerful backend APIs, and real-world full-stack development.
        </p>
        <div className="home-buttons">
          <a href="https://drive.google.com/file/d/1goTDZ5f1q-JCMEmaYMVcgeNRUpXxiORR/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View Resume
          </a>
          <a href="https://github.com/jaisurya4635" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/jai-surya-b055a2339/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

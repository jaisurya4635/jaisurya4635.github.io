import { useState } from 'react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const featuredProject = {
    title: "Blog Platform",
    tech: "MERN Stack",
    description: "A high-performance publication engine featuring a custom-built rich text editor, sophisticated content categorization, and real-time social sharing capabilities. Optimized for SEO and developer experience.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Quill"],
    github: "#",
    caseStudy: "#"
  };

  const projects = [
    {
      title: "Job Application Portal",
      icon: "💼",
      tech: ["MERN Stack"],
      description: "Full-featured job management platform with applicant login, resume uploads, and role-based authentication.",
      tags: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/jaisurya4635/CARIEER_PORTAL-MERN.git",
      liveDemo: null
    },
    {
      title: "Food Ordering App",
      icon: "🍕",
      tech: ["MERN Stack"],
      description: "Real-time food ordering app with cart system, secure login, admin panel, and order management.",
      tags: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/jaisurya4635/food-delivery.git",
      liveDemo: null
    },
    {
      title: "CGPA Calculator",
      icon: "📊",
      tech: ["React.js"],
      description: "User-friendly CGPA Calculator for students to calculate cumulative grade point average accurately.",
      tags: ["React.js", "CSS3"],
      github: "https://github.com/jaisurya4635/CGPA.git",
      liveDemo: "https://c-gpa-calculator.app/"
    },
    {
      title: "E-Commerce Platform",
      icon: "🛒",
      tech: ["MERN Stack", "Stripe"],
      description: "Complete e-commerce solution with product catalog, shopping cart, and payment integration.",
      tags: ["React", "Redux", "Node.js", "Stripe"],
      github: "https://github.com/jaisurya4635/Responsive-Web-Page.git",
      liveDemo: "https://jaisuryaportfolio.me/Responsive-Web-Page/"
    },
    {
      title: "Task Management Dashboard",
      icon: "✅",
      tech: ["MERN Stack"],
      description: "Comprehensive task management with drag-and-drop boards, team collaboration, and progress tracking.",
      tags: ["React", "Node.js", "React DnD"],
      github: "https://github.com/jaisurya4635/task-flow.git",
      liveDemo: null
    },
    {
      title: "Weather Dashboard",
      icon: "🌤️",
      tech: ["React", "API"],
      description: "Responsive weather application with forecasts and weather maps using OpenWeather API.",
      tags: ["React", "Chart.js", "API"],
      github: "#",
      liveDemo: "#"
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <span className="section-label">PORTFOLIO</span>
        <h2 className="section-title-dark">Selected Works</h2>
        <p className="section-subtitle">
          A collection of technical challenges I've solved, ranging from full-stack applications to specialized development tools.
        </p>

        {/* Featured Project */}
        <div className="featured-project">
          <div className="featured-preview">
            <div className="preview-mockup">
              <div className="mockup-dots">
                <span></span><span></span><span></span>
              </div>
              <p className="mockup-text">Blog Platform Preview</p>
              <p className="mockup-subtext">content management system</p>
            </div>
          </div>
          <div className="featured-details">
            <span className="featured-badge">FEATURED PROJECT</span>
            <h3 className="featured-title">{featuredProject.title}</h3>
            <span className="featured-tech">{featuredProject.tech}</span>
            <p className="featured-description">{featuredProject.description}</p>
            <div className="featured-tags">
              {featuredProject.tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>

          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid-dark">
          {visibleProjects.map((project, index) => (
            <div key={index} className="project-card-dark">
              <div className="card-icon-dark">{project.icon}</div>
              <h3 className="card-title-dark">{project.title}</h3>
              <p className="card-desc-dark">{project.description}</p>
              <div className="card-tags-dark">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag-sm">{tag}</span>
                ))}
              </div>
              <div className="card-links-dark">
                {project.liveDemo && (
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="card-link">LIVE DEMO</a>
                )}
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="card-link">GITHUB</a>
              </div>
            </div>
          ))}
        </div>

        <div className="browse-more-container">
          <button className="browse-more-btn" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show Less' : 'Browse More →'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

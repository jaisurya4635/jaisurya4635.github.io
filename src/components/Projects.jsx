import { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Job Application Portal",
      icon: "💼",
      tech: "MERN Stack",
      description: "A full-featured job management platform with applicant login, resume uploads, admin dashboard, and role-based authentication.",
      techStack: "React, Node.js, Express.js, MongoDB, JWT",
      features: [
        "Job listing & application",
        "Resume upload",
        "Admin dashboard",
        "Secure REST APIs"
      ],
      github: "https://github.com/jaisurya4635/CARIEER_PORTAL-MERN.git"
    },
    {
      title: "Food Ordering App",
      icon: "🍕",
      tech: "MERN Stack",
      description: "A real-time food ordering app featuring cart system, secure login, admin panel, and order management.",
      techStack: "React, Node.js, MongoDB",
      features: [
        "Cart system",
        "User authentication",
        "Order tracking",
        "Admin controls"
      ],
      github: "#"
    },
    {
      title: "Stripe Payment App",
      icon: "💳",
      tech: "Upcoming Project",
      description: "A payment-enabled application integrating Stripe Checkout for secure transactions.",
      techStack: "React / Node.js / Stripe API",
      features: [
        "Payment Gateway Integration",
        "Subscription Billing",
        "Webhooks & secure backend"
      ],
      github: "#",
      upcoming: true
    }
  ];

  return (
    <>
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`project-card ${project.upcoming ? 'upcoming' : ''}`}
                onClick={() => setSelectedProject(project)}
              >
                {project.upcoming && <span className="upcoming-badge">Upcoming</span>}
                <div className="project-icon">{project.icon}</div>
                <h3 className="project-title">{project.title}</h3>
                <span className="project-tech">({project.tech})</span>
                <p className="project-description">{project.description}</p>
                <p className="project-stack"><strong>Tech:</strong> {project.techStack}</p>
                <div className="project-features">
                  <strong>Features:</strong>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-small" onClick={(e) => e.stopPropagation()}>GitHub</a>
                  <button className="btn btn-small btn-details">More Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>&times;</button>
            <div className="modal-header">
              <div className="modal-icon">{selectedProject.icon}</div>
              <h2>{selectedProject.title}</h2>
              {selectedProject.upcoming && <span className="upcoming-badge">Upcoming</span>}
            </div>
            <div className="modal-body">
              <div className="modal-section">
                <h3>Technology</h3>
                <p className="modal-tech">{selectedProject.tech}</p>
              </div>
              <div className="modal-section">
                <h3>Description</h3>
                <p>{selectedProject.description}</p>
              </div>
              <div className="modal-section">
                <h3>Tech Stack</h3>
                <p>{selectedProject.techStack}</p>
              </div>
              <div className="modal-section">
                <h3>Key Features</h3>
                <ul className="modal-features-list">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="modal-actions">
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  View on GitHub
                </a>
                <button className="btn btn-secondary" onClick={() => setSelectedProject(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;

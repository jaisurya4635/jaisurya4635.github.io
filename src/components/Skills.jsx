import { useState } from 'react';

const Skills = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const skillCategories = [
    {
      category: "Languages",
      icon: "💻",
      skills: ["JavaScript (ES6+)", "HTML5", "CSS3", "Java"]
    },
    {
      category: "Frontend",
      icon: "🎨",
      skills: ["React.js", "Tailwind CSS", "Bootstrap"]
    },
    {
      category: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Express.js"]
    },
    {
      category: "Database",
      icon: "🗄️",
      skills: ["MongoDB", "Mongoose"]
    },
    {
      category: "Tools",
      icon: "🛠️",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Figma"]
    },
    {
      category: "Concepts",
      icon: "🚀",
      skills: ["REST APIs", "Authentication", "JWT", "Deployment", "Responsive UI"]
    }
  ];

  const toggleFlip = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`skill-card-container ${flippedCards[index] ? 'flipped' : ''}`}
              onClick={() => toggleFlip(index)}
            >
              <div className="skill-card-inner">
                <div className="skill-card-front">
                  <div className="skill-icon-large">{category.icon}</div>
                  <h3 className="skill-category-front">{category.category}</h3>
                  <p className="flip-hint">Click to view skills</p>
                </div>
                <div className="skill-card-back">
                  <h3 className="skill-category-back">{category.category}</h3>
                  <ul className="skill-list">
                    {category.skills.map((skill, idx) => (
                      <li key={idx}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

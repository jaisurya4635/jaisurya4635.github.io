const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      icon: "</>",
      iconColor: "#a78bfa",
      skills: [
        { name: "JavaScript (ES6+)", color: "#a78bfa" },
        { name: "HTML5", color: "#a78bfa" },
        { name: "CSS3", color: "#a78bfa" },
        { name: "Java", color: "#a78bfa" }
      ]
    },
    {
      category: "Frontend",
      icon: "⊞",
      iconColor: "#818cf8",
      skills: [
        { name: "React.js", color: "#818cf8" },
        { name: "Tailwind CSS", color: "#818cf8" },
        { name: "Bootstrap", color: "#818cf8" }
      ]
    },
    {
      category: "Backend",
      icon: "☰",
      iconColor: "#22d3ee",
      label: "CORE INFRASTRUCTURE",
      skills: [
        { name: "Node.js", abbr: "JS", color: "#22d3ee" },
        { name: "Express.js", abbr: "EX", color: "#22d3ee" },
        { name: "MongoDB", abbr: "DB", color: "#22d3ee" }
      ]
    },
    {
      category: "Database",
      icon: "🗄",
      iconColor: "#34d399",
      skills: [
        { name: "MongoDB", color: "#34d399" },
        { name: "Mongoose", color: "#34d399" }
      ]
    },
    {
      category: "Tools",
      icon: "⚙",
      iconColor: "#f97316",
      skills: [
        { name: "Git", color: "#f97316" },
        { name: "GitHub", color: "#f97316" },
        { name: "VS Code", color: "#f97316" },
        { name: "Postman", color: "#f97316" },
        { name: "Vercel", color: "#f97316" },
        { name: "Figma", color: "#f97316" }
      ]
    },
    {
      category: "Concepts",
      icon: "◈",
      iconColor: "#ec4899",
      skills: [
        { name: "REST APIs", color: "#ec4899" },
        { name: "Authentication", color: "#ec4899" },
        { name: "JWT", color: "#ec4899" },
        { name: "Deployment", color: "#ec4899" },
        { name: "Responsive UI", color: "#ec4899" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section-dark">
      <div className="container">
        <h2 className="section-title-dark">
          Technical <span className="title-accent">Proficiencies</span>
        </h2>
        <p className="section-subtitle">
          A comprehensive overview of my technological stack and specialized areas of expertise in modern web development.
        </p>
        <div className="skills-grid-dark">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card-dark">
              <div className="skill-card-header">
                <h3 className="skill-category-name">{category.category}</h3>
                <span className="skill-category-icon" style={{ color: category.iconColor }}>
                  {category.icon}
                </span>
              </div>
              <ul className="skill-list-dark">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="skill-item-dark">
                    {skill.abbr ? (
                      <span className="skill-abbr" style={{ background: `${skill.color}22`, color: skill.color }}>{skill.abbr}</span>
                    ) : (
                      <span className="skill-dot" style={{ backgroundColor: skill.color }}></span>
                    )}
                    <span className="skill-name-dark">{skill.name}</span>
                  </li>
                ))}
              </ul>
              {category.label && (
                <span className="skill-section-label" style={{ color: category.iconColor }}>{category.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

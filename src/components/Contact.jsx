const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <p className="contact-intro">
            Let's connect! Feel free to reach out about internships, collaborations, or web development.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📩</span>
              <div>
                <strong>Email</strong>
                <a href="mailto:jaisuryajaisurya623@gmail.com">jaisuryajaisurya623@gmail.com</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🔗</span>
              <div>
                <strong>LinkedIn</strong>
                <a href="https://www.linkedin.com/in/jai-surya-b055a2339/" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/jai-surya-b055a2339
                </a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">💻</span>
              <div>
                <strong>GitHub</strong>
                <a href="https://github.com/jaisurya4635" target="_blank" rel="noopener noreferrer">
                  github.com/jaisurya4635
                </a>
              </div>
            </div>
          </div>
          <p className="contact-footer">Looking forward to connecting with you!</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

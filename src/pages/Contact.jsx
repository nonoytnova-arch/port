function Contact() {
  return (
    <div className="main contact-container">
      <h1 className="contact-title">Get in Touch</h1>

      <div className="contact-card">
        
        {/* EMAIL */}
        <a
          href="mailto:vikasghose182020@gmail.com"
          className="contact-item"
        >
          <span className="contact-icon">📧</span>
          vikasghose182020@gmail.com
        </a>

        {/* GITHUB */}
        <a
          href="https://github.com/nonoytnova-arch"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <span className="contact-icon">🐙</span>
          github.com/nonoytnova-arch
        </a>

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/vikas-ghose-85b410387"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <span className="contact-icon">💼</span>
          https://linkedin.com/in/vikas-ghose-85b410387
        </a>

      </div>
    </div>
  );
}

export default Contact;
import '../../App.css'

function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contact-container">
          <div><h2>Contact Me!</h2></div>
          <div className="contact-text">
            <div className="contact-text"> <i className="fas fa-mobile-alt"></i>850.384.1535</div>
            <div>
              <i className="fas fa-paper-plane"></i>
              <a href="mailto:hfm11295@gmail.com" target="_blank" rel="noreferrer" className="contact-link">hfm11295@gmail.com</a></div>
            <div>
              <i className="fab fa-github"></i>
              <a href="https://github.com/hanfernan" target="_blank" rel="noreferrer" className="contact-link">GitHub</a>
            </div>
            <div>
              <i className="fab fa-linkedin"></i>
              <a
                href="https://www.linkedin.com/in/hannah-fernandes-martin/"
                target="_blank" rel="noreferrer" className="contact-link"
              >LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contact
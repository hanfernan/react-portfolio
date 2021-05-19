import '../../App.css'
import Resume from '../../assets/Hannah_Fernanes_Martin_MERNStack_Res.pdf'


function Contact() {
  return (
    <>
      <div><h2>Contact Me!</h2></div>
      <div>
        <div>850.384.1535</div>
        <div>
          <i className="fas fa-paper-plane"></i>
          <a href="mailto:hfm11295@gmail.com" target="_blank">Email</a></div>
        <div>
          <i className="fab fa-github"></i>
          <a href="https://github.com/hanfernan" target="_blank">GitHub</a>
        </div>
        <div>
          <i className="fab fa-linkedin"></i>
          <a
            href="https://www.linkedin.com/in/hannah-fernandes-martin/"
            target="_blank"
          >LinkedIn</a>
        </div>
        <div>
          <a
            href={Resume}
            target="_blank"
          >Resume</a>
        </div>
      </div>
    </>
  )
}

export default Contact
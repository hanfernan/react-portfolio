import '../../App.css'
import headshot from "../../assets/images/circle-headshot.png"

function About() {
  return (
    <>
      <div>
        <img src={headshot} alt="my headshot" />
      </div>
      <div>
        <p><b>Location:</b> Atlanta, GA</p>
        <p><b>Languages:</b> HTML5, JavaScript, CSS</p>
        <p><b>Frameworks:</b> React, Bootstrap, JQuery</p>
        <p>
          Hi, I'm Hannah! I'm a Junior Web Developer with a detail-oriented
          eye and an excitement for innovation. I have an extensive background
          in art and design and I love problem-solving. I'm excited to work on
          more projects, so please feel free to reach out via my contact info!
          </p>
      </div>
    </>
  )
}

export default About
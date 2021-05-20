import '../../App.css'
import headshot from "../../assets/images/circle-headshot.png"

function About() {
  return (
    <>
      <div className="about">
        <div className="about-container">
          {/* <div> */}
          <img src={headshot} alt="my headshot" className="about-photo" />
          {/* </div> */}
          <div className="about-text">
            <p>
              Hi, I'm Hannah Fernandes-Martin! I'm a MERN Stack Developer with a detail-oriented
              eye and an excitement for innovation. I have an extensive background
              in art and design and I love problem-solving. I'm excited to work on
              more projects, so please feel free to reach out via my contact info!
          </p>
            <br />
            <p><b>Location:</b> Atlanta, GA</p>
            <br />
            <p><b>Languages:</b> HTML5, JavaScript ES6+, CSS3</p>
            <br />
            <p><b>Frameworks and Libraries:</b> React, Bootstrap, JQuery, MySQL, Express, MongoDB</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
import React from "react";
import Container from "../components/Container";
import Card from "../components/Card";
function About() {
    return (
        <Container>
            <Card>
                <p><b>Location:</b> Atlanta, GA</p>
                <p><b>Languages:</b> HTML5, JavaScript, CSS</p>
                <p><b>Frameworks:</b> Bootstrap, JQuery</p>
                <p>
                    Hi, I'm Hannah! I'm a Junior Web Developer with a detail-oriented
                    eye and an excitement for innovation. I have an extensive background
                    in art and design and I love problem-solving. I'm excited to work on
            more projects, so please feel free to reach out via my <span><a href="#contact">contact info</a></span>!
          </p>
            </Card>
        </Container>
    )
}

export default About;
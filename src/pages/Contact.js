import React from "react";
import Container from "../components/Container";
import Card from "../components/Card";

function Contact() {
    return (
        <Container>
            <Card>
                <div><h2>Contact Me!</h2></div>
                <div>
                    <div>850.384.1535</div>
                    <div><a href="mailto:hfm11295@gmail.com" target="_blank">Email</a></div>
                    <div>
                        <a href="https://github.com/hanfernan" target="_blank">GitHub</a>
                    </div>
                    <div>
                        <a
                            href="https://www.linkedin.com/in/hannah-fernandes-martin/"
                            target="_blank"
                        >LinkedIn</a
                        >
                    </div>
                </div>
            </Card>
        </Container>
    )
}

export default Contact;
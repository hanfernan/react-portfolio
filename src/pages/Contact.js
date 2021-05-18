import React from "react";
import Container from "../components/Container";
import Card from "../components/Card";
function Contact() {
    return (
        <Container>
            <Card>
                <div class="heading contact-header"><h2 class="text-dark align-self-center">Contact Me!</h2></div>
                <div class="contact container-fluid d-flex flex-row">
                    <div class="align-self-center p-3">850.384.1535</div>
                    <div class="align-self-center p-3"><a href="mailto:hfm11295@gmail.com" target="_blank">Email</a></div>
                    <div class="align-self-center p-3">
                        <a href="https://github.com/hanfernan" target="_blank">GitHub</a>
                    </div>
                    <div class="p-3 align-self-center p-3">
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
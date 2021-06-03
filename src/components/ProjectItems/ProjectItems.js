import React from "react";
import Card from "../Card/Card"
import "./style.css";
import local from "../../assets/images/the-local.png";
import spaceDash from "../../assets/images/space-dash.png";
import dungeon from "../../assets/images/dungeon-maintenance.png";
import password from "../../assets/images/password-generator.png";
import note from "../../assets/images/note-taker.png";
import code from "../../assets/images/code-quiz.png";
import eCommerce from "../../assets/images/e-commerce.PNG";

const projects = [
    {
        src: local,
        title: "The Local",
        description:"It can be challenging to find out which cool bands are located right in your area. The Local is a place for fans to stay up to date with their favorite bands and discover their new favorite sounds right in their neighborhood. This app is built with React and MySQL ",
        githubLink:"https://github.com/hanfernan/the-local",
        deployedLink:"https://lit-retreat-16918.herokuapp.com/"
    },
    {
        src: spaceDash,
        title: "Space Dashboard",
        description:"Space Dashboard allows space enthusiasts to track various astronomical events, including the weather on Mars, asteroid activity near earth, and natural events on Earth while also taking notes on their findings all in one convenient location.",
        githubLink:"https://github.com/Joshwrightdev/Project-1",
        deployedLink:"https://joshwrightdev.github.io/Project-1/"
    },
    {
        src: dungeon,
        title: "Dungeon Maintenance",
        description:"Dungeon Maintenance allows users to sign up and create and upload their own unique Dungeons and Dragons character ideas that will then be added to a character database.",
        githubLink:"https://github.com/VHarris113/dungeon-maintenance",
        deployedLink:"https://tranquil-castle-20966.herokuapp.com/"
    },
    {
        src: password,
        title: "Password Generator",
        description:"This application allows a user to create a randomly generated password after answering a series of questions.",
        githubLink:"https://github.com/hanfernan/Javascript-Password-Generator",
        deployedLink:"https://hanfernan.github.io/Javascript-Password-Generator/"
    },
    {
        src: note,
        title: "Note Taker",
        description:"This application allows a user to create and locally store notes.",
        githubLink:"https://github.com/hanfernan/note-taker",
        deployedLink:"https://serene-fjord-64440.herokuapp.com/"
    },
    {
        src: code,
        title: "Code Quiz",
        description:"This application tests a user's javascript knowledge with a timed quiz.",
        githubLink:"https://github.com/hanfernan/Code-Quiz",
        deployedLink:"https://hanfernan.github.io/Code-Quiz/"
    },
    {
        src: eCommerce,
        title: "E-Commerce Backend",
        description:"This application can be run in your terminal to manage the items in an e-commerce platform.",
        githubLink:"https://github.com/hanfernan/E-Commerce-Back-End",
        deployedLink:"https://github.com/hanfernan/E-Commerce-Back-End"
    }
]

function ProjectItems() {
    return (
        <div className='cards'>
            <div className="cards__container">
                <div className="cards__wrapper">
                    {projects.map((project, i) => (
                        <Card key={i} {...project} />  
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectItems

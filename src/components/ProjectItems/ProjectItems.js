import React from "react";
import Card from "../Card/Card"
import "./style.css";
import spaceDash from "../../images/space-dash.png";
import dungeon from "../../images/dungeon-maintenance.png";
import password from "../../images/password-generator.png";
import note from "../../images/note-taker.png";
import code from "../../images/code-quiz.png";
import eCommerce from "../../images/e-commerce.PNG";

const projects = [
    {
        src: spaceDash,
        title: "Space Dashboard",
        description:"space dash description"
    },
    {
        src: dungeon,
        title: "Dungeon Maintenance",
        description:""
    },
    {
        src: password,
        title: "Password Generator",
        description:""
    },
    {
        src: note,
        title: "Note Taker",
        description:""
    },
    {
        src: code,
        title: "Code Quiz",
        description:""
    },
    {
        src: eCommerce,
        title: "E-Commerce Backend",
        description:""
    }
]

function ProjectItems() {
    return (
        <div className='cards'>
            <h1>Here's a look at my work:</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    {projects.map((project, i) => (
                        <Card key={i} {...project} />  
                         ))}
                    {/* <ul className="cards__item">
                        <Card 
                        src={projects.src}
                        title={projects.title}
                        description={projects.description}
                        path='/projects'/>
                    </ul> */}
                </div>
            </div>
        </div>
    )
}

export default ProjectItems

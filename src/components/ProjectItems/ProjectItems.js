import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card"
import "./style.css";
import spaceDash from "../../images/space-dash.png";
import dungeon from "../../images/dungeon-maintenance.png";
import password from "../../images/password-generator.png";
import note from "../../images/note-taker.png";
import dungeon from "../../images/dungeon-maintenance.png";
import dungeon from "../../images/dungeon-maintenance.png"

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
        src: spaceDash,
        title: "E-Commerce Backend",
        description:""
    },
    {
        src: note,
        title: "Note Taker",
        description:""
    },
    {
        src: spaceDash,
        title: "Space Dashboard",
        description:""
    }
]

function ProjectItems() {
    return (
        <div className='cards'>
            <h1>Here's a look at my work:</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                        <Card 
                        src='./images/space-dash'
                        text='Space Dashboard Description'
                        path='/projects'/>
                    </ul><ul className="cards__item">
                        <Card 
                        // src=''
                        text='Dungeon Maintenance'
                        path='/projects'/>
                    </ul>
                    <ul className="cards__item">
                        <Card 
                        // src=''
                        text='Password Generator'
                        path='/projects'/>
                    </ul>
                    <ul className="cards__item">
                        <Card 
                        // src=''
                        text='Note Taker'
                        path='/projects'/>
                    </ul>
                    <ul className="cards__item">
                        <Card 
                        // src=''
                        text='E-Commerce'
                        path='/projects'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProjectItems

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card"
import "./style.css";

function ProjectItems() {
    return (
        <div className='cards'>
            <h1>Here's a look at my work:</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                        <Card 
                        // src=''
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

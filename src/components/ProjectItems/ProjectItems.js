import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card"
import "./style.css";

function ProjectItems() {
    return (
        <div className='cards'>
            <h1>Here's a look at my work:</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_item">
                        <Card 
                        // src=''
                        text='Space Dashboard Description'
                        path='/projects'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProjectItems

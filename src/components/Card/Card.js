import React from 'react';
import { Link } from "react-router-dom";

function card(props) {
    return (
        <>
           <li className="cards__item">
               <Link className="cards__item__link" to={props.path}>
                 <figure className="cards__item__pic-wrap" data-category={props.label}>
                     <img src={props.src} alt="Project"
                     className="cards__item__img"/>
                </figure>  
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{props.title}</h5>
                </div>
                <div>
                    <p>{props.description}</p>
                </div>
               </Link>
           </li>
        </>
    )
}

export default card

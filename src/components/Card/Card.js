import React from 'react';
import { Link } from "react-router-dom";

function card() {
    return (
        <>
           <li className="cards_item">
               <Link className="cards_item_link">
                 <figure className="cards_item_pic-wrap">
                     <img src="/" alt="Project 1"
                     className="cards_item_img"/>
                </figure>  
                <div className='cards_item_info'>
                    <h5 className='cards_item_text' />
                </div>
               </Link>
           </li>
        </>
    )
}

export default card
import React from 'react';

function card(props) {
    return (
        <>
            <div className="cards__item">
                <div className="cards__item__link" to={props.deployedLink} target="_blank">
                    <a href={props.deployedLink} target="_blank" className="cards__item__link">
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <img src={props.src} alt="Project"
                            className="cards__item__img" />
                    </figure>
                    </a>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.title}</h5>
                    </div>
                    <div>
                        <p>{props.description}</p>
                        <a href={props.githubLink} target="_"><h5>View Github Repository Here</h5></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default card

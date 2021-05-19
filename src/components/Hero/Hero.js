import React from 'react'
import "./style.css";
import { Button } from '../Button/button'

function Hero() {
    return (
        <div className='hero-container'>
            <h1>Hello!</h1>
            <h3>I'm Hannah! Nice to meet you :-)</h3>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    Drop Me a Line
                </Button>
            </div>
        </div>
    )
}

export default Hero

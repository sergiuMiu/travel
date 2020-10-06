import React from 'react'
import{Button} from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/images/Trees - 12768.mp4" autoPlay loop muted/>
            <h1>ADVENTURE TIME</h1>
            <p> what are you wainting for?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' > GET STARTED</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'  > WATCH TRAILER</Button>
            </div>
        </div>
    )
}

export default HeroSection

import "./HeroImgStyle.css"

import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom"

const HeroImg = () => {
    return (
        <div className="hero">

            <div className="mask">
                <img className="into-img" src={IntroImg} alt="IntroImg" />
            </div>
            <div className="content">
                <p>HI, I'M A PRIYANSH SONI </p>
                <h1>Frontend Developer</h1>
                <div>
                    <Link to="/project" className="btn">PROJECTS</Link>
                    <Link to="/contact" className="btn btn-light">CONTACT</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImg

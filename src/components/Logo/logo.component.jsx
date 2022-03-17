import React from 'react';
import Tilt from 'react-tilt';
import './logo.styles.css';
import brain from '../../static/images/brain-image.png';
const Logo = () => {
    return ( <
        div >
        <
        Tilt className = "Tilt"
        options = {
            { max: 25 } }
        style = {
            { height: 120, width: 120 } } >
        <
        div className = "Tilt-inner" > < img style = {
            { height: 100 } }
        src = { brain }
        alt = "img" / > < /div> <
        /Tilt> <
        /div>
    )
}

export default Logo;
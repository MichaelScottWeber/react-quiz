import React from 'react';
import {Spring} from 'react-spring/renderprops';
import './Intro.css';

const Intro = ({ totalQuestions, title, message, nextQuestion }) => {
    return (
        <div className="intro">
            <Spring
                from={{ marginTop: -500 }}
                to={{ marginTop: 0 }}
            >
                {props => (
                    <div 
                        style={props}
                        className="top-info"
                    >
                        <div className="line"></div>
                        <p>{totalQuestions} Questions</p>
                        <div className="line"></div>
                    </div>
                )}
            </Spring>
            
            <div className="intro-items">
                <h1>{title}</h1>
                <p className="message">{message}</p>
                <div className="button" onClick={nextQuestion}>Begin</div>
            </div>
        </div>
    )
}

export default Intro;
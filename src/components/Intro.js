import React from 'react';
import './Intro.css';

const Intro = (props) => {
    return (
        <div className="intro">
            <div className="top-info">
                <div className="line"></div>
                <p>{props.totalQuestions} Questions</p>
                <div className="line"></div>
            </div>
            <h1>{props.title}</h1>
            <p>{props.message}</p>
            <div className="button" onClick={props.nextQuestion}>Begin</div>
        </div>
    )
}

export default Intro;
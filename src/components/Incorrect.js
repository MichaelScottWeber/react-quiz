import React from 'react';
import {Spring} from 'react-spring/renderprops';
import './Incorrect.css';

const Incorrect = ({ currentQuestion, totalQuestions, image, message, nextQuestion }) => {
    return (
        <div className="incorrect">
            <div className="top-info">
                <div className="line"></div>
                <p>{currentQuestion} of {totalQuestions} </p>
                <div className="line"></div>
            </div>
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
            >
                {props => (
                    <div 
                        style={props}
                        className="img-container"
                    >
                        <img className="img" src={image} />
                    </div>            
                )}
            </Spring>
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}          
            >
                {props => (
                    <p style={props}>{message}</p>
                )}
            </Spring>
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
            >
                {props => (
                    <div 
                        style={props}
                        className="button" 
                        onClick={nextQuestion}
                    >
                        NEXT
                    </div>
                )}
            </Spring>
        </div>
    )
}

export default Incorrect;
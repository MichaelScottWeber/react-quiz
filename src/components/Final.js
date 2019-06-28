import React from 'react';
import {Spring} from 'react-spring/renderprops';
import './Final.css';

const Final = ({ totalCorrect, totalQuestions, percentCorrect, takeQuizAgain }) => {
    return (
        <div className="final">
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ delay: 200, duration: 1000 }}
            >
                {props => (
                    <div 
                        style={props}
                        className="final-container"
                    >
                        <div className="outline-container">
                            <p>{totalCorrect}/{totalQuestions} Correct</p>
                            <h3>Result: {percentCorrect}%</h3>
                            <div className="final-button" onClick={takeQuizAgain}>
                                TRY AGAIN?
                            </div>
                        </div>
                    </div>                
                )}
            </Spring>
        </div>
    )
}

export default Final;
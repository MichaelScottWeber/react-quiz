import React from 'react';
import './Final.css';

// window.twttr = (function(d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0],
//       t = window.twttr || {};
//     if (d.getElementById(id)) return t;
//     js = d.createElement(s);
//     js.id = id;
//     js.src = "https://platform.twitter.com/widgets.js";
//     fjs.parentNode.insertBefore(js, fjs);
  
//     t._e = [];
//     t.ready = function(f) {
//       t._e.push(f);
//     };
  
//     return t;
//   }(document, "script", "twitter-wjs"));


const Final = (props) => {
    return (
        <div className="final">
            <div className="final-container">
                <div className="outline-container">
                    <p>{props.totalCorrect}/{props.totalQuestions} Correct</p>
                    <h3>Result: {props.percentCorrect}%</h3>
                    <div className="final-button" onClick={props.takeQuizAgain}>
                        TRY AGAIN?
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Final;
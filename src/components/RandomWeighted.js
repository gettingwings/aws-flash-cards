import React from 'react';
import './style.css';

function RandomWeighted(props){
    const question = props.questionData;
    return(
        <div className="flip-card">
            <div className="card-inner">
                <div className="card-back">
                    <div>{question.service}</div>
                    <div>{question.common}</div>
                </div>
                <div className="card-front">
                    <div>{question.cat}</div>
                </div>
            </div>
        </div>
    )
}

export default RandomWeighted;
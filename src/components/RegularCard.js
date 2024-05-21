import React from 'react';
import './style.css';

function RegularCard(props){
    //console.log(props.questionData);
    const question = props.questionData;
    return(
        <div className="flip-card">
            <div className="card-inner">
                <div className="card-back">
                    {question.service}
                </div>
                <div className="card-front" style={{verticalAlign:"middle"}}>
                    <div>{question.desc}</div>
                    <div>{question.cat}</div>
                </div>
            </div>
        </div>
    )
}

export default RegularCard;
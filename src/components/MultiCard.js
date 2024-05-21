import React from 'react';
import './style.css';

function MultiCard(props){
    const question = props.questionData;
    console.log(question);
    const choices = ['a','b', 'c', 'd'];
    const options = question.options.map((option,i)=>{
        return(<li key={i}>  {option}</li>)
    })
    const answerIndex = question.options.indexOf(question.answer);
    const answerLetter = choices[answerIndex];


    return(
        <div className="flip-card">
            <div className="card-inner" >
            <div className="card-front">
                <div style={{paddingBottom:15,textDecoration:"underline"}}>{question.service}</div>
                
                <ol type='a'>{options}</ol>
                </div>
                <div className="card-back">
                    <div>{answerLetter}. {question.answer}</div>
                </div>
            </div>
        </div>
    )
}

export default MultiCard;
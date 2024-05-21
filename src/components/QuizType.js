import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDumbbell, faFileAlt, faFont, faDice} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core'

library.add(faDumbbell);
library.add(faFileAlt);
library.add(faFont);
library.add(faDice);

function QuizType(props){
    return(
          <div className="card w-100 bg-primary p-1" onClick={()=>props.userChoice(props.quizType)}>
              <FontAwesomeIcon icon={props.icon} size="4x"/>
              <span>{props.quizType}</span>
          </div> 
    )
}

export default QuizType;
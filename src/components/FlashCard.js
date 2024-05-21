import React from 'react';
import MultiCard from './MultiCard';
import RegularCard from './RegularCard';
import RandomWeighted from './RandomWeighted';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core'

library.add(faSpinner);

class FlashCard extends React.Component{
    constructor(){
        super();
        this.apiHostRoot = `https://aws-services.robertbunch.dev/services`;
        this.state = {
            flipClass: "",
            questionData: ""
        }
    }

    componentDidMount(){
        //this.newCard();
    }

    flip = e =>{
        let newFlip = this.state.flipClass === ""? "flip" : "";
        this.setState({flipClass:newFlip})
    }

    newCard = () => {
        let path;
        const cardStyle = this.props.cardStyle;

        if((cardStyle==='Random')||(cardStyle==='Regular')){
            path = this.apiHostRoot+'/all';
        }else if(cardStyle==='Weighted'){
            path = this.apiHostRoot+'/weighted';
        }else if(cardStyle==='Multi'){
            path = this.apiHostRoot+'/multi';
        }
        
        axios
            .get(path)
            .then(response=>{
                this.setState({
            questionData:response.data
            })
            this.props.nowReady();
        })
        .catch(err=>console.log(err));
    }

    render(){
        if(!this.props.ready){
            this.newCard();
            return(
            <div className='spinner-wrapper'>
                <FontAwesomeIcon icon="spinner" size="6x" spin/>
            </div>)
        }else{

            const cardStyle = this.props.cardStyle;
            let card;
            if(cardStyle === "Multi"){
                card = <MultiCard questionData={this.state.questionData}/>
            }else if(cardStyle === 'Regular'){
                card = <RegularCard questionData={this.state.questionData}/>
            }else{
                card = <RandomWeighted questionData={this.state.questionData}/>
            }
        return(
            <>
            <div className="row align-items-center card-holder" style={{backgroundColor:'skyblue', padding:'5%', margin:'auto'}}>

                <div onClick={this.flip} className={`col-sm-6 offset-sm-3 card mb-4 ${this.state.flipClass}`} style={{backgroundColor:'transparent',borderWidth:0}}>
                    <p>{this.state.cardStyle}</p>
                   {card}
                </div>

                <div className="col-sm-8 m-auto ">
                <button onClick={this.newCard} className="btn btn-primary btn-lg ">Next Question</button>
                </div>

            </div>
            </>
        )
    }
    }

}

export default FlashCard;
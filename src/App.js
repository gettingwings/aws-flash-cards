import React from 'react';
import QuizBar from './components/QuizBar';
import FlashCard from './components/FlashCard';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      cardStyle: 'Random',
      ready: false
    }
  }

  userChoice = (cardStyle) => {
    this.setState({
      cardStyle,
      ready: false
    })
  }

  nowReady = ()=>{
    this.setState({
      ready: true
    })
  }

  render(){
    //console.log(this.state.cardStyle)
      return(
        <div className="App align-items-center d-flex justify-content-center">
          <div className="row p-5">
            <QuizBar userChoice={this.userChoice}/>
            <div className="col-sm-12" style={{width:'100%',height:60}}></div>
            <FlashCard cardStyle={this.state.cardStyle} nowReady={this.nowReady} ready={this.state.ready}/>
            <div className="col-sm-12" style={{width:'100%',height:60}}></div>
          </div>
        </div>
    )
  }
  
}

export default App;
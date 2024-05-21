import '../App.css';
import QuizType from './QuizType';

function QuizBar(props) {

    const quizArray = [
        {icon: 'dice', type: 'Random'},
        {icon: 'file-alt', type: 'Regular'},
        {icon: 'dumbbell', type: 'Weighted'},
        {icon: 'font', type: 'Multi'}
    ]

    const quiz = quizArray.map((item,i)=>{
        return(
            <li key={i} className='col-sm-2 text-center text-white mx-2'>
                <QuizType icon={item.icon} quizType={item.type} userChoice={props.userChoice}/>
            </li>
        )
    })

  return (
    <div className="App">
      <h1>Choose your study type</h1>
        <ul className='nav nav-pills nav-fill row justify-content-center'>
          {quiz}
        </ul>
    </div>
  );
}

export default QuizBar;

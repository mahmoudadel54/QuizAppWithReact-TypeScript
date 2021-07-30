import React, {useState} from 'react';
import QuestionCard from './components/QuestionCard';
import { Difficulty, fetchQuizQs, NewQuestionState } from './API';
import { GlobalStyle, Wrapper } from './app.styles';
//types
const TOTAL_QS = 10;
// answer object for check
type AnswerObject = {
  question: string;
  answer:string;
  correct:boolean;
  correctAnswer: string;
}
function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<NewQuestionState[]>([]);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [qsNum, setQsNum] = useState(0);
  const [score, setScore] = useState(0);
  const [gameEnded, setGameEnded] = useState(true);
 
  const startQuiz = async()=>{
    setLoading(true);
    setGameEnded(false);
    let fetchedQuestions = await fetchQuizQs(
      TOTAL_QS, Difficulty.EASY
    ) 
    setQuestions(fetchedQuestions)
    setScore(0);
    setUserAnswers([]);
    setQsNum(0);
    setLoading(false);
  }
  const checkAnswerQs = (e: React.MouseEvent<HTMLButtonElement>, answer:string)=>{
    if(!gameEnded){
      //user answers
      // const answer = e.currentTarget.value;  /// here it is e.currentTarget not e.target
      //check answer compared to correct answer
      const isCorrect = answer === questions[qsNum].correct_answer;
      //add score if answer is correct 
      if(isCorrect){
        setScore(prev=>prev+1)
      }
      //save user answer in the answers user array
      const answerObject = {
        question:questions[qsNum].question,
        answer,
        correct:isCorrect,
        correctAnswer:questions[qsNum].correct_answer ,
      } 
      setUserAnswers((prev)=>[...prev, answerObject])
    }else {
      if(qsNum===TOTAL_QS) setGameEnded(true)
    }

  } 
  const nextQs = ()=>{
      const nextQsNumber = qsNum+1;
      if(nextQsNumber===TOTAL_QS) setGameEnded(true)
      else setQsNum(nextQsNumber);
  }
  return (
    <>
    <GlobalStyle />
    <Wrapper>
     <h1>React Quiz App with ts</h1>
     {gameEnded||qsNum+1===TOTAL_QS?
     <button className="startquiz" onClick={startQuiz}>
       Start Quiz
     </button>
    :null}
     {!gameEnded&&qsNum+1!==TOTAL_QS?<p className="quizscore">Score: {score} </p>:null}
     {qsNum+1===TOTAL_QS?<p className="quizscore">{score<5?"You Failed":"You Succeeded"} Your Final Score: {score} of 10 </p>:null}
     {loading?<p>Loading ........</p>:null}
     {!loading&&!gameEnded&&qsNum+1!==TOTAL_QS &&<QuestionCard 
     question={questions[qsNum].question}
     questionNum={qsNum+1}
     totalQsNum={TOTAL_QS}
     answers={questions[qsNum].TotalAnswersOfQs}
     userAnswer={userAnswers? userAnswers[qsNum]:undefined}
     callback={checkAnswerQs}

     />}
     {!gameEnded && !loading && userAnswers.length===qsNum+1 && qsNum!==TOTAL_QS-1?(

       <button className="nextQs" onClick={nextQs}>Next Question</button>
     ):null}
    </Wrapper>
    </>
  );
}

export default App;

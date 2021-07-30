import React from 'react'
import { QSWrapper, ButtonWrapper } from './QuestionCard.styles'

type Props={
    question: string;
    answers: string[];
    callback:any;
    userAnswer:any;
    questionNum:number;
    totalQsNum:number;
}
const QuestionCard:React.FC<Props> = ({question, answers, callback, userAnswer, questionNum, totalQsNum})=> {
    return (
        <QSWrapper>
            <p className="qsnumber">
                Question: {questionNum} / {totalQsNum}
            </p>
            <p className="question">
                {question}
            </p>
            <div className="answers">
                {answers.map((answer, index)=>(
                    <ButtonWrapper 
                     key={index}
                     correct={userAnswer?.correctAnswer===answer}
                     userClicked={userAnswer?.answer===answer}
                     >
                        <button disabled={userAnswer} onClick={(e:React.MouseEvent<HTMLButtonElement>)=>callback(e, answer)}>
                            <span>{answer}</span>
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
        </QSWrapper>
    )
}

export default QuestionCard

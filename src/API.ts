import { shuffleArray } from "./utils";

export type Question = {
    category:string;
    correct_answer:string;
    difficulty:string;
    incorrect_answers: string[];
    question:string;
    type:string;    
}
//I need to combine bet. correct_answer + incorrect_answers in one array to map on them 
//to display all answers for each question
export type NewQuestionState = Question & { TotalAnswersOfQs:string[] }
export enum Difficulty {
    EASY= "easy",
    MEDIUM="medium",
    HARD="hard"
}
export const fetchQuizQs =async ( amount:number, difficulty:Difficulty )=>{
    const apiURL = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const response =await fetch(apiURL)
    const data = await response.json();
    console.log(data.results.map((qs:Question)=>(
        {
            ...qs,
            TotalAnswersOfQs: shuffleArray([...qs.incorrect_answers, qs.correct_answer])
        }
    ))   );
    return data.results.map((qs:Question)=>(
        {
            ...qs,
            TotalAnswersOfQs: shuffleArray([...qs.incorrect_answers, qs.correct_answer])
        }
    ))   
}
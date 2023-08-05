import { useState } from 'react'

import './App.css'
import data from './assets/questions'
import Question from './components/Question';
import QuizQuestion from './components/QuizQuestion';

function App() {

  const [questions, setQuestions] = useState([
    data.map((d, i) => {
      return new QuizQuestion({
        question: d.question,
        correctAnswer: d.answer,
        answer: d.userAnswer,
        answers: d.options,
        type: d.type
      })
    })  
  ]);

  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [res, setRes] = useState({});

  const gradeQuiz = () => {
    console.log("grading quiz...")
    setScore(0);
    let res = [];

    for (let i = 0; i < questions[0].length; i++) {
      res[i] = questions[0][i].isCorrect;
      if (questions[0][i].isCorrect === true) {
        setScore((score) => score + 10)
      }
    }
    setRes(res);
    setAttempts((attempts) => attempts + 1);
  }
 
  return (
    <>
      <div>
         <h1 className="p-12 bg-cyan-300">US Geography Quiz</h1>
       </div>

      {
        data.map((d, i) => {
          return <Question key={i} qNo = {i} data = {d} questions = {questions} showFeedback = {showFeedback} res = {res}/>
        })
      }

      <button 
        type="submit" 
        className="w-full my-3 p-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" 
        onClick={() => {
          gradeQuiz();
          setShowScore(true);
          setShowFeedback(true);
        }}>
        Submit Quiz
      </button>

      <h2 id="totalScore" className={score < 80 ? "text-red-700" : "text-green-700"}> {showScore ? `Your score: ${score}` : null}</h2>
      <h3 id="totalAttempts">{`Total attempts: ${attempts}`}</h3>
    </>
  )
}

export default App

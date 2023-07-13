import { useState } from 'react'

import './App.css'
import data from './assets/questions'
import Question from './components/Question';

function App() {
  // console.log(data);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  
  const [q1Ans, setQ1Ans] = useState("");
  const [q1Correct, setQ1Correct] = useState(false);

  const [q2Ans, setQ2Ans] = useState("");
  const [q2Correct, setQ2Correct] = useState(false);

  const [q3Ans, setQ3Ans] = useState({
    jackson: false,
    franklin: false,
    jefferson: false,
    roosevelt: false
  });
  const [q3Correct, setQ3Correct] = useState(false);

  const [q4Ans, setQ4Ans] = useState("");
  const [q4Correct, setQ4Correct] = useState(false);

  const [q5Ans, setQ5Ans] = useState("");
  const [q5Correct, setQ5Correct] = useState(false);

  const [q6Ans, setQ6Ans] = useState({
    erie: false,
    ontario: false,
    michigan: false,
    huron: false
  });
  const [q6Correct, setQ6Correct] = useState(false);

  const [q7Ans, setQ7Ans] = useState("");
  const [q7Correct, setQ7Correct] = useState(false);

  const [q8Ans, setQ8Ans] = useState("");
  const [q8Correct, setQ8Correct] = useState(false);

  const [q9Ans, setQ9Ans] = useState("");
  const [q9Correct, setQ9Correct] = useState(false);

  const [q10Ans, setQ10Ans] = useState("");
  const [q10Correct, setQ10Correct] = useState(false);

  const rightAnswer = () => {
    setScore((score) => score + 10);
  }

  const gradeQuiz = () => {
    console.log("grading quiz...")
    setScore(0);
    // textbox
    if (q1Ans == answers.textbox[0]){rightAnswer(); setQ1Correct(true)} else {setQ1Correct(false)};
    if (q5Ans == answers.textbox[1]){rightAnswer(); setQ5Correct(true)} else {setQ5Correct(false)};
    if (q9Ans == answers.textbox[2]){rightAnswer(); setQ9Correct(true)} else {setQ9Correct(false)};
    if (q10Ans == answers.textbox[3]){rightAnswer(); setQ10Correct(true)} else {setQ10Correct(false)};

    //dropdown
    if (q2Ans == answers.dropdown[0]){rightAnswer(); setQ2Correct(true)} else {setQ2Correct(false)}; 
    if (q7Ans == answers.dropdown[1]){rightAnswer(); setQ7Correct(true)} else {setQ7Correct(false)}; 

    // checkbox
    if (q3Ans.jefferson == true && q3Ans.roosevelt == true && q3Ans.jackson == false && q3Ans.franklin == false){
      rightAnswer(); 
      setQ3Correct(true);
    } else {
      setQ3Correct(false)
    }; 

    if (q6Ans.erie == true && q6Ans.ontario == true && q6Ans.huron == false && q6Ans.michigan == false){
      rightAnswer(); 
      setQ6Correct(true)
    } else {
      setQ6Correct(false)
    }; 

    //radio
    if (q4Ans == "Rhode Island"){rightAnswer(); setQ4Correct(true)} else {setQ4Correct(false)};
    if (q8Ans == "Hawaii"){rightAnswer(); setQ8Correct(true)} else {setQ8Correct(false)};

    setAttempts((attempts) => attempts + 1);
  }

  return (
    <>
      <div>
         <h1 className="p-12 bg-cyan-300">US Geography Quiz</h1>
       </div>

      <Question data = {data}/>

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

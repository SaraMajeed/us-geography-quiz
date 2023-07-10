import { useState } from 'react'

import './App.css'
import Textbox from './textbox'
import Dropdown from './dropdown'
import Checkbox from './checkbox'
import Radio from './radio'

function App() {
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

  const questions = {
    textbox: ["What is the capital of California?", "What city is the Golden Gate Bridge located?", "What state is the only state that starts with the letter P?", "What California city shares a name with another country?"],
    dropdown: ["What is the longest river?", "What is the lowest point (elevation) in the US?"],
    checkbox: ["What presidents are carved into mount Rushmore?", "Which two lakes are connected by Niagara Falls?"],
    radio: ["What is the smallest US State?", "What US State has the largest number of endangered species?"]
  }

  const answers = {
    textbox: ["sacramento", "san francisco", "pennsylvania", "calexico"],
    dropdown: ["mo", "dv"],
    checkbox: [["Jefferson", "Roosevelt"], ["Erie", "Ontario"]],
    radio: ["Rhode Island", "Hawaii"]
  }

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
      <Textbox 
        qNo = {1} 
        question = {questions.textbox[0]} 
        showFeedback = {showFeedback}
        correct = {q1Correct}
        onChange = {e => {
          setQ1Ans(e.target.value);
        }} 
      />

      <Dropdown 
        qNo = {2} 
        question = {questions.dropdown[0]} 
        options = {{ms: "Mississippi", mo: "Missouri", co: "Colorado", de: "Delaware"}}
        showFeedback = {showFeedback}
        correct = {q2Correct}
        onChange = {e => {
          setQ2Ans(e.target.value);
        }}
      />

      <Checkbox 
        qNo = {3} 
        question = {questions.checkbox[0]} 
        options = {["A. Jackson", "B. Franklin", "T. Jefferson", "T. Roosevelt"]}
        showFeedback = {showFeedback}
        correct = {q3Correct}
        onChange = {() => {
          setQ3Ans({
            jackson: document.getElementById("A. Jackson").checked,
            franklin: document.getElementById("B. Franklin").checked,
            jefferson: document.getElementById("T. Jefferson").checked,
            roosevelt: document.getElementById("T. Roosevelt").checked
          })
        }}
        
      />

      <Radio 
        qNo = {4} 
        question = {questions.radio[0]} 
        options = {["Maine", "Rhode Island", "Maryland", "Delaware"]}
        showFeedback = {showFeedback}
        correct = {q4Correct}
        onChange = {e => {
          setQ4Ans(e.target.value)
        }}
      />

      <Textbox 
        qNo = {5} 
        question = {questions.textbox[1]}
        showFeedback = {showFeedback}
        correct = {q5Correct}
        onChange = {e => {
          setQ5Ans(e.target.value)
        }} 
      />

      <Checkbox 
        qNo = {6} 
        question = {questions.checkbox[1]} 
        options = {["Erie", "Ontario", "Michigan", "Huron"]}
        showFeedback = {showFeedback}
        correct = {q6Correct}
        onChange = {() => {
          setQ6Ans({
            erie: document.getElementById("Erie").checked,
            ontario: document.getElementById("Ontario").checked,
            michigan: document.getElementById("Michigan").checked,
            huron: document.getElementById("Huron").checked
          })
        }}
      />

      <Dropdown 
        qNo = {7} 
        question = {questions.dropdown[1]} 
        options = {
          {dv: "Death Valley, California", 
          no: "New Orleans, Louisiana", 
          co: "Coachella, California", 
          ssb: "Salton Sea Beach, California"}
        }
        showFeedback = {showFeedback}
        correct = {q7Correct}
        onChange = {e => {
          setQ7Ans(e.target.value)
        }}
      />

      <Radio 
        qNo = {8} 
        question = {questions.radio[1]} 
        options = {["Hawaii", "Alaska", "Texas", "Florida"]}
        showFeedback = {showFeedback}
        correct = {q8Correct}
        onChange = {e => {
          setQ8Ans(e.target.value)
        }}
      />

      <Textbox 
        qNo = {9} 
        question = {questions.textbox[2]}
        showFeedback = {showFeedback}
        correct = {q9Correct}
        onChange = {e => {
          setQ9Ans(e.target.value)
        }} 
      />

      <Textbox 
        qNo = {10} 
        question = {questions.textbox[3]}
        showFeedback = {showFeedback}
        correct = {q10Correct}
        onChange = {e => {
          setQ10Ans(e.target.value)
        }} 
      />

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

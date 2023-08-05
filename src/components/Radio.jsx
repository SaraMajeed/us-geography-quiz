import { useState } from 'react'
import '../App.css'
import { TextFeedback, IconFeedback } from './Feedback';
import { RadioOption } from './Option';

function Radio({qNo, question, options, userAnswer, showFeedback, correct}) {

  return (
    <div className="border-2 border p-4 flex-1 flex-col my-2">
    <h3><IconFeedback qNo = {qNo} correct = {correct} showFeedback = {showFeedback}/>{qNo}. {question}</h3>
    <div id={`q${qNo}Choices`} className="flex-1 flex-col">
        <RadioOption qNo={qNo} option = {options[0]} onChange = {userAnswer}/>
        <RadioOption qNo={qNo} option = {options[1]} onChange = {userAnswer}/>
        <RadioOption qNo={qNo} option = {options[2]} onChange = {userAnswer}/>
        <RadioOption qNo={qNo} option = {options[3]} onChange = {userAnswer}/>
    </div>
    <TextFeedback qNo = {qNo} correct = {correct} showFeedback = {showFeedback}/>
  </div>
    
  )
}

export default Radio

import { useState } from 'react'
import '../App.css'
import {TextFeedback, IconFeedback} from './Feedback';

function Dropdown({qNo, question, options, onChange, showFeedback, correct}) {
  const keys = Object.keys(options);

  return (
    <div className="border-2 border p-4">
    <h3><IconFeedback qNo = {qNo} correct = {correct} showFeedback = {showFeedback}/>{qNo}. {question}</h3>
    <select className = "border-2 my-2" name={`Question${qNo}`} id={`q${qNo}`} onChange={onChange}>
      <option value="">Select one</option>
      <option value={keys[0]}>{options[keys[0]]}</option>
      <option value={keys[1]}>{options[keys[1]]}</option>
      <option value={keys[2]}>{options[keys[2]]}</option>
      <option value={keys[3]}>{options[keys[3]]}</option>
    </select>
    <TextFeedback qNo = {qNo} correct = {correct} showFeedback = {showFeedback}/>
  </div>
    
  )
}

export default Dropdown

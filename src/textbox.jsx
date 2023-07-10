import { useState } from 'react'
import './App.css'
import {TextFeedback, IconFeedback} from './feedback';

function Textbox({qNo, question, onChange, showFeedback, correct}) {
  
  return (
    <div className="border-2 p-4 my-2">
        <h3><IconFeedback qNo = {qNo} correct = {correct} showFeedback = {showFeedback}/>{qNo}. {question}</h3>
        <input className = "border-2 my-2" type="text" id={`q${qNo}`} onChange = {onChange}/>
        <TextFeedback qNo = {qNo} correct = {correct} showFeedback = {showFeedback}/>
    </div>
    
  )
}

export default Textbox

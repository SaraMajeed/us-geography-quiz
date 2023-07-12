import { useState } from 'react'
import '../App.css'

export function TextFeedback({qNo, correct, showFeedback}) {
  
  return (
    <div className = {correct ? "bg-green-700 text-white mt-5 rounded" : "bg-red-700 text-white mt-5 rounded"} id={`q${qNo}Feedback`}>{
        showFeedback ? correct ? "Correct!" : "Incorrect!" : null 
    }</div>
    
  )
}

export function IconFeedback({qNo, correct, showFeedback}) {
  
  return (
    <span id={`markImg${qNo}`}>
        {showFeedback ? correct ? <img src='src/images/checkmark.png' alt='Checkmark' /> : <img src='src/images/xmark.png' alt='xmark' /> : null }
    </span>
  )
}


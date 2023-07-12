import { useState } from 'react'
import '../App.css'

export function CheckboxOption({option, onChange}) {
  
  return (
    <div className="flex-1 justify-center my-2">
      <input  type="checkbox" id={option} onChange={onChange}  />
      <label className = "ml-1" htmlFor={option}>{option}</label>
    </div>
    
  )
}

export function RadioOption({qNo, option, onChange}) {
  
  return (
    <div className="flex-1 my-2 justify-center">
        <input type="radio" name={`q${qNo}`} id={option} value={option} onChange={onChange}/>
        <label className = "ml-1" htmlFor={option}>{option}</label>
    </div>
  )
}



import '../App.css'
import { TextFeedback, IconFeedback } from './Feedback';
import { CheckboxOption } from './Option';


function Checkbox({qNo, question, options, userAnswer, showFeedback, correct}) {

  return (
    <div className="border-2 p-4 flex-1 flex-col my-2">
    <h3>
      <IconFeedback qNo = {qNo} correct = {correct} showFeedback = {showFeedback}/>{qNo}. {question}
    </h3>
    <CheckboxOption option = {options[0]} onChange = {userAnswer}/>
    <CheckboxOption option = {options[1]} onChange = {userAnswer} />
    <CheckboxOption option = {options[2]} onChange = {userAnswer} />
    <CheckboxOption option = {options[3]} onChange = {userAnswer} />
    <TextFeedback qNo = {qNo} correct = {correct} showFeedback = {showFeedback}/>
  </div>
    
  )
}

export default Checkbox

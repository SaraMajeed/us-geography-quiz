import Textbox from './Textbox'
import Dropdown from './Dropdown'
import Checkbox from './Checkbox'
import Radio from './Radio'

export default function Question(props) {
    const q = props.data
    const qNo = props.qNo
    const type = q.type;
    const question = q.question;
    const correct = props.res[qNo];
    const options = q.options
    const showFeedback = props.showFeedback

    console.log(props.questions[0][qNo].answer);
    
    if(type === "textbox") {
        return (
            <Textbox
                qNo = {qNo + 1} 
                question = {question}
                correct={correct}
                showFeedback = {showFeedback}
                userAnswer = {(e) => {
                    props.questions[0][qNo].answer = e.target.value;
                }} 
            />
        )
    } else if(type === "dropdown") {
        return (
            <Dropdown 
                qNo = {qNo + 1} 
                question = {question} 
                options = {options}
                correct={correct}
                showFeedback = {props.showFeedback}
                userAnswer = {(e) => {
                    props.questions[0][qNo].answer = e.target.value;
                }} 
            />
        )
    } else if (type === "checkbox") {
            return (<Checkbox 
                qNo = {qNo + 1} 
                question = {question} 
                options = {options}
                correct={correct}
                showFeedback = {props.showFeedback}
                userAnswer = {(e) => {
                    console.log(e.target.id);
                }} 
            />
        )
    } else if (type === "radio") {
        return (
            <Radio 
                qNo = {qNo + 1} 
                question = {question} 
                options = {options}
                correct={correct}
                showFeedback = {props.showFeedback}
                userAnswer = {(e) => {
                    props.questions[0][qNo].answer = e.target.value;
                }} 
            />
        )
    }
}
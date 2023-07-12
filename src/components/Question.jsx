import { useState } from 'react'
import data from '../assets/questions'
import Textbox from './Textbox'
import Dropdown from './Dropdown'
import Checkbox from './Checkbox'
import Radio from './Radio'

export default function Question() {
    const listItems = data.map((d, i) => 
        d.type == "textbox" && 
        <div key={i}>
        <Textbox 
            qNo = {i+1} 
            question = {d.question} 
        />
        </div> ||
        d.type == "dropdown" &&
        <Dropdown 
            qNo = {i+1} 
            question = {d.question} 
            options = {d.options}
        /> ||
        d.type == "checkbox" && 
        <Checkbox 
            qNo = {i+1} 
            question = {d.question} 
            options = {d.options}
        /> ||
        d.type == "radio" &&
        <Radio 
            qNo = {i+1} 
            question = {d.question} 
            options = {d.options}
        />
    )

    return (
        <>
            {listItems}
        </>
    )
}

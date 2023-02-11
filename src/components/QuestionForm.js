import {useState} from 'react'
import React from 'react'

function handleSubmit(e){
    e.prevent()
    alert(e.target['my_input'].value)
}

export default function QuestionForm() {
    const [inputValue, setInputValue] = useState('Ask your question here')
  return (
    <div>
        {/* <form onSubmit ={handleSubmit}>
            <input type ='text' name = 'my_input' defaultValue='Type your text'/>
            <button type='submit'>Enter</button>
        </form> */}
        <textarea
            value = {inputValue}
            onChange = {(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => alert(inputValue)}>alert me!</button>
      
    </div>
  )
}

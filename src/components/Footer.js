import { useState } from 'react'

import '../styles/Footer.css'
import React from 'react'



export default function Footer() {
    const aYear = new Date().getFullYear()

        const[inputValue, setInputValue] = useState('')
    
        function handleInput(e){
            setInputValue(e.target.value)
    
        }
        function handleBlur(){
            if(!inputValue.includes('@')){
                alert("Attention, there is no @, this is not a valid address 😥")
            }
        }
    
  return (
    <div>
        <footer className="jh-footer">
            <div className='jh-footer-elem'>
            For plant enthusiasts 🌿🌱🌵
            </div>
            <div className='jh-footer-elem'>Subscribe to our newsletter :</div>

        <input
          placeholder = "Enter your mail"
          onChange = {handleInput}
          value = {inputValue}
          onBlur= {handleBlur}
        />
        </footer>
        
      
    </div>
  )
}

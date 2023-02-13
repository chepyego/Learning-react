import { useState, useEffect } from 'react'

import '../styles/Footer.css'
import React from 'react'



export default function Footer({cart, updateCart}) {
    const aYear = new Date().getFullYear()

    //  useEffect(()=>{
    //     console.log("this is a useeffect");

    //  })
    //  useEffect(()=>{
    //     console.log("this is a useeffect");

    //  },[])

    //  useEffect(()=>{
    //     console.log("this is a useeffect");

    //  },[cart])ou 
    //remember to use clear when you want to avoid memory leakage when calling useEffect

     useEffect(()=>{
        return() =>

        console.log("this is returned after footer is deleted");

     },[cart])
     
    

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
        <div>
            copy right : {aYear} designed by jemimah chepyego
        </div>
        </footer>
        
      
    </div>
  )
}

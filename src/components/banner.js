import logo from '../assets/logo.png'
import '../styles/Banner.css'
import React from 'react'

export default function Banner() {
  return (
    <div className='jh-banner'>
        <img src={logo} alt="jungle house" className="jh-logo"/>
       <h1>Jungle house</h1>
    </div>
  )
}




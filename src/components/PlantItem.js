
import CareScale from './CareScale'
import '../styles/plantItem.css'

import React from 'react'
function handleClick(e){
  alert(`You want to buy 1  Great choice 🌱✨`)

}

export default function plantItem({ cover, name, water, light }) {
  function careInfo(){
    alert('this plant require  this care')
  }
    
  return (
    <div className='jh-plant-item'>
        <li  onClick={ careInfo}>
          <img className='jh-plant-cover'src={cover} alt={`${name} cover`} />
                   <div>{name}</div> 
                    <CareScale careType='light'  scaleValue={light} />
                    <CareScale careType='water' scaleValue={water}/>

                  </li>
    
      
    </div>
  )
}

// function handleClick(){
//     console.log('This is a click')
// }

import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'
import '../styles/plantItem.css'
import React from 'react'
// const  plantsOldList = ['Monstera, Ficus Lyrata','Silver Pothos','Yucca', 'Palm']

 
function handleCare(){
  alert('This plant requires')
}

export default function ShoppingList({cart, updateCart}) {
  const plantCategory = plantList.reduce(
        (acc, plant) => 
           acc.includes(plant.category) ? acc: acc.concat(plant.category),
        []
  )

  function addToCart(name, price){
		const currentPlantSaved = cart.find((plant) => plant.name === name)
    if(currentPlantSaved){
      const cartFiltredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      )
      updateCart([
        ...cartFiltredCurrentPlant,
        {name, price, amount: currentPlantSaved.amount + 1}
      ])

    }else{
      updateCart([{...cart,price, amount: 1}])
    }

  }

  
  // function joinCategory(accumulator, currentValue){
  //   return (accumulator + currentValue)
  // }
  // const newOutput = plantCategory.reduce(joinCategory);

  return (

        <div>
              <ul className='jh-plant-category'>
                {plantCategory.map((cat) => (
                  <li key={cat}>{cat}</li>
                ))}

              </ul>
              <ul className='jh-plant-list'>
                {plantList.map(({ id, cover, name, water, light }) => (
                  <div key={id}>

                    <PlantItem onClick={handleCare}key={id} cover={cover}name={name} water={water}
                      light={light} />
                    
                      <button onClick={addToCart}>add</button>
                  </div>
                  
                ))}
              </ul>
            </div>
	)
  
    
}

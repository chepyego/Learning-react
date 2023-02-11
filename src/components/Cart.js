import { useState } from 'react'

import React from 'react'

import '../styles/Cart.css'
export default function Cart({cart, updateCart}) {
  const total = cart.reduce((acc, plantType) => acc + plantType.amount * plantType.price, 0)
  //  reducer trial
  // const trial = cart.reduce(totalFunction,0)
  // function totalFunction(total, num){
  //   return total + num
  // }

  // const  [cart, updateCart] = useState(0)
  const [isOpen, setIsOpen] = useState(true)
    
  return isOpen ? (
		<div className='jh-cart'>
			<button
				className='jh-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Close
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Cart</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}Ksh x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{total}Ksh</h3>
					<button onClick={() => updateCart([])}>Empty the cart</button>
				</div>
			) : (
				<div>Your cart is empty</div>
			)}
		</div>
	) : (
		<div className='jh-cart-closed'>
			<button
				className='jh-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Open Cart
			</button>
		</div>
	)
  }
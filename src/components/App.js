// import logo from './logo.svg';
// import './App.css';
import ShoppingList from "./ShoppingList";
// import Cart from "./Cart";
// import QuestionForm from "./QuestionForm";
import Banner from "./banner";
import Footer from "./Footer";
import Cart from "./Cart";
import { useEffect, useState } from "react";


function App() {
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart? JSON.parse(savedCart) : [])

  const [isFooterShown, updateIsFooterShown] = useState(true)

  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart])
  return (
    <div >
      <Banner/>
      <div className="jh-layout">
        <div className="jh-layout-main">
        {/* <QuestionForm/> */}
         <Cart  cart={cart} updateCart= {updateCart}/>
         <ShoppingList  cart={cart} updateCart={updateCart}/>

        <button onClick={() =>updateIsFooterShown(!isFooterShown)}>
          Hide

        </button>
        {isFooterShown && <Footer cart={cart}/>}
        </div>
        
      </div>

      
      
      
      
    </div>
  );
}

export default App;

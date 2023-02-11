// import logo from './logo.svg';
// import './App.css';
import ShoppingList from "./ShoppingList";
// import Cart from "./Cart";
// import QuestionForm from "./QuestionForm";
import Banner from "./banner";
import Footer from "./Footer";
import Cart from "./Cart";
import { useState } from "react";


function App() {
  const [cart, updateCart] = useState([])
  return (
    <div >
      <Banner/>
      <div className="jh-layout">
        <div>
        {/* <QuestionForm/> */}
         <Cart  cart={cart} updateCart= {updateCart}/>
         <ShoppingList  cart={cart} updateCart={updateCart}/>


        </div>
        
      </div>

      
      <Footer/>
      
      
    </div>
  );
}

export default App;

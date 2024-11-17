
import './App.css';

import FilterContext from './context/FilterContex';
import Navbar from './component/Navbar';

import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Contact from './screens/Contact';
import About from './screens/About';
import Home from './screens/Home';
import ProductList from './screens/productList';
import ProductDetails from './screens/productDetails';
import { useState } from 'react';
import Cart from './screens/Cart';
// import{CartProvider}from "react-use-cart";



function App() {
 
  const [item,setItem]=useState(0);
  const clickAddItem=()=>{
    item=item+1;
    setItem(item);
    console.log(item);
    

  }
  return (
    <>
    
    <Navbar/>
    <FilterContext.Provider value={{items:[],clickAddItem:clickAddItem}}>
    <Routes>
    <Route path="/" element={<Home/>}/>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/products" element={<ProductList/>}/>
     <Route path="/cart/:productId" element={<Cart/>}/>
     <Route path="/products/:productId" element={<ProductDetails/>}/>
    
     
     


    </Routes>
    
    </FilterContext.Provider>
    </>
  );
}

export default App;

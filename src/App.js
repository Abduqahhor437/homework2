import './App.scss';
import React from 'react';
import Header from "./components/header/Header"
import Hero from './components/hero/Hero';
// import Products from './components/products/Products';
import header from "./components/assets/Monitor image (1).png"
import collection from "./components/assets/Monitor image (2).png"
import sugar from "./components/assets/Monitor image (3).png"
import product from "./components/assets/Monitor image (4).png"
import corn from "./components/assets/Monitor image (5).png"
import footer from "./components/assets/Monitor image (6).png"

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Hero  bg={"dodgerblue"} url={header}/>
      <Hero  bg={"violet"} url={collection}/>
      <Hero bg={"violet"} url={sugar}/>
      <Hero bg={"violet"} url={product}/>
      <Hero bg={"violet"} url={corn}/>
      <Hero bg={"violet"} url={footer}/>
      
      {/* <Products/> */}
    </div>
  );
}

export default App;

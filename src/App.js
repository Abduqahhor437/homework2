import './App.scss';
import React from 'react';
import Header from "./components/header/Header"
import Hero from './components/hero/Hero';
// import Products from './components/products/Products';
import iphone16pro from "./components/assets/hero_iphone16pro_avail__fnf0f9x70jiy_medium_2x.jpg"
import iphone16 from "./components/assets/hero_iphone16_avail__euwzls69btea_medium_2x.jpg"
import watch from "./components/assets/promo_apple_watch_ultra2_avail__dyawbjw9cowi_medium_2x.jpg"
import fitnesswatch from "./components/assets/promo_apple_fitness_plus__fvrnctwbcgqe_medium_2x.jpg"
import ipadair from "./components/assets/promo_ipadair_ai__3fv1eitzqv6y_medium_2x.jpg"
import macbook from "./components/assets/promo_macbookpro_announce__gdf98j6tj2ie_medium_2x.jpg"
import applewatch from "./components/assets/hero_apple_watch_series_10_avail_lte__esu66gaw6dci_medium_2x.jpg"
import applephone from "./components/assets/promo_iphone_tradein__bugw15ka691e_medium_2x.jpg"
import applecard from "./components/assets/promo_apple_card__5cm7draujpey_medium_2x.jpg"

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Hero title="iPhone 16 pro" bg={"dodgerblue"} url={iphone16pro}/>
      <Hero title="iPhone 16" bg={"violet"} url={iphone16}/>
      <Hero title="Watch" bg={"violet"} url={watch}/>
      <Hero title="Fitness+" bg={"violet"} url={fitnesswatch}/>
      <Hero title="iPad Air" bg={"violet"} url={ipadair}/>
      <Hero title="MacBook Pro" bg={"violet"} url={macbook}/>
      <Hero title="Apple Watch" bg={"violet"} url={applewatch}/>
      <Hero title="Trade In" bg={"violet"} url={applephone}/>
      <Hero title="Card" bg={"violet"} url={applecard}/>
      
      {/* <Products/> */}
    </div>
  );
}

export default App;

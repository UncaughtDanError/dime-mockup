import React, { useState } from 'react';
import './App.css';
import ProductCard from './ProductCard.js';

function App() {
  const [bundlePrice, setBundlePrice] = useState(44);

  let nextTier;
  let currentTier;
  if (bundlePrice < 100) {
      currentTier = 0;
      nextTier = 10;
    } else if (bundlePrice < 150) {
      currentTier = 10;
      nextTier = 15;
    } else if (bundlePrice < 200) {
      currentTier = 15;
      nextTier = 20;
    } else if (bundlePrice < 250) {
      currentTier = 20;
      nextTier = 25;
    } else {
      currentTier = 25;
      nextTier = null;
    }


  const handleClick = (val) => {
    setBundlePrice(bundlePrice + val);
    
  }

  let percentage;
  if (nextTier === 10) {
    percentage = bundlePrice / 200 * 100;
  } else if (nextTier === 15 || nextTier === 20 || nextTier === 25) {
    percentage = (bundlePrice - 100) / 150 * 45 + 50;
  } else {
    percentage = 95;
  }

  let footerHeader;
  if (currentTier === 25) {
    footerHeader = 'Max Savings Rate Reached!';
  } else {
    footerHeader = <span>Add <span className="bold-number">${nextTier * 10 - bundlePrice}</span> to save <span className="bold-number">{nextTier}%</span></span>;
  }
  return (
    <div className="app">
      <header className="app-header">
        <span className="back-button" >{'<'}</span>
        Add Product
      </header>
      <div className="main">
        <ProductCard name="Creamy Foam Cleanser" handleClick={handleClick} stars={5} reviews={146} price={32} salePrice={null}/>
        <ProductCard name="Volume Mascara" handleClick={handleClick} stars={3.5} reviews={25} price={22} salePrice={null}/>
        <ProductCard name="Daily Refresh" handleClick={handleClick} stars={0} reviews={0} price={68} salePrice={65}/>
        <ProductCard name="Cleansing Balm" handleClick={handleClick} stars={4.7} reviews={184} price={38} salePrice={null}/>       
      </div>
      <div className="footer-title">
        {footerHeader}
      </div>
      <div className="footer">
        <div className='footer-text'>
          <span className="left-align text-label">Bundle Price</span><span className="right-align text-label">Your Savings</span>
        </div>
        <div className='footer-text'>
          <span className="left-align footer-price">${bundlePrice}</span><span className="right-align footer-price">${(bundlePrice * currentTier / 100).toFixed(2)}</span>
        </div>
        <div className='progress-bar'>
          <div className='bar-background'></div>
          <div className='progress' style={{ width: `${percentage}%` }}></div>
          <div className='tier-bar' style={{width: '50%'}}></div>
          <div className='tier-bar' style={{width: '65%'}}></div>
          <div className='tier-bar' style={{width: '80%'}}></div>
          <div className='tier-bar' style={{width: '95%'}}></div>
        </div>
        <div className='labels-container'>
          <div className='labels'>
            <div className='label'>10%</div>
            <div className='label'>15%</div>
            <div className='label'>20%</div>
            <div className='label'>25%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

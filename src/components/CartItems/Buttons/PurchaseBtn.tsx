'use client';
import React from 'react';
import axios from 'axios';

const PurchaseBtn = () => {
  const handlePurchase = async () => {
    const res = await axios.put('http://localhost:3000/api/cart');
    console.log('res', res);
  };

  return (
    <button className="cart-btn purchase" onClick={handlePurchase}>
      Purchase
    </button>
  );
};

export default PurchaseBtn;

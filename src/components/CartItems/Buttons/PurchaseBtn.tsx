'use client';
import React from 'react';
import axios from 'axios';

const PurchaseBtn = () => {
  const handlePurchase = async () => {
    const res = await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`);
    console.log('res', res);
  };

  return (
    <button className="cart-btn purchase" onClick={handlePurchase}>
      Purchase
    </button>
  );
};

export default PurchaseBtn;

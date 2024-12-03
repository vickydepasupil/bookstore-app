'use client';
import React from 'react';
import Image from 'next/image';
import CartIcon from 'public/icons/cart-shopping-solid.svg';
import axios from 'axios';
import { AddToCartBtnProps } from './AddToCartBtnProps';

const AddToCartBtn = ({ id, title, disabled }: AddToCartBtnProps) => {
  const addOrUpdateCartItem = async (id: string) => {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`, { id });
    return res;
  };

  const handleClick = async () => {
    try {
      const res = await addOrUpdateCartItem(id);
      console.log('RESPONSE', res);
    } catch (err) {
      console.log('POST ERROR', err);
    }
  };

  return (
    <button
      className={`cart-btn ${disabled ? 'disabled' : ''}`}
      disabled={disabled}
      onClick={handleClick}
    >
      <div className="btn-icon">
        <Image src={CartIcon} alt={title ? `Add ${title} to cart` : 'Add to cart'} />
      </div>
      <div className="btn-text">Add to cart</div>
    </button>
  );
};

export default AddToCartBtn;

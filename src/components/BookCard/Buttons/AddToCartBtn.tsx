'use client';
import React, { useContext } from 'react';
import Image from 'next/image';
import CartIcon from 'public/icons/cart-shopping-solid.svg';
import axios from 'axios';
import { AddToCartBtnProps } from './AddToCartBtnProps';
import { MenuStateContext } from 'context/MenuState/MenuStateProvider';
import { ToastStateContext } from 'context/ToastState/ToastStateProvider';

const AddToCartBtn = ({ id, title, disabled }: AddToCartBtnProps) => {
  const { setShowBadge } = useContext(MenuStateContext);
  const { setToastTitle } = useContext(ToastStateContext);
  const addOrUpdateCartItem = async (id: string) => {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`, { id });
    return res;
  };

  const handleClick = async () => {
    try {
      const res = await addOrUpdateCartItem(id);
      if (res.status == 200) {
        setShowBadge(true);
        setToastTitle("Item added to cart")
      }
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

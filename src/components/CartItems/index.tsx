import React from 'react';
import Image from 'next/image';
import { CartItemsProps } from './CartItemsProps';
import DeleteBtn from './Buttons/DeleteBtn';

const CartItem = ({ _id, title, cover, price, count }: CartItemsProps) => {
  return (
    <div className="cart-container">
      <div className="image-container">
        <Image
          fill
          sizes="(max-width: 600px): 262px, 288px"
          src={cover}
          alt={title}
          className="book-cover"
          priority
        />
      </div>
      <div className="title">{title}</div>
      <div className="price">
        <div className="label-mobile">Price</div>
        <div>${price}</div>
      </div>
      <div className="count">
        <div className="label-mobile">Qty</div>
        <div>{count}</div>
      </div>
      <div className="total">
        <div className="label-mobile">Item Total</div>
        <div>${count * price}</div>
      </div>
      <div className="delete-btn">
        <DeleteBtn title={title} _id={_id} />
      </div>
    </div>
  );
};

export default CartItem;

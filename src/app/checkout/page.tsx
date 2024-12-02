import React from 'react';
import dbConnection from 'lib/dbConnection';
import Book from 'models/Book';
import CartItemModel from 'models/CartItem';
import CartItem from 'components/CartItems';
import NotFound from 'components/NotFound';
import PurchaseBtn from 'components/CartItems/Buttons/PurchaseBtn';
import { BookCardProps } from 'components/BookCard/BookCardProps';
import { CartItemsProps, CartItemsDbProps } from 'components/CartItems/CartItemsProps';

async function fetchData() {
  try {
    await dbConnection();
    const cartItems = await CartItemModel.find();
    const parsedCartItems = JSON.parse(JSON.stringify(cartItems)) as CartItemsDbProps[];
    const bookIds = parsedCartItems.map((c) => c.bookId);
    const books = await Book.find({
      _id: { $in: bookIds },
    });
    const parsedBooks = JSON.parse(JSON.stringify(books)) as BookCardProps[];

    const final = parsedCartItems.map((c) => {
      const holder = parsedBooks.find((b) => b._id == c.bookId);
      return {
        ...holder,
        ...c,
      };
    });
    return JSON.parse(JSON.stringify(final));
  } catch (err) {
    console.log(err);
  }
}

const CheckoutCart = async () => {
  const cartItems = (await fetchData()) as CartItemsProps[];

  if (Array.isArray(cartItems) && cartItems.length > 0) {
    return (
      <>
        <div className="book-card cart">
          <div className="cart-container header">
            <div className="image-container"></div>
            <div className="title">Title</div>
            <div className="price">Price</div>
            <div className="count">Quantity</div>
            <div className="total">Item Total</div>
            <div className="delete-btn"></div>
          </div>
          {cartItems?.map((i) => {
            return <CartItem key={i._id} {...i} />;
          })}
        </div>
        <div className="purchase-summary">
          <PurchaseBtn />
          <div className="total-price">{`Sum Total: ${cartItems
            .map((i) => i.count * i.price)
            .reduce((a, b) => a + b, 0)
            .toFixed(2)}`}</div>
        </div>
      </>
    );
  } else {
    return <NotFound text="Cart is empty!" />;
  }
};

export default CheckoutCart;

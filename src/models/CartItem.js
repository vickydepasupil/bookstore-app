import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  bookId: { type: String, ref: "Book" },
  count: { type: Number },
});

const CartItem = mongoose.models.CartItem || mongoose.model('CartItem', cartItemSchema);

export default CartItem;

import dbConnection from 'lib/dbConnection';
import Book from 'models/Book';
import CartItem from 'models/CartItem';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    await dbConnection();
    const { id } = await request.json();
    const book = await Book.find({ _id: id });
    const parsedBook = JSON.parse(JSON.stringify(book));
    const cartItem = await CartItem.find({ bookId: id });
    const parsedItem = JSON.parse(JSON.stringify(cartItem));

    if (parsedBook[0].stocks >= (parsedItem[0]?.count || 0) + 1) {
      const res = await CartItem.findOneAndUpdate(
        { bookId: id },
        { $inc: { count: 1 } },
        { upsert: true }
      );
      return NextResponse.json(res, { status: 200 });
    } else {
      return NextResponse.json({ status: 400 });
    }
  } catch (err) {
    console.log('POST ERROR', err);
  }
}

export async function PUT() {
  try {
    await dbConnection();
    const cartItems = await CartItem.find();
    const parsedCartItems = JSON.parse(JSON.stringify(cartItems));

    const bookUpdates = parsedCartItems.map((i) => {
      return {
        bookId: i.bookId,
        decrement: -i.count,
      };
    });

    const operations = bookUpdates.map((update) => ({
      updateOne: {
        filter: { _id: update.bookId },
        update: {
          $inc: { stocks: update.decrement },
        },
      },
    }));

    const result = await Book.bulkWrite(operations);

    return NextResponse.json(result, { status: 200 });
  } catch (err) {
    console.log('PUT ERROR', err);
  }
}

export async function DELETE(request) {
  try {
    await dbConnection();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const res = await CartItem.deleteOne({ _id: id });
    return NextResponse.json(res, { status: 200 });
  } catch (err) {
    console.log('DELETE ERROR', err);
  }
}

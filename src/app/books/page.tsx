import React from 'react';
import dbConnection from 'lib/dbConnection';
import Book from 'models/Book';
import CardList from 'components/CardList';
import NotFound from 'components/NotFound';
import { BookCardProps } from 'components/BookCard/BookCardProps';

async function fetchData(_id: string, title: string) {
  try {
    await dbConnection();
    let books;
    if (_id !== 'no-id') {
      books = await Book.find({ _id });
    } else if (title !== 'no-title') {
      books = await Book.find({ title: { $regex: title, $options: 'i' } });
    }
    return JSON.parse(JSON.stringify(books));
  } catch (err) {
    console.log(err);
  }
}

const BookPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const id = (await searchParams).id || 'no-id';
  const title = (await searchParams).title || 'no-title';
  const bookList = (await fetchData(id.toString(), title.toString())) as BookCardProps[];
  const books = bookList.map((book) => {
    return {
      ...book,
      showDescription: true,
    };
  });

  if (Array.isArray(books) && books?.length > 0) {
    return <CardList books={books} />;
  } else {
    return <NotFound text="Can't find this book." />;
  }
};

export default BookPage;

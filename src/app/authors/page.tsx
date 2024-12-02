import React from 'react';
import dbConnection from 'lib/dbConnection';
import Book from 'models/Book';
import CardList from 'components/CardList';
import NotFound from 'components/NotFound';
import { BookCardProps } from 'components/BookCard/BookCardProps';

async function fetchData(name: string) {
  try {
    await dbConnection();
    const books = await Book.find({ author: { $regex: name, $options: 'i' } });
    return JSON.parse(JSON.stringify(books));
  } catch (err) {
    console.log(err);
  }
}

const AuthorsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const author = (await searchParams).name || 'no-author';
  const book = (await fetchData(author.toString())) as BookCardProps[];

  if (!!book) {
    return (
      <>
        <div className="page-title">{`Books by ${author.toString()}`}</div>
        <CardList books={book} />;
      </>
    );
  } else {
    return <NotFound text="Can't find this author." />;
  }
};

export default AuthorsPage;

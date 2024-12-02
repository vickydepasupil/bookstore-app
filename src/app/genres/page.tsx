import React from 'react';
import dbConnection from 'lib/dbConnection';
import Book from 'models/Book';
import CardList from 'components/CardList';
import NotFound from 'components/NotFound';
import { BookCardProps } from 'components/BookCard/BookCardProps';

async function fetchData(name: string) {
  try {
    await dbConnection();
    const books = await Book.find({ genre: { $regex: name, $options: 'i' } });
    return JSON.parse(JSON.stringify(books));
  } catch (err) {
    console.log(err);
  }
}

const GenresPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const genre = (await searchParams).name || 'no-genre';
  const book = (await fetchData(genre.toString())) as BookCardProps[];

  if (!!book) {
    return (
      <>
        <div className="page-title">{`Books under ${genre.toString()}`}</div>
        <CardList
          books={book}
        />;
      </>
    );
  } else {
    return <NotFound text="Can't find this genre." />;
  }
};

export default GenresPage;

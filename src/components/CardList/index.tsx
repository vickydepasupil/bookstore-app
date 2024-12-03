import React from 'react';
import BookCard from 'components/BookCard';
import { CardListProps } from './CardListProps';

const CardList = async ({ books }: CardListProps) => {
  return (
    <div className="card-list">
      {Array.isArray(books) &&
        books?.length > 0 &&
        books.map((book) => <BookCard key={book?.title} {...book} />)}
    </div>
  );
};

export default CardList;

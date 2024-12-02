import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Chip from 'components/Chip';
import AddToCartBtn from 'components/BookCard/Buttons/AddToCartBtn';
import { BookCardProps } from './BookCardProps';

const BookCard = ({
  _id,
  title,
  author,
  cover,
  description,
  price,
  stocks,
  showDescription,
}: BookCardProps) => {
  return (
    <div className={`book-card ${showDescription ? 'show-description' : ''}`}>
      <Link href={!showDescription ? `/books?id=${_id}` : ''} className="card-link">
        <div className="image-container">
          {stocks <= 0 && (
            <div className="out-of-stock">
              <Chip text="Out of stock" />
            </div>
          )}
          <Image
            fill
            sizes="(max-width: 600px): 262px, 288px"
            src={cover}
            alt={title}
            className="book-cover"
            priority
          />
        </div>
        <div className="text-container">
          <p className="title">{title}</p>
          <p className="author">{author}</p>
          {showDescription && <p className="description">{description}</p>}
          <p className="price">${price}</p>
          {stocks == 1 && <Chip variant="danger" size="sm" text="Last item left!" />}
          {showDescription && <AddToCartBtn disabled={stocks <= 0} id={_id} title={title} />}
        </div>
      </Link>
      {!showDescription && <AddToCartBtn disabled={stocks <= 0} id={_id} title={title} />}
    </div>
  );
};

export default BookCard;

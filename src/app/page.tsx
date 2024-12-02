import dbConnection from 'lib/dbConnection';
import Book from 'models/Book';
import SearchBar from 'components/SearchBar';
import CardList from 'components/CardList';
import { BookCardProps } from 'components/BookCard/BookCardProps';

async function fetchData() {
  try {
    await dbConnection();
    const books = await Book.find();
    return JSON.parse(JSON.stringify(books));
  } catch (err) {
    console.log(err);
  }
}

export default async function Home() {
  const books = (await fetchData()) as BookCardProps[];

  return (
    <main>
      <SearchBar />
      <CardList books={books} />
    </main>
  );
}

import type { Metadata } from 'next';
import dbConnection from 'lib/dbConnection';
import Book from 'models/Book';
import MainHeader from 'components/MainHeader';
import SideBar from 'components/SideBar';
import { MenuStateProvider } from 'context/MenuState/MenuStateProvider';
import 'styles/scss/_app.scss';

export const metadata: Metadata = {
  title: 'Bookstore App',
  description: 'Buy your favorite books!',
};

async function fetchData() {
  try {
    await dbConnection();
    const authors = await Book.distinct('author');
    const genres = await Book.distinct('genre');
    return JSON.parse(JSON.stringify({ data: { authors, genres } }));
  } catch (err) {
    console.log(err);
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sideBarData = await fetchData();

  return (
    <html lang="en">
      <body className="antialiased">
        <MenuStateProvider>
          <MainHeader />
          <SideBar {...sideBarData} />
          {children}
        </MenuStateProvider>
      </body>
    </html>
  );
}

import React from 'react';
import { render } from '@testing-library/react';
import AppPage from 'app/page';

jest.mock('lib/dbConnection', () => jest.fn());
jest.mock('models/Book', () => ({
  find: jest.fn(() => [
    { _id: '1', title: 'Book 1', author: 'Author 1' },
    { _id: '2', title: 'Book 2', author: 'Author 2' },
  ]),
}));
jest.mock('components/SearchBar', () => jest.fn(() => <div data-testid="search-bar"></div>));
jest.mock('components/CardList', () => jest.fn(() => <div data-testid="card-list"></div>));

describe('App Page', () => {
  it('validates that the page is rendered correctly', async () => {
    const { getByTestId } = render(await AppPage());

    expect(getByTestId('search-bar')).toBeTruthy();
    expect(getByTestId('card-list')).toBeTruthy();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import BookCard from 'components/BookCard';
import { mockProps } from './BookCard.mock';

jest.mock('components/Chip', () => jest.fn(() => <div data-testid="chip"></div>));
jest.mock('components/BookCard/Buttons/AddToCartBtn', () =>
  jest.fn(() => <div data-testid="cart-btn"></div>)
);

describe('BookCard', () => {
  it('validates that the component is rendered correctly', () => {
    const { getByRole, getByTestId } = render(<BookCard {...mockProps} />);

    expect(getByRole('link')).toBeTruthy();
    expect(getByTestId('cart-btn')).toBeTruthy();
  });

  it('validates that the chip component is rendered when stocks == 1', () => {
    const { getByRole, getByTestId } = render(<BookCard {...mockProps} stocks={1} />);

    expect(getByRole('link')).toBeTruthy();
    expect(getByTestId('cart-btn')).toBeTruthy();
    expect(getByTestId('chip')).toBeTruthy();
  });

  it('validates that the description is rendered when showDescription == true', () => {
    const { getByTestId, getByText } = render(<BookCard {...mockProps} showDescription={true} />);

    expect(getByTestId('cart-btn')).toBeTruthy();
    expect(getByText(mockProps.description)).toBeTruthy();
  });
});

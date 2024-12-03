import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddToCartBtn from 'components/BookCard/Buttons/AddToCartBtn';

jest.mock('public/icons/cart-shopping-solid.svg', () =>
  jest.fn(() => <svg data-testid="mock-icon"></svg>)
);

var mockFn = jest.fn();
jest.mock('axios', () => ({
  post: mockFn,
}));

describe('AddToCartBtn', () => {
  it('validates that the component is rendered correctly', () => {
    const { getByText, getByRole } = render(<AddToCartBtn title="book-1" id="id-1" />);
    const txt = 'Add to cart';

    expect(getByText(txt)).toBeTruthy();
    expect(getByRole('img')).toBeTruthy();

    const btn = getByRole('button');
    expect(btn).toBeTruthy();
    fireEvent.click(btn);
  });
});

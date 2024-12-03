import React from 'react';
import { render } from '@testing-library/react';
import MainHeader from 'components/MainHeader';

jest.mock('components/MainHeader/Buttons/ToggleBtn', () =>
  jest.fn(() => <div data-testid="mock-toggle-btn"></div>)
);

jest.mock('components/MainHeader/Buttons/HomeButton', () =>
  jest.fn(() => <div data-testid="mock-home-btn"></div>)
);

describe('MainHeader', () => {
  it('validates that the component is rendered', () => {
    const { getByText, getByTestId } = render(<MainHeader />);

    expect(getByText('Bookstore App')).toBeTruthy();
    expect(getByTestId('mock-toggle-btn')).toBeTruthy();
  });
});

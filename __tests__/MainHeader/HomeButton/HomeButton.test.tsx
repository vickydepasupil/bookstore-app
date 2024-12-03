import React from 'react';
import { render } from '@testing-library/react';
import HomeButton from 'components/MainHeader/Buttons/HomeButton';

jest.mock('public/icons/house-solid.svg', () => jest.fn(() => <svg data-testid="home-icon"></svg>));

describe('HomeButton', () => {
  it('validates that the component is rendered correctly', () => {
    const { getByRole } = render(<HomeButton />);

    expect(getByRole('link')).toBeTruthy();
    expect(getByRole('img')).toBeTruthy();
  });
});

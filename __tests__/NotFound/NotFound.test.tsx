import React from 'react';
import { render } from '@testing-library/react';
import NotFound from 'components/NotFound';

jest.mock('public/icons/face-dizzy-regular.svg', () =>
  jest.fn(() => <svg data-testid="mock-icon"></svg>)
);

describe('NotFound', () => {
  it('validates that the component is rendered correctly', () => {
    const text = "Can't find anything.";
    const { getByText, getByAltText } = render(<NotFound text={text} />);

    expect(getByAltText('Not found')).toBeTruthy();
    expect(getByText('Uh oh.')).toBeTruthy();
    expect(getByText(text)).toBeTruthy();
  });
});

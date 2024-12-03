import React from 'react';
import { render } from '@testing-library/react';
import HamburgerIcon from 'components/Icons/Hamburger';

describe('Icons', () => {
  it('validates if component is rendered with correct class', () => {
    const { getByTestId } = render(<HamburgerIcon isOpen={true} />);

    expect(getByTestId('burger-icon')).toBeTruthy();
    expect(getByTestId('burger-icon').getAttribute('class')).toContain('open');
  });

  it('validates if component is rendered without class', () => {
    const { getByTestId } = render(<HamburgerIcon isOpen={false} />);

    expect(getByTestId('burger-icon')).toBeTruthy();
    expect(getByTestId('burger-icon').getAttribute('class')).not.toContain('open');
  });
});

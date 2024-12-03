import React from 'react';
import { render } from '@testing-library/react';
import Badge from 'components/Icons/Badge';

describe('Icons', () => {
  it('validates if component is rendered with correct class', () => {
    const { getByTestId } = render(<Badge show={true} />);

    expect(getByTestId('badge-icon')).toBeTruthy();
    expect(getByTestId('badge-icon').getAttribute('class')).toContain('show');
  });

  it('validates if component is rendered without class', () => {
    const { getByTestId } = render(<Badge show={false} />);

    expect(getByTestId('badge-icon')).toBeTruthy();
    expect(getByTestId('badge-icon').getAttribute('class')).not.toContain('show');
  });
});

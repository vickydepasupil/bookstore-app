import React from 'react';
import Chip from 'components/Chip';
import { render } from '@testing-library/react';
import { mockProps } from './Chip.mock';

describe('Chip', () => {
  it('validates that default chip data is rendered correctly', () => {
    const { text } = mockProps;
    const { getByText } = render(<Chip text={text} />);

    expect(getByText(mockProps.text)).toBeTruthy();
    expect(getByText(mockProps.text).getAttribute('class')).toContain('default');
    expect(getByText(mockProps.text).getAttribute('class')).not.toContain('size-sm');
  });

  it('validates that supplied chip data is rendered correctly', () => {
    const { getByText } = render(<Chip {...mockProps} />);

    expect(getByText(mockProps.text)).toBeTruthy();
    expect(getByText(mockProps.text).getAttribute('class')).toContain(
      `${mockProps.variant} size-${mockProps.size}`
    );
  });
});

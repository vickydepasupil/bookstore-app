import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MenuStateContext } from 'context/MenuState/MenuStateProvider';
import ToggleBtn from 'components/MainHeader/Buttons/ToggleBtn';

jest.mock('components/Icons/Badge', () => jest.fn(() => <div data-testid="mock-badge"></div>));

jest.mock('components/Icons/Hamburger', () =>
  jest.fn(() => <div data-testid="mock-hamburger"></div>)
);

const mockFn = jest.fn();

describe('MainHeader', () => {
  it('validates that the component is rendered', () => {
    const { getByRole, getByTestId } = render(
      <MenuStateContext.Provider
        value={{ isOpen: true, setIsOpen: mockFn, showBadge: true, setShowBadge: () => {} }}
      >
        <ToggleBtn />
      </MenuStateContext.Provider>
    );

    expect(getByTestId('mock-badge')).toBeTruthy();
    expect(getByTestId('mock-hamburger')).toBeTruthy();

    const btn = getByRole('button');
    expect(btn).toBeTruthy();
    
    fireEvent.click(btn);
    expect(mockFn).toHaveBeenCalled();
  });
});

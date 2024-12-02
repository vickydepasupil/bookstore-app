'use client';
import React, { useContext } from 'react';
import Badge from 'components/Icons/Badge';
import HamburgerIcon from 'components/Icons/Hamburger';
import { MenuStateContext } from 'context/MenuState/MenuStateProvider';

const ToggleBtn = () => {
  const { isOpen, setIsOpen, showBadge } = useContext(MenuStateContext);

  return (
    <button className="burger-btn" aria-label="menu button" onClick={() => setIsOpen(!isOpen)}>
      <Badge show={!isOpen && showBadge} />
      <HamburgerIcon isOpen={isOpen} />
    </button>
  );
};

export default ToggleBtn;

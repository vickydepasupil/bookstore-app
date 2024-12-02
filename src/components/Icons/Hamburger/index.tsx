import React from 'react';
import { HamburgerIconProps } from './HamburgerIconProps';

const HamburgerIcon = (props: HamburgerIconProps) => {
  const { isOpen } = props;

  return (
    <div className={`hamburger-icon ${isOpen ? 'open' : ''}`} data-testid="burger-icon">
      <div className="burger-bar" />
      <div className="burger-bar" />
      <div className="burger-bar" />
      <div className="burger-bar" />
    </div>
  );
};

export default HamburgerIcon;

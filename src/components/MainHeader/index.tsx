import React from 'react';
import ToggleBtn from './Buttons/ToggleBtn';
import HomeButton from './Buttons/HomeButton';

const MainHeader = () => {
  return (
    <div className="main-header">
      <ToggleBtn />
      <h1 className="main-header-txt">Bookstore App</h1>
      <HomeButton />
    </div>
  );
};

export default MainHeader;

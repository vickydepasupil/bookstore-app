import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HomeIcon from 'public/icons/house-solid.svg';

const HomeButton = () => {
  return (
    <div className="home-btn-container">
      <Link href="/" className="home-btn">
        <Image src={HomeIcon} alt="navigate home" className="home-btn-icon" />
      </Link>
    </div>
  );
};

export default HomeButton;

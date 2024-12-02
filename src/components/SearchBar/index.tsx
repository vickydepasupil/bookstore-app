'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import SearchIcon from 'public/icons/search.svg';

const SearchBar = () => {
  const [searchText, setSearchText] = useState<string>('');
  const { push } = useRouter();

  const handleSearch = () => {
    if (!!searchText.trim()) {
      push(`/books?title=${searchText?.toLowerCase()}`);
    }
  };

  return (
    <div className="search-bar-container">
      <div className="bar-btn-container">
        <input
          className="search-bar"
          placeholder="Search by title"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>
          <Image alt="Search books" src={SearchIcon} className="search-icon" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

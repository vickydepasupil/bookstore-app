'use client';
import React, { useContext } from 'react';
import { MenuStateContext } from 'context/MenuState/MenuStateProvider';
import { SideBarProps, SideBarSectionProps } from './SideBarProps';
import Link from 'next/link';

const SideBar = ({ data }: SideBarProps) => {
  const { isOpen } = useContext(MenuStateContext);
  const sections = [
    {
      name: 'genres',
      data: data.genres,
    },
    {
      name: 'authors',
      data: data.authors,
    },
  ];

  return (
    <>
      <div className={`side-bar ${isOpen ? 'open' : ''}`}>
        <ul className="sections">
          <li>
            <Link href="/checkout">CART</Link>
          </li>
          {sections.map((section: SideBarSectionProps) => (
            <li key={section?.name}>
              <details>
                <summary>{section?.name?.toUpperCase()}</summary>
                <ul className="sub-menu">
                  {section?.data.map((d, i) => (
                    <li key={`${i}-${d}`} className="sub-menu-items">
                      <Link href={`/${section?.name}?name=${d}`}>{d}</Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          ))}
        </ul>
      </div>
      <div className={`opaque-sreen ${isOpen ? 'show' : ''}`}></div>
    </>
  );
};

export default SideBar;

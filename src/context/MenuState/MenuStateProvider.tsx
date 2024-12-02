'use client';
import React, { createContext, useContext, useState } from 'react';
import { MenuStateContextProps } from './MenuStateContextProps';

const MenuStateContext = createContext<MenuStateContextProps>({
  isOpen: false,
  setIsOpen: () => {},
  showBadge: false,
  setShowBadge: () => {},
});

const MenuStateProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showBadge, setShowBadge] = useState<boolean>(false);

  return (
    <MenuStateContext.Provider value={{ isOpen, setIsOpen, showBadge, setShowBadge }}>
      {children}
    </MenuStateContext.Provider>
  );
};

const useMenuStateContext = () => {
  return useContext(MenuStateContext);
};

export { MenuStateContext, MenuStateProvider, useMenuStateContext };

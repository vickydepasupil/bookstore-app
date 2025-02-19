'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { ToastStateContextProps } from './ToastStateContextProps';
import { ToastProvider, Root, Title, Action, Viewport } from '@radix-ui/react-toast';

const ToastStateContext = createContext<ToastStateContextProps>({
  toastTitle: '',
  setToastTitle: () => {},
});

const ToastStateProvider = ({ children }: { children: React.ReactNode }) => {
  const [toastTitle, setToastTitle] = useState<string>('');

  useEffect(() => {
    if (!!toastTitle) {
      setTimeout(() => {
        setToastTitle('');
      }, 3000);
    }
  }, [toastTitle]);

  return (
    <ToastStateContext.Provider value={{ toastTitle, setToastTitle }}>
      <ToastProvider>
        <Root className="toast-root" open={!!toastTitle}>
          <Title className="toast-title">{toastTitle}</Title>
          <Action
            altText="close notification"
            className="toast-close-btn"
            onClick={() => setToastTitle('')}
          >
            X
          </Action>
        </Root>
        <Viewport className="toast-viewport" />
      </ToastProvider>
      {children}
    </ToastStateContext.Provider>
  );
};

const useToastStateContext = () => {
  return useContext(ToastStateContext);
};

export { ToastStateContext, ToastStateProvider, useToastStateContext };

import React from 'react';
import Image from 'next/image';
import DizzyFace from 'public/icons/face-dizzy-regular.svg';
import { NotFoundProps } from './NotFoundProps';

const NotFound = ({ text }: NotFoundProps) => {
  return (
    <div className="not-found">
      <div className="icon-container">
        <Image alt="Not found" src={DizzyFace} />
      </div>
      <div className="msg-header">Uh oh.</div>
      <div className="msg-text">{text}</div>
    </div>
  );
};

export default NotFound;

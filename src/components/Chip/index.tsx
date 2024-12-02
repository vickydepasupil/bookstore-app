import React from 'react';
import { ChipProps } from './ChipProps';

const Chip = ({ variant, text, size }: ChipProps) => {
  return <div className={`chip ${variant || 'default'}${size ? ` size-${size}` : ''}`}>{text}</div>;
};

export default Chip;

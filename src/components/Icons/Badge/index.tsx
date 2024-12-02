import React from 'react';
import { BadgeProps } from './BadgeProps';

const Badge = ({ show }: BadgeProps) => {
  return <div className={`badge ${show ? 'show' : ''}`} data-testid="badge-icon"></div>;
};

export default Badge;

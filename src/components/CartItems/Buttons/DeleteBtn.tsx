'use client';
import React from 'react';
import Image from 'next/image';
import TrashIcon from 'public/icons/trash-solid.svg';
import { DeleteBtnProps } from './DeleteBtnProps';
import axios from 'axios';

const DeleteBtn = ({ _id, title }: DeleteBtnProps) => {
  const handleDelete = async () => {
    const res = await axios.delete(`${process.env.BASE_URL}/api/cart`, { params: { id: _id } });
    console.log('res', res);
  };

  return (
    <button onClick={handleDelete} aria-label="delete" className="delete-btn">
      <Image src={TrashIcon} alt={`delete ${title} from cart`} />
    </button>
  );
};

export default DeleteBtn;

'use client';
import React, { useContext } from 'react';
import Image from 'next/image';
import TrashIcon from 'public/icons/trash-solid.svg';
import { useRouter } from 'next/navigation';
import { DeleteBtnProps } from './DeleteBtnProps';
import { ToastStateContext } from 'context/ToastState/ToastStateProvider';
import axios from 'axios';

const DeleteBtn = ({ _id, title }: DeleteBtnProps) => {
  const { setToastTitle } = useContext(ToastStateContext);
  const { refresh } = useRouter();

  const handleDelete = async () => {
    const res = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`, {
      params: { id: _id },
    });
    if (res.status == 200) {
      refresh();
      setTimeout(() => {
        setToastTitle('Item removed from cart');
      }, 300);
    }
  };

  return (
    <button onClick={handleDelete} aria-label="delete" className="delete-btn">
      <Image src={TrashIcon} alt={`delete ${title} from cart`} />
    </button>
  );
};

export default DeleteBtn;

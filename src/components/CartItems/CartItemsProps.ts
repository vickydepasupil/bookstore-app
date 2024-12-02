export interface CartItemsDbProps {
  _id: string;
  bookId: string;
  count: number;
}

export interface CartItemsProps {
  _id: string;
  title: string;
  cover: string;
  price: number;
  count: number;
}

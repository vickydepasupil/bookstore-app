export interface BookCardProps {
  _id: string;
  title: string;
  author: string;
  cover: string;
  description: string;
  price: number;
  stocks: number;
  showDescription?: boolean;
}

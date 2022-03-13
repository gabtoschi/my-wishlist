export interface ProductCardProps {
  id: number;
  imageUrl: string;
  name: string;
  currency: string;
  price: number;
}

export enum ProductCardDataTestIds {
  Image = 'product-card-image',
}

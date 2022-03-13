import { ProductCardProps } from '../components/ProductCard/ProductCard.types';
import { ProductAPIData } from '../models/Product.model';

export const mapProductToCard = ({
  id,
  title,
  currencyFormat,
  price,
  image,
}: ProductAPIData): ProductCardProps => {
  return { id, name: title, currency: currencyFormat, price, imageUrl: image };
};

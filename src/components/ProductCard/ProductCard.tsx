import { ProductCardDataTestIds, ProductCardProps } from './ProductCard.types';
import './ProductCard.styles.scss';

const ProductCard = ({
  imageUrl,
  name,
  currency,
  price,
  overlays = [],
}: ProductCardProps) => {
  const formattedPrice = `${currency} ${price.toFixed(2).replace('.', ',')}`;

  return (
    <div className="card text-center d-flex align-items-center">
      <img
        className="img-fluid mt-3 mb-2 px-3"
        data-testid={ProductCardDataTestIds.Image}
        alt={name}
        src={imageUrl}
      />
      <span className="product-name mb-5 px-2">{name}</span>
      <span className="product-price mb-5">{formattedPrice}</span>

      {overlays}
    </div>
  );
};

export default ProductCard;

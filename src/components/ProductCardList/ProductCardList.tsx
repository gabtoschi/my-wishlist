import ProductCard from '../ProductCard/ProductCard';
import { ProductCardListProps } from './ProductCardList.types';

const ProductCardList = ({ products }: ProductCardListProps) => {
  return (
    <div className="row">
      {products.map((product) => (
        <div
          id={product.id.toString()}
          className="col-6 col-md-4 col-lg-3 pb-4"
        >
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  );
};

export default ProductCardList;

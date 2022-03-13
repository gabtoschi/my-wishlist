import { useEffect, useState } from 'react';
import ProductCardList from '../../components/ProductCardList/ProductCardList';
import { ProductCardListProps } from '../../components/ProductCardList/ProductCardList.types';
import { ProductAPIData } from '../../models/Product.model';
import { getProducts } from '../../services/Product.service';

const ProductListing = () => {
  const [productsData, setProductsData] = useState<ProductAPIData[]>([]);

  useEffect(() => {
    getProducts().then((data) => setProductsData(data.products));
  }, []);

  const productCards: ProductCardListProps = {
    products: productsData.map((productData) => ({
      id: productData.id,
      name: productData.title,
      currency: productData.currencyFormat,
      price: productData.price,
      imageUrl: productData.image,
    })),
  };

  return (
    <>
      <ProductCardList {...productCards} />
    </>
  );
};

export default ProductListing;

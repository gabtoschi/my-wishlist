import { useEffect, useState } from 'react';
import FavoriteCardButton from '../../components/ProductCard/FavoriteCardButton/FavoriteCardButton';
import ProductCardList from '../../components/ProductCardList/ProductCardList';
import { ProductCardListProps } from '../../components/ProductCardList/ProductCardList.types';
import { ProductAPIData } from '../../models/Product.model';
import { getProducts } from '../../services/Product.service';

const ProductListing = () => {
  const [productsData, setProductsData] = useState<ProductAPIData[]>([]);

  useEffect(() => {
    getProducts().then((data) => setProductsData(data.products));
  }, []);

  const getFavoriteButton = (productId: number) => (
    <FavoriteCardButton
      key={`favorite-${productId}`}
      isFavorite={productId % 2 === 0} // TODO: mock
      onClick={() => console.log(`clicked, id = ${productId}`)} // TODO: mock
    ></FavoriteCardButton>
  );

  const productCards: ProductCardListProps = {
    products: productsData.map((productData) => ({
      id: productData.id,
      name: productData.title,
      currency: productData.currencyFormat,
      price: productData.price,
      imageUrl: productData.image,
      overlays: [getFavoriteButton(productData.id)],
    })),
  };

  return (
    <>
      <ProductCardList {...productCards} />
    </>
  );
};

export default ProductListing;

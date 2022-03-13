import { useEffect, useState } from 'react';
import FavoriteCardButton from '../../components/ProductCard/FavoriteCardButton/FavoriteCardButton';
import ProductCardList from '../../components/ProductCardList/ProductCardList';
import { ProductCardListProps } from '../../components/ProductCardList/ProductCardList.types';
import { useWishlist } from '../../hooks/useWishlist/useWishlist';
import { ProductAPIData } from '../../models/Product.model';
import { getProducts } from '../../services/Product.service';

const ProductListing = () => {
  const [productsData, setProductsData] = useState<ProductAPIData[]>([]);
  const { wishlistedIds, addToWishlist } = useWishlist();

  useEffect(() => {
    getProducts().then((data) => setProductsData(data.products));
  }, []);

  const getFavoriteButton = (productId: number) => (
    <FavoriteCardButton
      key={`favorite-${productId}`}
      isFavorite={wishlistedIds.includes(productId)}
      onClick={() => addToWishlist(productId)}
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

import { useEffect, useState } from 'react';
import FavoriteCardButton from '../../components/ProductCard/FavoriteCardButton/FavoriteCardButton';
import ProductCardList from '../../components/ProductCardList/ProductCardList';
import { ProductCardListProps } from '../../components/ProductCardList/ProductCardList.types';
import { mapProductToCard } from '../../helpers/Product.helper';
import { useWishlist } from '../../hooks/useWishlist/useWishlist';
import { ProductAPIData } from '../../models/Product.model';
import { getProducts } from '../../services/Product.service';

const ProductListing = () => {
  const [productsData, setProductsData] = useState<ProductAPIData[]>([]);
  const { wishlistedIds, addToWishlist, removeFromWishlist } = useWishlist();

  useEffect(() => {
    getProducts().then((data) => setProductsData(data.products));
  }, []);

  const getFavoriteButton = (productId: number) => {
    const isFavorite = wishlistedIds.includes(productId);
    const onClick = isFavorite
      ? () => removeFromWishlist(productId)
      : () => addToWishlist(productId);

    return (
      <FavoriteCardButton
        key={`favorite-${productId}`}
        isFavorite={isFavorite}
        onClick={onClick}
      ></FavoriteCardButton>
    );
  };

  const productCards: ProductCardListProps = {
    products: productsData.map((productData) => ({
      ...mapProductToCard(productData),
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

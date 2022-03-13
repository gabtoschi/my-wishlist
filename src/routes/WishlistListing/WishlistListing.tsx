import { useEffect, useState } from 'react';
import RemoveCardButton from '../../components/ProductCard/RemoveCardButton/RemoveCardButton';
import ProductCardList from '../../components/ProductCardList/ProductCardList';
import { ProductCardListProps } from '../../components/ProductCardList/ProductCardList.types';
import { mapProductToCard } from '../../helpers/Product.helper';
import { useWishlist } from '../../hooks/useWishlist/useWishlist';
import { ProductAPIData } from '../../models/Product.model';
import { getProducts } from '../../services/Product.service';

const WishlistListing = () => {
  const [productsData, setProductsData] = useState<ProductAPIData[]>([]);
  const { wishlistedIds, removeFromWishlist } = useWishlist();

  useEffect(() => {
    getProducts().then((data) => setProductsData(data.products));
  }, []);

  const productCards: ProductCardListProps = {
    products: productsData
      .filter((productData) => wishlistedIds.includes(productData.id))
      .map((productData) => ({
        ...mapProductToCard(productData),
        overlays: [
          <RemoveCardButton
            key={`remove-${productData.id}`}
            onClick={() => removeFromWishlist(productData.id)}
          />,
        ],
      })),
  };

  return (
    <>
      <ProductCardList {...productCards} />
    </>
  );
};

export default WishlistListing;

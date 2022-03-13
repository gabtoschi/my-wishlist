import { useEffect, useState } from 'react';
import ProductCardList from '../../components/ProductCardList/ProductCardList';
import { ProductCardListProps } from '../../components/ProductCardList/ProductCardList.types';
import { mapProductToCard } from '../../helpers/Product.helper';
import { useWishlist } from '../../hooks/useWishlist/useWishlist';
import { ProductAPIData } from '../../models/Product.model';
import { getProducts } from '../../services/Product.service';

const WishlistListing = () => {
  const [productsData, setProductsData] = useState<ProductAPIData[]>([]);
  const { wishlistedIds } = useWishlist();

  useEffect(() => {
    getProducts().then((data) => setProductsData(data.products));
  }, []);

  const productCards: ProductCardListProps = {
    products: productsData
      .filter((productData) => wishlistedIds.includes(productData.id))
      .map((productData) => ({
        ...mapProductToCard(productData),
      })),
  };

  return (
    <>
      <ProductCardList {...productCards} />
    </>
  );
};

export default WishlistListing;

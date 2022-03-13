import { WishlistStoredData } from '../../models/Wishlist.model';
import { useLocalStorage } from '../useLocalStorage/useLocalStorage';

const wishlistStorageKey = 'WISHLIST';
const wishlistInitialValue: WishlistStoredData = { favorites: [] };

export function useWishlist(storageKey = wishlistStorageKey) {
  const [{ favorites: wishlistedIds }, setWishlistObject] =
    useLocalStorage<WishlistStoredData>(storageKey, wishlistInitialValue);

  const addToWishlist = (idToAdd: number) => {
    if (wishlistedIds.includes(idToAdd)) return;

    const newWishlist = [...wishlistedIds, idToAdd];
    setWishlistObject({ favorites: newWishlist });
  };

  return { wishlistedIds, addToWishlist };
}

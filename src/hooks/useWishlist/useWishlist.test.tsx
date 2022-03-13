import { renderHook, act } from '@testing-library/react-hooks';
import { useWishlist } from './useWishlist';

const storageKey = 'WISHLIST_TEST';

describe('useWishlist', () => {
  afterEach(() => window.localStorage.removeItem(storageKey));

  test('creates an empty wishlist', () => {
    const { result } = renderHook(() => useWishlist(storageKey));

    expect(result.current.wishlistedIds).toEqual([]);
  });

  test('adds a new id to a wishlist', () => {
    const { result: creationResult } = renderHook(() =>
      useWishlist(storageKey)
    );

    act(() => creationResult.current.addToWishlist(10));

    const { result: addResult } = renderHook(() => useWishlist(storageKey));
    expect(addResult.current.wishlistedIds).toContain(10);
  });
});

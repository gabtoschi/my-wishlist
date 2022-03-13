import { renderHook, act } from '@testing-library/react-hooks';
import { useWishlist } from './useWishlist';

const storageKey = 'WISHLIST_TEST';

describe('useWishlist', () => {
  afterEach(() => window.localStorage.removeItem(storageKey));

  test('creates an empty wishlist', () => {
    const { result } = renderHook(() => useWishlist(storageKey));

    expect(result.current.wishlistedIds).toEqual([]);
  });

  test('recover an existent wishlist', () => {
    const { result: creationResult } = renderHook(() =>
      useWishlist(storageKey)
    );

    act(() => creationResult.current.addToWishlist(10));

    const { result: checkResult } = renderHook(() => useWishlist(storageKey));
    expect(checkResult.current.wishlistedIds).toContain(10);
  });

  test('adds a new id to a wishlist', () => {
    const { result } = renderHook(() => useWishlist(storageKey));

    act(() => result.current.addToWishlist(10));

    expect(result.current.wishlistedIds).toContain(10);
  });

  test('remove elements from the wishlist', () => {
    const { result } = renderHook(() => useWishlist(storageKey));

    act(() => result.current.addToWishlist(10));
    act(() => result.current.addToWishlist(20));
    act(() => result.current.addToWishlist(30));
    act(() => result.current.addToWishlist(40));

    act(() => result.current.removeFromWishlist(20));
    expect(result.current.wishlistedIds).not.toContain(20);

    act(() => result.current.removeFromWishlist(40));
    expect(result.current.wishlistedIds).not.toContain(40);

    act(() => result.current.removeFromWishlist(10));
    expect(result.current.wishlistedIds).not.toContain(10);

    act(() => result.current.removeFromWishlist(30));
    expect(result.current.wishlistedIds).not.toContain(30);
  });
});

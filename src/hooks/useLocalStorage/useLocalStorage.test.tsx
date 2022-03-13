import { renderHook, act } from '@testing-library/react-hooks';
import { useLocalStorage } from './useLocalStorage';

interface TestData {
  str: string;
  num: number;
}

const storageKey = 'LOCAL_STORAGE_UNIT_TEST';

describe('useLocalStorage', () => {
  afterEach(() => window.localStorage.removeItem(storageKey));

  test('creates an object in localStorage with the initial value', () => {
    const { result } = renderHook(() =>
      useLocalStorage<TestData>(storageKey, { str: 'test', num: 10 })
    );

    const [stored] = result.current;
    expect(stored.str).toBe('test');
    expect(stored.num).toBe(10);
  });

  test('calls the hook with a key previously used and get the value on localStorage and not the initial value', () => {
    renderHook(() =>
      useLocalStorage<TestData>(storageKey, { str: 'test', num: 10 })
    );

    const { result } = renderHook(() =>
      useLocalStorage<TestData>(storageKey, { str: 'new', num: 50 })
    );

    const [stored] = result.current;
    expect(stored.str).toBe('test');
    expect(stored.num).toBe(10);
  });

  test('update the full object in localStorage', () => {
    const { result } = renderHook(() =>
      useLocalStorage<TestData>(storageKey, { str: 'test', num: 10 })
    );

    const patchValue = result.current[1];
    act(() => patchValue({ str: 'new', num: 50 }));

    const [newStored] = result.current;
    expect(newStored.str).toBe('new');
    expect(newStored.num).toBe(50);
  });

  test('update only some attributes of the object in localStorage', () => {
    const { result } = renderHook(() =>
      useLocalStorage<TestData>(storageKey, { str: 'test', num: 10 })
    );

    const patchValue = result.current[1];
    act(() => patchValue({ num: 50 }));

    const [newStored] = result.current;
    expect(newStored.str).toBe('test');
    expect(newStored.num).toBe(50);
  });
});

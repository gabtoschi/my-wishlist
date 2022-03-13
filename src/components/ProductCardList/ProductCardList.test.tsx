import { render, screen } from '@testing-library/react';
import ProductCardList from './ProductCardList';
import { ProductCardListProps } from './ProductCardList.types';

const stubDefaultProps: ProductCardListProps = {
  products: [
    {
      id: 1,
      imageUrl: 'https://via.placeholder.com/300x300',
      name: 'Produto número 1',
      currency: 'R$',
      price: 100.01,
    },
    {
      id: 2,
      imageUrl: 'https://via.placeholder.com/300x300',
      name: 'Produto número 2',
      currency: 'R$',
      price: 200.02,
    },
    {
      id: 3,
      imageUrl: 'https://via.placeholder.com/300x300',
      name: 'Produto número 3',
      currency: 'R$',
      price: 300.03,
    },
  ],
};

describe('ProductCardList', () => {
  test('renders all the product cards', () => {
    render(<ProductCardList {...stubDefaultProps} />);

    const productNames = stubDefaultProps.products.map(
      (product) => product.name
    );

    for (let name of productNames) {
      const productNameElement = screen.getByText(name);
      expect(productNameElement).toBeInTheDocument();
    }
  });
});

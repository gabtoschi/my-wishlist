import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';
import { ProductCardDataTestIds, ProductCardProps } from './ProductCard.types';

const stubDefaultProps: ProductCardProps = {
  imageUrl: 'https://via.placeholder.com/300x300',
  name: 'Nome do produto',
  currency: 'R$',
  price: 235.4,
};

describe('ProductCard', () => {
  test('renders product name', () => {
    render(<ProductCard {...stubDefaultProps} />);

    const nameElement = screen.getByText(stubDefaultProps.name);
    expect(nameElement).toBeInTheDocument();
  });

  test('renders formatted price with currency', () => {
    render(<ProductCard {...stubDefaultProps} />);

    const priceElement = screen.getByText('R$ 235,40');
    expect(priceElement).toBeInTheDocument();
  });

  test('renders formatted price when it is an integer', () => {
    render(<ProductCard {...stubDefaultProps} price={200} />);

    const priceElement = screen.getByText('R$ 200,00');
    expect(priceElement).toBeInTheDocument();
  });

  test('renders product image', () => {
    render(<ProductCard {...stubDefaultProps} />);

    const imageElement = screen.getByTestId(ProductCardDataTestIds.Image);
    expect(imageElement.nodeName).toBe('IMG');
    expect((imageElement as HTMLImageElement).src).toBe(
      stubDefaultProps.imageUrl
    );
  });
});

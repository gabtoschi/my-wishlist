import ProductCardList from './components/ProductCardList/ProductCardList';
import { ProductCardListProps } from './components/ProductCardList/ProductCardList.types';

const productCardMock: ProductCardListProps = {
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
    {
      id: 4,
      imageUrl: 'https://via.placeholder.com/300x300',
      name: 'Produto número 4',
      currency: 'R$',
      price: 400.04,
    },
    {
      id: 5,
      imageUrl: 'https://via.placeholder.com/300x300',
      name: 'Produto número 5',
      currency: 'R$',
      price: 500.05,
    },
  ],
};

const App = () => {
  return (
    <div className="container mt-3">
      <ProductCardList {...productCardMock} />

      <div>Hello, world!</div>
    </div>
  );
};

export default App;

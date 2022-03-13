import ProductCard from './components/ProductCard/ProductCard';
import { ProductCardProps } from './components/ProductCard/ProductCard.types';

const productCardMock: ProductCardProps = {
  imageUrl: 'https://via.placeholder.com/300x300',
  name: 'Nome do produto Nome do produto Nome do produto',
  currency: 'R$',
  price: 23587587.4,
};

const App = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-3">
          <ProductCard {...productCardMock}></ProductCard>
        </div>
        <div className="col-3">
          <ProductCard {...productCardMock}></ProductCard>
        </div>
        <div className="col-3">
          <ProductCard {...productCardMock}></ProductCard>
        </div>
        <div className="col-3">
          <ProductCard {...productCardMock}></ProductCard>
        </div>
      </div>

      <div>Hello, world!</div>
    </div>
  );
};

export default App;

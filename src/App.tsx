import './App.scss';
import { AddButton } from './components/AddButton';
import { Price } from './components/Price';
import { ProductCard } from './components/ProductCard';
import { ProductCardHeader } from './components/ProductCardHeader';
import { useProducts } from './hooks/useProducts';

export default function App() {
  const { products, onAddCart } = useProducts();

  return (
    <div className="App">
      <div className="container">
        <div className="productsGrid">
          {products.map(product => {
            return (
              <ProductCard key={product.id}>
                <ProductCardHeader product={product} />
                <Price product={product} />

                <br /><br /><br /><br />

                <AddButton onClick={() => onAddCart(product.id)} isAdded={product.added} />
              </ProductCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import CustomerLoader from './CustomerLoader';
import ProductsLoader from './ProductsLoader';
import { useCartEvents } from './useCartEvents';

export default function App() {
  useCartEvents();
  return (
    <div>
      <h1>Shell App</h1>
      <ProductsLoader />
      <CustomerLoader />
    </div>
  );
}

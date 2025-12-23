import './App.css';

export default function ProductsApp() {
  return (
    <div style={{ border: '2px solid blue', padding: 10 }}>
      <h2>Products</h2>
      <button
        onClick={() =>
          window.dispatchEvent(
            new CustomEvent('cart:add', {
              detail: { id: 1, name: 'Laptop' },
            })
          )
        }
      >
        Add to Cart
      </button>
    </div>
  );
}

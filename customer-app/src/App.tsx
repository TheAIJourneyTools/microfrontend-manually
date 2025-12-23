import './App.css';

export default function CustomerApp() {
  return (
    <div style={{ border: '2px solid red', padding: 10 }}>
      <h2>Customer</h2>
      <button
        onClick={() =>
          window.dispatchEvent(
            new CustomEvent('cart:add', {
              detail: { id: 1, name: 'Discount' },
            })
          )
        }
      >
        Add to Cart
      </button>
    </div>
  );
}

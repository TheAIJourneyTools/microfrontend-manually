import { createRoot, Root } from 'react-dom/client';
import ProductsApp from './App';

declare global {
  interface Window {
    ProductsApp: {
      mount(container: Element): void;
      unmount(): void;
    };
  }
}

let root: Root | null = null;

window.ProductsApp = {
  mount(container) {
    root = createRoot(container);
    root.render(<ProductsApp />);
  },
  unmount() {
    root?.unmount();
  },
};

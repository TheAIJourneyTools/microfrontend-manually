import { createRoot, Root } from 'react-dom/client';
import CustomerApp from './App';

declare global {
  interface Window {
    CustomerApp: {
      mount(container: Element): void;
      unmount(): void;
    };
  }
}

let root: Root | null = null;

window.CustomerApp = {
  mount(container) {
    root = createRoot(container);
    root.render(<CustomerApp />);
  },
  unmount() {
    root?.unmount();
  },
};

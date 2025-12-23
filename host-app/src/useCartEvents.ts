import { useEffect } from 'react';

export function useCartEvents() {
  useEffect(() => {
    function handler(e: Event) {
      console.log('Item added to cart:', (e as CustomEvent).detail);
    }

    window.addEventListener('cart:add', handler as EventListener);
    return () =>
      window.removeEventListener('cart:add', handler as EventListener);
  }, []);
}

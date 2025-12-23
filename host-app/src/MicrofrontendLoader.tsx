import { useEffect, useRef, ReactNode } from 'react';
import { loadScript } from './loadScript';

export interface MicrofrontendModule {
  mount: (element: HTMLElement | null) => void;
  unmount: () => void;
}

interface MicrofrontendLoaderProps {
  /** Name of the global window property (e.g., 'ProductsApp', 'CustomerApp') */
  appName: string;
  /** URL to the microfrontend script */
  scriptUrl: string;
  /** Optional children or fallback UI */
  children?: ReactNode;
}

// Extend global Window interface with microfrontend modules
declare global {
  interface Window {
    [key: string]: MicrofrontendModule | undefined;
  }
}

/**
 * Generic microfrontend loader component.
 * Loads a remote script and mounts the microfrontend app into a container.
 *
 * @example
 * <MicrofrontendLoader appName="ProductsApp" scriptUrl="http://localhost:5000/products-app.js" />
 */
export default function MicrofrontendLoader({
  appName,
  scriptUrl,
  children,
}: MicrofrontendLoaderProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mounted = true;

    loadScript(scriptUrl)
      .then(() => {
        if (mounted) {
          const app = window[appName] as MicrofrontendModule | undefined;
          if (app) {
            app.mount(ref.current);
          } else {
            console.error(`Microfrontend "${appName}" not found on window.`);
          }
        }
      })
      .catch((error) => {
        console.error(
          `Failed to load microfrontend script from ${scriptUrl}:`,
          error
        );
      });

    return () => {
      mounted = false;
      const app = window[appName] as MicrofrontendModule | undefined;
      app?.unmount();
    };
  }, [appName, scriptUrl]);

  return <div ref={ref}>{children}</div>;
}

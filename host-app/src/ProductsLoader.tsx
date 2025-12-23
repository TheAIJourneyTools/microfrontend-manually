import MicrofrontendLoader from './MicrofrontendLoader';

export default function ProductsLoader() {
  return (
    <MicrofrontendLoader
      appName='ProductsApp'
      scriptUrl='http://localhost:5000/products-app.js'
    />
  );
}

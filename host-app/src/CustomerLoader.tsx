import MicrofrontendLoader from './MicrofrontendLoader';

export default function CustomerLoader() {
  return (
    <MicrofrontendLoader
      appName='CustomerApp'
      scriptUrl='http://localhost:5000/customer-app.js'
    />
  );
}

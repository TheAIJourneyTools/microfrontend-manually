import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 5000;

// Serve the dist folder from the products-app package
const distPathProducts = path.join(
  __dirname,
  '..',
  '..',
  'products-app',
  'dist'
);
const distPathCustomer = path.join(
  __dirname,
  '..',
  '..',
  'customer-app',
  'dist'
);

const distsPaths = [distPathProducts, distPathCustomer];

for (const distPath of distsPaths) {
  if (!fs.existsSync(distPath)) {
    console.error(
      `Error: expected built files at ${distPath} but the folder does not exist.`
    );
    console.error(
      'Run `npm run build` in `products-app` and `customer-app` before starting this server.'
    );
    process.exit(1);
  }
}

distsPaths.forEach((distPath) => {
  app.use(express.static(distPath));
});

// SPA fallback: always return index.html for unknown routes
app.get('*', (_req, res) => {
  distsPaths.forEach((distPath) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
});

app.listen(PORT, () => {
  distsPaths.forEach((distPath) => {
    console.log(
      `Serving customer-app dist from ${distPath} at http://localhost:${PORT}`
    );
  });
});

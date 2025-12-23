# products-app static server (TypeScript)

This small Node.js app serves the built bundle located at `../products-app/dist`.

Quick steps (PowerShell):

1. Install dependencies:

```powershell
cd 'C:\Users\Tony\Desktop\data\Programing\study\microfrontends\manuallymade\server'
npm install
```

2. Build the front-end app (if you haven't already):

```powershell
cd '..\products-app'
npm run build
```

3. Build the server (TypeScript -> JavaScript) and start:

```powershell
cd 'C:\Users\Tony\Desktop\data\Programing\study\microfrontends\manuallymade\server'
npm run build
npm start
```

For development with automatic TypeScript running (no build step):

```powershell
cd 'C:\Users\Tony\Desktop\data\Programing\study\microfrontends\manuallymade\server'
npm run dev
```

To run on a custom port:

```powershell
$env:PORT=8080; npm start
```

The server will serve static assets from `../products-app/dist` and fallback to `index.html` for client-side routing.

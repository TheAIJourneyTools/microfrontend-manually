# Microfrontend Manually-Made Example

This repository demonstrates a manual microfrontend setup using Vite + React for three apps and a small Express TypeScript server.

Overview

- `host-app`: The shell/host application that loads microfrontends manually at runtime. Key files: `src/CustomerLoader.tsx`, `src/ProductsLoader.tsx`, `src/loadScript.ts`.
- `customer-app`: A standalone microfrontend (React + Vite) exposing the customer UI.
- `products-app`: A standalone microfrontend (React + Vite) exposing the products UI.
- `server`: A minimal Express TypeScript server used for backend or static serving in examples (`src/index.ts`).

Repository layout

```
customer-app/
host-app/
products-app/
server/
```

Quick start (development)

Open a terminal for each project and run the dev script. From the repository root you can run each service separately.

Windows PowerShell example:

```powershell
cd host-app
npm install
npm run dev

cd ..\customer-app
npm install
npm run dev

cd ..\products-app
npm install
npm run dev

cd ..\server
npm install
npm run dev
```

Notes

- Each frontend app uses Vite. Common npm scripts available in the apps:
  - `dev` — start Vite dev server
  - `build` — TypeScript compile + Vite build
  - `preview` — preview the built assets
- The `server` project provides `dev` (runs `ts-node src/index.ts`), `build` (compile with `tsc`), and `start` (run `node dist/index.js`).

Build for production

Build each frontend and the server (if deploying):

```powershell
cd customer-app
npm run build

cd ..\products-app
npm run build

cd ..\host-app
npm run build

cd ..\server
npm run build
npm run start
```

How the host loads microfrontends

`host-app/src/loadScript.ts` contains a small helper that appends script tags at runtime to load remote bundles produced by the microfrontends. Loaders like `CustomerLoader.tsx` and `ProductsLoader.tsx` orchestrate dynamic mounting.

When to use this repo

- Educational/demo purposes: to show a minimal, manual microfrontend approach without Webpack Module Federation.
- Starting point for experimenting with dynamic loading, sharing event patterns (see `useCartEvents.ts` in `host-app`), and incremental integration.

Contributing

- Open an issue or send a PR with improvements, examples, or fixes.

License

- No license specified (add a `LICENSE` file if you plan to open-source this project).

Contact

- If you need help running the apps or want a walkthrough, ask here or add an issue.

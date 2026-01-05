# Moving Truck Close-Down Checklist

A Vite + React + TypeScript single-page application that digitizes the SOS Logistics moving truck close-down process.

## Tech Stack
- Vite 5
- React 18 with React Router
- TypeScript
- Tailwind CSS 3

## Getting Started
1. Install dependencies
   ```bash
   npm install
   ```
2. Run the development server
   ```bash
   npm run dev
   ```
3. Open the provided local URL in your browser to explore the four-page workflow (Home → Select Truck → Checklist → Review & Submit).

## Available Scripts
- `npm run dev` – Start the Vite dev server with hot reloading.
- `npm run build` – Type-check and create an optimized production build.
- `npm run preview` – Preview the production build locally.

## Environment Variables
The following variables are expected by future integrations:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_APP_ENV`

Create a `.env` file (or `.env.local`) at the project root and define these values when backend services are configured.

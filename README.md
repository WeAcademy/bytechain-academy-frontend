# ByteChain Academy Frontend

Next.js frontend for the ByteChain Academy platform.

## Prerequisites

- Node.js 20+
- npm 10+ (this repo uses **npm** as its package manager — do not use pnpm)
- Running backend API (local or deployed)
  - Backend repo: [bytechain-academy-backend](https://github.com/WeAcademy/bytechain-academy-backend)
  - Start the backend first so the frontend can reach it

## Local setup

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment

```bash
cp .env.example .env.local
```

Set:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

The frontend API client automatically appends `/api/v1` if you provide only the host URL.

### Environment variables

| Variable | Required | Default | Description |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_API_URL` | Yes | `http://localhost:3001` | Backend API base URL. The `/api/v1` prefix is appended automatically. |

### 3) Start dev server

```bash
npm run dev
```

Open `http://localhost:3000`.

### 4) Verify the setup

After starting the dev server:

1. Open `http://localhost:3000` — the landing page should load.
2. Navigate to the login page and confirm the form renders.
3. If the backend is running on `http://localhost:3001`, test login with valid credentials.
4. Check the browser console — there should be no API connection errors if the backend is reachable.

## E2E tests (Playwright)

The repo includes Playwright e2e tests in the `e2e/` directory. The dev server starts automatically before tests run.

```bash
# Install Playwright browsers (first time only)
npx playwright install

# Run all e2e tests
npm run test:e2e

# Run with the Playwright UI
npx playwright test --ui
```

Tests run against `http://localhost:3000` and expect the backend at `http://localhost:3001`.

## Quality checks

```bash
# Lint
npm run lint

# Production build
npm run build
```

## Deploy to Vercel

### 1) Import repository

1. Go to Vercel dashboard.
2. Import this repository.
3. Select the `frontend/` directory as project root.

### 2) Configure environment variables

Add:

- `NEXT_PUBLIC_API_URL=https://<your-backend-domain>`

Use your deployed backend base URL (without trailing slash).

### 3) Build settings

Vercel defaults are compatible:

- Build command: `npm run build`
- Output: Next.js default

### 4) Deploy and verify

After deployment:

1. Open the Vercel URL.
2. Test login and any authenticated flow.
3. Confirm frontend can reach backend endpoints through configured `NEXT_PUBLIC_API_URL`.

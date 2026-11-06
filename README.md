# ByteChain Academy Frontend

Next.js frontend for the ByteChain Academy platform.

## Prerequisites

- **Node.js 20+** (CI uses 22). Check with `node -v`.
- **npm 10+**, the only supported package manager (see [Package manager](#package-manager)). Check with `npm -v`.
- **The backend API running locally** (or deployed). The app needs it for login, courses and everything else. See [Running the backend locally](#running-the-backend-locally).

## Package manager

This project uses **npm**. `package-lock.json` is the only lockfile and is committed; CI installs with `npm ci`, so it must stay in sync with `package.json`.

- Install with `npm install` (or `npm ci` for an exact, reproducible install).
- Do not use pnpm or yarn, and do not commit `pnpm-lock.yaml` or `yarn.lock` (they are git-ignored and CI fails if they appear). Two lockfiles can resolve different dependency versions and make builds differ between machines.
- When you add or update a dependency, run `npm install <package>` and commit the updated `package-lock.json` together with `package.json`.

## Local setup

### 1) Clone and install

```bash
git clone https://github.com/WeAcademy/bytechain-academy-frontend.git
cd bytechain-academy-frontend
npm ci
```

### 2) Configure environment

```bash
cp .env.example .env.local
```

`.env.local` is git-ignored. It sets one variable:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

See [Environment variables](#environment-variables). If your backend runs on `http://localhost:3001` (its default) you can even skip this step, because that is the fallback.

### 3) Start the backend

The frontend talks to the backend API on port **3001**. Start it first: see [Running the backend locally](#running-the-backend-locally).

### 4) Start the dev server

```bash
npm run dev
```

Open <http://localhost:3000>. You should see the ByteChain Academy landing page. Edits to files under `app/` and `components/` reload automatically.

### 5) Check that it works

- The landing page loads at <http://localhost:3000>.
- In your browser's dev tools (Network tab), requests go to `http://localhost:3001/api/v1/...` and succeed. Creating an account from the landing page's **Start Free Course** button and landing on the dashboard or onboarding confirms the frontend and backend are connected.

## Environment variables

| Variable | Required | Default | Description |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_API_URL` | No | `http://localhost:3001` | Base URL of the backend API. `/api/v1` is appended automatically if you give only the host (a URL already ending in `/api/v1` is used as is, and a trailing slash is ignored). |

Notes:

- Variables starting with `NEXT_PUBLIC_` are **inlined into the browser bundle** when the app starts or builds. **Restart `npm run dev`** (or rebuild) after changing `.env.local`.
- Never put secrets in a `NEXT_PUBLIC_` variable: everyone who loads the site can read it.
- The code reads `process.env.CI` only to adjust the end-to-end test settings; you do not set it.

## Running the backend locally

The backend lives in a separate repository, [WeAcademy/bytechain-academy-backend](https://github.com/WeAcademy/bytechain-academy-backend). In short:

```bash
git clone https://github.com/WeAcademy/bytechain-academy-backend.git
cd bytechain-academy-backend
# follow its README: install, create .env from .env.example, set up its database, then
npm run start:dev    # serves http://localhost:3001
```

Two settings must agree between the repos:

- The backend must allow this app's origin: its `FRONTEND_URL` must include `http://localhost:3000`, otherwise the browser blocks API calls (CORS errors).
- This app's `NEXT_PUBLIC_API_URL` must point at the backend (`http://localhost:3001` by default).

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server on port 3000 |
| `npm run build` | Production build |
| `npm start` | Serve the production build (run `npm run build` first) |
| `npm run lint` | Lint with ESLint |
| `npm run typecheck` | Type-check with TypeScript (no output files) |
| `npm run test:e2e` | End-to-end tests with Playwright (see below) |

## Quality checks

Run these before opening a pull request. CI runs the same three steps (after `npm ci`):

```bash
npm run lint
npm run typecheck
npm run build
```

## End-to-end tests

The Playwright tests in `e2e/` drive a real browser through registration, login, enrolment and quizzes. They are **not** run in CI because they need a running backend with a database.

Requirements:

- The backend running at the URL in `NEXT_PUBLIC_API_URL` (see above).
- Browsers installed once: `npx playwright install` (add `--with-deps` on Linux).

```bash
npm run test:e2e                             # all three browsers: chromium, firefox, webkit
npm run test:e2e -- --project=chromium       # just one browser (faster)
npx playwright show-report                   # open the HTML report of the last run
```

Playwright starts `npm run dev` itself and reuses a dev server that is already running on port 3000. The tests **create real user accounts** in the backend's database (with unique `@example.com` addresses), so run them against a development database, never production.

## Project structure

```
app/          Next.js App Router: one folder per route (dashboard, courses, dao, ...)
components/   React components, grouped by feature (auth, courses, admin, ...) plus ui/ primitives
contexts/     React context providers
hooks/        Custom React hooks
lib/          Shared helpers, including the API client (lib/api.ts)
e2e/          Playwright end-to-end tests
public/       Static assets
```

## Troubleshooting

- **`Port 3000 is already in use`**: stop the other process, or run `npm run dev -- -p 3002` and add `http://localhost:3002` to the backend's `FRONTEND_URL`.
- **Pages load but login or data fails / CORS error in the console**: the backend is not running, `NEXT_PUBLIC_API_URL` points at the wrong place, or the backend's `FRONTEND_URL` does not include `http://localhost:3000`. Check `http://localhost:3001/api/v1/docs` opens in your browser.
- **A changed `.env.local` has no effect**: restart `npm run dev`; `NEXT_PUBLIC_` values are read at startup.
- **`npm ci` fails with a lockfile error**: `package-lock.json` and `package.json` are out of sync. Run `npm install` and commit the updated `package-lock.json`.
- **Playwright says a browser is not installed**: run `npx playwright install`.

## Deploy to Vercel

### 1) Import repository

1. Go to the Vercel dashboard.
2. Import this repository. The project root is the repository root (this repo is the frontend on its own).

### 2) Configure environment variables

Add:

- `NEXT_PUBLIC_API_URL=https://<your-backend-domain>`

Use your deployed backend base URL (without a trailing slash).

### 3) Build settings

Vercel defaults are compatible:

- Build command: `npm run build`
- Output: Next.js default

### 4) Deploy and verify

After deployment:

1. Open the Vercel URL.
2. Test login and any authenticated flow.
3. Confirm the frontend can reach backend endpoints through the configured `NEXT_PUBLIC_API_URL`.

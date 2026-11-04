# Contributing to the ByteChain Academy frontend

Thank you for helping improve ByteChain Academy. This repository is the Next.js
web app for the platform.

## Before you start

1. Pick an open issue and read its scope, acceptance criteria, and checklist.
2. Comment with a short plan (problem, approach, ETA) and wait for a
   maintainer to assign the issue before opening a pull request.
3. Keep each PR focused on a single issue.

## Local setup

```bash
npm ci
cp .env.example .env.local
npm run dev
```

The app runs at `http://localhost:3000` and expects the API at
`NEXT_PUBLIC_API_URL` (defaults to `http://localhost:3001`).

## Useful scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the Next.js dev server |
| `npm run build` | Production build |
| `npm run lint` | Run ESLint (read-only) |
| `npm run typecheck` | Run `tsc --noEmit` |
| `npm run test:e2e` | Run the Playwright suite |

## Branch and commit conventions

- Branch: `feat/<short-description>`, `fix/<short-description>`,
  `ci/<short-description>`, `docs/<short-description>`.
- Commits: conventional style, for example `feat(courses): add lesson filters`.
- Reference the issue in the PR body with `Closes #<number>`.

## Pull requests

- Explain what changed and why, with screenshots for UI changes.
- Include the commands you ran and their results.
- Add or update tests for behaviour changes; run the Playwright suite when a
  flow is affected.
- Never commit secrets, `.env` files, Playwright reports, or test results.
- Keep the change within the issue's scope; open a separate issue for anything
  else you notice.

## Accessibility and design

- Interactive elements need an accessible name and a visible focus state.
- Keep dark-mode colours consistent with the existing palette.
- Prefer existing components in `components/ui` over new one-off markup.

## Reporting security issues

Do not open a public issue for a vulnerability. Email contact@nexacore.org
instead.

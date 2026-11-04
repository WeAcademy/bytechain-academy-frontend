# Contributing to ByteChain Academy Frontend

Thank you for your interest in contributing! This guide covers the basics.

## Getting Started

1. **Fork and clone** the repository.
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Configure environment**:
   ```bash
   cp .env.example .env.local
   ```
   Set `NEXT_PUBLIC_API_URL` to your running backend API URL.
4. **Start the dev server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000`.

## Development Workflow

### Before opening a PR

Run all checks locally:

```bash
npm run lint        # ESLint
npm run build       # Next.js production build
```

### Branch naming

- `feat/<issue-number>-short-name` — new features
- `fix/<issue-number>-short-name` — bug fixes
- `chore/<issue-number>-short-name` — maintenance tasks

### Commit messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(profile): add avatar upload component
fix(auth): handle expired token redirect
chore: update dependencies
```

Reference the issue with `Closes #<number>` in the PR description.

### Pull requests

- One issue per PR.
- Fill in the PR template fully.
- All CI checks must pass before review.
- Request a review from a maintainer.

## Code style

- TypeScript strict mode.
- Use the existing ESLint configuration.
- Use Tailwind CSS for styling — follow existing component patterns.

## Reporting issues

Use the issue templates (bug report or feature request). Include:
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Environment details (browser, OS, Node.js version)

## License

By contributing, you agree that your contributions will be licensed under the
MIT License.

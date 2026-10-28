![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/OmSonone/Project-Chasm?utm_source=oss&utm_medium=github&utm_campaign=OmSonone%2FProject-Chasm&labelColor=171717&color=FF570A&link=https%3A%2F%2Fcoderabbit.ai&label=CodeRabbit+Reviews)

# Project Chasm

A Next.js app for exploring the lore of Teyvat: characters, books and
audiobooks, artifacts and items. Content is authored in an embedded Sanity
Studio at `/studio`.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, React 19, Turbopack)
- [Sanity](https://www.sanity.io) 6 via `next-sanity` 13
- Tailwind CSS v4 + shadcn/Radix primitives
- Vitest + React Testing Library
- ESLint (flat config) + Prettier

## Getting started

1. Install dependencies (Node `>=22.12`, see `.nvmrc`):

   ```bash
   npm ci
   ```

2. Create `.env.local` with your Sanity project:

   ```bash
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   # optional, used as `metadataBase` for absolute URLs
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

3. Generate Sanity types and start the dev server:

   ```bash
   npm run dev
   ```

   `dev` and `build` run `typegen` automatically, writing
   `src/sanity/types.ts` and `src/sanity/extract.json`.

## Scripts

| Script                  | What it does                                       |
| ----------------------- | -------------------------------------------------- |
| `npm run dev`           | Dev server with Turbopack                          |
| `npm run build`         | Production build (runs `typegen` first)            |
| `npm start`             | Serve the production build                         |
| `npm run lint`          | ESLint over the whole repo                         |
| `npm run lint:fix`      | ESLint with autofix                                |
| `npm run format`        | Prettier write                                     |
| `npm run format:check`  | Prettier check (used by CI)                        |
| `npm run type-check`    | `tsc --noEmit`                                     |
| `npm run test`          | Vitest, single run                                 |
| `npm run test:watch`    | Vitest in watch mode                               |
| `npm run test:coverage` | Vitest with V8 coverage and thresholds             |
| `npm run verify`        | Format + lint + types + tests (run before pushing) |
| `npm run typegen`       | Regenerate Sanity schema types                     |

## Dependency overrides

`package.json` pins patched versions of transitive packages through
`overrides` (for example `minimatch`, `brace-expansion`, `tar`, `sharp`,
`nanoid`). The keys are scoped by major (`"minimatch@^3.0.0": "^3.1.2"`)
because ESLint needs `minimatch@3` while `glob@10` needs `minimatch@9`;
a blanket override breaks the toolchain.

After changing dependencies run `npm audit --audit-level=high`, and keep
`npm run verify` green.

## Testing

Tests live next to the code as `*.test.ts(x)` and run in `jsdom`:

- `src/lib/` – pure helpers (character filtering, time formatting, `cn`)
- `src/components/` – component behaviour with React Testing Library

Shared setup (`vitest.setup.ts`) registers `@testing-library/jest-dom`, clears
the DOM between tests and stubs `ResizeObserver` for Radix primitives. Coverage
is gated at 80% for `src/lib` and `src/components/shared`; widen
`test.coverage.include` in `vitest.config.mts` as more areas gain tests.

Naming conventions:

- `*.test.ts(x)` for unit/component tests, written with `describe`/`it`.
- Mock Next.js runtime pieces (`next/image`, `next/link`) per test file when
  rendering components outside the Next.js runtime.

## Project structure

```text
src/
  app/                     App Router routes
    home/                  Characters, books, artifacts, items
    studio/                Embedded Sanity Studio
    error.tsx              Route error boundary
    not-found.tsx          404 page
  components/
    character/             Character list/detail UI
    book-audiobook/        Book and audiobook UI
    item-artifact/         Artifact and item UI
    layout/                Navigation, footer, changelog
    shared/                Reusable UI (simulated audio player)
    ui/                    shadcn/Radix primitives
  data/                    Static content still used by some routes
  lib/                     Pure helpers (chars, format, cn)
  sanity/                  Client, queries, schema types
```

## Data sources

Some areas already read from Sanity, others still use the static data in
`src/data`:

| Area                    | Source                                              |
| ----------------------- | --------------------------------------------------- |
| Character list          | Sanity (`GET_ALL_CHARACTERS`)                       |
| Character filters       | Sanity (`GET_ALL_ELEMENTS`, `GET_ALL_WEAPON_TYPES`) |
| Character detail route  | Static `src/data/characters.ts`                     |
| Books, artifacts, items | Static `src/data/*`                                 |
| Changelog popup         | Sanity `version` documents                          |

When migrating a route to Sanity, also delete its static data so the two
sources cannot drift.

## Continuous integration

`.github/workflows/ci.yml` runs format, lint, type-check, tests and a
production build on pushes and pull requests. The build job only runs once the
repository variables `NEXT_PUBLIC_SANITY_PROJECT_ID` and
`NEXT_PUBLIC_SANITY_DATASET` are configured (Settings → Secrets and variables →
Actions → Variables).

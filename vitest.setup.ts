import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// `src/sanity/env.ts` throws when these are missing, so provide inert defaults
// before any module that imports the Sanity client is loaded by a test.
process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ??= 'test-project-id';
process.env.NEXT_PUBLIC_SANITY_DATASET ??= 'test-dataset';

// jsdom does not implement ResizeObserver, which Radix primitives rely on.
class ResizeObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}

globalThis.ResizeObserver ??=
  ResizeObserverStub as unknown as typeof ResizeObserver;

afterEach(() => {
  cleanup();
  window.localStorage.clear();
});

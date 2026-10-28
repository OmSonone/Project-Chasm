import { describe, expect, it } from 'vitest';
import { cn } from './utils';

describe('cn', () => {
  it('joins class names', () => {
    expect(cn('p-2', 'text-sm')).toBe('p-2 text-sm');
  });

  it('ignores falsy values', () => {
    expect(cn('p-2', undefined, null, '', false)).toBe('p-2');
  });

  it('lets the last conflicting tailwind class win', () => {
    expect(cn('p-2', 'p-4')).toBe('p-4');
  });

  it('supports conditional objects', () => {
    expect(cn({ 'text-red-500': true, 'text-blue-500': false })).toBe(
      'text-red-500'
    );
  });
});

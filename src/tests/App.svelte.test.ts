import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';

import App from '../App.svelte';

describe('Counter', () => {
  test('initial screen', async () => {
    render(App);
    expect(screen.getByText('Great Scott!')).toBeInTheDocument();
  });
});

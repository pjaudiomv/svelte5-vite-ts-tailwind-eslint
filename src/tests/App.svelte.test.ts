import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';

import App from '../App.svelte';

describe('Counter', () => {
  test('initial screen', async () => {
    render(App);
    expect(screen.getByText('Great Scott!')).toBeInTheDocument();
  });

  test('select dropdown', async () => {
    render(App);
    const countryBox = screen.getByRole('combobox', { name: 'Select Character' }) as HTMLSelectElement;
    expect(countryBox.item(0)?.label).toBe('Choose character ...');
    await userEvent.selectOptions(countryBox, ['Marty McFly']);
  });
});

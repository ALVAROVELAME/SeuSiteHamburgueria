import { test, expect } from '@playwright/test';

test('verificar imagens responsivas', async ({ page }) => {
  await page.goto('http://localhost:4173');

  const images = await page.locator('img').all();

  for (const img of images) {
    const srcset = await img.getAttribute('srcset');
    const sizes = await img.getAttribute('sizes');
    const src = await img.getAttribute('src');

    console.log('SRC:', src);
    console.log('SRCSET:', srcset);
    console.log('SIZES:', sizes);

    expect(src).toBeTruthy();
  }
});
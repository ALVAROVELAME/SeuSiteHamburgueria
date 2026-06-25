import { expect, test } from '@playwright/test'

test('imagetools gera imagens responsivas para os assets locais', async ({ page }) => {
  await page.goto('/')

  const images = page.locator('img')
  const count = await images.count()

  expect(count).toBeGreaterThan(0)

  for (let index = 0; index < count; index += 1) {
    const img = images.nth(index)
    const src = await img.getAttribute('src')
    const srcset = await img.getAttribute('srcset')
    const sizes = await img.getAttribute('sizes')
    const width = await img.getAttribute('width')
    const height = await img.getAttribute('height')

    expect(src).toBeTruthy()
    expect(src).not.toMatch(/^https?:\/\//)
    expect(srcset).toBeTruthy()
    expect(srcset).toContain('w')
    expect(sizes).toBeTruthy()
    expect(width).toBeTruthy()
    expect(height).toBeTruthy()

    await expect(img).toHaveJSProperty('complete', true)

    const naturalWidth = await img.evaluate((element) => (element as HTMLImageElement).naturalWidth)
    expect(naturalWidth).toBeGreaterThan(0)
  }
})

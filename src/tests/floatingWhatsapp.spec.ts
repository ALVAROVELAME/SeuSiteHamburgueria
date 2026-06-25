import { expect, test } from '@playwright/test'

test('o WhatsApp flutuante some no mobile quando o formulario entra na tela', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')

  const button = page.locator('a[aria-label="Falar no WhatsApp"]')

  await expect(button).toBeVisible()

  await page.locator('#pedido').scrollIntoViewIfNeeded()

  await expect(button).toBeHidden()
})

test('o WhatsApp flutuante continua visivel no desktop mesmo no formulario', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 })
  await page.goto('/')

  const button = page.locator('a[aria-label="Falar no WhatsApp"]')

  await expect(button).toBeVisible()

  await page.locator('#pedido').scrollIntoViewIfNeeded()

  await expect(button).toBeVisible()
})

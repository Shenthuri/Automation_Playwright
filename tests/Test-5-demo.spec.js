//Verify search no products exist in the price range
import { test, expect } from '@playwright/test';
const { chromium } = require('@playwright/test');

test('test5', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.ebay.com/');
  await page.getByPlaceholder('Search for anything').click();
  await page.getByPlaceholder('Search for anything').fill('wallet $10000000000000');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('#srp-river-results div').filter({ hasText: 'No exact matches foundSave' }).first().click();
  await page.pause();

  // ---------------------
  await context.close();
  await browser.close();
});
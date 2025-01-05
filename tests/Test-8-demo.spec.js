
//Verify search the product name as only space
import { test, expect } from '@playwright/test';
const { chromium } = require('@playwright/test');

test('test7', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.ebay.com/');
  await page.getByPlaceholder('Search for anything').click();
  await page.getByPlaceholder('Search for anything').fill('                                   ');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByText('The query must have at least').click();
  await page.pause();

  // ---------------------
  await context.close();
  await browser.close();
});
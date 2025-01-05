
//Verify if no related products available for exists category
import { test, expect } from '@playwright/test';
const { chromium } = require('@playwright/test');

test('test7', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.ebay.com/');
  await page.getByLabel('Select a category for search').selectOption('11232');
  await page.getByPlaceholder('Search for anything').click();
  await page.getByPlaceholder('Search for anything').fill('access virus ti2 keyboard');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByText('0 results found in the Movies').click();
  await page.pause();

  // ---------------------
  await context.close();
  await browser.close();
});
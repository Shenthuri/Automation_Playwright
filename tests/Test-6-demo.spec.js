//Verify invalid format product search 
import { test, expect } from '@playwright/test';
const { chromium } = require('@playwright/test');

test('test6', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.ebay.com/');
  await page.getByPlaceholder('Search for anything').click();
  await page.getByPlaceholder('Search for anything').fill('132434566667@@@@@');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('heading', { name: 'No exact matches found' }).click();
  await page.pause();

  // ---------------------
  await context.close();
  await browser.close();
});
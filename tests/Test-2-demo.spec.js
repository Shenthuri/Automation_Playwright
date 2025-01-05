//Verify serach is working properly
import { test, expect } from '@playwright/test';
const { chromium } = require('@playwright/test');

test('test2', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.ebay.com/');
  await page.locator('html').click();
  await page.getByPlaceholder('Search for anything').click();
  await page.getByPlaceholder('Search for anything').fill('men wallet');
  await page.getByLabel('men wallet', { exact: true }).click();
  await page.pause();

  // ---------------------
  await context.close();
  await browser.close();
});
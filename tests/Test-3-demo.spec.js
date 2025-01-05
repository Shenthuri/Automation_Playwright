//Verify related products are within the defined price range
import { test, expect } from '@playwright/test';
const { chromium } = require('@playwright/test');

test('test3', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.ebay.com/');
  await page.getByPlaceholder('Search for anything').click();
  await page.getByPlaceholder('Search for anything').fill('wallet');
  await page.getByLabel('wallet', { exact: true }).click();
  await page.getByLabel('Under $').check();
  await page.goto('https://www.ebay.com/sch/i.html?_from=R40&_nkw=wallet&_sacat=0&rt=nc&_udhi=15');
  await page.pause();

  // ---------------------
  await context.close();
  await browser.close();
});

//Verify the localized pricing support
import { test, expect } from '@playwright/test';
const { chromium } = require('@playwright/test');

test('test4', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.ebay.com/');
  await page.getByPlaceholder('Search for anything').click();
  await page.getByPlaceholder('Search for anything').fill('wallet');
  await page.getByLabel('wallet', { exact: true }).click();
  await page.getByRole('link', { name: 'Europe' }).locator('input[name="location"]').check();
  await page.goto('https://www.ebay.com/sch/i.html?_from=R40&_nkw=wallet&_sacat=0&rt=nc&LH_PrefLoc=5');
  await page.pause();

  // ---------------------
  await context.close();
  await browser.close();
});
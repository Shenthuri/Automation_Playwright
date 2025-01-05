//mavigate the search specific product
import { test, expect } from '@playwright/test';
const { chromium } = require('@playwright/test');

test('test1', async () => {

  
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.ebay.com/');
  await page.getByPlaceholder('Search for anything').click();
  await page.getByPlaceholder('Search for anything').fill('wallet');
  await page.getByLabel('wallet', { exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByAltText('Mens RFID Blocking Soft').click();
  const page1 = await page1Promise;
  await page1.getByTestId('x-photos-min-view').getByLabel('Picture 3 of').click();
  await page1.getByLabel('Picture 4 of 12', { exact: true }).click();
  await page1.getByLabel('Picture 5 of 12', { exact: true }).click();
  await page1.getByLabel('Picture 6 of 12', { exact: true }).click();
  await page.pause();

  // ---------------------
  await context.close();
  await browser.close();
});



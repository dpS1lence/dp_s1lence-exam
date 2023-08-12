const { test, expect } = require('@playwright/test');

test('Check boardgames page', async ({ page }) => {
    await page.goto('https://dp-s1lence-exam.onrender.com/boardgames');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  
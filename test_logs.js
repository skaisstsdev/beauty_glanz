import puppeteer from 'puppeteer';
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  page.on('response', response => {
    if(!response.ok()) console.log('HTTP ERR', response.status(), response.url());
  });
  
  await page.goto('http://localhost:8000/admin.html');
  await page.type('#passwordInput', 'beautiful2026'); // Wait, password is hashed. We can just run the function
  await page.evaluate(() => {
    sessionStorage.setItem('bg_admin', '1');
  });
  await page.goto('http://localhost:8000/admin.html'); // reload with session
  await page.waitForSelector('#tabKalender');
  await page.click('#tabKalender');
  await page.waitForTimeout(500); // Wait for render
  await page.click('#adminCalDays button:nth-child(28)'); // Click day 28
  await page.waitForTimeout(500);
  await page.click('#adminSlotsGrid div'); // Click 09:00 slot
  await page.waitForTimeout(2000);
  await browser.close();
})();

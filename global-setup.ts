import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(process.env.BASE_URL as string);
    await page.locator('.tw-nav-link:has-text("Login")').click();
    await page.locator('#loginemail').type(process.env.USERNAME as string);
    await page.locator('#loginpassword').type(process.env.PASSWORD as string);
    await page.locator('button[type=submit]').click();
    await page.waitForURL('https://malgorzatascompany1.teamwork.com/launchpad/welcome');
    await page.locator('.w-product-list__item').first().click();
    await page.waitForURL('https://malgorzatascompany1.teamwork.com/app/home/work');
    await page.context().storageState({ path: 'utils/assets/storageState.json' });
    await browser.close();
    console.log('End global setup'); 
}

export default globalSetup;
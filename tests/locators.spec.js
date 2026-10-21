import { expect, test} from '@playwright/test'

test('Locators Testing', async({page}) => {
    await page.goto('https://www.demoblaze.com/')

    await page.locator('//a[@id="login2"]').click()

    await page.locator('//input[@id="loginusername"]').fill('balaji3377')

    await page.locator('//input[@id="loginpassword"]').fill('Balaji@3377')

    await page.locator('//button[text()="Log in"]').click()

    const logoutLink = await page.locator('//a[normalize-space()="Log out"]')

    await expect(logoutLink).toBeVisible()
})
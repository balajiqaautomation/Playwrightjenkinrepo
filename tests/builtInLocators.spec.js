import{expect, test} from '@playwright/test'
/*
page.getByAltText() - to locate an element, usually image, by its text alternative
page.getByPlaceHolder() - to locate an input by placeholder
page.getByRole() - to locate by explicit and implicit accessibility attributes
page.getByText() - to locate by text content
page.getByLabel() - to locate a form control by associated label's text
page.getByTitle() - to locate an elements by its title attribute
page.getByTestId() - to locate an element based on data-testid attribute 
*/

test('Built In locators', async({page})=> {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const logo = await page.getByAltText('company-branding')
    await expect(logo).toBeVisible()

    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')

    await page.getByRole('button', {type: 'submit'}).click()

})
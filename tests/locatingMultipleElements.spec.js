import {test} from '@playwright/test'

test('Locating Multiple Elements', async({page})=> {

    await page.goto('https://www.demoblaze.com/')

    const links = await page.$$('a')

    for(const link of links)
        {
            const linkText = await link.textContent();
            console.log(linkText);
    }

    //locating all products displayed on home page
    const products = await page.$$('//div[@id="tbodyid"]//h4/a')

    for(const product of products)
    {
        const prodName = await product.textContent()
        console.log(prodName);
    }

})
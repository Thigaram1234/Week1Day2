import {test,expect} from "@playwright/test";
import { asyncWrapProviders } from "async_hooks";
import data from "../../tests/Utils/servicenow.json"
import path from 'path'
for (let value of data)
test('place iphone order',async ({page}) => {
    await page.goto('https://dev296651.service-now.com/')
    await page.fill("#user_name",value.Username)
    await page.fill("#user_password",value.password)
    await page.click("#sysverb_login")
    await page.waitForLoadState("domcontentloaded")  
    await page.getByRole('menuitem',{name :"All"}).click()
    await page.waitForLoadState("domcontentloaded")
    await page.getByText('Service Catalog').click()
    let frame =  page.frameLocator('iframe')
        await frame.locator('//img[@alt ="Mobiles"]').click()
        await page.waitForTimeout(5000)
    //await frame.locator('//td[@class="homepage_category_only_image_cell"])[8]').click()
    //await frame.getByAltText('Mobiles').click()
    let frame2 = page.frameLocator('iframe')
        await frame2.locator('//strong[text() = "Apple iPhone 13"]').click()
    let frame3 = page.frameLocator('iframe')
        await page.waitForLoadState('domcontentloaded')
        await frame3.getByText('yes').click()
        await frame3.getByRole('textbox',{name: "What was the original phone number?"}).fill("95")
        await frame3.locator('select').nth(0).selectOption("500MB")         
        await frame3.locator('//label[text() ="Blue"]').click()
        await page.waitForTimeout(1000)
        await frame3.locator("//label[contains(text(),'512 GB')]").click()
       
        await frame3.getByRole('button',{name:'Order Now'}).click()
        await page.waitForTimeout(5000)
        let frame4 = page.frameLocator('iframe')
        await expect(frame4.locator("(//div[@class='notification notification-success']/span)[2]")).toContainText("Thank you, your request has been submitted")
        await page.screenshot({
            path:'./Utils/order.png',
            fullPage:true


        } )
        

        






    
})
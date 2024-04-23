import { Given, When, Then } from "@cucumber/cucumber"
import { LoginPage } from "../../pages/LoginPage"
import { ProductsPage } from "../../pages/ProductsPage"
import { pageFixture } from "../../hooks/pageFixture";
import exp = require("constants");
import { expect } from "@playwright/test";
import { CartPage } from "../../pages/CartPage";

let productFromList
let titleProduct
let descriptionProduct
let priceProduct
let randomNumber

Given('I get a random item from list', async function () {
    const productsPage = new ProductsPage(pageFixture.page)
    const numberOfProducts = (await productsPage.products.all()).length
    
    randomNumber =  Math.round(Math.random() * ((numberOfProducts - 1) - 0) + 0);

    productFromList = await productsPage.products.all()
    // console.log(await productFromList[randomNumber].innerText())
    
    titleProduct = await productFromList[randomNumber].locator('.inventory_item_name')
    descriptionProduct = await productFromList[randomNumber].locator('.inventory_item_desc')
    priceProduct = await productFromList[randomNumber].locator('.inventory_item_price')
    console.log(await titleProduct.innerText())
    console.log(await descriptionProduct.innerText());
    console.log(await priceProduct.innerText());
    console.log('primer producto')

})

When('I click on Add to cart button', async function () {
    await productFromList[randomNumber].getByText('Add to cart').click()
})

When('I click on shopping cart', async function () {
    const productsPage = new ProductsPage(pageFixture.page)
    await productsPage.shoppingCartButton.click()
    // await pageFixture.page.pause();
})

Then('I see Checkout button', async function () {
    const cartPage = new CartPage(pageFixture.page)
    await expect(cartPage.checkoutButton).toBeVisible()
})

Then('The article is the same that I chose before', async function () {
    const cartPage = new CartPage(pageFixture.page)
    let expectedTitleProduct: string = await cartPage.titleCartProduct.innerText()
    // let expectedDescriptionProduct = await cartPage.descriptionProduct.innerText()
    let expectedPriceProduct: string = await cartPage.priceCartProduct.innerText() 
    
    // console.log(expectedTitleProduct);
    // // console.log(expectedDescriptionProduct);
    // console.log(expectedPriceProduct);
    

    await expect(titleProduct).toContainText(expectedTitleProduct)
    // await expect(descriptionProduct).toContainText(expectedDescriptionProduct)
    await expect(priceProduct).toContainText(expectedPriceProduct)
})

Then('I see {int} products in the page', async function (number: number) {
    const productsPage = new ProductsPage(pageFixture.page)
    const productsInPage = await productsPage.listProducts.locator('.inventory_item')

    await expect(productsInPage).toHaveCount(number)
})
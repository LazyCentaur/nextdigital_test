import { Given, When, Then, DataTable } from "@cucumber/cucumber"
import { expect } from "@playwright/test"
import { pageFixture } from "../../hooks/pageFixture";
import { LoginPage } from "../../pages/LoginPage";
import { ProductsPage } from "../../pages/ProductsPage";

Given('User navigates to the application', async function () {
    const loginPage = new LoginPage(pageFixture.page)
    await loginPage.navigate()
});

Given('User has logged in successfully', async function () {
    const loginPage = new LoginPage(pageFixture.page)
    await loginPage.usernameInput.fill('standard_user')
    await loginPage.passwordInput.fill('secret_sauce')
    await loginPage.loginButton.click()
    const productsPage = new ProductsPage(pageFixture.page)
    await expect(productsPage.productsTitle).toBeVisible()
});

Given('User enter the username as {string}', async function (username) {
    const loginPage = new LoginPage(pageFixture.page)
    await loginPage.usernameInput.fill(username)
})

Given('User enter the password as {string}', async function (password) {
    const loginPage = new LoginPage(pageFixture.page)
    await loginPage.passwordInput.fill(password)
})

When('User click on {string} button', async function (button: string) {
    const loginPage = new LoginPage(pageFixture.page)
    await loginPage.loginButton.click()
})


Then('Login should be success', async function () {
    const productsPage = new ProductsPage(pageFixture.page)
    await expect(productsPage.productsTitle).toContainText('Products')
})

Then('Login should not be success', async function () {
    const loginPage = new LoginPage(pageFixture.page)
    await expect(loginPage.wrongLoginMessage).toBeVisible()
})
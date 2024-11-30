const {expect} = require("@playwright/test");
let emailInputField = '[formcontrolname="email"]';
let passwordInputField = '[formcontrolname="password"]';
let loginButton = '//button[text()="Sign in"]';
let userMenu = '[href="#/my-profile"]';
let errorMessage = 'Invalid email or password';

async function loginPageIsDisplayed(page){
    await page.locator(emailInputField).waitFor();
}

async function login(page, username, password) {
    await page.locator(emailInputField).fill(username);
    await page.locator(passwordInputField).fill(password);
    await page.locator(loginButton).click();
}

async function checkUserIsNotLoggedIn(page){
    await expect(page.locator(userMenu)).not.toBeVisible();
}

async function checkErrorMessage(page){
    await expect(page.getByText(errorMessage)).toBeVisible();
}

module.exports = { loginPageIsDisplayed, login, checkUserIsNotLoggedIn, checkErrorMessage };

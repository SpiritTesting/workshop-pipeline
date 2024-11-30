const { Given, When, Then, Before, After, setDefaultTimeout } = require("@cucumber/cucumber");

const { chromium, expect } = require("@playwright/test");

const { Page } = require("playwright");
const {login, loginPageIsDisplayed, checkUserIsNotLoggedIn, checkErrorMessage} = require("../pageObjects/loginPage");

setDefaultTimeout(60 * 1000);

let page, browser;
//let baseUrl = 'http://localhost:4200/';
let baseUrl = 'https://workshop.spirit-indianer.com';
let notRegisteredUser;
let notRegisteredUserPassword;

Before(async function () {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto(baseUrl);
});

Given('a not registerd user', async function () {
    notRegisteredUser = 'thisUserIsNotRegistered@test.com';
    notRegisteredUserPassword = 'Test1234';
});

When('I open the login page', async function () {
    await page.goto(baseUrl + "#/login");
    await loginPageIsDisplayed(page);
});

When('I enter the username and password', async function () {
    await login(page, notRegisteredUser, notRegisteredUserPassword);
});

Then('I am not logged in', async function () {
    await checkUserIsNotLoggedIn(page);
});

Then('Exception', async function () {
    await checkErrorMessage(page);
});

After(async function () {
    await browser.close();
})
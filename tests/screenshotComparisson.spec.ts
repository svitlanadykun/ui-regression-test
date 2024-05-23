import { test, expect, type Page } from '@playwright/test';
import { LoginForm } from "../pom/LoginForm";
import {urls} from "../urls";

const loginForm = new LoginForm();


test.describe('Screenshot Comparison', () => {
    test('should match the baseline', async ({ page }) => {
        await page.goto(urls.BASE_URL);
        const screenshotOriginal = await page.screenshot();

        await page.goto(urls.BASE_URL + urls.ADMIN);
        await page.getByTestId(loginForm.emailField).fill('automation-senior');
        await page.getByTestId(loginForm.passwordField).fill('automation-senior');
        await page.getByTestId(loginForm.loginButton).click();

        await page.goto(urls.BASE_URL + urls.EDITOR);
        // make changes

        await page.goto(urls.BASE_URL);

        const screenshotActual = await page.screenshot();

        expect(screenshotOriginal).toMatchSnapshot();
    });
});
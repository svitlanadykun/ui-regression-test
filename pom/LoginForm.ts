import { test, expect, Page } from '@playwright/test';

export class LoginForm {
    public wrapper: string;
    public emailField: string;
    public passwordField: string;
    public loginButton: string;

    constructor() {
        this.wrapper = "loginform";
        this.emailField = "user_login";
        this.passwordField = "user_pass";
        this.loginButton = "wp-submit";
    }

    // async login(email: string, password: string) {
    //     I.fillField(this.emailField, email);
    //     I.fillField(this.passwordField, password);
    //     I.click(this.loginButton);
    //
    //     await page.getByTestId(this.wrapper).click();
    // }
}
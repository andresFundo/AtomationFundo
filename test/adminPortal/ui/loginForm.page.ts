import { By, PageElement } from '@serenity-js/web';

export const loginForm = {
   
    usernameInput: () =>
        PageElement.located(By.id('mat-input-16')).describedAs('username field'),

    passwordInput: () =>
        PageElement.located(By.id('mat-input-17')).describedAs('password field'),

    loginButton: () =>
        PageElement.located(By.xpath("//span[contains(text(), 'Log In')]")).describedAs('login Button'),

    appHeader: () =>
        PageElement.located(By.xpath("//div[@class='header__actions']")).describedAs('home tittle field'),
}


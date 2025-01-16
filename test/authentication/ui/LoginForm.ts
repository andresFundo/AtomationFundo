import { By, PageElement } from '@serenity-js/web';

export const LoginForm = {
   
    usernameInput: () =>
        PageElement.located(By.id('user-name')).describedAs('username field'),

    passwordInput: () =>
        PageElement.located(By.id('password')).describedAs('password field'),

    logButton: () =>
        PageElement.located(By.id('login-button')).describedAs('password field'),

    appLogo: () =>
        PageElement.located(By.xpath("//div[@class='app_logo']")).describedAs('home tittle field'),
}

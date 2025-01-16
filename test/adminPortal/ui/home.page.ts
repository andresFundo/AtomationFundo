import { By, PageElement } from '@serenity-js/web';

export const homePage = {
   
    logOutButton: () =>
        PageElement.located(By.xpath("//span[contains(text(), 'Sign OUT')]")).describedAs('login Button'),

}
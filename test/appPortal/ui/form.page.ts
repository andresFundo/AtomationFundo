import { By, PageElement } from '@serenity-js/web';

export const formPage = {
   
    firstNameInput: () =>
        PageElement.located(By.xpath("//input[@data-testid='firstNameField']")).describedAs('Input firts name'),

    lastNameInput: () =>
        PageElement.located(By.xpath("//input[@data-testid='lastNameField']")).describedAs('Input last name'),

    emailAddressInput: () =>
        PageElement.located(By.xpath("//input[@data-testid='emailAddressField']")).describedAs('Input email address'),

    phoneNumberInput: () =>
        PageElement.located(By.xpath("//input[@data-testid='phoneMobileField']")).describedAs('Input phone number'),

    checkBox1: () =>
        PageElement.located(By.xpath("//input[@id='mat-checkbox-1-input']")).describedAs('first check box'),

    checkBox2: () =>
        PageElement.located(By.xpath("//input[@id='mat-checkbox-2-input']")).describedAs('second check box'),

    checkBox3: () =>
        PageElement.located(By.xpath("//input[@id='mat-checkbox-3-input']")).describedAs('third check box'),

    nextButton: () =>
        PageElement.located(By.xpath("//span[contains(text(), 'NEXT')]")).describedAs('next button'),

}
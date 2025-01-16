import { Ensure } from '@serenity-js/assertions';
import { Task, Wait } from '@serenity-js/core';
import { Enter, isVisible, Scroll } from '@serenity-js/web';

import { config } from '../../config';
import { generateRandomEmail } from '../../features/support/utils';
import { formPage } from './ui/form.page';

export const FormAppPortal = {
    usingPersonalData: () =>
        Task.where(`#actor completes the form`,
            Wait.until(formPage.firstNameInput(), isVisible()),
            Ensure.that(formPage.firstNameInput(), isVisible()),
            Enter.theValue(config.appPortalname).into(formPage.firstNameInput()),

            Wait.until(formPage.lastNameInput(), isVisible()),
            Ensure.that(formPage.lastNameInput(), isVisible()),
            Enter.theValue(config.appPortalLastName).into(formPage.lastNameInput()),

            Scroll.to(formPage.emailAddressInput()),
            Wait.until(formPage.emailAddressInput(), isVisible()),
            Ensure.that(formPage.emailAddressInput(), isVisible()),
            Enter.theValue(generateRandomEmail()).into(formPage.emailAddressInput()),             
        ),

}
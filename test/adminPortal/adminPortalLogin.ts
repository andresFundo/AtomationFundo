import { Ensure } from '@serenity-js/assertions';
import { Task, Wait } from '@serenity-js/core';
import { Click, Enter, isVisible } from '@serenity-js/web';

import { config } from '../../config';
import { homePage } from './ui/home.page';
import { loginForm } from './ui/loginForm.page';

export const LoginAdminPortal = {
    using: () =>
        Task.where(`#actor logs in as ${config.adminPortalUser}`,
            Wait.until(loginForm.usernameInput(), isVisible()),
            Enter.theValue(config.adminPortalUser).into(loginForm.usernameInput()),

            Wait.until(loginForm.passwordInput(), isVisible()),
            Enter.theValue(config.adminPortalPassword).into(loginForm.passwordInput()),

            Wait.until(loginForm.loginButton(), isVisible()),
            Click.on(loginForm.loginButton()),
        ),

    check: () =>
        Task.where(`#actor checks the login was successful`,
            Ensure.that(loginForm.appHeader(), isVisible()),
        ),

    verifyLogout: () =>
        Task.where(`#actor checks the logout was successful`,
            Ensure.that(homePage.logOutButton(), isVisible()),
            Click.on(homePage.logOutButton()),
            Ensure.that(loginForm.loginButton(), isVisible()),
        ),
};
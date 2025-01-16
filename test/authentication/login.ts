import { Ensure } from '@serenity-js/assertions';
import { Task } from '@serenity-js/core';
import { Click, Enter, isVisible } from '@serenity-js/web';

import { config } from '../../config';
import { LoginForm } from '../../test/authentication/ui/LoginForm';

export const Login = {
    using: () =>
        Task.where(`#actor logs in as ${config.username }`,
            Enter.theValue(config.username).into(LoginForm.usernameInput()),
            Enter.theValue(config.password).into(LoginForm.passwordInput()),
            Click.on(LoginForm.logButton()),
        ),

    check: () =>
        Task.where(`#actor checks the login was successful`,
            Ensure.that(LoginForm.appLogo(), isVisible()),
        ),

}
import { Given, Then, When } from '@cucumber/cucumber';
import { Actor } from '@serenity-js/core';
import { Navigate } from '@serenity-js/web';

import { FormAppPortal } from '../../test/appPortal/appPortal.task';
import { Login } from '../../test/authentication/login';

Given('{actor} starts with the flow', async (actor: Actor) =>
    actor.attemptsTo(
        Navigate.to('/')
    
    ));

When('{actor} logs on portal web', (actor: Actor) =>
    actor.attemptsTo(
        Login.using()
    ) 

);

Then('{actor} verifies the login was succsesfully', (actor: Actor) =>
    actor.attemptsTo(
        Login.check()
    ) 
  
);

When('the {actor} starts a new application', async (actor: Actor) => {
    actor.attemptsTo(
        FormAppPortal.usingPersonalData()
    )
})

Then('the {actor} provides their personal information and selects the employment statuses:', (actor: Actor) => {
    // Write code here that turns the phrase above into concrete actions
})

Then('enters the requested financing amount and banking information', () => {

    // Write code here that turns the phrase above into concrete actions
})

Then('the application should be denied with an option to explore other options', () => {
    // Write code here that turns the phrase above into concrete actions
})

Then('no other financing options are found', () => {
    // Write code here that turns the phrase above into concrete actions
})

Given('the {actor} is ready for new applications', async (actor: Actor) => {
    actor.attemptsTo(
        Navigate.to('/')
    )
});

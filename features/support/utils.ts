
import { faker } from '@faker-js/faker';

export function generateRandomEmail(): string {
    const randomNumber = faker.number.int({ min: 100000, max: 999999 });
    return `aabella+test${randomNumber}@fundo.com`;
}

export function generateFullName(): string {
    return faker.person.fullName();
}

export function generatePhoneNumber(): string {
    return faker.phone.number();
}

export function generateJobTitle(): string {
    return faker.person.jobTitle();
}

export function generateUSAddress(): string {
    const streetAddress = faker.location.streetAddress();
    const city = faker.location.city();
    const state = faker.location.state();
    const zipCode = faker.location.zipCode();
    return `${streetAddress}, ${city}, ${state}, ${zipCode}`;
}

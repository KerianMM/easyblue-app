import {EmailValidator} from "../../../src/utils/validators/email";

describe('VALIDATOR - EMAIL', () => {
    test('Valid', () => {
        const isValid: boolean = EmailValidator.isValid('foo@test.fr');
        expect(isValid).toBe(true);
    });

    ['foo', 'foo@', '@test'].forEach(email => {
        test(`Invalid - ${email}`, () => {
            const isValid: boolean = EmailValidator.isValid(email);
            expect(isValid).toBe(false);
        })
    });
});
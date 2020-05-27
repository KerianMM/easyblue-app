import validate from "validate.js";

export class EmailValidator {
    public static getConstraints() : object
    {
        return {
            from: {
                email: true
            }
        };
    }

    public static validate(email: string) : object | undefined
    {
        return validate({from: email}, this.getConstraints());
    }

    public static isValid(email: string) : boolean
    {
        return typeof this.validate(email) === 'undefined';
    }
}
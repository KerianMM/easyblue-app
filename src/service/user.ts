import {UserInterface} from "../models/User";
import {users} from "../datas/users";
import {EmailValidator} from "../utils/validators/email";
import {LoginFormDatas} from "../interfaces/form/login";

export class UserService {
    public static getAll(): UserInterface[] {
        return users;
    }

    public static getOne(id: string): UserInterface | undefined {
        return users.find((user: UserInterface) => user.id === id);
    }

    public static getOneByEmail(email: string): UserInterface | undefined {
        return users.find((user: UserInterface) => user.email === email);
    }

    public static checkPassword(password: string, user: UserInterface): boolean {
        return user.password === password;
    }

    public static isValidEmail(email: string): boolean
    {
        return EmailValidator.isValid(email);
    }

    public static fetchLogin(formData: LoginFormDatas): Promise<Response>
    {
        return fetch('/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData),
        });
    }
}
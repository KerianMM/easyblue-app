import {UserInterface} from "../models/User";
import {LoginFormDatas} from "../interfaces/form/login";

export class UserService {
    public static checkPassword(password: string, user: UserInterface): boolean {
        return user.password === password;
    }

    public static fetchLogin(formData: LoginFormDatas): Promise<Response>
    {
        return fetch('/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData),
        });
    }

    public static fetchCurrent(email: string): Promise<Response>
    {
        return fetch('/api/users/current', {
            method: 'GET',
            headers: {
                'Authorization': email,
                'Content-Type': 'application/json',
            },
        });
    }

    public static async getCurrent(email: string): Promise<UserInterface|undefined>
    {
        const response: Response = await UserService.fetchCurrent(email);

        if (response.status !== 200) {
            return undefined
        } else {
            return await response.json();
        }
    }
}
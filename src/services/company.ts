import {CompanyInterface} from "@/models/Company";
import {UserInterface} from "@/models/User";

export class CompanyService {
    public static fetchOneByUser(user: UserInterface): Promise<Response>
    {
        return fetch(`/api/users/${user.id}/company`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    public static async getOneByUser(user: UserInterface): Promise<CompanyInterface|undefined>
    {
        const response: Response = await CompanyService.fetchOneByUser(user);

        if (response.status !== 200) {
            return undefined
        } else {
            return await response.json();
        }
    }
}
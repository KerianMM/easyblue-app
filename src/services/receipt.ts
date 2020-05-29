import {ReceiptInterface} from "@/models/Receipt";
import {UserInterface} from "@/models/User";

export class ReceiptService {
    public static fetchOneByUser(user: UserInterface): Promise<Response>
    {
        return fetch(`/api/users/${user.id}/receipts`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    public static async getOneByUser(user: UserInterface): Promise<ReceiptInterface[]|undefined>
    {
        const response: Response = await ReceiptService.fetchOneByUser(user);

        if (response.status !== 200) {
            return undefined
        } else {
            return await response.json();
        }
    }
}
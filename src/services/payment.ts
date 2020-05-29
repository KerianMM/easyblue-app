import {PaymentInterface} from "@/models/Payment";
import {UserInterface} from "@/models/User";

export class PaymentService {
    public static fetchOneByUser(user: UserInterface): Promise<Response>
    {
        return fetch(`/api/users/${user.id}/payment`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    public static async getOneByUser(user: UserInterface): Promise<PaymentInterface|undefined>
    {
        const response: Response = await PaymentService.fetchOneByUser(user);

        if (response.status !== 200) {
            return undefined
        } else {
            return await response.json();
        }
    }
}
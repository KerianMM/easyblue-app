import {ActivityInterface} from "@/models/Activity";
import {UserInterface} from "@/models/User";

export class ActivityService {
    public static fetchOneByUser(user: UserInterface): Promise<Response> {
        return fetch(`/api/users/${user.id}/activities`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    public static async getOneByUser(user: UserInterface): Promise<ActivityInterface[] | undefined> {
        const response: Response = await ActivityService.fetchOneByUser(user);

        if (response.status !== 200) {
            return undefined
        } else {
            return await response.json();
        }
    }
}
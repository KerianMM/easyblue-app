import {Base} from "@/models/Base";

export interface UserInterface extends Base {
    id: string;
    email: string;
    password: string;
    lastname: string;
    firstname: string;
}

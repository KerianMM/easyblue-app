export interface UserInterface {
    id: string;
    email: string;
    password: string;
    lastname: string;
    firstname: string;
}

export class User implements UserInterface {
    id: string;
    email: string;
    password: string;
    lastname: string;
    firstname: string;

    constructor(id: string, email: string, password: string, lastname: string, firstname: string) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.lastname = lastname;
        this.firstname = firstname;
    }
}
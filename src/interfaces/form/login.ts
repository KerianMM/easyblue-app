export interface LoginFormDatas {
    email: string;
    password: string;
}

export interface LoginFieldInterface {
    value: string;
    error: boolean;
    helper: string | null;
}

export interface LoginPasswordFieldInterface extends LoginFieldInterface {
    show: boolean
}

export interface LoginState {
    email: LoginFieldInterface,
    password: LoginPasswordFieldInterface,
}
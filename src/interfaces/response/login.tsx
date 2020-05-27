export interface LoginResponseSuccess {
    valid: true;
}

export interface LoginResponseError {
    valid: false;
    error: string;
}

export interface LoginResponseBadArgumentError extends LoginResponseError {
    field: string;
}

export interface LoginResponse {
    valid: boolean;
    error?: string | undefined;
    field?: string | undefined;
}
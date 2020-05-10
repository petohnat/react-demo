export const NAMESPACE = "user";

export interface UserResponse {
    email: string;
    image: string;
    username: string;
}

export interface User {
    email: string;
    image: string;
    username: string;
    isLogged: boolean;
}

export interface UserCredentials {
    email: string;
    password: string;
}

export type IState = User & {
    isLogged: boolean;
};

export const DEFAULT_STATE: IState = {
    email: "",
    image: "",
    username: "",
    isLogged: false,
};

import {UserResponse, User} from "ui/organism/User/state";

export function createUser(userData: UserResponse): User {
    const loggedUser: User = {
        email: userData.email,
        image: userData.image,
        username: userData.username,
        isLogged: true,
    };
    
    return loggedUser;
}
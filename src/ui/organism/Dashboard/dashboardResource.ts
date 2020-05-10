import {UserResponse, User} from "service/User/state";

export function createUser(userData: UserResponse): User {
    const loggedUser: User = {
        email: userData.email,
        image: userData.image,
        username: userData.username,
        isLogged: true,
    };
    
    return loggedUser;
}
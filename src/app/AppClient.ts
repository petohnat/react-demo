import {createUser} from "ui/organism/Dashboard/dashboardResource";
import {User, UserCredentials, UserResponse} from "service/User/state";
import {Masterpiece} from "ui/organism/Masterpiece/MasterpieceResource";

export function getMasterpieces(): Masterpiece[] {
    return [1, 2, 3].map((item) => {
        return {
            id: `id-${Date.now()}`,
            name: {
                "sk": `Super názov ${item}`,
                "en": `Super name ${item}`,
            },
            description: {
                "sk": `Super popis ${item}`,
                "en": `Super description ${item}`,
            },
            order: item,
        };
    });
}

export function login(credentials: UserCredentials): { user: User } | Error {
    if (credentials.email === "user@gmail.com" && credentials.password === "123456") {
        const user = createUser({
            email: "user@gmail.com",
            image: "user.image",
            username: "user12345",
        } as unknown as UserResponse);

        return {
            user,
        };
    } else {
        throw new Error("Wrong credentials");
    }
}

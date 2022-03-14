import { Request } from "../Request";

export const UsersAPI = {
    getUsers: () => {
        return Request.get("/users");
    },
};

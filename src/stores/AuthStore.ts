import { makeAutoObservable } from "mobx";
import { ILogin } from "../interfaces/ILogin";
import { UsersAPI } from "../core/api/UsersApi";
import { ILoginResponse } from "../interfaces/ILoginResponse";
import { toast } from "react-toastify";

export class AuthStore {
    public isAuthorize: boolean = false;
    public isLoading: boolean = false;
    public isLoginModalOpen: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    authorize(loginData: ILogin) {
        this.isLoading = true;
        UsersAPI.getUsers()
            .then((response) => {
                let userIsExist = response.data.find(
                    (user: ILoginResponse) =>
                        user.username === loginData.username && user.password === loginData.password
                );

                if (userIsExist) {
                    this.isAuthorize = true;
                    this.isLoginModalOpen = false;
                    toast.success("Успешный вход!");
                } else {
                    toast.error("Ошибка ввода данных!");
                }
            })
            .finally(() => {
                this.isLoading = false;
            });
    }
}

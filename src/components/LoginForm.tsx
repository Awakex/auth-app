import React, { FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ILogin } from "../interfaces/ILogin";
import { useStores } from "../hooks/use-stores";
import { toast } from "react-toastify";

const LoginForm = () => {
    const [loginData, setLoginData] = useState<ILogin>({
        password: "",
        username: "",
    });
    const { authStore } = useStores();

    const handleSubmit = (e: FormEvent<EventTarget>) => {
        e.preventDefault();
        if (loginData.username.trim() && loginData.password.trim()) {
            authStore.authorize(loginData);
        } else {
            toast.error("Заполните все поля!");
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Логин</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Введите логин"
                    onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                    value={loginData.username}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Введите пароль"
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    value={loginData.password}
                />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={authStore.isLoading}>
                Вход
            </Button>
        </Form>
    );
};

export default LoginForm;

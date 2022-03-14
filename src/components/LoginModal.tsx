import React from "react";
import { Modal } from "react-bootstrap";
import { useStores } from "../hooks/use-stores";
import { observer } from "mobx-react";
import LoginForm from "./LoginForm";

const LoginModal = observer(() => {
    const { authStore } = useStores();

    const handleCloseModal = () => {
        authStore.isLoginModalOpen = false;
    };

    return (
        <Modal show={authStore.isLoginModalOpen} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Авторизация</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <LoginForm />
            </Modal.Body>
        </Modal>
    );
});

export default LoginModal;

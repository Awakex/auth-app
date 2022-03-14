import React from "react";
import { useStores } from "../hooks/use-stores";
import { observer } from "mobx-react";
import { Button } from "react-bootstrap";
import LoginModal from "./LoginModal";
import { useNavigate } from "react-router-dom";

const AuthControl = observer(() => {
    const { authStore } = useStores();
    let navigate = useNavigate();

    return (
        <div>
            {authStore.isAuthorize ? (
                <React.Fragment>
                    <h3>Вы в системе</h3>
                    <Button variant="primary" className="m-2" onClick={() => navigate("/contacts")}>
                        Контакты
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => {
                            authStore.isAuthorize = false;
                            navigate("/");
                        }}
                    >
                        Выход
                    </Button>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <h3>Вы не в системе</h3>
                    <LoginModal />
                    <Button variant="primary" onClick={() => (authStore.isLoginModalOpen = true)}>
                        Вход
                    </Button>
                </React.Fragment>
            )}
        </div>
    );
});

export default AuthControl;

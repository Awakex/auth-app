import React from "react";
import { Modal } from "react-bootstrap";
import { useStores } from "../hooks/use-stores";
import { observer } from "mobx-react";
import ContactForm from "./ContactForm";

const ContactModal = observer(() => {
    const { contactStore } = useStores();

    const handleCloseModal = () => {
        contactStore.isContactModalOpen = false;
    };

    return (
        <Modal show={contactStore.isContactModalOpen} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Контакт</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ContactForm />
            </Modal.Body>
        </Modal>
    );
});

export default ContactModal;

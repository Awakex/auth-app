import React, { FormEvent, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { IContact } from "../interfaces/IContact";
import { toast } from "react-toastify";
import { useStores } from "../hooks/use-stores";

const ContactForm = () => {
    const [contactData, setContactData] = useState<IContact>({
        id: 0,
        username: "",
        telephone: "",
        description: "",
    });

    const [isEditMode, setIsEditMode] = useState(false);
    const { contactStore } = useStores();

    useEffect(() => {
        if (contactStore.contactForEdit) {
            setContactData(contactStore.contactForEdit);
            setIsEditMode(true);
        } else {
            setIsEditMode(false);
        }
    }, [contactStore.contactForEdit]);

    const handleSubmit = (e: FormEvent<EventTarget>) => {
        e.preventDefault();
        if (contactData.username.trim() && contactData.telephone.trim()) {
            if (isEditMode) {
                contactStore.editContact(contactData);
            } else {
                contactStore.createContact(contactData);
            }
        } else {
            toast.error("Заполните все поля!");
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Имя</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Введите имя"
                    onChange={(e) => setContactData({ ...contactData, username: e.target.value })}
                    value={contactData.username}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Телефон</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Введите телефон"
                    onChange={(e) => setContactData({ ...contactData, telephone: e.target.value })}
                    value={contactData.telephone}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Описание</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Введите описание"
                    onChange={(e) =>
                        setContactData({ ...contactData, description: e.target.value })
                    }
                    value={contactData.description}
                />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={contactStore.isContactsLoading}>
                Сохранить
            </Button>
        </Form>
    );
};

export default ContactForm;

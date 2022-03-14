import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { useStores } from "../hooks/use-stores";
import { IContact } from "../interfaces/IContact";
import { Button, Form } from "react-bootstrap";
import ContactModal from "./ContactModal";

const Contacts = observer(() => {
    const { contactStore } = useStores();

    useEffect(() => {
        contactStore.getContacts();
    }, []);

    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="p-3">
            <ContactModal />
            <h2 className="mt-5">Контакты</h2>

            <Form.Control
                className="w-50"
                type="text"
                placeholder="Поиск по имени"
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            {contactStore.isContactsLoading ? (
                <p>Загрузка контактов...</p>
            ) : (
                <React.Fragment>
                    <Button
                        variant="success"
                        onClick={() => {
                            contactStore.contactForEdit = null;
                            contactStore.isContactModalOpen = true;
                        }}
                        className="m-3"
                    >
                        Создать
                    </Button>
                    {contactStore.contacts.length > 0 ? (
                        <React.Fragment>
                            <ul>
                                {contactStore.contacts
                                    .filter((contact: IContact) =>
                                        contact.username
                                            .toLowerCase()
                                            .includes(searchQuery.toLowerCase())
                                    )
                                    .map((contact: IContact) => (
                                        <li key={contact.id}>
                                            ID: {contact.id} <br /> Имя: {contact.username} <br />{" "}
                                            Телефон: {contact.telephone} <br /> Описание:{" "}
                                            {contact.description}
                                            <br />
                                            <Button
                                                variant="warning"
                                                className="m-2"
                                                onClick={() => {
                                                    contactStore.contactForEdit = contact;
                                                    contactStore.isContactModalOpen = true;
                                                }}
                                            >
                                                Редактировать
                                            </Button>
                                            <Button
                                                variant="danger"
                                                onClick={() =>
                                                    contactStore.deleteContact(contact.id)
                                                }
                                            >
                                                Удалить
                                            </Button>
                                        </li>
                                    ))}
                            </ul>
                        </React.Fragment>
                    ) : (
                        <p>Контактов нет</p>
                    )}
                </React.Fragment>
            )}
        </div>
    );
});

export default Contacts;

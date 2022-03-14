import { IContact } from "../../interfaces/IContact";
import { Request } from "../Request";

export const ContactAPI = {
    getContacts: () => {
        return Request.get("/contacts");
    },

    deleteContact: (id: number) => {
        return Request.delete(`/contacts/${id}`);
    },

    createContact: (contact: IContact) => {
        return Request.post(`/contacts/`, contact);
    },

    editContact: (contact: IContact) => {
        return Request.put(`/contacts/${contact.id}`, contact);
    },
};

import { makeAutoObservable } from "mobx";
import { IContact } from "../interfaces/IContact";
import { ContactAPI } from "../core/api/ContactApi";
import { toast } from "react-toastify";

export class ContactStore {
    public contacts: IContact[] = [];
    public isContactsLoading: boolean = false;
    public isContactModalOpen: boolean = false;
    public contactForEdit: IContact | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    getContacts() {
        this.isContactsLoading = true;
        ContactAPI.getContacts()
            .then((response) => {
                this.contacts = response.data;
            })
            .finally(() => {
                this.isContactsLoading = false;
            });
    }

    deleteContact(id: number) {
        this.isContactsLoading = true;
        ContactAPI.deleteContact(id)
            .then((response) => {
                toast.success("Запись удалена");
                this.getContacts();
            })
            .finally(() => {
                this.isContactsLoading = false;
            });
    }

    createContact(contactData: IContact) {
        this.isContactsLoading = true;
        ContactAPI.createContact(contactData)
            .then((response) => {
                toast.success("Запись сохранена");
                this.isContactModalOpen = false;
                this.getContacts();
            })
            .finally(() => {
                this.isContactsLoading = false;
            });
    }

    editContact(contactData: IContact) {
        this.isContactsLoading = true;
        ContactAPI.editContact(contactData)
            .then((response) => {
                toast.success("Запись отредактирована");
                this.isContactModalOpen = false;
                this.contactForEdit = null;
                this.getContacts();
            })
            .finally(() => {
                this.isContactsLoading = false;
            });
    }
}

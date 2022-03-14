import { createContext } from "react";
import { AppStore } from "./AppStore";
import { AuthStore } from "./AuthStore";
import { ContactStore } from "./ContactStore";

export const rootStoreContext = createContext({
    appStore: new AppStore(),
    authStore: new AuthStore(),
    contactStore: new ContactStore(),
});

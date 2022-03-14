import axios from "axios";
import { API_URL } from "./Url";

export const Request = axios.create({
    baseURL: API_URL,
    timeout: 5000,
});

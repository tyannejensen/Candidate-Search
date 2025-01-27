import { Candidate } from "../interfaces/Candidate.interface";

export class LocalStorageService {
    static setItem(key: string, value: Candidate) {
        localStorage
            .setItem(key, JSON.stringify(value));
    }
    static getItem(key: string) {
        const value = localStorage
            .getItem(key);
        return value ? JSON.parse(value) : null;
    }
    static removeItem(key: string) {
        localStorage.removeItem(key);
    }
}
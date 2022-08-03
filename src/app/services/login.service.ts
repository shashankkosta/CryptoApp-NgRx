import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Login } from "../models/login.models";

@Injectable()
export class LoginService {
    validCredentials: Login[] = [
        { username: 'test1', password: 'test' },
        { username: 'test2', password: 'test' },
    ];

    validateLogin(loginCred: Login): boolean {
        const userIndex = this.validCredentials.findIndex(
            x => x.username.toUpperCase() === loginCred.username.toUpperCase()
                && x.password.toUpperCase() === loginCred.password.toUpperCase());

        if (userIndex >= 0)
            return true;
        return false;

        // if (userIndex >= 0)
        //     return this.validCredentials[userIndex];
        // return null;
    }
}
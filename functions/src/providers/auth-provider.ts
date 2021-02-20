import * as admin from 'firebase-admin';
import * as firebase from 'firebase';
import IAuthProvider from "./iauth-provider";
import UsersDTO from "../models/users-dto";
import {GenericObject} from "../types";

class AuthProvider implements IAuthProvider {

    // The api reference for the types used can be found
    // https://firebase.google.com/docs/reference/admin/node/admin.auth
    // and here https://firebase.google.com/docs/reference/node/firebase.auth.Auth respectively
    constructor (private readonly authService:admin.auth.Auth, private readonly loginHelper:firebase.default.auth.Auth) {}

    async createUser(userData: UsersDTO): Promise<GenericObject> {
        const {email, password} = userData;

        const result = await this.authService.createUser({
            email,
            password
        });
        return {
            ...result
        }
    }

    async loginUser(email: string, password: string): Promise<GenericObject> {
        const user = await this.loginHelper.signInWithEmailAndPassword(email, password);
        return {
            ...user
        }
    }

}

export default AuthProvider

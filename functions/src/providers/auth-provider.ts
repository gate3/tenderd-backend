import * as admin from 'firebase-admin';
import * as firebase from 'firebase';
import IAuthProvider from "./iauth-provider";
import UsersDTO from "../models/users-dto";
import {GenericObject} from "../types";

class AuthProvider implements IAuthProvider {
    private errorMessages = {
        USER_NOT_FOUND: 'User not found or information provided is incorrect.'
    }
    // The api reference for the types used can be found
    // https://firebase.google.com/docs/reference/admin/node/admin.auth
    // and here https://firebase.google.com/docs/reference/node/firebase.auth.Auth respectively
    constructor (private readonly authService:admin.auth.Auth, private readonly loginHelper:firebase.default.auth.Auth) {}

    async createUser(userDto: UsersDTO, password: string): Promise<UsersDTO> {
        const {email} = userDto;

        const newUser = await this.authService.createUser({
            email,
            password
        });
        userDto.id = newUser.uid;

        return userDto;
    }

    async loginUser(email: string, password: string): Promise<GenericObject> {
        const {user} = await this.loginHelper.signInWithEmailAndPassword(email, password);
        if (user) {
            const token = await user.getIdToken();
            // Returning the token as an object makes this function extensible, we could have returned a string
            return {
                userId: user.uid,
                token
            }
        }
        throw new Error(this.errorMessages.USER_NOT_FOUND)
    }

}

export default AuthProvider

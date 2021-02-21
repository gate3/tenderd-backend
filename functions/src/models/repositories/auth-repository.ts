import IAuthProvider from "../../providers/iauth-provider";
import UsersDTO from "../users-dto";
import {GenericObject} from "../../types";

class AuthRepository {

    constructor(private readonly authProvider: IAuthProvider) {}

    async signUpUser (usersDTO: UsersDTO, password: string):Promise<UsersDTO> {
        return this.authProvider.createUser(usersDTO, password);
    }

    async loginUser (email:string, password: string): Promise<GenericObject> {
        return this.authProvider.loginUser(email, password);
    }
}

export default AuthRepository;

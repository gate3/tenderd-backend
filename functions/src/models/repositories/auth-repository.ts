import IAuthProvider from "../../providers/iauth-provider";
import UsersDTO from "../users-dto";
import IDalProvider from "../../providers/idal-provider";
import {COLLECTIONS} from "../constants";
import {GenericObject} from "../../types";

class AuthRepository {

    constructor(
        private readonly authProvider: IAuthProvider,
        private readonly dalProvider: IDalProvider
    ) {
        this.dalProvider.setCollectionName(COLLECTIONS.USERS)
    }

    async signUpUser (usersDTO: UsersDTO, password: string):Promise<UsersDTO> {
        return this.authProvider.createUser(usersDTO, password);
    }

    async loginUser (email:string, password: string): Promise<GenericObject> {
        const loginResponse = await this.authProvider.loginUser(email, password);
        return loginResponse
    }
}

export default AuthRepository;

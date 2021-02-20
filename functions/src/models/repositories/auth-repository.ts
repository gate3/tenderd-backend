import IAuthProvider from "../../providers/iauth-provider";
import UsersDTO from "../users-dto";
import IDalProvider from "../../providers/idal-provider";
import {COLLECTIONS, ERROR_MESSAGES} from "../constants";
import {classToPlain} from "class-transformer";
import {GenericObject} from "../../types";

class AuthRepository {

    constructor(
        private readonly authProvider: IAuthProvider,
        private readonly dalProvider: IDalProvider
    ) {
        this.dalProvider.setCollectionName(COLLECTIONS.USERS)
    }

    async signUpUser (usersDTO: UsersDTO, password: string):Promise<UsersDTO> {
        const user = await this.authProvider.createUser(usersDTO, password);
        const userData = classToPlain(usersDTO);
        if (user.id) {
            await this.dalProvider.create(user.id, userData);
            return user;
        }
        throw new Error(ERROR_MESSAGES.GENERIC_ERROR)
    }

    async loginUser (email:string, password: string): Promise<GenericObject> {
        const loginResponse = await this.authProvider.loginUser(email, password);
        return loginResponse
    }
}

export default AuthRepository;

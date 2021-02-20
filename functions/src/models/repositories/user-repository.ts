import IDalProvider from "../../providers/idal-provider";
import {COLLECTIONS} from "../constants";
import UsersDTO from "../users-dto";
import {classToPlain} from "class-transformer";

class UserRepository {

    constructor(
        private readonly dalProvider: IDalProvider
    ) {
        this.dalProvider.setCollectionName(COLLECTIONS.USERS)
    }

    async createUserRecord (id:string, usersDto:UsersDTO):Promise<UsersDTO> {
        const userData = classToPlain(usersDto);
        await this.dalProvider.create(id, userData);
        usersDto.id = id;
        return usersDto;
    }
}

export default UserRepository;

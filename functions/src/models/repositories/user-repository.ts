import IDalProvider from "../../providers/idal-provider";
import {COLLECTIONS} from "../constants";
import UsersDTO from "../users-dto";
import {classToPlain, plainToClass} from "class-transformer";

class UserRepository {

    constructor(private readonly dalProvider: IDalProvider) {}

    setCollectionName ():void {
        this.dalProvider.setCollectionName(COLLECTIONS.USERS)
    }

    async createUserRecord (id:string, usersDto:UsersDTO):Promise<UsersDTO> {
        this.setCollectionName();

        const userData = classToPlain(usersDto);
        await this.dalProvider.create(id, userData);
        usersDto.id = id;
        return usersDto;
    }

    async fetchUserById (userId:string):Promise<UsersDTO> {
        this.setCollectionName();

        const user = await this.dalProvider.fetchById(userId);
        return plainToClass(UsersDTO, user);
    }
}

export default UserRepository;

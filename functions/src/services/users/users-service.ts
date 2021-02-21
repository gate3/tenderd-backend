import UserRepository from "../../models/repositories/user-repository";
import {GenericObject} from "../../types";
import UserValidator from './user-validator';
import {classToPlain, plainToClass} from "class-transformer";
import UsersDTO from "../../models/users-dto";
import AuthRepository from "../../models/repositories/auth-repository";

class UsersService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly authRepository: AuthRepository
    ) {}

    async createUser (userPayload:GenericObject):Promise<GenericObject> {
        await UserValidator(userPayload); // This throws an error if Joi validation fails
        const userDto = plainToClass(UsersDTO, userPayload)

        const {id} = await this.authRepository.signUpUser(userDto, <string>userPayload.password);
        const userRecord = await this.userRepository.createUserRecord(<string>id, userDto);

        return classToPlain(userRecord)
    }

    async loginUser (email:string, password:string):Promise<GenericObject> {
        return this.authRepository.loginUser(email, password)
    }
}

export default UsersService

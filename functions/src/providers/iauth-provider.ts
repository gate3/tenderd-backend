import {GenericObject} from "../types";
import UsersDTO from "../models/users-dto";

interface IAuthProvider {
    createUser (userData:UsersDTO):Promise<GenericObject>
    loginUser (email:string, password:string):Promise<GenericObject>
}

export default IAuthProvider

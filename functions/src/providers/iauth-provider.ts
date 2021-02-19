import {GenericObject} from "../types";

interface IAuthProvider {
    createUser (userData:GenericObject):GenericObject
    loginUser (email:string, password:string):GenericObject
}

export default IAuthProvider

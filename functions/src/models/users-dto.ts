import {CompanyReferenceEntity} from "./reference-entity-types";

class UsersDTO {
    constructor(
        readonly name:string,
        readonly email:string,
        readonly password:string,
        readonly company:CompanyReferenceEntity,
        readonly id?:string
    ) {}
}

export default UsersDTO;

import {UserReferenceEntity} from "./reference-entity-types";

class CompanyDTO {
    constructor(
        readonly name:string,
        readonly id?:string,
        readonly users?:Array<UserReferenceEntity>
    ) {}
}

export default CompanyDTO;

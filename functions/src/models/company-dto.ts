import {UserReferenceEntity} from "./reference-entity-types";

class CompanyDTO {
    id?:string;
    name = '';
    users:Array<UserReferenceEntity> = [];
}

export default CompanyDTO;

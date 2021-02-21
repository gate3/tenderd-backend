import {UserReferenceEntity} from "./reference-entity-types";
import {Type} from "class-transformer";

class CompanyDTO {
    id?:string;
    name = '';
    location = '';
    @Type (() => UserReferenceEntity)
    users:UserReferenceEntity = new UserReferenceEntity();
}

export default CompanyDTO;

import {UserReferenceEntity} from "./reference-entity-types";
import {Type} from "class-transformer";

class CompanyDTO {
    id?:string;
    name = '';

    @Type (() => UserReferenceEntity)
    users:Array<UserReferenceEntity> = [];
}

export default CompanyDTO;

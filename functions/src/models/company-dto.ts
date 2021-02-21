import {UserReferenceEntity} from "./reference-entity-types";
import {Exclude, Type} from "class-transformer";

class CompanyDTO {
    id?:string;
    name = '';
    location = '';

    @Type (() => UserReferenceEntity)
    @Exclude({ toClassOnly: true })
    users:UserReferenceEntity = new UserReferenceEntity();
}

export default CompanyDTO;

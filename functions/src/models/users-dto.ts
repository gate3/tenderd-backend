import {Type} from 'class-transformer';
import {CompanyReferenceEntity} from "./reference-entity-types";

class UsersDTO {
    name = '';
    email = '';
    @Type(() => CompanyReferenceEntity)
    company: CompanyReferenceEntity = new CompanyReferenceEntity();
    id?:string;
}

export default UsersDTO;

import { Type } from 'class-transformer';
import {CompanyReferenceEntity} from "./reference-entity-types";

class UsersDTO {
    id?:string;
    name = '';
    email = '';
    password = '';
    @Type (() => CompanyReferenceEntity)
    company!:CompanyReferenceEntity;
}

export default UsersDTO;

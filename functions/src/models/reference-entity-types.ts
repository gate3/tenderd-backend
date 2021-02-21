/*
 * The company reference entity is used as a child node for any entity
 * that needs to make a reference to a company without including the
 * full object of the company. This is a way of adding some required
 * fields that can be used initially before querying the entire company object.
 *
 */
import {Exclude} from "class-transformer";

export class CompanyReferenceEntity {
    companyId = '';
    companyName = '';
}

// The user entity is similar to the company entity above
export class UserReferenceEntity {
    id = '';
    name = '';
    @Exclude({ toPlainOnly: true })
    reference:any;
}

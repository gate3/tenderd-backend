export class UserCompanyEntity {
    constructor(readonly companyId:string, readonly companyName:string) {}
}

class UsersDTO {
    constructor(
        readonly name:string,
        readonly email:string,
        readonly password:string,
        readonly company:UserCompanyEntity,
        readonly id?:string
    ) {}
}

export default UsersDTO;

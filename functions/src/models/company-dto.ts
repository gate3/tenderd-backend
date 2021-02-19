export class CompanyUserEntity {
    constructor(readonly userId:string, readonly name:string) {}
}

class CompanyDTO {
    constructor(
        readonly name:string,
        readonly id?:string,
        readonly users?:Array<CompanyUserEntity>
    ) {}
}

export default CompanyDTO;

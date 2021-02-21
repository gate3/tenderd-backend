import IDalProvider from "../../providers/idal-provider";
import {COLLECTIONS} from "../constants";
import {UserReferenceEntity} from "../reference-entity-types";
import CompanyDTO from "../company-dto";
import {plainToClass} from "class-transformer";

class CompanyRepository {
    constructor(private readonly dalProvider: IDalProvider) {
        this.dalProvider.setCollectionName(COLLECTIONS.COMPANIES)
    }

    async fetchUsers (companyId:string):Promise<Array<UserReferenceEntity>|null> {
        const company = await this.dalProvider.fetchById(companyId);
        if (company == null) {
            return null
        }
        const { users } = company;
        if (users != null) {
            const usersList = users as Record<string, {name:string}>;
            return Object.keys(usersList).map(id => {
                const user = usersList[id];
                const userDto = new UserReferenceEntity();
                userDto.id = id;
                userDto.name = user.name;
                return userDto
            })
        }
        return []
    }

    async fetchCompanies ():Promise<Array<CompanyDTO>> {
        const companyList = await this.dalProvider.fetchAll();
        return companyList.map(company => (
            plainToClass(CompanyDTO, company)
        ))
    }
}

export default CompanyRepository;

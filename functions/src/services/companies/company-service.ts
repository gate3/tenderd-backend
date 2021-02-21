import CompanyRepository from "../../models/repositories/company-repository";
import {GenericObject} from "../../types";
import {classToPlain} from "class-transformer";

class CompanyService {
    constructor(private readonly companyRepository: CompanyRepository) {}

    async fetchAllUsers (companyId:string):Promise<Array<GenericObject>> {
        const users = await this.companyRepository.fetchUsers(companyId);
        if (users == null) {
            // Invalid company
            throw new Error('Invalid companyId provided.')
        }
        // This conversion is because we don't want to return typescript class objects back to the client.
        return users.map(user => classToPlain(user))
    }

    async fetchAllCompanies ():Promise<Array<GenericObject>> {
        const companies = await this.companyRepository.fetchCompanies();
        return companies.map(company => (
            classToPlain(company)
        ))
    }
}

export default CompanyService

import IDalProvider from "../../providers/idal-provider";
import {COLLECTIONS} from "../constants";
import RequestsDTO from "../requests-dto";
import {plainToClass} from "class-transformer";

class CompanyRepository {
    constructor(private readonly dalProvider: IDalProvider) {
        this.dalProvider.setCollectionName(COLLECTIONS.COMPANIES)
    }

    async fetchUsers ():Promise<Array<RequestsDTO>> {
        const newRequest = await this.dalProvider.fetchAll('users');
        return newRequest.map(user => (
            plainToClass(RequestsDTO, user)
        ))
    }
}

export default CompanyRepository;

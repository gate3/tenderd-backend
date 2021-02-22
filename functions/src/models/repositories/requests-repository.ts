import IDalProvider from "../../providers/idal-provider";
import {COLLECTIONS, QUERYABLE_FIELDS} from "../constants";
import RequestsDTO from "../requests-dto";
import {classToPlain, plainToClass} from "class-transformer";

class RequestsRepository {
    constructor(private readonly dalProvider: IDalProvider) {
        this.dalProvider.setCollectionName(COLLECTIONS.REQUESTS)
    }

    async createRequest (requestsDTO: RequestsDTO):Promise<RequestsDTO> {
        const requestsObject = classToPlain(requestsDTO);
        const newRequest = await this.dalProvider.createWithAutoId(requestsObject);
        return plainToClass(RequestsDTO, newRequest)
    }

    async fetchRequestsByCompanyId (companyId:string):Promise<Array<RequestsDTO>> {
        const requests = await this.dalProvider.fetchAllWithQuery(QUERYABLE_FIELDS.REQUESTS.COMPANY_ID, '==', companyId);
        return requests.map(request => (
            plainToClass(RequestsDTO, request)
        ))
    }

    async fetchRequestsByUserId (assignedToUserId:string):Promise<Array<RequestsDTO>> {
        const requests = await this.dalProvider.fetchAllWithQuery(QUERYABLE_FIELDS.REQUESTS.ASSIGNED_TO_USER, '==', assignedToUserId);
        return requests.map(request => (
            plainToClass(RequestsDTO, request)
        ))
    }
}

export default RequestsRepository;

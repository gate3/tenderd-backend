import IDalProvider from "../../providers/idal-provider";
import {COLLECTIONS} from "../constants";
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
}

export default RequestsRepository;

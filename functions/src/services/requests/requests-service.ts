import {GenericObject} from "../../types";
import RequestsRepository from "../../models/repositories/requests-repository";
import RequestsValidator from './requests-validator';
import {generateCurrentTimeStamp} from "../../utilities/helpers";
import {classToPlain, plainToClass} from "class-transformer";
import RequestsDTO from "../../models/requests-dto";

class RequestsService {
    constructor(private readonly requestsRepository: RequestsRepository) {}

    async createRequest (requestPayload:GenericObject):Promise<GenericObject> {
        await RequestsValidator(requestPayload);
        const currentTimeStamp = generateCurrentTimeStamp();

        const requestDto:RequestsDTO = plainToClass(RequestsDTO, requestPayload);
        requestDto.createdDate = currentTimeStamp;
        requestDto.lastupdatedDate = currentTimeStamp;
        requestDto.statusCreatedDate = currentTimeStamp;

        const newRequest = await this.requestsRepository.createRequest(requestDto);
        return classToPlain(newRequest);
    }

    async fetchAllCompanyRequests (companyId:string):Promise<Array<GenericObject>> {
        const requests = await this.requestsRepository.fetchRequestsByCompanyId(companyId)
        return requests.map(request => (
            classToPlain(request)
        ))
    }

    async fetchAllUserRequests (userId:string):Promise<Array<GenericObject>> {
        const requests = await this.requestsRepository.fetchRequestsByUserId(userId);
        return requests.map(request => (
            classToPlain(request)
        ))
    }
}

export default RequestsService;

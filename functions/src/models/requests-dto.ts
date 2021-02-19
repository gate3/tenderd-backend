import {CompanyReferenceEntity, UserReferenceEntity} from "./reference-entity-types";

type RequestType = 'Breakdown'|'Maintenance'|'Replacement'|'Demobilisation';
type RequestStatus = 'Created'|'In Progress'|'Completed'|'Cancelled';

class RequestAsset {
    constructor (readonly name:string, readonly url:string, readonly fileType: string){}
}

class RequestStatusHistoryItem {
    constructor (
        readonly currentStatus:string,
        readonly newStatus:string,
        readonly dateChanged: string,
        readonly description: string,
        readonly id?:string
    ) {}
}

class RequestsDTO {
    constructor(
        readonly type:RequestType,
        readonly description: string,
        readonly asset: RequestAsset,
        readonly status: RequestStatus,
        readonly statusCreatedDate: string,
        readonly statusCompletedDate: string,
        readonly statusHistory: Array<RequestStatusHistoryItem>,
        readonly company: CompanyReferenceEntity,
        readonly user: UserReferenceEntity,
        readonly createdDate: string,
        readonly lastupdatedDate: string,
        readonly id?:string,
    ) {}
}

export default RequestsDTO;

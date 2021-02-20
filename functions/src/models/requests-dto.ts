import {CompanyReferenceEntity, UserReferenceEntity} from "./reference-entity-types";

type RequestType = 'Breakdown'|'Maintenance'|'Replacement'|'Demobilisation';
type RequestStatus = 'Created'|'In Progress'|'Completed'|'Cancelled';

class RequestAsset {
    name = '';
    url = '';
    fileType = '';
}

class RequestStatusHistoryItem {
    currentStatus = '';
    newStatus = '';
    dateChanged = '';
    description = '';
    id?:string
}

class RequestsDTO {
    type!:RequestType;
    description = '';
    asset!:RequestAsset;
    status!:RequestStatus;
    statusCreatedDate = '';
    statusCompletedDate = '';
    statusHistory:Array<RequestStatusHistoryItem> = [];
    company!: CompanyReferenceEntity;
    user!: UserReferenceEntity;
    createdDate = '';
    lastupdatedDate = '';
    id?:string;
}

export default RequestsDTO;

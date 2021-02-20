import {CompanyReferenceEntity, UserReferenceEntity} from "./reference-entity-types";
import {Type} from "class-transformer";

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
    type:RequestType = <RequestType>'';
    description = '';
    asset:RequestAsset = new RequestAsset();
    status:RequestStatus = <RequestStatus>'';
    statusCreatedDate = '';
    statusCompletedDate = '';

    @Type (() => RequestStatusHistoryItem)
    statusHistory:Array<RequestStatusHistoryItem> = [];

    @Type (() => CompanyReferenceEntity)
    company: CompanyReferenceEntity = new CompanyReferenceEntity();

    @Type (() => UserReferenceEntity)
    user: UserReferenceEntity = new UserReferenceEntity();

    createdDate = '';
    lastupdatedDate = '';
    id?:string;
}

export default RequestsDTO;

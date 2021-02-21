import {CompanyReferenceEntity, UserReferenceEntity} from "./reference-entity-types";
import {Exclude, Type} from "class-transformer";

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
    dateChanged:number = 0;
    description = '';
    id?:string
}

// The GenericType <T> in this case represents a any timestamp Type. The purpose is to decouple from firebase by making the timestamp type flexible.
// Firebase timestamp type is called Fieldvalue, this will be used and a string can also be assigned.
class RequestsDTO {
    type:RequestType = <RequestType>'';
    description = '';
    asset:RequestAsset = new RequestAsset();
    status:RequestStatus = <RequestStatus>'';
    statusCreatedDate:number = 0;
    statusCompletedDate:string = '';

    @Exclude({ toPlainOnly: true })
    @Type (() => RequestStatusHistoryItem)
    statusHistory:Array<RequestStatusHistoryItem> = [];

    @Type (() => CompanyReferenceEntity)
    company: CompanyReferenceEntity = new CompanyReferenceEntity();

    @Type (() => UserReferenceEntity)
    assignedToUser: UserReferenceEntity = new UserReferenceEntity();

    createdDate:number = 0;
    lastupdatedDate:number = 0;
    id?:string;
}

export default RequestsDTO;

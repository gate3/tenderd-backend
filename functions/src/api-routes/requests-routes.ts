import * as express from 'express';
const api = express.Router();

import {ROUTES} from "./constants";
import {requestsService} from "../di-container";
import * as httpRequestHelper from "./http-request-helper";
const {VERSIONS, REQUESTS} = ROUTES

const createRequest = async (request:express.Request, response:express.Response):Promise<express.Response> => {
    try {
        const result = await requestsService.createRequest(request.body);
        return httpRequestHelper.successResponse(response, result)
    }catch (e) {
        return httpRequestHelper.errorResponse(response, e)
    }
};

api.post(`${VERSIONS.V1}${REQUESTS.BASE_URL}`, createRequest);


const updateRequest = ():void => {

};

api.put(`${VERSIONS.V1}${REQUESTS.BASE_URL}`, updateRequest);


export default api

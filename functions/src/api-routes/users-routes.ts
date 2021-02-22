import * as express from 'express';
const api = express.Router();

import {ROUTES} from "./constants";
import {requestsService} from "../di-container";
import * as httpRequestHelper from "./http-request-helper";
const {VERSIONS, USERS} = ROUTES;

const updateProfile = (req:express.Request, res:express.Response):void => {

};

api.put(`${VERSIONS.V1}${USERS.BASE_URL}`, updateProfile);

const fetchAllUserRequests = async (request:express.Request, response:express.Response):Promise<express.Response> => {
    try {
        const userId = request.params[USERS.USER_ID];

        const result = await requestsService.fetchAllUserRequests(userId);
        return httpRequestHelper.successResponse(response, result)
    }catch (e) {
        return httpRequestHelper.errorResponse(response, e)
    }
};

api.get(`${VERSIONS.V1}${USERS.BASE_URL}${USERS.USER_ID_PATH}${USERS.REQUESTS}`, fetchAllUserRequests);


export default api

import * as express from 'express';
const api = express.Router();

import {ROUTES} from "./constants";
import {companyService, requestsService} from "../di-container";
import * as httpRequestHelper from "./http-request-helper";

const {VERSIONS, COMPANIES} = ROUTES;

const fetchAllCompanyRequest = async (request:express.Request, response:express.Response):Promise<express.Response> => {
    try {
        const companyId = request.params[COMPANIES.COMPANY_ID];

        const result = await requestsService.fetchAllCompanyRequests(companyId);
        return httpRequestHelper.successResponse(response, result)
    }catch (e) {
        return httpRequestHelper.errorResponse(response, e)
    }
};

api.get(`${VERSIONS.V1}${COMPANIES.BASE_URL}${COMPANIES.COMPANY_ID_PATH}${COMPANIES.REQUESTS}`, fetchAllCompanyRequest);


const fetchAllCompanies = async (request:express.Request, response:express.Response):Promise<express.Response> => {
    try {
        const result = await companyService.fetchAllCompanies();
        return httpRequestHelper.successResponse(response, result)
    }catch (e) {
        return httpRequestHelper.errorResponse(response, e)
    }
};

api.get(`${VERSIONS.V1}${COMPANIES.BASE_URL}`, fetchAllCompanies);


const fetchAllUsersByCompanyId = async (request:express.Request, response:express.Response):Promise<express.Response> => {
    try {
        const companyId = request.params[COMPANIES.COMPANY_ID];
        const result = await companyService.fetchAllUsers(companyId);
        return httpRequestHelper.successResponse(response, result)
    }catch (e) {
        return httpRequestHelper.errorResponse(response, e)
    }
};

api.get(`${VERSIONS.V1}${COMPANIES.BASE_URL}${COMPANIES.COMPANY_ID_PATH}`, fetchAllUsersByCompanyId);

export default api

import * as express from 'express';
const api = express.Router();

import {ROUTES} from "./constants";
import {companyService} from "../di-container";
import * as httpRequestHelper from "./http-request-helper";

const {VERSIONS, COMPANIES} = ROUTES;

const fetchAllRequest = (request:express.Request, response:express.Response):void => {

};

api.get(`${VERSIONS.V1}${COMPANIES.BASE_URL}${COMPANIES.REQUESTS}`, fetchAllRequest);


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
        const paramName = COMPANIES.COMPANY_ID.substr(1); // COMPANY_ID is :companyId , this will give us the rest of the string without :
        const companyId = request.params[paramName];
        const result = await companyService.fetchAllUsers(companyId);
        return httpRequestHelper.successResponse(response, result)
    }catch (e) {
        return httpRequestHelper.errorResponse(response, e)
    }
};

api.get(`${VERSIONS.V1}${COMPANIES.BASE_URL}${COMPANIES.COMPANY_ID}`, fetchAllUsersByCompanyId);

export default api

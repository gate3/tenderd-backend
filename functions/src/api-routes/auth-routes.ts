import * as express from 'express';
import {StatusCodes} from "http-status-codes";
import * as httpRequestHelper from './http-request-helper';
import {userService} from '../di-container';

const api = express.Router();

import {ROUTES} from "./constants";
import CustomError from "../utilities/custom-error";
const {VERSIONS, AUTH} = ROUTES;

const createUser = async (request:express.Request, response:express.Response):Promise<express.Response> => {
    try {
        const result = await userService.createUser(request.body);
        return httpRequestHelper.successResponse(response, result, StatusCodes.CREATED)
    }catch (e) {
        return httpRequestHelper.errorResponse(response, e)
    }
};

api.post(`${VERSIONS.V1}${AUTH.BASE_URL}${AUTH.REGISTER}`, createUser);


const loginUser = async (request:express.Request, response:express.Response):Promise<express.Response> => {
    try {
        const {email, password} = request.body;
        if (!email || !password) {
            throw new CustomError('Please provider email and password!')
        }
        const result = await userService.loginUser(email, password);
        return httpRequestHelper.successResponse(response, result)
    }catch (e) {
        return httpRequestHelper.errorResponse(response, e)
    }
};

api.post(`${VERSIONS.V1}${AUTH.BASE_URL}${AUTH.LOGIN}`, loginUser);


export default api

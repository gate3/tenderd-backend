import StatusCodes from 'http-status-codes'
import * as express from 'express';
import CustomError from "../utilities/custom-error";

/**
 * @param {object} responseObject - The expressjs response object
 * @param statusCode - The error or success code, defaults to 0 for success
 * @param {object} data - The data to be returned back as a response
 * @return response object
 */
export const successResponse = (
    responseObject: express.Response ,
    data = {},
    statusCode = StatusCodes.OK,
) => (
    responseObject.status(statusCode).json(data)
);

/**
 * @param {object} responseObject - The expressjs response object
 * @param {object} errorObject - A javascript Error object
 * @param data - Any extra data to be passed with the error response
 * @return response object
 */
export const errorResponse = (
    responseObject: express.Response,
    errorObject: CustomError,
    data = {},
) => {
    const message = errorObject.message != null ? errorObject.message : "Failed";

    const statusCode = errorObject.statusCode ? errorObject.statusCode : StatusCodes.BAD_REQUEST;

    return responseObject.status(statusCode).json({
        msg: message,
        ...data,
    });
};

import * as Joi from 'joi';
import {GenericObject} from "../../types";
import {invalidValueSuppliedError} from "../../utilities/error-message-utils";
import {REQUESTS_TYPE, REQUESTS_STATUS} from "../../constants";

export default (requestsPayload:GenericObject) => {
    const stringRequriedRule = Joi.string().required();

    const assetSchema = Joi.object({
        name:  stringRequriedRule,
        url: stringRequriedRule,
        type: stringRequriedRule
    });

    const companySchema = Joi.object({
        companyId: Joi.string(),
        companyName: Joi.string()
    });

    const userSchema = Joi.object({
       userId: Joi.string(),
       name:  Joi.string()
    });

    const schema = Joi.object({
        type: stringRequriedRule
            .error(invalidValueSuppliedError('type'))
            .allow(Object.values(REQUESTS_TYPE)),

        description: stringRequriedRule.error(invalidValueSuppliedError('description')),
        assets: assetSchema,
        status: stringRequriedRule
            .error(invalidValueSuppliedError('status'))
            .allow(Object.values(REQUESTS_STATUS)),
        company: companySchema,
        assignedToUser: userSchema
    });

    return schema.validateAsync(requestsPayload);
}

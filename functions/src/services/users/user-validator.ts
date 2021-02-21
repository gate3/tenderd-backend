import * as Joi from 'joi';
import {GenericObject} from "../../types";
import {invalidValueSuppliedError} from "../../utilities/error-message-utils";

export default (userData:GenericObject) => {
    const stringRequriedRule = Joi.string().required();

    const companySchema = Joi.object({
        companyId: stringRequriedRule,
        companyName: stringRequriedRule
    });

    const schema = Joi.object({
        name: stringRequriedRule.error(invalidValueSuppliedError('name')),
        email: Joi.string().email().required(),
        password: stringRequriedRule.error(invalidValueSuppliedError('password')),
        company: companySchema
    });

    return schema.validateAsync(userData);
}

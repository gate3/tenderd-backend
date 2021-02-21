import * as Joi from 'joi';
import {GenericObject} from "../../types";
import {invalidValueSuppliedError} from "../../utilities/error-message-utils";

export default (userData:GenericObject) => {
    const stringRequriedRule = Joi.string().required();

    const schema = Joi.object({
        name: stringRequriedRule.error(invalidValueSuppliedError('name')),
        email: Joi.string().email().required(),
        password: stringRequriedRule.error(invalidValueSuppliedError('password')),
        companyId: stringRequriedRule.error(invalidValueSuppliedError('company details')),
        companyName: stringRequriedRule.error(invalidValueSuppliedError('company details')),
    });

    return schema.validateAsync(userData);
}

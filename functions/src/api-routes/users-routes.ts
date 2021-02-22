import * as express from 'express';
const api = express.Router();

import {ROUTES} from "./constants";
const {VERSIONS, USERS} = ROUTES;

const updateProfile = (req:express.Request, res:express.Response):void => {

};

api.put(`${VERSIONS.V1}${USERS.BASE_URL}`, updateProfile);

export default api

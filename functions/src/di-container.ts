// import {Container} from "typedi";
/**
 *
 * Manual injection was used here, but a dependency injection library like typedi would be used as normal practice
 */
import CompanyService from "./services/companies/company-service";
import CompanyRepository from "./models/repositories/company-repository";
import {DalFactory, AuthProviderFactory} from './providers';
import UsersService from "./services/users/users-service";
import UserRepository from "./models/repositories/user-repository";
import AuthRepository from "./models/repositories/auth-repository";
import RequestsRepository from "./models/repositories/requests-repository";
import RequestsService from "./services/requests/requests-service";

const dalProvider = DalFactory();
const authProvider = AuthProviderFactory();

const companyRepository = new CompanyRepository(dalProvider);
export const companyService = new CompanyService(companyRepository);

const authRepository = new AuthRepository(authProvider);
const userRepository = new UserRepository(dalProvider);
export const userService = new UsersService(userRepository, authRepository);

const requestRepository = new RequestsRepository(dalProvider);
export const requestsService = new RequestsService(requestRepository);

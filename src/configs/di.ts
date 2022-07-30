import 'reflect-metadata';
import { container } from 'tsyringe';
import AuthServiceMock from '../services/AuthService/AuthServiceMock';
// import AuthServiceProd from '../services/AuthService/AuthServiceProd';

container.register('AuthService', { useClass: AuthServiceMock });

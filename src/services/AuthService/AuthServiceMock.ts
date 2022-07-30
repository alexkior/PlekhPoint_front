import { injectable } from 'tsyringe';
import AuthService from './authService';

@injectable()
export default class AuthServiceMock extends AuthService {
  public auth(username: string, password: string): void {
    console.log(`this is MOCK: ${username} ${password} ${this.auth.name}`);
  }
}

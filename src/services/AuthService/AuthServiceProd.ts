import ldap from 'ldapjs';
import { injectable } from 'tsyringe';
import AuthService from './authService';

@injectable()
export default class AuthServiceProd extends AuthService {
  public auth(username: string, password: string): void {
    const client = ldap.createClient({
      url: 'ldap://example-route',
    });
    client.bind(username, password, (error, result) => {
      if (error) {
        console.error(this.auth);
      } else {
        console.log(result);
      }
    });
  }
}

export default abstract class AuthService {
  public abstract auth(username: string, password: string): void;
}

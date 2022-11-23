export class AuthUser {
  public id: string = '';
  public name: string = '';
  public email: string = '';
  public photoUrl: string = '';

  public accountId: string = '';
  public accountName: string = '';

  public token: string = '';
  public tokenExpirationDate: Date = new Date();

  public permissions: number[] = [];

  public static _currentUser: AuthUser;

  constructor(authUser: Partial<AuthUser>) {
    Object.assign(this, authUser);
  }

  public static getCurrentUser = async (): Promise<AuthUser> =>
    AuthUser._currentUser;

  public static setCurrentUser = async (authUser: AuthUser): Promise<void> => {
    AuthUser._currentUser = authUser;
  };

  public static isAuthenticated = async (): Promise<boolean> => {
    const user = await AuthUser.getCurrentUser();
    if (user && user.id && user.id !== '' && user.id !== '') {
      return true;
    }
    return false;
  };

  public static getPermissions = async (): Promise<number[]> => {
    if (await AuthUser.isAuthenticated()) {
      const user = await AuthUser.getCurrentUser();
      return user.permissions;
    }

    return [];
  };
}

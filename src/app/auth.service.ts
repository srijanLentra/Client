export class AuthService {
  loggedIn: boolean = false;
  adminLoggedIn: boolean = false;

  login() {
    this.loggedIn = true;
    sessionStorage.setItem('userAuthValidate', JSON.stringify(this.loggedIn));
  }

  logout() {
    this.loggedIn = false;
    sessionStorage.setItem('userAuthValidate', JSON.stringify(this.loggedIn));
  }

  adminLogin() {
    this.adminLoggedIn = true;
    sessionStorage.setItem(
      'adminAuthValidate',
      JSON.stringify(this.adminLoggedIn)
    );
  }

  adminLogout() {
    this.adminLoggedIn = false;
    sessionStorage.setItem(
      'adminAuthValidate',
      JSON.stringify(this.adminLoggedIn)
    );
  }

  isUserAuthenticated() {
    let user = sessionStorage.getItem('userAuthValidate');
    // console.log("isuserauthenticated? " + user);
    if (user != null && JSON.parse(user) != false) return true;
    else return false;
  }

  isAdminAuthenticated() {
    let admin = sessionStorage.getItem('adminAuthValidate');
    // console.log('isadminauthenticated? ' + admin);
    if (admin != null && JSON.parse(admin) != false) return true;
    else return false;
  }
}

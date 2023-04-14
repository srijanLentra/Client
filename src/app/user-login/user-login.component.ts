import { Component } from '@angular/core';
import { UserLoginServiceService } from '../user-login-service.service';
import { UserLogin } from '../model/userLogin';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { QuotesFormService } from '../quotes-form.service';
import { Quote } from '../model/quotesForm';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent  {
  loginDetails: UserLogin = new UserLogin();
  user!: Array<UserLogin>;
  email: number = 0;
  password: number = 0;
  userLoginData: boolean = false;
  userloginName: string = '';
  userloginEmail: string = '';
  userId!: number;
  users!: Quote[];
  constructor(
    private userLoginService: UserLoginServiceService,
    private router: Router,
    private authService: AuthService,
    private quoteService: QuotesFormService
  ) {}

  validate() {
    if (
      this.loginDetails.email.length == 0 ||
      this.loginDetails.email == undefined
    ) {
      this.email = 1;
    } else {
      this.email = 0;
    }
  }


  checkUser() {
    this.validate();
    let tempEmail = 0;
    let tempPass = 0;
    this.userLoginService.getAllUsers().subscribe((elements) => {
      for (let arg of elements) {
        if (arg.email === this.loginDetails.email) {
          if (arg.password === this.loginDetails.password) {
            tempEmail = 1;
            tempPass = 1;
            this.userloginName = arg.username;
            this.userloginEmail = arg.email;
            break;
          }
          tempEmail = 1;
        }
      }
      if (tempEmail == 1 && tempPass == 1) {
        alert('successfully logged in');
        this.userLoginData = true;
        this.authService.login();
        this.router.navigate(['']);
        let userObj = {
          username: this.userloginName,
          email: this.userloginEmail,
        };
        sessionStorage.setItem('userLoginCred', JSON.stringify(userObj));
        this.setId();
      } else if (tempEmail == 1) alert('password incorect');
      else alert('incorect username or password');
    });
  }

  setId() {
    let myObj;

    this.quoteService.getAllUsers().subscribe((data) => {
      this.users = data;
      let sessionLoginCred = sessionStorage.getItem('userLoginCred');
      let email = JSON.parse(sessionLoginCred || '').email;

      for (let el of this.users) {

        if (el.email === email) {
          this.userId = el.id;
          sessionStorage.setItem('userLoggedInId', JSON.stringify(this.userId));
        }
        // else {
        //   sessionStorage.setItem('userLoggedInId', JSON.stringify(null));
        // }
      }
    });
  }
}

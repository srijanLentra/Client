import { Component } from '@angular/core';
import { UserLogin } from '../model/userLogin';
import { UserLoginServiceService } from '../user-login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css'],
})
export class UserSignupComponent  {
  user: UserLogin = new UserLogin();
  cpassword!: string;
  success: boolean = false;
  constructor(private userloginservice: UserLoginServiceService, private router:Router) {}
  confirmPassword() {
    if (this.cpassword === this.user.password && this.user.password != null) {
      this.success = true;
    } else {
      this.success = false;
    }
  }

  onSubmit() {
    if (this.success) {
      this.userloginservice.addUser(this.user).subscribe(
        (data) => {
          alert('Added to Database');
        },
        (error) => {
          console.log('Error');
        }
      );
    }
    else{
      alert("Passwords do not match!");
      this.router.navigate(["user-signup"]);
    }
  }
}

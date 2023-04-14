import { Component } from '@angular/core';
import { AdminLogin } from '../model/adminLogin';
import { AdminloginService } from '../service/adminlogin.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent {
  loginDetails: AdminLogin = new AdminLogin();
  admin!: Array<AdminLogin>;
  adminLoginData: boolean=false;
  adminloginName: string = "";
  adminloginEmail: string = "";

  constructor(private adminLoginService: AdminloginService, private router:Router, private authService:AuthService) {}

  checkUser() {
    let tempEmail = 0;
    let tempPass = 0;
    this.adminLoginService.getAll().subscribe((arg) => {
        for(let element of arg){
        if (element.email === this.loginDetails.email) {
          if (element.password === this.loginDetails.password) {
            tempEmail = 1;
            tempPass = 1;
             this.adminloginName = element.username;
             this.adminloginEmail = element.email;
            break;
          }
          tempEmail = 1;
        }
      }
    if (tempEmail == 1 && tempPass == 1) {
      alert('successfully logged in');
      this.adminLoginData = true;
      this.authService.adminLogin();
      this.router.navigate(['admin']);
      let adminObj = {
        username: this.adminloginName,
        email: this.adminloginEmail,
      };
      sessionStorage.setItem('adminLoginCred', JSON.stringify(adminObj));
    } else if (tempEmail == 1) alert('password incorect');
    else alert('incorect username or password');
    });
  }
}

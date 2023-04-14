import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css'],
})
export class AdminNavbarComponent implements OnInit {
  adminUsername: any;
  adminEmail: any;
  isDropdownOpen = false;

  constructor(private router: Router, public authService: AuthService) {}

  ngOnInit(): void {
    if (this.authService.isAdminAuthenticated()) {
      if (sessionStorage.getItem('adminLoginCred') != null) {
        let parsed = JSON.parse(
          sessionStorage.getItem('adminLoginCred') || '{}'
        );
        this.adminUsername = parsed.username;
        this.adminEmail = parsed.email;
        // console.log("parsed = " + this.userUsername + " " + this.userEmail);
      }
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout() {
    this.authService.adminLogout();
    let el = document.getElementById('dropdownClose');
    el?.classList.add('hidden');
    this.router.navigate(['']);
    // console.log(el);
  }
}

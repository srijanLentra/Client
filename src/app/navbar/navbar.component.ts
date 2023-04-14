import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isDropdownOpen = false;
  userUsername: string = '';
  userEmail: string = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    if (this.authService.isUserAuthenticated()) {
      if (sessionStorage.getItem('userLoginCred') != null) {
        let parsed = JSON.parse(
          sessionStorage.getItem('userLoginCred') || '{}'
        );
        this.userUsername = parsed.username;
        this.userEmail = parsed.email;
        // console.log("parsed = " + this.userUsername + " " + this.userEmail);
      }
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toPlan() {
    console.log('hello');
    this.router.navigate(['premium-calculator']);
  }

  logout() {
    this.authService.logout();
    let el= document.getElementById('dropdownClose');
    el?.classList.add("hidden");
    // console.log(el);
  }

  toPlans() {
    this.router.navigate(['plans']);
  }
}

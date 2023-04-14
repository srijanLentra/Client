import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    this.authService.isAdminAuthenticated();
    if (this.authService.isAdminAuthenticated()) return true;
    else {
      this.router.navigate(['**'])
      // if (confirm('You must be logged in'))
      //   setTimeout(() => {
      //     this.router.navigate(['admin-login']);
      //   }, 1000);
      // else {
      //   this.router.navigate(['']);
      // }
      return false;
    }
  }
}

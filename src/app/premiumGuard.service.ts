import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root',
})
export class PremiumGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    this.authService.isUserAuthenticated();
    if (this.authService.isUserAuthenticated()) return true;
    else {
      if(confirm("You must be logged in"))
      setTimeout(() => {
        this.router.navigate(["user-login"]);
      }, 1000);
      else{
        this.router.navigate([""]);
      }
      return false;
    }
  }
}

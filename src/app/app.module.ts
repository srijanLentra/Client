import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { QuotesComponent } from './quotes/quotes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UnderWritingService } from './constant/under-writing.service';
import { FindPincodeService } from './constant/find-pincode.service';
import { PackageVarientComponent } from './package-varient/package-varient.component';
import { PlanComponent } from './plan/plan.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { OrdersComponent } from './orders/orders.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { ApprovalsComponent } from './approvals/approvals.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PremiumGuardService } from './premiumGuard.service';
import { AuthService } from './auth.service';
import { AdminGuardService } from './adminGuardService';
import { GeneratePdfComponent } from './generate-pdf/generate-pdf.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    QuotesComponent,
    PackageVarientComponent,
    PlanComponent,
    // PlanExtendedComponent,
    UserLoginComponent,
    UserSignupComponent,
    OrdersComponent,
    AdminHomeComponent,
    UpdateUserComponent,
    ApprovalsComponent,
    AdminLoginComponent,
    PageNotFoundComponent,
    GeneratePdfComponent,
    InfoComponent,
    AdminNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    UnderWritingService,
    FindPincodeService,
    PremiumGuardService,
    AuthService,
    AdminGuardService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

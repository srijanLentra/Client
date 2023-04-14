import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { QuotesComponent } from './quotes/quotes.component';
import { PackageVarientComponent } from './package-varient/package-varient.component';
import { PlanComponent } from './plan/plan.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { OrdersComponent } from './orders/orders.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ApprovalsComponent } from './approvals/approvals.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PremiumGuardService } from './premiumGuard.service';
import { AdminGuardService } from './adminGuardService';
import { GeneratePdfComponent } from './generate-pdf/generate-pdf.component';
import { InfoComponent } from './info/info.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    children: [
      { path: 'about', component: AboutComponent },
      {
        path: 'quotes',
        component: QuotesComponent,
        canActivate: [PremiumGuardService],
      },
      { path: 'premium-calculator', component: PlanComponent },
      {
        path: 'plans',
        component: PackageVarientComponent,
        canActivate: [PremiumGuardService],
      },
      { path: 'user-login', component: UserLoginComponent },
      { path: 'user-signup', component: UserSignupComponent },
      {
        path: 'orders',
        component: OrdersComponent,
        canActivate: [PremiumGuardService],
      },
      {
        path:"gpdf",component:GeneratePdfComponent, canActivate:[PremiumGuardService]
      },
        {path:"details/:id",component:InfoComponent, canActivate:[PremiumGuardService]}
    ],
  },
  {
    path: 'admin',
    component: AdminHomeComponent,
    canActivate: [AdminGuardService],
  },
  {
    path: '',
    children: [
      {
        path: 'approvals',
        component: ApprovalsComponent,
        canActivate: [AdminGuardService],
      },
      {
        path: 'admin-login',
        component: AdminLoginComponent
      },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ArrayOfComponents = [
  PlanComponent,
  PackageVarientComponent,
  QuotesComponent,
];

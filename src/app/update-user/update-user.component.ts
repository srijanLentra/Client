import { Component, OnInit } from '@angular/core';
import { QuotesFormService } from '../quotes-form.service';
import { Router } from '@angular/router';
import { Quote } from '../model/quotesForm';
import { UserLoginServiceService } from '../user-login-service.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  quote: Quote = new Quote();
  userId: number = 654;
  user: Quote = new Quote();
  isSmoker: string = 'No';
  users!: Quote[];

  constructor(
    private quoteService: QuotesFormService,
    private router: Router,
    private userLoginService: UserLoginServiceService
  ) {}

  ngOnInit(): void {

     let myObj;

     this.quoteService.getAllUsers().subscribe((data) => {
       this.users = data;
       let sessionLoginCred = sessionStorage.getItem('userLoginCred');
       let email = JSON.parse(sessionLoginCred || '').email;
       for (let el of this.users) {
         if (el.email === email) {
           this.userId = el.id;

           sessionStorage.setItem(
             'userLoggedInId',
             JSON.stringify(this.userId)
           );
         } else {
           sessionStorage.setItem('userLoggedInId', JSON.stringify(null));
         }
       }
     });

    let userid = JSON.stringify(sessionStorage.getItem('userLoggedInId') || null);
    this.userId = JSON.parse(userid);



    this.quoteService.getUser(this.userId).subscribe((data) => {
      this.user = data;

    });
    if (this.user.smoker) this.isSmoker = 'Yes';
  }

  validateUpdated(){
    if(this.quote.firstName==null && this.user.firstName!=null)
      this.quote.firstName = this.user.firstName;
    if(this.quote.lastName==null && this.user.lastName!=null)
      this.quote.lastName = this.user.lastName;
    if(this.quote.phone==null && this.user.phone!=null)
      this.quote.phone = this.user.phone;
    if(this.quote.email==null && this.user.email!=null)
      this.quote.email = this.user.email;
    if(this.quote.pinCode==null && this.user.pinCode!=null)
      this.quote.pinCode = this.user.pinCode;
    if(this.quote.dateOfBirth==null && this.user.dateOfBirth!=null)
      this.quote.dateOfBirth = this.user.dateOfBirth;
    if(this.quote.gender==null && this.user.gender!=null)
      this.quote.gender = this.user.gender;
    if(this.quote.occupation==null && this.user.occupation!=null)
      this.quote.occupation = this.user.occupation;
    if(this.quote.maritalStatus==null && this.user.maritalStatus!=null)
      this.quote.maritalStatus = this.user.maritalStatus;
    if(this.quote.dependentCount==null && this.user.dependentCount!=null)
      this.quote.dependentCount = this.user.dependentCount;

    if(this.user.smoker!=null)
      this.quote.smoker = this.user.smoker;
    if(this.user.hasDiabetes!=null)
      this.quote.hasDiabetes = this.user.hasDiabetes;
    if(this.user.heartPatient!=null)
      this.quote.heartPatient = this.user.heartPatient;
    if(this.user.hasExistingMedicalConditions!=null)
      this.quote.hasExistingMedicalConditions = this.user.hasExistingMedicalConditions;
    if(this.user.hasHazardousOccupation!=null)
      this.quote.hasHazardousOccupation = this.user.hasHazardousOccupation;
    if(this.user.hasFamilyHistoryOfIllness!=null)
      this.quote.hasFamilyHistoryOfIllness = this.user.hasFamilyHistoryOfIllness;
    if(this.user.hasHistoryOfSubstanceAbuse!=null)
      this.quote.hasHistoryOfSubstanceAbuse = this.user.hasHistoryOfSubstanceAbuse;
    if(this.user.hasHistoryOfMentalIllness!=null)
      this.quote.hasHistoryOfMentalIllness = this.user.hasHistoryOfMentalIllness;
    if(this.user.annualPremium!=null)
      this.quote.annualPremium = this.user.annualPremium;
    if(this.user.monthlyPremium!=null)
      this.quote.monthlyPremium = this.user.monthlyPremium;
    if(this.user.packageVarient!=null)
      this.quote.packageVarient = this.user.packageVarient;

  }

  onSubmit() {
    this.validateUpdated();
    this.quoteService.updateUser(this.userId, this.quote).subscribe((data) => {
      this.goToUserList();
    });
  }
  goToUserList() {
    this.router.navigate(['update-user']);
  }
}

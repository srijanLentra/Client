import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TermForm } from '../model/termForm';
import { UnderWritingService } from '../constant/under-writing.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css'],
})
export class PlanComponent implements OnInit {
  termForm: TermForm = new TermForm();
  buttonIncome!: string;
  buttonGender!: string;
  buttonNicotine!: string;
  buttonOccupation!: string;
  buttonQualification!: string;
  buttonYear!: number;
  buttonMonth!: string;
  premium: number = 0;
  age: number = 18;
  returnAmt!: number;
  returnamt:number=0;
  coverageYear:number=60;
  coveragecheck:boolean=true;
  // const cbox = document.getElementById("")

  constructor(
    private underWrittingService: UnderWritingService,
    private router: Router
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  checked(){
    const cbox = document.getElementById('returnToggle') as HTMLInputElement | null;
    if(cbox?.checked){
      this.returnamt=423;
      console.log("checkbox checked");
      this.calculate();
    }
    else{
      this.returnamt=  0;
      // console.log("pppp " + (this.premium- this.returnamt));

      this.calculate();
      console.log("not checked");
    }


  }
  calculateNow(){
    this.underWrittingService.ageRule(
      this.underWrittingService.calculateAge(this.termForm.dateOfBirth)
    );
    this.age = this.underWrittingService.age;
    console.log(this.age);

  }

  buttonIncomeClicked(event: any) {
    this.buttonIncome = event.target.id;
    if (this.buttonIncome == 'income3') this.termForm.annualIncome = 3;
    else if (this.buttonIncome == 'income6') this.termForm.annualIncome = 6;
    else if (this.buttonIncome == 'income10') this.termForm.annualIncome = 10;
    else this.termForm.annualIncome = 15;
  }

  buttonGenderClicked(event: any) {
    event.target.style.backgroundColor = 'salmon';
    this.buttonGender = event.target.textContent;
    this.termForm.gender = this.buttonGender;
    console.log(this.buttonGender);
  }

  buttonNicotineClicked(event: any) {
    event.target.style.backgroundColor = 'salmon';
    this.buttonNicotine = event.target.textContent;
    if (this.buttonNicotine == 'Yes') this.termForm.isSmoker = true;
    else this.termForm.isSmoker = false;
  }

  buttonOccupationClicked(event: any) {
    this.buttonOccupation = event.target.textContent;
  }

  buttonQualificationClicked(event: any) {
    this.buttonQualification = event.target.textContent;
    if (this.buttonQualification === ' Graduate and Above ')
      this.termForm.qualification = 0;
    else if (this.buttonQualification === ' 12th Pass ')
      this.termForm.qualification = 1;
    else this.termForm.qualification = 2;
  }

  buttonYearClicked(yrs: any) {
    this.coverageYear = yrs;
    this.coveragecheck=!this.coveragecheck;
  }

  convertMonthClicked(event: any) {
    this.buttonMonth = event.target.textContent;
  }

  calculate() {

    let divisibilityFactor;
      this.underWrittingService.ageRule(
        this.termForm.coverTillAge - this.underWrittingService.calculateAge(this.termForm.dateOfBirth)
        );
    console.log("age = ",this.age);

    console.log(this.underWrittingService.totalFactor);
    this.underWrittingService.occupationRule(this.buttonOccupation);
    this.underWrittingService.genderRule(this.buttonGender);
    this.underWrittingService.medicalConditionRule(
      this.termForm.isSmoker,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    );

    console.log("coverage year = " + this.coverageYear);


    const pre = this.coverageYear * this.termForm.lifeCover / 100;
    if(pre<=5.5)
      divisibilityFactor = 4;
    else if(pre<=9.5)
      divisibilityFactor=3.5;
    else if(pre<=13.5)
      divisibilityFactor=3;
    else if(pre<=17.5)
      divisibilityFactor=2.5;
    else if(pre <=25.5)
      divisibilityFactor=2;
    else if(pre<=37.5)
      divisibilityFactor=1.5;
      else
      divisibilityFactor=1

      console.log(this.underWrittingService.totalFactorAffectingInsurance() + " " + Math.log10(this.termForm.lifeCover*100000) + " " + Math.log10(this.coverageYear)* 1000 / divisibilityFactor + " " + Math.log10(this.termForm.lifeCover)/12 + " " + this.returnamt);

      this.premium = Math.round(
      (this.underWrittingService.totalFactorAffectingInsurance() * Math.log10(this.termForm.lifeCover*100000) * Math.log10(this.coverageYear) * 1000 / divisibilityFactor * Math.log10(this.termForm.lifeCover)/12)
) + this.returnamt;
    console.log(
      this.underWrittingService.totalFactorAffectingInsurance() +
        ' ' +
        this.termForm.lifeCover * 1000 +
        ' ' +
        this.termForm.lifeCover / 100 +
        ' lifeCover' +
        this.coverageYear +
        ' ' +
        this.coverageYear / 60 +
        ' ' +
        divisibilityFactor
    );

    console.log(this.premium / 12 + this.returnamt);
    console.log(this.returnamt);

    this.returnAmt = Math.round((this.coverageYear * this.premium) / 100000);
  }

}

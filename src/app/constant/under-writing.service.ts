import { Injectable } from '@angular/core';
import { Quote } from '../model/quotesForm';

@Injectable({
  providedIn: 'root',
})
export class UnderWritingService {
  dt!: any;
  timedifference!: any;
  age!: any;
  factor!: number | 1;
  ageFactor!: number | 1;
  medicalConditionFactor!: number | 1;
  genderFactor!: number | 1;
  occupationFactor!: number | 1;
  totalFactor!: number | 1;
  tempFactor!:number | 1;
  fact:any = 1;

  rules(quote: Quote) {
    this.age = this.calculateAge(quote.dateOfBirth);
    this.ageRule(this.age);
    this.genderRule(quote.gender);
    this.medicalConditionRule(
      quote.hasDiabetes,
      quote.hasExistingMedicalConditions,
      quote.hasFamilyHistoryOfIllness,
      quote.hasHazardousOccupation,
      quote.hasHistoryOfMentalIllness,
      quote.hasHistoryOfSubstanceAbuse,
      quote.heartPatient,
      quote.smoker
    );
    this.occupationRule(quote.occupation);

     this.totalFactor =
       this.ageFactor *
       this.genderFactor *
       this.medicalConditionFactor *
       this.occupationFactor;

       console.log(
         this.ageFactor +
           ' ' +
           this.genderFactor +
           ' ' +
           this.medicalConditionFactor +
           ' ' +
           this.occupationFactor
       );

     console.log('total factor = ' + this.totalFactor);
  }

  calculateAge(dateOfBirth: Date) {
    this.dt = new Date(dateOfBirth);
    this.timedifference = Math.abs(Date.now() - this.dt.getTime());
    this.age = Math.floor(this.timedifference / (1000 * 3600 * 24) / 365.25);
    console.log(this.age);
    return this.age;
  }

  ageRule(age: number) {
    if (18 <= age && age < 25) this.ageFactor = 1.02;
    else if (25 <= age && age < 40) this.ageFactor = 1.04;
    else if (40 <= age && age < 60) this.ageFactor = 1.06;
    else if (age <= 75) this.ageFactor = 1.08;
    else if (age > 75) this.ageFactor = 1.1;
    else
      console.log(
        'error occured, age below 18 is not applicable for this service'
      );
  }

  genderRule(gender: string) {
    if (gender == 'male' || gender == " Male ") this.genderFactor = 1.03;
    else if (gender == 'trans' || gender == " Others ") this.genderFactor = 1.03;
    else this.genderFactor = 1;
  }

  medicalConditionRule(
    a: boolean = false,
    b: boolean = false,
    c: boolean = false,
    d: boolean = false,
    e: boolean = false,
    f: boolean = false,
    g: boolean = false,
    h: boolean = false
  ) {
    this.fact=1;
    if(a == true)
    this.fact = this.fact*1.03;
    if(b == true)
    this.fact = this.fact*1.02;
    if(c == true)
    this.fact = this.fact*1.02;
    if (d == true) this.fact = this.fact * 1.03;
    if (e == true) this.fact = this.fact * 1.02;
    if (f == true) this.fact = this.fact * 1.03;
    if (g == true) this.fact = this.fact * 1.04;
    if (h == true) this.fact = this.fact * 1.04;
    this.medicalConditionFactor = this.fact;
      // Number(a)?* 1.1 *
      // Number(b) * 1.1 *
      // Number(c) * 1.1 *
      // Number(d) * 1.1 *
      // Number(e) * 1.1 *
      // Number(f) * 1.1 *
      // Number(g) * 1.1 *
      // Number(h) * 1.1 ;
  }

  occupationRule(occupation: string) {
    if (
      occupation == 'soldier' ||
      occupation == 'air industry' ||
      occupation == 'Factory worker' ||
      occupation == 'Ship enginner' ||
      occupation == 'vehicle driver' ||
      occupation == 'gas industry' ||
      occupation == 'mining industry'
    )
      this.occupationFactor = 1.2;
      else if(occupation == " Salaried ")
        this.occupationFactor = 1.1
      else if(occupation == " Self Employeed " || occupation == " Professional ")
        this.occupationFactor = 1.15
    else this.occupationFactor = 1.05;
  }

  totalFactorAffectingInsurance(){
    this.totalFactor =
      this.ageFactor *
      this.genderFactor *
      this.medicalConditionFactor *
      this.occupationFactor;

      console.log("total factor = " + this.totalFactor);
      console.log("factors " + this.ageFactor + this.genderFactor + this.occupationFactor + this.medicalConditionFactor );

    return this.totalFactor;
      // this.router.navigate("/quote/price")
  }
  // constructor() {}
}

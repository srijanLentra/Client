import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quote } from '../model/quotesForm';
import { QuotesFormService } from '../quotes-form.service';
import { UnderWritingService } from '../constant/under-writing.service';
import { FindPincodeService } from '../constant/find-pincode.service';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  quote: Quote = new Quote();
  timedifference!: any;
  age!: number;
  dt!: Date;
  serviceCart!: UnderWritingService;
  factors!: number;
  localities: any = [];
  coverageAmount: number = 1.0;
  year: number = 1.0;
  package!: number;
  coverage: number = 1;
  coverageYear: number = 1;
  currDate: Date = new Date();
  email!:string;

  constructor(
    private quotesFormService: QuotesFormService,
    private router: Router,
    private underwrittingservice: UnderWritingService,
    private findpincodeservice: FindPincodeService
  ) {}

  ngOnInit(): void {
    try {
      const data = localStorage.getItem('datas');
      if (data !== null) {
        const jsonData = JSON.parse(data);
        this.package = jsonData[0].pack;
      }
    } catch (error) {
      console.log(error);
    }

     let sessionLoginCred = sessionStorage.getItem('userLoginCred');
     this.email = JSON.parse(sessionLoginCred || '').email;
  }

  onSubmit() {
    this.underwrittingservice.rules(this.quote);
    this.factors =
      (this.underwrittingservice.totalFactor *
        this.quote.coverage *
        this.quote.maturityAge) /
      1000;
    if (this.package == 0) this.quote.packageVarient = 1;
    else if (this.package == 1) this.quote.packageVarient = 1.05;
    else if (this.package == 2) this.quote.packageVarient = 1.1;
    else this.quote.packageVarient = 1.15;


    this.quote.annualPremium =
      (Math.round(this.factors * 100) / 1200) * this.quote.packageVarient;
    this.quote.monthlyPremium = this.quote.annualPremium / 12;
    this.quote.packageVarient = this.package;
    this.quote.dateOfPurchase = this.currDate;
    this.quote.email = this.email;

  }

  append() {
    let myObj = {
      package: this.package,
      annualPremium: this.quote.annualPremium,
      years: this.coverageYear,
      coverage: this.coverage,
    };
    this.quotesFormService.addUser(this.quote).subscribe(
      (data) => {
        sessionStorage.setItem('quotes', JSON.stringify(myObj));
      },
      (error) => console.log(error)
    );
    this.router.navigate(['orders']);
  }

  chkPincode() {
    this.findpincodeservice.getData(this.quote);

  }

  buyPolicy() {
    console.log('purchased!!');
  }

  enquiry() {
    console.log(
      'You will be called very soon by our excecutive for further information!'
    );
  }
}

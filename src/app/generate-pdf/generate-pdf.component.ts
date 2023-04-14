import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { QuotesFormService } from '../quotes-form.service';
import { Quote } from '../model/quotesForm';

@Component({
  selector: 'app-generate-pdf',
  templateUrl: './generate-pdf.component.html',
  styleUrls: ['./generate-pdf.component.css'],
})
export class GeneratePdfComponent implements OnInit {
  quotes: Quote = new Quote();
  userid: number = 100;
  constructor(private quotesService: QuotesFormService) {}

  ngOnInit(): void {
    let sessionLoginCred = JSON.stringify(
      sessionStorage.getItem('userLoggedInId') || null
    );
    this.userid = JSON.parse(sessionLoginCred);
    console.log(this.userid);
    this.quotesService.getUser(this.userid).subscribe((data) => {
      this.quotes = data;
      console.log(this.quotes);
    });
  }

  @ViewChild('htmlData') htmlData!: ElementRef;
  user =
    {
      username:"hello srijan",
      firstname: JSON.stringify(this.quotes.firstName),
      // lastname: this.quotes.lastName,
      // email: this.quotes.email,
      // gender: this.quotes.gender,
      // annualpremium: this.quotes.annualPremium,
      // DOB: this.quotes.dateOfBirth,
      // Dependent: this.quotes.dependentCount,
      // Diabetes: this.quotes.hasDiabetes,
      // illness: this.quotes.hasFamilyHistoryOfIllness,
      // hazoupation: this.quotes.hasHazardousOccupation,
      // mental: this.quotes.hasHistoryOfMentalIllness,
      // substance: this.quotes.hasHistoryOfSubstanceAbuse,
      // heartpatient: this.quotes.heartPatient,
      // marital: this.quotes.maritalStatus,
      // monthlyP: this.quotes.monthlyPremium,
      // occupation: this.quotes.occupation,
      // pv: this.quotes.packageVarient,
      // phone: this.quotes.phone,
      // pincode: this.quotes.pinCode,
      // medical: this.quotes.hasExistingMedicalConditions,
      // smoker: this.quotes.smoker,
    };
    // {
    //   name: 'Leanne Graham',
    //   email: 'sincere@april.biz',
    //   phone: '1-770-736-8031 x56442',
    // },
    // {
    //   name: 'Ervin Howell',
    //   email: 'shanna@melissa.tv',
    //   phone: '010-692-6593 x09125',
    // },
    // {
    //   name: 'Clementine Bauch',
    //   email: 'nathan@yesenia.net',
    //   phone: '1-463-123-4447',
    // },
    // {
    //   name: 'Patricia Lebsack',
    //   email: 'julianne@kory.org',
    //   phone: '493-170-9623 x156',
    // },
    // {
    //   name: 'Chelsey Dietrich',
    //   email: 'lucio@annie.ca',
    //   phone: '(254)954-1289',
    // },
    // {
    //   name: 'Mrs. Dennis',
    //   email: 'karley@jasper.info',
    //   phone: '1-477-935-8478 x6430',
    // };
  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas: any) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuotesFormService } from '../quotes-form.service';
import { Quote } from '../model/quotesForm';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  isProfile: boolean = true;
  isDashboard:boolean = false;
  userid!:number;
  quotes!: Quote[];
  status: number = 0;
  email!:string;
  constructor(private router: Router, private quotesService:QuotesFormService) {}

  ngOnInit(): void {


    let sessionLoginCred = sessionStorage.getItem('userLoginCred');
    this.email = JSON.parse(sessionLoginCred || '').email;
    // console.log("email = " + this.email);

    this.quotesService.getAllUsers().subscribe((data) => {
      this.quotes = data;
    });

    // console.log("email = " + this.quotes.);



  }

  changeProfile() {
    this.isProfile = !this.isProfile;
  }

  changeDashboard(){
    this.isDashboard=!this.isDashboard;
  }

}

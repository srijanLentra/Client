import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Quote } from '../model/quotesForm';
import { QuotesFormService } from '../quotes-form.service';

@Component({
  selector: 'app-approvals',
  templateUrl: './approvals.component.html',
  styleUrls: ['./approvals.component.css'],
})
export class ApprovalsComponent {
  isProfile: boolean = true;
  isDashboard: boolean = false;
  userId!: number;
  quotes!: Quote[];
  status: number = 0;
  quote:Quote=new Quote();
  constructor(
    private router: Router,
    private quotesService: QuotesFormService
  ) {}

  ngOnInit(): void {
    this.quotesService.getAllUsers().subscribe((data) => {
      this.quotes = data;
      console.log('successfully reloaded');
      console.log(this.quotes);
    });
  }

  changeProfile() {
    this.isProfile = !this.isProfile;
  }

  changeDashboard() {
    this.isDashboard = !this.isDashboard;
  }

  rejectAlert(quote:Quote){
    if(confirm("Do you want to reject?")){
      this.status=-1;
      this.updateElement(quote);
      alert('Rejection Accepted');
    }
    else
      alert("Rejection Cancelled");
  }

  approveAlert(quote:Quote){
    if (confirm('Do you want to Approve?')) {
      this.status=1;
      this.updateElement(quote);
      alert('Approval Accepted');
    }
    else{
       alert('Approval Rejected');
    }
  }

  updateElement(quote:Quote){
    quote.checkStatus=this.status;
    console.log(quote.id+ " " + quote.checkStatus, + " " + JSON.stringify(quote));
  this.quotesService.updateUser(quote.id, quote).subscribe((data) => {
  console.log('updated!!!!')});
  }
}

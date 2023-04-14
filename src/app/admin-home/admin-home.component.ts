import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuotesFormService } from '../quotes-form.service';
import { Quote } from '../model/quotesForm';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})
export class AdminHomeComponent implements OnInit {
  adduserClicked: boolean = true;
  quote!: Quote[];
  check: boolean = true;
  checkForEdit: boolean = false;
  userQuote: Quote = new Quote();

  constructor(
    private quotesFormService: QuotesFormService,
    private router: Router,
    private ref:ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getUserDetail();
  }

  addUser() {
    this.adduserClicked = !this.adduserClicked;
  }

  getUserDetail() {
    this.quotesFormService.getAllUsers().subscribe((data) => {
      this.quote = data;
      console.log('successfully reloaded');
      console.log(this.quote);
    });
  }

  navToForm() {
    this.checkForEdit = !this.checkForEdit;
  }

  deleteUser(id: number) {
    alert("do u really want to delete?");
    this.quotesFormService.deleteUser(id).subscribe((data) => {
      setTimeout(() => {
        console.log("deleted");
        // this.ref.detectChanges()
        this.getUserDetail();
      }, 1000);
      alert(`${id} deleted`);
    });
  }

  onSubmit(id: number) {
    this.quotesFormService.updateUser(id, this.userQuote).subscribe((data) => {
      this.goToUserList();
    });
  }

  goToUserList() {
    this.router.navigate(['admin']);
  }
  getIdUser() {
    this.check = !this.check;
  }
}

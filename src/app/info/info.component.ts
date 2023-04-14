import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Quote } from '../model/quotesForm';
import { ActivatedRoute, Router } from '@angular/router';
import { QuotesFormService } from '../quotes-form.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  adduserClicked: boolean = true;
  user: Quote = new Quote();
  check: boolean = true;
  checkForEdit: boolean = false;
  userQuote: Quote = new Quote();
  userId!: number;
  constructor(
    private quotesService: QuotesFormService,
    private router: Router,
    private ref: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    this.quotesService.getUser(this.userId).subscribe((data) => {
      this.user = data;
    });
  }
}

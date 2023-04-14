import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-package-varient',
  templateUrl: './package-varient.component.html',
  styleUrls: ['./package-varient.component.css'],
})
export class PackageVarientComponent implements OnInit {
  // modal: string="modalOne";
  basePackage:number=0;
  bronzePackage:number=1;
  silverPackage:number=2;
  goldPackage:number=3;
  pack!:number;
  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    console.log("entered into package varient");
  }

  calculate(Package:number){
    let data = [{"pack":Package}];
    localStorage.setItem("datas",JSON.stringify(data));
    window.location.href = 'http://localhost:4200/quotes';
  }
}

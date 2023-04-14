import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../model/quotesForm';

@Injectable({
  providedIn: 'root',
})
export class FindPincodeService {
  data:any=[];
  locations:string="";
  local:string[]=[];
  constructor(private httpClient: HttpClient) {}

  private baseUrl = "https://api.postalpincode.in/pincode";

  getData(quote:Quote){

    this.httpClient.get(this.baseUrl+"/"+quote.pinCode).subscribe((res)=>{
      this.data=res
      this.data[0].PostOffice.forEach((element:any) => {
        this.local.push(element.Name);
      });
      // this.local.forEach(data=>{this.locations.push(data)});
      // console.log(this.local);
      // console.log(this.locations);

      this.locations=JSON.stringify(this.local);
      console.log((this.locations));
  })
    // +`/${quote.pinCode}`,JSON.stringify())
  }
}

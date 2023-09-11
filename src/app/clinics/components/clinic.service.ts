import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {
  ClinicService() {
    throw new Error('Method not implemented.');
  }

  constructor (private http: HttpClient) { }

  url: string = "http://localhost:3000";

  PostClinicData(data:any){
    return this.http.post(this.url+"/Clinic",data);
  }
  GetClinicData(){
    return this.http.get(this.url+"/Clinic");
  }

}

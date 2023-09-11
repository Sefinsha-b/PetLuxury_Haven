import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor (private http: HttpClient) { }

  url: string = "http://localhost:3000";

  PostScheduleData(data:any){
    return this.http.post(this.url+"/Schedule",data);
  }
  GetClinicData(){
    return this.http.get(this.url+"/Clinic");
  }
}

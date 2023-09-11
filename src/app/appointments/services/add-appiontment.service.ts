import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//There will one service per component. But other components can also use the
//service allocated for another component via there distributers
//This layer interacts with the repository layer and has business logic
@Injectable({
  providedIn: 'root'
})
export class AddAppiontmentService {
  putDepartmentService(arg0: any, value: Partial<{ DepartmentName: string | null; Description: string | null; Active: string | null; Inactive: string | null; }>) {
    throw new Error('Method not implemented.');
  }

  // Inject Repository in the constructor
  constructor (private http: HttpClient) { }

  url: string = "http://localhost:3000/Appointments";
  

  PostAppointmentData(data:any){
    return this.http.post(this.url+"/Appointment",data);
  }

  GetAppointmentData(){
    return this.http.get(this.url+"/Appointment");
  }

 

  // Put method
  PutGetAppointmnetService(id:any){
    return this.http.get(`${this.url + '/Appointment'}/${id}`);
  }
  putAppointmentService(id:any,data:any){
    return this.http.put(`${this.url + '/Appointment'}/${id}`,data);
  }
//deleteMethod
DeleteAppointmentApi( id:any){
  return this.http.delete(this.url + '/Appointment/' + id);

}
  
}




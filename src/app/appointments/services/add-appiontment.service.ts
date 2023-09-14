import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddAppiontmentService {

  constructor(private http: HttpClient) { }

  // Updated URL to the new API endpoint
  url: string = 'https://petappserver.onrender.com/Appointments/Appointment';

  PostAppointmentData(data: any) {
    return this.http.post(`${this.url}`, data);
  }

  GetAppointmentData() {
    return this.http.get(`${this.url}`);
  }

  // Put method
  PutGetAppointmnetService(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }

  putAppointmentService(id: any, data: any) {
    return this.http.put(`${this.url}/${id}`, data);
  }

  // Delete method
  DeleteAppointmentApi(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }
}

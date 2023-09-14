import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  constructor(private http: HttpClient) { }

  // Updated URL to the new API endpoint
  url: string = 'https://petappserver.onrender.com/DepartMents/Department';

  GetDepartmentData() {
    return this.http.get(`${this.url}`);
  }

  postDepartmentData(data: any) {
    return this.http.post(`${this.url}`, data);
  }

  // PUT
  PutGetDepartmentService(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }

  putDepartmentService(id: any, data: any) {
    return this.http.put(`${this.url}/${id}`, data);
  }

  deletedepartment(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }
}

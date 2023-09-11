import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  constructor (private http: HttpClient) { }
url:string="http://localhost:3000/DepartMents";




GetDepartmentData(){
  return this.http.get(this.url+"/Department")
}
postDepartmentData(data:any){
  return this.http.post(this.url+"/Department",data)
}
// PUT
PutGetDepartmentService(id:any){
  return this.http.get(`${this.url + '/Department'}/${id}`);
}
putDepartmentService(id:any,data:any){
  return this.http.put(`${this.url + '/Department'}/${id}`,data);
}

deletedepartment( id:any){
  return this.http.delete(this.url + '/Department/' + id);

}

}


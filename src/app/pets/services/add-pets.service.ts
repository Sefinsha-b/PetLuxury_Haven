import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddPetsService {

  constructor (private http: HttpClient) { }

  url: string =  'http://localhost:3000/Pets/';


  PostPetsApi(data:any){
    return this.http.post(this.url+"/Pet_in",data);
  }
  GetPetsApi(){
    return this.http.get<any>(this.url+"/Pet_in");

  }

  //Put
  PutGetPetApService(id:any){
  return this.http.get(`${this.url + '/Pet_in'}/${id}`)
  }
  PutPetsApiService(id:any,data:any){
    return this.http.put(`${this.url + '/Pet_in'}/${id}`, data)
  }

 



  DeletePetService(id:any){
    return this.http.delete(this.url + '/Pet_in/' + id)
  }
  }


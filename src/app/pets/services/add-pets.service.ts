import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddPetsService {

  constructor(private http: HttpClient) { }

  // Update the URL to the production backend
  url: string = 'https://petappserver.onrender.com/Pets/Pet_in';

  PostPetsApi(data: any) {
    return this.http.post(this.url, data);
  }

  GetPetsApi() {
    return this.http.get<any>(this.url);
  }

  // Get a single pet
  PutGetPetApService(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }

  PutPetsApiService(id: any, data: any) {
    return this.http.put(`${this.url}/${id}`, data);
  }

  deletePet(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }
}

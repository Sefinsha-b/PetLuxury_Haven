import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AddVetService {

  constructor(private http: HttpClient) { }

  Url: string = 'http://localhost:3000/vets/vet_in'; // Removed the trailing slash

  PostVetApi(data: any) {
    return this.http.post(`${this.Url}`, data); // Removed the extra slash
  }
  
  GetVetApi() {
    return this.http.get(`${this.Url}`);
  }

  GetPutVet(id: any) {
    return this.http.get(`${this.Url}/${id}`); // Corrected the URL
  }

  PutVet(id: any, data: any) {
    return this.http.put(`${this.Url}/${id}`, data)
      .pipe(
        catchError((error: any) => {
          console.error('Error editing vet:', error);
          return throwError(error);
        })
      );
  }
  deleteData(id: any) {
    if (id) {
      const url = `${this.Url}/${id}`;
      console.log('DELETE URL:', url);
      return this.http.delete(url);
    } else {
      // Handle the case where id is undefined or falsy
      console.error('Invalid id:', id);
      return throwError('Invalid id'); // You can use throwError or return an observable with an error
    }
  }
  

  
  
  }
  


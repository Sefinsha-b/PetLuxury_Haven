import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddVetService {

  constructor(private http: HttpClient) { }

  Url: string = 'https://petappserver.onrender.com/vets/vet_in'; // Updated to the new API URL

  PostVetApi(data: any) {
    return this.http.post(`${this.Url}`, data);
  }
  
  GetVetApi() {
    return this.http.get(`${this.Url}`);
  }

  GetPutVet(id: any) {
    return this.http.get(`${this.Url}/${id}`);
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
      console.error('Invalid id:', id);
      return throwError('Invalid id');
    }
  }
}

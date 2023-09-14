import { Component, OnInit } from '@angular/core';
import { AddPetsService } from '../../services/add-pets.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-view-pet',
  templateUrl: './view-pet.component.html',
  styleUrls: ['./view-pet.component.css']
})
export class ViewPetComponent implements OnInit {

  ViewPetData: any;

  constructor(private PetsCons: AddPetsService) { }

  ngOnInit(): void {
    this.getViewPet();
  }

  getViewPet() {
    this.PetsCons.GetPetsApi()
      .pipe(
        catchError((error) => {
          console.error("Error fetching pet data:", error);
          return throwError(error);
        })
      )
      .subscribe((resp: any) => {
        this.ViewPetData = resp;
        console.log(this.ViewPetData);
      });
  }

  deletePet(data: any) {
    this.PetsCons.deletePet(data._id)
      .pipe(
        catchError((error) => {
          console.error("Error deleting pet:", error);
          return throwError(error);
        })
      )
      .subscribe(() => {
        alert("Data Deleted Successfully");
        window.location.reload();
      });
  }
}

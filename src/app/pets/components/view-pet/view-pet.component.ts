import { Component, OnInit } from '@angular/core';
import { AddPetsService } from '../../services/add-pets.service';

@Component({
  selector: 'app-view-pet',
  templateUrl: './view-pet.component.html',
  styleUrls: ['./view-pet.component.css']
})
export class ViewPetComponent implements OnInit {

  ViewPetData: any;
  constructor (private PetsCons: AddPetsService) { 
    this.getViewpet();
  }
  ngOnInit(): void {
    // this.getViewpet();
  }
  getViewpet(){
    this.PetsCons.GetPetsApi().subscribe((resp:any) => {
      this.ViewPetData = resp;
      console.log(this.ViewPetData)
    })
  }

  DeletePet(data:any){
    return this.PetsCons.DeletePetService(data._id).subscribe((resp)=>{
      alert("Data Deleted Successfully")
      window.location.reload();
    })
  }
  }


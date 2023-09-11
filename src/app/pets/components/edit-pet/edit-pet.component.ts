import { Component, OnInit } from '@angular/core';
import { AddPetsService } from '../../services/add-pets.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit{
  PetsoiDAta: any;

constructor(private ConsEditPet:AddPetsService, private route: ActivatedRoute ,private router: Router){}
EditPetsForm = new FormGroup({
  FirstName: new FormControl(""),
  Age: new FormControl(""),
  OwnerEmail: new FormControl(""),
  Gender: new FormControl("")
})
ngOnInit(): void {
  this.Getputfetch(); 
 }

Getputfetch(){
  return this.ConsEditPet.PutGetPetApService(this.route.snapshot.params['id']).subscribe((resp:any)=>{
this.EditPetsForm = new FormGroup({
  FirstName: new FormControl(resp['FirstName']),
  Age: new FormControl(resp['Age']),
  OwnerEmail: new FormControl(resp['OwnerEmail']),
  Gender: new FormControl(resp['Gender'])
})
  })}

  UpdatePet(){
    return this.ConsEditPet.PutPetsApiService(this.route.snapshot.params['id'], this.EditPetsForm.value).subscribe((resp: any) => {
      
      console.log(resp);
      // this.PetsoiDAta=resp;
      alert("update successfully..!");
      this.router.navigate(['/Pets']);
  })}
}


// Update() {
//   return this.ConsEdit.PutApi(this.router.snapshot.params['id'], this.EditForm.value).subscribe((resp: any) => {
//     console.log(resp);
//     alert("update successfully..!");
//     window.location.reload();
//   })
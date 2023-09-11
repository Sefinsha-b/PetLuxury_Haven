import { Component, OnInit } from '@angular/core';
import { AddVetService } from '../../services/add-vet.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
  addVetsForm = new FormGroup({
    Name: new FormControl(""),
    Speciality: new FormControl(""),
    Address: new FormControl("")
    
    
  })

  AppForm: any;
  AppData: any;
  ngOnInit(): void {
    this.GetData();
  }

  constructor(private ConsAdd: AddVetService,private router: Router) { }
  get add() {
    return this.addVetsForm.controls;
  }

  Submit() {
    return this.ConsAdd.PostVetApi(this.addVetsForm.value).subscribe((resp: any) => {
      this.AppForm = resp;
      console.log(resp);
      alert("Succesfully Added");
      this.router.navigate(['/vets']);
    })
  }

  GetData() {
    return this.ConsAdd.GetVetApi().subscribe((resp: any) => {
      this.AppData = resp;
      console.log(resp);
    }

    )
  }

}

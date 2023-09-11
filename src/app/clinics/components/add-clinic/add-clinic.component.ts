import { Component, OnInit } from '@angular/core';
import { ClinicService } from '../clinic.service';

@Component({
  selector: 'app-add-clinic',
  templateUrl: './add-clinic.component.html',
  styleUrls: ['./add-clinic.component.css']
})
export class AddClinicComponent implements OnInit {
  
  DataClinic: any;
 

  constructor(private AddClinic: ClinicService) { }

  ngOnInit(): void {
     this.fetchClinicData();
  }

  PostClinicFormData(data: any) {
    console.warn(data);
    this.AddClinic.PostClinicData(data).subscribe((result) => {

    })
  }
    fetchClinicData(){
      return this.AddClinic.GetClinicData().subscribe((resp: any) => {
     this.DataClinic = resp;
     })
   }

  }






import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddAppiontmentService } from '../../services/add-appiontment.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {
usersForm: any;

AppOiDAta: any;
 
  constructor(private addAppointments: AddAppiontmentService , private router: Router){}

  get add() {
    return this.addAppointmentForm.controls;
  }
  addAppointmentForm = new FormGroup({
    PetName: new FormControl(""),
    Department: new FormControl(""),
    VetName: new FormControl(""),
    MoreDetails: new FormControl("")
    
    
  })


  ngOnInit(): void {

    // Fetch / Load data
    // Validation Logic
   this.fetchAppointmentsData();
  
  }
  postUserFormData( ) {
   
   return this.addAppointments.PostAppointmentData(this.addAppointmentForm.value).subscribe((resp:any)=>{
   
    console.log(resp);
    alert("sucessfully Added");
     // Navigate to the 'success' route
     this.router.navigate(['/allAppointments']);
    });

   
    }
  fetchAppointmentsData(){
       return this.addAppointments.GetAppointmentData().subscribe((resp: any) => {
      this.AppOiDAta = resp;
       console.log(resp);
      })
    }
    

   
//    this.AppForm = resp;



  // Logic for the submit
 
}




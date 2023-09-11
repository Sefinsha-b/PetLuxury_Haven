import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; // Import both ActivatedRoute and Router

import { AddAppiontmentService } from '../../services/add-appiontment.service';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit {
  AppOiDAta: any;

  constructor(
    private ConsPutAppointment: AddAppiontmentService,
    private route: ActivatedRoute, // Rename this variable to 'route'
    private router: Router // Keep this as 'router'
  ) { }

  addAppointmentForm = new FormGroup({
    PetName: new FormControl(""),
    Department: new FormControl(""),
    VetName: new FormControl(""),
    MoreDetails: new FormControl("")
  });

  ngOnInit(): void {
    this.PutFetchAppointment();
  }

  PutFetchAppointment() {
    return this.ConsPutAppointment.PutGetAppointmnetService(this.route.snapshot.params['id']).subscribe((resp: any) => {
      this.addAppointmentForm = new FormGroup({
        PetName: new FormControl(resp['PetName']),
        Department: new FormControl(resp['Department']),
        VetName: new FormControl(resp['VetName']),
        MoreDetails: new FormControl(resp['MoreDetails'])
      });
    });
  }

  UpdateFetch() {
    this.ConsPutAppointment.putAppointmentService(this.route.snapshot.params['id'], this.addAppointmentForm.value)
      .subscribe((resp: any) => {
        console.log(resp);
        this.AppOiDAta = resp;
        alert("Update successfully..!");

        // Navigate to the 'allAppointments' route
        this.router.navigate(['/allAppointments']);
      });
  }
}

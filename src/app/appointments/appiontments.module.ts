import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppiontmentsRoutingModule } from './appiontments-routing.module';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddAppointmentComponent } from './components/add-appointment/add-appointment.component';
import { EditAppointmentComponent } from './components/edit-appointment/edit-appointment.component';


@NgModule({
  declarations: [
    AddAppointmentComponent,
    EditAppointmentComponent
    

  ],
  imports: [
    CommonModule,
    AppiontmentsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  exports:[
    AddAppointmentComponent,
    EditAppointmentComponent
  ]
})
export class AppiontmentsModule { }

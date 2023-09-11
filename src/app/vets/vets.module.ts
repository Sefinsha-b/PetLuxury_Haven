import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VetsRoutingModule } from './vets-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { EditDoctorComponent } from './components/edit-doctor/edit-doctor.component';


@NgModule({
  declarations: [
    //  AddDoctorComponent
    

  ],
  imports: [
    CommonModule,
    VetsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VetsModule { }

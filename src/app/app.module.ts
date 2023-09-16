import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { LoginComponent } from './shared/login/login.component';
import { SignupComponent } from './shared/signup/signup.component';

import { AllAppointmentsComponent } from './appointments/components/view-appointment/all-appointments.component';
import { AddAppointmentComponent } from './appointments/components/add-appointment/add-appointment.component';
import { DoctorsComponent } from './vets/components/ViewDoctor/doctors.component';
import { AddDoctorComponent } from './vets/components/add-doctor/add-doctor.component';


import { HeaderComponent } from './shared/header/header.component';




import { ClinicInformationComponent } from './clinics/components/clinic-information/clinic-information.component';
import { AddClinicComponent } from './clinics/components/add-clinic/add-clinic.component';
import { AddDepartmentsComponent } from './department/components/add-departments/add-departments.component';
import { DepartmentsComponent } from './department/components/departments/departments.component';
import { AdminDashboardComponent } from './dashboard/components/admin-dashboard/admin-dashboard.component';
import { AddScheduleComponent } from './schedule/components/add-schedule/add-schedule.component';
import { ScheduleComponent } from './schedule/components/schedule/schedule.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppiontmentsModule } from './appointments/appiontments.module';
import { ActivatedRoute } from '@angular/router';
import { EditDoctorComponent } from './vets/components/edit-doctor/edit-doctor.component';
import { AddpetsComponent } from './pets/components/addpets/addpets.component';
import { ViewPetComponent } from './pets/components/view-pet/view-pet.component';
import { EditPetComponent } from './pets/components/edit-pet/edit-pet.component';
import { EditDepartmentComponent } from './department/components/edit-department/edit-department.component';
import { VetsModule } from './vets/vets.module';


@NgModule({
  declarations: [
    ClinicInformationComponent,
    AppComponent,
    MenuComponent,
    LoginComponent,
    SignupComponent,
    AdminDashboardComponent,
    AllAppointmentsComponent,
    DoctorsComponent,
    AddDoctorComponent,
    AppComponent,
    ScheduleComponent,
    AddScheduleComponent,
    DepartmentsComponent,
    AddDepartmentsComponent,
    HeaderComponent,
    AddClinicComponent,
    EditDoctorComponent,
    AddpetsComponent,
    ViewPetComponent,
    EditPetComponent,
    EditDepartmentComponent,
   
  
   
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppiontmentsModule,FormsModule
    ,ReactiveFormsModule,
    VetsModule

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAppointmentComponent } from './appointments/components/add-appointment/add-appointment.component';

import { AllAppointmentsComponent } from './appointments/components/view-appointment/all-appointments.component';

import { ClinicInformationComponent } from './clinics/components/clinic-information/clinic-information.component';
import { AddClinicComponent } from './clinics/components/add-clinic/add-clinic.component';



import { LoginComponent } from './shared/login/login.component';
import { SignupComponent } from './shared/signup/signup.component';
import { AddDoctorComponent } from './vets/components/add-doctor/add-doctor.component';
import { DoctorsComponent } from './vets/components/ViewDoctor/doctors.component';
import { AddDepartmentsComponent } from './department/components/add-departments/add-departments.component';
import { DepartmentsComponent } from './department/components/departments/departments.component';
import { AdminDashboardComponent } from './dashboard/components/admin-dashboard/admin-dashboard.component';
import { AddScheduleComponent } from './schedule/components/add-schedule/add-schedule.component';
import { ScheduleComponent } from './schedule/components/schedule/schedule.component';
import { EditAppointmentComponent } from './appointments/components/edit-appointment/edit-appointment.component';
import { EditDoctorComponent } from './vets/components/edit-doctor/edit-doctor.component';
import { EditPetComponent } from './pets/components/edit-pet/edit-pet.component';
import { AddpetsComponent } from './pets/components/addpets/addpets.component';
import { ViewPetComponent } from './pets/components/view-pet/view-pet.component';
import { EditDepartmentComponent } from './department/components/edit-department/edit-department.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },


  { path: 'allAppointments', component: AllAppointmentsComponent },
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'addAppointments', component: AddAppointmentComponent },
  { path: 'Editappointment/:id', component:EditAppointmentComponent},


  { path: 'vets', component: DoctorsComponent },
  { path: 'addVets', component: AddDoctorComponent },
  { path: 'Editvets/:id', component:EditDoctorComponent},

  { path: 'Pets', component:ViewPetComponent},
  { path: 'addPets', component:AddpetsComponent },
  { path: 'Editpets/:id', component:EditPetComponent },


  
  { path: 'schedule', component: ScheduleComponent },
  { path: 'addSchedule', component: AddScheduleComponent },

  { path: 'departments', component: DepartmentsComponent },
  { path: 'addDepartment', component: AddDepartmentsComponent },
  { path: 'editDepartment/:id', component:EditDepartmentComponent },




  { path: 'clinic', component: ClinicInformationComponent },
  { path: 'addClinic', component: AddClinicComponent },
  { path: 'Edit', component: EditAppointmentComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

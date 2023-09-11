import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDoctorComponent } from './components/edit-doctor/edit-doctor.component';

const routes: Routes = [
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VetsRoutingModule { }

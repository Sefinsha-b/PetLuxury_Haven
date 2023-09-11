import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAppointmentComponent } from './components/edit-appointment/edit-appointment.component';

const routes: Routes = [
  {path:'Edit/:id', component:EditAppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppiontmentsRoutingModule { }

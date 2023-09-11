import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { DepartmentRoutingModule } from './department-routing.module';
import { FormsModule } from '@angular/forms';
import { EditDepartmentComponent } from './components/edit-department/edit-department.component';



@NgModule({
  declarations: [
   
  
   
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    FormsModule
  ]
})
export class DepartmentModule { }

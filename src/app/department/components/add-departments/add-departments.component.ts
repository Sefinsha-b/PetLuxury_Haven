import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-departments',
  templateUrl: './add-departments.component.html',
  styleUrls: ['./add-departments.component.css']
})
export class AddDepartmentsComponent implements OnInit {
  getDepartment: any;
data: any;

  constructor(private AddDepartment:DepartmentService , private router: Router) { }
  get add() {
    return this.addDepartmentForm.controls;
  }
  addDepartmentForm = new FormGroup({
    DepartmentName: new FormControl(""),
    Description: new FormControl(""),
    Active: new FormControl(""),
    Inactive: new FormControl("")
    
    
  })

  ngOnInit(): void {
    this.fetchDepartment();
  }
fetchDepartment(){
  return this.AddDepartment.GetDepartmentData().subscribe((resp:any)=>{
    this.getDepartment=resp;
    console.log(resp);
  })
}


postDepartmentFormData() {
  
  this.AddDepartment.postDepartmentData(this.addDepartmentForm.value).subscribe((result)=>{
    console.log(result);
    alert("sucessfully Added");
    
    this.router.navigate(['/departments']);
  })
}
}
 
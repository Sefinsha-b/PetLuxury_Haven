import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { AddAppiontmentService } from 'src/app/appointments/services/add-appiontment.service';
import { DepartmentService } from '../department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {

  constructor(
    private ConsPutDepartment: DepartmentService,
    private route: ActivatedRoute, // Rename this variable to 'activatedRoute'
    private routerService: Router // Rename this variable to 'routerService'
  ) { }

  get add() {
    return this.EditDepartmentForm.controls;
  }

  getDepartment: any;

  EditDepartmentForm = new FormGroup({
    DepartmentName: new FormControl(""),
    Description: new FormControl(""),
    Active: new FormControl(""),
    Inactive: new FormControl("")
  });

  ngOnInit(): void {
    this.PutFetchDepartment(); 
  }

  PutFetchDepartment() {
    return this.ConsPutDepartment.PutGetDepartmentService(this.route.snapshot.params['id']).subscribe((resp: any) => {
      this.EditDepartmentForm = new FormGroup({
        DepartmentName: new FormControl(resp['DepartmentName']),
        Description: new FormControl(resp['Description']),
        Active: new FormControl(resp['Active']),
        Inactive: new FormControl(resp['Inactive'])   
      });
    });
  }

  UpdateDepartmentFetch() {
    this.ConsPutDepartment.putDepartmentService(this.route.snapshot.params['id'], this.EditDepartmentForm.value).subscribe((resp: any) => {
      console.log(resp);
      alert("update successfully..!");
      this.routerService.navigate(['/departments']);
    });
  }
}

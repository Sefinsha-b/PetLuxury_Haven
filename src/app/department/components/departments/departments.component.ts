import { Component, OnInit } from '@angular/core';
import { DepartmentService} from '../department.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  ViewDeparteData:any;
  constructor(private ConsDepart: DepartmentService) { }

  ngOnInit(): void {
    this.GetViewDepartment();
  }
  GetViewDepartment() {
    return this.ConsDepart.GetDepartmentData().subscribe((resp => {
      this.ViewDeparteData = resp;

    }))
  }

  deletDepartment(data:any){
    this.ConsDepart.deletedepartment(data._id).subscribe((resp) =>{
      alert("Data Deleted Successfully")
      window.location.reload();
    })
  }
  

}

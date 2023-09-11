import { Component, OnInit } from '@angular/core';
import { AddVetService } from '../../services/add-vet.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  ViewVets: any;

  constructor(private ConsView:AddVetService){}

  ngOnInit(): void {
  this.GetViewVet();
  }
GetViewVet(){
  this.ConsView.GetVetApi().subscribe((resp)=>{
    this.ViewVets=resp;
  })
}

deletevet(data:any){
  this.ConsView.deleteData(data._id).subscribe((resp) =>{
    alert("Data Deleted Successfully")
    window.location.reload();
  })
}



}

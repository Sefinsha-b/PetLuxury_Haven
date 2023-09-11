import { Component, OnInit } from '@angular/core';
import { AddAppiontmentService } from '../../services/add-appiontment.service';

@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrls: ['./all-appointments.component.css']
})
export class AllAppointmentsComponent implements OnInit {
  ViewAppo: any;

  constructor(private ConsAppoi: AddAppiontmentService) { }

  ngOnInit(): void {
    this.GetViewAppoinment();
  }
  GetViewAppoinment() {
    return this.ConsAppoi.GetAppointmentData().subscribe((resp => {
      this.ViewAppo = resp;

    }))
  }
  DeleteAppointment(data: any) {
    return this.ConsAppoi.DeleteAppointmentApi(data._id).subscribe(
      (resp) => {
        alert("Data Deleted Successfully");
        window.location.reload();
      },
      (error) => {
        console.error("Error deleting appointment:", error);
        // Handle the error here, e.g., display an error message to the user.
      }
    );
  }
  
}


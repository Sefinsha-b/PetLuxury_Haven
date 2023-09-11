import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/appointments/services/schedule.service';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent implements OnInit {
  ClinicAppointments: any;

  constructor(private AddSchedule: ScheduleService){}

  ngOnInit(): void {
    this.fetchAppointmentsData();
  }


  PostSheduleFormData(data :any) {
    console.warn(data);
    this.AddSchedule.PostScheduleData(data).subscribe((result)=>{
    
    })
  }
  fetchAppointmentsData(){
    return this.AddSchedule.GetClinicData().subscribe((resp: any) => {
   this.ClinicAppointments = resp;
   })
 }
}

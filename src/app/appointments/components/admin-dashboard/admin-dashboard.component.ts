import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/service/docter.service';
import { PatientsService } from 'src/app/service/patients.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  patientList:undefined | any [];
  doctorsList:undefined | any [];

  constructor(private patient:PatientsService , private doctor:DoctorService) { }

  ngOnInit(): void {
    this.patientData();
  }

  patientData(){
    this.patient.patientList().subscribe((result)=>{
      this.patientList = result;
      console.log(result)
    })

}
}

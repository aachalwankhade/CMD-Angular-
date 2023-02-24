import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/service/docter.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  doctor:undefined | any[]
  constructor(private id:DoctorService) { }

  ngOnInit(): void {
    this.id.doctorList().subscribe((result)=>{
      this.doctor=result;
    })
  }

}

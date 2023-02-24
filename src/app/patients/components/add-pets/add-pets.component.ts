import { Component, OnInit } from '@angular/core';
import { PatientsService } from 'src/app/service/patients.service';

@Component({
  selector: 'app-add-pets',
  templateUrl: './add-pets.component.html',
  styleUrls: ['./add-pets.component.css']
})
export class AddPetsComponent implements OnInit {

  constructor(private patient: PatientsService ) { }

  ngOnInit(): void {

  }
  createPatient(data:any){
    this.patient.addPatient(data).subscribe((result)=>{
      console.log(result);
    }) 
  }
}


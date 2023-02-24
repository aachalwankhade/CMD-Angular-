import { Component, OnInit } from '@angular/core';
import { PatientsService } from 'src/app/service/patients.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  constructor(private patient:PatientsService) { }
  patientList:undefined | any []
  ngOnInit(): void {
    this.patientData()
  }

// Delete Patient

  deletePatient(id:number) {
    console.log(id);
    this.patient.deletePatient(id).subscribe((result)=>{
      if(result){
        this.patientData()
      }
    })
  }

  list:boolean=true;
  card:boolean=false; 

  lists(){
    this.list =!this.list;
    this.card =!this.card;
  }
  cards(){
    this.card =!this.card;
    this.list =!this.list;
  }

  patientData(){
    this.patient.patientList().subscribe((result)=>{
      this.patientList = result;
      console.log(result)
    })
  }

  
}

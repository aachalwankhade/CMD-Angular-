import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/service/docter.service';


@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  constructor(private doctor:DoctorService) { }

  ngOnInit(): void {
  }
  createDoctor(data : any){
    this.doctor.addDoctor(data).subscribe((result:any)=>{
      console.log(result);
    })
  }


}



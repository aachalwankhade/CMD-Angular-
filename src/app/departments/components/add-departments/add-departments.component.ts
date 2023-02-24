import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-add-departments',
  templateUrl: './add-departments.component.html',
  styleUrls: ['./add-departments.component.css']
})
export class AddDepartmentsComponent implements OnInit {
  // Department: any

  constructor(private department:DepartmentService) { }

  ngOnInit(): void {
  }
  createDepartment(data : any){
    this.department.addDepartment(data).subscribe((result)=>{
      console.log(result);
    })
  }

}


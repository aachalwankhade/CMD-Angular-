import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  department:undefined | any[]

  constructor(private id:DepartmentService) { }

  ngOnInit(): void {
    this.id.departmentList().subscribe((result)=>{
      this.department=result;
    })
  }

}
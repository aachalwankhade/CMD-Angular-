import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }
  addDepartment(data:any){
    return this.http.post('http://localhost:3000/Department',data)
  }
  departmentList(){
    return this.http.get<any[]>('http://localhost:3000/Department')
  }
  deleteDepartment(id:number){
    return this.http.delete(`http://localhost:3000/Department${id}`)
  }
}
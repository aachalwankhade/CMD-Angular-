import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private http: HttpClient) { }
  addPatient(data: any){
    return this.http.post('http://localhost:3000/Patient',data)
  }

  patientList(){
    return this.http.get<any[]>('http://localhost:3000/Patient');
  }

  deletePatient(id:number){
    return this.http.delete(`http://localhost:3000/Patient/${id}`)
  }

}

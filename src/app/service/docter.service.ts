import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }
  addDoctor(data:any){
    return this.http.post('http://localhost:3000/Doctor',data)
  }
  doctorList(){
    return this.http.get<any[]>('http://localhost:3000/Doctor')
  }
}

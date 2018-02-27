import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
@Injectable()
export class EmployeeService {
  users =[]

  constructor(private http:Http,private router :Router) {
   //this.listAllEmployees();
   }

  listAllEmployees(){
    
    //return "My New Employee Service!!!!!!!!! ;-)"
      this.http.get("http://localhost:3000/users").map((response: Response)=> response.json()).subscribe(
        q=>{
        this.users=q;
        //console.log("q",q)
        //return this.users;
      })
      return this.users;
  }
   
}
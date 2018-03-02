import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
@Injectable()
export class EmployeeService {
    users = [];
 
  
  constructor(private http:Http,private router :Router) {
    
     
   
   }

   addEmployee(model){
    return this.http.post("http://localhost:3000/users", model).map(s=>{
       
        return s.json();
    });
   }
    

//Function to list employee details
  listAllEmployees(){
      return this.http.get("http://localhost:3000/users").map(s=>{
         return s.json();
     });
     
  }
  
  deleteEmployee(y){
    return this.http.delete("http://localhost:3000/users/"+y).map(s=>{
      return s.json(); 
    });
    }


    editEmployee(model){
      return this.http.put("http://localhost:3000/users/"+model.id,model).map(s=>{
        return s.json();
    })
  }

  getEmployee(id){
    return this.http.get("http://localhost:3000/users/"+id).map(s=>{
       return s.json();
   });
   
}
      
}
  
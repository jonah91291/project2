import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
@Injectable()
export class EmployeeService {
  users =[]
  empInformation = new Details();
    
 
  
  constructor(private http:Http,private router :Router) {
    
     
   //this.listAllEmployees();
   
   }
//Function to list employee details
  listAllEmployees(){
    
    //return "My New Employee Service!!!!!!!!! ;-)"
      this.http.get("http://localhost:3000/users").map((response: Response)=> response.json()).subscribe(
        q=>{
        this.users=q;
        //console.log("q",q)
        //return this.users;
      })
      console.log("q",this.users)
      return this.users;
  }
   //Function to add employee details
  addEmployee(){
   console.log("i'm here");
   console.log(this.empInformation)
   var tousethis = this;
   var model = JSON.parse(JSON.stringify(this.empInformation));
   this.http.post("http://localhost:3000/users",model).subscribe(function(d)
   {
    console.log("data",d)
    tousethis.router.navigate(['/tablelist']);
  })
  this.empInformation = new Details();
  }
     //Function to edit employee details
  editEmployee(){

  }

     //Function to delete employee details
  deleteEmployee(){

  }

  
}
  class Details {
  public EID: Number;
  public ENAME: String;
  }

import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editing',
  templateUrl: './editing.component.html',
  styleUrls: ['./editing.component.css'],
  providers:[EmployeeService]
})
export class EditingComponent  {
  deleteuserdetails
  edituserdetails
  users;
  constructor(private _employeeService: EmployeeService, private router: Router) {

   }

   ngOnInit() {
    console.log("in ngoninit");
    this.getusers();
     console.log("User:::",this.users)
  } 

getusers(){
  this._employeeService.listAllEmployees().subscribe(s=>{
    this.users = s;
  });
}
  deleteEmployee(id){
    this._employeeService.deleteEmployee(id).subscribe(s=>{
      console.log("deleted");
      alert("user deleted");
      this.getusers();
    })
    
    }


    editEmployee(a){
      this.router.navigate(['edit/'+a]);
    }


}

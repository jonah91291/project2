import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-tablelist',
  templateUrl: './tablelist.component.html',
  styleUrls: ['./tablelist.component.css'],
  providers:[EmployeeService]
})

export class TablelistComponent implements OnInit {
users;

  constructor(private _employeeService: EmployeeService) {
     
   }

  ngOnInit() {
    console.log("in ngoninit");
    this._employeeService.listAllEmployees().subscribe(s=>{
      this.users = s;
      console.log("User:::",this.users)
    });
     
  } 

}

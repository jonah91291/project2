import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers:[EmployeeService]
})
export class AddComponent implements OnInit {
adduserdetails


  constructor(private _employeeService: EmployeeService) {
    
   }

  ngOnInit() {
    this.adduserdetails  =  this._employeeService.addEmployee();
  }

}

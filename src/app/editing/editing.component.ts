import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
@Component({
  selector: 'app-editing',
  templateUrl: './editing.component.html',
  styleUrls: ['./editing.component.css'],
  providers:[EmployeeService]
})
export class EditingComponent implements OnInit {
  deleteuserdetails
  edituserdetails
  constructor(private _employeeService: EmployeeService) {

   }

  ngOnInit() {
    this.deleteuserdetails  =  this._employeeService.deleteEmployee();
    this.edituserdetails = this._employeeService.editEmployee();
  }

}

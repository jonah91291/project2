import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-tablelist',
  templateUrl: './tablelist.component.html',
  styleUrls: ['./tablelist.component.css'],
  providers:[EmployeeService]
})

export class TablelistComponent implements OnInit {
allusers=[]

  constructor(private _employeeService: EmployeeService) {
    
   }

  ngOnInit() {
    this.allusers  =  this._employeeService.listAllEmployees();
    
  } 

}

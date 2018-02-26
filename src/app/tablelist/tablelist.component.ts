import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-tablelist',
  templateUrl: './tablelist.component.html',
  styleUrls: ['./tablelist.component.css'],
  providers:[EmployeeService]
})

export class TablelistComponent implements OnInit {
newtitle = '';

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.newtitle =  this._employeeService.listAllEmployees();
    
  } 

}

import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {EmployeeService} from '../employee.service';


@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
a;
user;
  constructor(private employeeService:EmployeeService, private activatedRoute: ActivatedRoute, private router: Router) { 
    this.user = new Details();
    this.activatedRoute.params.subscribe((params: Params) => {
      this.a = params['id'];
    });
    this.employeeService.getEmployee(this.a).subscribe(s=>{
      this.user = s;
    });
  }

  ngOnInit() {
  }

  updateUser(){
    var data = JSON.parse(JSON.stringify(this.user));
    this.employeeService.editEmployee(data).subscribe(s=>{
      console.log('response',s);
      this.router.navigate(['tablelist']);
     
    });
  }

}

class Details {
  public EID: Number;
  public ENAME: String;
  }

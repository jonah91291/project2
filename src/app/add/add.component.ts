import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers:[EmployeeService]
})
export class AddComponent implements OnInit {
adduserdetails;
empInformation;
  constructor(private employeeService: EmployeeService, private router:Router) {
    
    
      this.empInformation = new Details();
   }

   //Function to add employee details
  addEmployee(){
    console.log("i'm here");
    console.log(this.empInformation)
    var tousethis = this;
    var model = JSON.parse(JSON.stringify(this.empInformation));
    this.employeeService.addEmployee(model).subscribe(response =>{
        console.log('response',response);
    this.router.navigate(['tablelist']);
    });
   }

   

  ngOnInit() {
   
  }

}
class Details {
  public EID: Number;
  public ENAME: String;
  }

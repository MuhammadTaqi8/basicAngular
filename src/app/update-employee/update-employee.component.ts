import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pid } from 'process';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  public pId: number = 0;
  employee:Employee = new Employee();
  constructor(private activeRoute: ActivatedRoute, private employeeService: EmployeeService, private router:Router) { }


  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.pId = params['id'];
    });
    this.employeeService.getEmployeeById(this.pId).subscribe(data=>{
      this.employee = data;
    })
  }
  onSubmit(){
    this.employeeService.updateEmployee(this.pId,this.employee).subscribe(data=>{
      this.gotoEmployeeList();
    })
  }

  gotoEmployeeList(){
    this.router.navigate(['/employees']);
  }
}

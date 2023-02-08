import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  constructor(private service: EmployeeService, private router: Router) { }

  employee: Employee = new Employee();
  ngOnInit(): void {
  }

  public saveEmployee() :void{
      this.service.createEmployee(this.employee).subscribe(data=>{
      this.gotoEmployeeList();
    })
  }
  gotoEmployeeList(){
    this.router.navigate(['/employees']);
  }


  onSubmit(){
    debugger
    this.saveEmployee();
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  searchTerm:any;
  constructor(private service: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.service.getEmployee().subscribe(
      (res:Employee[])=>{
        this.employees = res;
      },
      (err:any)=>{
        console.log(err)
      }
    );
    console.log(this.employees)
  }
  deleteEmployee(id:number){
    this.service.deleteEmployee(id).subscribe(data=>{
      this.getEmployees();
    })
  }
  updateEmployee(id:number){
    this.router.navigate([`update-employee/${id}`]);
  }

}

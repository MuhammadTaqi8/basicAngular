import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = 'http://localhost:3000/employee';
  constructor(private http: HttpClient) { }

  getEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.baseUrl}`);
  }
  createEmployee(employee: Employee):Observable<Object>{
    return this.http.post<Employee>(`${this.baseUrl}`, employee);
  }
  getEmployeeById(id:number): Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }
  updateEmployee(id:number, employee: Employee):Observable<Object>{
    return this.http.put<Employee[]>(`${this.baseUrl}/${id}`, employee);
  }
  deleteEmployee(id:number): Observable<Object>{
    return this.http.delete<Employee>(`${this.baseUrl}/${id}`);
  }
}

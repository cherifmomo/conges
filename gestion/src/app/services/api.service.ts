import { Injectable } from '@angular/core';
//import {Employee} from "../employee";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
//we've defined our base url here in the env
import {environment} from "../../environments/environment";

import { Employee } from '../model/employee.model';


const baseUrl = 'http://localhost:3000/api/employee';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(baseUrl);
  }
  get(id: any): Observable<Employee> {
    return this.httpClient.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.httpClient.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.httpClient.delete(baseUrl);
  }

  /**
   find by title coming soon
   findByTitle(title: any): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${baseUrl}?firstname=${firstname}`);
  }

   * This method returns employee details json in assets
   * environment.baseURL = assets/
   */
  // cherif
  //getEmployeeInformation(): Observable<Employee[]>{
  //  return this.httpClient.get<Employee[]>(`${environment.baseURL}employee.json`);
 // }

}

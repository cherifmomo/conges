import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Categories } from '../model/categories.model';



const baseUrl = 'http://localhost:3000/api/categories';

@Injectable({
  providedIn: 'root'
})

export class ApiCategoriesService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Categories[]> {
    return this.httpClient.get<Categories[]>(baseUrl);
  }
  get(id: any): Observable<Categories> {
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


}

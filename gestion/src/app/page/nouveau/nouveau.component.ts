import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { Categories } from '../../model/categories.model';
import { ApiService } from "../../services/api.service";
import { ApiCategoriesService } from "../../services/api-categories.service";

@Component({
  selector: 'app-nouveau',
  templateUrl: './nouveau.component.html',
  styleUrls: ['./nouveau.component.css']
})
export class NouveauComponent implements OnInit {
  employee: Employee = {
    firstname: '',
    lastname: '',
    start: new Date(),
    end: new Date(),
    status: '',
    category: ''
  };
  categories: Categories[] = [];

  submitted = false;
  constructor(
    private employeeApiService: ApiService,
    private apiCategoriesService:ApiCategoriesService) { }


  ngOnInit(): void {
    this.getCategoryInformation();
  }

  /**
  * Save Employee
  */
  getCategoryInformation() {
    this.apiCategoriesService.getAll()
      .subscribe((res) => {
        this.categories = res;
      });
  }


  /**
  * Save Employee
  */
  saveEmployee(): void {
    const data = {
      firstname: this.employee.firstname,
      lastname: this.employee.lastname,
      start: this.employee.start,
      end: this.employee.end,
      status: this.employee.status,
      category: this.employee.category
    };
    this.employeeApiService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  /**
  * Add new employee
  */
  newEmployee(): void {
    this.submitted = false;
    this.employee = {
      firstname: '',
      lastname: '',
      start: new Date(),
      end: new Date(),
      status: '',
      category: ''
    };
  }
    /**
  * change data category on change select
  */
    onChangeCategory(newValue: any): void {
      console.log(newValue);
      this.employee.category = newValue;
    }

}

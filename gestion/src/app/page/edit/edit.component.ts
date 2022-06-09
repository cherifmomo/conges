import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { ApiService } from "../../services/api.service";
import { Categories } from '../../model/categories.model';
import { ApiCategoriesService } from "../../services/api-categories.service";
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() viewMode = false;
  message = '';
  categories: Categories[] = [];

  constructor(
    private employeeApiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe,
    private apiCategoriesService: ApiCategoriesService) { }


  @Input() currentEmployee: Employee = {
    firstname: '',
    lastname: '',
    start: new Date(),
    end: new Date(),
    status: '',
    category: ''
  };


  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getCategoryInformation()
      this.getEmployee(this.route.snapshot.params["id"]);
    }
  }

  /**
  * Get categories  informations
  */
  getCategoryInformation() {
    this.apiCategoriesService.getAll()
      .subscribe((res) => {
        this.categories = res;
      });
  }

  /**
  * Save employee
  */
  getEmployee(id: string): void {
    this.employeeApiService.get(id)
      .subscribe({
        next: (data) => {
          this.currentEmployee = data;
        },
        error: (e) => console.error(e)
      });
  }

  /**
  * Update Employee
  */
  updateEmployee(): void {
    this.message = '';
    this.employeeApiService.update(this.currentEmployee.id, this.currentEmployee)
      .subscribe({
        next: (res) => {
          this.message = res.message ? res.message : 'This employee was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

    /**
  * Update Employee
  */
  onChangeCategory(newValue: any): void {
    console.log(newValue);
    this.currentEmployee.category = newValue;
  }

  /**
  * delete Employee
  */
  deleteEmployee(): void {

    if(confirm("Are you sure to delete ")) {
       this.employeeApiService.delete(this.currentEmployee.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/accueil']);
        },
        error: (e) => console.error(e)
      });

    }
  }

}

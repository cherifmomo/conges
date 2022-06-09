import { Component, OnInit, Input } from '@angular/core';
import { Categories } from '../../model/categories.model';
import { ApiCategoriesService } from "../../services/api-categories.service";

@Component({
  selector: 'app-categories-new',
  templateUrl: './categories-new.component.html',
  styleUrls: ['./categories-new.component.css']
})
export class CategoriesNewComponent implements OnInit {

  category: Categories = {
    name: ''
  };

  submitted = false;
  constructor(
    private apiCategoriesService:ApiCategoriesService) { }


  ngOnInit(): void {
  }
  /**
  * Save Category
  */
  saveCategory(): void {
    const data = {
      name: this.category.name
    };
    console.table(data);
    this.apiCategoriesService.create(data)
      .subscribe({
        next: (res) => {
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  /**
  * Add new Category
  */
  newCategory(): void {
    console.table('okok');
    this.submitted = false;
    this.category = {
      name: '',
    };
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Categories } from '../../model/categories.model';
import { ApiCategoriesService } from "../../services/api-categories.service";
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-categories-edit',
  templateUrl: './categories-edit.component.html',
  styleUrls: ['./categories-edit.component.css']
})
export class CategoriesEditComponent implements OnInit {

  @Input() viewMode = false;
  message = '';

  constructor(
    private apiCategoriesService: ApiCategoriesService,
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe) { }


  @Input() currentCategory: Categories = {
    name: ''
  };


  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getCategories(this.route.snapshot.params["id"]);
    }
  }

  /**
  * Get categories by id - root
  */
  getCategories(id: string): void {
    this.apiCategoriesService.get(id)
      .subscribe({
        next: (data) => {
          this.currentCategory = data;
        },
        error: (e) => console.error(e)
      });
  }

  /**
  * Update categories
  */
  updateCategories(): void {
    this.message = '';
    this.apiCategoriesService.update(this.currentCategory.id, this.currentCategory)
      .subscribe({
        next: (res) => {
          this.message = res.message ? res.message : 'This categories was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  /**
  * delete Category
  */
  deleteCategory(): void {

    if (confirm("Are you sure to delete ")) {
      this.apiCategoriesService.delete(this.currentCategory.id)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.router.navigate(['/categories']);
          },
          error: (e) => console.error(e)
        });

    }
  }

}

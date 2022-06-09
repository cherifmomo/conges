import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Categories } from '../../model/categories.model';
import { ApiCategoriesService } from "../../services/api-categories.service";
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {

  /**
  * Title App
  */
  title = 'Categories';

  /**
  * Declation
  */
  categories: Categories[] = [];

  currentCategories: Categories = {};

  currentIndex = -1;

  /**
  * Decorator sort
  */
  @ViewChild(MatSort)
  sort!: MatSort;

  /**
  * Decorator pagination
  */
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  setApplyFilter(event: any): void {
    console.log('setApplyFilter', event.target.value);
    this.dataSource.filter = event.target.value.trim().toLowerCase(); //trim pour eviter les espaces
  }

  /**
  * columns we will show on the table
  */
  public displayedColumns = ['name','edit'];

  /**
  * the source data
  */
  public dataSource = new MatTableDataSource<Categories>();

  constructor(
    private apiCategoriesService: ApiCategoriesService,
    private fb: FormBuilder,
    public dialog: MatDialog) { }

  ngOnInit() {
    //call this method on component load
    this.getCategoriesInformation();
  }

  /**
  * This method returns Empoyee details
  */
  getCategoriesInformation() {
    this.apiCategoriesService.getAll()
      .subscribe((res) => {
        this.categories = res;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.dataSource.data = res;
      });
  }

}

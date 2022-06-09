import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Employee } from '../../model/employee.model';
import { ApiService } from "../../services/api.service";
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements OnInit {

  /**
  * Title App
  */
  title = 'Employee';

  /**
  * Declation
  */
  empoyee: Employee[] = [];

  currentEmployee: Employee = {};

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
  public displayedColumns = ['firstname', 'lastname', 'start', 'end', 'status', 'category', 'edit'];

  /**
  * the source data
  */
  public dataSource = new MatTableDataSource<Employee>();

  constructor(
    private employeeApiService: ApiService,
    private fb: FormBuilder,
    public dialog: MatDialog) { }

  ngOnInit() {
    //call this method on component load
    this.getEmployeeInformation();
  }

  /**
  * This method returns Empoyee details
  */
  getEmployeeInformation() {
    this.employeeApiService.getAll()
      .subscribe((res) => {
        console.log(this.sort);
        this.empoyee = res;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.dataSource.data = res;
      });
  }
}

import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  description: string;
  price: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: "Xiaomi", description: 'MI 11X', price: 250},
  { position: 2, name: "Helium", description: "4.0026", price: 250 },
  { position: 3, name: "Lithium", description: '6.941', price: 250 },
];
@Component({
  selector: "spider-todo-app",
  template: `
    <div class="main-area">
      <div class="content-area">
        <div class="header">
          <h1>Manage Products</h1>
          <hr />
        </div>
        <div class="container">
          <div class="form-area">
            <h3>Create Product</h3>
            <form [formGroup]='reactiveForm' action="">
              <label for="name">Product Name</label>
              <input type="text" id="name" formControlName="name"/>

              <label for="description">Product Description</label>
              <input type="text" id="description" formControlName="description"/>

              <label for="price">Product Price</label>
              <input type="text" id="price" formControlName="price"/>

              <input type="submit" value="Add Product" />
            </form>
          </div>

          <div class="product-display-area">
            <h3>All Products</h3>

            <table
              mat-table
              [dataSource]="dataSource"
              class="mat-elevation-z8 demo-table"
            >
              <!-- Position Column -->
              <ng-container matColumnDef="demo-position">
                <th mat-header-cell *matHeaderCellDef>No.</th>
                <td mat-cell *matCellDef="let element">
                  {{ element.position }}
                </td>
              </ng-container>

              <!-- Name Column -->
              <ng-container matColumnDef="demo-name">
                <th mat-header-cell *matHeaderCellDef>Name</th>
                <td mat-cell *matCellDef="let element">{{ element.name }}</td>
              </ng-container>

              <!-- Weight Column -->
              <ng-container matColumnDef="demo-weight">
                <th mat-header-cell *matHeaderCellDef>Weight</th>
                <td mat-cell *matCellDef="let element">{{ element.category }}</td>
              </ng-container>

              <!-- Symbol Column -->
              <ng-container matColumnDef="demo-symbol">
                <th mat-header-cell *matHeaderCellDef>Symbol</th>
                <td mat-cell *matCellDef="let element">{{ element.directBy }}</td>
              </ng-container>

              <ng-container matColumnDef="demo-symbol">
                <th mat-header-cell *matHeaderCellDef>Symbol</th>
                <td mat-cell *matCellDef="let element">{{ element.starring }}</td>
              </ng-container>

              <ng-container matColumnDef="demo-symbol">
                <th mat-header-cell *matHeaderCellDef>Symbol</th>
                <td mat-cell *matCellDef="let element">{{ element.year }}</td>
              </ng-container>

              <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
              <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoAppComponent implements OnInit {
  displayedColumns: string[] = [
    "name",
    "category",
    "directBy",
    "starring",
    "year",
  ];
  dataSource = new MatTableDataSource <any> (ELEMENT_DATA);

  reactiveForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    category: new FormControl(null, Validators.required),
    directBy: new FormControl(null, Validators.required),
    starring: new FormControl(null, Validators.required),
    year: new FormControl(null, Validators.required),

  });

  constructor() {}

  ngOnInit(): void {}
}

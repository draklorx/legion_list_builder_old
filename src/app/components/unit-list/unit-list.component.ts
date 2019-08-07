import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Entry } from 'contentful';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.sass']
})
export class UnitListComponent {
  units: Entry<any>[] = [];

  constructor(
    private apiService: ApiService, 
    public dialogRef: MatDialogRef<UnitListComponent>) { }
 
  ngOnInit() {
    this.apiService.getUnits().then(units => {
      this.units = units;
      console.log(units);
    });
  }
  
}

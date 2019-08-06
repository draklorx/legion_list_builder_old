import { Component, OnInit } from '@angular/core';
import { lists } from '../../lists';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { FactionListComponent } from '../faction-list/faction-list.component';

@Component({
  selector: 'app-list-list',
  templateUrl: './list-list.component.html',
  styleUrls: ['./list-list.component.sass']
})
export class ListListComponent implements OnInit {
  lists = lists;

  constructor(private dialog: MatDialog) { }

  chooseFaction() {
    const dialogRef = this.dialog.open(FactionListComponent);
  }

  ngOnInit() {
  }

}

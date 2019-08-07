import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Entry } from 'contentful';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material';
import { UnitListComponent } from '../unit-list/unit-list.component';

@Component({
  selector: 'app-rank-list',
  templateUrl: './rank-list.component.html',
  styleUrls: ['./rank-list.component.sass']
})
export class RankListComponent implements OnInit {
  ranks: Entry<any>[] = [];

  constructor(
    private dialog: MatDialog,
    private apiService: ApiService, 
    public dialogRef: MatDialogRef<RankListComponent>) { }

  ngOnInit() {
    this.apiService.getRanks().then(ranks => this.ranks = ranks);
  }

  listUnits(rank: string) {
    const dialogRef = this.dialog.open(UnitListComponent);
  }

}

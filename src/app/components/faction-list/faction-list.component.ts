import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router} from '@angular/router';
import { Entry } from 'contentful';
import { lists } from '../../lists';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-faction-list',
  templateUrl: './faction-list.component.html',
  styleUrls: ['./faction-list.component.sass']
})
export class FactionListComponent implements OnInit {
  lists = lists;
  factions: Entry<any>[] = [];

  constructor(
    private apiService: ApiService, 
    private router: Router,
    public dialogRef: MatDialogRef<FactionListComponent>) { }

  ngOnInit() {
    this.apiService.getFactions().then(factions => this.factions = factions);
  }

  
  addList(faction: string) {
    this.lists.push({
      name: "New List",
      faction: faction,
      units: {
        commanders: [],
        opperatives: [],
        corps: [],
        special_forces: [],
        support: [],
        heavy: []
      }
    });
    this.router.navigate(['/lists', lists.length-1]);
    this.dialogRef.close();
  }

}

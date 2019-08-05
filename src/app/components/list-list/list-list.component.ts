import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { lists } from '../../lists';
import { FactionListComponent } from 'src/app/components/faction-list/faction-list.component';

@Component({
  selector: 'app-list-list',
  templateUrl: './list-list.component.html',
  styleUrls: ['./list-list.component.sass']
})
export class ListListComponent implements OnInit {
  lists = lists;

  constructor(private router: Router) { 
  }

  addList() {
    this.lists.push({
      name: "New List",
      faction: "Rebels",
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
  }
  ngOnInit() {
  }

}

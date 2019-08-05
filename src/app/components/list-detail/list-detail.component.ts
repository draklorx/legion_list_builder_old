import { Component, OnInit } from '@angular/core';

import { lists } from '../../lists';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.sass']
})
export class ListDetailComponent implements OnInit {
  list;
  units: Entry<any>[] = [];
  ranks: Entry<any>[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.list = lists[+params.get('listId')]
    });
    // Get all units from the API.
    this.apiService.getUnits().then(units => this.units = units);
    // Get all ranks from the API.
    this.apiService.getRanks().then(ranks => this.ranks = ranks);
  }

  public addUnit(rank) {
    console.log(rank);
  }

}

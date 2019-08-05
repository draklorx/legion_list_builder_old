import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListListComponent } from './components/list-list/list-list.component';
import { ListDetailComponent } from './components/list-detail/list-detail.component';


const routes: Routes = [
  { path: '', component: ListListComponent },
  { path: 'lists/:listId', component: ListDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListDetailComponent } from './components/list-detail/list-detail.component';
import { ListListComponent } from './components/list-list/list-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UnitListComponent } from './components/unit-list/unit-list.component';
import { FactionListComponent } from './components/faction-list/faction-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatDialogModule, MatListModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RankListComponent } from './components/rank-list/rank-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListDetailComponent,
    ListListComponent,
    UnitListComponent,
    FactionListComponent,
    RankListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatDialogModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FactionListComponent, RankListComponent]
})
export class AppModule { }

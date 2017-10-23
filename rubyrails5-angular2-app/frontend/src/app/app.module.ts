import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiService } from './api.service';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { EncourterAddComponent } from './encourter-add/encourter-add.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { EncourterListComponent } from './encourter-list/encourter-list.component';
import {HttpClientModule} from "@angular/common/http";
import { ShowComponent } from './show/show.component';
import { EditComponent } from './edit/edit.component';
import { EditEncounterComponent } from './edit-encounter/edit-encounter.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientAddComponent,
    EncourterAddComponent,
    PatientListComponent,
    EncourterListComponent,
    ShowComponent,
    EditComponent,
    EditEncounterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'patients',
        pathMatch: 'full',
      },

      {
        path: 'patients',
        component: PatientListComponent
      },
      {
        path: 'encourters',
        component: EncourterListComponent
      },
      {
        path: 'patients/add',
        component: PatientAddComponent
      },
      {
        path: 'patients/add/:id',
        component: PatientAddComponent
      },
      {
        path: 'encourters/add',
        component: EncourterAddComponent
      },
      {
        path: 'encourters/add/:id',
        component: EncourterAddComponent
      },
      {
        path: 'patients/show',
        component: ShowComponent
      },
      {
        path:'patients/show/:id',
        component: ShowComponent
      },
      {
        path:'patients/edit',
        component: EditComponent
      },
      {
        path:'patients/edit/:id',
        component: EditComponent
      },
      {
        path:'encourters/edit',
        component: EditEncounterComponent
      },
      {
        path:'encourters/edit/:id',
        component: EditEncounterComponent
      }
    ]),

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

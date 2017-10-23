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

@NgModule({
  declarations: [
    AppComponent,
    PatientAddComponent,
    EncourterAddComponent,
    PatientListComponent,
    EncourterListComponent,
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
      }
    ]),

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

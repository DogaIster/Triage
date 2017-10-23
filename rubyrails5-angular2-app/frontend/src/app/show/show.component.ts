import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { ApiService } from "../api.service";
import { Patient } from "../patient";
import { Encourter} from "../encourter";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(public apiService: ApiService, public router: Router) {
  }

  public patient : Patient = new Patient();

  public columns = Array<Patient>();
  public columns_encourter = Array<Encourter>();


  ngOnInit() {
    this.apiService.get("patients").subscribe((data: Patient[]) => {
      console.log(data);
        this.columns = data;
    });
/*
    this.apiService.get("encourters").subscribe((data: Encourter[]) => {
      console.log(data);
      this.columns_encourter = data;
    });
    */
  }


}




import { Component, OnInit } from '@angular/core';
import { Encourter} from "../encourter";
import { ApiService } from "../api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-edit-encounter',
  templateUrl: './edit-encounter.component.html',
  styleUrls: ['./edit-encounter.component.css']
})
export class EditEncounterComponent implements OnInit {

  constructor(public apiService: ApiService , public acRoute : ActivatedRoute) { }

  public columns = Array<Encourter>();
  public encourter : Encourter = new Encourter();

  ngOnInit() {
    this.acRoute.params.subscribe((data : any)=>{
      console.log(data.id);
      if(data && data.id){
        this.apiService.get("encourters/"+data.id).subscribe((data : Encourter)=>{
          this.encourter = data;
        });
        this.columns = data;
      }
      else
      {
        this.encourter = new Encourter();
      }
    })
  }

  public onSubmit(){
    console.log("Adding an encounter: " + this.encourter.id);
    if(this.encourter.id){
      this.apiService.update("encourters/"+this.encourter.id,this.encourter).subscribe((r)=>{
        console.log(r);
        alert("Encounter record updated !");
      })
      window.location.reload();
    }}
}


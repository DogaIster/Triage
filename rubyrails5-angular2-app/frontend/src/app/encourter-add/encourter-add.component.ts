import { Component, OnInit} from '@angular/core';
import { Encourter } from "../encourter";
import { ApiService } from "../api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-encourter-add',
  templateUrl: './encourter-add.component.html',
  styleUrls: ['./encourter-add.component.css']
})
export class EncourterAddComponent implements OnInit {

  constructor(public apiService: ApiService , public acRoute : ActivatedRoute) { }

  public encourter : Encourter = new Encourter();

  ngOnInit() {

    this.acRoute.params.subscribe((data : any)=>{
      console.log(data.id);
      if(data && data.id){
        this.apiService.get("encourters/"+data.id).subscribe((data : Encourter)=>{
          this.encourter = data;
        });
      }
      else
      {
        this.encourter = new Encourter();
      }
    })
  }

  public onSubmit(){
    console.log("Adding a product: " + this.encourter.patientID);
    /* if(this.patient.patientID){
       this.apiService.update("patients/"+this.patient.patientID,this.patient).subscribe((r)=>{
         console.log(r);
         alert("Patient updated !");
       })
     }*/

    this.apiService.post("encourters", this.encourter).subscribe((r) => {
      console.log(r);
      this.encourter = new Encourter();
      alert("Encourter Record added !");
      window.location.reload();
    });
  }


}

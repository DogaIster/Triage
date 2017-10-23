import { Component, OnInit } from '@angular/core';
import { Patient } from "../patient";
import { ApiService } from "../api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(public apiService: ApiService , public acRoute : ActivatedRoute) { }

  public columns = Array<Patient>();
  public patient : Patient = new Patient();

  ngOnInit() {
    this.acRoute.params.subscribe((data : any)=>{
      console.log(data.id);
      if(data && data.id){
        this.apiService.get("patients/"+data.id).subscribe((data : Patient)=>{
          this.patient = data;
        });
        this.columns = data;
      }
      else
      {
        this.patient = new Patient();
      }
    })
  }

  public onSubmit(){
    console.log("Adding a product: " + this.patient.id);
    if(this.patient.id){
      this.apiService.update("patients/"+this.patient.id,this.patient).subscribe((r)=>{
        console.log(r);
        alert("Patient information updated !");
      })
      window.location.reload();
    }}
}

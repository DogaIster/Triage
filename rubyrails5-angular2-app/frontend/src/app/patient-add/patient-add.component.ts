import { Component, OnInit} from '@angular/core';
import { Patient } from "../patient";
import { ApiService } from "../api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})
export class PatientAddComponent implements OnInit {

  constructor(public apiService: ApiService , public acRoute : ActivatedRoute) { }

  public patient : Patient = new Patient();

  ngOnInit() {

    this.acRoute.params.subscribe((data : any)=>{
      console.log(data.id);
      if(data && data.id){
        this.apiService.get("patients/"+data.id).subscribe((data : Patient)=>{
          this.patient = data;
        });
      }
      else
      {
        this.patient = new Patient();
      }
    })
  }

  public onSubmit(){
    console.log("Adding a product: " + this.patient.firstName);
   /* if(this.patient.patientID){
      this.apiService.update("patients/"+this.patient.patientID,this.patient).subscribe((r)=>{
        console.log(r);
        alert("Patient updated !");
      })
    }*/

      this.apiService.post("patients", this.patient).subscribe((r) => {
        console.log(r);
        this.patient = new Patient();
        alert("Patient added !");
        window.location.reload();
      });
    }


}

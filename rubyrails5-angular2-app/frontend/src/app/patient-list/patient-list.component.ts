import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { ApiService } from "../api.service";
import { Patient } from "../patient";

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  constructor(public apiService: ApiService , public router : Router) { }

  public columns = Array<Patient>();

  ngOnInit() {
    this.apiService.get("patients").subscribe((data : Patient[])=>{
      console.log(data);
      this.columns = data;
    });
  }


  public destroy(id:string){
    if(confirm("Patient and  all of the patient's encounters will be deleted. Are you sure you want to delete this patient?")) {

      console.log("delete : " + id);
      var path = 'patients/' + id;
      this.apiService.delete(path).subscribe((r) => {

        this.columns = this.columns.filter((p, i) => {

          if (Number(id) === p.patientID) {
            return false;
          }
          return true;
        }, this.columns)
        window.location.reload();
      });
    }

  }
  public edit(id:string){
    console.log("update : " + id );
    this.router.navigateByUrl('/patients/edit/' + id);
    window.location.reload();
  }

/*  public show(id:string){
    console.log("show : " + id);
    this.router.navigateByUrl('/patients/show/' + id);
    window.location.reload();
  }
  */

  public show(id:string){
      this.router.navigateByUrl('/patients/show/' + id);
    }

}

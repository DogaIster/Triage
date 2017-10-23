import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { ApiService } from "../api.service";
import { Encourter } from "../encourter";

@Component({
  selector: 'app-encourter-list',
  templateUrl: './encourter-list.component.html',
  styleUrls: ['./encourter-list.component.css']
})
export class EncourterListComponent implements OnInit {

  constructor(public apiService: ApiService , public router : Router) { }

  public columns = Array<Encourter>();

  ngOnInit() {
    this.apiService.get("encourters").subscribe((data : Encourter[])=>{
      console.log(data);
      this.columns = data;
    });
  }


  public destroy(id:string){
    console.log("delete : " + id);
    var path = 'encourters/' + id;
    this.apiService.delete(path).subscribe((r)=>{

      this.columns = this.columns.filter((p,i)=>{

        if(Number(id) === p.encourterID )
        {
          return false;
        }
        return true;
      },this.columns)
      window.location.reload();
    });


  }
  public edit(id:string){
    console.log("update : " + id );
    this.router.navigateByUrl('/encourters/add/' + id);
    window.location.reload();
  }
}

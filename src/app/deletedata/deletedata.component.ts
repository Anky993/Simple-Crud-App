import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { BackendService } from "../backend.service";

@Component({
  selector: 'app-deletedata',
  templateUrl: './deletedata.component.html',
  styleUrls: ['./deletedata.component.css']
})
export class DeletedataComponent implements OnInit {
  dataAfterSearch;
  errmsg = false
  errmsg1 = false
  sccuessmsg = false;

  constructor(private fb:FormBuilder, private backendService:BackendService) { }
  searchData = this.fb.group({
    id:['']
  })

  onSubmit(){
    this.backendService.delete(this.searchData.value).subscribe(
      data=>{
        console.log("success",data)
        if(data === 0){
          this.errmsg = true;
          this.sccuessmsg = false;
        }
        else{
          this.dataAfterSearch = data;
          this.errmsg = false;
          this.sccuessmsg = true;
        }
      },
      err=>{
        this.errmsg1 = true;
        console.log("Error:",err)
      }
    )
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { BackendService } from "../backend.service";


@Component({
  selector: 'app-fetchdata',
  templateUrl: './fetchdata.component.html',
  styleUrls: ['./fetchdata.component.css']
})
export class FetchdataComponent implements OnInit {
  hide = false;
  hide1 = false;
  dataAfterSearch;
  errmsg = false
  errmsg1 = false

  constructor(private fb:FormBuilder, private backendService:BackendService) { }
  searchData = this.fb.group({
    id:['']
  })

  onSearch(){
    this.backendService.getData(this.searchData.value).subscribe(
      data=>{
        console.log("success",data)
        if(data === 0){
          this.errmsg = true;
          this.hide = false;
        }
        else{
          this.dataAfterSearch = data;
          this.hide =true;
          this.errmsg = false;
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

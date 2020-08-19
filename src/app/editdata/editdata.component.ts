import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms'
import { BackendService } from "../backend.service";

@Component({
  selector: 'app-editdata',
  templateUrl: './editdata.component.html',
  styleUrls: ['./editdata.component.css']
})
export class EditdataComponent implements OnInit {
  hide = false;
  hide1 = false;
  dataAfterSearch;
  dataValue;
  errmsg = false
  errmsg1 = false
  // err = false;

  constructor(private fb:FormBuilder, private backendService:BackendService) { }

  searchData = this.fb.group({
    id:['']
  })

  editData = this.fb.group({
    id: ['',[Validators.required, Validators.pattern(/^[0-9]{1,3}$/)]],
    Name: ['',[Validators.required, Validators.minLength(3), Validators.pattern(/^[\w\s]+$/)]],
    username: [''],
    email: ['',[Validators.required,Validators.pattern(/^[\w-\.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)]],
    address: this.fb.group({
      street: [''],
      suite: [''],
      city: ['',Validators.required],
      zipcode: ['',[Validators.required, Validators.pattern(/^[0-9]{6}$/)]],
      geo:this.fb.group({
        lat: [''],
        lng: ['']
      }),
    }),
    phone: ['',[Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    website: ['']
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
            this.dataValue = data.id;
            this.errmsg = false;
          }
        },
        err=>{
          console.log("Error:",err)
        }
      )
    }

    onSubmit(){
      this.editData.value.id = this.dataValue
      this.backendService.edit(this.editData.value).subscribe(
        data=>{
          console.log("success",data)
          if(data === 0){
            this.errmsg = true;
            this.hide = false;
          }
          else{
            this.dataAfterSearch = data;
            this.hide =false;
            this.hide1 =true;
            this.dataValue = data.id;
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

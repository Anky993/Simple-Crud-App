import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.css']
})
export class AdddataComponent implements OnInit {
  errmsg = false
  errmsg1 = false;
  successmsg = false;

  constructor( private fb:FormBuilder, private backendService:BackendService) { }

  adddata= this.fb.group({
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

  onSubmit(){
    console.log(this.adddata.value)
    this.backendService.add(this.adddata.value).subscribe(
      data=>{
        console.log("success",data)
        if(data === 0){
          this.errmsg = true;
          this.errmsg1 = false;

        }
        else{
          this.adddata.reset();
          this.successmsg = true;
          this.errmsg = false;
          this.errmsg1 = false;
        }
      },
      error=>{
        this.errmsg1 = true;
        console.log("Error:",error)
      }
    )
  }

  ngOnInit(): void {
  }

}

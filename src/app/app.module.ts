import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FetchdataComponent } from './fetchdata/fetchdata.component';
import { DeletedataComponent } from './deletedata/deletedata.component';
import { EditdataComponent } from './editdata/editdata.component';
import { AdddataComponent } from './adddata/adddata.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FetchdataComponent,
    DeletedataComponent,
    EditdataComponent,
    AdddataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

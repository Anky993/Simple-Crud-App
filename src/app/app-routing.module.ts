import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FetchdataComponent } from './fetchdata/fetchdata.component'
import { EditdataComponent } from './editdata/editdata.component'
import { DeletedataComponent } from './deletedata/deletedata.component'
import { AdddataComponent } from './adddata/adddata.component'


const routes: Routes = [
  {path: 'Fetch', pathMatch:'full', component : FetchdataComponent},
  {path: 'Edit', pathMatch:'full', component : EditdataComponent},
  {path: 'Delete', pathMatch:'full', component : DeletedataComponent},
  {path: 'Add', pathMatch:'full', component : AdddataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

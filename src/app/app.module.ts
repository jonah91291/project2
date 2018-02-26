import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { AddComponent } from './add/add.component';
import { TablelistComponent } from './tablelist/tablelist.component';
import { EditingComponent } from './editing/editing.component';

import {Routes, RouterModule} from '@angular/router';

const routes: Routes =[
  {
    path:"",
    redirectTo:'tablelist',
    pathMatch:'full'
    
  },
  {
    path:"tablelist",
    component:TablelistComponent
  }
  
]

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    AddComponent,
    TablelistComponent,
    EditingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

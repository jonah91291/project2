import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { AddComponent } from './add/add.component';
import { TablelistComponent } from './tablelist/tablelist.component';
import { EditingComponent } from './editing/editing.component';

import {Routes, RouterModule} from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes =[
  {
    path:"",
    redirectTo:'',
    pathMatch:'full'
    
  },
  {
    path:"homepage",
    component:HomepageComponent
  },
  {
    path:"add",
    component:AddComponent
  },
  {
    path:"tablelist",
    component:TablelistComponent
  },  
  {
    path:"editing",
    component:EditingComponent
  },
   
]

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    AddComponent,
    TablelistComponent,
    EditingComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

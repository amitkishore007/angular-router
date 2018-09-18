import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyserverComponent } from './myserver/myserver.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
  {path: '/',component:HomeComponent},
  {path:'users',component:UsersComponent},
  {path:'myserver',component:MyserverComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyserverComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

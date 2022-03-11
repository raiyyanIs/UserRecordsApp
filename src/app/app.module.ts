import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './form/user-list/user-list.component';
import { UserFormComponent } from './form/user-form/user-form.component';


const appRoutes: Routes = [
  {path: '', component: UserLoginComponent},
  {path: 'form', component: FormComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    FormComponent,
    UserListComponent,
    UserFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

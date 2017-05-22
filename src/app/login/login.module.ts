import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'app/login/login.component';
import { FormsModule } from '@angular/forms';
// localhost: 4200/login
export const routes: Routes = [
  { path: '', component: LoginComponent }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from 'app/main/user/user.component';
const userRoutes: Routes = [
  // localhost: 4200/main/user
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  // localhost: 4200/main/user/index
  { path: 'index', component: UserComponent }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [UserComponent]
})
export class UserModule { }

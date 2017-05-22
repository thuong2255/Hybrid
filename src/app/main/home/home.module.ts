import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'app/main/home/home.component';
const homeRoutes: Routes = [
  // localhost: 4200/main/user
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  // localhost: 4200/main/user/index
  { path: 'index', component: HomeComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }

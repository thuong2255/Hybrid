import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'app/app.routes';
import { AuthenService } from "app/core/service/authen.service";
import { NotificationService } from "app/core/service/notification.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthenService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

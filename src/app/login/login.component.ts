import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../core/service/notification.service';
import { AuthenService } from '../core/service/authen.service';
import { MessageConstants } from '../core/common/message.constants';
import { UrlConstants } from '../core/common/url.constants';
import { Route } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  router: any;
  loading = false;
  model: any = {};
  returnUrl: string;

  constructor(private authenService: AuthenService, private notificationService: NotificationService) { }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this.authenService.login(this.model.username, this.model.password).subscribe(data => {
      this.router.navigate([UrlConstants.HOME]);
    }, error => {
      console.log(error);
      this.loading = false;
    });
  }

}

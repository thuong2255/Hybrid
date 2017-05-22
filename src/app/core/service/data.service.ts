import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from "@angular/router";
import { AuthenService } from "app/core/service/authen.service";
import { SystemConstants } from "app/core/common/system.constants";
import { Observable } from 'rxjs/Observable';
import { NotificationService } from "app/core/service/notification.service";
import { UtilityService } from "app/core/service/utility.service";
import { MessageConstants } from "app/core/common/message.constants";

@Injectable()
export class DataService {
  private headers: Headers;
  constructor(private _http, private _router: Router, private _authenService: AuthenService,
    private _notificationService: NotificationService, private _utilityService: UtilityService) {
  }

  get(url: string) {
    this.headers.delete('Authorization');
    this.headers.append('Authorization', 'Bearer' + this._authenService.getLoggedInUser().access_token);
    return this._http.get(SystemConstants.BASE_API + url, { headers: this.headers }).map(this.extractData);
  }

  post(url: string, data?: any) {
    this.headers.delete('Authorization');
    this.headers.append('Authorization', 'Bearer' + this._authenService.getLoggedInUser().access_token);
    return this._http.post(SystemConstants.BASE_API + url, data, { headers: this.headers }).map(this.extractData);
  }

  put(url: string, data?: any) {
    this.headers.delete('Authorization');
    this.headers.append('Authorization', 'Bearer' + this._authenService.getLoggedInUser().access_token);
    return this._http.put(SystemConstants.BASE_API + url, data, { headers: this.headers }).map(this.extractData);
  }

  delete(url: string, key: string, id: string) {
    this.headers.delete('Authorization');
    this.headers.append('Authorization', 'Bearer' + this._authenService.getLoggedInUser().access_token);
    return this._http.delete(SystemConstants.BASE_API + url + '/?' + key + '=' + id, { headers: this.headers })
      .map(this.extractData);
  }

  postFile(url: string, data?: any) {
    let newHeader = new Headers();
    newHeader.append('Authorization', 'Bearer' + this._authenService.getLoggedInUser().access_token);
    return this._http.post(SystemConstants.BASE_API + url, data, { headers: this.headers }).map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  public handleError(error: any) {
    if (error.status == 401) {
      localStorage.removeItem(SystemConstants.CURRENT_USER);
      this._notificationService.printErrorMessasge(MessageConstants.LOGIN_AGAIN_MSG);
      this._utilityService.navigateToLogin();
    }
    else {
      let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Lỗi hệ thống';
      this._notificationService.printErrorMessasge(errMsg);
    }
  }
}

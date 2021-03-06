import { Injectable, Inject, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //เพื่อ call หา backend
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable({
  providedIn: 'root'
})

export class MainService {
  public jwtHelper = new JwtHelperService();
  public getDcodeToken = new EventEmitter();

  constructor(
    @Inject('APIURL') private apiUrl: string,
    @Inject('TOKENNAME') private tokenName: string,
    private router: Router,
    public http: HttpClient
  ) { }

  get(path: string) {
    const url: string = `${this.apiUrl}/${path}`; // ใช้ได้เหมอืนกันกับบรรทัดล่าง ในแบ๊บติส (`) ${xxx} => คือตัวแปร
    //const url: string = this.apiUrl+'/'+path;
    //return this.http.get(url).toPromise();
    return this.http.get<any>(url).subscribe();
  }

  post(path: string, data: any) {
    const url: string = `${this.apiUrl}/${path}`;
    //const url: string = this.apiUrl+'/'+path;
    return this.http.post(url, data).toPromise();
  }

  getUrl(url: string, data: any) { // ใส่ url http:// มาเลยเต็มๆ จากข้างนอก
    //return this.http.get(url);//.toPromise();
    return this.http.get(url);//.toPromise();
    //return this.http.get(url).Observable.of();
  }

  getData(url: string) {
    return this.http.get(url, { responseType: 'text' });
  }

  postUrl(url: string, data: any) {
    return this.http.post(url, data);//.toPromise();
  }

  in_array(str: any, array: Array<any>): boolean {
    return array.indexOf(str) >= 0;
  }

  logout() {
    //alert('logout');
    //localStorage.removeItem(this.tokenName);
    this.router.navigate(['/login']);
  }

  decodeToken() {
    const token = JSON.parse(localStorage.getItem(this.tokenName)!);
    try {
      if (!this.jwtHelper.isTokenExpired(token)) {
        const decode = JSON.parse(this.jwtHelper.decodeToken(token));
        return decode;
      } else {
        this.logout();
        return false;
      }
    } catch (err) {
      this.logout();
      return false;
    }
  }


}

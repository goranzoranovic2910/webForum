import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

  constructor(private cookieService:CookieService, private http:Http, private router:Router) {

  }

  userLoggedIn(){
    return this.cookieService.get('CurrentUser') != null;
  }

  logOut(){
    this.cookieService.remove('CurrentUser');
    this.cookieService.remove('CurrentUserId');
    this.cookieService.remove('CurrentUserType');
  }

  login(username:string, password:string){

    let bodyString = JSON.stringify({ username:username, password:password});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.post("http://localhost/webForum/src/server/korisnik/login.php", bodyString, options)
          .map((res:Response) => res.json())
          .subscribe(response => {
            console.log(response);
            if(response.result=="true"){
              this.cookieService.put('CurrentUser', username);
              this.cookieService.put('CurrentUserId', response.id);
              this.cookieService.put('CurrentUserType', response.tip);
              this.router.navigate(['/kategorije']);
            }
            else{
              this.router.navigate(['/login']);
            }
          });
  }

  userType(){
    return this.cookieService.get('CurrentUserType');
  }

  userId(){
    return this.cookieService.get('CurrentUserId');
  }

  userName(){
    return this.cookieService.get('CurrentUser');
  }

  isAdmin(){
    return this.userType() == "2";
  }

}

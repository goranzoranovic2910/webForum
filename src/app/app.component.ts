import { Component, OnInit, AfterViewChecked, ViewChild } from '@angular/core';
import { UserService } from './user-service.service';
import { Korisnik } from './model/korisnik';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked{
  title = 'WEB forum';
  korisnickoime: string;
  korisnikid:string;
  isAdmin:boolean;

  // Query for a VIEW child of type `LoginComponent`
   @ViewChild(LoginComponent) viewChild: LoginComponent;

  constructor(private userService:UserService){
      this.korisnickoime = this.userService.userName();
      this.korisnikid = this.userService.userId();
      this.isAdmin = this.userService.isAdmin();
  }

  ngAfterViewChecked(){
    this.korisnickoime = this.userService.userName();
    this.korisnikid = this.userService.userId();
    this.isAdmin = this.userService.isAdmin();
  }
}

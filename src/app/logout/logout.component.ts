import { Component } from '@angular/core';
import { UserService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent{

  constructor(private userService:UserService, private router:Router) {

  }

  logOut(){
    this.userService.logOut();
    this.router.navigate(['login']);
  }
}

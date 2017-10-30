import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  korisnickoime:string;
  lozinka:string;

  constructor(private userService:UserService) { }

  ngOnInit() {
  }
  
  login(){
    this.userService.login(this.korisnickoime, this.lozinka);
  }
}

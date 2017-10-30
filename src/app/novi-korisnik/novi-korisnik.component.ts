import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Korisnik } from '../model/korisnik';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-novi-korisnik',
  templateUrl: './novi-korisnik.component.html',
  styleUrls: ['./novi-korisnik.component.css']
})
export class NoviKorisnikComponent {
  korisnik:Korisnik;
  tipovi=[
    {id:'1', ime:'Regularan'},
    {id:'2', ime:'Administrator'}
  ];

   constructor(private http: Http, private router:Router, private activatedRoute:ActivatedRoute, private userService:UserService){
     this.korisnik = { id:0, ime:'', prezime:'', korisnickoime:'', lozinka:'', blokiran:false, blokirando:'', tip:1 };
   }

   dodajKorisnika(){

     let bodyString = JSON.stringify(this.korisnik);
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });

     this.http.post("http://localhost/webForum/src/server/korisnik/postKorisnik.php", bodyString, options)
                             .map((res:Response) => res.json())
                             .subscribe(response => {
                               console.log(response);
                               if(response.result=="success"){
                                 console.log(this.router);
                                 this.router.navigate(['']);
                               }
                               else{
                                 console.log("Error!");
                                 alert(response);
                               }
                             });
   }

}

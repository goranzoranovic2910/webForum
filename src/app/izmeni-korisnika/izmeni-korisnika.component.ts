import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Korisnik } from '../model/korisnik';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-izmeni-korisnika',
  templateUrl: './izmeni-korisnika.component.html',
  styleUrls: ['./izmeni-korisnika.component.css']
})
export class IzmeniKorisnikaComponent {

  name = 'Izmena korisnika';
  korisnik:Korisnik;
  tipovi=[
    {id:'1', ime:'Regularan'},
    {id:'2', ime:'Administrator'}
  ];

   constructor(private http: Http, private router:Router, private activatedRoute:ActivatedRoute){
     this.korisnik = { id:1, ime:'', prezime:'', korisnickoime:'', lozinka:'', blokiran:false, blokirando:'', tip:1 };

     this.activatedRoute.params.subscribe(params =>
       this.http.get('http://localhost/webForum/src/server/korisnik/getOneKorisnik.php?id='+params['id'])
       .map(response =>response.json())
       .subscribe(result => {this.korisnik = result; console.log(this.korisnik);}));
   }

   izmeniKorisnika(){

     let bodyString = JSON.stringify(this.korisnik);
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });

     this.http.post("http://localhost/webForum/src/server/korisnik/putKorisnik.php", bodyString, options)
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

   compareTip(t1, t2):boolean{
      return t1 && t2? t1.id == t2.id : false;
   }
}

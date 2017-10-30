import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Komentar } from '../model/komentar';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-novi-komentar',
  templateUrl: './novi-komentar.component.html',
  styleUrls: ['./novi-komentar.component.css']
})
export class NoviKomentarComponent implements OnInit {
  komentar:Komentar;

   constructor(private http: Http, private router:Router, private activatedRoute:ActivatedRoute){
     this.komentar = { id:0, tekst:'', korisnickoime:'', korisnikid:0, temaid:0 };
   }

   ngOnInit() {

     this.activatedRoute.params.subscribe(params =>
       {
         this.komentar.temaid = params['temaid'];
         this.komentar.korisnikid = params['korisnikid'];
         console.log(this.komentar);
       });
   }

   dodajKomentar(){

     let bodyString = JSON.stringify(this.komentar);
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });

     this.http.post("http://localhost/webForum/src/server/komentar/postKoment.php", bodyString, options)
                             .map((res:Response) => res.json())
                             .subscribe(response => {
                               console.log(response);
                               if(response.result=="success"){
                                 console.log(this.router);
                                 this.router.navigate(['/lista-komentara/'+this.komentar.temaid + '/' + this.komentar.korisnikid]);
                               }
                               else{
                                 console.log("Error!");
                                 alert(response);
                               }
                             });
   }
}

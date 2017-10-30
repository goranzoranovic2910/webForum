import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Komentar } from '../model/komentar';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-izbrisi-komentar',
  templateUrl: './izbrisi-komentar.component.html',
  styleUrls: ['./izbrisi-komentar.component.css']
})
export class IzbrisiKomentarComponent {
  komentar:Komentar;

   constructor(private http: Http, private router:Router, private activatedRoute:ActivatedRoute){
     this.komentar = { id:0, tekst:'', temaid:0, korisnikid:0, korisnickoime:'' };

     this.activatedRoute.params.subscribe(params =>
       this.http.get('http://localhost/webForum/src/server/komentar/getOneKoment.php?id='+params['id'])
       .map(response =>response.json())
       .subscribe(result => {this.komentar = result; console.log(this.komentar);}));
   }

    obrisiKomentar(){

      let bodyString = JSON.stringify(this.komentar);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      this.http.post("http://localhost/webForum/src/server/komentar/deleteKoment.php", bodyString, options)
                              .map((res:Response) => res.json())
                              .subscribe(response => {
                                console.log(response);
                                if(response.result=="success"){
                                  console.log(this.router);
                                  this.router.navigate(['/lista-komentara/'+this.komentar.temaid+'/'+this.komentar.korisnikid]);
                                }
                                else{
                                  console.log("Error!");
                                  alert(response);
                                }
                              });
    }

}

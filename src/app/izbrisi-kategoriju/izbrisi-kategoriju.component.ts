import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Kategorija } from '../model/kategorija';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-izbrisi-kategoriju',
  templateUrl: './izbrisi-kategoriju.component.html',
  styleUrls: ['./izbrisi-kategoriju.component.css']
})
export class IzbrisiKategorijuComponent {

  kategorija:Kategorija;

   constructor(private http: Http, private router:Router, private activatedRoute:ActivatedRoute){
     this.kategorija = { id:0, naziv:'', opis:'' };

     this.activatedRoute.params.subscribe(params =>
       this.http.get('http://localhost/webForum/src/server/Kategorija/getOneKat.php?id='+params['id'])
       .map(response =>response.json())
       .subscribe(result => {this.kategorija = result; console.log(this.kategorija);}));
   }

    obrisiKategoriju(){

      let bodyString = JSON.stringify(this.kategorija);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      this.http.post("http://localhost/webForum/src/server/Kategorija/deleteKat.php", bodyString, options)
                              .map((res:Response) => res.json())
                              .subscribe(response => {
                                console.log(response);
                                if(response.result=="success"){
                                  console.log(this.router);
                                  this.router.navigate(['/kategorije']);
                                }
                                else{
                                  console.log("Error!");
                                  alert(response);
                                }
                              });
    }
}

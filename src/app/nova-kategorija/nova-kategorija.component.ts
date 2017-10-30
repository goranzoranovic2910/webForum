import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Kategorija } from '../model/kategorija';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-nova-kategorija',
  templateUrl: './nova-kategorija.component.html',
  styleUrls: ['./nova-kategorija.component.css']
})

export class NovaKategorijaComponent {

  kategorija:Kategorija;

   constructor(private http: Http, private router:Router){
     this.kategorija = { id:0, naziv:'', opis:'' };
   }

   dodajKategoriju(){

     let bodyString = JSON.stringify(this.kategorija);
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });

     this.http.post("http://localhost/webForum/src/server/Kategorija/postKat.php", bodyString, options)
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

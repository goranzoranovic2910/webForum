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
  selector: 'app-izmeni-kategoriju',
  templateUrl: './izmeni-kategoriju.component.html',
  styleUrls: ['./izmeni-kategoriju.component.css']
})
export class IzmeniKategorijuComponent implements OnInit {
  name = 'Izmena kategorije';
  kategorija:Kategorija;

   constructor(private http: Http, private router:Router, private activatedRoute:ActivatedRoute){
     this.kategorija = { id:0, naziv:'', opis:'' };

     this.activatedRoute.params.subscribe(params =>
       this.http.get('http://localhost/webForum/src/server/Kategorija/getOneKat.php?id='+params['id'])
       .map(response =>response.json())
       .subscribe(result => {this.kategorija = result; console.log(this.kategorija);}));
   }

   ngOnInit(){

   }

   izmeniKategoriju(){

     let bodyString = JSON.stringify(this.kategorija);
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });

     this.http.post("http://localhost/webForum/src/server/Kategorija/putKat.php", bodyString, options)
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

import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Tema } from '../model/tema';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-nova-tema',
  templateUrl: './nova-tema.component.html',
  styleUrls: ['./nova-tema.component.css']
})
export class NovaTemaComponent implements OnInit{

  tema:Tema;

   constructor(private http: Http, private router:Router, private activatedRoute:ActivatedRoute){
     this.tema = { id:0, naziv:'', opis:'', korisnikid:0, kategorijaid:0 };
   }

   ngOnInit() {

     this.activatedRoute.params.subscribe(params =>
       {
         this.tema.kategorijaid = params['kategorijaid'];
         this.tema.korisnikid = params['korisnikid'];
         console.log(this.tema);
       });
   }

   dodajTemu(){

     let bodyString = JSON.stringify(this.tema);
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });

     this.http.post("http://localhost/webForum/src/server/Tema/postTema.php", bodyString, options)
                             .map((res:Response) => res.json())
                             .subscribe(response => {
                               console.log(response);
                               if(response.result=="success"){
                                 console.log(this.router);
                                 this.router.navigate(['/lista-tema/'+this.tema.kategorijaid + '/' + this.tema.korisnikid]);
                               }
                               else{
                                 console.log("Error!");
                                 alert(response);
                               }
                             });
   }

}
